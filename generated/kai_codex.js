const KAICODEX = {
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
    return btoa(s).replace(/\//g, '_').replace(/\+/g, '-').replace(/\=/g, '');
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
  enc(n) { 
    var a = KAICODEX.safeAtob;
    var b = KAICODEX.rc4;
    var c = KAICODEX.replaceChars;
    var d = KAICODEX.reverseString;
    var e = KAICODEX.safeBtoa;
    return e(c(e(b("sXmH96C4vhRrgi8",d(d(e(b("kOCJnByYmfI",c(c(d(e(b("0DU8ksIVlFcia2",encodeURIComponent(n)))),"1wctXeHqb2","1tecHq2Xbw"),"48KbrZx1ml","Km8Zb4lxr1"))))))),"hTn79AMjduR5","djn5uT7AMR9h")); },
  dec(n) { 
    var a = KAICODEX.safeAtob;
    var b = KAICODEX.rc4;
    var c = KAICODEX.replaceChars;
    var d = KAICODEX.reverseString;
    var e = KAICODEX.safeBtoa;
    return decodeURIComponent(b("0DU8ksIVlFcia2",a(d(c(c(b("kOCJnByYmfI",a(d(d(b("sXmH96C4vhRrgi8",a(c(a(n),"djn5uT7AMR9h","hTn79AMjduR5"))))))),"Km8Zb4lxr1","48KbrZx1ml"),"1tecHq2Xbw","1wctXeHqb2"))))); },
  decMega(n) { 
    var a = KAICODEX.safeAtob;
    var b = KAICODEX.rc4;
    var c = KAICODEX.replaceChars;
    var d = KAICODEX.reverseString;
    var e = KAICODEX.safeBtoa;
    return decodeURIComponent(d(c(b("DiCVpNw37HFmu",a(b("d1jEi2NIBXoKq",a(d(c(c(d(b("t7Lv6qGR8Pn",a(a(n)))),"BRs5qfvugN1","RBNvfusg5q1"),"J4bdU3XVyB0afrp","b4JrdaVfpXU0yB3")))))),"34MZt1jSx9","j3xSMt14Z9"))); }
};
