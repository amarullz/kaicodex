
(function(){
    function stripLength(n){
        if (n){
            try{
                n=atob(n.replace(/_/g, '/').replace(/-/g, '+'));
                let c=n.substring(0,6);
                let k=(c+n.split(c)[1]);
                return btoa(k);
            }catch(e){

                return '';
            }
        }
        return n;
    }
    let keyo=[];
    let vArr='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-%~!@#$^&*()+={}[]:;"\\\'?/><.,`'.split('');
    window.encodeURIComponentTmp=window.encodeURIComponent;
    window.encodeURIComponent=function(n){ return n };
    for (let j=0;j<vArr.length;j++){
        let specimen=Array(60).fill(vArr[j]).join('');
        specimen=u.v.p(specimen);
        let oval=stripLength(specimen);
        if (oval){
            keyo.push(oval);
        }
        else{
            keyo=null;
            break;
        }
    }
    if (keyo){
        window.__keys=keyo;
    }
    window.encodeURIComponent=window.encodeURIComponentTmp;
})();




var megaKeysSrc=[
  "UIW+vlC+FCiCgtjUIhRuFFAUBRRQCr48kr5Hvvjq",
  "kIa9vZC9JEiEhNnVIRVvJFMkBiSQCb09k71Evfnr",
  "0Ie8vNC8NGiGhtrWIBZwNFI0BzTQCLw+lLxFvPrs",
  "EYi7uxG7RIiIiNvXJxdxRFVECEQRD7s/lbtCu/vt",
  "UYm6ulG6VKiKitzYJhhyVFRUCVRRDrpAlrpDuvzu",
  "kYq5uZG5ZMiMjN3ZJRlzZFdkCmSRDblBl7lAuf3v",
  "0Yu4uNG4dOiOjt7aJBp0dFZ0C3TRDLhCmLhBuP7w",
  "Eoy3txK3hAmQkN/bKxt1hFmEDIQSA7dDmbdOt//x",
  "Uo22tlK2lCmSkuDcKhx2lFiUDZRSArZEmrZPtgDy",
  "ko61tZK1pEmUlOHdKR13pFukDqSSAbVFm7VMtQHz",
  "0o+0tNK0tGmWluLeKB54tFq0D7TSALRGnLRNtAL0",
  "E5CzsxOzxImYmOPfLx95xF3EEMQTB7NHnbNKswP1",
  "U5GyslOy1KmamuTgLiB61FzUEdRTBrJInrJLsgT2",
  "k5KxsZOx5MmcnOXhLSF75F/kEuSTBbFJn7FIsQX3",
  "05OwsNOw9OmenubiLCJ89F70E/TTBLBKoLBJsAb4",
  "FJSvrxSvBQqgoOfjMyN9BUEFFAUUG69Loa9Wrwf5",
  "VJWurlSuFSqioujkMiR+FUAVFRVUGq5Moq5Xrgj6",
  "lJatrZStJUqkpOnlMSV/JUMlFiWUGa1No61UrQn7",
  "1JesrNSsNWqmpurmMCaANUI1FzXUGKxOpKxVrAr8",
  "FZirqxWrRYqoqOvnNyeBRUVFGEUVH6tPpatSqwv9",
  "VZmqqlWqVaqqquzoNiiCVURVGVVVHqpQpqpTqgz+",
  "lZqpqZWpZcqsrO3pNSmDZUdlGmWVHalRp6lQqQ3/",
  "1ZuoqNWodequru7qNCqEdUZ1G3XVHKhSqKhRqA4A",
  "FpynpxanhQuwsO/rOyuFhUmFHIUWE6dTqadepw8B",
  "Vp2mplamlSuysvDsOiyGlUiVHZVWEqZUqqZfphAC",
  "lp6lpZalpUu0tPHtOS2HpUulHqWWEaVVq6VcpRED",
  "WKWenlieFizCwvj0AjSOFnAWJRZYKp5csp5nnhgK",
  "mKadnZidJkzExPn1ATWPJnMmJiaYKZ1ds51knRkL",
  "2KecnNicNmzGxvr2ADaQNnI2JzbYKJxetJxlnBoM",
  "GaibmxmbRozIyPv3BzeRRnVGKEYZL5tftZtimxsN",
  "WamamlmaVqzKyvz4BjiSVnRWKVZZLppgtppjmhwO",
  "maqZmZmZZszMzP35BTmTZndmKmaZLZlht5lgmR0P",
  "2auYmNmYduzOzv76BDqUdnZ2K3bZLJhiuJhhmB4Q",
  "GqyXlxqXhg3Q0P/7CzuVhnmGLIYaI5djuZdulx8R",
  "Wq2WllqWli3S0gD8CjyWlniWLZZaIpZkupZvliAS",
  "mq6VlZqVpk3U1AH9CT2XpnumLqaaIZVlu5VslSET",
  "2q+UlNqUtm3W1gL+CD6Ytnq2L7baIJRmvJRtlCIU",
  "G7CTkxuTxo3Y2AP/Dz+Zxn3GMMYbJ5NnvZNqkyMV",
  "W7GSkluS1q3a2gQADkCa1nzWMdZbJpJovpJrkiQW",
  "m7KRkZuR5s3c3AUBDUGb5n/mMuabJZFpv5FokSUX",
  "27OQkNuQ9u3e3gYCDEKc9n72M/bbJJBqwJBpkCYY",
  "HLSPjxyPBw7g4AcDE0OdB2EHNAccO49rwY92jycZ",
  "XLWOjlyOFy7i4ggEEkSeF2AXNRdcOo5swo53jiga",
  "nLaNjZyNJ07k5AkFEUWfJ2MnNiecOY1tw410jSkb",
  "3LeMjNyMN27m5goGEEagN2I3NzfcOIxuxIx1jCoc",
  "HbiLix2LR47o6AsHF0ehR2VHOEcdP4tvxYtyiysd",
  "XbmKil2KV67q6gwIFkiiV2RXOVddPopwxopziiwe",
  "nbqJiZ2JZ87s7A0JFUmjZ2dnOmedPYlxx4lwiS0f",
  "3buIiN2Id+7u7g4KFEqkd2Z3O3fdPIhyyIhxiC4g",
  "HryHhx6Hhw/w8A8LG0ulh2mHPIceM4dzyYd+hy8h",
  "Xr2Ghl6Gly/y8hAMGkyml2iXPZdeMoZ0yoZ/hjAi",
  "nr6FhZ6Fp0/09BENGU2np2unPqeeMYV1y4V8hTEj",
  "DHTPzwzPAwZgYMfDUwNdAyED9AMMe88rgc82z+fZ",
  "THXOzkzOEyZiYsjEUgReEyAT9RNMes4sgs43zuja",
  "jHbNzYzNI0ZkZMnFUQVfIyMj9iOMec0tg800zenb",
  "zHfMzMzMM2ZmZsrGUAZgMyIz9zPMeMwuhMw1zOrc",
  "DXjLyw3LQ4ZoaMvHVwdhQyVD+EMNf8svhcsyy+vd",
  "TXnKyk3KU6ZqaszIVghiUyRT+VNNfsowhsozyuze",
  "jXrJyY3JY8ZsbM3JVQljYydj+mONfckxh8kwye3f",
  "zXvIyM3Ic+Zubs7KVApkcyZz+3PNfMgyiMgxyO7g",
  "DnzHxw7HgwdwcM/LWwtlgymD/IMOc8czicc+x+/h",
  "Tn3Gxk7GkydyctDMWgxmkyiT/ZNOcsY0isY/xvDi",
  "16OgoNeg9eu+vvbyPDKM9U71I/XXFKBasKBZoBYI",
  "S3HS0kvS0qVaWsTATgBa0jzS8dJLZtIoftIr0uTW",
  "SWna2knaUqRKSry4RvhSUjRS6VJJbtogdtoj2tzO",
  "n8KBgZ+B58/8/BURHVGr52/nQuefNYF5z4F4gTUn",
  "SGXe3kjeEiRCQri0QvROEjAS5RJIat4cct4n3tjK",
  "EIS/vxC/BAiAgNfTIxNtBFEEBAQQC787kb9Gv/fp",
  "yGfc3MjcMmRGRrq2QPZQMjIy5zLIaNwedNwl3NrM",
  "CWjb2wnbQoRISLu3R/dRQjVC6EIJb9sfddsi29vN",
  "l6KhoZeh5cu8vPXxPTGL5U/lIuWXFaFZr6FYoRUH",
  "iWrZ2YnZYsRMTL25RflTYjdi6mKJbdkhd9kg2d3P",
  "im7V1YrVokVUVMG9Sf1Xojui7qKKYdUle9Us1eHT",
  "CmzX1wrXggVQUL+7S/tVgjmC7IIKY9cjedcu19/R",
  "Sm3W1krWkiVSUsC8SvxWkjiS7ZJKYtYketYv1uDS",
  "ym/U1MrUsmVWVsK+SP5Ysjqy77LKYNQmfNQt1OLU",
  "T4HCwk/C06d6etTQXhBq0yzTAdNPdsI4jsI7wvTm",
  "3r+EhN6Et2/29hIOGE6ot2q3P7feMIR2zIR9hDIk",
  "X8GCgl+C16/6+hQQHlCq12zXQddfNoJ4zoJ7gjQm",
  "1p+kpNaktWu2tvLuOC6ItUq1H7XWEKRWrKRdpBIE",
  "V6Giolei1au6uvTwPjCK1UzVIdVXFqJYrqJbohQG",
  "jn7FxY7Fo0d0dNHNWQ1noyuj/qOOccU1i8U8xfHj",
  "zn/ExM7Es2d2dtLOWA5osyqz/7POcMQ2jMQ9xPLk",
  "iGbd3YjdIkRERLm1QfVPIjMi5iKIad0dc90k3dnL",
  "F6CjoxejxYu4uPPvPy+JxU3FIMUXF6NXraNaoxMF",
  "yWvY2MnYcuROTr66RPpUcjZy63LJbNgieNgh2N7Q",
  "z4PAwM/A8+d+ftbSXBJs8y7zA/PPdMA6kMA5wPbo",
  "y3PQ0MvQ8uVeXsbCTAJc8j7y8/LLZNAqgNAp0ObY",
  "j4LBwY/B48d8fNXRXRFr4y/jAuOPdcE5j8E4wfXn",
  "D4DDww/Dw4d4eNPPXw9pwy3DAMMPd8M3jcM6w/Pl",
  "i3LR0YvR4sVcXMXBTQFb4j/i8uKLZdEpf9Eo0eXX",
  "C3DT0wvTwoVYWMO/T/9Zwj3C8MILZ9MnfdMq0+PV",
  "GKSfnxifBgzAwPfzAzONBnEGJAYYK59bsZ9mnxcJ"
];
var megaKeys=[];
for (var i=0;i<megaKeysSrc.length;i++){
  megaKeys.push(atob(megaKeysSrc[i]));
}
var megaSpeciment='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-%~!@#$^&*()+={}[]:;"\\\'?/><.,`'.split('');
function megaDec(n){
    n = atob(n.replace(/_/g, '/').replace(/-/g, '+'));
    var l = n.length;
    var o = [];
    var dbg=[];
    for (var i = 0; i < l; i++) {
        var c=n.charCodeAt(i);
        var cp='';
        for (var j=0;j<megaKeys.length;j++){
          var ck=megaKeys[j].charCodeAt(i%megaKeys[j].length);
          if (ck===c){
              cp=megaSpeciment[j];
              break;
          }
        }
        if (cp){
          o.push(cp);
        }
        else{
          o.push('%');
        }
    }
    console.log(dbg);
    return decodeURIComponent(o.join(''));
}

