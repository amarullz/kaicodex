const KAICODEX = {
  homefn:(function(){
var urlencode=encodeURIComponent;
var urldecode=decodeURIComponent;
function a(n) {
        return (n = (n = btoa(n)).replace(/\+/g, "-").replace(/\//g, "_")).replace(/=+$/, "");
      }
function s(n) {
        var t = n;
        if ((n = 4 - n.length % 4) < 4) {
          t += "=".repeat(n);
        }
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        return atob(t);
      }
function h(n){ return (n + 118) % 256;}
function w(n){ return (n + 111) % 256;}
function L(n){ return (n + 94) % 256;}
function C(n){ return (n + 206) % 256;}
function g(n){ return (n - 190 + 256) % 256;}
function B(n){ return (n - 22 + 256) % 256;}
function y(n){ return n ^ 70;}
function D(n){ return (n + 214) % 256;}
function x(n){ return ~n & 255;}
function l(n){ return n ^ 147;}
function G(n){ return (n + 190) % 256;}
function A(n){ return (n - 118 + 256) % 256;}
function H(n){ return (n + 206) % 256;}
function q(n){ return n ^ 217;}
function b(n){ return n ^ 70;}
function N(n){ return ~n & 255;}
function K(n){ return n ^ 222;}
function j(n){ return (n - 116 + 256) % 256;}
function P(n){ return (n - 206 + 256) % 256;}
function W(n){ return n ^ 222;}
function d(n){ return (n + 146) % 256;}
function m(n){ return (n + 1) % 256;}
function X(n){ return ~n & 255;}
function Y(n){ return (n - 94 + 256) % 256;}
function Z(n){ return ~n & 255;}
function V(n){ return ~n & 255;}
function U(n){ return (n + 212) % 256;}
function T(n){ return ~n & 255;}
function I(n){ return n ^ 147;}
function S(n){ return n ^ 217;}
function E(n){ return ~n & 255;}
function k(n){ return (n << 4 | n >>> 4) & 255;}
function J(n){ return ~n & 255;}
function O(n){ return (n - 96 + 256) % 256;}
function $(n){ return ~n & 255;}
function F(n){ return (n - 62 + 256) % 256;}
function Q(n){ return (n + 227) % 256;}
function R(n){ return ~n & 255;}
function _(n){ return (n - 214 + 256) % 256;}
function n1(n){ return (n - 1 + 256) % 256;}
function t1(n){ return (n - 227 + 256) % 256;}
function i1(n){ return ~n & 255;}
function r1(n){ return ~n & 255;}
function u1(n){ return ~n & 255;}
function c1(n){ return ~n & 255;}
function e1(n){ return (n - 111 + 256) % 256;}
function o1(n){ return (n + 116) % 256;}
function f1(n){ return (n + 96) % 256;}
function s1(n){ return (n + 62) % 256;}
function h1(n){ return ~n & 255;}
function a1(n){ return ~n & 255;}
function v1(n){ return (n - 206 + 256) % 256;}
function z1(n){ return ~n & 255;}
function w1(n){ return (n >>> 4 | n << 4) & 255;}
function L1(n){ return (n - 151 + 256) % 256;}
function C1(n){ return (n + 22) % 256;}
function g1(n){ return (n - 212 + 256) % 256;}
function B1(n){ return ~n & 255;}
function y1(n){ return (n + 151) % 256;}
function D1(n){ return (n - 146 + 256) % 256;}function decrypt$(n) {
        var t = s(n);
        var i = t.length;
        var r = [];
        var u = [e1, g1, q, _, L1, V, E, c1, m, f1, i1, T, H, r1, j, y, l, g, W, h, Q, B1, w1, B, N, Y, D1, a1, C, s1];
        for (var e = 0; e < i; e++) {
          var o = t.charCodeAt(e);
          var o = u[e % u.length](o);
          r.push(o & 255);
        }
        n = String.fromCharCode.apply(null, r);
        return urldecode(n);
      }
function encrypt$(n) {
        var t = "1|3|0|2|4|5".split("|");
        var u = 0;
        for (; true;) {
          switch (t[u++]) {
            case "0":
              var c = [];
              continue;
            case "1":
              var e = urlencode(n);
              continue;
            case "2":
              var o = [w, U, S, D, y1, h1, J, R, n1, O, z1, u1, v1, Z, o1, b, I, G, K, A, t1, $, k, C1, X, L, d, x, P, F];
              continue;
            case "3":
              var f = e.length;
              continue;
            case "4":
              for (var s = 0; s < f; s++) {
                var h = e.charCodeAt(s);
                var h = o[s % o.length](h);
                c.push(h & 255);
              }
              continue;
            case "5":
              return a(String.fromCharCode.apply(null, c));
          }
          break;
        }
      }
return { d:decrypt$, e:encrypt$ };
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
  enc(n) { return KAICODEX.homefn.e(n); },
  dec(n) { return KAICODEX.homefn.d(n); },
  decMega(n) { 
    var a = KAICODEX.safeAtob;
    var b = KAICODEX.rc4;
    var c = KAICODEX.replaceChars;
    var d = KAICODEX.reverseString;
    var e = KAICODEX.safeBtoa;
    return decodeURIComponent(d(b("kupXzAFLo8",a(c(d(b("BQuRgrMYmw58",a(c(c(d(b("Vp0cEj9oebuS4nZ",a(a(n)))),"ihAyqmWjYJlfM","AWmqjYlMhJify"),"qOiv0S5Ew3sYK","3qiOYsS5EvKw0")))),"HhJo8XcYGUr","JHUocrhGXY8"))))); }
};
