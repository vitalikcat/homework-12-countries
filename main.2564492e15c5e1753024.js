(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BWlV:function(n,e,l){var t=l("mp5j");n.exports=(t.default||t).template({1:function(n,e,l,t,a){var o,u,i=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,r=n.escapeExpression;return'<h2 class="country-title">'+r("function"==typeof(u=null!=(u=l.name||(null!=e?e.name:e))?u:c)?u.call(i,{name:"name",hash:{},data:a,loc:{start:{line:2,column:26},end:{line:2,column:34}}}):u)+'</h2>\r\n<div class="text-container">\r\n<p>Capital: '+r("function"==typeof(u=null!=(u=l.capital||(null!=e?e.capital:e))?u:c)?u.call(i,{name:"capital",hash:{},data:a,loc:{start:{line:4,column:12},end:{line:4,column:23}}}):u)+"</p>\r\n<p>Population: "+r("function"==typeof(u=null!=(u=l.population||(null!=e?e.population:e))?u:c)?u.call(i,{name:"population",hash:{},data:a,loc:{start:{line:5,column:15},end:{line:5,column:29}}}):u)+'</p>\r\n<ul class="language-list">Languages:\r\n'+(null!=(o=l.each.call(i,null!=e?e.languages:e,{name:"each",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:7,column:4},end:{line:9,column:13}}}))?o:"")+'</ul>\r\n</div>\r\n<div class="image-container">\r\n<img class="country-img" src="'+r("function"==typeof(u=null!=(u=l.flag||(null!=e?e.flag:e))?u:c)?u.call(i,{name:"flag",hash:{},data:a,loc:{start:{line:13,column:30},end:{line:13,column:38}}}):u)+'" alt="" width="380" height="280">\r\n</div>\r\n'},2:function(n,e,l,t,a){var o;return'    <li class="language-item">'+n.escapeExpression("function"==typeof(o=null!=(o=l.nativeName||(null!=e?e.nativeName:e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"nativeName",hash:{},data:a,loc:{start:{line:8,column:30},end:{line:8,column:44}}}):o)+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var o;return null!=(o=l.each.call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?o:""},useData:!0})},L1EO:function(n,e,l){},NyKC:function(n,e,l){var t=l("mp5j");n.exports=(t.default||t).template({1:function(n,e,l,t,a){var o;return"<li>"+n.escapeExpression("function"==typeof(o=null!=(o=l.name||(null!=e?e.name:e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:2,column:4},end:{line:2,column:12}}}):o)+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var o;return null!=(o=l.each.call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?o:""},useData:!0})},QfWi:function(n,e,l){"use strict";l.r(e);l("L1EO");var t=l("jffb"),a=l.n(t),o=(l("JBxO"),l("FdtR"),{fetchCountries:function(n){if(n)return fetch("https://restcountries.eu/rest/v2/name/"+n).then((function(n){return n.json()}))}}),u=l("NyKC"),i=l.n(u),c=l("BWlV"),r=l.n(c),s={inputCountry:document.querySelector("#js-country-input"),ul:document.querySelector("#js-countries-list"),article:document.querySelector("#js-country-article")};s.inputCountry.addEventListener("input",a()((function(n){var e=n.target.value;e||(e="ukraine");o.fetchCountries(e).then((function(n){!function(n){var e=n.length;if(s.ul.innerHTML="",s.article.innerHTML="",e>=2&&e<=10){var l=(t=n,i()(t));s.ul.insertAdjacentHTML("beforeend",l)}var t;if(1===e){var a=function(n){return r()(n)}(n);s.article.insertAdjacentHTML("beforeend",a)}e>10&&console.log("Too many matches found. Please enter a more specific query!")}(n)}))}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2564492e15c5e1753024.js.map