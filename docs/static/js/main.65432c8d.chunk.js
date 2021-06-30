(this["webpackJsonpapi-rest-countries"]=this["webpackJsonpapi-rest-countries"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(18),c=n.n(r),s=n(8),i=n(2),o=n(10),l=n(0),u=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("div",{className:"navbar__logo",children:Object(l.jsx)(s.b,{to:"/",className:"navbar__title",children:"Where in the world?"})}),Object(l.jsx)("ul",{className:"navbar__list",children:Object(l.jsx)("li",{className:"navbar__item",children:Object(l.jsxs)("button",{className:"navbar__btn",onClick:function(){"light"===n?(document.documentElement.style.setProperty("--primary","hsl(207, 26%, 17%)"),document.documentElement.style.setProperty("--secondary","hsl(0, 0%, 100%)"),r("dark")):(document.documentElement.style.setProperty("--primary","hsl(0, 0%, 98%)"),document.documentElement.style.setProperty("--secondary","hsl(200, 15%, 8%)"),r("light"))},children:[Object(l.jsx)("i",{className:"far fa-moon"})," Dark Mode"]})})})]})},j=function(e){var t=e.country,n=Object(i.f)();return Object(l.jsxs)("div",{className:"country",onClick:function(){n.push("/api-rest-countries/country/".concat(t.alpha3Code.toLowerCase()))},children:[Object(l.jsx)("img",{src:t.img,loading:"lazy",alt:t.name,className:"country__img"}),Object(l.jsxs)("div",{className:"country__description",children:[Object(l.jsx)("h4",{children:t.name}),Object(l.jsxs)("p",{children:["Population: ",Object(l.jsx)("span",{children:t.population})]}),Object(l.jsxs)("p",{children:["Region: ",Object(l.jsx)("span",{children:t.region})]}),Object(l.jsxs)("p",{children:["Capital: ",Object(l.jsx)("span",{children:t.capital})]})]})]})},d=function(e){var t=e.countries;return Object(l.jsxs)("div",{className:"countries__list",children:[0!==(null===t||void 0===t?void 0:t.length)||Object(l.jsx)("span",{children:"No se encontro paises"}),null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsx)(j,{country:{alpha3Code:e.alpha3Code,name:e.name,population:e.population,region:e.region,capital:e.capital,img:e.flag}},e.alpha3Code)}))]})},p=n(20),b=function(e){var t=e.setCountry,n=function(e){void 0!==e.target.value&&""!==e.target.value?t({get:"region"===e.target.name?"byRegion":"byName",country:Object(p.a)({},e.target.name,e.target.value)}):t({get:"all"})};return Object(l.jsxs)("form",{className:"search",children:[Object(l.jsxs)("div",{className:"search__camp--input",children:[Object(l.jsx)("i",{className:"fas fa-search"}),Object(l.jsx)("input",{className:"search__input",name:"name",id:"name",placeholder:"Search for a country",onChange:n})]}),Object(l.jsx)("div",{className:"search__camp--select",children:Object(l.jsxs)("select",{name:"region",id:"region",className:"search__select",onChange:n,children:[Object(l.jsx)("option",{value:"",defaultValue:!0,children:"Filter by Region"}),Object(l.jsx)("option",{value:"africa",children:"Africa"}),Object(l.jsx)("option",{value:"americas",children:"Americas"}),Object(l.jsx)("option",{value:"asia",children:"Asia"}),Object(l.jsx)("option",{value:"europe",children:"Europe"}),Object(l.jsx)("option",{value:"oceania",children:"Oceania"})]})})]})},h=n(7),m=n.n(h),x=n(12),O=function(){var e=Object(x.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all?\n        fields=alpha3Code;name;population;region;capital;flag");case 2:return t=e.sent,e.next=5,t.json();case 5:if(404!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(t,"?\n        fields=alpha3Code;name;population;region;capital;flag"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(404!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(x.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/region/".concat(t,"?\n        fields=alpha3Code;name;population;region;capital;flag"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(404!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:if(404!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t=e.get,n=e.country,r=Object(a.useState)({countries:[],loading:!0}),c=Object(o.a)(r,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){switch(t){case"all":O().then((function(e){i({countries:e,loading:!1})}));break;case"byName":v(n.name).then((function(e){i({countries:e,loading:!1})}));break;case"byRegion":f(n.region).then((function(e){i({countries:e,loading:!1})}));break;case"byAlpha3Code":g(n.alpha3Code).then((function(e){i({countries:e,loading:!1})}));break;default:i({countries:[],loading:!0})}}),[t,null===n||void 0===n?void 0:n.alpha3Code,null===n||void 0===n?void 0:n.region,null===n||void 0===n?void 0:n.name]),s},_=function(){var e=Object(a.useState)({get:"all"}),t=Object(o.a)(e,2),n=t[0],r=t[1],c=y(n).countries;return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(b,{setCountry:r}),Object(l.jsx)(d,{countries:c})]})},N=function(){var e,t,n,a,r,c=Object(i.f)(),s=Object(i.g)().alpha3Code,o=y({get:"byAlpha3Code",country:{alpha3Code:s}}),u=o.countries,j=o.loading;return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("button",{onClick:function(){c.push("/")},className:"btn",children:[Object(l.jsx)("i",{className:"fas fa-arrow-left"})," Back"]}),Object(l.jsxs)("div",{className:"details",children:[!j||"cargando",Object(l.jsx)("img",{className:"details__img",src:u.flag,alt:u.name,loading:"lazy"}),Object(l.jsxs)("div",{className:"details__main",children:[Object(l.jsx)("h3",{children:u.name}),Object(l.jsxs)("div",{className:"details__content",children:[Object(l.jsxs)("div",{className:"details__primary",children:[Object(l.jsxs)("p",{children:["Native Name: ",Object(l.jsx)("span",{children:u.nativeName})]}),Object(l.jsxs)("p",{children:["Population: ",Object(l.jsx)("span",{children:u.population})]}),Object(l.jsxs)("p",{children:["Region: ",Object(l.jsx)("span",{children:u.region})]}),Object(l.jsxs)("p",{children:["Sub Region: ",Object(l.jsx)("span",{children:u.subregion})]}),Object(l.jsxs)("p",{children:["Capital: ",Object(l.jsx)("span",{children:u.capital})]})]}),Object(l.jsxs)("div",{className:"details__secondary",children:[Object(l.jsxs)("p",{children:["Top Level Domain:",Object(l.jsx)("span",{children:null===(e=u.topLevelDomain)||void 0===e?void 0:e.map((function(e){return e}))})]}),Object(l.jsxs)("p",{children:["Currencies:",Object(l.jsx)("span",{children:null===(t=u.currencies)||void 0===t?void 0:t.map((function(e){return e.name}))})]}),Object(l.jsxs)("p",{children:["Languages:",Object(l.jsx)("span",{children:null===(n=u.languages)||void 0===n?void 0:n.map((function(e){return e.name+", "}))})]})]}),0===(null===(a=u.borders)||void 0===a?void 0:a.length)||Object(l.jsx)("div",{className:"details__tertiary",children:Object(l.jsxs)("p",{children:["Border Countries:",null===(r=u.borders)||void 0===r?void 0:r.map((function(e){return Object(l.jsx)("span",{className:"details__border",children:e},e)}))]})})]})]})]})]})},C=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/api-rest-countries/",component:_}),Object(l.jsx)(i.a,{exact:!0,path:"/api-rest-countries/country/:alpha3Code",component:N})]})]})},k=(n(32),function(){return Object(l.jsx)(C,{})});c.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.65432c8d.chunk.js.map