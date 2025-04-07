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
 * Filename    : codexhelper.js
 * Description : Decrypt & encrypt helper
 *
 */

/* codex helper */
const codexhelper = {
    rc4: function (key, str) {
        var s = [], j = 0, x, res = '';
        for (var i = 0; i < 256; i++) {
            s[i] = i;
        }
        for (i = 0; i < 256; i++) {
            j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }
        i = 0;
        j = 0;
        for (var y = 0; y < str.length; y++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
            res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
        }
        return res;
    },
    safeb64_encode: function (s) {
        return btoa(s).replace(/\//g, '_').replace(/\+/g, '-').replace(/\=/g, '');
    },
    safeb64_decode: function (s) {
        return atob(s.replace(/_/g, '/').replace(/-/g, '+'));
    },
    reverse: function (s) {
        return s.split('').reverse().join('');
    },
    substitute: function (s, f, r) {
        let i = f.length;
        let m = {};
        while (i-- && (m[f[i]] = r[i])) { }
        return s.split("").map(v => m[v] || v).join('');
    },
    codexed: function(codex, n) {
        for(let i=0;i<codex.length;i++){
            let fn=codex[i];
            if (fn[0]=="urlencode"){
                n=encodeURIComponent(n);
            }
            else if (fn[0]=="urldecode"){
                n=decodeURIComponent(n);
            }
            else if (fn[0]=="safeb64_encode"){
                n=codexhelper.safeb64_encode(n);
            }
            else if (fn[0]=="safeb64_decode"){
                n=codexhelper.safeb64_decode(n);
            }
            else if (fn[0]=="reverse"){
                n=codexhelper.reverse(n);
            }
            else if (fn[0]=="substitute"){
                n=codexhelper.substitute(n,fn[1],fn[2]);
            }
            else if (fn[0]=="rc4"){
                n=codexhelper.rc4(fn[1],n);
            }
        }
        return n;
    },
    codex_fn:function(codex) {
        var cd=`
    var a = KAICODEX.safeAtob;
    var b = KAICODEX.rc4;
    var c = KAICODEX.replaceChars;
    var d = KAICODEX.reverseString;
    var e = KAICODEX.safeBtoa;
    return `;
        var n='n';
        for(let i=0;i<codex.length;i++){
            let fn=codex[i];
            if (fn[0]=="urlencode"){
                n='encodeURIComponent('+n+')';
            }
            else if (fn[0]=="urldecode"){
                n='decodeURIComponent('+n+')';
            }
            else if (fn[0]=="safeb64_encode"){
                n='e('+n+')';
            }
            else if (fn[0]=="safeb64_decode"){
                n='a('+n+')';
            }
            else if (fn[0]=="reverse"){
                n='d('+n+')';
            }
            else if (fn[0]=="substitute"){
                n='c('+n+',"'+fn[1]+'","'+fn[2]+'")';
            }
            else if (fn[0]=="rc4"){
                n='b("'+fn[1]+'",'+n+')';
            }
        }
        return cd+n+';';
    }
};

// module.exports = codexhelper;
export default codexhelper;

