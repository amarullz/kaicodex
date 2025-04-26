const KAICODEX = {
  safeBtoa: function (s) {
    return btoa(s).replace(/\//g, '_').replace(/\+/g, '-').replace(/\=/g, '');
  },
  safeAtob: function (s) {
    return atob(s.replace(/_/g, '/').replace(/-/g, '+'));
  },
  homefn: (function () {
    var f = [
      [0, 88], [0, 33], [0, 234], [4, 1, 7], [0, 101], [2, 188], [2, 45], [2, 74], 
      [2, 232], [2, 208], [2, 124], [0, 110], [2, 211], [2, 9], [0, 153], [0, 140], 
      [3, 255], [4, 6, 2], [4, 4, 4], [4, 7, 1], [4, 3, 5], [4, 4, 4], [0, 92], 
      [0, 39], [0, 97], [3, 255], [0, 65], [0, 213], [0, 199], [0, 110]
    ];
    function encrypt$(n) {
      n = encodeURIComponent(n);
      var out = [];
      var fx = [
        function (a, b) { return (a + b) % 256 }, /* add */
        function (a, b) { return (a * b) & 256 }, /* sum */
        function (a, b) { return a ^ b },  /* xor */
        function (a, b) { return ~a & b }, /* not */
        function (a, b, c) { return (a << b | a >> c) & 255; } /* bitwise */
      ];
      for (var i = 0; i < n.length; i++) {
        var fn = f[i % f.length];
        out.push(fx[fn[0]](n.charCodeAt(i), fn[1], fn[2]));
      }
      return KAICODEX.safeBtoa(String.fromCharCode.apply(null, out));
    }
    function decrypt$(n) {
      n = KAICODEX.safeAtob(n);
      var out = [];
      var fx = [
        function (a, b) { return (a - b + 256) % 256 }, /* add */
        function (a, b) { return (a / b) & 256 }, /* div */
        function (a, b) { return a ^ b },  /* xor */
        function (a, b) { return ~a & b }, /* not */
        function (a, b, c) { return (a >> b | a << c) & 255; } /* bitwise */
      ];
      for (var i = 0; i < n.length; i++) {
        var fn = f[i % f.length];
        out.push(fx[fn[0]](n.charCodeAt(i), fn[1], fn[2]));
      }
      return decodeURIComponent(String.fromCharCode.apply(null, out));
    }
    return { d: decrypt$, e: encrypt$ };
  })(),
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
  reverseString: function (s) {
    return s.split('').reverse().join('');
  },
  replaceChars: function (s, f, r) {
    let i = f.length;
    let m = {};
    while (i-- && (m[f[i]] = r[i])) { }
    return s.split("").map(v => m[v] || v).join('');
  },
  enc(n) { return KAICODEX.homefn.e(n); },
  dec(n) { return KAICODEX.homefn.d(n); },
  decMega(n) {
    var a = KAICODEX.safeAtob;
    var b = KAICODEX.rc4;
    var c = KAICODEX.replaceChars;
    var d = KAICODEX.reverseString;
    var e = KAICODEX.safeBtoa;
    return decodeURIComponent(d(b("kupXzAFLo8", a(c(d(b("BQuRgrMYmw58", a(c(c(d(b("Vp0cEj9oebuS4nZ", a(a(n)))), "ihAyqmWjYJlfM", "AWmqjYlMhJify"), "qOiv0S5Ew3sYK", "3qiOYsS5EvKw0")))), "HhJo8XcYGUr", "JHUocrhGXY8")))));
  }
};
