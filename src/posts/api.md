```javascript
function na(d) {
  const crypto = require("crypto");
  return crypto.createHash("md5").update(d).digest("hex");
}
function ia(t, e) {
  e || (e = {});
  var n,
    r,
    i = (function (t) {
      var e;
      if (t.useAssignKey)
        return {
          imgKey: t.wbiImgKey,
          subKey: t.wbiSubKey,
        };
      var n =
          (null ===
            (e = (function (t) {
              try {
                return localStorage.getItem(t);
              } catch (t) {
                return null;
              }
            })("wbi_img_urls")) || void 0 === e
            ? void 0
            : e.split("-")) || [],
        r = n[0],
        i = n[1],
        o = r ? oa(r) : t.wbiImgKey,
        a = i ? oa(i) : t.wbiSubKey;
      return {
        imgKey: o,
        subKey: a,
      };
    })(e),
    o = i.imgKey,
    a = i.subKey;
  if (o && a) {
    for (
      var s =
          ((n = o + a),
          (r = []),
          [
            46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43,
            5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16,
            24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59,
            6, 63, 57, 62, 11, 36, 20, 34, 44, 52,
          ].forEach(function (t) {
            n.charAt(t) && r.push(n.charAt(t));
          }),
          r.join("").slice(0, 32)),
        c = Math.round(Date.now() / 1e3),
        u = Object.assign({}, t, {
          wts: c,
        }),
        l = Object.keys(u).sort(),
        f = [],
        d = /[!'()*]/g,
        p = 0;
      p < l.length;
      p++
    ) {
      var h = l[p],
        v = u[h];
      v && "string" == typeof v && (v = v.replace(d, "")),
        null != v &&
          f.push(
            "".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(v))
          );
    }
    var m = f.join("&");
    return {
      w_rid: na(m + s),
      wts: c.toString(),
    };
  }
}
console.log(
  ia(
    {
      bvid: "BV1PmxeeFEC4",
      cid: "26095193229",
      up_mid: "337521240",
      web_location: "333.788",
    },
    {
      wbiImgKey: "c458435a75b1419ca98ab6d88b4c60d4",
      wbiSubKey: "446140f6859f439e9dd83f7ef858d1cd",
    }
  )
);
//例如https://api.bilibili.com/x/web-interface/view/conclusion/get?bvid=BV1PmxeeFEC4&cid=26095193229&up_mid=337521240&web_location=333.788&w_rid=98320e8f743b80d4006f8e07079b6c78&wts=1728201932
//AI总结接口
```
