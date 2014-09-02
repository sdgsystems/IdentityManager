﻿///#source 1 1 /Assets/Scripts/Libs/jquery-2.1.0.min.js
/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

///#source 1 1 /Assets/Scripts/Libs/bootstrap.min.js
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
///#source 1 1 /Assets/Scripts/Libs/angular.min.js
/*
 AngularJS v1.3.0-beta.17
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,V,s){'use strict';function S(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-beta.17/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function eb(b){if(null==b||Oa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:G(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(H(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||eb(b))for(d=0,e=b.length;d<e;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function bc(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function id(b,a,c){for(var d=bc(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function cc(b){return function(a,c){b(c,a)}}function jd(){return++fb}function dc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function C(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});dc(b,a);return b}function Y(b){return parseInt(b,10)}function ec(b,a){return C(new (C(function(){},{prototype:b})),a)}function A(){}function Aa(b){return b}function ba(b){return function(){return b}}function F(b){return"undefined"===
typeof b}function D(b){return"undefined"!==typeof b}function R(b){return null!=b&&"object"===typeof b}function G(b){return"string"===typeof b}function Ba(b){return"number"===typeof b}function da(b){return"[object Date]"===xa.call(b)}function H(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===xa.call(b)}function Oa(b){return b&&b.window===b}function kd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function ld(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=
!0;return a}function md(b,a,c){var d=[];q(b,function(b,f,h){d.push(a.call(c,b,f,h))});return d}function Pa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ca(b,a){var c=Pa(b,a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Oa(b)||b&&b.$evalAsync&&b.$watch)throw Qa("cpws");if(a){if(b===a)throw Qa("cpi");c=c||[];d=d||[];if(R(b)){var e=Pa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],
null,c,d),R(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var h=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),R(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);dc(a,h)}}else if(a=b)L(b)?a=Da(b,[],c,d):da(b)?a=new Date(b.getTime()):gb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):R(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function ha(b,a){var c=0;if(L(b))for(a=a||[];c<b.length;c++)a[c]=b[c];
else if(R(b)){a=a||{};for(var d=Object.keys(b),e=d.length;c<e;c++){var f=d[c];if("$"!==f.charAt(0)||"$"!==f.charAt(1))a[f]=b[f]}}return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(da(b))return da(a)&&b.getTime()==a.getTime();if(gb(b)&&gb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&
b.$watch||a&&a.$evalAsync&&a.$watch||Oa(b)||Oa(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!H(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!H(a[d]))return!1;return!0}return!1}function Eb(b,a){var c=2<arguments.length?la.call(arguments,2):[];return!H(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(la.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):
a.call(b)}}function nd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Oa(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,nd,a?"  ":null)}function fc(b){return G(b)?JSON.parse(b):b}function ia(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return 3===b[0].nodeType?O(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+
O(b)})}catch(d){return O(c)}}function gc(b){try{return decodeURIComponent(b)}catch(a){}}function hc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=gc(c[0]),D(d)&&(b=D(c[1])?gc(c[1]):!0,Fb.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Gb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(ya(d,!0)+(!0===b?"":"="+ya(b,!0)))}):a.push(ya(d,!0)+(!0===b?"":"="+ya(b,!0)))});return a.length?a.join("&"):""}function hb(b){return ya(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ya(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function od(b,a){var c,d,e=ib.length;b=B(b);for(d=0;d<e;++d)if(c=ib[d]+a,G(c=b.attr(c)))return c;return null}function pd(b,a){var c,d,e={};q(ib,function(a){a+="app";!c&&(b.hasAttribute&&b.hasAttribute(a))&&(c=b,d=b.getAttribute(a))});q(ib,function(a){a+="app";var e;!c&&(e=b.querySelector("["+
a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==od(c,"strict-di"),a(c,d?[d]:[],e))}function ic(b,a,c){R(c)||(c={});c=C({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===V?"document":ia(b);throw Qa("btstrpd",d);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");d=Hb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);
return d},e=/^NG_DEFER_BOOTSTRAP!/;if(P&&!e.test(P.name))return d();P.name=P.name.replace(e,"");Ra.resumeBootstrap=function(b){q(b,function(b){a.push(b)});d()}}function jb(b,a){a=a||"_";return b.replace(qd,function(b,d){return(d?a:"")+b.toLowerCase()})}function rd(){var b;(ta=P.jQuery)&&ta.fn.on?(B=ta,C(ta.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),b=ta.cleanData,b=b.$$original||b,ta.cleanData=function(a){for(var c=
0,d;null!=(d=a[c]);c++)ta(d).triggerHandler("$destroy");b(a)},ta.cleanData.$$original=b):B=Q;Ra.element=B}function Ib(b,a,c){if(!b)throw Qa("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&L(b)&&(b=b[b.length-1]);Ib(H(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function za(b,a){if("hasOwnProperty"===b)throw Qa("badname",a);}function jc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);
return!c&&H(b)?Eb(e,b):b}function kb(b){var a=b[0];b=b[b.length-1];if(a===b)return B(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function sd(b){var a=S("$injector"),c=S("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||S;return b.module||(b.module=function(){var b={};return function(e,f,h){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e,f){f||(f=c);return function(){f[e||
"push"]([a,d,arguments]);return k}}if(!f)throw a("nomod",e);var c=[],d=[],n=[],p=b("$injector","invoke","push",d),k={_invokeQueue:c,_configBlocks:d,_runBlocks:n,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),config:p,run:function(a){n.push(a);return this}};h&&p(h);return k}())}}())}function td(b){C(b,{bootstrap:ic,copy:Da,extend:C,equals:ra,element:B,forEach:q,injector:Hb,noop:A,bind:Eb,toJson:sa,fromJson:fc,identity:Aa,isUndefined:F,isDefined:D,isString:G,isFunction:H,isObject:R,isNumber:Ba,isElement:kd,isArray:L,version:ud,isDate:da,lowercase:O,uppercase:lb,callbacks:{counter:0},$$minErr:S,$$csp:Ta});Ua=sd(P);try{Ua("ngLocale")}catch(a){Ua("ngLocale",[]).provider("$locale",vd)}Ua("ng",
["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:wd});a.provider("$compile",kc).directive({a:xd,input:lc,textarea:lc,form:yd,script:zd,select:Ad,style:Bd,option:Cd,ngBind:Dd,ngBindHtml:Ed,ngBindTemplate:Fd,ngClass:Gd,ngClassEven:Hd,ngClassOdd:Id,ngCloak:Jd,ngController:Kd,ngForm:Ld,ngHide:Md,ngIf:Nd,ngInclude:Od,ngInit:Pd,ngNonBindable:Qd,ngPluralize:Rd,ngRepeat:Sd,ngShow:Td,ngStyle:Ud,ngSwitch:Vd,ngSwitchWhen:Wd,ngSwitchDefault:Xd,ngOptions:Yd,ngTransclude:Zd,ngModel:$d,ngList:ae,ngChange:be,
pattern:mc,ngPattern:mc,required:nc,ngRequired:nc,minlength:oc,ngMinlength:oc,maxlength:pc,ngMaxlength:pc,ngValue:ce,ngModelOptions:de}).directive({ngInclude:ee}).directive(mb).directive(qc);a.provider({$anchorScroll:fe,$animate:ge,$browser:he,$cacheFactory:ie,$controller:je,$document:ke,$exceptionHandler:le,$filter:rc,$interpolate:me,$interval:ne,$http:oe,$httpBackend:pe,$location:qe,$log:re,$parse:se,$rootScope:te,$q:ue,$$q:ve,$sce:we,$sceDelegate:xe,$sniffer:ye,$templateCache:ze,$timeout:Ae,$window:Be,
$$rAF:Ce,$$asyncCallback:De})}])}function Va(b){return b.replace(Ee,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Fe,"Moz$1")}function Ge(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Jb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(He.exec(b)||["",""])[1].toLowerCase();d=ea[d]||ea._default;c.innerHTML=d[1]+b.replace(Ie,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=f.concat(la.call(c.childNodes,void 0));c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent=
"";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;G(b)&&(b=$(b));if(!(this instanceof Q)){if(G(b)&&"<"!=b.charAt(0))throw Kb("nosel");return new Q(b)}if(G(b)){var a;a=V;var c;b=(c=Je.exec(b))?[a.createElement(c[1])]:(c=Ge(b,a))?c.childNodes:[]}sc(this,b)}function Lb(b){return b.cloneNode(!0)}function nb(b,a){a||ob(b);if(b.childNodes&&b.childNodes.length)for(var c=b.getElementsByTagName?b.getElementsByTagName("*"):b.querySelectorAll?b.querySelectorAll("*"):
[],d=0,e=c.length;d<e;d++)ob(c[d])}function tc(b,a,c,d){if(D(d))throw Kb("offargs");var e=ma(b,"events");ma(b,"handle")&&(F(a)?q(e,function(a,c){Wa(b,c,a);delete e[c]}):q(a.split(" "),function(a){F(c)?(Wa(b,a,e[a]),delete e[a]):Ca(e[a]||[],c)}))}function ob(b,a){var c=b.ng339,d=Xa[c];d&&(a?delete Xa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),tc(b)),delete Xa[c],b.ng339=s))}function ma(b,a,c){var d=b.ng339,d=Xa[d||-1];if(D(c))d||(b.ng339=d=++Ke,d=Xa[d]={}),d[a]=c;else return d&&
d[a]}function Mb(b,a,c){if(!b.nodeType||1===b.nodeType||9===b.nodeType){var d=ma(b,"data"),e=D(c),f=!e&&D(a),h=f&&!R(a);d||h||ma(b,"data",d={});if(e)d[a]=c;else if(f){if(h)return d&&d[a];C(d,a)}else return d}}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function pb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+$(a)+
" "," ")))})}function qb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function sc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;"number"===typeof c&&a.window!==a?c&&(a.item&&(a=la.call(a)),uc.apply(b,a)):b[b.length++]=a}}function vc(b,a){return rb(b,"$"+(a||"ngController")+"Controller")}function rb(b,a,c){9==b.nodeType&&(b=b.documentElement);
for(a=L(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}function wc(b){for(nb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function xc(b,a){var c=sb[a.toLowerCase()];return c&&yc[na(b)]&&c}function Le(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&zc[a]}function Me(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=
!0});c.target||(c.target=c.srcElement||V);if(F(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var h=ha(a[e||c.type]||[]);q(h,function(a){a.call(b,c)});8>=T?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Fa(b,a){var c=
typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=b.$$hashKey)?d=b.$$hashKey():d===s&&(d=b.$$hashKey=(a||jd)()):d=b;return c+":"+d}function Ya(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function Ne(b){return(b=b.toString().replace(Ac,"").match(Bc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ob(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw G(c)&&c||(c=b.name||Ne(b)),Ga("strictdi",c);a=b.toString().replace(Ac,
"");a=a.match(Bc);q(a[1].split(Oe),function(a){a.replace(Pe,function(a,b,c){d.push(c)})})}b.$inject=d}}else L(b)?(a=b.length-1,Sa(b[a],"fn"),d=b.slice(0,a)):Sa(b,"fn",!0);return d}function Hb(b,a){function c(a){return function(b,c){if(R(b))q(b,cc(a));else return a(b,c)}}function d(a,b){za(a,"service");if(H(b)||L(b))b=k.instantiate(b);if(!b.$get)throw Ga("pget",a);return p[a+m]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<
c;b++){var e=a[b],f=k.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{G(a)?(c=Ua(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):H(a)?b.push(k.invoke(a)):L(a)?b.push(k.invoke(a)):Sa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&(e.stack&&-1==e.stack.indexOf(e.message))&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===g)throw Ga("cdep",
a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=g,b[a]=c(a)}catch(e){throw b[a]===g&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Ob(b,a,g);var m,l,k;l=0;for(m=g.length;l<m;l++){k=g[l];if("string"!==typeof k)throw Ga("itkn",k);h.push(f&&f.hasOwnProperty(k)?f[k]:d(k))}L(b)&&(b=b[m]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(L(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,
c);return R(a)||H(a)?a:d},get:d,annotate:Ob,has:function(a){return p.hasOwnProperty(a+m)||b.hasOwnProperty(a)}}}a=!0===a;var g={},m="Provider",l=[],n=new Ya([],!0),p={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,ba(b))}),constant:c(function(a,b){za(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=k.get(a+m),d=c.$get;c.$get=function(){var a=u.invoke(d,c);return u.invoke(b,null,
{$delegate:a})}}}},k=p.$injector=h(p,function(){throw Ga("unpr",l.join(" <- "));},a),t={},u=t.$injector=h(t,function(a){var b=k.get(a+m);return u.invoke(b.$get,b,s,a)},a);q(f(b),function(a){u.invoke(a||A)});return u}function fe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==na(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?
d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function De(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Qe(b,a,c,d){function e(a){try{a.apply(null,la.call(arguments,1))}finally{if(u--,0===u)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Ha(){q(w,function(a){a()});y=b(Ha,a)})()}
function h(){r=null;v!=g.url()&&(v=g.url(),q(U,function(a){a(g.url())}))}var g=this,m=a[0],l=b.location,n=b.history,p=b.setTimeout,k=b.clearTimeout,t={};g.isMock=!1;var u=0,K=[];g.$$completeOutstandingRequest=e;g.$$incOutstandingRequestCount=function(){u++};g.notifyWhenNoOutstandingRequests=function(a){q(w,function(a){a()});0===u?a():K.push(a)};var w=[],y;g.addPollFn=function(a){F(y)&&f(100,p);w.push(a);return a};var v=l.href,x=a.find("base"),r=null;g.url=function(a,c){l!==b.location&&(l=b.location);
n!==b.history&&(n=b.history);if(a){if(v!=a)return v=a,d.history?c?n.replaceState(null,"",a):(n.pushState(null,"",a),x.attr("href",x.attr("href"))):(r=a,c?l.replace(a):l.href=a),g}else return r||l.href.replace(/%27/g,"'")};var U=[],N=!1;g.onUrlChange=function(a){if(!N){if(d.history)B(b).on("popstate",h);if(d.hashchange)B(b).on("hashchange",h);else g.addPollFn(h);N=!0}U.push(a);return a};g.baseHref=function(){var a=x.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var W={},I="",E=g.baseHref();
g.cookies=function(a,b){var d,e,f,g;if(a)b===s?m.cookie=encodeURIComponent(a)+"=;path="+E+";expires=Thu, 01 Jan 1970 00:00:00 GMT":G(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+E).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==I)for(I=m.cookie,d=I.split("; "),W={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=decodeURIComponent(e.substring(0,g)),W[a]===s&&(W[a]=decodeURIComponent(e.substring(g+
1))));return W}};g.defer=function(a,b){var c;u++;c=p(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};g.defer.cancel=function(a){return t[a]?(delete t[a],k(a),e(A),!0):!1}}function he(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Qe(b,d,a,c)}]}function ie(){this.$get=function(){function b(b,d){function e(a){a!=p&&(k?k==a&&(k=a.n):k=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw S("$cacheFactory")("iid",b);var h=
0,g=C({},d,{id:b}),m={},l=d&&d.capacity||Number.MAX_VALUE,n={},p=null,k=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in m||h++,m[a]=b,h>l&&this.remove(k.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==k&&(k=b.n);f(b.n,b.p);delete n[a]}delete m[a];h--},removeAll:function(){m={};h=0;n={};p=k=null},destroy:function(){n=
g=m=null;delete a[b]},info:function(){return C({},g,{size:h})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ze(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function kc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,h=ld("ngSrc,ngSrcset,src,srcset"),g=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){za(a,"directive");G(a)?(Ib(e,
"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);H(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"EA";e.push(g)}catch(h){d(h)}});return e}])),c[a].push(e)):q(a,cc(l));return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,p,k,t,u,K,w,y,v,x,r){function U(a,b,c,d,e){a instanceof B||(a=B(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});
var f=W(a,b,a,c,d,e);N(a,"ng-scope");return function(b,c,d,e){Ib(b,"scope");var g=c?Ea.clone.call(a):a;q(d,function(a,b){g.data("$"+b+"Controller",a)});g.data("$scope",b);c&&c(g,b);f&&f(b,g,g,e);return g}}function N(a,b){try{a.addClass(b)}catch(c){}}function W(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,n,p,t,w;f=c.length;var y=Array(f);for(n=0;n<f;n++)y[n]=c[n];t=n=0;for(p=h.length;n<p;t++)l=y[t],c=h[n++],f=h[n++],c?(c.scope?(k=a.$new(),B.data(l,"$scope",k)):k=a,w=c.transcludeOnThisElement?I(a,c.transclude,
e):!c.templateOnThisElement&&e?e:!e&&b?I(a,b):null,c(f,k,l,d,w)):f&&f(a,l.childNodes,s,e)}for(var h=[],l,k,n,p,t=0;t<a.length;t++)l=new Pb,k=E(a[t],[],l,0===t?d:s,e),(f=k.length?ca(k,a[t],l,b,c,null,[],[],f):null)&&f.scope&&N(l.$$element,"ng-scope"),l=f&&f.terminal||!(n=a[t].childNodes)||!n.length?null:W(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),h.push(f,l),p=p||f||l,f=null;return p?g:null}function I(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=
!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function E(b,g,h,k,n){var t=h.$attr,p;switch(b.nodeType){case 1:D(g,oa(na(b)),"E",k,n);for(var w,y,K,u=b.attributes,x=0,r=u&&u.length;x<r;x++){var v=!1,N=!1;w=u[x];if(!T||8<=T||w.specified){p=w.name;w=$(w.value);y=oa(p);if(K=Ja.test(y))p=jb(y.substr(6),"-");var q=y.replace(/(Start|End)$/,""),I;a:{var z=q;if(c.hasOwnProperty(z)){I=void 0;for(var z=a.get(z+d),X=0,E=z.length;X<E;X++)if(I=z[X],I.multiElement){I=!0;break a}}I=!1}I&&
y===q+"Start"&&(v=p,N=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));y=oa(p.toLowerCase());t[y]=p;if(K||!h.hasOwnProperty(y))h[y]=w,xc(b,y)&&(h[y]=!0);fa(b,g,w,y);D(g,y,"A",k,n,v,N)}}b=b.className;if(G(b)&&""!==b)for(;p=f.exec(b);)y=oa(p[2]),D(g,y,"C",k,n)&&(h[y]=$(p[3])),b=b.substr(p.index+p[0].length);break;case 3:Ka(g,b.nodeValue);break;case 8:try{if(p=e.exec(b.nodeValue))y=oa(p[1]),D(g,y,"M",k,n)&&(h[y]=$(p[2]))}catch(U){}}g.sort(M);return g}function z(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function X(a,b,c){return function(d,e,f,g,h){e=z(e[0],b,c);return a(d,e,f,g,h)}}function ca(a,c,d,e,f,g,h,l,k){function t(a,b,c,d){if(a){c&&(a=X(a,c,d));a.require=J.require;a.directiveName=fa;if(I===J||J.$$isolateScope)a=Dc(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=X(b,c,d));b.require=J.require;b.directiveName=fa;if(I===
J||J.$$isolateScope)b=Dc(b,{isolateScope:!0});l.push(b)}}function w(a,b,c,d){var e,f="data",g=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else L(b)&&(e=[],q(b,function(b){e.push(w(a,b,c,d))}));return e}function y(a,e,f,g,k){function t(a,b){var c;2>arguments.length&&(b=a,a=s);Ka&&(c=U);return k(a,b,c)}var x,r,Cc,z,X,E,U={},ca;x=c===f?d:ha(d,new Pb(B(f),
d.$attr));r=x.$$element;if(I){var Ha=/^\s*([@=&])(\??)\s*(\w*)\s*$/;E=e.$new(!0);!W||W!==I&&W!==I.$$originalDirective?r.data("$isolateScopeNoTemplate",E):r.data("$isolateScope",E);N(r,"ng-isolate-scope");q(I.scope,function(a,c){var d=a.match(Ha)||[],f=d[3]||c,g="?"==d[2],d=d[1],h,k,l,p;E.$$isolateBindings[c]=d+f;switch(d){case "@":x.$observe(f,function(a){E[c]=a});x.$$observers[f].$$scope=e;x[f]&&(E[c]=b(x[f])(e));break;case "=":if(g&&!x[f])break;k=u(x[f]);p=k.literal?ra:function(a,b){return a===
b};l=k.assign||function(){h=E[c]=k(e);throw ja("nonassign",x[f],I.name);};h=E[c]=k(e);g=e.$watch(u(x[f],function(a){p(a,E[c])||(p(a,h)?l(e,a=E[c]):E[c]=a);return h=a}),null,k.literal);E.$on("$destroy",g);break;case "&":k=u(x[f]);E[c]=function(a){return k(e,a)};break;default:throw ja("iscp",I.name,c,a);}})}ca=k&&t;v&&q(v,function(a){var b={$scope:a===I||a.$$isolateScope?E:e,$element:r,$attrs:x,$transclude:ca},c;X=a.controller;"@"==X&&(X=x[a.name]);c=K(X,b);U[a.name]=c;Ka||r.data("$"+a.name+"Controller",
c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(Cc=h.length;g<Cc;g++)try{z=h[g],z(z.isolateScope?E:e,r,x,z.require&&w(z.directiveName,z.require,r,U),ca)}catch(D){p(D,ia(r))}g=e;I&&(I.template||null===I.templateUrl)&&(g=E);a&&a(g,f.childNodes,s,k);for(g=l.length-1;0<=g;g--)try{z=l[g],z(z.isolateScope?E:e,r,x,z.require&&w(z.directiveName,z.require,r,U),ca)}catch(Re){p(Re,ia(r))}}k=k||{};for(var x=-Number.MAX_VALUE,r,v=k.controllerDirectives,I=k.newIsolateScopeDirective,W=k.templateDirective,
ca=k.nonTlbTranscludeDirective,D=!1,Za=!1,Ka=k.hasElementTranscludeDirective,C=d.$$element=B(c),J,fa,M,O=e,Q,P=0,Ia=a.length;P<Ia;P++){J=a[P];var Ja=J.$$start,T=J.$$end;Ja&&(C=z(c,Ja,T));M=s;if(x>J.priority)break;if(M=J.scope)J.templateUrl||(R(M)?(La("new/isolated scope",I||r,J,C),I=J):La("new/isolated scope",I,J,C)),r=r||J;fa=J.name;!J.templateUrl&&J.controller&&(M=J.controller,v=v||{},La("'"+fa+"' controller",v[fa],J,C),v[fa]=J);if(M=J.transclude)D=!0,J.$$tlb||(La("transclusion",ca,J,C),ca=J),"element"==
M?(Ka=!0,x=J.priority,M=C,C=d.$$element=B(V.createComment(" "+fa+": "+d[fa]+" ")),c=C[0],tb(f,la.call(M,0),c),O=U(M,e,x,g&&g.name,{nonTlbTranscludeDirective:ca})):(M=B(Lb(c)).contents(),C.empty(),O=U(M,e));if(J.template)if(Za=!0,La("template",W,J,C),W=J,M=H(J.template)?J.template(C,d):J.template,M=Ec(M),J.replace){g=J;M=Jb.test(M)?B(S(J.type,$(M))):[];c=M[0];if(1!=M.length||1!==c.nodeType)throw ja("tplrt",fa,"");tb(f,C,c);Ia={$attr:{}};M=E(c,[],Ia);var Y=a.splice(P+1,a.length-(P+1));I&&Ha(M);a=a.concat(M).concat(Y);
A(d,Ia);Ia=a.length}else C.html(M);if(J.templateUrl)Za=!0,La("template",W,J,C),W=J,J.replace&&(g=J),y=F(a.splice(P,a.length-P),C,d,f,D&&O,h,l,{controllerDirectives:v,newIsolateScopeDirective:I,templateDirective:W,nonTlbTranscludeDirective:ca}),Ia=a.length;else if(J.compile)try{Q=J.compile(C,d,O),H(Q)?t(null,Q,Ja,T):Q&&t(Q.pre,Q.post,Ja,T)}catch(Z){p(Z,ia(C))}J.terminal&&(y.terminal=!0,x=Math.max(x,J.priority))}y.scope=r&&!0===r.scope;y.transcludeOnThisElement=D;y.templateOnThisElement=Za;y.transclude=
O;k.hasElementTranscludeDirective=Ka;return y}function Ha(a){for(var b=0,c=a.length;b<c;b++)a[b]=ec(a[b],{$$isolateScope:!0})}function D(b,e,f,g,h,k,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var y=0,w=e.length;y<w;y++)try{t=e[y],(g===s||g>t.priority)&&-1!=t.restrict.indexOf(f)&&(k&&(t=ec(t,{$$start:k,$$end:n})),b.push(t),h=t)}catch(K){p(K)}}return h}function A(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===
e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function F(a,b,c,d,e,f,g,h){var l=[],n,p,y=b[0],w=a.shift(),K=C({},w,{templateUrl:null,transclude:null,replace:null,$$originalDirective:w}),u=H(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,x=w.type;b.empty();k.get(v.getTrustedResourceUrl(u),
{cache:t}).success(function(k){var t,r;k=Ec(k);if(w.replace){k=Jb.test(k)?B(S(x,$(k))):[];t=k[0];if(1!=k.length||1!==t.nodeType)throw ja("tplrt",w.name,u);k={$attr:{}};tb(d,b,t);var v=E(t,[],k);R(w.scope)&&Ha(v);a=v.concat(a);A(c,k)}else t=y,b.html(k);a.unshift(K);n=ca(a,t,c,e,b,w,f,g,h);q(d,function(a,c){a==t&&(d[c]=b[0])});for(p=W(b[0].childNodes,e);l.length;){k=l.shift();r=l.shift();var z=l.shift(),X=l.shift(),v=b[0];if(r!==y){var U=r.className;h.hasElementTranscludeDirective&&w.replace||(v=Lb(t));
tb(z,B(r),v);N(B(v),U)}r=n.transcludeOnThisElement?I(k,n.transclude,X):X;n(p,k,v,d,r)}l=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;l?(l.push(b),l.push(c),l.push(d),l.push(a)):(n.transcludeOnThisElement&&(a=I(b,n.transclude,e)),n(p,b,c,d,a))}}function M(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function La(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function Ka(a,c){var d=b(c,!0);d&&
a.push({priority:0,compile:function(a){var b=a.parent().length;b&&N(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||N(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function S(a,b){a=O(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Za(a,b){if("srcdoc"==b)return v.HTML;var c=na(a);if("xlinkHref"==
b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function fa(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"select"===na(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,Za(a,e),h[e]))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,
a)})}}}})}}function tb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);c[B.expando]=d[B.expando];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Dc(a,b){return C(function(){return a.apply(null,arguments)},a,b)}var Pb=function(a,b){this.$$element=
a;this.$attr=b||{}};Pb.prototype={$normalize:oa,$addClass:function(a){a&&0<a.length&&x.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&x.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Fc(a,b),d=Fc(b,a);0===c.length?x.removeClass(this.$$element,d):0===d.length?x.addClass(this.$$element,c):x.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=this.$$element[0],f=xc(e,a),g=Le(e,a),e=a;f?(this.$$element.prop(a,b),d=f):g&&(this[g]=b,e=g);this[a]=b;d?this.$attr[a]=
d:(d=this.$attr[a])||(this.$attr[a]=d=jb(a,"-"));f=na(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=r(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(a=this.$$observers)&&q(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Ca(e,b)}}};var Q=b.startSymbol(),P=b.endSymbol(),Ec=
"{{"==Q||"}}"==P?Aa:function(a){return a.replace(/\{\{/g,Q).replace(/}}/g,P)},Ja=/^ngAttr[A-Z]/;return U}]}function oa(b){return Va(b.replace(Se,""))}function Fc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?" ":"")+h}return c}function je(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){za(a,"controller");R(a)?C(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector",
"$window",function(d,e){return function(f,h){var g,m,l;G(f)&&(g=f.match(c),m=g[1],l=g[3],f=b.hasOwnProperty(m)?b[m]:jc(h.$scope,m,!0)||(a?jc(e,m,!0):s),Sa(f,m,!0));g=d.instantiate(f,h,m);if(l){if(!h||"object"!==typeof h.$scope)throw S("$controller")("noscp",m||f.name,l);h.$scope[l]=g}return g}}]}function ke(){this.$get=["$window",function(b){return B(b.document)}]}function le(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Gc(b){var a={},c,d,e;if(!b)return a;
q(b.split("\n"),function(b){e=b.indexOf(":");c=O($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Hc(b){var a=R(b)?b:s;return function(c){a||(a=Gc(b));return c?a[O(c)]||null:a}}function Ic(b,a,c){if(H(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function oe(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&
(d=fc(d)));return d}],transformRequest:[function(a){return R(a)&&"[object File]"!==xa.call(a)&&"[object Blob]"!==xa.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function k(a){function b(a){var d=C({},a,{data:Ic(a.data,a.headers,c.transformResponse)});
return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=C({},a.headers),d,f,b=C({},b.common,b[O(a.method)]);a:for(d in b){a=O(d);for(f in c)if(O(f)===a)continue a;c[d]=b[d]}(function(a){var b;q(a,function(c,d){H(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);C(c,a);c.headers=d;c.method=lb(c.method);var f=[function(a){d=a.headers;var c=Ic(a.data,Hc(d),a.transformRequest);
F(c)&&q(d,function(a,b){"content-type"===O(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=n.when(c);for(q(w,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,
function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,f,m){function p(a,b,c,e){E&&(200<=a&&300>a?E.put(X,[a,b,Gc(c),e]):E.remove(X));t(b,a,c,e);d.$$phase||d.$apply()}function t(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?q.resolve:q.reject)({data:a,status:b,headers:Hc(d),config:c,statusText:e})}function w(){var a=Pa(k.pendingRequests,c);-1!==a&&k.pendingRequests.splice(a,1)}var q=n.defer(),I=q.promise,E,z,X=u(c.url,c.params);k.pendingRequests.push(c);I.then(w,w);(c.cache||e.cache)&&
(!1!==c.cache&&"GET"==c.method)&&(E=R(c.cache)?c.cache:R(e.cache)?e.cache:K);if(E)if(z=E.get(X),D(z)){if(z&&H(z.then))return z.then(w,w),z;L(z)?t(z[1],z[0],ha(z[2]),z[3]):t(z,200,{},"OK")}else E.put(X,I);F(z)&&((z=Qb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(m[c.xsrfHeaderName||e.xsrfHeaderName]=z),a(c.method,X,f,p,m,c.timeout,c.withCredentials,c.responseType));return I}function u(a,b){if(!b)return a;var c=[];id(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),q(a,function(a){R(a)&&
(da(a)?a=a.toISOString():R(a)&&(a=sa(a)));c.push(ya(b)+"="+ya(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var K=c("$http"),w=[];q(f,function(a){w.unshift(G(a)?p.get(a):p.invoke(a))});k.pendingRequests=[];(function(a){q(arguments,function(a){k[a]=function(b,c){return k(C(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){k[a]=function(b,c,d){return k(C(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=
e;return k}]}function Te(b){if(8>=T&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw S("$httpBackend")("noxhr");}function pe(){this.$get=["$browser","$window","$document",function(b,a,c){return Ue(b,Te,b.defer,a.angular.callbacks,c[0])}]}function Ue(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),h=null;f.type="text/javascript";f.src=a;f.async=!0;h=function(a){Wa(f,
"load",h);Wa(f,"error",h);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};ub(f,"load",h);ub(f,"error",h);e.body.appendChild(f);return h}var h=-1;return function(e,m,l,n,p,k,t,u){function K(){y=h;x&&x();r&&r.abort()}function w(a,d,e,f,g){N&&c.cancel(N);x=r=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(A)}var y;b.$$incOutstandingRequestCount();
m=m||b.url();if("jsonp"==O(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};var x=f(m.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){w(n,a,d[v].data,"",b);d[v]=A})}else{var r=a(e);r.open(e,m,!0);q(p,function(a,b){D(a)&&r.setRequestHeader(b,a)});r.onreadystatechange=function(){if(r&&4==r.readyState){var a=null,b=null,c="";y!==h&&(a=r.getAllResponseHeaders(),b="response"in r?r.response:r.responseText);y===h&&10>T||(c=r.statusText);w(n,y||r.status,
b,a,c)}};t&&(r.withCredentials=!0);if(u)try{r.responseType=u}catch(U){if("json"!==u)throw U;}r.send(l||null)}if(0<k)var N=c(K,k);else k&&H(k.then)&&k.then(K)}}function me(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function h(f,h,t,u){function K(a){try{var b;var c=t?e.getTrusted(t,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;
case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(g){a=Rb("interr",f,g.toString()),d(a)}}u=!!u;for(var w,y,v=0,x=[],r=[],U=[],N=f.length,W=!1,I=!1,E=[];v<N;)if(-1!=(w=f.indexOf(b,v))&&-1!=(y=f.indexOf(a,w+g)))v!==w&&(I=!0),x.push(f.substring(v,w)),v=f.substring(w+g,y),r.push(v),U.push(c(v,K)),v=y+m,W=!0;else{v!==N&&(I=!0,x.push(f.substring(v)));break}q(x,function(c,d){x[d]=x[d].replace(l,b).replace(n,a)});x.length===r.length&&x.push("");if(t&&W&&(I||1<r.length))throw Rb("noconcat",f);
if(!h||W){E.length=x.length+r.length;var z=function(a){for(var b=0,c=r.length;b<c;b++){if(u&&F(a[b]))return;E[2*b]=x[b];E[2*b+1]=a[b]}E[2*c]=x[c];return E.join("")};return C(function(a){var b=0,c=r.length,e=Array(c);try{for(;b<c;b++)e[b]=U[b](a);return z(e)}catch(g){a=Rb("interr",f,g.toString()),d(a)}},{exp:f,separators:x,expressions:r,$$watchDelegate:function(a,b,c,d){var e;return a.$watchGroup(U,function(c,d){var f=z(c);H(b)&&b.call(this,f,c!==d?e:f,a);e=f},c,d)}})}}var g=b.length,m=a.length,l=
RegExp(b.replace(/./g,f),"g"),n=RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function ne(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,g,m,l){var n=a.setInterval,p=a.clearInterval,k=0,t=D(l)&&!l,u=(t?d:c).defer(),K=u.promise;m=D(m)?m:0;K.then(null,null,e);K.$$intervalId=n(function(){u.notify(k++);0<m&&k>=m&&(u.resolve(k),p(K.$$intervalId),delete f[K.$$intervalId]);t||b.$apply()},g);f[K.$$intervalId]=u;
return K}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function vd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},
DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",
shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Sb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=hb(b[a]);return b.join("/")}function Jc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||Ve[b.protocol]||null}function Kc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=hc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&
"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function pa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function $a(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Tb(b){return b.substr(0,$a(b).lastIndexOf("/")+1)}function Lc(b,a){this.$$html5=!0;a=a||"";var c=Tb(b);Jc(b,this,b);this.$$parse=function(a){var e=pa(c,a);if(!G(e))throw Ub("ipthprfx",a,c);Kc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Gb(this.$$search),b=this.$$hash?"#"+
hb(this.$$hash):"";this.$$url=Sb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=pa(b,d))!==s)return d=e,(e=pa(a,e))!==s?c+(pa("/",e)||e):b+d;if((e=pa(c,d))!==s)return c+e;if(c==d+"/")return c}}function Vb(b,a){var c=Tb(b);Jc(b,this,b);this.$$parse=function(d){var e=pa(b,d)||pa(c,d),e="#"==e.charAt(0)?pa(a,e):this.$$html5?e:"";if(!G(e))throw Ub("ihshprfx",d,a);Kc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,
""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Sb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if($a(b)==$a(a))return a}}function Wb(b,a){this.$$html5=!0;Vb.apply(this,arguments);var c=Tb(b);this.$$rewrite=function(d){var e;if(b==$a(d))return d;if(e=pa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=
Gb(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Sb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function vb(b){return function(){return this[b]}}function Mc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function qe(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function h(a){c.$broadcast("$locationChangeSuccess",
g.absUrl(),a)}var g,m,l=d.baseHref(),n=d.url(),p;a?(p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(l||"/"),m=e.history?Lc:Wb):(p=$a(n),m=Vb);g=new m(p,"#"+b);g.$$parse(g.$$rewrite(n));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=B(a.target);"a"!==na(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href");R(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ua(h.animVal).href);if(m===Wb){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(h=
"#"+b,"/"==k[0])h=p+h+k;else if("#"==k[0])h=p+h+(g.path()||"/")+k;else{for(var l=g.path().split("/"),k=k.split("/"),n=0;n<k.length;n++)"."!=k[n]&&(".."==k[n]?l.pop():k[n].length&&l.push(k[n]));h=p+h+l.join("/")}}l=g.$$rewrite(h);h&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(g.$$parse(l),c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});g.absUrl()!=n&&d.url(g.absUrl(),!0);d.onUrlChange(function(a){g.absUrl()!=a&&(c.$evalAsync(function(){var b=g.absUrl();
g.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(g.$$parse(b),d.url(b)):h(b)}),c.$$phase||c.$digest())});var k=0;c.$watch(function(){var a=d.url(),b=g.$$replace;k&&a==g.absUrl()||(k++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",g.absUrl(),a).defaultPrevented?g.$$parse(a):(d.url(g.absUrl(),b),h(a))}));g.$$replace=!1;return k});return g}]}function re(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function qa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ka("isecfld",a);return b}function Ma(b,a){if(b){if(b.constructor===b)throw ka("isecfn",a);if(b.window===b)throw ka("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ka("isecdom",a);if(b===Object)throw ka("isecobj",a);}return b}function wb(b,a,c,d){a=a.split(".");for(var e,f=0;1<a.length;f++){e=qa(a.shift(),d);var h=b[e];
h||(h={},b[e]=h);b=h}e=qa(a.shift(),d);Ma(b,d);Ma(b[e],d);return b[e]=c}function Nc(b,a,c,d,e,f){qa(b,f);qa(a,f);qa(c,f);qa(d,f);qa(e,f);return function(f,g){var m=g&&g.hasOwnProperty(b)?g:f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return s;m=m[a];if(!c)return m;if(null==m)return s;m=m[c];if(!d)return m;if(null==m)return s;m=m[d];return e?null==m?s:m=m[e]:m}}function Oc(b,a,c){if(Xb.hasOwnProperty(b))return Xb[b];var d=b.split("."),e=d.length;if(a.csp)a=6>e?Nc(d[0],d[1],d[2],d[3],d[4],
c):function(a,b){var f=0,l;do l=Nc(d[f++],d[f++],d[f++],d[f++],d[f++],c)(a,b),b=s,a=l;while(f<e);return l};else{var f="var p;\n";q(d,function(a,b){qa(a,c);f+="if(s == null) return undefined;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+"."+a+";\n"});f+="return s;";a=new Function("s","k",f);a.toString=ba(f)}"hasOwnProperty"!==b&&(Xb[b]=a);return a}function se(){var b={},a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a,b,c,d,e){var f,h;return f=a.$watch(function(a){return e(a)},
function(a,c,d){h=a;H(b)&&b.apply(this,arguments);D(a)&&d.$$postDigest(function(){D(h)&&f()})},c,d)}function f(a,b,c,d,e){var f;return f=a.$watch(function(a){return e(a)},function(a,c,d){H(b)&&b.apply(this,arguments);f()},c,d)}function h(a,b){if(H(b)){var c=function(c,d){var e=a(c,d),f=b(e,c,d);return D(e)?f:e};c.$$watchDelegate=a.$$watchDelegate;return c}return a}a.csp=d.csp;return function(d,m){var l,n,p=d=$(d);switch(typeof d){case "string":return b.hasOwnProperty(p)?l=b[p]:(":"===d.charAt(0)&&
":"===d.charAt(1)&&(n=!0,d=d.substring(2)),l=new Yb(a),l=(new ab(l,c,a)).parse(d),l.constant?l.$$watchDelegate=f:n&&(l.$$watchDelegate=e),"hasOwnProperty"!==p&&(b[p]=l)),h(l,m);case "function":return h(d,m);default:return h(A,m)}}}]}function ue(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function ve(){this.$get=["$browser","$exceptionHandler",function(b,a){return Pc(function(a){b.defer(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return h(a)}
var e=function(){var h=[],m,p;return p={resolve:function(a){if(h){var c=h;h=s;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){p.resolve(g(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var p=e(),w=function(d){try{p.resolve((H(b)?b:c)(d))}catch(e){p.reject(e),a(e)}},y=function(b){try{p.resolve((H(f)?f:d)(b))}catch(c){p.reject(c),a(c)}},
v=function(b){try{p.notify((H(g)?g:c)(b))}catch(d){a(d)}};h?h.push([w,y,v]):m.then(w,y,v);return p.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&H(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&
H(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){var b=e();b.reject(a);return b.promise},g=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((H(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}},m=function n(a){if(!H(a))throw new TypeError("Expected resolverFn");if(!(this instanceof n))return new n(a);var b=e();a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.defer=e;m.reject=h;m.when=
function(g,m,k,t){var u=e(),K,w=function(b){try{return(H(m)?m:c)(b)}catch(d){return a(d),h(d)}},y=function(b){try{return(H(k)?k:d)(b)}catch(c){return a(c),h(c)}},v=function(b){try{return(H(t)?t:c)(b)}catch(d){a(d)}};b(function(){f(g).then(function(a){K||(K=!0,u.resolve(f(a).then(w,y,v)))},function(a){K||(K=!0,u.resolve(y(a)))},function(a){K||u.notify(v(a))})});return u.promise};m.all=function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||
b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Ce(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};
f.supported=e;return f}]}function te(){var b=10,a=S("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,h){function g(){this.$id=++fb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};
this.$$isolateBindings={}}function m(b){if(k.$$phase)throw a("inprog",k.$$phase);k.$$phase=b}function l(a,b){var c=f(a);Sa(c,b);return c}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}g.prototype={constructor:g,$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++fb;this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d,e){var f=l(a,"watch");if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,e,f);var g=this.$$watchers,h={fn:b,
last:p,get:f,exp:a,eq:!!d};c=null;H(b)||(h.fn=A);g||(g=this.$$watchers=[]);g.unshift(h);return function(){Ca(g,h);c=null;H(e)&&e()}},$watchGroup:function(a,b){var c=Array(a.length),d=Array(a.length),e=[],f=0,g=this,h;if(1===a.length)return this.$watch(a[0],function(a,e,f){d[0]=a;c[0]=e;b.call(this,d,a===e?d:c,f)});q(a,function(a,b){var k=g.$watch(a,function(a,e){d[b]=a;c[b]=e;f++},!1,function(){Ca(e,k);e.length||h()});e.push(k)},this);h=g.$watch(function(){return f},function(a,e){b(d,a===e?d:c,g)});
return function(){for(;e.length;)e[0]()}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,m=f(a,function(a){d=a;var b,c;if(R(d))if(eb(d))for(e!==l&&(e=l,q=e.length=0,k++),a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)c=e[b]!==e[b]&&d[b]!==d[b],c||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(c=e[b]!==e[b]&&d[b]!==d[b],c||e[b]===d[b]||(k++,e[b]=d[b])):(q++,e[b]=d[b],k++));if(q>a)for(b in k++,e)e.hasOwnProperty(b)&&
!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,k++);return k}),l=[],n={},p=!0,q=0;return this.$watch(m,function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(h)if(R(d))if(eb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)Fb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,l=this.$$asyncQueue,n=this.$$postDigestQueue,q,r,U=b,N,D=[],I,E,z;m("$digest");c=null;do{r=!1;for(N=this;l.length;){try{z=l.shift(),z.scope.$eval(z.expression)}catch(s){k.$$phase=null,
e(s)}c=null}a:do{if(h=N.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(N))!==(g=d.last)&&!(d.eq?ra(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))r=!0,c=d,d.last=d.eq?Da(f,null):f,d.fn(f,g===p?f:g,N),5>U&&(I=4-U,D[I]||(D[I]=[]),E=H(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,E+="; newVal: "+sa(f)+"; oldVal: "+sa(g),D[I].push(E));else if(d===c){r=!1;break a}}catch(C){k.$$phase=null,e(C)}if(!(h=N.$$childHead||N!==this&&N.$$nextSibling))for(;N!==this&&!(h=N.$$nextSibling);)N=
N.$parent}while(N=h);if((r||l.length)&&!U--)throw k.$$phase=null,a("infdig",b,sa(D));}while(r||l.length);for(k.$$phase=null;n.length;)try{n.shift()()}catch(B){e(B)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==k&&(q(this.$$listenerCount,Eb(null,n,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=A,this.$on=this.$watch=this.$watchGroup=function(){return A})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){k.$$phase||k.$$asyncQueue.length||h.defer(function(){k.$$asyncQueue.length&&k.$digest()});
this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{k.$$phase=null;try{k.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Pa(c,b)]=null;n(e,1,a)}},$emit:function(a,
b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(la.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=
!0},defaultPrevented:!1},g=[f].concat(la.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var k=new g;return k}]}function wd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=
function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!T||8<=T)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function We(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw va("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(gb(b))return RegExp("^"+
b.source+"$");throw va("imatcher");}function Qc(b){var a=[];D(b)&&q(b,function(b){a.push(We(b))});return a}function xe(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Qc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Qc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw va("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),h={};h[ga.HTML]=d(f);h[ga.CSS]=d(f);h[ga.URL]=d(f);h[ga.JS]=d(f);h[ga.RESOURCE_URL]=d(h[ga.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw va("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw va("itype",a);return new c(b)},getTrusted:function(c,d){if(null===
d||d===s||""===d)return d;var f=h.hasOwnProperty(c)?h[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),n,p,k=!1;n=0;for(p=b.length;n<p;n++)if("self"===b[n]?Qb(f):b[n].exec(f.href)){k=!0;break}if(k)for(n=0,p=a.length;n<p;n++)if("self"===a[n]?Qb(f):a[n].exec(f.href)){k=!1;break}if(k)return d;throw va("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw va("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}
function we(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw va("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,
h=e.getTrusted,g=e.trustAs;q(ga,function(a,b){var c=O(b);e[Va("parse_as_"+c)]=function(b){return f(a,b)};e[Va("get_trusted_"+c)]=function(b){return h(a,b)};e[Va("trust_as_"+c)]=function(b){return g(a,b)}});return e}]}function ye(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(O((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h=f.documentMode,g,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,n=!1,p=!1;if(l){for(var k in l)if(n=
m.exec(k)){g=n[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");n=!!("transition"in l||g+"Transition"in l);p=!!("animation"in l||g+"Animation"in l);!d||n&&p||(n=G(f.body.style.webkitTransition),p=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!h||7<h),hasEvent:function(a){if("input"==a&&9==T)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ta(),vendorPrefix:g,
transitions:n,animations:p,android:d,msie:T,msieDocumentMode:h}}]}function Ae(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,m,l){var n=D(l)&&!l,p=(n?d:c).defer(),k=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete h[k.$$timeoutId]}n||b.$apply()},m);k.$$timeoutId=m;h[m]=p;return k}var h={};f.cancel=function(b){return b&&b.$$timeoutId in h?(h[b.$$timeoutId].reject("canceled"),delete h[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):
!1};return f}]}function ua(b,a){var c=b;T&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Qb(b){b=G(b)?ua(b):b;return b.protocol===Rc.protocol&&b.host===Rc.host}function Be(){this.$get=ba(P)}function rc(b){function a(d,
e){if(R(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Sc);a("date",Tc);a("filter",Xe);a("json",Ye);a("limitTo",Ze);a("lowercase",$e);a("number",Uc);a("orderBy",Vc);a("uppercase",af)}function Xe(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&
(c="boolean"===d&&c?function(a,b){return Ra.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==
d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var h in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(h);break;case "function":e.push(a);break;default:return b}d=[];for(h=0;h<b.length;h++){var g=b[h];e.check(g)&&d.push(g)}return d}}function Sc(b){var a=b.NUMBER_FORMATS;return function(b,
d){F(d)&&(d=a.CURRENCY_SYM);return Wc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Uc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Wc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Wc(b,a,c,d,e){if(null==b||!isFinite(b)||R(b))return"";var f=0>b;b=Math.abs(b);var h=b+"",g="",m=[],l=!1;if(-1!==h.indexOf("e")){var n=h.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(h="0",b=0):(g=h,l=!0)}if(l)0<e&&(-1<b&&1>b)&&(g=b.toFixed(e));else{h=(h.split(Xc)[1]||
"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(Xc);h=b[0];b=b[1]||"";var n=0,p=a.lgSize,k=a.gSize;if(h.length>=p+k)for(n=h.length-p,l=0;l<n;l++)0===(n-l)%k&&0!==l&&(g+=c),g+=h.charAt(l);for(l=n;l<h.length;l++)0===(h.length-l)%p&&0!==l&&(g+=c),g+=h.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(g+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(g);m.push(f?a.negSuf:a.posSuf);return m.join("")}function xb(b,
a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function aa(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return xb(e,a,d)}}function yb(b,a){return function(c,d){var e=c["get"+b](),f=lb(a?"SHORT"+b:b);return d[f][e]}}function Yc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Zc(b){return function(a){var c=Yc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+
(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return xb(a,b)}}function Tc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),h=Y(b[9]+b[11]));g.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;h=Y(b[5]||0)-h;g=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e){var f="",h=[],g,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=bf.test(c)?Y(c):a(c));Ba(c)&&(c=new Date(c));if(!da(c))return c;for(;e;)(m=cf.exec(e))?(h=h.concat(la.call(m,1)),e=h.pop()):(h.push(e),e=null);q(h,function(a){g=df[a];f+=g?g(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ye(){return function(b){return sa(b,!0)}}function Ze(){return function(b,a){if(!L(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Y(a);
if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Vc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(da(a)&&da(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!L(a)||!c)return a;c=L(c)?c:[c];
c=md(c,function(a){var c=!1,d=a||Aa;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var h=[],g=0;g<a.length;g++)h.push(a[g]);return h.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function wa(b){H(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function $c(b,a,c,d){function e(a,
c){c=c?"-"+jb(c,"-"):"";d.removeClass(b,(a?zb:Ab)+c);d.addClass(b,(a?Ab:zb)+c)}var f=this,h=b.parent().controller("form")||Bb,g=0,m=f.$error={},l=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;h.$addControl(f);b.addClass(Na);e(!0);f.$rollbackViewValue=function(){q(l,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(l,function(a){a.$commitViewValue()})};f.$addControl=function(a){za(a.$name,"input");l.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=
function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Ca(l,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Ca(d,c),d.length||(g--,g||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),h.$setValidity(a,!0,f)));else{g||e(b);if(d){if(-1!=Pa(d,c))return}else m[a]=d=[],g++,e(!1,a),h.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Na);d.addClass(b,Cb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=
function(){d.removeClass(b,Cb);d.addClass(b,Na);f.$dirty=!1;f.$pristine=!0;q(l,function(a){a.$setPristine()})}}function Zb(b,a,c,d){b.$setValidity(a,c);return c?d:s}function ad(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function ef(b,a,c,d,e){R(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||ad(e,d)||!ad(e,c))return f;b.$setValidity(a,!1)}))}function bb(b,a,c,d,e,f){var h=a.prop(ff),g=a[0].placeholder,m={};d.$$validityState=h;if(!e.android){var l=
!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val(),k=e&&e.type;if(T&&"input"===(e||m).type&&a[0].placeholder!==g)g=a[0].placeholder;else{c.ngTrim&&"false"===c.ngTrim||(f=$(f));var p=h&&d.$$hasNativeValidators;if(d.$viewValue!==f||""===f&&p)b.$$phase?d.$setViewValue(f,k,p):b.$apply(function(){d.$setViewValue(f,k,p)})}}};if(e.hasEvent("input"))a.on("input",n);else{var p,k=function(a){p||(p=f.defer(function(){n(a);p=null}))};
a.on("keydown",function(a){var b=a.keyCode;91===b||(15<b&&19>b||37<=b&&40>=b)||k(a)});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Db(b,a){return function(c){var d;return da(c)?c:G(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},q(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function cb(b,a,c,d){return function(e,f,h,g,m,l,n){bb(e,f,h,g,
m,l);g.$parsers.push(function(d){if(g.$isEmpty(d))return g.$setValidity(b,!0),null;if(a.test(d))return g.$setValidity(b,!0),c(d);g.$setValidity(b,!1);return s});g.$formatters.push(function(a){return da(a)?n("date")(a,d):""});h.min&&(e=function(a){var b=g.$isEmpty(a)||c(a)>=c(h.min);g.$setValidity("min",b);return b?a:s},g.$parsers.push(e),g.$formatters.push(e));h.max&&(e=function(a){var b=g.$isEmpty(a)||c(a)<=c(h.max);g.$setValidity("max",b);return b?a:s},g.$parsers.push(e),g.$formatters.push(e))}}
function bd(b,a,c,d,e){if(D(d)){b=b(d);if(!b.constant)throw(new S("ngModel"))("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",c,d);return b(a)}return e}function $b(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(G(a))return a.split(" ");if(R(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",
link:function(f,h,g){function m(a,b){var c=h.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});h.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var l=m(k,1);g.$addClass(l)}else if(!ra(b,n)){var q=e(n),l=d(k,q),k=d(q,k),k=m(k,-1),l=m(l,1);0===l.length?c.removeClass(h,k):0===k.length?c.addClass(h,l):c.setClass(h,l,k)}}n=ha(b)}var n;f.$watch(g[b],l,!0);g.$observe("class",function(a){l(f.$eval(g[b]))});
"ngClass"!==b&&f.$watch("$index",function(c,d){var h=c&1;if(h!==(d&1)){var l=e(f.$eval(g[b]));h===a?(h=m(l,1),g.$addClass(h)):(h=m(l,-1),g.$removeClass(h))}})}}}]}var gf=/^\/(.+)\/([a-z]*)$/,ff="validity",O=function(b){return G(b)?b.toLowerCase():b},Fb=Object.prototype.hasOwnProperty,lb=function(b){return G(b)?b.toUpperCase():b},T,B,ta,la=[].slice,uc=[].push,xa=Object.prototype.toString,Qa=S("ng"),Ra=P.angular||(P.angular={}),Ua,na,fb=0;T=Y((/msie (\d+)/.exec(O(navigator.userAgent))||[])[1]);isNaN(T)&&
(T=Y((/trident\/.*; rv:(\d+)/.exec(O(navigator.userAgent))||[])[1]));A.$inject=[];Aa.$inject=[];var L=function(){return H(Array.isArray)?Array.isArray:function(b){return"[object Array]"===xa.call(b)}}(),$=function(){return String.prototype.trim?function(b){return G(b)?b.trim():b}:function(b){return G(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();na=9>T?function(b){b=b.nodeName?b:b[0];return O(b.scopeName&&"HTML"!=b.scopeName?b.scopeName+":"+b.nodeName:b.nodeName)}:function(b){return O(b.nodeName?
b.nodeName:b[0].nodeName)};var Ta=function(){if(D(Ta.isActive_))return Ta.isActive_;var b=!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ta.isActive_=b},ib=["ng-","data-ng-","ng:","x-ng-"],qd=/[A-Z]/g,ud={full:"1.3.0-beta.17",major:1,minor:3,dot:0,codeName:"turing-autocompletion"};Q.expando="ng339";var Xa=Q.cache={},Ke=1,ub=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+
a,c)},Wa=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};Q._data=function(b){return this.cache[b[this.expando]]||{}};var Ee=/([\:\-\_]+(.))/g,Fe=/^moz([A-Z])/,Kb=S("jqLite"),Je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Jb=/<|&#?\w+;/,He=/<([\w:]+)/,Ie=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],
tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ea=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(P).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+
b])},length:0,push:uc,sort:[].sort,splice:[].splice},sb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){sb[O(b)]=b});var yc={};q("input select option textarea button form details".split(" "),function(b){yc[b]=!0});var zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngPattern:"pattern"};q({data:Mb,removeData:ob},function(b,a){Q[a]=b});q({data:Mb,inheritedData:rb,scope:function(b){return B.data(b,"$scope")||rb(b.parentNode||b,["$isolateScope","$scope"])},
isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:vc,injector:function(b){return rb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Va(a);if(D(c))b.style[a]=c;else{var d;8>=T&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=T&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=O(a);if(sb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||
(b.attributes.getNamedItem(a)||A).specified?d:s;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===na(b)){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=
a},html:function(b,a){if(F(a))return b.innerHTML;nb(b,!0);b.innerHTML=a},empty:wc},function(b,a){Q.prototype[a]=function(a,d){var e,f,h=this.length;if(b!==wc&&(2==b.length&&b!==Nb&&b!==vc?a:d)===s){if(R(a)){for(e=0;e<h;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;h=e===s?Math.min(h,1):h;for(f=0;f<h;f++){var g=b(this[f],a,d);e=e?e+g:g}return e}for(e=0;e<h;e++)b(this[e],a,d);return this}});q({removeData:ob,on:function a(c,d,e,f){if(D(f))throw Kb("onargs");if(!c.nodeType||
1===c.nodeType||9===c.nodeType){var h=ma(c,"events"),g=ma(c,"handle");h||ma(c,"events",h={});g||ma(c,"handle",g=Me(c,h));q(d.split(" "),function(d){var f=h[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var n=V.body.contains||V.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===
a)return!0;return!1};h[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||n(this,c))||g(a,d)})}else ub(c,d,g),h[d]=[];f=h[d]}f.push(e)})}},off:tc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;nb(a);q(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});
return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new Q(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){nb(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new Q(c),function(a){e.insertBefore(a,
d.nextSibling);d=a})},addClass:qb,removeClass:pb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?qb:pb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Lb,triggerHandler:function(a,c,d){c=(ma(a,"events")||{})[c];
c=ha(c||[]);d=d||[];var e=[{preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:A}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var h,g=0;g<this.length;g++)F(h)?(h=a(this[g],c,e,f),D(h)&&(h=B(h))):sc(h,a(this[g],c,e,f));return D(h)?h:this};Q.prototype.bind=Q.prototype.on;Q.prototype.unbind=Q.prototype.off});Ya.prototype={put:function(a,c){this[Fa(a,this.nextUid)]=c},get:function(a){return this[Fa(a,
this.nextUid)]},remove:function(a){var c=this[a=Fa(a,this.nextUid)];delete this[a];return c}};var Bc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Oe=/,/,Pe=/^\s*(_?)(\S+?)\1\s*$/,Ac=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=S("$injector");Hb.$$annotate=Ob;var hf=S("$animate"),ge=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw hf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&
(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,h,g){h?h.after(a):c.prepend(a);g&&d(g);return A},leave:function(a,c){a.remove();c&&d(c);return A},move:function(a,c,d,g){return this.enter(a,c,d,g)},addClass:function(a,c,h){c=G(c)?c:L(c)?c.join(" "):"";q(a,function(a){qb(a,c)});h&&d(h);return A},removeClass:function(a,c,h){c=G(c)?c:L(c)?c.join(" "):"";q(a,function(a){pb(a,c)});h&&d(h);
return A},setClass:function(a,c,h,g){q(a,function(a){qb(a,c);pb(a,h)});g&&d(g);return A},enabled:A}}]}],ja=S("$compile");kc.$inject=["$provide","$$sanitizeUriProvider"];var Se=/^(x[\:\-_]|data[\:\-_])/i,Rb=S("$interpolate"),jf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Ve={http:80,https:443,ftp:21},Ub=S("$location");Wb.prototype=Vb.prototype=Lc.prototype={$$html5:!1,$$replace:!1,absUrl:vb("$$absUrl"),url:function(a,c){if(F(a))return this.$$url;var d=jf.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||
d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:vb("$$protocol"),host:vb("$$host"),port:vb("$$port"),path:Mc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a))this.$$search=hc(a);else if(R(a))q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Ub("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Mc("$$hash",
Aa),replace:function(){this.$$replace=!0;return this}};var ka=S("$parse"),kf=Function.prototype.call,lf=Function.prototype.apply,mf=Function.prototype.bind,db={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:A,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,
c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":A,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,
c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},nf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Yb=function(a){this.options=a};Yb.prototype={constructor:Yb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=db[this.ch],e=db[a],f=db[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;
c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ka("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=O(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,h,g;this.index<this.text.length;){g=this.text.charAt(this.index);if("."===g||this.isIdent(g)||this.isNumber(g))"."===g&&(e=this.index),c+=g;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){g=this.text.charAt(f);if("("===g){h=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(g))f++;else break}d={index:d,text:c};if(db.hasOwnProperty(c))d.fn=
db[c],d.constant=!0;else{var m=Oc(c,this.options,this.text);d.fn=C(function(a,c){return m(a,c)},{assign:function(d,e){return wb(d,c,e,a.text)}})}this.tokens.push(d);h&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:h}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=this.text.charAt(this.index),e=e+h;if(f)"u"===h?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+
f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=nf[h]||h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var ab=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ab.ZERO=C(function(){return 0},{constant:!0});ab.prototype={constructor:ab,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==
this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ka("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ka("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],h=f.text;if(h===a||h===c||h===d||h===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=
this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return C(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return C(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return C(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<
this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var h=a[f];h&&(e=h(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];this.expect(":");)d.push(this.expression());return ba(function(a,f,h){h=[h];for(var g=0;g<d.length;g++)h.push(d[g](a,
f));return c.apply(a,h)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",
d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,
c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ab.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=
this,d=this.expect().text,e=Oc(d,this.options,this.text);return C(function(c,d,g){return e(g||a(c,d))},{assign:function(e,h,g){return wb(a(e,g),d,h,c.text)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return C(function(e,f){var h=a(e,f),g=d(e,f);qa(g,c.text);return h?Ma(h[g],c.text):s},{assign:function(e,f,h){var g=d(e,h);return Ma(a(e,h),c.text)[g]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))
}this.consume(")");var e=this;return function(f,h){for(var g=[],m=c?c(f,h):f,l=0;l<d.length;l++)g.push(d[l](f,h));l=a(f,h,m)||A;Ma(m,e.text);var n=e.text;if(l){if(l.constructor===l)throw ka("isecfn",n);if(l===kf||l===lf||l===mf)throw ka("isecff",n);}g=l.apply?l.apply(m,g):l(g[0],g[1],g[2],g[3],g[4]);return Ma(g,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");
return C(function(c,d){for(var h=[],g=0;g<a.length;g++)h.push(a[g](c,d));return h},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return C(function(c,d){for(var e={},m=0;m<a.length;m++){var l=a[m];e[l.key]=l.value(c,d)}return e},{literal:!0,constant:c})}};var Xb={},
va=S("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Z=V.createElement("a"),Rc=ua(P.location.href,!0);rc.$inject=["$provide"];Sc.$inject=["$locale"];Uc.$inject=["$locale"];var Xc=".",df={yyyy:aa("FullYear",4),yy:aa("FullYear",2,0,!0),y:aa("FullYear",1),MMMM:yb("Month"),MMM:yb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",
2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:yb("Day"),EEE:yb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(xb(Math[0<a?"floor":"ceil"](a/60),2)+xb(Math.abs(a%60),2))},ww:Zc(2),w:Zc(1)},cf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,bf=/^\-?\d+$/;Tc.$inject=["$locale"];var $e=ba(O),af=ba(lb);Vc.$inject=["$parse"];var xd=ba({restrict:"E",compile:function(a,c){8>=T&&
(c.href||c.name||c.$set("href",""),a.append(V.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===xa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),mb={};q(sb,function(a,c){if("multiple"!=a){var d=oa("ng-"+c);mb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});q(zc,function(a,c){mb[c]=function(){return{priority:100,
link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(gf))){f.$set("ngPattern",RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=oa("ng-"+a);mb[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===xa.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(c){c?(f.$set(g,c),T&&h&&e.prop(h,f[g])):"href"===a&&f.$set(g,
null)})}}}});var Bb={$addControl:A,$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A};$c.$inject=["$element","$attrs","$scope","$animate"];var cd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:$c,compile:function(){return{pre:function(a,e,f,h){if(!f.action){var g=function(c){a.$apply(function(){h.$commitViewValue()});c.preventDefault?c.preventDefault():c.returnValue=!1};ub(e[0],"submit",g);e.on("$destroy",function(){c(function(){Wa(e[0],"submit",
g)},0,!1)})}var m=e.parent().controller("form"),l=f.name||f.ngForm;l&&wb(a,l,h,l);if(m)e.on("$destroy",function(){m.$removeControl(h);l&&wb(a,l,s,l);C(h,Bb)})}}}}}]},yd=cd(),Ld=cd(!0),of=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,pf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,qf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,dd=/^(\d{4})-(\d{2})-(\d{2})$/,ed=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,ac=/^(\d{4})-W(\d\d)$/,
fd=/^(\d{4})-(\d\d)$/,gd=/^(\d\d):(\d\d)$/,rf=/(\s+|^)default(\s+|$)/,hd={text:bb,date:cb("date",dd,Db(dd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":cb("datetimelocal",ed,Db(ed,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:cb("time",gd,Db(gd,["HH","mm"]),"HH:mm"),week:cb("week",ac,function(a){if(da(a))return a;if(G(a)){ac.lastIndex=0;var c=ac.exec(a);if(c){a=+c[1];var d=+c[2],c=Yc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:cb("month",fd,Db(fd,["yyyy",
"MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){bb(a,c,d,e,f,h);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||qf.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});ef(e,"number",sf,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return Zb(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);
return Zb(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return Zb(e,"number",e.$isEmpty(a)||Ba(a),a)})},url:function(a,c,d,e,f,h){bb(a,c,d,e,f,h);e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||of.test(d)}},email:function(a,c,d,e,f,h){bb(a,c,d,e,f,h);e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||pf.test(d)}},radio:function(a,c,d,e){F(d.name)&&c.attr("name",++fb);c.on("click",function(f){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value,f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,h,g,m){var l=bd(m,a,"ngTrueValue",d.ngTrueValue,!0),n=bd(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return ra(a,l)});e.$parsers.push(function(a){return a?
l:n})},hidden:A,button:A,submit:A,reset:A,file:A},sf=["badInput"],lc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,h,g,m){m[0]&&(hd[O(g.type)]||hd.text)(f,h,g,m[0],c,a,d,e)}}}],Ab="ng-valid",zb="ng-invalid",Na="ng-pristine",Cb="ng-dirty",tf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,h,g){function m(a,c){c=c?"-"+jb(c,"-"):"";h.removeClass(e,(a?zb:Ab)+c);h.addClass(e,(a?Ab:
zb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=f(d.ngModel),n=l.assign,p=null,k=this;if(!n)throw S("ngModel")("nonassign",d.ngModel,ia(e));this.$render=A;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var t=e.inheritedData("$formController")||Bb,u=0,K=this.$error={};e.addClass(Na).addClass("ng-untouched");
m(!0);this.$setValidity=function(a,c){K[a]!==!c&&(c?(K[a]&&u--,u||(m(!0),k.$valid=!0,k.$invalid=!1)):(m(!1),k.$invalid=!0,k.$valid=!1,u++),K[a]=!c,m(c,a),t.$setValidity(a,c,k))};this.$setPristine=function(){k.$dirty=!1;k.$pristine=!0;h.removeClass(e,Cb);h.addClass(e,Na)};this.$setUntouched=function(){k.$touched=!1;k.$untouched=!0;h.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){k.$touched=!0;k.$untouched=!1;h.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(p);
k.$viewValue=k.$$lastCommittedViewValue;k.$render()};this.$validate=function(){if(k.$modelValue===k.$modelValue){var a=k.$modelValue;k.$$runValidators(k.$$invalidModelValue||k.$modelValue,k.$viewValue);a!==k.$modelValue&&k.$$writeModelToScope()}};this.$$runValidators=function(a,c){q(k.$validators,function(d,e){k.$setValidity(e,d(a,c))});k.$modelValue=k.$valid?a:s;k.$$invalidModelValue=k.$valid?s:a};this.$commitViewValue=function(a){var c=k.$viewValue;g.cancel(p);if(a||k.$$lastCommittedViewValue!==
c){k.$$lastCommittedViewValue=c;k.$pristine&&(k.$dirty=!0,k.$pristine=!1,h.removeClass(e,Na),h.addClass(e,Cb),t.$setDirty());var d=c;q(k.$parsers,function(a){d=a(d)});k.$modelValue===d||!F(k.$$invalidModelValue)&&k.$$invalidModelValue==d||(k.$$runValidators(d,c),k.$$writeModelToScope())}};this.$$writeModelToScope=function(){var d;k.$options&&k.$options.getterSetter&&H(d=l(a))?d(k.$modelValue):n(a,k.$modelValue);q(k.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,
c,d){k.$viewValue=a;k.$options&&!k.$options.updateOnDefault||k.$$debounceViewValueCommit(c,d)};this.$$debounceViewValueCommit=function(a,c){var d=0,e=k.$options;e&&D(e.debounce)&&(e=e.debounce,Ba(e)?d=e:Ba(e[a])?d=e[a]:Ba(e["default"])&&(d=e["default"]));g.cancel(p);d?p=g(function(){k.$commitViewValue(c)},d):k.$commitViewValue(c)};a.$watch(function(){var c=l(a);k.$options&&(k.$options.getterSetter&&H(c))&&(c=c());if(k.$modelValue!==c&&(F(k.$$invalidModelValue)||k.$$invalidModelValue!=c)){for(var d=
k.$formatters,e=d.length,f=c;e--;)f=d[e](f);k.$$runValidators(c,f);k.$viewValue!==f&&(k.$viewValue=k.$$lastCommittedViewValue=f,k.$render())}return c})}],$d=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:tf,link:{pre:function(a,c,d,e){e[2]&&(e[0].$options=e[2].$options);var f=e[0],h=e[1]||Bb;h.$addControl(f);a.$on("$destroy",function(){h.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&
c.type)})});c.on("blur",function(c){a.$apply(function(){f.$setTouched()})})}}}},be=ba({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),nc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},mc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,
h=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=RegExp(a));if(a&&!a.test)throw S("ngPattern")("noregexp",h,a,ia(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.maxlength=function(a){return e.$isEmpty(a)||a.length<=f}}}}},oc=function(){return{restrict:"A",
require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.minlength=function(a){return e.$isEmpty(a)||a.length>=f}}}}},ae=function(){return{restrict:"A",require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,g=h?$(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(h?$(a):a)});return c}});e.$formatters.push(function(a){return L(a)?a.join(f):s});e.$isEmpty=
function(a){return!a||!a.length}}}},uf=/^(true|false|\d+)$/,ce=function(){return{restrict:"A",priority:100,compile:function(a,c){return uf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},de=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=$(this.$options.updateOn.replace(rf,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Dd=wa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),Fd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Ed=["$sce","$parse",function(a,c){return{restrict:"A",compile:function(d,
e){d.addClass("ng-binding");return function(d,e,g){e.data("$binding",g.ngBindHtml);var m=c(g.ngBindHtml);g=c(g.ngBindHtml,function(a){return(a||"").toString()});d.$watch(g,function(){e.html(a.getTrustedHtml(m(d))||"")})}}}}],Gd=$b("",!0),Id=$b("Odd",0),Hd=$b("Even",1),Jd=wa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Kd=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],qc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=oa("ng-"+a);qc[c]=["$parse",function(d){return{restrict:"A",compile:function(e,f){var h=d(f[c]);return function(c,d){d.on(O(a),function(a){c.$apply(function(){h(c,{$event:a})})})}}}}]});var Nd=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,m,l;c.$watch(e.ngIf,function(c){c?m||h(function(c,f){m=f;c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),
d)}):(l&&(l.remove(),l=null),m&&(m.$destroy(),m=null),g&&(l=kb(g.clone),a.leave(l,function(){l=null}),g=null))})}}}],Od=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ra.noop,compile:function(h,g){var m=g.ngInclude||g.src,l=g.onload||"",n=g.autoscroll;return function(g,h,q,u,K){var w=0,y,v,x,r=function(){v&&(v.remove(),v=null);y&&(y.$destroy(),y=null);x&&(e.leave(x,function(){v=null}),v=
x,x=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!D(n)||n&&!g.$eval(n)||d()},q=++w;f?(a.get(f,{cache:c}).success(function(a){if(q===w){var c=g.$new();u.template=a;a=K(c,function(a){r();e.enter(a,null,h,m)});y=c;x=a;y.$emit("$includeContentLoaded");g.$eval(l)}}).error(function(){q===w&&(r(),g.$emit("$includeContentError"))}),g.$emit("$includeContentRequested")):(r(),u.template=null)})}}}}],ee=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,
d,e,f){d.html(f.template);a(d.contents())(c)}}}],Pd=wa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Qd=wa({terminal:!0,priority:1E3}),Rd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,h){var g=h.count,m=h.$attr.when&&f.attr(h.$attr.when),l=h.offset||0,n=e.$eval(m)||{},p={},k=c.startSymbol(),t=c.endSymbol(),u=/^when(Minus)?(.+)$/;q(h,function(a,c){u.test(c)&&(n[O(c.replace("when","").replace("Minus","-"))]=f.attr(h.$attr[c]))});
q(n,function(a,e){p[e]=c(a.replace(d,k+g+"-"+l+t))});e.$watch(function(){var c=parseFloat(e.$eval(g));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],Sd=["$parse","$animate",function(a,c){var d=S("ngRepeat");return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,h,g,m){var l=h.ngRepeat,n=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),p,k,t,u,D,
w,y,v={$id:Fa};if(!n)throw d("iexp",l);h=n[1];g=n[2];k=n[3];(n=n[4])?(p=a(n),t=function(a,c,d){y&&(v[y]=a);v[w]=c;v.$index=d;return p(e,v)}):(u=function(a,c){return Fa(c)},D=function(a){return a});n=h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!n)throw d("iidexp",h);w=n[3]||n[1];y=n[2];var x={};e.$watchCollection(g,function(a){var g,h,n=f[0],p,v={},z,s,C,A,H,G,F,M=[];k&&(e[k]=a);var L=function(a,c){a[w]=C;y&&(a[y]=s);a.$index=c;a.$first=0===c;a.$last=c===z-1;a.$middle=!(a.$first||a.$last);
a.$odd=!(a.$even=0===(c&1))};if(eb(a))G=a,H=t||u;else{H=t||D;G=[];for(h in a)a.hasOwnProperty(h)&&"$"!=h.charAt(0)&&G.push(h);G.sort()}z=G.length;h=M.length=G.length;for(g=0;g<h;g++)if(s=a===G?g:G[g],C=a[s],A=H(s,C,g),za(A,"`track by` id"),x.hasOwnProperty(A))F=x[A],delete x[A],v[A]=F,M[g]=F;else{if(v.hasOwnProperty(A))throw q(M,function(a){a&&a.scope&&(x[a.id]=a)}),d("dupes",l,A);M[g]={id:A};v[A]=!1}for(p in x)x.hasOwnProperty(p)&&(F=x[p],h=kb(F.clone),c.leave(h),q(h,function(a){a.$$NG_REMOVED=!0}),
F.scope.$destroy());g=0;for(h=G.length;g<h;g++)if(s=a===G?g:G[g],C=a[s],F=M[g],M[g-1]&&(n=M[g-1].clone[M[g-1].clone.length-1]),F.scope){p=n;do p=p.nextSibling;while(p&&p.$$NG_REMOVED);F.clone[0]!=p&&c.move(kb(F.clone),null,B(n));n=F.clone[F.clone.length-1];L(F.scope,g)}else m(function(a,d){F.scope=d;a[a.length++]=V.createComment(" end ngRepeat: "+l+" ");c.enter(a,null,B(n));n=a;F.clone=a;v[F.id]=F;L(F.scope,g)});x=v})}}}],Td=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,
d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Md=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],Ud=wa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Vd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h=
[],g=[],m=[],l=[];c.$watch(e.ngSwitch||e.on,function(d){var p,k;p=0;for(k=m.length;p<k;++p)m[p].remove();p=m.length=0;for(k=l.length;p<k;++p){var t=kb(g[p].clone);l[p].$destroy();m[p]=t;a.leave(t,function(){m.splice(p,1)})}g.length=0;l.length=0;if(h=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(h,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");g.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Wd=wa({transclude:"element",priority:1200,
require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Xd=wa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Zd=wa({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw S("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),zd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],vf=S("ngOptions"),Yd=ba({restrict:"A",terminal:!0}),Ad=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element",
"$scope","$attrs",function(a,c,d){var m=this,l={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){za(c,'"option value"');l[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete l[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){m.renderUnknownOption=A})}],link:function(e,h,g,m){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new Ya(d.$viewValue);q(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){ra(e,
d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,u,A;u=g.$modelValue;A=x(e)||[];var F=n?bc(A):A,G,z,B;z={};s=!1;var E,H;if(t)if(r&&L(u))for(s=new Ya([]),B=0;B<u.length;B++)z[m]=u[B],s.put(r(e,z),u[B]);else s=new Ya(u);for(B=0;G=F.length,B<G;B++){k=B;if(n){k=F[B];if("$"===k.charAt(0))continue;z[n]=k}z[m]=
A[k];d=p(e,z)||"";(k=a[d])||(k=a[d]=[],c.push(d));t?d=D(s.remove(r?r(e,z):q(e,z))):(r?(d={},d[m]=u,d=r(e,d)===r(e,z)):d=u===q(e,z),s=s||d);E=l(e,z);E=D(E)?E:"";k.push({id:r?r(e,z):n?F[B]:B,label:E,selected:d})}t||(C||null===u?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));z=0;for(F=c.length;z<F;z++){d=c[z];k=a[d];w.length<=z?(u={element:v.clone().attr("label",d),label:k.label},A=[u],w.push(A),f.append(u.element)):(A=w[z],u=A[0],u.label!=d&&u.element.attr("label",
u.label=d));E=null;B=0;for(G=k.length;B<G;B++)s=k[B],(d=A[B+1])?(E=d.element,d.label!==s.label&&E.text(d.label=s.label),d.id!==s.id&&E.val(d.id=s.id),d.selected!==s.selected&&(E.prop("selected",d.selected=s.selected),T&&E.prop("selected",d.selected))):(""===s.id&&C?H=C:(H=y.clone()).val(s.id).prop("selected",s.selected).text(s.label),A.push({element:H,label:s.label,id:s.id,selected:s.selected}),E?E.after(H):u.element.append(H),E=H);for(B++;A.length>B;)A.pop().element.remove()}for(;w.length>z;)w.pop()[0].element.remove()}
var k;if(!(k=u.match(d)))throw vf("iexp",u,ia(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),x=c(k[7]),r=k[8]?c(k[8]):null,w=[[{element:f,label:""}]];C&&(a(C)(e),C.removeClass("ng-scope"),C.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=x(e)||[],d={},h,k,l,p,u,y,v;if(t)for(k=[],p=0,y=w.length;p<y;p++)for(a=w[p],l=1,u=a.length;l<u;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(r)for(v=0;v<c.length&&(d[m]=c[v],r(e,d)!=h);v++);else d[m]=
c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(r)for(v=0;v<c.length;v++){if(d[m]=c[v],r(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<w[0].length&&w[0][1].id!==h&&(w[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var k=m[0];m=m[1];var t=g.multiple,u=g.ngOptions,C=!1,w,y=B(V.createElement("option")),v=B(V.createElement("optgroup")),x=y.clone();g=0;for(var r=h.children(),A=r.length;g<A;g++)if(""===r[g].value){w=C=r.eq(g);
break}k.init(m,C,x);t&&(m.$isEmpty=function(a){return!a||0===a.length});u?p(e,h,m):t?n(e,h,m):l(e,h,m,k)}}}}],Cd=["$interpolate",function(a){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),n=l.data("$selectController")||l.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);
n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Bd=ba({restrict:"E",terminal:!1});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(rd(),td(Ra),B(V).ready(function(){pd(V,ic)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');

///#source 1 1 /Assets/Scripts/Libs/angular-route.min.js
/*
 AngularJS v1.3.0-beta.17
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,b,c,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var c=s.current&&s.current.locals;if(e.isDefined(c&&c.$template)){var c=a.$new(),d=s.current;l=w(c,function(d){h.enter(d,null,l||b,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=c;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=c.autoscroll,u=c.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,b){var c=h.current,f=c.locals;b.html(f.$template);var w=e(b.contents());c.controller&&(f.$scope=a,f=g(c.controller,f),c.controllerAs&&(a[c.controllerAs]=f),b.data("$ngControllerController",f),b.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,b){return e.extend(new (e.extend(function(){},
{prototype:a})),b)}function g(a,e){var c=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,c,b){a="?"===b?b:null;b="*"===b?b:null;h.push({name:c,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",c?"i":"");return f}var h={};this.when=function(a,b){h[a]=e.extend({reloadOnSearch:!0},b,a&&g(a,b));if(a){var c=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=e.extend({redirectTo:a},g(c,b))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,b,c,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,c),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?b.path(t(d.redirectTo,d.params)).search(d.params).replace():b.url(d.redirectTo(d.pathParams,b.path(),b.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),b,c;e.forEach(a,function(d,b){a[b]=e.isString(d)?g.get(d):g.invoke(d,null,null,b)});e.isDefined(b=d.template)?e.isFunction(b)&&(b=b(d.params)):e.isDefined(c=d.templateUrl)&&(e.isFunction(c)&&(c=c(d.params)),c=k.getTrustedResourceUrl(c),e.isDefined(c)&&(d.loadedTemplateUrl=
c,b=n.get(c,{cache:v}).then(function(a){return a.data})));e.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(b){d==r.current&&(d&&(d.locals=b,e.copy(d.params,c)),a.$broadcast("$routeChangeSuccess",d,m))},function(b){d==r.current&&a.$broadcast("$routeChangeError",d,m,b)})}function p(){var a,c;e.forEach(h,function(f,h){var q;if(q=!c){var g=b.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(c=s(f,{params:e.extend({},b.search(),a),pathParams:a}),c.$$route=f)});return c||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=function(){return{}}});
n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);

///#source 1 1 /Assets/Scripts/App/oauth.js
function OAuthClient(store) {
    this.store = store || window.localStorage;
}

OAuthClient.prototype.makeImplicitRequest = function (authorizeUrl, clientid, callback, scope) {
    var request = this.createImplicitRequest(authorizeUrl, clientid, callback, scope);

    window.location = request.url;
};

OAuthClient.prototype.createImplicitRequest = function (authorizeUrl, clientid, callback, scope) {
    var state = (Date.now() + Math.random()) * Math.random();
    state = state.toString().replace(".", "");

    var url =
        authorizeUrl + "?" +
        "client_id=" + encodeURIComponent(clientid) + "&" +
        "response_type=token&" +
        "redirect_uri=" + encodeURIComponent(callback) + "&" +
        "state=" + encodeURIComponent(state);

    if (scope) {
        url += "&scope=" + encodeURIComponent(scope);
    }

    this.store.setItem("OAuthClient.state", state);

    return {
        state:state,
        url:url
    };
};

OAuthClient.prototype.parseResult = function (queryString) {
    queryString = queryString || location.hash;

    var idx = queryString.indexOf("#");
    if (idx > 0) {
        queryString = queryString.substr(idx + 1);
    }

    var params = {},
        regex = /([^&=]+)=([^&]*)/g,
        m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    for (var prop in params) {
        return params;
    }
};

OAuthClient.prototype.readImplicitResult = function (queryString) {
    var result = OAuthClient.prototype.parseResult(queryString);
    if (!result) {
        return {
            error: "No OAuth Response"
        }
    }

    if (result.error) {
        return {
            error: result.error
        }
    }

    var state = this.store.getItem("OAuthClient.state");
    this.store.removeItem("OAuthClient.state");

    if (!state || result.state !== state) {
        return {
            error: "Invalid State"
        }
    }

    var token = result.access_token;
    if (!token) {
        return {
            error: "No Access Token"
        }
    }

    var expires_in = result.expires_in;
    if (!expires_in) {
        return {
            error: "No Token Expiration"
        }
    }

    return {
        access_token: token,
        expires_in: expires_in
    };
};

function Token(access_token, expires_at) {
    this.access_token = access_token;
    this.expires_at = parseInt(expires_at);

    Object.defineProperty(this, "expired", {
        get: function () {
            var now = parseInt(Date.now() / 1000);
            return this.expires_at < now;
        }
    });

    Object.defineProperty(this, "expires_in", {
        get: function () {
            var now = parseInt(Date.now() / 1000);
            return this.expires_at - now;
        }
    });
};

Token.fromOAuthResponse = function (response) {
    if (response.error) {
        return new Token(null, 0);
    }

    var now = parseInt(Date.now() / 1000);
    var expires_at = now + parseInt(response.expires_in);
    return new Token(response.access_token, expires_at);
};

Token.fromJSON = function (json) {
    if (json) {
        var obj = JSON.parse(json);
        return new Token(obj.access_token, obj.expires_at);
    }
    return new Token(null, 0);
};

Token.prototype.toJSON = function () {
    return JSON.stringify({
        access_token: this.access_token,
        expires_at: this.expires_at
    });
};

///#source 1 1 /Assets/Scripts/App/ttIdm.js
/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);

    function config($httpProvider, OAuthConfig) {
        if (OAuthConfig) {
            $httpProvider.interceptors.push(function ($q) {
                return {
                    'request': function (config) {
                        if (OAuthConfig.token) {
                            config.headers['Authorization'] = 'Bearer ' + OAuthConfig.token.access_token;
                        }
                        return config;
                    },
                    'responseError': function (response) {
                        if (response.status === 401) {
                            idmToken.removeToken();
                        }
                        return $q.reject(response);
                    }
                };
            });
        }
    };
    config.$inject = ["$httpProvider", "OAuthConfig"];
    app.config(config);

    function idmToken(OAuthConfig, $location, $window, $rootScope) {
        var store = $window.localStorage;

        if (OAuthConfig) {
            var tokenJson = store.getItem("idm.token");
            if (tokenJson) {
                var token = Token.fromJSON(tokenJson);
                if (!token.expired) {
                    OAuthConfig.token = token;
                }
            }
        }

        var tokenExpired = [];
        function callTokenExpired() {
            tokenExpired.forEach(function (cb) {
                cb();
            });
        }

        var tokenObtained = [];
        function callTokenObtained() {
            tokenObtained.forEach(function (cb) {
                cb();
            });
        }

        return {
            addOnTokenExpired: function (cb) {
                tokenExpired.push(cb);
            },
            addOnTokenObtained: function (cb) {
                tokenObtained.push(cb);
            },
            hasToken: function () {
                return OAuthConfig &&
                       OAuthConfig.token &&
                       !OAuthConfig.token.expired;
            },
            isTokenNeeded: function () {
                return OAuthConfig &&
                    (!OAuthConfig.token ||
                     OAuthConfig.token.expired);
            },
            removeToken: function () {
                store.removeItem("idm.token");
                OAuthConfig.token = null;
                callTokenExpired();
            },
            redirectForToken: function (callbackPath) {
                var oauth = new OAuthClient($window.localStorage);

                var callback = $location.absUrl();
                var idx = callback.indexOf('#');
                if (idx > 0) {
                    callback = callback.substring(0, idx);
                }
                callback += "#/" + callbackPath;

                var request = oauth.createImplicitRequest(OAuthConfig.AuthorizationUrl, OAuthConfig.ClientId, callback, OAuthConfig.Scope);
                $window.location = request.url;
            },
            processTokenCallback: function (success, error) {
                var oauth = new OAuthClient($window.localStorage);
                var result = oauth.readImplicitResult($location.url());
                if (result.error) {
                    if (error) {
                        error(result.error);
                    }
                }
                else {
                    OAuthConfig.token = Token.fromOAuthResponse(result);
                    store.setItem("idm.token", OAuthConfig.token.toJSON());
                    callTokenObtained();
                    if (success) {
                        success();
                    }
                }
            }
        }
    }
    idmToken.$inject = ["OAuthConfig", "$location", "$window", "$rootScope"];
    app.factory("idmToken", idmToken);

    function idmApi(idmToken, $http, $q, PathBase) {
        var cache = null;

        idmToken.addOnTokenExpired(function () {
            cache = null;
        });

        return {
            get: function () {

                if (cache) {
                    var d = $q.defer();
                    d.resolve(cache);
                    return d.promise;
                }

                return $http.get(PathBase + "/api").then(function (resp) {
                    cache = resp.data;
                    return cache;
                }, function (resp) {
                    cache = null;
                    if (resp.status === 401) {
                        throw 'You are not authorized to use this service.';
                    }
                    else {
                        throw 'Failed to load API.';
                    }
                });
            }
        };
    }
    idmApi.$inject = ["idmToken", "$http", "$q", "PathBase"];
    app.factory("idmApi", idmApi);

    function idmUsers($http, idmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idmApi.get().then(function (api) {
            svc.getUsers = function (filter, start, count) {
                return $http.get(api.links.users, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Users"));
            };

            svc.getUser = function (subject) {
                return $http.get(api.links.users + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting User"));
            };

            if (api.links.createUser) {
                svc.createUser = function (properties) {
                    return $http.post(api.links.createUser.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating User"));
                };
            }

            svc.deleteUser = function (user) {
                return $http.delete(user.links.delete)
                    .then(nop, errorHandler("Error Deleting User"));
            };

            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };

            svc.addClaim = function (claims, claim) {
                return $http.post(claims.links.create, claim)
                    .then(nop,  errorHandler("Error Adding Claim"));
            };
            svc.removeClaim = function (claim) {
                return $http.delete(claim.links.delete)
                    .then(nop,  errorHandler("Error Removing Claim"));
            };

            svc.addRole = function (role) {
                return $http.post(role.links.add)
                    .then(nop, errorHandler("Error Adding Role"));
            };

            svc.removeRole = function (role) {
                return $http.delete(role.links.remove)
                    .then(nop, errorHandler("Error Removing Role"));
            };
        });

        return svc;
    }
    idmUsers.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmUsers", idmUsers);

    function idmRoles($http, idmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idmApi.get().then(function (api) {
            svc.getRoles = function (filter, start, count) {
                return $http.get(api.links.roles, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Roles"));
            };

            svc.getRole = function (subject) {
                return $http.get(api.links.roles + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Role"));
            };

            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };

            if (api.links.createRole) {
                svc.createRole = function (properties) {
                    return $http.post(api.links.createRole.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Role"));
                };
            }

            svc.deleteRole = function (role) {
                return $http.delete(role.links.delete)
                    .then(nop, errorHandler("Error Deleting Role"));
            };
        });

        return svc;
    }
    idmRoles.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmRoles", idmRoles);
})(angular);

(function (angular) {
    var model = document.getElementById("model").textContent.trim();
    model = JSON.parse(model);
    for (var key in model) {
        angular.module("ttIdm").constant(key, model[key]);
    }
})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmUI.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {
    var app = angular.module("ttIdmUI", []);

    app.factory("ttFeedback", function () {
        function Feedback() {
            var self = this;
            var _errors;
            var _message;

            self.clear = function () {
                _errors = null;
                _message = null;
            };

            Object.defineProperty(this, "message", {
                get: function () {
                    return _message;
                },
                set: function (value) {
                    self.clear();
                    _message = value;
                }
            });
            Object.defineProperty(this, "errors", {
                get: function () {
                    return _errors;
                },
                set: function (value) {
                    self.clear();
                    if (value instanceof Array) {
                        _errors = value;
                    }
                    else {
                        _errors = [value];
                    }
                }
            });

            self.messageHandler = function (message) {
                self.message = message;
            };
            self.errorHandler = function (errors) {
                self.errors = errors;
            };
            self.createMessageHandler = function (msg) {
                return function () {
                    self.message = msg;
                };
            };
            self.createErrorHandler = function (msg) {
                return function (errors) {
                    self.errors = errors || msg;
                };
            };
        }
        return Feedback;
    });

    function ttMatch() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                function check() {
                    if (ctrl.$dirty) {
                        var thisVal = elem.val();
                        var otherVal = scope.$eval(attrs.ttMatch);
                        if (!thisVal || thisVal === otherVal) {
                            ctrl.$setValidity('ttMatch', true);
                        }
                        else {
                            ctrl.$setValidity('ttMatch', false);
                        }
                    }
                }
                elem.on("input", function () {
                    scope.$apply(check);
                });
                scope.$watch(attrs.ttMatch, function (val) {
                    check();
                });
            }
        }
    }
    ttMatch.$inject = [];
    app.directive("ttMatch", ttMatch);

    function ttPropertyEditor(PathBase){
        return {
            restrict:'E',
            templateUrl: PathBase + '/assets/Templates.editor.property.html',
            replace: true,
            scope: {
                property: '=',
                setProperty: '=setProperty'
            },
            link: function (scope, elem, attrs, ctrl) {
            }
        };
    }
    ttPropertyEditor.$inject = ["PathBase"];
    app.directive("ttPropertyEditor", ttPropertyEditor);

    function ttPrompt(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.modal.html',
            replace: true,
            transclude: true,
            scope: {
                id: '@',
                action: '@'
            },
            link: function (scope, elem, attrs, ctrl) {
                elem.id = scope.id.trim();
                elem.find(".btn-primary.confirm").on("click", function () {
                    elem.trigger("confirm");
                });
            }
        }
    }
    ttPrompt.$inject = ["PathBase"];
    app.directive("ttPrompt", ttPrompt);

    function ttPagerButtons(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.buttons.html',
            scope: {
                pager: '=',
                path: "@"
            }
        }
    }
    ttPagerButtons.$inject = ["PathBase"];
    app.directive("ttPagerButtons", ttPagerButtons);

    function ttPagerSummary(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.summary.html',
            scope: {
                pager: '='
            }
        }
    }
    ttPagerSummary.$inject = ["PathBase"];
    app.directive("ttPagerSummary", ttPagerSummary);

    function idmPager($sce) {
        function Pager(result, pageSize) {
            function PagerButton(text, page, enabled, current) {
                this.text = $sce.trustAsHtml(text + "");
                this.page = page;
                this.enabled = enabled;
                this.current = current;
            }

            this.start = result.start;
            this.count = result.count;
            this.total = result.total;
            this.pageSize = pageSize;
            this.filter = result.filter;

            this.totalPages = Math.ceil(this.total / pageSize);
            this.currentPage = (this.start / pageSize) + 1;
            this.canPrev = this.currentPage > 1;
            this.canNext = this.currentPage < this.totalPages;

            this.buttons = [];

            var totalButtons = 7; // ensure this is odd
            var pageSkip = 10;
            var startButton = 1;
            if (this.currentPage > Math.floor(totalButtons / 2)) startButton = this.currentPage - Math.floor(totalButtons / 2);

            var endButton = startButton + totalButtons - 1;
            if (endButton >= this.totalPages) endButton = this.totalPages;
            if (this.totalPages > totalButtons &&
                (endButton - startButton + 1) < totalButtons) {
                startButton = endButton - totalButtons + 1;
            }

            var prevPage = this.currentPage - pageSkip;
            if (prevPage < 1) prevPage = 1;

            var nextPage = this.currentPage + pageSkip;
            if (nextPage > this.totalPages) nextPage = this.totalPages;

            this.buttons.push(new PagerButton("<strong>&lt;&lt;</strong>", 1, endButton > totalButtons));
            this.buttons.push(new PagerButton("<strong>&lt;</strong>", prevPage, endButton > totalButtons));

            for (var i = startButton; i <= endButton; i++) {
                this.buttons.push(new PagerButton(i, i, true, i === this.currentPage));
            }

            this.buttons.push(new PagerButton("<strong>&gt;</strong>", nextPage, endButton < this.totalPages));
            this.buttons.push(new PagerButton("<strong>&gt;&gt;</strong>", this.totalPages, endButton < this.totalPages));
        }
        return Pager;
    }
    idmPager.$inject = ["$sce"];
    app.service("idmPager", idmPager);

    function ttConfirmClick() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var prevent = true;
                var cb = null;
                elem.on("click", function (e) {
                    if (prevent) {
                        e.preventDefault();
                        $(attrs.ttConfirmClick).modal('show');
                        if (!cb) {
                            cb = function () {
                                $(this).off("confirm");
                                prevent = false;
                                elem.trigger("click");
                            };
                            $(attrs.ttConfirmClick).on("confirm", cb);
                        }
                    }
                });
            }
        }
    }
    ttConfirmClick.$inject = [];
    app.directive("ttConfirmClick", ttConfirmClick);

    function idmMessage(PathBase) {
        return {
            restrict: 'E',
            scope: {
                model: "=message"
            },
            templateUrl: PathBase + '/assets/Templates.message.html',
            link: function (scope, elem, attrs) {
                scope.$watch("model.message", function(){
                    scope.message = scope.model.message;
                });
                scope.$watch("model.errors", function(){
                    scope.errors = scope.model.errors;
                });
            }
        };
    }
    idmMessage.$inject = ["PathBase"];
    app.directive("idmMessage", idmMessage);
})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmUsers.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmUsers", ['ngRoute', 'ttIdm', 'ttIdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/users/list/:filter?/:page?", {
                controller: 'ListUsersCtrl',
                resolve: { users: "idmUsers" },
                templateUrl: PathBase + '/assets/Templates.users.list.html'
            })
            .when("/users/create", {
                controller: 'NewUserCtrl',
                resolve: {
                    api: function (idmApi) {
                        return idmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.users.new.html'
            })
            .when("/users/edit/:subject", {
                controller: 'EditUserCtrl',
                resolve: { users: "idmUsers" },
                templateUrl: PathBase + '/assets/Templates.users.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListUsersCtrl($scope, idmUsers, idmPager, $routeParams, $location) {
        var model = {
            message : null,
            users : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/users/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idmUsers.getUsers(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.users = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListUsersCtrl.$inject = ["$scope", "idmUsers", "idmPager", "$routeParams", "$location"];
    app.controller("ListUsersCtrl", ListUsersCtrl);

    function NewUserCtrl($scope, idmUsers, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createUser) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createUser.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idmUsers.createUser(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewUserCtrl.$inject = ["$scope", "idmUsers", "api", "ttFeedback"];
    app.controller("NewUserCtrl", NewUserCtrl);

    function EditUserCtrl($scope, idmUsers, $routeParams, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadUser() {
            return idmUsers.getUser($routeParams.subject)
                .then(function (result) {
                    $scope.user = result;

                    if (!result.data.properties) {
                        $scope.tab = 1;

                        if (!result.data.roles) {
                            $scope.tab = 2;
                        }
                    }

                }, feedback.errorHandler);
        };
        loadUser();

        $scope.setProperty = function (property) {
            idmUsers.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadUser();
                }, feedback.errorHandler);
        };

        $scope.addClaim = function (claims, claim) {
            idmUsers.addClaim(claims, claim)
                .then(function () {
                    feedback.message = "Claim Added : " + claim.type + ", " + claim.value;
                    loadUser();
                }, feedback.errorHandler);
        };

        $scope.removeClaim = function (claim) {
            idmUsers.removeClaim(claim)
                .then(function () {
                    feedback.message = "Claim Removed : " + claim.data.type + ", " + claim.data.value;
                    loadUser().then(function () {
                        $scope.claim = claim.data;
                    });
                }, feedback.errorHandler);
        };

        $scope.deleteUser = function (user) {
            idmUsers.deleteUser(user)
                .then(function () {
                    feedback.message = "User Deleted";
                    $scope.user = null;
                }, feedback.errorHandler);
        };

        $scope.setRole = function (role) {
            if (role.data) {
                idmUsers.addRole(role)
                    .then(function () {
                        feedback.message = "Role Added : " + role.meta.type;
                        loadUser();
                    }, feedback.errorHandler);
            }
            else {
                idmUsers.removeRole(role)
                    .then(function () {
                        feedback.message = "Role Removed : " + role.meta.type;
                        loadUser();
                    }, feedback.errorHandler);
            }
        };
    }
    EditUserCtrl.$inject = ["$scope", "idmUsers", "$routeParams", "ttFeedback"];
    app.controller("EditUserCtrl", EditUserCtrl);

})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmRoles.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmRoles", ['ngRoute', 'ttIdm', 'ttIdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/roles/list/:filter?/:page?", {
                controller: 'ListRolesCtrl',
                resolve: { roles: "idmRoles" },
                templateUrl: PathBase + '/assets/Templates.roles.list.html'
            })
            .when("/roles/create", {
                controller: 'NewRoleCtrl',
                resolve: {
                    api: function (idmApi) {
                        return idmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.roles.new.html'
            })
            .when("/roles/edit/:subject", {
                controller: 'EditRoleCtrl',
                resolve: { roles: "idmRoles" },
                templateUrl: PathBase + '/assets/Templates.roles.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListRolesCtrl($scope, idmRoles, idmPager, $routeParams, $location) {
        var model = {
            message : null,
            roles : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/roles/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idmRoles.getRoles(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.roles = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListRolesCtrl.$inject = ["$scope", "idmRoles", "idmPager", "$routeParams", "$location"];
    app.controller("ListRolesCtrl", ListRolesCtrl);

    function NewRoleCtrl($scope, idmRoles, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createRole) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createRole.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idmRoles.createRole(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewRoleCtrl.$inject = ["$scope", "idmRoles", "api", "ttFeedback"];
    app.controller("NewRoleCtrl", NewRoleCtrl);

    function EditRoleCtrl($scope, idmRoles, $routeParams, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadRole() {
            return idmRoles.getRole($routeParams.subject)
                .then(function (result) {
                    $scope.role = result;
                    if (!result.data.properties) {
                        $scope.tab = 1;
                    }
                }, feedback.errorHandler);
        };
        loadRole();

        $scope.setProperty = function (property) {
            idmRoles.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadRole();
                }, feedback.errorHandler);
        };

        $scope.deleteRole = function (role) {
            idmRoles.deleteRole(role)
                .then(function () {
                    feedback.message = "Role Deleted";
                    $scope.role = null;
                }, feedback.errorHandler);
        };
    }
    EditRoleCtrl.$inject = ["$scope", "idmRoles", "$routeParams", "ttFeedback"];
    app.controller("EditRoleCtrl", EditRoleCtrl);

})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmApp.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmApp", ['ngRoute', 'ttIdm', 'ttIdmUI', 'ttIdmUsers', 'ttIdmRoles']);
    function config(PathBase, $routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'HomeCtrl',
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/callback", {
                templateUrl: PathBase + '/assets/Templates.message.html',
                controller: 'CallbackCtrl'
            })
            .when("/logout", {
                template: "<h2>Logging out...</h2>",
                controller:"LogoutCtrl"
            })
            .when("/error", {
                templateUrl: PathBase + '/assets/Templates.message.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["PathBase", "$routeProvider"];
    app.config(config);

    function LayoutCtrl($rootScope, $scope, idmApi, $location, idmToken) {
        $scope.layout = {};

        idmToken.addOnTokenExpired(function () {
            $scope.layout.links = null;
            $scope.layout.showLogout = false;
        });

        function load() {
            $scope.layout.showLogout = idmToken.hasToken();

            idmApi.get().then(function (api) {
                $scope.layout.username = api.data.currentUser.username;
                $scope.layout.links = api.links;
            });
        }
        idmToken.addOnTokenObtained(load);
        load();
    }
    LayoutCtrl.$inject = ["$rootScope", "$scope", "idmApi", "$location", "idmToken"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl($scope, idmToken) {
        if (idmToken.isTokenNeeded()) {
            $scope.showLogin = true;
        }

        $scope.login = function () {
            idmToken.redirectForToken("callback");
        }
    }
    HomeCtrl.$inject = ["$scope", "idmToken"];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idmToken, $location, $rootScope) {
        idmToken.processTokenCallback(function () {
            $location.url("/");
        }, function (error) {
            $rootScope.errors = [error];
        });
    }
    CallbackCtrl.$inject = ["idmToken", "$location", "$rootScope"];
    app.controller("CallbackCtrl", CallbackCtrl);

    function LogoutCtrl(idmToken, $location) {
        idmToken.removeToken();
        $location.url("/");
    }
    LogoutCtrl.$inject = ["idmToken", "$location"];
    app.controller("LogoutCtrl", LogoutCtrl);

})(angular);

