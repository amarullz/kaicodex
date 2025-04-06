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
 * Filename    : index.js
 * Description : Main code
 *
 */
import decodex from './decodex.js';
import codexhelper from './codexhelper.js';
import fs from 'fs';

/* configs */
const url_kai_base="https://animekai.to";
const url_kai_home=url_kai_base+"/home";

/* get kai home data */
async function get_kai_home() {
    try{
        console.log("Fetching: " + url_kai_home);
        const response = await fetch(url_kai_home);
        const html = await response.text();

        /* get bundle.js url */
        let bundlepos=html.indexOf("bundle.js?");
        let fromBundle=html.substring(0,bundlepos);
        let bundleSrcPos=fromBundle.lastIndexOf("src=")+5;
        let bundleSrc=html.substring(bundleSrcPos);
        let bundleUrl=bundleSrc.substring(0,bundleSrc.indexOf('"'));

        /* get data-id from html */
        let datid=[];
        html.match(/data\-id\=\"([a-zA-Z0-9\-_]+)\"/g).forEach((v) => {
            let id = v.substring(v.indexOf('"') + 1, v.lastIndexOf('"'));
            datid.push(id);
        });
        let datvalid=[];
        for (let i=1;i<7;i++){
            datvalid.push(datid[i]);
        }
        let o= {
            ids:datvalid,
            bundle:bundleUrl
        };
        console.log("Kai Home Result:");
        console.log(o);
        return o;
    }
    catch(e){
        console.log("Error get_kai_home: "+e);
    }
    return null;
}

/* get episodes from anime id */
async function get_kai_episodes(codex,id) {
    try{
        let url=url_kai_base+"/ajax/episodes/list?ani_id="+encodeURIComponent(id)+"&_="+codexhelper.codexed(codex.encrypt, id);
        console.log("Fetching Episodes: " + url);
        const response = await fetch(url);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        if (!data){
            return null;
        }
        if (data.status==200){
            let token=[];
            data.result.match(/token\=\"([a-zA-Z0-9\-_]+)\"/g).forEach((v) => {
                let id = v.substring(v.indexOf('"') + 1, v.lastIndexOf('"'));
                token.push(id);
            });

            for (let i=0;i<token.length;i++){
                let epUrl=url_kai_base+"/ajax/links/list?token="+encodeURIComponent(token[i])+"&_="+codexhelper.codexed(codex.encrypt,token[i]);
                console.log("Fetching Episode: " + epUrl);
                const resEp = await fetch(epUrl);
                if (resEp.ok){
                    const datEp = await resEp.json();
                    if (datEp){
                        if (datEp.status==200){
                            let lid=[];
                            datEp.result.match(/data\-lid\=\"([a-zA-Z0-9\-_]+)\"/g).forEach((v) => {
                                let id = v.substring(v.indexOf('"') + 1, v.lastIndexOf('"'));
                                lid.push(id);
                            });
                            if (lid.length>0){
                                return lid;
                            }
                        }
                    }
                }
            }
        }
    }catch(e){
        console.log("Error get_kai_episodes: "+e);
    }
    return null;
}

/* get episodes server */
async function get_kai_stream(codex,lid) {
    try{
        let url=url_kai_base+"/ajax/links/view?id="+encodeURIComponent(lid)+"&_="+codexhelper.codexed(codex.encrypt, lid);
        console.log("Fetching Kai Stream: " + url);
        const response = await fetch(url);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        if (!data){
            return null;
        }
        if (data.status==200){
            let out=JSON.parse(codexhelper.codexed(codex.decrypt,data.result));
            return out;
        }
    }catch(e){
        console.log("Error get_kai_stream: "+e);
    }
    return null;
}

/* get mega app.js */
async function get_megaup_embed(url) {
    try{
        console.log("Fetching: " + url);
        const response = await fetch(url,{
            referrer: url_kai_base+"/"
        });
        if (!response.ok) {
            return null;
        }

        const html = await response.text();
        if (!html){
            return null;
        }
        /* get app.js url */
        let bundlepos=html.indexOf("app.js?");
        let fromBundle=html.substring(0,bundlepos);
        let bundleSrcPos=fromBundle.lastIndexOf("src=")+5;
        let bundleSrc=html.substring(bundleSrcPos);
        let bundleUrl=bundleSrc.substring(0,bundleSrc.indexOf('"'));

        let urv=new URL(url);
        return urv.origin+"/"+bundleUrl;
    }catch(e){
        console.log("Error get_megaup_embed: "+e);
    }
    return null;
}

/* get home data */
let kaihome=await get_kai_home();
if (!kaihome){
    console.log("No Kai Home found!");
    process.exit(1);
}

/* generate codex */
let kaicodex=await decodex(kaihome.bundle);
if (!kaicodex){
    console.log("No Kai codex generated!");
    process.exit(1);
}

let megaurl=null;
/* get episodes servers */
for (let i=0;i<kaihome.ids.length;i++){
    let lid=await get_kai_episodes(kaicodex,kaihome.ids[0]);
    if (lid){
        let ret=null;
        for (let j=0;j<lid.length;j++){
            ret=await get_kai_stream(kaicodex,lid[i]);
            if (ret){
                break;
            }
        }
        if (ret){
            megaurl=ret.url;
            break;
        }
    }
}

/* No mega URL found */
if (!megaurl){
    console.log("No Mega URL found!");
    process.exit(1);
}

let megaup_appjs=await get_megaup_embed(megaurl);
console.log("Megaup App.js: "+megaup_appjs);
if (!megaup_appjs){
    console.log("No Mega app.js found!");
    process.exit(1);
}

let megacodex=await decodex(megaup_appjs);
if (!megacodex){
    console.log("No Megaup codex generated!");
    process.exit(1);
}

/* Bundle Codex */
let allCodex={
    kai:kaicodex,
    megaup:megacodex
};

console.log("All Codex Sucessfully generated!");
fs.writeFileSync("./generated/kai_codex.json",JSON.stringify(allCodex));

console.log("Generating KaiCodex JS Class...");
let template=`const KAICODEX = {
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
  safeBtoa: function (s) {
    return btoa(s).replace(/\\//g, '_').replace(/\\+/g, '-').replace(/\\=/g, '');
  },
  safeAtob: function (s) {
    return atob(s.replace(/_/g, '/').replace(/-/g, '+'));
  },
  reverseString: function (s) {
    return s.split('').reverse().join('');
  },
  replaceChars: function (s, f, r) {
    let i = f.length;
    let m = {};
    while (i-- && (m[f[i]] = r[i])) { }
    return s.split("").map(v => m[v] || v).join('');
  },
  enc(n) { `+codexhelper.codex_fn(kaicodex.encrypt)+` },
  dec(n) { `+codexhelper.codex_fn(kaicodex.decrypt)+` },
  decMega(n) { `+codexhelper.codex_fn(megacodex.decrypt)+` }
};
`;

fs.writeFileSync("./generated/kai_codex.js",template);
console.log("KaiCodex JS Class generated!");
