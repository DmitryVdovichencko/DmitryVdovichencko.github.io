(self.webpackChunkdimetrio_dev=self.webpackChunkdimetrio_dev||[]).push([[339],{4307:function(e,t,n){"use strict";n.d(t,{Zb:function(){return o},aY:function(){return l},SZ:function(){return i},Ol:function(){return c},xu:function(){return f}});var r=n(7294),u=n(5444),o=function(e){var t=e.key,n=e.linkTo,o=e.children,a=void 0===o?null:o;return n?r.createElement(u.Link,{key:t,to:n},r.createElement("div",{className:"flex shadow-lg  md:flex-row flex-col my-4 rounded-lg transition duration-500 ease-in-out hover:shadow-xl"},a)):r.createElement("div",{key:t,className:"flex shadow-lg  md:flex-row flex-col my-4 rounded-lg transition duration-500 ease-in-out hover:shadow-xl"},a)},a=n(2359),f=function(e){var t=e.title,n=e.data;return r.createElement("div",{className:"flex-none h-48 md:w-48 md:h-auto relative"},r.createElement(a.G,{alt:t,className:"absolute rounded-t-lg md:rounded-t-none md:rounded-l-lg inset-0 w-full h-full object-cover mt-0 m-none",image:(0,a.d)(n)}))},l=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:"flex-auto p-6"},n)},i=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:"w-full flex-none text-sm text-gray-500 font-light mt-2"},n)},c=function(e){var t=e.title,n=e.children,u=void 0===n?null:n;return r.createElement(r.Fragment,null,r.createElement("h4",{className:"flex-auto text-xl font-semibold"},t),u)}},616:function(e,t,n){"use strict";var r=n(7294),u=n(1279);t.Z=function(e){var t=e.date;return r.createElement("div",{className:"w-full flex flex-row text-sm text-gray-500"},r.createElement(u.xHR,{size:"18px"}),r.createElement("span",{className:"ml-1 text-sm -mb-0.5"},t))}},3315:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),u=n(8851),o=n(1804),a=n.n(o),f=n(5444),l=function(e){var t=e.title,n="/tags/"+a()(t)+"/";return r.createElement(f.Link,{to:n},r.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 mr-2 my-1 py-1 px-4 text-white rounded text-sm"},t))},i=n(616),c=n(4307),d=n(3350),s=function(e){var t=e.data;return r.createElement(u.Z,null,r.createElement(d.Z,{title:"Articles | Dimetrio"}),t.allMdx.edges.map((function(e,t){var n,u=e.node;return r.createElement(c.Zb,{key:u.fields.slug+"_"+t,linkTo:u.fields.slug},r.createElement(c.xu,{title:u.frontmatter.title,data:u.frontmatter.cover}),r.createElement(c.aY,null,r.createElement(c.Ol,{title:""+u.frontmatter.title}),r.createElement(i.Z,{date:(n=u.frontmatter.title,/[aА-яЯ]/gm.test(n)?u.frontmatter.dateRu:u.frontmatter.dateEn)}),r.createElement("div",{className:"flex flex-row flex-wrap items-baseline mt-4 mb-6"},u.frontmatter.tags.map((function(e){return r.createElement("div",{key:e},r.createElement(l,{title:e}))}))),r.createElement(c.SZ,null,u.excerpt)))})))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,u=Array(r);++n<r;)u[n]=t(e[n],n,e);return u}},2663:function(e){e.exports=function(e,t,n,r){var u=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++u]);++u<o;)n=t(n,e[u],u,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),u=n(9607),o=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?u(e):o(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),u=n(9932),o=n(1469),a=n(3448),f=r?r.prototype:void 0,l=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return u(t,e)+"";if(a(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),u=n(3816),o=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(u(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),u=Object.prototype,o=u.hasOwnProperty,a=u.toString,f=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(l){}var u=a.call(e);return r&&(t?e[f]=n:delete e[f]),u}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),u="object"==typeof self&&self&&self.Object===Object&&self,o=r||u||Function("return this")();e.exports=o},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+u+"]",a="\\d+",f="[\\u2700-\\u27bf]",l="["+n+"]",i="[^\\ud800-\\udfff"+u+a+t+n+r+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+r+"]",x="(?:"+l+"|"+i+")",m="(?:"+s+"|"+i+")",v="(?:['’](?:d|ll|m|re|s|t|ve))?",p="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",E=b+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,d].join("|")+")"+b+g+")*"),h="(?:"+[f,c,d].join("|")+")"+E,y=RegExp([s+"?"+l+"+"+v+"(?="+[o,s,"$"].join("|")+")",m+"+"+p+"(?="+[o,s+x,"$"].join("|")+")",s+"?"+x+"+"+v,s+"+"+p,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,h].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},3816:function(e,t,n){var r=n(9389),u=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(o,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),u=n(7005);e.exports=function(e){return"symbol"==typeof e||u(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),u=n(3157),o=n(9833),a=n(2757);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?u(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-pages-articles-tsx-a0cf262048de63dd7cd9.js.map