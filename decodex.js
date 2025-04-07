/*
 * Copyright 2025 amarullz.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *______________________________________________________________________________
 *
 * Filename    : decodex.js
 * Description : Decode obfuscated javascript code
 *
 */
import { webcrack } from 'webcrack';

/* Limit to bracket pairs */
function bracketLimit(fn) {
    let nn = 0;
    let pp = 0;
    let fns = fn.split("");
    for (let j = 0; j < fns.length; j++) {
        pp = j;
        if (fns[j] === "{") {
            nn++;
        }
        if (fns[j] === "}") {
            nn--;
            if (nn == 0) {
                pp++;
                break;
            }
        }
    }
    return fn.substring(0, pp).trim();
}

/* Get encryption logic & keys */
async function decodex(jsurl) {
    console.log("Fetching: " + jsurl);
    const response = await fetch(jsurl);
    const data = await response.text();
    console.log("Loaded: " + data.length + " bytes");
    console.log("Starting webcrack...");
    const result = await webcrack(data);
    console.log("Webcrack finished!");
    console.log("Cracked Code length: " + result.code.length + " bytes");

    /* get atob location */
    let atob_pos = result.code.indexOf("atob(");
    if (atob_pos === -1) {
        console.log("FAILED: atob not found in code!");
        return null;
    }

    /* Get url encode/decode local var names */
    let urlencode_match = result.code.match(/var ([A-Za-z0-9]+)[^=]=[^;]+encodeURIComponent;/);
    let urldecode_match = result.code.match(/var ([A-Za-z0-9]+)[^=]=[^;]+decodeURIComponent;/);
    let encodeFn = "encodeURIComponent";
    let decodeFn = "decodeURIComponent";
    if (urlencode_match) {
        encodeFn = urlencode_match[1];
    }
    if (urldecode_match) {
        decodeFn = urldecode_match[1];
    }

    /* get encryption closure code */
    let codex_pos = result.code.substring(0, atob_pos).lastIndexOf("[function") + 1;
    let codex_code = result.code.substring(codex_pos);
    let codex_code_end = codex_code.indexOf("{}],");
    codex_code = codex_code.substring(0, codex_code_end).trim();
    codex_code = codex_code.substring(0, codex_code.length - 1).trim();
    codex_code = bracketLimit(codex_code);

    /* split internal functions */
    let funcs = codex_code.split(/function (?=[a-zA-Z])/);

    /* detect functions types */
    let fnarr = {};
    let encryptFn = null;
    let decryptFn = null;
    let hasreverse = false;
    for (let i = 1; i < funcs.length; i++) {
        let fn = bracketLimit(funcs[i]);
        let fnargpos = fn.indexOf("(");
        let fnames = fn.substring(0, fnargpos).trim();
        let ftype = null;
        if ((fn.indexOf("256") !== -1) && (fn.indexOf("charCodeAt") !== 1)) {
            ftype = "rc4";
        }
        else if (fn.indexOf("atob") !== -1) {
            ftype = "safeb64_decode";
        }
        else if (fn.indexOf("btoa") !== -1) {
            ftype = "safeb64_encode";
        }
        else if (fn.indexOf(".map(") !== -1) {
            ftype = "substitute";
        }
        else if (fn.indexOf(".reverse()") !== -1) {
            ftype = "reverse";
            hasreverse = true;
        }
        else if (fn.indexOf("encodeURIComponent(") !== -1) {
            ftype = "encrypt$";
            fn = fn.replace("encodeURIComponent(", "urlencode(");
            encryptFn = fnames;
        }
        else if (fn.indexOf("decodeURIComponent(") !== -1) {
            ftype = "decrypt$";
            fn = fn.replace("decodeURIComponent(", "urldecode(");
            decryptFn = fnames;
        }
        else if (fn.indexOf(encodeFn + "(") !== -1) {
            ftype = "encrypt$";
            fn = fn.replace(encodeFn + "(", "urlencode(");
            encryptFn = fnames;
        }
        else if (fn.indexOf(decodeFn + "(") !== -1) {
            ftype = "decrypt$";
            fn = fn.replace(decodeFn + "(", "urldecode(");
            decryptFn = fnames;
        }
        if (ftype && fnames) {
            let fnvalue = "function " + ftype + fn.substring(fnargpos).trim();
            eval('fnarr[fnames]={fn:function' + fn.substring(fnargpos).trim() + '};');
            fnarr[fnames].type = ftype;
            fnarr[fnames].code = fnvalue;
        }
    }

    /* function hook */
    /* this will hook the function calls and log the sequence of calls */
    let sequences = [];
    let isEncrypt = true;
    function fn_hook(name, a1, a2, a3) {
        if (name in fnarr) {
            /* function type is detected */
            let callSeq = [];
            callSeq.push(fnarr[name].type);
            if (fnarr[name].type == "rc4") {
                callSeq.push(a1);
            }
            else if (fnarr[name].type == "substitute") {
                callSeq.push(a2);
                callSeq.push(a3);
            }
            sequences.push(callSeq);
        }
        else if (name == "urlencode") {
            sequences.push(['urlencode']);
        }
        else if (name == "urldecode") {
            sequences.push(['urldecode']);
        }
        else {
            /* not detected */
            if (!a2 && !a3) {
                /* single argument function */
                if (isEncrypt && sequences.length == 0) {
                    /* first encryption call is urlencode */
                    sequences.push(['urlencode']);
                }
                else if (!hasreverse) {
                    /* if no reverse function, then it is reverse */
                    sequences.push(["reverse"]);
                }
                else if (isEncrypt) {
                    /* if has reverse, and encrypt then it is safeb64_encode */
                    sequences.push(["safeb64_encode"]);
                }
                else {
                    /* if has reverse, and decrypt then it is safeb64_decode */
                    sequences.push(["safeb64_decode"]);
                }
            }
            else if (a2 && !a3) {
                /* 2 arguments function is rc4*/
                sequences.push(['rc4', a1]);
            }
            else if (a2 && a3) {
                /* 3 arguments function is subtitute */
                sequences.push(['substitute', a2, a3]);
            }
        }
        return a1;
    }

    let out = {};

    /* execute encryption */
    (function () {
        try {
            isEncrypt = true;
            sequences = [];
            let codex = fnarr[encryptFn].code.replace(/([a-zA-Z0-9]+)\(/g, 'fn_hook("$1",');
            eval(codex + "\nencrypt$('teststring');");
            out.encrypt = JSON.parse(JSON.stringify(sequences));
        }
        catch (e) {
            console.log("Encryption failed: " + e.message);
            return null;
        }
    })();

    /* execute decryption */
    (function () {
        try {
            isEncrypt = false;
            sequences = [];
            let codex = fnarr[decryptFn].code.replace(/([a-zA-Z0-9]+)\(/g, 'fn_hook("$1",');
            eval(codex + "\ndecrypt$('teststring');");
            sequences[sequences.length - 1] = ["urldecode"]; // make sure last call is urldecode
            out.decrypt = JSON.parse(JSON.stringify(sequences));
        }
        catch (e) {
            console.log("Decryption failed: " + e.message);
            return null;
        }
    })();

    return out;
}

export default decodex;