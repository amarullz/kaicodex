var homeCrypt=(function(){
  function rc4(key, str) {
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
  }
  function replaceChars(s,f,r){
    let i = f.length;
    let m = {};
    while (i-- && (m[f[i]] = r[i])){}
    return s.split("").map(v=>m[v]||v).join('');
  }
  var l=256;
  var e=255;
  var z=replaceChars;
  var k=rc4;
  function q(t){
    return String.fromCharCode.apply(null, t);
  }
  function L(t){
    return t.split('').map(function(t){return t.charCodeAt(0)});
  }
  function G(t) {
    t=q(t);
    t=btoa(t);
    t=z(t, 'KvBdwXuUkRHZcDI/oO5G', 'dRKI/BHvODouXUkwcZG5');
    return L(t);
  }
  function c(t) {
      return L(k(atob('Em1ZpYF1Ax9gadzPQyFvF4Hyx8z7309xS+LzAcMaWpw='), q(t)));
  }
  function V(t) {
      return t = q(t),
      t = btoa(t),
      t = z(t,'O2sNPFrinbmStXwpYCTJ', 'JSimrbtpnFCONXPsTwY2'),
      L(t);
  }
  function A(t) {
      return L(k(atob('v3uJd+6fMuKS8PvpBXIb02Tmy6Z6evp2RUgqm1e0oJU='), q(t)))
  }
  function Z(t) {
      var i;
      return t = q(t),
      t = btoa(t),
      t = z(t, 'BpRlQXnYhPaWAd6T8wb0', 'YbwXla6ndBWh80RAPTpQ'),
      L(t);
  }
  function ct(t) {
      var i = [arguments]
        , n = 3
        , s = 8;
      return (i[0][0] << n | i[0][0] >>> s - 3) & e
  }
  function b(t){
    var i=[arguments],n=189;return(i[0][0]-n+l)%l
  }
  function rt(t){
    var i=[arguments],n=6,s=8,r=6;return(i[0][0]>>>n|i[0][0]<<s-r)&e
  }
  function g(t){
    var i=[arguments],n=126;
    return i[0][0]^n
  }
  function tt(t){
    return ~arguments[0]&e
  }
  function dt(t){
    var i=[arguments],n=64;
    return(i[0][0]+n)%l
  }
  function wt(t){
    var i=[arguments],n=6,s=8,r=6;
    return(i[0][0]>>>n|i[0][0]<<s-r)&e
  }
  function X(t) {
      var i = [arguments]
        , n = 7
        , s = 8
        , r = 7;
      return (i[0][0] << n | i[0][0] >>> s - r) & e
  }
  function et(t) {
    var i;
    for ((i = [arguments])[1] = i[0][0].length,
    i[3] = atob('POzIAnCVMaq41fryul8RBYgSFIuZLnGlV8qLSp0IUbw='),
    i[9] = atob('k3cNuA23jL3hiQ=='),
    16,
    i[5] = 0; i[5] < i[1]; i[5]++) {
        i[7] = i[0][0][i[5]];
        var n = 7
          , s = 5
          , r = 32;
        switch (i[7] = i[n] ^ i[3].charCodeAt(i[s] % r), i[5] % 10) {
        case 0:
            i[7] = ct(i[7]);
            break;
        case 1:
            i[7] = b(i[7]);
            break;
        case 2:
            i[7] = rt(i[7]);
            break;
        case 3:
            i[7] = g(i[7]);
            break;
        case 4:
            i[7] = tt(i[7]);
            break;
        case 5:
            i[7] = b(i[7]);
            break;
        case 6:
            i[7] = dt(i[7]);
            break;
        case 7:
            i[7] = wt(i[7]);
            break;
        case 8:
            i[7] = g(i[7]);
            break;
        case 9:
            i[7] = X(i[7]);
            break
        }
        i[0][0][i[5]] = i[7] & e
    }
    for (i[5] = 0; i[5] < 10; i[5]++){
      i[0][0].unshift(i[9].charCodeAt(i[5]));
    }
    return i[0][0]
  }
  function m(t) {
    var i = [arguments];
    return L(k(atob('ggcw7GCZcqZcbtRnbbqD2ZHlW0yA+nnHwr2uI6NL1NM='), q(i[0][0])))
  }
  function Lt(t) {
      var i = [arguments];
      return i[1] = q(i[0][0]),
      i[1] = btoa(i[1]),
      i[1] = z(i[1], 'I7cNACvMxoHna3ZkbuT1', 'MANInC7xuZcakvH1Tob3'),
      L(i[1])
  }
  function x(t) {
      var i = [arguments];
      return L(k(atob('xlbm5Ypt/qqwaM98pA+o5tqguLLjw3wi0c9C3/le3uA='), q(i[0][0])))
  }
  function gt(t) {
      var i;
      return (i = [arguments])[6] = q(i[0][0]),
      i[6] = btoa(i[6]),
      i[6] = z(i[6], '5qECPrlS1pVIms46+W2O', 'plEsI+CrmPS24OV56W1q'),
      L(i[6])
  }
  function P(t) {
    return btoa(t).replace(/\//g, '_').replace(/\+/g, '-').replace(/\=/g, '');
  }
  function encode$(t) {
    t=encodeURIComponent(t);
    t = L(t);
    t = G(t);
    t = c(t); //
    t = V(t); //
    t = A(t); //
    t = Z(t); //
    t = et(t);
    t = m(t);
    t = Lt(t);
    t = x(t);
    t = gt(t);
    t = q(t);
    return P(t);
  }
  function p(t) {
    return atob(t.replace(/_/g, '/').replace(/-/g, '+'));
  }
  function Y(t) {
      var i;
      return (i = [arguments])[3] = q(i[0][0]),
      i[3] = z(i[3], 'plEsI+CrmPS24OV56W1q', '5qECPrlS1pVIms46+W2O'),
      i[3] = atob(i[3]),
      L(i[3])
  }
  function ht(t) {
      var i;
      return (i = [arguments])[3] = q(i[0][0]),
      i[3] = z(i[3], 'MANInC7xuZcakvH1Tob3', 'I7cNACvMxoHna3ZkbuT1'),
      i[3] = atob(i[3]),
      L(i[3])
  }
  function F(t){
    var i=[arguments],n=3,s=8,r=3;return(i[0][0]>>>n|i[0][0]<<s-r)&e
  }
  function M(t){
    return(t+189)%l
  }
  function O(t) {
      var i = [arguments]
        , n = 6
        , s = 8
        , r = 6;
      return (i[0][0] << n | i[0][0] >>> s - r) & e
  }
  function B(t){
    var i=[arguments],
    n=126;return i[0][0]^n
  }
  function Ct(t){
    var i=[arguments],n=64;return(i[0][0]-n+l)%l
  }
  function W(t){
    var i=[arguments],
    n=6,s=8,r=6;return(i[0][0]<<n|i[0][0]>>>s-r)&e
  }
  function lt(t){
    var n=7,s=8,r=7;
    return (t>>>n|t<<s-r)&e
  }
  function VT(t) {
    var i;
    for ((i = [arguments])[2] = 0; i[2] < 10; i[2]++){
        i[0][0].shift();
    }
    for (i[6] = atob('POzIAnCVMaq41fryul8RBYgSFIuZLnGlV8qLSp0IUbw='),
    i[3] = i[0][0].length,
    i[1] = 0; i[1] < i[3]; i[1]++) {
        switch (i[7] = i[0][0][i[1]],i[1] % 10) {
        case 0:
            i[7] = F(i[7]);
            break;
        case 1:
            i[7] = M(i[7]);
            break;
        case 2:
            i[7] = O(i[7]);
            break;
        case 3:
            i[7] = B(i[7]);
            break;
        case 4:
            i[7] = tt(i[7]);
            break;
        case 5:
            i[7] = M(i[7]);
            break;
        case 6:
            i[7] = Ct(i[7]);
            break;
        case 7:
            i[7] = W(i[7]);
            break;
        case 8:
            i[7] = B(i[7]);
            break;
        case 9:
            i[7] = lt(i[7]);
            break
        }
        i[7] = i[7] ^ i[6].charCodeAt(i[1] % 32),
        i[0][0][i[1]] = i[7] & e
    }
    return i[0][0]
  }
  function at(t) {
      var i;
      return (i = [arguments])[8] = q(i[0][0]),
      i[8] = z(i[8], 'YbwXla6ndBWh80RAPTpQ', 'BpRlQXnYhPaWAd6T8wb0'),
      i[8] = atob(i[8]),
      L(i[8])
  }
  function ft(t){
    var i;
    return(i=[arguments])[9]=q(i[0][0]),i[9]=z(i[9],'JSimrbtpnFCONXPsTwY2', 'O2sNPFrinbmStXwpYCTJ'),
      i[9]=atob(i[9]),L(i[9])
  }
  function st(t){
    var i;
    return(i=[arguments])[8]=q(i[0][0]),
    i[8]=z(i[8],'dRKI/BHvODouXUkwcZG5', 'KvBdwXuUkRHZcDI/oO5G'),
    i[8]=atob(i[8]),L(i[8])}

  function decrypt$(t) {
    var i;
    return (i = [arguments])[0][0] = p(i[0][0]),
    i[6] = L(i[0][0]),
    i[6] = Y(i[6]),
    i[6] = x(i[6]),
    i[6] = ht(i[6]),
    i[6] = m(i[6]),
    i[6] = VT(i[6]),
    i[6] = at(i[6]),
    i[6] = A(i[6]),
    i[6] = ft(i[6]),
    i[6] = c(i[6]),
    i[6] = st(i[6]),
    i[0][0] = q(i[6]),
    decodeURIComponent(i[0][0])
  }
  return {enc:encode$, dec:decrypt$};
})();

function kaiCodexInit(keys){
  // var homeKeys=[];
  var megaKeys=[];
  // for (var i=0;i<keys.kai.length;i++){
  //     homeKeys[i]=[];
  //     for (var j=0;j<keys.kai[i].length;j++){
  //         homeKeys[i].push(atob(keys.kai[i][j]));
  //     }
  // }
  for (var i=0;i<keys.mega.length;i++){
      megaKeys[i]=[];
      for (var j=0;j<keys.mega[i].length;j++){
          megaKeys[i].push(atob(keys.mega[i][j]));
      }
  }
  // function encrypt$(n){
  //   n = encodeURIComponent(n);
  //   var kl=homeKeys[0].length;
  //   for (var j=0;j<kl;j++){
  //     var o = [];
  //     var l = n.length;
  //     for (var i = 0; i < l; i++) {
  //         var ky=homeKeys[n.charCodeAt(i)][j];
  //         o.push(ky.charAt(i%ky.length));
  //     }
  //     n=btoa(o.join(''));
  //   }
  //   return n.replace(/\//g, '_').replace(/\+/g, '-').replace(/\=/g, '');
  // }
  // function decrypt$(n){
  //   n = n.replace(/_/g, '/').replace(/-/g, '+');
  //   var kl=homeKeys[0].length;
  //   for (var j=0;j<kl;j++){
  //     n=atob(n);
  //     var l = n.length;
  //     var o = [];
  //     for (var i = 0; i < l; i++) {
  //         var c=n.charAt(i);
  //         for (var k=0;k<homeKeys.length;k++){
  //             var ky=homeKeys[k][kl-(j+1)];
  //             var ck=ky.charAt(i%ky.length);
  //             if (ck===c){
  //                 c=String.fromCharCode(k);
  //                 break;
  //             }
  //         }
  //         o.push(c);
  //     }
  //     n=o.join('')
  //   }
  //   return decodeURIComponent(n);
  // }
  function megaDec(n){
    n=n.replace(/_/g, '/').replace(/-/g, '+');
    var kl=megaKeys[0].length;
    for (var j=1;j<kl;j++){
      console.log("ATOB = "+j+" -> "+n);
      n=atob(n);
      var o = [];
      var l = n.length;
      for (var i = 0; i < l; i++) {
          var np=n.charCodeAt(i);
          var ckey=megaKeys[np][j];
          o.push(ckey.charCodeAt(i%ckey.length));
      }
      n=String.fromCharCode.apply(null,o);
    }
    return decodeURIComponent(n);
  }



  window.KAICODEX={
    enc:homeCrypt.enc,
    dec:homeCrypt.dec,
    decMega:megaDec
  };
}
$ap('https://raw.githubusercontent.com/amarullz/kaicodex/refs/heads/main/generated/gen/keys-hash.json?'+$time(),function(r){
  if (r.ok){
    var hash=JSON.parse(r.responseText);
    var cacheArg="?"+$time();
    if (hash.hash==localStorage.getItem('kaicodex_hash')){
      cacheArg="";
      var cachedKey=localStorage.getItem('kaicodex_key');
      if (cachedKey){
        try{
          var keys=JSON.parse(cachedKey);
          if (keys && keys.kai && keys.mega){
            kaiCodexInit(keys);
            return;
          }
        }catch(e){}
      }
    }
    $ap('https://raw.githubusercontent.com/amarullz/kaicodex/refs/heads/main/generated/gen/keys.json'+cacheArg,function(r){
      if (r.ok){
        kaiCodexInit(JSON.parse(r.responseText));
        try{
          localStorage.setItem('kaicodex_hash',hash.hash);
          localStorage.setItem('kaicodex_key',r.responseText);
        }catch(e){}
      }
    });
  }
});
