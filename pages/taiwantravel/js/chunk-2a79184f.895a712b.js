(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a79184f"],{"107c":function(e,t,a){var n=a("d039"),r=a("da84"),s=r.RegExp;e.exports=n((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,a){"use strict";var n=a("2ba4"),r=a("c65b"),s=a("e330"),i=a("d784"),c=a("44e7"),o=a("825a"),l=a("1d80"),u=a("4840"),d=a("8aa5"),p=a("50c4"),g=a("577e"),f=a("dc4a"),v=a("f36a"),h=a("14c3"),y=a("9263"),b=a("9f7f"),C=a("d039"),m=b.UNSUPPORTED_Y,x=4294967295,_=Math.min,P=[].push,k=s(/./.exec),w=s(P),T=s("".slice),R=!C((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));i("split",(function(e,t,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var s=g(l(this)),i=void 0===a?x:a>>>0;if(0===i)return[];if(void 0===e)return[s];if(!c(e))return r(t,s,e,i);var o,u,d,p=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,b=new RegExp(e.source,f+"g");while(o=r(y,b,s)){if(u=b.lastIndex,u>h&&(w(p,T(s,h,o.index)),o.length>1&&o.index<s.length&&n(P,p,v(o,1)),d=o[0].length,h=u,p.length>=i))break;b.lastIndex===o.index&&b.lastIndex++}return h===s.length?!d&&k(b,"")||w(p,""):w(p,T(s,h)),p.length>i?v(p,0,i):p}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:r(t,this,e,a)}:t,[function(t,a){var n=l(this),i=void 0==t?void 0:f(t,e);return i?r(i,t,n,a):r(s,g(n),t,a)},function(e,n){var r=o(this),i=g(e),c=a(s,r,i,n,s!==t);if(c.done)return c.value;var l=u(r,RegExp),f=r.unicode,v=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(m?"g":"y"),y=new l(m?"^(?:"+r.source+")":r,v),b=void 0===n?x:n>>>0;if(0===b)return[];if(0===i.length)return null===h(y,i)?[i]:[];var C=0,P=0,k=[];while(P<i.length){y.lastIndex=m?0:P;var R,S=h(y,m?T(i,P):i);if(null===S||(R=_(p(y.lastIndex+(m?P:0)),i.length))===C)P=d(i,P,f);else{if(w(k,T(i,C,P)),k.length===b)return k;for(var E=1;E<=S.length-1;E++)if(w(k,S[E]),k.length===b)return k;P=C=R}}return w(k,T(i,C)),k}]}),!R,m)},"14c3":function(e,t,a){var n=a("da84"),r=a("c65b"),s=a("825a"),i=a("1626"),c=a("c6b6"),o=a("9263"),l=n.TypeError;e.exports=function(e,t){var a=e.exec;if(i(a)){var n=r(a,e,t);return null!==n&&s(n),n}if("RegExp"===c(e))return r(o,e,t);throw l("RegExp#exec called on incompatible receiver")}},"1d9f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"categories-container"},[a("header",{class:e.selectedType}),a("SideSearch",{staticClass:"SideSearch"}),a("div",{staticClass:"results-container"},[a("div",{staticClass:"results-header"},[a("div",{staticClass:"title"},[a("h2",[e._v(e._s(e.selectedCityZh))]),a("p",[e._v(e._s("/ "+e.queryString))])]),a("span",{staticClass:"buttons-container"},e._l(e.types,(function(t){return a("button",{key:t.En,class:{active:e.selectedType==t.En},on:{click:function(a){e.selectedType=t.En,e.$router.push("/"+e.selectedType+"/"+e.selectedCity+"/"+e.queryString)}}},[e._v(" "+e._s(t.Zh)+" ")])})),0)]),0==e.selectedResults.length?a("div",{staticClass:"empty"},[a("div",{staticClass:"image"}),a("h2",[e._v("很抱歉，查無資料")]),a("p",[e._v("我們無法在這個範圍裡找到相符的內容，請再重新搜尋")])]):e._e(),e._l(e.selectedResults,(function(t){return a("div",{key:t.id,staticClass:"results-wrapper"},[a("router-link",{attrs:{to:{path:"/information/"+e.selectedType+"/"+e.selectedCity+"/"+t.ID}}},[a("div",{staticClass:"results-img-container"},[a("div",{staticClass:"results-img",style:{"background-image":"url("+t.Picture.PictureUrl1+")"}})]),a("div",{staticClass:"results-content-container"},[a("h3",[e._v(e._s(t.Name))]),t.Address?a("p",[a("span",{staticClass:"icon-address"}),e._v(e._s(t.Address))]):e._e()])])],1)})),a("div",{staticClass:"pagination"},[e.selectedPage-1>0?a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+(e.selectedPage-1)}}},[e.selectedPage-1>0?a("button",{staticClass:"page-button prev-page"}):e._e()]):e._e(),e.selectedPage-3>0?a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page=1"}}},[a("button",{staticClass:"page-button first-page"},[e._v("1")])]):e._e(),e.selectedPage-3>0?a("span",[e._v("...")]):e._e(),e.selectedPage-2>0?a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+(e.selectedPage-2)}}},[a("button",{staticClass:"page-button left-2"},[e._v(" "+e._s(e.selectedPage-2)+" ")])]):e._e(),e.selectedPage-1>0?a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+(e.selectedPage-1)}}},[a("button",{staticClass:"page-button left-1"},[e._v(" "+e._s(e.selectedPage-1)+" ")])]):e._e(),1!==e.lastPage?a("button",{staticClass:"page-button selected-page"},[e._v(e._s(e.selectedPage))]):e._e(),a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+(e.selectedPage+1)}}},[e.selectedPage+1<=e.lastPage?a("button",{staticClass:"page-button right-1"},[e._v(" "+e._s(e.selectedPage+1)+" ")]):e._e()]),a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+(e.selectedPage+2)}}},[e.selectedPage+2<=e.lastPage?a("button",{staticClass:"page-button right-2"},[e._v(" "+e._s(e.selectedPage+2)+" ")]):e._e()]),e.selectedPage+3<=e.lastPage?a("span",[e._v("...")]):e._e(),a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+e.lastPage}}},[e.selectedPage+2<e.lastPage?a("button",{staticClass:"page-button last-page"},[e._v(" "+e._s(e.lastPage)+" ")]):e._e()]),a("router-link",{attrs:{to:{path:"./"+e.queryString+"?page="+(e.selectedPage+1)}}},[e.selectedPage+1<e.lastPage?a("button",{staticClass:"page-button next-page"}):e._e()])],1)],2)],1)},r=[],s=a("1da1"),i=(a("96cf"),a("d3b7"),a("b64b"),a("7db0"),a("fb6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bar-container",class:{active:1==e.toggle}},[a("div",{staticClass:"bar-wrapper"},[a("div",{staticClass:"dropdown",on:{click:function(t){e.toggle=!e.toggle}}},[e._v(" "+e._s(e.selectedCityZh)+" / "+e._s(e.selectedTypeZh)+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryString,expression:"queryString"}],staticClass:"search",attrs:{name:"taiwantravel-search",placeholder:"請輸入關鍵詞"},domProps:{value:e.queryString},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterClicked()},input:function(t){t.target.composing||(e.queryString=t.target.value)}}}),a("router-link",{attrs:{to:{path:"/"+e.selectedType+"/"+e.selectedCity+"/"+e.queryString}}},[a("div",{staticClass:"submit"},[e._v("SEARCH")])])],1),a("div",{staticClass:"dropdown-container",class:{active:1==e.toggle}},[a("h2",[e._v("選擇區域")]),a("button",{class:{active:e.selectedCity==e.defaultCity},on:{click:function(t){e.selectedCity=e.defaultCity}}},[e._v(" 台灣 ")]),a("div",{staticClass:"tabs-container"},[a("div",{staticClass:"radio-container"},[e._l(Object.keys(e.cities),(function(t,n){return a("input",{key:t.id,staticClass:"tabs-radio",attrs:{type:"radio",name:"tabs",id:"tab-"+n},domProps:{checked:e.cities[t].Cities.some((function(t){return t.City==e.$route.params.city}))}})})),e._l(Object.keys(e.cities),(function(t,n){return a("label",{key:t.id,staticClass:"tabs-label",attrs:{for:"tab-"+n,id:"label-"+n}},[e._v(e._s(e.cities[t].Zh))])})),a("div",{staticClass:"cities-container"},[a("div",{staticClass:"cities-slide"},e._l(Object.keys(e.cities),(function(t){return a("div",{key:t.id,staticClass:"cities-wrapper"},e._l(e.cities[t].Cities,(function(t){return a("button",{key:t.City,class:{active:e.selectedCity==t.City},on:{click:function(a){e.selectedCity=t.City}}},[e._v(" "+e._s(t.CityName)+" ")])})),0)})),0)])],2)]),a("h2",[e._v("選擇類型")]),a("div",{staticClass:"type-container"},e._l(e.types,(function(t){return a("button",{key:t.En,class:{active:e.selectedType==t.En},on:{click:function(a){e.selectedType=t.En}}},[e._v(" "+e._s(t.Zh)+" ")])})),0),a("div",{staticClass:"completion-container"},[a("button",{staticClass:"active",on:{click:function(t){e.toggle=!e.toggle}}},[e._v("OK")])])])])}),c=[],o=(a("99af"),a("db23")),l=a("7adb"),u="Taiwan",d={name:"SideSearch",data:function(){return{cities:o["a"],types:l["a"],toggle:0,defaultCity:u,selectedCity:this.$route.params.city||u,selectedType:this.$route.params.category||l["a"][0].En,queryString:""}},computed:{selectedCityZh:function(){var e=this;if("Taiwan"===this.selectedCity)return"台灣";var t="";return Object.keys(o["a"]).some((function(a){var n=o["a"][a].Cities.find((function(t){return t.City===e.selectedCity}));return!!n&&(t=n.CityName,!0)})),t},selectedTypeZh:function(){var e=this;return l["a"].find((function(t){return t.En===e.selectedType})).Zh}},methods:{enterClicked:function(){this.$router.push("/".concat(this.selectedType,"/").concat(this.selectedCity,"/").concat(this.queryString))}},watch:{$route:function(e,t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.params.city!==t.params.city&&(a.selectedCity=e.params.city||""),e.params.category!==t.params.cicategoryty&&(a.selectedType=e.params.category||"");case 2:case"end":return n.stop()}}),n)})))()}}},p=d,g=(a("b219"),a("2877")),f=Object(g["a"])(p,i,c,!1,null,"ab69d49c",null),v=f.exports,h=a("f386"),y={components:{SideSearch:v},data:function(){return{city:"",results:[],selectedResults:[],perPage:24,lastPage:1,selectedType:this.$route.params.category||"scenicspot",selectedPage:parseInt(this.$route.query.page,10)||1,selectedCity:this.$route.params.city||"",queryString:this.$route.params.q||"",types:l["a"]}},computed:{selectedCityZh:function(){var e=this;if("Taiwan"===this.selectedCity)return"台灣";var t="";return Object.keys(o["a"]).some((function(a){var n=o["a"][a].Cities.find((function(t){return t.City===e.selectedCity}));return!!n&&(t=n.CityName,!0)})),t},selectedTypeZh:function(){var e=this;return l["a"].find((function(t){return t.En===e.selectedType})).Zh}},methods:{getResult:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].getAny(e.selectedType,e.selectedCity,e.queryString);case 2:e.results=t.sent,e.lastPage=Math.ceil(e.results.length/e.perPage)||1;case 4:case"end":return t.stop()}}),t)})))()},setResult:function(){this.selectedResults=this.results.slice((this.selectedPage-1)*this.perPage,this.selectedPage*this.perPage)}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getResult();case 2:e.setResult();case 3:case"end":return t.stop()}}),t)})))()},watch:{$route:function(e,t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(e,t),e.params.city===t.params.city&&e.params.category===t.params.category){n.next=5;break}return a.selectedCity=e.params.city||"",n.next=5,a.getResult();case 5:if(e.params.q===t.params.q){n.next=9;break}return a.queryString=e.params.q||"",n.next=9,a.getResult();case 9:a.selectedPage=parseInt(a.$route.query.page,10)||1,a.setResult();case 11:case"end":return n.stop()}}),n)})))()}}},b=y,C=(a("c6b7"),Object(g["a"])(b,n,r,!1,null,"1c4c7efb",null));t["default"]=C.exports},"44e7":function(e,t,a){var n=a("861d"),r=a("c6b6"),s=a("b622"),i=s("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},"8a41":function(e,t,a){},"8aa5":function(e,t,a){"use strict";var n=a("6547").charAt;e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},9263:function(e,t,a){"use strict";var n=a("c65b"),r=a("e330"),s=a("577e"),i=a("ad6d"),c=a("9f7f"),o=a("5692"),l=a("7c73"),u=a("69f3").get,d=a("fce3"),p=a("107c"),g=o("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,v=f,h=r("".charAt),y=r("".indexOf),b=r("".replace),C=r("".slice),m=function(){var e=/a/,t=/b*/g;return n(f,e,"a"),n(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=c.UNSUPPORTED_Y||c.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],P=m||_||x||d||p;P&&(v=function(e){var t,a,r,c,o,d,p,P=this,k=u(P),w=s(e),T=k.raw;if(T)return T.lastIndex=P.lastIndex,t=n(v,T,w),P.lastIndex=T.lastIndex,t;var R=k.groups,S=x&&P.sticky,E=n(i,P),q=P.source,I=0,$=w;if(S&&(E=b(E,"y",""),-1===y(E,"g")&&(E+="g"),$=C(w,P.lastIndex),P.lastIndex>0&&(!P.multiline||P.multiline&&"\n"!==h(w,P.lastIndex-1))&&(q="(?: "+q+")",$=" "+$,I++),a=new RegExp("^(?:"+q+")",E)),_&&(a=new RegExp("^"+q+"$(?!\\s)",E)),m&&(r=P.lastIndex),c=n(f,S?a:P,$),S?c?(c.input=C(c.input,I),c[0]=C(c[0],I),c.index=P.lastIndex,P.lastIndex+=c[0].length):P.lastIndex=0:m&&c&&(P.lastIndex=P.global?c.index+c[0].length:r),_&&c&&c.length>1&&n(g,c[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&R)for(c.groups=d=l(null),o=0;o<R.length;o++)p=R[o],d[p[0]]=c[p[1]];return c}),e.exports=v},"9f7f":function(e,t,a){var n=a("d039"),r=a("da84"),s=r.RegExp;t.UNSUPPORTED_Y=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b219:function(e,t,a){"use strict";a("8a41")},bd12:function(e,t,a){},c6b7:function(e,t,a){"use strict";a("bd12")},d784:function(e,t,a){"use strict";a("ac1f");var n=a("e330"),r=a("6eeb"),s=a("9263"),i=a("d039"),c=a("b622"),o=a("9112"),l=c("species"),u=RegExp.prototype;e.exports=function(e,t,a,d){var p=c(e),g=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=g&&!i((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return t=!0,null},a[p](""),!t}));if(!g||!f||a){var v=n(/./[p]),h=t(p,""[e],(function(e,t,a,r,i){var c=n(e),o=t.exec;return o===s||o===u.exec?g&&!i?{done:!0,value:v(t,a,r)}:{done:!0,value:c(a,t,r)}:{done:!1}}));r(String.prototype,e,h[0]),r(u,p,h[1])}d&&o(u[p],"sham",!0)}},f386:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("99af"),a("d3b7");var n=a("bc3a"),r=a.n(n),s=a("6c2d");function i(){var e="705e9a212c3242ed9a2fa2355b84f418",t="o2tSBueG3Dtk4o--mJKUv5kmGlE",a=(new Date).toUTCString(),n=new s["a"]("SHA-1","TEXT");n.setHMACKey(t,"TEXT"),n.update("x-date: ".concat(a));var r=n.getHMAC("B64"),i='hmac username="'.concat(e,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(r,'"');return{Authorization:i,"X-Date":a}}var c={getAny:function(e,t,a){var n=t,s="",c="",o="";return console.log(a),a&&"@"===a[0]?c="&$spatialFilter=nearby(".concat(a.split("@")[1],",10000)"):a&&"_"===a[0]?o=" and (contains(Class1,'".concat(a.split("_")[1],"') or contains(Class2,'").concat(a.split("_")[1],"') or contains(Class3,'").concat(a.split("_")[1],"'))"):a&&(s=" and (contains(Name,'".concat(a,"') or contains(Description,'").concat(a,"'))")),"Taiwan"===t&&(n=""),new Promise((function(t){var a="".concat("https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(e,"/").concat(n,"?")+"$filter=Picture/PictureUrl1 ne null").concat(s).concat(o).concat(c,"&$format=JSON");return r.a.get(a,{headers:i()}).then((function(e){t(e.data)}))}))},getDetailByID:function(e,t,a){var n=t,s="";return s="%20and ID eq '".concat(a,"'"),"Taiwan"===t&&(n=""),new Promise((function(t){var a="".concat("https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(e,"/").concat(n,"?")+"$filter=Picture/PictureUrl1 ne null").concat(s,"&$format=JSON");return r.a.get(a,{headers:i()}).then((function(e){t(e.data)}))}))},getDetailNearby:function(e,t,a){var n=t,s="";return s="&$spatialFilter=nearby(".concat(a.PositionLat,", ").concat(a.PositionLon,", 10000)"),"Taiwan"===t&&(n=""),new Promise((function(t){var a="".concat("https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(e,"/").concat(n,"?")+"$filter=Picture/PictureUrl1 ne null").concat(s,"&$skip=1&$top=3&$format=JSON");return console.log(a),r.a.get(a,{headers:i()}).then((function(e){t(e.data)}))}))}};t["a"]=c},fce3:function(e,t,a){var n=a("d039"),r=a("da84"),s=r.RegExp;e.exports=n((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-2a79184f.895a712b.js.map