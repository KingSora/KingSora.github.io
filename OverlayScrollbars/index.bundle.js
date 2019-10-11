/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a);}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return "function"===n.type(a)},isArray:Array.isArray||function(a){return "array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return !n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return !1;return !0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return !1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return !1}catch(c){return !1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b);})(b);},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return -1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return "string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return +new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase();});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return "function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return -1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m();};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType;}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b));}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1;}};}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b;}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id");}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return !!a(b)}catch(c){return !1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null;}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b;}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return -1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return "input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return ("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]));})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return "undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return "undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]");}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:");})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O);}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return !0;return !1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return (a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1);}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a);}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return "*"===a?function(){return !0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return !!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return !1;o=p="only"===a&&!o&&"nextSibling";}return !0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g]);}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f));}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return (b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return !1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return "input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return !1;return !0},parent:function(a){return !d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return "input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return "input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return [0]}),last:na(function(a,b){return [b-1]}),eq:na(function(a,b,c){return [0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return !0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return !0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return !1;return !0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l));}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i);}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l));}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r);})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c);}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y);}c&&((l=!q&&l)&&r--,f&&t.push(l));}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u);}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i);}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a;}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length);}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return (n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a);}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return !!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a);}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return !0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return !!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return !b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f;}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return !0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return "Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)};});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0;}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1);}a.memory||(c=!1),b=!1,e&&(f=c?[]:"");},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c);});}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--;}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return !f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return !!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return !!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments);});}),a=null;}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h;},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith;}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c);}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0);},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))));}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K));}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready());}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement;}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left");}catch(b){return a.setTimeout(f,50)}J(),n.ready();}}();}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e));}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test;}catch(b){l.deleteExpando=!1;}a=null;}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c;}catch(e){}n.data(a,b,c);}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return !1;return !0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0);}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0);}return e}return "object"==typeof a?this.each(function(){n.data(this,a);}):arguments.length>1?this.each(function(){n.data(this,a,b);}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a);})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b);};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire();},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c);})})}}),n.fn.extend({queue:function(a,b){var c=2;return "string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a);})},dequeue:function(a){return this.each(function(){n.dequeue(this,a);})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f]);};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0};}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g);}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando);}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"));}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked);}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k);}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild;}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g);}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null;}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return !0}function qa(){return !1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c);})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return "undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null;}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o]);}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"));}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a);}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]();}catch(s){}n.event.triggered=void 0,m&&(e[h]=m);}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d});}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result);}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault();}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c);}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c));},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1);},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0);},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation();}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}};}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0;}),n._data(c,"submit",!0));})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a));},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0);}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a);})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a);}),n._data(b,"change",!0));})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a));};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1);},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b));}};}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b);})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this);})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d]);}g.data&&(g.data=n.extend({},g.data));}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando);}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue);}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d);});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null;}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f));}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a);}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild);}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this);})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling);})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0);}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0;}catch(e){}}b&&this.empty().append(a);},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this));},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)};});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i);}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return {get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0;}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return ""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c;}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}};}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e);}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db);}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return "boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide();})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px");},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit);}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now);}},n.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0;}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i();}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire();});})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2];}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0;}o[d]=r&&r[d]||n.style(a,d);}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide();}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b]);});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0));}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e);}else b[d]=e;}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem;}),i=function(){if(e)return !1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b);},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a);}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue);},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0);};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c);};return "string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a);})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish;})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)};}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)};}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0;},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop();},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval));},n.fx.stop=function(){a.clearInterval(ib),ib=null;},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e);};})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value;}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e));});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b);}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0;}catch(h){d.scrollHeight;}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value});});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a);})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return "undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d);}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null};}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c);}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return ""===c?(a.setAttribute(b,"auto"),c):void 0}};})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a];}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}};}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this;}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)));});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h);}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)));});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h);}}return this},toggleClass:function(a,b){var c=typeof a;return "boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b);}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b);}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""));})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return !0;return !1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)};}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b));}catch(e){c=void 0;}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c);}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return "string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g);}f=f||d;}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b);}catch(l){return {state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return {state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2];}b=k[a.toLowerCase()];}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout");},l.timeout));try{u=1,j.send(s,y);}catch(x){if(!(2>u))throw x;y(-1,x);}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")));}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))};}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b));});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this);}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b));}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a);})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a);})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes);}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return !0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return !0;a=a.parentNode;}return !1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return !n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d);});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d);}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b);};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value);});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return {name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0);}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return {send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText;}catch(k){i="";}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404;}j&&e(f,i,j,g.getAllResponseHeaders());},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c();},abort:function(){c&&c(void 0,!0);}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1);}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return {send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"));},c.insertBefore(b,c.firstChild);},abort:function(){b&&b.onload(void 0,!0);}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments;},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0;}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a);}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a]);});}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)};}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m);}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b);});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return "fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)};}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0});}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)};});}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*! jQuery requestAnimationFrame - 0.2.3-pre - 2016-10-26
* https://github.com/gnarf37/jquery-requestAnimationFrame
 * Copyright (c) 2016 Corey Frang; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery);}(function(a){function b(){c&&(window.requestAnimationFrame(b),a.fx.tick());}if(Number(a.fn.jquery.split(".")[0])>=3)return void(window.console&&window.console.warn&&window.console.warn("The jquery.requestanimationframe plugin is not needed in jQuery 3.0 or newer as they handle it natively."));var c;window.requestAnimationFrame&&(a.fx.timer=function(d){d()&&a.timers.push(d)&&!c&&(c=!0,b());},a.fx.stop=function(){c=!1;});});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs=e();}(this,function(){var t="second",e="minute",n="hour",s="day",r="week",i="month",a="year",u="Sunday.Monday.Tuesday.Wednesday.Thursday.Friday.Saturday".split("."),c="January.February.March.April.May.June.July.August.September.October.November.December".split("."),h=/^(\d{4})-?(\d{1,2})-?(\d{1,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,o=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var s=String(t);return !s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},$=function(t){return t&&String(t).toLowerCase().replace(/s$/,"")},f=function(t){return void 0===t},l=function(t){var e;return null===t?new Date(NaN):f(t)?new Date:t instanceof Date?t:"string"==typeof t&&(e=t.match(h))?new Date(e[1],e[2]-1,e[3],e[5]||0,e[6]||0,e[7]||0,e[8]||0):new Date(t)},m=function(){function h(t){this.$d=l(t),this.init();}var m=h.prototype;return m.init=function(){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds();},m.isValid=function(){return !("Invalid Date"===this.$d.toString())},m.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0},m.isSame=function(t){return this.valueOf()===t.valueOf()},m.isBefore=function(t){return this.valueOf()<t.valueOf()},m.isAfter=function(t){return this.valueOf()>t.valueOf()},m.year=function(){return this.$y},m.month=function(){return this.$M},m.day=function(){return this.$W},m.date=function(){return this.$D},m.hour=function(){return this.$H},m.minute=function(){return this.$m},m.second=function(){return this.$s},m.millisecond=function(){return this.$ms},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(u,c){var o=this,d=!!f(c)||c,l=function(t,e,n){void 0===n&&(n=o.$y);var r=new h(new Date(n,e,t));return d?r:r.endOf(s)},m=function(t,e){return new h(o.toDate()[t].apply(o.toDate(),d?[0,0,0,0].slice(e):[23,59,59,999].slice(e)))};switch($(u)){case a:return d?l(1,0):l(31,11,this.$y);case i:return d?l(1,this.$M):l(0,this.$M+1,this.$y);case r:return d?l(this.$D-this.$W,this.$M):l(this.$D+(6-this.$W),this.$M,this.$y);case s:case"date":return m("setHours",0);case n:return m("setMinutes",1);case e:return m("setSeconds",2);case t:return m("setMilliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(s,r){switch($(s)){case"date":this.$d.setDate(r);break;case i:this.$d.setMonth(r);break;case a:this.$d.setFullYear(r);break;case n:this.$d.setHours(r);break;case e:this.$d.setMinutes(r);break;case t:this.$d.setSeconds(r);break;case"millisecond":this.$d.setMilliseconds(r);}return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.add=function(u,c){u=Number(u);var o,d=!c||1!==c.length&&"ms"!==c?$(c):c;if(["M",i].indexOf(d)>-1){var f=this.set("date",1).set(i,this.$M+u);return f=f.set("date",Math.min(this.$D,f.daysInMonth()))}if(["y",a].indexOf(d)>-1)return this.set(a,this.$y+u);switch(d){case"m":case e:o=6e4;break;case"h":case n:o=36e5;break;case"d":case s:o=864e5;break;case"w":case r:o=6048e5;break;case"s":case t:o=1e3;break;default:o=1;}return new h(this.valueOf()+u*o)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e,n,s,r,i=this,a=t||"YYYY-MM-DDTHH:mm:ssZ",h=(e=this.$d.getTimezoneOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60,(e<=0?"+":"-")+d(s,2,"0")+":"+d(r,2,"0"));return a.replace(o,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(i.$y).slice(-2);case"YYYY":return String(i.$y);case"M":return String(i.$M+1);case"MM":return d(i.$M+1,2,"0");case"MMM":return c[i.$M].slice(0,3);case"MMMM":return c[i.$M];case"D":return String(i.$D);case"DD":return d(i.$D,2,"0");case"d":return String(i.$W);case"dddd":return u[i.$W];case"H":return String(i.$H);case"HH":return d(i.$H,2,"0");case"h":case"hh":return 0===i.$H?12:d(i.$H<13?i.$H:i.$H-12,"hh"===t?2:1,"0");case"a":return i.$H<12?"am":"pm";case"A":return i.$H<12?"AM":"PM";case"m":return String(i.$m);case"mm":return d(i.$m,2,"0");case"s":return String(i.$s);case"ss":return d(i.$s,2,"0");case"SSS":return d(i.$ms,3,"0");case"Z":return h;default:return h.replace(":","")}})},m.diff=function(u,c,o){var d,f,l,m,M,y,g=$(c),S=u instanceof h?u:new h(u),D=this-S,b=(d=this,m=12*((f=S).year()-d.year())+(f.month()-d.month()),M=d.clone().add(m,"months"),l=f-M<0?(f-M)/(M-d.clone().add(m-1,"months")):(f-M)/(d.clone().add(m+1,"months")-M),Number(-(m+l)));switch(g){case a:b/=12;break;case i:break;case"quarter":b/=3;break;case r:b=D/6048e5;break;case s:b=D/864e5;break;case n:b=D/36e5;break;case e:b=D/6e4;break;case t:b=D/1e3;break;default:b=D;}return o?b:(y=b)<0?Math.ceil(y)||0:Math.floor(y)},m.daysInMonth=function(){return this.endOf(i).$D},m.clone=function(){return new h(this)},m.toDate=function(){return new Date(this.$d)},m.toArray=function(){return [this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},m.toJSON=function(){return this.toISOString()},m.toISOString=function(){return this.toDate().toISOString()},m.toObject=function(){return {years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},m.toString=function(){return this.$d.toUTCString()},h}();return function(t){return new m(t)}});

(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.tippy=t();})(this,function(){function t(e){return '[object Object]'==={}.toString.call(e)}function o(e){return [].slice.call(e)}function n(e){if(e instanceof Element||t(e))return [e];if(e instanceof NodeList)return o(e);if(Array.isArray(e))return e;try{return o(document.querySelectorAll(e))}catch(e){return []}}function r(e){e.refObj=!0,e.attributes=e.attributes||{},e.setAttribute=function(t,o){e.attributes[t]=o;},e.getAttribute=function(t){return e.attributes[t]},e.removeAttribute=function(t){delete e.attributes[t];},e.hasAttribute=function(t){return t in e.attributes},e.addEventListener=function(){},e.removeEventListener=function(){},e.classList={classNames:{},add:function(t){return e.classList.classNames[t]=!0},remove:function(t){return delete e.classList.classNames[t],!0},contains:function(t){return t in e.classList.classNames}};}function s(e){for(var t=['','webkit'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function a(){return document.createElement('div')}function p(e,t,o){var i=a();i.setAttribute('class','tippy-popper'),i.setAttribute('role','tooltip'),i.setAttribute('id','tippy-'+e),i.style.zIndex=o.zIndex,i.style.maxWidth=o.maxWidth;var n=a();n.setAttribute('class','tippy-tooltip'),n.setAttribute('data-size',o.size),n.setAttribute('data-animation',o.animation),n.setAttribute('data-state','hidden'),o.theme.split(' ').forEach(function(e){n.classList.add(e+'-theme');});var r=a();if(r.setAttribute('class','tippy-content'),o.arrow){var p=a();p.style[s('transform')]=o.arrowTransform,'round'===o.arrowType?(p.classList.add('tippy-roundarrow'),p.innerHTML='<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>'):p.classList.add('tippy-arrow'),n.appendChild(p);}if(o.animateFill){n.setAttribute('data-animatefill','');var l=a();l.classList.add('tippy-backdrop'),l.setAttribute('data-state','hidden'),n.appendChild(l);}o.inertia&&n.setAttribute('data-inertia',''),o.interactive&&n.setAttribute('data-interactive','');var d=o.html;if(d){var c;d instanceof Element?(r.appendChild(d),c='#'+(d.id||'tippy-html-template')):(r.innerHTML=document.querySelector(d).innerHTML,c=d),i.setAttribute('data-html',''),n.setAttribute('data-template-id',c),o.interactive&&i.setAttribute('tabindex','-1');}else r[o.allowTitleHTML?'innerHTML':'textContent']=t;return n.appendChild(r),i.appendChild(n),i}function l(e,t,o,i){var n=o.onTrigger,r=o.onMouseLeave,s=o.onBlur,a=o.onDelegateShow,p=o.onDelegateHide,l=[];if('manual'===e)return l;var d=function(e,o){t.addEventListener(e,o),l.push({event:e,handler:o});};return i.target?(je.supportsTouch&&i.touchHold&&(d('touchstart',a),d('touchend',p)),'mouseenter'===e&&(d('mouseover',a),d('mouseout',p)),'focus'===e&&(d('focusin',a),d('focusout',p)),'click'===e&&d('click',a)):(d(e,n),je.supportsTouch&&i.touchHold&&(d('touchstart',n),d('touchend',r)),'mouseenter'===e&&d('mouseleave',r),'focus'===e&&d(ze?'focusout':'blur',s)),l}function d(e,t){var o=Ve.reduce(function(o,i){var n=e.getAttribute('data-tippy-'+i.toLowerCase())||t[i];return 'false'===n&&(n=!1),'true'===n&&(n=!0),isFinite(n)&&!isNaN(parseFloat(n))&&(n=parseFloat(n)),'target'!==i&&'string'==typeof n&&'['===n.trim().charAt(0)&&(n=JSON.parse(n)),o[i]=n,o},{});return Ze({},t,o)}function c(e,t){return t.arrow&&(t.animateFill=!1),t.appendTo&&'function'==typeof t.appendTo&&(t.appendTo=t.appendTo()),'function'==typeof t.html&&(t.html=t.html(e)),t}function f(e){var t=function(t){return e.querySelector(t)};return {tooltip:t(Xe.TOOLTIP),backdrop:t(Xe.BACKDROP),content:t(Xe.CONTENT),arrow:t(Xe.ARROW)||t(Xe.ROUND_ARROW)}}function m(e){var t=e.getAttribute('title');t&&e.setAttribute('data-original-title',t),e.removeAttribute('title');}function u(e){return e&&'[object Function]'==={}.toString.call(e)}function h(e,t){if(1!==e.nodeType)return [];var o=getComputedStyle(e,null);return t?o[t]:o}function g(e){return 'HTML'===e.nodeName?e:e.parentNode||e.host}function b(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var t=h(e),o=t.overflow,i=t.overflowX,n=t.overflowY;return /(auto|scroll|overlay)/.test(o+n+i)?e:b(g(e))}function y(e){return 11===e?it:10===e?nt:it||nt}function v(e){if(!e)return document.documentElement;for(var t=y(10)?document.body:null,o=e.offsetParent;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===h(o,'position')?v(o):o:e?e.ownerDocument.documentElement:document.documentElement}function w(e){var t=e.nodeName;return 'BODY'!==t&&('HTML'===t||v(e.firstElementChild)===e)}function E(e){return null===e.parentNode?e:E(e.parentNode)}function T(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(n,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||i.contains(n))return w(s)?s:v(s);var a=E(e);return a.host?T(a.host,t):T(e,E(t).host)}function L(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function O(e,t){var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=L(t,'top'),n=L(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function x(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function A(e,t,o,i){return Ye(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],y(10)?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function C(){var e=document.body,t=document.documentElement,o=y(10)&&getComputedStyle(t);return {height:A('Height',e,t,o),width:A('Width',e,t,o)}}function k(e){return pt({},e,{right:e.left+e.width,bottom:e.top+e.height})}function S(e){var t={};try{if(y(10)){t=e.getBoundingClientRect();var o=L(e,'top'),i=L(e,'left');t.top+=o,t.left+=i,t.bottom+=o,t.right+=i;}else t=e.getBoundingClientRect();}catch(t){}var n={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?C():{},s=r.width||e.clientWidth||n.right-n.left,a=r.height||e.clientHeight||n.bottom-n.top,p=e.offsetWidth-s,l=e.offsetHeight-a;if(p||l){var d=h(e);p-=x(d,'x'),l-=x(d,'y'),n.width-=p,n.height-=l;}return k(n)}function P(e,t){var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=y(10),n='HTML'===t.nodeName,r=S(e),s=S(t),a=b(e),p=h(t),l=parseFloat(p.borderTopWidth,10),d=parseFloat(p.borderLeftWidth,10);o&&'HTML'===t.nodeName&&(s.top=Ye(s.top,0),s.left=Ye(s.left,0));var c=k({top:r.top-s.top-l,left:r.left-s.left-d,width:r.width,height:r.height});if(c.marginTop=0,c.marginLeft=0,!i&&n){var f=parseFloat(p.marginTop,10),m=parseFloat(p.marginLeft,10);c.top-=l-f,c.bottom-=l-f,c.left-=d-m,c.right-=d-m,c.marginTop=f,c.marginLeft=m;}return (i&&!o?t.contains(a):t===a&&'BODY'!==a.nodeName)&&(c=O(c,t)),c}function I(e){var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=e.ownerDocument.documentElement,i=P(e,o),n=Ye(o.clientWidth,window.innerWidth||0),r=Ye(o.clientHeight,window.innerHeight||0),s=t?0:L(o),a=t?0:L(o,'left'),p={top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:n,height:r};return k(p)}function D(e){var t=e.nodeName;return 'BODY'!==t&&'HTML'!==t&&('fixed'===h(e,'position')||D(g(e)))}function R(e){if(!e||!e.parentElement||y())return document.documentElement;for(var t=e.parentElement;t&&'none'===h(t,'transform');)t=t.parentElement;return t||document.documentElement}function _(e,t,o,i){var n=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],r={top:0,left:0},s=n?R(e):T(e,t);if('viewport'===i)r=I(s,n);else{var a;'scrollParent'===i?(a=b(g(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===i?a=e.ownerDocument.documentElement:a=i;var p=P(a,s,n);if('HTML'===a.nodeName&&!D(s)){var l=C(),d=l.height,c=l.width;r.top+=p.top-p.marginTop,r.bottom=d+p.top,r.left+=p.left-p.marginLeft,r.right=c+p.left;}else r=p;}return r.left+=o,r.top+=o,r.right-=o,r.bottom-=o,r}function H(e){var t=e.width,o=e.height;return t*o}function N(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var s=_(o,i,r,n),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map(function(e){return pt({key:e},a[e],{area:H(a[e])})}).sort(function(e,t){return t.area-e.area}),l=p.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),d=0<l.length?l[0].key:p[0].key,c=e.split('-')[1];return d+(c?'-'+c:'')}function M(e,t,o){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n=i?R(t):T(t,o);return P(o,n,i)}function W(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function B(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function U(e,t,o){o=o.split('-')[0];var i=W(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),s=r?'top':'left',a=r?'left':'top',p=r?'height':'width',l=r?'width':'height';return n[s]=t[s]+t[p]/2-i[p]/2,n[a]=o===a?t[a]-i[l]:t[B(a)],n}function F(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function Y(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=F(e,function(e){return e[t]===o});return e.indexOf(i)}function q(e,t,o){var i=void 0===o?e:e.slice(0,Y(e,'name',o));return i.forEach(function(e){e['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var o=e['function']||e.fn;e.enabled&&u(o)&&(t.offsets.popper=k(t.offsets.popper),t.offsets.reference=k(t.offsets.reference),t=o(t,e));}),t}function z(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=M(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=N(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=U(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=q(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e));}}function j(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function X(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function K(){return this.state.isDestroyed=!0,j(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[X('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function V(e){var t=e.ownerDocument;return t?t.defaultView:window}function G(e,t,o,i){var n='BODY'===e.nodeName,r=n?e.ownerDocument.defaultView:e;r.addEventListener(t,o,{passive:!0}),n||G(b(r.parentNode),t,o,i),i.push(r);}function Q(e,t,o,i){o.updateBound=i,V(e).addEventListener('resize',o.updateBound,{passive:!0});var n=b(e);return G(n,'scroll',o.updateBound,o.scrollParents),o.scrollElement=n,o.eventsEnabled=!0,o}function Z(){this.state.eventsEnabled||(this.state=Q(this.reference,this.options,this.state,this.scheduleUpdate));}function $(e,t){return V(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound);}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function J(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=$(this.reference,this.state));}function ee(e){return ''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function te(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&ee(t[o])&&(i='px'),e.style[o]=t[o]+i;});}function oe(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o]);});}function ie(e,t,o){var i=F(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!');}return n}function ne(e){return 'end'===e?'start':'start'===e?'end':e}function re(e){var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=dt.indexOf(e),i=dt.slice(o+1).concat(dt.slice(0,o));return t?i.reverse():i}function se(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],s=n[2];if(!r)return e;if(0===s.indexOf('%')){var a;switch(s){case'%p':a=o;break;case'%':case'%r':default:a=i;}var p=k(a);return p[t]/100*r}if('vh'===s||'vw'===s){var l;return l='vh'===s?Ye(document.documentElement.clientHeight,window.innerHeight||0):Ye(document.documentElement.clientWidth,window.innerWidth||0),l/100*r}return r}function ae(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(F(s,function(e){return -1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var p=/\s*,\s*|\s+/,l=-1===a?[s]:[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1]].concat(s.slice(a+1))];return l=l.map(function(e,i){var n=(1===i?!r:r)?'height':'width',s=!1;return e.reduce(function(e,t){return ''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return se(e,n,t,o)})}),l.forEach(function(e,t){e.forEach(function(o,i){ee(o)&&(n[t]+=o*('-'===e[i-1]?-1:1));});}),n}function pe(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,s=r.popper,a=r.reference,p=n.split('-')[0];return o=ee(+i)?[+i,0]:ae(i,s,a,p),'left'===p?(s.top+=o[0],s.left-=o[1]):'right'===p?(s.top+=o[0],s.left+=o[1]):'top'===p?(s.left+=o[0],s.top-=o[1]):'bottom'===p&&(s.left+=o[0],s.top+=o[1]),e.popper=s,e}function le(e){void e.offsetHeight;}function de(e,t,o){var i=e.popper,n=e.options,r=n.onCreate,s=n.onUpdate;n.onCreate=n.onUpdate=function(){le(i),t&&t(),s(),n.onCreate=r,n.onUpdate=s;},o||e.scheduleUpdate();}function ce(e){return e.getAttribute('x-placement').replace(/-.+/,'')}function fe(e,t,o){if(!t.getAttribute('x-placement'))return !0;var i=e.clientX,n=e.clientY,r=o.interactiveBorder,s=o.distance,a=t.getBoundingClientRect(),p=ce(t),l=r+s,d={top:a.top-n>r,bottom:n-a.bottom>r,left:a.left-i>r,right:i-a.right>r};return 'top'===p?d.top=a.top-n>l:'bottom'===p?d.bottom=n-a.bottom>l:'left'===p?d.left=a.left-i>l:'right'===p?d.right=i-a.right>l:void 0,d.top||d.bottom||d.left||d.right}function me(e,t,o,i){if(!t.length)return '';var n={scale:function(){return 1===t.length?''+t[0]:o?t[0]+', '+t[1]:t[1]+', '+t[0]}(),translate:function(){return 1===t.length?i?-t[0]+'px':t[0]+'px':o?i?t[0]+'px, '+-t[1]+'px':t[0]+'px, '+t[1]+'px':i?-t[1]+'px, '+t[0]+'px':t[1]+'px, '+t[0]+'px'}()};return n[e]}function ue(e,t){if(!e)return '';return t?e:{X:'Y',Y:'X'}[e]}function he(e,t,o){var i=ce(e),n='top'===i||'bottom'===i,r='right'===i||'bottom'===i,a=function(e){var t=o.match(e);return t?t[1]:''},p=function(e){var t=o.match(e);return t?t[1].split(',').map(parseFloat):[]},l={translate:/translateX?Y?\(([^)]+)\)/,scale:/scaleX?Y?\(([^)]+)\)/},d={translate:{axis:a(/translate([XY])/),numbers:p(l.translate)},scale:{axis:a(/scale([XY])/),numbers:p(l.scale)}},c=o.replace(l.translate,'translate'+ue(d.translate.axis,n)+'('+me('translate',d.translate.numbers,n,r)+')').replace(l.scale,'scale'+ue(d.scale.axis,n)+'('+me('scale',d.scale.numbers,n,r)+')');t.style[s('transform')]=c;}function ge(e){return -(e-Ke.distance)+'px'}function be(e){requestAnimationFrame(function(){setTimeout(e,1);});}function ye(t,o){var i=Element.prototype.closest||function(t){for(var o=this;o;){if(e.call(o,t))return o;o=o.parentElement;}};return i.call(t,o)}function ve(e,t){return Array.isArray(e)?e[t]:e}function we(e,t){e.forEach(function(e){e&&e.setAttribute('data-state',t);});}function Ee(e,t){e.filter(Boolean).forEach(function(e){e.style[s('transitionDuration')]=t+'ms';});}function Te(e){var t=window.scrollX||window.pageXOffset,o=window.scrollY||window.pageYOffset;e.focus(),scroll(t,o);}function Le(){var e=this._(ht).lastTriggerEvent;return this.options.followCursor&&!je.usingTouch&&e&&'focus'!==e.type}function Oe(e){var t=ye(e.target,this.options.target);if(t&&!t._tippy){var o=t.getAttribute('title')||this.title;o&&(t.setAttribute('title',o),We(t,Ze({},this.options,{target:null})),xe.call(t._tippy,e));}}function xe(e){var t=this,o=this.options;if(Pe.call(this),!this.state.visible){if(o.target)return void Oe.call(this,e);if(this._(ht).isPreparingToShow=!0,o.wait)return void o.wait.call(this.popper,this.show.bind(this),e);if(Le.call(this)){this._(ht).followCursorListener||Ie.call(this);var i=f(this.popper),n=i.arrow;n&&(n.style.margin='0'),document.addEventListener('mousemove',this._(ht).followCursorListener);}var r=ve(o.delay,0);r?this._(ht).showTimeout=setTimeout(function(){t.show();},r):this.show();}}function Ae(){var e=this;if(Pe.call(this),!!this.state.visible){this._(ht).isPreparingToShow=!1;var t=ve(this.options.delay,1);t?this._(ht).hideTimeout=setTimeout(function(){e.state.visible&&e.hide();},t):this.hide();}}function Ce(){var e=this;return {onTrigger:function(t){if(e.state.enabled){var o=je.supportsTouch&&je.usingTouch&&-1<['mouseenter','mouseover','focus'].indexOf(t.type);o&&e.options.touchHold||(e._(ht).lastTriggerEvent=t,'click'===t.type&&'persistent'!==e.options.hideOnClick&&e.state.visible?Ae.call(e):xe.call(e,t));}},onMouseLeave:function(t){if(!(-1<['mouseleave','mouseout'].indexOf(t.type)&&je.supportsTouch&&je.usingTouch&&e.options.touchHold)){if(e.options.interactive){var o=Ae.bind(e),i=function t(i){var n=ye(i.target,Xe.REFERENCE),r=ye(i.target,Xe.POPPER)===e.popper,s=n===e.reference;r||s||fe(i,e.popper,e.options)&&(document.body.removeEventListener('mouseleave',o),document.removeEventListener('mousemove',t),Ae.call(e,t));};return document.body.addEventListener('mouseleave',o),void document.addEventListener('mousemove',i)}Ae.call(e);}},onBlur:function(t){if(!(t.target!==e.reference||je.usingTouch)){if(e.options.interactive){if(!t.relatedTarget)return;if(ye(t.relatedTarget,Xe.POPPER))return}Ae.call(e);}},onDelegateShow:function(t){ye(t.target,e.options.target)&&xe.call(e,t);},onDelegateHide:function(t){ye(t.target,e.options.target)&&Ae.call(e);}}}function ke(){var e=this,t=this.popper,o=this.reference,i=this.options,n=f(t),r=n.tooltip,s=i.popperOptions,a='round'===i.arrowType?Xe.ROUND_ARROW:Xe.ARROW,p=r.querySelector(a),l=Ze({placement:i.placement},s||{},{modifiers:Ze({},s?s.modifiers:{},{arrow:Ze({element:a},s&&s.modifiers?s.modifiers.arrow:{}),flip:Ze({enabled:i.flip,padding:i.distance+5,behavior:i.flipBehavior},s&&s.modifiers?s.modifiers.flip:{}),offset:Ze({offset:i.offset},s&&s.modifiers?s.modifiers.offset:{})}),onCreate:function(){r.style[ce(t)]=ge(i.distance),p&&i.arrowTransform&&he(t,p,i.arrowTransform);},onUpdate:function(){var e=r.style;e.top='',e.bottom='',e.left='',e.right='',e[ce(t)]=ge(i.distance),p&&i.arrowTransform&&he(t,p,i.arrowTransform);}});return Re.call(this,{target:t,callback:function(){e.popperInstance.update();},options:{childList:!0,subtree:!0,characterData:!0}}),new ft(o,t,l)}function Se(e){var t=this.options;if(this.popperInstance?(this.popperInstance.scheduleUpdate(),t.livePlacement&&!Le.call(this)&&this.popperInstance.enableEventListeners()):(this.popperInstance=ke.call(this),!t.livePlacement&&this.popperInstance.disableEventListeners()),!Le.call(this)){var o=f(this.popper),i=o.arrow;i&&(i.style.margin=''),this.popperInstance.reference=this.reference;}de(this.popperInstance,e,!0),t.appendTo.contains(this.popper)||t.appendTo.appendChild(this.popper);}function Pe(){var e=this._(ht),t=e.showTimeout,o=e.hideTimeout;clearTimeout(t),clearTimeout(o);}function Ie(){var e=this;this._(ht).followCursorListener=function(t){var o=e._(ht).lastMouseMoveEvent=t,i=o.clientX,n=o.clientY;e.popperInstance&&(e.popperInstance.reference={getBoundingClientRect:function(){return {width:0,height:0,top:n,left:i,right:i,bottom:n}},clientWidth:0,clientHeight:0},e.popperInstance.scheduleUpdate());};}function De(){var e=this,t=function(){e.popper.style[s('transitionDuration')]=e.options.updateDuration+'ms';},o=function(){e.popper.style[s('transitionDuration')]='';};(function i(){e.popperInstance&&e.popperInstance.update(),t(),e.state.visible?requestAnimationFrame(i):o();})();}function Re(e){var t=e.target,o=e.callback,i=e.options;if(window.MutationObserver){var n=new MutationObserver(o);n.observe(t,i),this._(ht).mutationObservers.push(n);}}function _e(e,t){if(!e)return t();var o=f(this.popper),i=o.tooltip,n=function(e,t){t&&i[e+'EventListener']('ontransitionend'in window?'transitionend':'webkitTransitionEnd',t);},r=function o(r){r.target===i&&(n('remove',o),t());};n('remove',this._(ht).transitionendListener),n('add',r),this._(ht).transitionendListener=r;}function He(e,t){return e.reduce(function(e,o){var i=yt,n=c(o,t.performance?t:d(o,t)),r=o.getAttribute('title');if(!r&&!n.target&&!n.html&&!n.dynamicTitle)return e;o.setAttribute(n.target?'data-tippy-delegate':'data-tippy',''),m(o);var s=p(i,r,n),a=new bt({id:i,reference:o,popper:s,options:n,title:r,popperInstance:null});n.createPopperInstanceOnInit&&(a.popperInstance=ke.call(a),a.popperInstance.disableEventListeners());var u=Ce.call(a);return a.listeners=n.trigger.trim().split(' ').reduce(function(e,t){return e.concat(l(t,o,u,n))},[]),n.dynamicTitle&&Re.call(a,{target:o,callback:function(){var e=f(s),t=e.content,i=o.getAttribute('title');i&&(t[n.allowTitleHTML?'innerHTML':'textContent']=a.title=i,m(o));},options:{attributes:!0}}),o._tippy=a,s._tippy=a,s._reference=o,e.push(a),yt++,e},[])}function Ne(e){var t=o(document.querySelectorAll(Xe.POPPER));t.forEach(function(t){var o=t._tippy;if(o){var i=o.options;(!0===i.hideOnClick||-1<i.trigger.indexOf('focus'))&&(!e||t!==e.popper)&&o.hide();}});}function Me(){var t=function(){je.usingTouch||(je.usingTouch=!0,je.iOS&&document.body.classList.add('tippy-touch'),je.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',i),je.onUserInputChange('touch'));},i=function(){var e;return function(){var t=performance.now();20>t-e&&(je.usingTouch=!1,document.removeEventListener('mousemove',i),!je.iOS&&document.body.classList.remove('tippy-touch'),je.onUserInputChange('mouse')),e=t;}}();document.addEventListener('click',function(e){if(!(e.target instanceof Element))return Ne();var t=ye(e.target,Xe.REFERENCE),o=ye(e.target,Xe.POPPER);if(!(o&&o._tippy&&o._tippy.options.interactive)){if(t&&t._tippy){var i=t._tippy.options,n=-1<i.trigger.indexOf('click'),r=i.multiple;if(!r&&je.usingTouch||!r&&n)return Ne(t._tippy);if(!0!==i.hideOnClick||n)return}Ne();}}),document.addEventListener('touchstart',t),window.addEventListener('blur',function(){var t=document,o=t.activeElement;o&&o.blur&&e.call(o,Xe.REFERENCE)&&o.blur();}),window.addEventListener('resize',function(){o(document.querySelectorAll(Xe.POPPER)).forEach(function(e){var t=e._tippy;t&&!t.options.livePlacement&&t.popperInstance.scheduleUpdate();});}),!je.supportsTouch&&(navigator.maxTouchPoints||navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',t);}function We(e,o,i){je.supported&&!vt&&(Me(),vt=!0),t(e)&&r(e),o=Ze({},Ke,o);var s=n(e),a=s[0];return {selector:e,options:o,tooltips:je.supported?He(i&&a?[a]:s,o):[],destroyAll:function(){this.tooltips.forEach(function(e){return e.destroy()}),this.tooltips=[];}}}var Be=Math.min,Ue=Math.round,Fe=Math.floor,Ye=Math.max,qe='undefined'!=typeof window,ze=qe&&/MSIE |Trident\//.test(navigator.userAgent),je={};qe&&(je.supported='requestAnimationFrame'in window,je.supportsTouch='ontouchstart'in window,je.usingTouch=!1,je.dynamicInputDetection=!0,je.iOS=/iPhone|iPad|iPod/.test(navigator.platform)&&!window.MSStream,je.onUserInputChange=function(){});for(var Xe={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-content',BACKDROP:'.tippy-backdrop',ARROW:'.tippy-arrow',ROUND_ARROW:'.tippy-roundarrow',REFERENCE:'[data-tippy]'},Ke={placement:'top',livePlacement:!0,trigger:'mouseenter focus',animation:'shift-away',html:!1,animateFill:!0,arrow:!1,delay:0,duration:[350,300],interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,updateDuration:350,sticky:!1,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,flip:!0,flipBehavior:'flip',arrowType:'sharp',arrowTransform:'',maxWidth:'',target:null,allowTitleHTML:!0,popperOptions:{},createPopperInstanceOnInit:!1,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}},Ve=je.supported&&Object.keys(Ke),Ge=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},Qe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,('value'in o)&&(o.writable=!0),Object.defineProperty(e,o.key,o);}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),Ze=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$e='undefined'!=typeof window&&'undefined'!=typeof document,Je=['Edge','Trident','Firefox'],et=0,tt=0;tt<Je.length;tt+=1)if($e&&0<=navigator.userAgent.indexOf(Je[tt])){et=1;break}var i=$e&&window.Promise,ot=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e();}));}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e();},et));}},it=$e&&!!(window.MSInputMethodContext&&document.documentMode),nt=$e&&/MSIE 10/.test(navigator.userAgent),rt=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},st=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),at=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},pt=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},lt=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],dt=lt.slice(3),ct={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ft=function(){function e(t,o){var i=this,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};rt(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ot(this.update.bind(this)),this.options=pt({},e.Defaults,n),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(pt({},e.Defaults.modifiers,n.modifiers)).forEach(function(t){i.options.modifiers[t]=pt({},e.Defaults.modifiers[t]||{},n.modifiers?n.modifiers[t]:{});}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return pt({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&u(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state);}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r;}return st(e,[{key:'update',value:function(){return z.call(this)}},{key:'destroy',value:function(){return K.call(this)}},{key:'enableEventListeners',value:function(){return Z.call(this)}},{key:'disableEventListeners',value:function(){return J.call(this)}}]),e}();ft.Utils=('undefined'==typeof window?global:window).PopperUtils,ft.placements=lt,ft.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,s=n.popper,a=-1!==['bottom','top'].indexOf(o),p=a?'left':'top',l=a?'width':'height',d={start:at({},p,r[p]),end:at({},p,r[p]+r[l]-s[l])};e.offsets.popper=pt({},s,d[i]);}return e}},offset:{order:200,enabled:!0,fn:pe,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||v(e.instance.popper);e.instance.reference===o&&(o=v(o));var i=X('transform'),n=e.instance.popper.style,r=n.top,s=n.left,a=n[i];n.top='',n.left='',n[i]='';var p=_(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);n.top=r,n.left=s,n[i]=a,t.boundaries=p;var l=t.priority,d=e.offsets.popper,c={primary:function(e){var o=d[e];return d[e]<p[e]&&!t.escapeWithReference&&(o=Ye(d[e],p[e])),at({},e,o)},secondary:function(e){var o='right'===e?'left':'top',i=d[o];return d[e]>p[e]&&!t.escapeWithReference&&(i=Be(d[o],p[e]-('right'===e?d.width:d.height))),at({},o,i)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';d=pt({},d,c[t](e));}),e.offsets.popper=d,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=Fe,s=-1!==['top','bottom'].indexOf(n),a=s?'right':'bottom',p=s?'left':'top',l=s?'width':'height';return o[a]<r(i[p])&&(e.offsets.popper[p]=r(i[p])-o[l]),o[p]>r(i[a])&&(e.offsets.popper[p]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var o;if(!ie(e.instance.modifiers,'arrow','keepTogether'))return e;var i=t.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,s=r.popper,a=r.reference,p=-1!==['left','right'].indexOf(n),l=p?'height':'width',d=p?'Top':'Left',c=d.toLowerCase(),f=p?'left':'top',m=p?'bottom':'right',u=W(i)[l];a[m]-u<s[c]&&(e.offsets.popper[c]-=s[c]-(a[m]-u)),a[c]+u>s[m]&&(e.offsets.popper[c]+=a[c]+u-s[m]),e.offsets.popper=k(e.offsets.popper);var g=a[c]+a[l]/2-u/2,b=h(e.instance.popper),y=parseFloat(b['margin'+d],10),v=parseFloat(b['border'+d+'Width'],10),w=g-e.offsets.popper[c]-y-v;return w=Ye(Be(s[l]-u,w),0),e.arrowElement=i,e.offsets.arrow=(o={},at(o,c,Ue(w)),at(o,f,''),o),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(j(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=_(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split('-')[0],n=B(i),r=e.placement.split('-')[1]||'',s=[];switch(t.behavior){case ct.FLIP:s=[i,n];break;case ct.CLOCKWISE:s=re(i);break;case ct.COUNTERCLOCKWISE:s=re(i,!0);break;default:s=t.behavior;}return s.forEach(function(a,p){if(i!==a||s.length===p+1)return e;i=e.placement.split('-')[0],n=B(i);var l=e.offsets.popper,d=e.offsets.reference,c=Fe,f='left'===i&&c(l.right)>c(d.left)||'right'===i&&c(l.left)<c(d.right)||'top'===i&&c(l.bottom)>c(d.top)||'bottom'===i&&c(l.top)<c(d.bottom),m=c(l.left)<c(o.left),u=c(l.right)>c(o.right),h=c(l.top)<c(o.top),g=c(l.bottom)>c(o.bottom),b='left'===i&&m||'right'===i&&u||'top'===i&&h||'bottom'===i&&g,y=-1!==['top','bottom'].indexOf(i),v=!!t.flipVariations&&(y&&'start'===r&&m||y&&'end'===r&&u||!y&&'start'===r&&h||!y&&'end'===r&&g);(f||b||v)&&(e.flipped=!0,(f||b)&&(i=s[p+1]),v&&(r=ne(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=pt({},e.offsets.popper,U(e.instance.popper,e.offsets.reference,e.placement)),e=q(e.instance.modifiers,e,'flip'));}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,s=-1!==['left','right'].indexOf(o),a=-1===['top','left'].indexOf(o);return n[s?'left':'top']=r[o]-(a?n[s?'width':'height']:0),e.placement=B(t),e.offsets.popper=k(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!ie(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=F(e.instance.modifiers,function(e){return 'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']='';}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1;}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,r=F(e.instance.modifiers,function(e){return 'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,a,p=void 0===r?t.gpuAcceleration:r,l=v(e.instance.popper),d=S(l),c={position:n.position},f={left:Fe(n.left),top:Ue(n.top),bottom:Ue(n.bottom),right:Fe(n.right)},m='bottom'===o?'top':'bottom',u='right'===i?'left':'right',h=X('transform');if(a='bottom'==m?-d.height+f.bottom:f.top,s='right'==u?-d.width+f.right:f.left,p&&h)c[h]='translate3d('+s+'px, '+a+'px, 0)',c[m]=0,c[u]=0,c.willChange='transform';else{var g='bottom'==m?-1:1,b='right'==u?-1:1;c[m]=a*g,c[u]=s*b,c.willChange=m+', '+u;}var y={"x-placement":e.placement};return e.attributes=pt({},y,e.attributes),e.styles=pt({},c,e.styles),e.arrowStyles=pt({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return te(e.instance.popper,e.styles),oe(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&te(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=M(n,t,e,o.positionFixed),s=N(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',s),te(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}};var mt={};if(qe){var ut=Element.prototype;mt=ut.matches||ut.matchesSelector||ut.webkitMatchesSelector||ut.mozMatchesSelector||ut.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;0<=--o&&t.item(o)!==this;);return -1<o};}var e=mt,ht={},gt=function(e){return function(t){return t===ht&&e}},bt=function(){function e(t){for(var o in Ge(this,e),t)this[o]=t[o];this.state={destroyed:!1,visible:!1,enabled:!0},this._=gt({mutationObservers:[]});}return Qe(e,[{key:'enable',value:function(){this.state.enabled=!0;}},{key:'disable',value:function(){this.state.enabled=!1;}},{key:'show',value:function(e){var t=this;if(!this.state.destroyed&&this.state.enabled){var o=this.popper,i=this.reference,n=this.options,r=f(o),a=r.tooltip,p=r.backdrop,l=r.content;return n.dynamicTitle&&!i.getAttribute('data-original-title')||i.hasAttribute('disabled')?void 0:i.refObj||document.documentElement.contains(i)?void(n.onShow.call(o,this),e=ve(void 0===e?n.duration:e,0),Ee([o,a,p],0),o.style.visibility='visible',this.state.visible=!0,Se.call(this,function(){if(t.state.visible){if(Le.call(t)||t.popperInstance.scheduleUpdate(),Le.call(t)){t.popperInstance.disableEventListeners();var r=ve(n.delay,0),d=t._(ht).lastTriggerEvent;d&&t._(ht).followCursorListener(r&&t._(ht).lastMouseMoveEvent?t._(ht).lastMouseMoveEvent:d);}Ee([a,p,p?l:null],e),p&&getComputedStyle(p)[s('transform')],n.interactive&&i.classList.add('tippy-active'),n.sticky&&De.call(t),we([a,p],'visible'),_e.call(t,e,function(){n.updateDuration||a.classList.add('tippy-notransition'),n.interactive&&Te(o),i.setAttribute('aria-describedby','tippy-'+t.id),n.onShown.call(o,t);});}})):void this.destroy()}}},{key:'hide',value:function(e){var t=this;if(!this.state.destroyed&&this.state.enabled){var o=this.popper,i=this.reference,n=this.options,r=f(o),s=r.tooltip,a=r.backdrop,p=r.content;n.onHide.call(o,this),e=ve(void 0===e?n.duration:e,1),n.updateDuration||s.classList.remove('tippy-notransition'),n.interactive&&i.classList.remove('tippy-active'),o.style.visibility='hidden',this.state.visible=!1,Ee([s,a,a?p:null],e),we([s,a],'hidden'),n.interactive&&-1<n.trigger.indexOf('click')&&Te(i),be(function(){_e.call(t,e,function(){t.state.visible||!n.appendTo.contains(o)||(!t._(ht).isPreparingToShow&&(document.removeEventListener('mousemove',t._(ht).followCursorListener),t._(ht).lastMouseMoveEvent=null),t.popperInstance&&t.popperInstance.disableEventListeners(),i.removeAttribute('aria-describedby'),n.appendTo.removeChild(o),n.onHidden.call(o,t));});});}}},{key:'destroy',value:function(){var e=this,t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];if(!this.state.destroyed){this.state.visible&&this.hide(0),this.listeners.forEach(function(t){e.reference.removeEventListener(t.event,t.handler);}),this.title&&this.reference.setAttribute('title',this.title),delete this.reference._tippy;['data-original-title','data-tippy','data-tippy-delegate'].forEach(function(t){e.reference.removeAttribute(t);}),this.options.target&&t&&o(this.reference.querySelectorAll(this.options.target)).forEach(function(e){return e._tippy&&e._tippy.destroy()}),this.popperInstance&&this.popperInstance.destroy(),this._(ht).mutationObservers.forEach(function(e){e.disconnect();}),this.state.destroyed=!0;}}}]),e}(),yt=1,vt=!1;return We.version='2.5.3',We.browser=je,We.defaults=Ke,We.one=function(e,t){return We(e,t,!0).tooltips[0]},We.disableAnimations=function(){Ke.updateDuration=Ke.duration=0,Ke.animateFill=!1;},We});

/*! highlight.js v9.15.9 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(exports);}(function(a){var f=[],u=Object.keys,N={},c={},n=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,t=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,r={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",relevance:"r",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},b="</span>",h={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function _(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(e){return e.nodeName.toLowerCase()}function v(e,n){var t=e&&e.exec(n);return t&&0===t.index}function l(e){return n.test(e)}function g(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n];}),t}function R(e){var a=[];return function e(n,t){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(a.push({event:"start",offset:t,node:r}),t=e(r,t),E(r).match(/br|hr|img|input/)||a.push({event:"stop",offset:t,node:r}));return t}(e,0),a}function i(e){if(r&&!e.langApiRestored){for(var n in e.langApiRestored=!0,r)e[n]&&(e[r[n]]=e[n]);(e.c||[]).concat(e.v||[]).forEach(i);}}function m(o){function s(e){return e&&e.source||e}function c(e,n){return new RegExp(s(e),"m"+(o.cI?"i":"")+(n?"g":""))}!function n(t,e){if(!t.compiled){if(t.compiled=!0,t.k=t.k||t.bK,t.k){function r(t,e){o.cI&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1];});}var a={};"string"==typeof t.k?r("keyword",t.k):u(t.k).forEach(function(e){r(e,t.k[e]);}),t.k=a;}t.lR=c(t.l||/\w+/,!0),e&&(t.bK&&(t.b="\\b("+t.bK.split(" ").join("|")+")\\b"),t.b||(t.b=/\B|\b/),t.bR=c(t.b),t.endSameAsBegin&&(t.e=t.b),t.e||t.eW||(t.e=/\B|\b/),t.e&&(t.eR=c(t.e)),t.tE=s(t.e)||"",t.eW&&e.tE&&(t.tE+=(t.e?"|":"")+e.tE)),t.i&&(t.iR=c(t.i)),null==t.r&&(t.r=1),t.c||(t.c=[]),t.c=Array.prototype.concat.apply([],t.c.map(function(e){return function(n){return n.v&&!n.cached_variants&&(n.cached_variants=n.v.map(function(e){return g(n,{v:null},e)})),n.cached_variants||n.eW&&[g(n)]||[n]}("self"===e?t:e)})),t.c.forEach(function(e){n(e,t);}),t.starts&&n(t.starts,e);var i=t.c.map(function(e){return e.bK?"\\.?(?:"+e.b+")\\.?":e.b}).concat([t.tE,t.i]).map(s).filter(Boolean);t.t=i.length?c(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var o=r,c=s(e[i]);for(0<i&&(a+=n);0<c.length;){var u=t.exec(c);if(null==u){a+=c;break}a+=c.substring(0,u.index),c=c.substring(u.index+u[0].length),"\\"==u[0][0]&&u[1]?a+="\\"+String(Number(u[1])+o):(a+=u[0],"("==u[0]&&r++);}}return a}(i,"|"),!0):{exec:function(){return null}};}}(o);}function C(e,n,i,t){function c(e,n,t,r){var a='<span class="'+(r?"":h.classPrefix);return e?(a+=e+'">')+n+(t?"":b):n}function o(){E+=null!=l.sL?function(){var e="string"==typeof l.sL;if(e&&!N[l.sL])return _(g);var n=e?C(l.sL,g,!0,f[l.sL]):O(g,l.sL.length?l.sL:void 0);return 0<l.r&&(R+=n.r),e&&(f[l.sL]=n.top),c(n.language,n.value,!1,!0)}():function(){var e,n,t,r,a,i,o;if(!l.k)return _(g);for(r="",n=0,l.lR.lastIndex=0,t=l.lR.exec(g);t;)r+=_(g.substring(n,t.index)),a=l,i=t,o=s.cI?i[0].toLowerCase():i[0],(e=a.k.hasOwnProperty(o)&&a.k[o])?(R+=e[1],r+=c(e[0],_(t[0]))):r+=_(t[0]),n=l.lR.lastIndex,t=l.lR.exec(g);return r+_(g.substr(n))}(),g="";}function u(e){E+=e.cN?c(e.cN,"",!0):"",l=Object.create(e,{parent:{value:l}});}function r(e,n){if(g+=e,null==n)return o(),0;var t=function(e,n){var t,r,a;for(t=0,r=n.c.length;t<r;t++)if(v(n.c[t].bR,e))return n.c[t].endSameAsBegin&&(n.c[t].eR=(a=n.c[t].bR.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.c[t]}(n,l);if(t)return t.skip?g+=n:(t.eB&&(g+=n),o(),t.rB||t.eB||(g=n)),u(t),t.rB?0:n.length;var r=function e(n,t){if(v(n.eR,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.eW)return e(n.parent,t)}(l,n);if(r){var a=l;for(a.skip?g+=n:(a.rE||a.eE||(g+=n),o(),a.eE&&(g=n));l.cN&&(E+=b),l.skip||l.sL||(R+=l.r),(l=l.parent)!==r.parent;);return r.starts&&(r.endSameAsBegin&&(r.starts.eR=r.eR),u(r.starts)),a.rE?0:n.length}if(function(e,n){return !i&&v(n.iR,e)}(n,l))throw new Error('Illegal lexeme "'+n+'" for mode "'+(l.cN||"<unnamed>")+'"');return g+=n,n.length||1}var s=B(e);if(!s)throw new Error('Unknown language: "'+e+'"');m(s);var a,l=t||s,f={},E="";for(a=l;a!==s;a=a.parent)a.cN&&(E=c(a.cN,"",!0)+E);var g="",R=0;try{for(var d,p,M=0;l.t.lastIndex=M,d=l.t.exec(n);)p=r(n.substring(M,d.index),d[0]),M=d.index+p;for(r(n.substr(M)),a=l;a.parent;a=a.parent)a.cN&&(E+=b);return {r:R,value:E,language:e,top:l}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return {r:0,value:_(n)};throw e}}function O(t,e){e=e||h.languages||u(N);var r={r:0,value:_(t)},a=r;return e.filter(B).filter(M).forEach(function(e){var n=C(e,t,!1);n.language=e,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n);}),a.language&&(r.second_best=a),r}function d(e){return h.tabReplace||h.useBR?e.replace(t,function(e,n){return h.useBR&&"\n"===e?"<br>":h.tabReplace?n.replace(/\t/g,h.tabReplace):""}):e}function o(e){var n,t,r,a,i,o=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=s.exec(i))return B(t[1])?t[1]:"no-highlight";for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(l(a=i[n])||B(a))return a}(e);l(o)||(h.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,r=o?C(o,i,!0):O(i),(t=R(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,t){var r=0,a="",i=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){a+="<"+E(e)+f.map.call(e.attributes,function(e){return " "+e.nodeName+'="'+_(e.value).replace('"',"&quot;")+'"'}).join("")+">";}function u(e){a+="</"+E(e)+">";}function s(e){("start"===e.event?c:u)(e.node);}for(;e.length||n.length;){var l=o();if(a+=_(t.substring(r,l[0].offset)),r=l[0].offset,l===e){for(i.reverse().forEach(u);s(l.splice(0,1)[0]),(l=o())===e&&l.length&&l[0].offset===r;);i.reverse().forEach(c);}else"start"===l[0].event?i.push(l[0].node):i.pop(),s(l.splice(0,1)[0]);}return a+_(t.substr(r))}(t,R(a),i)),r.value=d(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var r=n?c[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}(e.className,o,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}));}function p(){if(!p.called){p.called=!0;var e=document.querySelectorAll("pre code");f.forEach.call(e,o);}}function B(e){return e=(e||"").toLowerCase(),N[e]||N[c[e]]}function M(e){var n=B(e);return n&&!n.disableAutodetect}return a.highlight=C,a.highlightAuto=O,a.fixMarkup=d,a.highlightBlock=o,a.configure=function(e){h=g(h,e);},a.initHighlighting=p,a.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",p,!1),addEventListener("load",p,!1);},a.registerLanguage=function(n,e){var t=N[n]=e(a);i(t),t.aliases&&t.aliases.forEach(function(e){c[e]=n;});},a.listLanguages=function(){return u(N)},a.getLanguage=B,a.autoDetection=M,a.inherit=g,a.IR=a.IDENT_RE="[a-zA-Z]\\w*",a.UIR=a.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",a.NR=a.NUMBER_RE="\\b\\d+(\\.\\d+)?",a.CNR=a.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR=a.BINARY_NUMBER_RE="\\b(0b[01]+)",a.RSR=a.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE=a.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",r:0},a.ASM=a.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM=a.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM=a.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},a.C=a.COMMENT=function(e,n,t){var r=a.inherit({cN:"comment",b:e,e:n,c:[]},t||{});return r.c.push(a.PWM),r.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),r},a.CLCM=a.C_LINE_COMMENT_MODE=a.C("//","$"),a.CBCM=a.C_BLOCK_COMMENT_MODE=a.C("/\\*","\\*/"),a.HCM=a.HASH_COMMENT_MODE=a.C("#","$"),a.NM=a.NUMBER_MODE={cN:"number",b:a.NR,r:0},a.CNM=a.C_NUMBER_MODE={cN:"number",b:a.CNR,r:0},a.BNM=a.BINARY_NUMBER_MODE={cN:"number",b:a.BNR,r:0},a.CSSNM=a.CSS_NUMBER_MODE={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},a.RM=a.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,r:0,c:[a.BE]}]},a.TM=a.TITLE_MODE={cN:"title",b:a.IR,r:0},a.UTM=a.UNDERSCORE_TITLE_MODE={cN:"title",b:a.UIR,r:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,r:0},a});hljs.registerLanguage("cs",function(e){var i={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},t={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a=e.inherit(t,{i:/\n/}),c={cN:"subst",b:"{",e:"}",k:i},n=e.inherit(c,{i:/\n/}),s={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,n]},b={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},c]},l=e.inherit(b,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},n]});c.c=[b,s,t,e.ASM,e.QSM,r,e.CBCM],n.c=[l,s,a,e.ASM,e.QSM,r,e.inherit(e.CBCM,{i:/\n/})];var o={v:[b,s,t,e.ASM,e.QSM]},d=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return {aliases:["csharp","c#"],k:i,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"\x3c!--|--\x3e"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},o,r,{bK:"class interface",e:/[{;=]/,i:/[^\s:,]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{cN:"meta",b:"^\\s*\\[",eB:!0,e:"\\]",eE:!0,c:[{cN:"meta-string",b:/"/,e:/"/}]},{bK:"new return throw await else",r:0},{cN:"function",b:"("+d+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/\s*[{;=]/,eE:!0,k:i,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:i,r:0,c:[o,r,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",a={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},t={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:a,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,t,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return {aliases:["js","jsx"],k:a,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,t,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:a,c:s}]}]},{cN:"",b:/\s/,e:/\s*/,skip:!0},{b:/</,e:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,sL:"xml",c:[{b:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{b:/<[A-Za-z0-9\\._:-]+/,e:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,c:[{b:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor get set",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("plaintext",function(e){return {disableAutodetect:!0}});hljs.registerLanguage("scss",function(e){var t={cN:"variable",b:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},i={cN:"number",b:"#[0-9A-Fa-f]+"};e.CSSNM,e.QSM,e.ASM,e.CBCM;return {cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,{cN:"selector-id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"selector-class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"selector-attr",b:"\\[",e:"\\]",i:"$"},{cN:"selector-tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},t,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{b:":",e:";",c:[t,i,e.CSSNM,e.QSM,e.ASM,{cN:"meta",b:"!important"}]},{b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[t,e.QSM,e.ASM,i,e.CSSNM,{b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}});hljs.registerLanguage("xml",function(s){var e={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return {aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"meta",b:/<\?xml/,e:/\?>/,r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0},{b:'b"',e:'"',skip:!0},{b:"b'",e:"'",skip:!0},s.inherit(s.ASM,{i:null,cN:null,c:null,skip:!0}),s.inherit(s.QSM,{i:null,cN:null,c:null,skip:!0})]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[e],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[e],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},e]}]}});hljs.registerLanguage("markdown",function(e){return {aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^\\s*([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}});hljs.registerLanguage("makefile",function(e){var i={cN:"variable",v:[{b:"\\$\\("+e.UIR+"\\)",c:[e.BE]},{b:/\$[@%<?\^\+\*]/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,i]},a={cN:"variable",b:/\$\([\w-]+\s/,e:/\)/,k:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},c:[i]},n={b:"^"+e.UIR+"\\s*[:+?]?=",i:"\\n",rB:!0,c:[{b:"^"+e.UIR,e:"[:+?]?=",eE:!0}]},t={cN:"section",b:/^[^\s]+:/,e:/$/,c:[i]};return {aliases:["mk","mak"],k:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",l:/[\w-]+/,c:[e.HCM,i,r,a,n,{cN:"meta",b:/^\.PHONY:/,e:/$/,k:{"meta-keyword":".PHONY"},l:/[\.\w]+/},t]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return {aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,s,{cN:"",b:/\\"/},{cN:"string",b:/'/,e:/'/},t]}});hljs.registerLanguage("typescript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},n={cN:"meta",b:"@"+r},a={b:"\\(",e:/\)/,k:t,c:["self",e.QSM,e.ASM,e.NM]},o={cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:[e.CLCM,e.CBCM,n,a]};return {aliases:["ts"],k:t,c:[{cN:"meta",b:/^\s*['"]use strict['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+e.IR+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:e.IR},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:["self",e.CLCM,e.CBCM]}]}]}],r:0},{cN:"function",b:"function",e:/[\{;]/,eE:!0,k:t,c:["self",e.inherit(e.TM,{b:r}),o],i:/%/,r:0},{bK:"constructor",e:/\{/,eE:!0,c:["self",o]},{b:/module\./,k:{built_in:"module"},r:0},{bK:"module",e:/\{/,eE:!0},{bK:"interface",e:/\{/,eE:!0,k:"interface extends"},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},n,a]}});hljs.registerLanguage("powershell",function(e){var t={b:"`[\\s\\S]",r:0},o={cN:"variable",v:[{b:/\$[\w\d][\w\d_:]*/}]},r={cN:"string",v:[{b:/"/,e:/"/},{b:/@"/,e:/^"@/}],c:[t,o,{cN:"variable",b:/\$[A-z]/,e:/[^A-z]/}]},i=e.inherit(e.C(null,null),{v:[{b:/#/,e:/$/},{b:/<#/,e:/#>/}],c:[{cN:"doctag",v:[{b:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{b:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]});return {aliases:["ps"],l:/-?[A-z\.\-]+/,cI:!0,k:{keyword:"if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catchValidateNoCircleInNodeResources ValidateNodeExclusiveResources ValidateNodeManager ValidateNodeResources ValidateNodeResourceSource ValidateNoNameNodeResources ThrowError IsHiddenResourceIsPatternMatched ",built_in:"Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct Add-CIDatastore Add-KeyManagementServer Add-NodeKeys Add-NsxDynamicCriteria Add-NsxDynamicMemberSet Add-NsxEdgeInterfaceAddress Add-NsxFirewallExclusionListMember Add-NsxFirewallRuleMember Add-NsxIpSetMember Add-NsxLicense Add-NsxLoadBalancerPoolMember Add-NsxLoadBalancerVip Add-NsxSecondaryManager Add-NsxSecurityGroupMember Add-NsxSecurityPolicyRule Add-NsxSecurityPolicyRuleGroup Add-NsxSecurityPolicyRuleService Add-NsxServiceGroupMember Add-NsxTransportZoneMember Add-PassthroughDevice Add-VDSwitchPhysicalNetworkAdapter Add-VDSwitchVMHost Add-VMHost Add-VMHostNtpServer Add-VirtualSwitchPhysicalNetworkAdapter Add-XmlElement Add-vRACustomForm Add-vRAPrincipalToTenantRole Add-vRAReservationNetwork Add-vRAReservationStorage Clear-NsxEdgeInterface Clear-NsxManagerTimeSettings Compress-Archive Connect-CIServer Connect-CisServer Connect-HCXServer Connect-NIServer Connect-NsxLogicalSwitch Connect-NsxServer Connect-NsxtServer Connect-SrmServer Connect-VIServer Connect-Vmc Connect-vRAServer Connect-vRNIServer ConvertFrom-Markdown ConvertTo-MOFInstance Copy-DatastoreItem Copy-HardDisk Copy-NsxEdge Copy-VDisk Copy-VMGuestFile Debug-Runspace Disable-NsxEdgeSsh Disable-RunspaceDebug Disable-vRNIDataSource Disconnect-CIServer Disconnect-CisServer Disconnect-HCXServer Disconnect-NsxLogicalSwitch Disconnect-NsxServer Disconnect-NsxtServer Disconnect-SrmServer Disconnect-VIServer Disconnect-Vmc Disconnect-vRAServer Disconnect-vRNIServer Dismount-Tools Enable-NsxEdgeSsh Enable-RunspaceDebug Enable-vRNIDataSource Expand-Archive Export-NsxObject Export-SpbmStoragePolicy Export-VApp Export-VDPortGroup Export-VDSwitch Export-VMHostProfile Export-vRAIcon Export-vRAPackage Find-Command Find-DscResource Find-Module Find-NsxWhereVMUsed Find-Package Find-PackageProvider Find-RoleCapability Find-Script Format-Hex Format-VMHostDiskPartition Format-XML Generate-VersionInfo Get-AdvancedSetting Get-AlarmAction Get-AlarmActionTrigger Get-AlarmDefinition Get-Annotation Get-CDDrive Get-CIAccessControlRule Get-CIDatastore Get-CINetworkAdapter Get-CIRole Get-CIUser Get-CIVApp Get-CIVAppNetwork Get-CIVAppStartRule Get-CIVAppTemplate Get-CIVM Get-CIVMTemplate Get-CIView Get-Catalog Get-CisCommand Get-CisService Get-CloudCommand Get-Cluster Get-CompatibleVersionAddtionaPropertiesStr Get-ComplexResourceQualifier Get-ConfigurationErrorCount Get-ContentLibraryItem Get-CustomAttribute Get-DSCResourceModules Get-Datacenter Get-Datastore Get-DatastoreCluster Get-DrsClusterGroup Get-DrsRecommendation Get-DrsRule Get-DrsVMHostRule Get-DscResource Get-EdgeGateway Get-EncryptedPassword Get-ErrorReport Get-EsxCli Get-EsxTop Get-ExternalNetwork Get-FileHash Get-FloppyDrive Get-Folder Get-HAPrimaryVMHost Get-HCXAppliance Get-HCXApplianceCompute Get-HCXApplianceDVS Get-HCXApplianceDatastore Get-HCXApplianceNetwork Get-HCXContainer Get-HCXDatastore Get-HCXGateway Get-HCXInterconnectStatus Get-HCXJob Get-HCXMigration Get-HCXNetwork Get-HCXNetworkExtension Get-HCXReplication Get-HCXReplicationSnapshot Get-HCXService Get-HCXSite Get-HCXSitePairing Get-HCXVM Get-HardDisk Get-IScsiHbaTarget Get-InnerMostErrorRecord Get-InstallPath Get-InstalledModule Get-InstalledScript Get-Inventory Get-ItemPropertyValue Get-KeyManagementServer Get-KmipClientCertificate Get-KmsCluster Get-Log Get-LogType Get-MarkdownOption Get-Media Get-MofInstanceName Get-MofInstanceText Get-NetworkAdapter Get-NetworkPool Get-NfsUser Get-NicTeamingPolicy Get-NsxApplicableMember Get-NsxApplicableSecurityAction Get-NsxBackingDVSwitch Get-NsxBackingPortGroup Get-NsxCliDfwAddrSet Get-NsxCliDfwFilter Get-NsxCliDfwRule Get-NsxClusterStatus Get-NsxController Get-NsxDynamicCriteria Get-NsxDynamicMemberSet Get-NsxEdge Get-NsxEdgeBgp Get-NsxEdgeBgpNeighbour Get-NsxEdgeCertificate Get-NsxEdgeCsr Get-NsxEdgeFirewall Get-NsxEdgeFirewallRule Get-NsxEdgeInterface Get-NsxEdgeInterfaceAddress Get-NsxEdgeNat Get-NsxEdgeNatRule Get-NsxEdgeOspf Get-NsxEdgeOspfArea Get-NsxEdgeOspfInterface Get-NsxEdgePrefix Get-NsxEdgeRedistributionRule Get-NsxEdgeRouting Get-NsxEdgeStaticRoute Get-NsxEdgeSubInterface Get-NsxFirewallExclusionListMember Get-NsxFirewallGlobalConfiguration Get-NsxFirewallPublishStatus Get-NsxFirewallRule Get-NsxFirewallRuleMember Get-NsxFirewallSavedConfiguration Get-NsxFirewallSection Get-NsxFirewallThreshold Get-NsxIpPool Get-NsxIpSet Get-NsxLicense Get-NsxLoadBalancer Get-NsxLoadBalancerApplicationProfile Get-NsxLoadBalancerApplicationRule Get-NsxLoadBalancerMonitor Get-NsxLoadBalancerPool Get-NsxLoadBalancerPoolMember Get-NsxLoadBalancerStats Get-NsxLoadBalancerVip Get-NsxLogicalRouter Get-NsxLogicalRouterBgp Get-NsxLogicalRouterBgpNeighbour Get-NsxLogicalRouterBridge Get-NsxLogicalRouterBridging Get-NsxLogicalRouterInterface Get-NsxLogicalRouterOspf Get-NsxLogicalRouterOspfArea Get-NsxLogicalRouterOspfInterface Get-NsxLogicalRouterPrefix Get-NsxLogicalRouterRedistributionRule Get-NsxLogicalRouterRouting Get-NsxLogicalRouterStaticRoute Get-NsxLogicalSwitch Get-NsxMacSet Get-NsxManagerBackup Get-NsxManagerCertificate Get-NsxManagerComponentSummary Get-NsxManagerNetwork Get-NsxManagerRole Get-NsxManagerSsoConfig Get-NsxManagerSyncStatus Get-NsxManagerSyslogServer Get-NsxManagerSystemSummary Get-NsxManagerTimeSettings Get-NsxManagerVcenterConfig Get-NsxSecondaryManager Get-NsxSecurityGroup Get-NsxSecurityGroupEffectiveIpAddress Get-NsxSecurityGroupEffectiveMacAddress Get-NsxSecurityGroupEffectiveMember Get-NsxSecurityGroupEffectiveVirtualMachine Get-NsxSecurityGroupEffectiveVnic Get-NsxSecurityGroupMemberTypes Get-NsxSecurityPolicy Get-NsxSecurityPolicyHighestUsedPrecedence Get-NsxSecurityPolicyRule Get-NsxSecurityTag Get-NsxSecurityTagAssignment Get-NsxSegmentIdRange Get-NsxService Get-NsxServiceDefinition Get-NsxServiceGroup Get-NsxServiceGroupMember Get-NsxServiceProfile Get-NsxSpoofguardNic Get-NsxSpoofguardPolicy Get-NsxSslVpn Get-NsxSslVpnAuthServer Get-NsxSslVpnClientInstallationPackage Get-NsxSslVpnIpPool Get-NsxSslVpnPrivateNetwork Get-NsxSslVpnUser Get-NsxTransportZone Get-NsxUserRole Get-NsxVdsContext Get-NsxtPolicyService Get-NsxtService Get-OSCustomizationNicMapping Get-OSCustomizationSpec Get-Org Get-OrgNetwork Get-OrgVdc Get-OrgVdcNetwork Get-OvfConfiguration Get-PSCurrentConfigurationNode Get-PSDefaultConfigurationDocument Get-PSMetaConfigDocumentInstVersionInfo Get-PSMetaConfigurationProcessed Get-PSReadLineKeyHandler Get-PSReadLineOption Get-PSRepository Get-PSTopConfigurationName Get-PSVersion Get-Package Get-PackageProvider Get-PackageSource Get-PassthroughDevice Get-PositionInfo Get-PowerCLICommunity Get-PowerCLIConfiguration Get-PowerCLIHelp Get-PowerCLIVersion Get-PowerNsxVersion Get-ProviderVdc Get-PublicKeyFromFile Get-PublicKeyFromStore Get-ResourcePool Get-Runspace Get-RunspaceDebug Get-ScsiController Get-ScsiLun Get-ScsiLunPath Get-SecurityInfo Get-SecurityPolicy Get-Snapshot Get-SpbmCapability Get-SpbmCompatibleStorage Get-SpbmEntityConfiguration Get-SpbmFaultDomain Get-SpbmPointInTimeReplica Get-SpbmReplicationGroup Get-SpbmReplicationPair Get-SpbmStoragePolicy Get-Stat Get-StatInterval Get-StatType Get-Tag Get-TagAssignment Get-TagCategory Get-Task Get-Template Get-TimeZone Get-Uptime Get-UsbDevice Get-VAIOFilter Get-VApp Get-VDBlockedPolicy Get-VDPort Get-VDPortgroup Get-VDPortgroupOverridePolicy Get-VDSecurityPolicy Get-VDSwitch Get-VDSwitchPrivateVlan Get-VDTrafficShapingPolicy Get-VDUplinkLacpPolicy Get-VDUplinkTeamingPolicy Get-VDisk Get-VIAccount Get-VICommand Get-VICredentialStoreItem Get-VIEvent Get-VIObjectByVIView Get-VIPermission Get-VIPrivilege Get-VIProperty Get-VIRole Get-VM Get-VMGuest Get-VMHost Get-VMHostAccount Get-VMHostAdvancedConfiguration Get-VMHostAuthentication Get-VMHostAvailableTimeZone Get-VMHostDiagnosticPartition Get-VMHostDisk Get-VMHostDiskPartition Get-VMHostFirewallDefaultPolicy Get-VMHostFirewallException Get-VMHostFirmware Get-VMHostHardware Get-VMHostHba Get-VMHostModule Get-VMHostNetwork Get-VMHostNetworkAdapter Get-VMHostNtpServer Get-VMHostPatch Get-VMHostPciDevice Get-VMHostProfile Get-VMHostProfileImageCacheConfiguration Get-VMHostProfileRequiredInput Get-VMHostProfileStorageDeviceConfiguration Get-VMHostProfileUserConfiguration Get-VMHostProfileVmPortGroupConfiguration Get-VMHostRoute Get-VMHostService Get-VMHostSnmp Get-VMHostStartPolicy Get-VMHostStorage Get-VMHostSysLogServer Get-VMQuestion Get-VMResourceConfiguration Get-VMStartPolicy Get-VTpm Get-VTpmCSR Get-VTpmCertificate Get-VasaProvider Get-VasaStorageArray Get-View Get-VirtualPortGroup Get-VirtualSwitch Get-VmcSddcNetworkService Get-VmcService Get-VsanClusterConfiguration Get-VsanComponent Get-VsanDisk Get-VsanDiskGroup Get-VsanEvacuationPlan Get-VsanFaultDomain Get-VsanIscsiInitiatorGroup Get-VsanIscsiInitiatorGroupTargetAssociation Get-VsanIscsiLun Get-VsanIscsiTarget Get-VsanObject Get-VsanResyncingComponent Get-VsanRuntimeInfo Get-VsanSpaceUsage Get-VsanStat Get-VsanView Get-vRAApplianceServiceStatus Get-vRAAuthorizationRole Get-vRABlueprint Get-vRABusinessGroup Get-vRACatalogItem Get-vRACatalogItemRequestTemplate Get-vRACatalogPrincipal Get-vRAComponentRegistryService Get-vRAComponentRegistryServiceEndpoint Get-vRAComponentRegistryServiceStatus Get-vRAContent Get-vRAContentData Get-vRAContentType Get-vRACustomForm Get-vRAEntitledCatalogItem Get-vRAEntitledService Get-vRAEntitlement Get-vRAExternalNetworkProfile Get-vRAGroupPrincipal Get-vRAIcon Get-vRANATNetworkProfile Get-vRANetworkProfileIPAddressList Get-vRANetworkProfileIPRangeSummary Get-vRAPackage Get-vRAPackageContent Get-vRAPropertyDefinition Get-vRAPropertyGroup Get-vRARequest Get-vRARequestDetail Get-vRAReservation Get-vRAReservationComputeResource Get-vRAReservationComputeResourceMemory Get-vRAReservationComputeResourceNetwork Get-vRAReservationComputeResourceResourcePool Get-vRAReservationComputeResourceStorage Get-vRAReservationPolicy Get-vRAReservationTemplate Get-vRAReservationType Get-vRAResource Get-vRAResourceAction Get-vRAResourceActionRequestTemplate Get-vRAResourceMetric Get-vRAResourceOperation Get-vRAResourceType Get-vRARoutedNetworkProfile Get-vRAService Get-vRAServiceBlueprint Get-vRASourceMachine Get-vRAStorageReservationPolicy Get-vRATenant Get-vRATenantDirectory Get-vRATenantDirectoryStatus Get-vRATenantRole Get-vRAUserPrincipal Get-vRAUserPrincipalGroupMembership Get-vRAVersion Get-vRNIAPIVersion Get-vRNIApplication Get-vRNIApplicationTier Get-vRNIDataSource Get-vRNIDataSourceSNMPConfig Get-vRNIDatastore Get-vRNIDistributedSwitch Get-vRNIDistributedSwitchPortGroup Get-vRNIEntity Get-vRNIEntityName Get-vRNIFirewallRule Get-vRNIFlow Get-vRNIHost Get-vRNIHostVMKNic Get-vRNIIPSet Get-vRNIL2Network Get-vRNINSXManager Get-vRNINodes Get-vRNIProblem Get-vRNIRecommendedRules Get-vRNIRecommendedRulesNsxBundle Get-vRNISecurityGroup Get-vRNISecurityTag Get-vRNIService Get-vRNIServiceGroup Get-vRNIVM Get-vRNIVMvNIC Get-vRNIvCenter Get-vRNIvCenterCluster Get-vRNIvCenterDatacenter Get-vRNIvCenterFolder Grant-NsxSpoofguardNicApproval Import-CIVApp Import-CIVAppTemplate Import-NsxObject Import-PackageProvider Import-PowerShellDataFile Import-SpbmStoragePolicy Import-VApp Import-VMHostProfile Import-vRAContentData Import-vRAIcon Import-vRAPackage Initialize-ConfigurationRuntimeState Install-Module Install-NsxCluster Install-Package Install-PackageProvider Install-Script Install-VMHostPatch Invoke-DrsRecommendation Invoke-NsxCli Invoke-NsxClusterResolveAll Invoke-NsxManagerSync Invoke-NsxRestMethod Invoke-NsxWebRequest Invoke-VMHostProfile Invoke-VMScript Invoke-XpathQuery Invoke-vRADataCollection Invoke-vRARestMethod Invoke-vRATenantDirectorySync Invoke-vRNIRestMethod Join-String Mount-Tools Move-Cluster Move-Datacenter Move-Datastore Move-Folder Move-HardDisk Move-Inventory Move-NsxSecurityPolicyRule Move-ResourcePool Move-Template Move-VApp Move-VDisk Move-VM Move-VMHost New-AdvancedSetting New-AlarmAction New-AlarmActionTrigger New-CDDrive New-CIAccessControlRule New-CIVApp New-CIVAppNetwork New-CIVAppTemplate New-CIVM New-Cluster New-CustomAttribute New-Datacenter New-Datastore New-DatastoreCluster New-DatastoreDrive New-DrsClusterGroup New-DrsRule New-DrsVMHostRule New-DscChecksum New-FloppyDrive New-Folder New-Guid New-HCXAppliance New-HCXMigration New-HCXNetworkExtension New-HCXNetworkMapping New-HCXReplication New-HCXSitePairing New-HCXStaticRoute New-HardDisk New-IScsiHbaTarget New-KmipClientCertificate New-NetworkAdapter New-NfsUser New-NsxAddressSpec New-NsxClusterVxlanConfig New-NsxController New-NsxDynamicCriteriaSpec New-NsxEdge New-NsxEdgeBgpNeighbour New-NsxEdgeCsr New-NsxEdgeFirewallRule New-NsxEdgeInterfaceSpec New-NsxEdgeNatRule New-NsxEdgeOspfArea New-NsxEdgeOspfInterface New-NsxEdgePrefix New-NsxEdgeRedistributionRule New-NsxEdgeSelfSignedCertificate New-NsxEdgeStaticRoute New-NsxEdgeSubInterface New-NsxEdgeSubInterfaceSpec New-NsxFirewallRule New-NsxFirewallSavedConfiguration New-NsxFirewallSection New-NsxIpPool New-NsxIpSet New-NsxLoadBalancerApplicationProfile New-NsxLoadBalancerApplicationRule New-NsxLoadBalancerMemberSpec New-NsxLoadBalancerMonitor New-NsxLoadBalancerPool New-NsxLogicalRouter New-NsxLogicalRouterBgpNeighbour New-NsxLogicalRouterBridge New-NsxLogicalRouterInterface New-NsxLogicalRouterInterfaceSpec New-NsxLogicalRouterOspfArea New-NsxLogicalRouterOspfInterface New-NsxLogicalRouterPrefix New-NsxLogicalRouterRedistributionRule New-NsxLogicalRouterStaticRoute New-NsxLogicalSwitch New-NsxMacSet New-NsxManager New-NsxSecurityGroup New-NsxSecurityPolicy New-NsxSecurityPolicyAssignment New-NsxSecurityPolicyFirewallRuleSpec New-NsxSecurityPolicyGuestIntrospectionSpec New-NsxSecurityPolicyNetworkIntrospectionSpec New-NsxSecurityTag New-NsxSecurityTagAssignment New-NsxSegmentIdRange New-NsxService New-NsxServiceGroup New-NsxSpoofguardPolicy New-NsxSslVpnAuthServer New-NsxSslVpnClientInstallationPackage New-NsxSslVpnIpPool New-NsxSslVpnPrivateNetwork New-NsxSslVpnUser New-NsxTransportZone New-NsxVdsContext New-OSCustomizationNicMapping New-OSCustomizationSpec New-Org New-OrgNetwork New-OrgVdc New-OrgVdcNetwork New-ResourcePool New-ScriptFileInfo New-ScsiController New-Snapshot New-SpbmRule New-SpbmRuleSet New-SpbmStoragePolicy New-StatInterval New-Tag New-TagAssignment New-TagCategory New-Template New-TemporaryFile New-VAIOFilter New-VApp New-VDPortgroup New-VDSwitch New-VDSwitchPrivateVlan New-VDisk New-VICredentialStoreItem New-VIInventoryDrive New-VIPermission New-VIProperty New-VIRole New-VISamlSecurityContext New-VM New-VMHostAccount New-VMHostNetworkAdapter New-VMHostProfile New-VMHostProfileVmPortGroupConfiguration New-VMHostRoute New-VTpm New-VasaProvider New-VcsOAuthSecurityContext New-VirtualPortGroup New-VirtualSwitch New-VsanDisk New-VsanDiskGroup New-VsanFaultDomain New-VsanIscsiInitiatorGroup New-VsanIscsiInitiatorGroupTargetAssociation New-VsanIscsiLun New-VsanIscsiTarget New-vRABusinessGroup New-vRAEntitlement New-vRAExternalNetworkProfile New-vRAGroupPrincipal New-vRANATNetworkProfile New-vRANetworkProfileIPRangeDefinition New-vRAPackage New-vRAPropertyDefinition New-vRAPropertyGroup New-vRAReservation New-vRAReservationNetworkDefinition New-vRAReservationPolicy New-vRAReservationStorageDefinition New-vRARoutedNetworkProfile New-vRAService New-vRAStorageReservationPolicy New-vRATenant New-vRATenantDirectory New-vRAUserPrincipal New-vRNIApplication New-vRNIApplicationTier New-vRNIDataSource Open-VMConsoleWindow Publish-Module Publish-NsxSpoofguardPolicy Publish-Script Register-PSRepository Register-PackageSource Remove-AdvancedSetting Remove-AlarmAction Remove-AlarmActionTrigger Remove-Alias Remove-CDDrive Remove-CIAccessControlRule Remove-CIVApp Remove-CIVAppNetwork Remove-CIVAppTemplate Remove-Cluster Remove-CustomAttribute Remove-Datacenter Remove-Datastore Remove-DatastoreCluster Remove-DrsClusterGroup Remove-DrsRule Remove-DrsVMHostRule Remove-FloppyDrive Remove-Folder Remove-HCXAppliance Remove-HCXNetworkExtension Remove-HCXReplication Remove-HCXSitePairing Remove-HardDisk Remove-IScsiHbaTarget Remove-Inventory Remove-KeyManagementServer Remove-NetworkAdapter Remove-NfsUser Remove-NsxCluster Remove-NsxClusterVxlanConfig Remove-NsxController Remove-NsxDynamicCriteria Remove-NsxDynamicMemberSet Remove-NsxEdge Remove-NsxEdgeBgpNeighbour Remove-NsxEdgeCertificate Remove-NsxEdgeCsr Remove-NsxEdgeFirewallRule Remove-NsxEdgeInterfaceAddress Remove-NsxEdgeNatRule Remove-NsxEdgeOspfArea Remove-NsxEdgeOspfInterface Remove-NsxEdgePrefix Remove-NsxEdgeRedistributionRule Remove-NsxEdgeStaticRoute Remove-NsxEdgeSubInterface Remove-NsxFirewallExclusionListMember Remove-NsxFirewallRule Remove-NsxFirewallRuleMember Remove-NsxFirewallSavedConfiguration Remove-NsxFirewallSection Remove-NsxIpPool Remove-NsxIpSet Remove-NsxIpSetMember Remove-NsxLoadBalancerApplicationProfile Remove-NsxLoadBalancerMonitor Remove-NsxLoadBalancerPool Remove-NsxLoadBalancerPoolMember Remove-NsxLoadBalancerVip Remove-NsxLogicalRouter Remove-NsxLogicalRouterBgpNeighbour Remove-NsxLogicalRouterBridge Remove-NsxLogicalRouterInterface Remove-NsxLogicalRouterOspfArea Remove-NsxLogicalRouterOspfInterface Remove-NsxLogicalRouterPrefix Remove-NsxLogicalRouterRedistributionRule Remove-NsxLogicalRouterStaticRoute Remove-NsxLogicalSwitch Remove-NsxMacSet Remove-NsxSecondaryManager Remove-NsxSecurityGroup Remove-NsxSecurityGroupMember Remove-NsxSecurityPolicy Remove-NsxSecurityPolicyAssignment Remove-NsxSecurityPolicyRule Remove-NsxSecurityPolicyRuleGroup Remove-NsxSecurityPolicyRuleService Remove-NsxSecurityTag Remove-NsxSecurityTagAssignment Remove-NsxSegmentIdRange Remove-NsxService Remove-NsxServiceGroup Remove-NsxSpoofguardPolicy Remove-NsxSslVpnClientInstallationPackage Remove-NsxSslVpnIpPool Remove-NsxSslVpnPrivateNetwork Remove-NsxSslVpnUser Remove-NsxTransportZone Remove-NsxTransportZoneMember Remove-NsxVdsContext Remove-OSCustomizationNicMapping Remove-OSCustomizationSpec Remove-Org Remove-OrgNetwork Remove-OrgVdc Remove-OrgVdcNetwork Remove-PSReadLineKeyHandler Remove-PassthroughDevice Remove-ResourcePool Remove-Snapshot Remove-SpbmStoragePolicy Remove-StatInterval Remove-Tag Remove-TagAssignment Remove-TagCategory Remove-Template Remove-UsbDevice Remove-VAIOFilter Remove-VApp Remove-VDPortGroup Remove-VDSwitch Remove-VDSwitchPhysicalNetworkAdapter Remove-VDSwitchPrivateVlan Remove-VDSwitchVMHost Remove-VDisk Remove-VICredentialStoreItem Remove-VIPermission Remove-VIProperty Remove-VIRole Remove-VM Remove-VMHost Remove-VMHostAccount Remove-VMHostNetworkAdapter Remove-VMHostNtpServer Remove-VMHostProfile Remove-VMHostProfileVmPortGroupConfiguration Remove-VMHostRoute Remove-VTpm Remove-VasaProvider Remove-VirtualPortGroup Remove-VirtualSwitch Remove-VirtualSwitchPhysicalNetworkAdapter Remove-VsanDisk Remove-VsanDiskGroup Remove-VsanFaultDomain Remove-VsanIscsiInitiatorGroup Remove-VsanIscsiInitiatorGroupTargetAssociation Remove-VsanIscsiLun Remove-VsanIscsiTarget Remove-vRABusinessGroup Remove-vRACustomForm Remove-vRAExternalNetworkProfile Remove-vRAGroupPrincipal Remove-vRAIcon Remove-vRANATNetworkProfile Remove-vRAPackage Remove-vRAPrincipalFromTenantRole Remove-vRAPropertyDefinition Remove-vRAPropertyGroup Remove-vRAReservation Remove-vRAReservationNetwork Remove-vRAReservationPolicy Remove-vRAReservationStorage Remove-vRARoutedNetworkProfile Remove-vRAService Remove-vRAStorageReservationPolicy Remove-vRATenant Remove-vRATenantDirectory Remove-vRAUserPrincipal Remove-vRNIApplication Remove-vRNIApplicationTier Remove-vRNIDataSource Repair-NsxEdge Repair-VsanObject Request-vRACatalogItem Request-vRAResourceAction Restart-CIVApp Restart-CIVAppGuest Restart-CIVM Restart-CIVMGuest Restart-VM Restart-VMGuest Restart-VMHost Restart-VMHostService Resume-HCXReplication Revoke-NsxSpoofguardNicApproval Save-Module Save-Package Save-Script Search-Cloud Set-AdvancedSetting Set-AlarmDefinition Set-Annotation Set-CDDrive Set-CIAccessControlRule Set-CINetworkAdapter Set-CIVApp Set-CIVAppNetwork Set-CIVAppStartRule Set-CIVAppTemplate Set-Cluster Set-CustomAttribute Set-Datacenter Set-Datastore Set-DatastoreCluster Set-DrsClusterGroup Set-DrsRule Set-DrsVMHostRule Set-FloppyDrive Set-Folder Set-HCXAppliance Set-HCXMigration Set-HCXReplication Set-HardDisk Set-IScsiHbaTarget Set-KeyManagementServer Set-KmsCluster Set-MarkdownOption Set-NetworkAdapter Set-NfsUser Set-NicTeamingPolicy Set-NodeExclusiveResources Set-NodeManager Set-NodeResourceSource Set-NodeResources Set-NsxEdge Set-NsxEdgeBgp Set-NsxEdgeFirewall Set-NsxEdgeInterface Set-NsxEdgeNat Set-NsxEdgeOspf Set-NsxEdgeRouting Set-NsxFirewallGlobalConfiguration Set-NsxFirewallRule Set-NsxFirewallSavedConfiguration Set-NsxFirewallThreshold Set-NsxLoadBalancer Set-NsxLoadBalancerPoolMember Set-NsxLogicalRouter Set-NsxLogicalRouterBgp Set-NsxLogicalRouterBridging Set-NsxLogicalRouterInterface Set-NsxLogicalRouterOspf Set-NsxLogicalRouterRouting Set-NsxManager Set-NsxManagerRole Set-NsxManagerTimeSettings Set-NsxSecurityPolicy Set-NsxSecurityPolicyFirewallRule Set-NsxSslVpn Set-OSCustomizationNicMapping Set-OSCustomizationSpec Set-Org Set-OrgNetwork Set-OrgVdc Set-OrgVdcNetwork Set-PSCurrentConfigurationNode Set-PSDefaultConfigurationDocument Set-PSMetaConfigDocInsProcessedBeforeMeta Set-PSMetaConfigVersionInfoV2 Set-PSReadLineKeyHandler Set-PSReadLineOption Set-PSRepository Set-PSTopConfigurationName Set-PackageSource Set-PowerCLIConfiguration Set-ResourcePool Set-ScsiController Set-ScsiLun Set-ScsiLunPath Set-SecurityPolicy Set-Snapshot Set-SpbmEntityConfiguration Set-SpbmStoragePolicy Set-StatInterval Set-Tag Set-TagCategory Set-Template Set-VAIOFilter Set-VApp Set-VDBlockedPolicy Set-VDPort Set-VDPortgroup Set-VDPortgroupOverridePolicy Set-VDSecurityPolicy Set-VDSwitch Set-VDTrafficShapingPolicy Set-VDUplinkLacpPolicy Set-VDUplinkTeamingPolicy Set-VDVlanConfiguration Set-VDisk Set-VIPermission Set-VIRole Set-VM Set-VMHost Set-VMHostAccount Set-VMHostAdvancedConfiguration Set-VMHostAuthentication Set-VMHostDiagnosticPartition Set-VMHostFirewallDefaultPolicy Set-VMHostFirewallException Set-VMHostFirmware Set-VMHostHba Set-VMHostModule Set-VMHostNetwork Set-VMHostNetworkAdapter Set-VMHostProfile Set-VMHostProfileImageCacheConfiguration Set-VMHostProfileStorageDeviceConfiguration Set-VMHostProfileUserConfiguration Set-VMHostProfileVmPortGroupConfiguration Set-VMHostRoute Set-VMHostService Set-VMHostSnmp Set-VMHostStartPolicy Set-VMHostStorage Set-VMHostSysLogServer Set-VMQuestion Set-VMResourceConfiguration Set-VMStartPolicy Set-VTpm Set-VirtualPortGroup Set-VirtualSwitch Set-VsanClusterConfiguration Set-VsanFaultDomain Set-VsanIscsiInitiatorGroup Set-VsanIscsiLun Set-VsanIscsiTarget Set-vRABusinessGroup Set-vRACatalogItem Set-vRACustomForm Set-vRAEntitlement Set-vRAExternalNetworkProfile Set-vRANATNetworkProfile Set-vRAReservation Set-vRAReservationNetwork Set-vRAReservationPolicy Set-vRAReservationStorage Set-vRARoutedNetworkProfile Set-vRAService Set-vRAStorageReservationPolicy Set-vRATenant Set-vRATenantDirectory Set-vRAUserPrincipal Set-vRNIDataSourceSNMPConfig Show-Markdown Start-CIVApp Start-CIVM Start-HCXMigration Start-HCXReplication Start-SpbmReplicationFailover Start-SpbmReplicationPrepareFailover Start-SpbmReplicationPromote Start-SpbmReplicationReverse Start-SpbmReplicationTestFailover Start-ThreadJob Start-VApp Start-VM Start-VMHost Start-VMHostService Start-VsanClusterDiskUpdate Start-VsanClusterRebalance Start-VsanEncryptionConfiguration Stop-CIVApp Stop-CIVAppGuest Stop-CIVM Stop-CIVMGuest Stop-SpbmReplicationTestFailover Stop-Task Stop-VApp Stop-VM Stop-VMGuest Stop-VMHost Stop-VMHostService Stop-VsanClusterRebalance Suspend-CIVApp Suspend-CIVM Suspend-HCXReplication Suspend-VM Suspend-VMGuest Suspend-VMHost Sync-SpbmReplicationGroup Test-ConflictingResources Test-HCXMigration Test-HCXReplication Test-Json Test-ModuleReloadRequired Test-MofInstanceText Test-NodeManager Test-NodeResourceSource Test-NodeResources Test-ScriptFileInfo Test-VMHostProfileCompliance Test-VMHostSnmp Test-VsanClusterHealth Test-VsanNetworkPerformance Test-VsanStoragePerformance Test-VsanVMCreation Test-vRAPackage Uninstall-Module Uninstall-Package Uninstall-Script Unlock-VM Unregister-PSRepository Unregister-PackageSource Update-ConfigurationDocumentRef Update-ConfigurationErrorCount Update-DependsOn Update-LocalConfigManager Update-Module Update-ModuleManifest Update-ModuleVersion Update-PowerNsx Update-Script Update-ScriptFileInfo Update-Tools Update-VsanHclDatabase ValidateUpdate-ConfigurationData Wait-Debugger Wait-NsxControllerJob Wait-NsxGenericJob Wait-NsxJob Wait-Task Wait-Tools Write-Information Write-Log Write-MetaConfigFile Write-NodeMOFFile",nomarkup:"-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace"},c:[t,e.NM,r,{cN:"string",v:[{b:/'/,e:/'/},{b:/@'/,e:/^'@/}]},{cN:"literal",b:/\$(null|true|false)\b/},o,i]}});hljs.registerLanguage("css",function(e){var c={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return {cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,c]}]}});

/*

 JS Signals <http://millermedeiros.github.com/js-signals/>
 Released under the MIT license
 Author: Miller Medeiros
 Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
*/
(function(i){function h(a,b,c,d,e){this._listener=b;this._isOnce=c;this.context=d;this._signal=a;this._priority=e||0;}function g(a,b){if(typeof a!=="function")throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",b));}function e(){this._bindings=[];this._prevParams=null;var a=this;this.dispatch=function(){e.prototype.dispatch.apply(a,arguments);};}h.prototype={active:!0,params:null,execute:function(a){var b;this.active&&this._listener&&(a=this.params?this.params.concat(a):
a,b=this._listener.apply(this.context,a),this._isOnce&&this.detach());return b},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return !!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal;delete this._listener;delete this.context;},toString:function(){return "[SignalBinding isOnce:"+this._isOnce+
", isBound:"+this.isBound()+", active:"+this.active+"]"}};e.prototype={VERSION:"1.0.0",memorize:!1,_shouldPropagate:!0,active:!0,_registerListener:function(a,b,c,d){var e=this._indexOfListener(a,c);if(e!==-1){if(a=this._bindings[e],a.isOnce()!==b)throw Error("You cannot add"+(b?"":"Once")+"() then add"+(!b?"":"Once")+"() the same listener without removing the relationship first.");}else a=new h(this,a,b,c,d),this._addBinding(a);this.memorize&&this._prevParams&&a.execute(this._prevParams);return a},
_addBinding:function(a){var b=this._bindings.length;do--b;while(this._bindings[b]&&a._priority<=this._bindings[b]._priority);this._bindings.splice(b+1,0,a);},_indexOfListener:function(a,b){for(var c=this._bindings.length,d;c--;)if(d=this._bindings[c],d._listener===a&&d.context===b)return c;return -1},has:function(a,b){return this._indexOfListener(a,b)!==-1},add:function(a,b,c){g(a,"add");return this._registerListener(a,!1,b,c)},addOnce:function(a,b,c){g(a,"addOnce");return this._registerListener(a,
!0,b,c)},remove:function(a,b){g(a,"remove");var c=this._indexOfListener(a,b);c!==-1&&(this._bindings[c]._destroy(),this._bindings.splice(c,1));return a},removeAll:function(){for(var a=this._bindings.length;a--;)this._bindings[a]._destroy();this._bindings.length=0;},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1;},dispatch:function(a){if(this.active){var b=Array.prototype.slice.call(arguments),c=this._bindings.length,d;if(this.memorize)this._prevParams=
b;if(c){d=this._bindings.slice();this._shouldPropagate=!0;do c--;while(d[c]&&this._shouldPropagate&&d[c].execute(b)!==!1)}}},forget:function(){this._prevParams=null;},dispose:function(){this.removeAll();delete this._bindings;delete this._prevParams;},toString:function(){return "[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};var f=e;f.Signal=e;typeof define==="function"&&define.amd?define(function(){return f}):typeof module!=="undefined"&&module.exports?module.exports=f:i.signals=
f;})(this);

/*!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.2.0 (2013/11/11 03:18 PM)
 * Released under the MIT License
 */
(function(){var a=function(b){var c=(function(k){var p=25,r=k.document,n=k.history,x=b.Signal,f,v,m,F,d,D,t=/#(.*)$/,j=/(\?.*)|(\#.*)/,g=/^\#/,B=("onhashchange" in k)&&r.documentMode!==7,s=(location.protocol==="file:");function o(G){return String(G||"").replace(/\W/g,"\\$&")}function u(H){if(!H){return ""}var G=new RegExp("^"+o(f.prependHash)+"|"+o(f.appendHash)+"$","g");return H.replace(G,"")}function E(){var G=t.exec(f.getURL());var I=(G&&G[1])||"";try{return f.raw?I:decodeURIComponent(I)}catch(H){return I}}function l(G,H){if(v!==G){var I=v;v=G;f.changed.dispatch(u(G),u(I));}}{D=function(){var G=E();if(G!==v){l(G);}};}function C(I,G,H){if(I.addEventListener){I.addEventListener(G,H,false);}else{if(I.attachEvent){I.attachEvent("on"+G,H);}}}function y(I,G,H){if(I.removeEventListener){I.removeEventListener(G,H,false);}else{if(I.detachEvent){I.detachEvent("on"+G,H);}}}function q(H){H=Array.prototype.slice.call(arguments);var G=H.join(f.separator);G=G?f.prependHash+G.replace(g,"")+f.appendHash:G;return G}function w(G){G=encodeURI(G);return G}f={VERSION:"1.2.0",raw:false,appendHash:"",prependHash:"/",separator:"/",changed:new x(),stopped:new x(),initialized:new x(),init:function(){if(F){return}v=E();if(B){C(k,"hashchange",D);}else{m=setInterval(D,p);}F=true;f.initialized.dispatch(u(v));},stop:function(){if(!F){return}if(B){y(k,"hashchange",D);}else{clearInterval(m);m=null;}F=false;f.stopped.dispatch(u(v));},isActive:function(){return F},getURL:function(){return k.location.href},getBaseURL:function(){return f.getURL().replace(j,"")},setHash:function(G){G=q.apply(null,arguments);if(G!==v){l(G);if(G===v){if(!f.raw){G=w(G);}k.location.hash="#"+G;}}},replaceHash:function(G){G=q.apply(null,arguments);if(G!==v){l(G);if(G===v){if(!f.raw){G=w(G);}k.location.replace("#"+G);}}},getHash:function(){return u(v)},getHashAsArray:function(){return f.getHash().split(f.separator)},dispose:function(){f.stop();f.initialized.dispose();f.stopped.dispose();f.changed.dispose();d=f=k.hasher=null;},toString:function(){return '[hasher version="'+f.VERSION+'" hash="'+f.getHash()+'"]'}};f.initialized.memorize=true;return f}(window));return c};if(typeof define==="function"&&define.amd){define(["signals"],a);}else{if(typeof exports==="object"){module.exports=a(require("signals"));}else{window.hasher=a(window.signals);}}}());

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t();}(this,function(){var e=navigator.userAgent,t=navigator.platform,r=/gecko\/\d/i.test(e),n=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),l=n||i||o,s=l&&(n?document.documentMode||6:+(o||i)[1]),a=!o&&/WebKit\//.test(e),u=a&&/Qt\/\d+\.\d+/.test(e),c=!o&&/Chrome\//.test(e),h=/Opera\//.test(e),f=/Apple Computer/.test(navigator.vendor),d=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),p=/PhantomJS/.test(e),g=!o&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),v=/Android/.test(e),m=g||v||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),y=g||/Mac/.test(t),b=/\bCrOS\b/.test(e),w=/win/i.test(t),x=h&&e.match(/Version\/(\d*\.\d*)/);x&&(x=Number(x[1])),x&&x>=15&&(h=!1,a=!0);var C=y&&(u||h&&(null==x||x<12.11)),S=r||l&&s>=9;function L(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var k,M=function(e,t){var r=e.className,n=L(t).exec(r);if(n){var i=r.slice(n.index+n[0].length);e.className=r.slice(0,n.index)+(i?n[1]+i:"");}};function T(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e}function N(e,t){return T(e).appendChild(t)}function O(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function A(e,t,r,n){var i=O(e,t,r,n);return i.setAttribute("role","presentation"),i}function W(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return !0}while(t=t.parentNode)}function D(){var e;try{e=document.activeElement;}catch(Ft){e=document.body||null;}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function H(e,t){var r=e.className;L(t).test(r)||(e.className+=(r?" ":"")+t);}function F(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!L(r[n]).test(t)&&(t+=" "+r[n]);return t}k=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode);}catch(Ft){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n};var E=function(e){e.select();};function P(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function I(e,t,r){for(var n in t||(t={}),e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n]);return t}function R(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o);if(s<0||s>=t)return l+(t-o);l+=s-o,l+=r-l%r,o=s+1;}}g?E=function(e){e.selectionStart=0,e.selectionEnd=e.value.length;}:l&&(E=function(e){try{e.select();}catch(t){}});var z=function(){this.id=null;};function B(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return -1}z.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e);};var G=30,U={toString:function(){return "CodeMirror.Pass"}},V={scroll:!1},K={origin:"*mouse"},j={origin:"+move"};function X(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length);var l=o-n;if(o==e.length||i+l>=t)return n+Math.min(l,t-i);if(i+=o-n,n=o+1,(i+=r-i%r)>=t)return n}}var Y=[""];function _(e){for(;Y.length<=e;)Y.push($(Y)+" ");return Y[e]}function $(e){return e[e.length-1]}function q(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r}function Z(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++;e.splice(n,0,t);}function Q(){}function J(e,t){var r;return Object.create?r=Object.create(e):(Q.prototype=e,r=new Q),t&&I(t,r),r}var ee=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function te(e){return /\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||ee.test(e))}function re(e,t){return t?!!(t.source.indexOf("\\w")>-1&&te(e))||t.test(e):te(e)}function ne(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return !1;return !0}var ie=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function oe(e){return e.charCodeAt(0)>=768&&ie.test(e)}function le(e,t,r){for(;(r<0?t>0:t<e.length)&&oe(e.charAt(t));)t+=r;return t}function se(e,t,r){for(;;){if(Math.abs(t-r)<=1)return e(t)?t:r;var n=Math.floor((t+r)/2);e(n)?r=n:t=n;}}function ae(e,t,n){var i=this;this.input=n,i.scrollbarFiller=O("div",null,"CodeMirror-scrollbar-filler"),i.scrollbarFiller.setAttribute("cm-not-content","true"),i.gutterFiller=O("div",null,"CodeMirror-gutter-filler"),i.gutterFiller.setAttribute("cm-not-content","true"),i.lineDiv=A("div",null,"CodeMirror-code"),i.selectionDiv=O("div",null,null,"position: relative; z-index: 1"),i.cursorDiv=O("div",null,"CodeMirror-cursors"),i.measure=O("div",null,"CodeMirror-measure"),i.lineMeasure=O("div",null,"CodeMirror-measure"),i.lineSpace=A("div",[i.measure,i.lineMeasure,i.selectionDiv,i.cursorDiv,i.lineDiv],null,"position: relative; outline: none");var o=A("div",[i.lineSpace],"CodeMirror-lines");i.mover=O("div",[o],null,"position: relative"),i.sizer=O("div",[i.mover],"CodeMirror-sizer"),i.sizerWidth=null,i.heightForcer=O("div",null,null,"position: absolute; height: "+G+"px; width: 1px;"),i.gutters=O("div",null,"CodeMirror-gutters"),i.lineGutter=null,i.scroller=O("div",[i.sizer,i.heightForcer,i.gutters],"CodeMirror-scroll"),i.scroller.setAttribute("tabIndex","-1"),i.wrapper=O("div",[i.scrollbarFiller,i.gutterFiller,i.scroller],"CodeMirror"),l&&s<8&&(i.gutters.style.zIndex=-1,i.scroller.style.paddingRight=0),a||r&&m||(i.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(i.wrapper):e(i.wrapper)),i.viewFrom=i.viewTo=t.first,i.reportedViewFrom=i.reportedViewTo=t.first,i.view=[],i.renderedView=null,i.externalMeasured=null,i.viewOffset=0,i.lastWrapHeight=i.lastWrapWidth=0,i.updateLineNumbers=null,i.nativeBarWidth=i.barHeight=i.barWidth=0,i.scrollbarsClipped=!1,i.lineNumWidth=i.lineNumInnerWidth=i.lineNumChars=null,i.alignWidgets=!1,i.cachedCharWidth=i.cachedTextHeight=i.cachedPaddingH=null,i.maxLine=null,i.maxLineLength=0,i.maxLineChanged=!1,i.wheelDX=i.wheelDY=i.wheelStartX=i.wheelStartY=null,i.shift=!1,i.selForContextMenu=null,i.activeTouch=null,n.init(i);}function ue(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(t<o){r=i;break}t-=o;}return r.lines[t]}function ce(e,t,r){var n=[],i=t.line;return e.iter(t.line,r.line+1,function(e){var o=e.text;i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i;}),n}function he(e,t,r){var n=[];return e.iter(t,r,function(e){n.push(e.text);}),n}function fe(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r;}function de(e){if(null==e.parent)return null;for(var t=e.parent,r=B(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first}function pe(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(t<o){e=i;continue e}t-=o,r+=i.chunkSize();}return r}while(!e.lines);for(var l=0;l<e.lines.length;++l){var s=e.lines[l].height;if(t<s)break;t-=s;}return r+l}function ge(e,t){return t>=e.first&&t<e.first+e.size}function ve(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function me(e,t,r){if(void 0===r&&(r=null),!(this instanceof me))return new me(e,t,r);this.line=e,this.ch=t,this.sticky=r;}function ye(e,t){return e.line-t.line||e.ch-t.ch}function be(e,t){return e.sticky==t.sticky&&0==ye(e,t)}function we(e){return me(e.line,e.ch)}function xe(e,t){return ye(e,t)<0?t:e}function Ce(e,t){return ye(e,t)<0?e:t}function Se(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function Le(e,t){if(t.line<e.first)return me(e.first,0);var r=e.first+e.size-1;return t.line>r?me(r,ue(e,r).text.length):ke(t,ue(e,t.line).text.length)}function ke(e,t){var r=e.ch;return null==r||r>t?me(e.line,t):r<0?me(e.line,0):e}function Me(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=Le(e,t[n]);return r}var Te=!1,Ne=!1;function Oe(){Te=!0;}function Ae(){Ne=!0;}function We(e,t,r){this.marker=e,this.from=t,this.to=r;}function De(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n}}function He(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n]);return r}function Fe(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e);}function Ee(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new We(l,o.from,s?null:o.to));}}return n}function Pe(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new We(l,s?null:o.from-t,null==o.to?null:o.to-t));}}return n}function Ie(e,t){if(t.full)return null;var r=ge(e,t.from.line)&&ue(e,t.from.line).markedSpans,n=ge(e,t.to.line)&&ue(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,l=0==ye(t.from,t.to),s=Ee(r,i,l),a=Pe(n,o,l),u=1==t.text.length,c=$(t.text).length+(u?i:0);if(s)for(var h=0;h<s.length;++h){var f=s[h];if(null==f.to){var d=De(a,f.marker);d?u&&(f.to=null==d.to?null:d.to+c):f.to=i;}}if(a)for(var p=0;p<a.length;++p){var g=a[p];if(null!=g.to&&(g.to+=c),null==g.from)De(s,g.marker)||(g.from=c,u&&(s||(s=[])).push(g));else g.from+=c,u&&(s||(s=[])).push(g);}s&&(s=Re(s)),a&&a!=s&&(a=Re(a));var v=[s];if(!u){var m,y=t.text.length-2;if(y>0&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(m||(m=[])).push(new We(s[b].marker,null,null));for(var w=0;w<y;++w)v.push(m);v.push(a);}return v}function Re(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1);}return e.length?e:null}function ze(e,t,r){var n=null;if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=B(n,r)||(n||(n=[])).push(r);}}),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a];if(!(ye(u.to,s.from)<0||ye(u.from,s.to)>0)){var c=[a,1],h=ye(u.from,s.from),f=ye(u.to,s.to);(h<0||!l.inclusiveLeft&&!h)&&c.push({from:u.from,to:s.from}),(f>0||!l.inclusiveRight&&!f)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3;}}return i}function Be(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null;}}function Ge(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t;}}function Ue(e){return e.inclusiveLeft?-1:0}function Ve(e){return e.inclusiveRight?1:0}function Ke(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=ye(n.from,i.from)||Ue(e)-Ue(t);if(o)return -o;var l=ye(n.to,i.to)||Ve(e)-Ve(t);return l||t.id-e.id}function je(e,t){var r,n=Ne&&e.markedSpans;if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Ke(r,i.marker)<0)&&(r=i.marker);return r}function Xe(e){return je(e,!0)}function Ye(e){return je(e,!1)}function _e(e,t,r,n,i){var o=ue(e,t),l=Ne&&o.markedSpans;if(l)for(var s=0;s<l.length;++s){var a=l[s];if(a.marker.collapsed){var u=a.marker.find(0),c=ye(u.from,r)||Ue(a.marker)-Ue(i),h=ye(u.to,n)||Ve(a.marker)-Ve(i);if(!(c>=0&&h<=0||c<=0&&h>=0)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?ye(u.to,r)>=0:ye(u.to,r)>0)||c>=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?ye(u.from,n)<=0:ye(u.from,n)<0)))return !0}}}function $e(e){for(var t;t=Xe(e);)e=t.find(-1,!0).line;return e}function qe(e){for(var t;t=Ye(e);)e=t.find(1,!0).line;return e}function Ze(e){for(var t,r;t=Ye(e);)e=t.find(1,!0).line,(r||(r=[])).push(e);return r}function Qe(e,t){var r=ue(e,t),n=$e(r);return r==n?t:de(n)}function Je(e,t){if(t>e.lastLine())return t;var r,n=ue(e,t);if(!et(e,n))return t;for(;r=Ye(n);)n=r.find(1,!0).line;return de(n)+1}function et(e,t){var r=Ne&&t.markedSpans;if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return !0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&tt(e,t,n))return !0}}function tt(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return tt(e,n.line,De(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return !0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&tt(e,t,i))return !0}function rt(e){for(var t=0,r=(e=$e(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height;}for(var o=r.parent;o;o=(r=o).parent)for(var l=0;l<o.children.length;++l){var s=o.children[l];if(s==r)break;t+=s.height;}return t}function nt(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=Xe(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch;}for(n=e;t=Ye(n);){var o=t.find(0,!0);r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch;}return r}function it(e){var t=e.display,r=e.doc;t.maxLine=ue(r,r.first),t.maxLineLength=nt(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=nt(e);r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e);});}function ot(e,t,r,n){if(!e)return n(t,r,"ltr");for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr"),i=!0);}i||n(t,r,"ltr");}var lt=null;function st(e,t,r){var n;lt=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==r?n=i:lt=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:lt=i);}return null!=n?n:lt}var at=function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",t="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function r(r){return r<=247?e.charAt(r):1424<=r&&r<=1524?"R":1536<=r&&r<=1785?t.charAt(r-1536):1774<=r&&r<=2220?"r":8192<=r&&r<=8203?"w":8204==r?"b":"L"}var n=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,i=/[stwN]/,o=/[LRr]/,l=/[Lb1n]/,s=/[1n]/;function a(e,t,r){this.level=e,this.from=t,this.to=r;}return function(e,t){var u="ltr"==t?"L":"R";if(0==e.length||"ltr"==t&&!n.test(e))return !1;for(var c=e.length,h=[],f=0;f<c;++f)h.push(r(e.charCodeAt(f)));for(var d=0,p=u;d<c;++d){var g=h[d];"m"==g?h[d]=p:p=g;}for(var v=0,m=u;v<c;++v){var y=h[v];"1"==y&&"r"==m?h[v]="n":o.test(y)&&(m=y,"r"==y&&(h[v]="R"));}for(var b=1,w=h[0];b<c-1;++b){var x=h[b];"+"==x&&"1"==w&&"1"==h[b+1]?h[b]="1":","!=x||w!=h[b+1]||"1"!=w&&"n"!=w||(h[b]=w),w=x;}for(var C=0;C<c;++C){var S=h[C];if(","==S)h[C]="N";else if("%"==S){var L=void 0;for(L=C+1;L<c&&"%"==h[L];++L);for(var k=C&&"!"==h[C-1]||L<c&&"1"==h[L]?"1":"N",M=C;M<L;++M)h[M]=k;C=L-1;}}for(var T=0,N=u;T<c;++T){var O=h[T];"L"==N&&"1"==O?h[T]="L":o.test(O)&&(N=O);}for(var A=0;A<c;++A)if(i.test(h[A])){var W=void 0;for(W=A+1;W<c&&i.test(h[W]);++W);for(var D="L"==(A?h[A-1]:u),H=D==("L"==(W<c?h[W]:u))?D?"L":"R":u,F=A;F<W;++F)h[F]=H;A=W-1;}for(var E,P=[],I=0;I<c;)if(l.test(h[I])){var R=I;for(++I;I<c&&l.test(h[I]);++I);P.push(new a(0,R,I));}else{var z=I,B=P.length;for(++I;I<c&&"L"!=h[I];++I);for(var G=z;G<I;)if(s.test(h[G])){z<G&&P.splice(B,0,new a(1,z,G));var U=G;for(++G;G<I&&s.test(h[G]);++G);P.splice(B,0,new a(2,U,G)),z=G;}else++G;z<I&&P.splice(B,0,new a(1,z,I));}return 1==P[0].level&&(E=e.match(/^\s+/))&&(P[0].from=E[0].length,P.unshift(new a(0,0,E[0].length))),1==$(P).level&&(E=e.match(/\s+$/))&&($(P).to-=E[0].length,P.push(new a(0,c-E[0].length,c))),"rtl"==t?P.reverse():P}}();function ut(e,t){var r=e.order;return null==r&&(r=e.order=at(e.text,t)),r}function ct(e,t,r){var n=le(e.text,t+r,r);return n<0||n>e.text.length?null:n}function ht(e,t,r){var n=ct(e,t.ch,r);return null==n?null:new me(t.line,n,r<0?"after":"before")}function ft(e,t,r,n,i){if(e){var o=ut(r,t.doc.direction);if(o){var l,s=i<0?$(o):o[0],a=i<0==(1==s.level)?"after":"before";if(s.level>0){var u=ln(t,r);l=i<0?r.text.length-1:0;var c=sn(t,u,l).top;l=se(function(e){return sn(t,u,e).top==c},i<0==(1==s.level)?s.from:s.to-1,l),"before"==a&&(l=ct(r,l,1));}else l=i<0?s.to:s.from;return new me(n,l,a)}}return new me(n,i<0?r.text.length:0,i<0?"before":"after")}function dt(e,t,r,n){var i=ut(t,e.doc.direction);if(!i)return ht(t,r,n);r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after");var o=st(i,r.ch,r.sticky),l=i[o];if("ltr"==e.doc.direction&&l.level%2==0&&(n>0?l.to>r.ch:l.from<r.ch))return ht(t,r,n);var s,a=function(e,r){return ct(t,e instanceof me?e.ch:e,r)},u=function(r){return e.options.lineWrapping?(s=s||ln(e,t),Tn(e,t,s,r)):{begin:0,end:t.text.length}},c=u("before"==r.sticky?a(r,-1):r.ch);if("rtl"==e.doc.direction||1==l.level){var h=1==l.level==n<0,f=a(r,h?1:-1);if(null!=f&&(h?f<=l.to&&f<=c.end:f>=l.from&&f>=c.begin)){var d=h?"before":"after";return new me(r.line,f,d)}}var p=function(e,t,n){for(var o=function(e,t){return t?new me(r.line,a(e,1),"before"):new me(r.line,e,"after")};e>=0&&e<i.length;e+=t){var l=i[e],s=t>0==(1!=l.level),u=s?n.begin:a(n.end,-1);if(l.from<=u&&u<l.to)return o(u,s);if(u=s?l.from:a(l.to,-1),n.begin<=u&&u<n.end)return o(u,s)}},g=p(o+n,n,c);if(g)return g;var v=n>0?c.end:a(c.begin,-1);return null==v||n>0&&v==t.text.length||!(g=p(n>0?0:i.length-1,n,u(v)))?null:g}var pt=[],gt=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on"+t,r);else{var n=e._handlers||(e._handlers={});n[t]=(n[t]||pt).concat(r);}};function vt(e,t){return e._handlers&&e._handlers[t]||pt}function mt(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on"+t,r);else{var n=e._handlers,i=n&&n[t];if(i){var o=B(i,r);o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)));}}}function yt(e,t){var r=vt(e,t);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n);}function bt(e,t,r){return "string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0;}}),yt(e,r||t.type,e,t),kt(t)||t.codemirrorIgnore}function wt(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==B(r,t[n])&&r.push(t[n]);}function xt(e,t){return vt(e,t).length>0}function Ct(e){e.prototype.on=function(e,t){gt(this,e,t);},e.prototype.off=function(e,t){mt(this,e,t);};}function St(e){e.preventDefault?e.preventDefault():e.returnValue=!1;}function Lt(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;}function kt(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Mt(e){St(e),Lt(e);}function Tt(e){return e.target||e.srcElement}function Nt(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),y&&e.ctrlKey&&1==t&&(t=3),t}var Ot,At,Wt=function(){if(l&&s<9)return !1;var e=O("div");return "draggable"in e||"dragDrop"in e}();function Dt(e){if(null==Ot){var t=O("span","​");N(e,O("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ot=t.offsetWidth<=1&&t.offsetHeight>2&&!(l&&s<8));}var r=Ot?O("span","​"):O("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return r.setAttribute("cm-text",""),r}function Ht(e){if(null!=At)return At;var t=N(e,document.createTextNode("AخA")),r=k(t,0,1).getBoundingClientRect(),n=k(t,1,2).getBoundingClientRect();return T(e),!(!r||r.left==r.right)&&(At=n.right-r.right<3)}var Ft,Et=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1);}return r}:function(e){return e.split(/\r\n?|\n/)},Pt=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(Ft){return !1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange();}catch(Ft){}return !(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},It="oncopy"in(Ft=O("div"))||(Ft.setAttribute("oncopy","return;"),"function"==typeof Ft.oncopy),Rt=null;function zt(e){if(null!=Rt)return Rt;var t=N(e,O("span","x")),r=t.getBoundingClientRect(),n=k(t,0,1).getBoundingClientRect();return Rt=Math.abs(r.left-n.left)>1}var Bt={},Gt={};function Ut(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Bt[e]=t;}function Vt(e,t){Gt[e]=t;}function Kt(e){if("string"==typeof e&&Gt.hasOwnProperty(e))e=Gt[e];else if(e&&"string"==typeof e.name&&Gt.hasOwnProperty(e.name)){var t=Gt[e.name];"string"==typeof t&&(t={name:t}),(e=J(t,e)).name=t.name;}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Kt("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Kt("application/json")}return "string"==typeof e?{name:e}:e||{name:"null"}}function jt(e,t){t=Kt(t);var r=Bt[t.name];if(!r)return jt(e,"text/plain");var n=r(e,t);if(Xt.hasOwnProperty(t.name)){var i=Xt[t.name];for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o]);}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l];return n}var Xt={};function Yt(e,t){I(t,Xt.hasOwnProperty(e)?Xt[e]:Xt[e]={});}function _t(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i;}return r}function $t(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode;return r||{mode:e,state:t}}function qt(e,t,r){return !e.startState||e.startState(t,r)}var Zt=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r;};Zt.prototype.eol=function(){return this.pos>=this.string.length},Zt.prototype.sol=function(){return this.pos==this.lineStart},Zt.prototype.peek=function(){return this.string.charAt(this.pos)||undefined},Zt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Zt.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return ++this.pos,t},Zt.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Zt.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos;return this.pos>t},Zt.prototype.skipToEnd=function(){this.pos=this.string.length;},Zt.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0},Zt.prototype.backUp=function(e){this.pos-=e;},Zt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=R(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?R(this.string,this.lineStart,this.tabSize):0)},Zt.prototype.indentation=function(){return R(this.string,null,this.tabSize)-(this.lineStart?R(this.string,this.lineStart,this.tabSize):0)},Zt.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e};if(i(this.string.substr(this.pos,e.length))==i(e))return !1!==t&&(this.pos+=e.length),!0},Zt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Zt.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e;}},Zt.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)};var Qt=function(e,t){this.state=e,this.lookAhead=t;},Jt=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0;};function er(e,t,r,n){var i=[e.state.modeGen],o={};ur(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n);for(var l=r.state,s=function(n){var l=e.state.overlays[n],s=1,a=0;r.state=!0,ur(e,t.text,l.mode,r,function(e,t){for(var r=s;a<e;){var n=i[s];n>e&&i.splice(s,1,e,i[s+1],n),s+=2,a=Math.min(e,n);}if(t)if(l.opaque)i.splice(r,s-r,e,"overlay "+t),s=r+2;else for(;r<s;r+=2){var o=i[r+1];i[r+1]=(o?o+" ":"")+"overlay "+t;}},o);},a=0;a<e.state.overlays.length;++a)s(a);return r.state=l,{styles:i,classes:o.bgClass||o.textClass?o:null}}function tr(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=rr(e,de(t)),i=t.text.length>e.options.maxHighlightLength&&_t(e.doc.mode,n.state),o=er(e,t,n);i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier));}return t.styles}function rr(e,t,r){var n=e.doc,i=e.display;if(!n.mode.startState)return new Jt(n,!0,t);var o=cr(e,t,r),l=o>n.first&&ue(n,o-1).stateAfter,s=l?Jt.fromSaved(n,l,o):new Jt(n,qt(n.mode),o);return n.iter(o,t,function(r){nr(e,r.text,s);var n=s.line;r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?s.save():null,s.nextLine();}),r&&(n.modeFrontier=s.line),s}function nr(e,t,r,n){var i=e.doc.mode,o=new Zt(t,e.options.tabSize,r);for(o.start=o.pos=n||0,""==t&&ir(i,r.state);!o.eol();)or(i,o,r.state),o.start=o.pos;}function ir(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var r=$t(e,t);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function or(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=$t(e,r).mode);var o=e.token(t,r);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}Jt.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},Jt.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--;},Jt.fromSaved=function(e,t,r){return t instanceof Qt?new Jt(e,_t(e.mode,t.state),r,t.lookAhead):new Jt(e,_t(e.mode,t),r)},Jt.prototype.save=function(e){var t=!1!==e?_t(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Qt(t,this.maxLookAhead):t};var lr=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r;};function sr(e,t,r,n){var i,o,l=e.doc,s=l.mode,a=ue(l,(t=Le(l,t)).line),u=rr(e,t.line,r),c=new Zt(a.text,e.options.tabSize,u);for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=or(s,c,u.state),n&&o.push(new lr(c,i,_t(l.mode,u.state)));return n?o:new lr(c,i,u.state)}function ar(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?"bgClass":"textClass";null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2]);}return e}function ur(e,t,r,n,i,o,l){var s=r.flattenSpans;null==s&&(s=e.options.flattenSpans);var a,u=0,c=null,h=new Zt(t,e.options.tabSize,n),f=e.options.addModeClass&&[null];for(""==t&&ar(ir(r,n.state),o);!h.eol();){if(h.pos>e.options.maxHighlightLength?(s=!1,l&&nr(e,t,n,h.pos),h.pos=t.length,a=null):a=ar(or(r,h,n.state,f),o),f){var d=f[0].name;d&&(a="m-"+(a?d+" "+a:d));}if(!s||c!=a){for(;u<h.start;)i(u=Math.min(h.start,u+5e3),c);c=a;}h.start=h.pos;}for(;u<h.pos;){var p=Math.min(h.pos,u+5e3);i(p,c),u=p;}}function cr(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first;var a=ue(o,s-1),u=a.stateAfter;if(u&&(!r||s+(u instanceof Qt?u.lookAhead:0)<=o.modeFrontier))return s;var c=R(a.text,null,e.options.tabSize);(null==i||n>c)&&(i=s-1,n=c);}return i}function hr(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=ue(e,n).stateAfter;if(i&&(!(i instanceof Qt)||n+i.lookAhead<t)){r=n+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,r);}}var fr=function(e,t,r){this.text=e,Ge(this,t),this.height=r?r(this):1;};function dr(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Be(e),Ge(e,r);var i=n?n(e):1;i!=e.height&&fe(e,i);}function pr(e){e.parent=null,Be(e);}fr.prototype.lineNo=function(){return de(this)},Ct(fr);var gr={},vr={};function mr(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?vr:gr;return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function yr(e,t){var r=A("span",null,null,a?"padding-right: .1px":null),n={pre:A("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:(l||a)&&e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,s=void 0;n.pos=0,n.addToken=wr,Ht(e.display.measure)&&(s=ut(o,e.doc.direction))&&(n.addToken=Cr(n.addToken,s)),n.map=[],Lr(o,n,tr(e,o,t!=e.display.externalMeasured&&de(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=F(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=F(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Dt(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}));}if(a){var u=n.content.lastChild;(/\bcm-tab\b/.test(u.className)||u.querySelector&&u.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack");}return yt(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=F(n.pre.className,n.textClass||"")),n}function br(e){var t=O("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function wr(e,t,r,n,i,o,a){if(t){var u,c=e.splitSpaces?xr(t,e.trailingSpace):t,h=e.cm.state.specialChars,f=!1;if(h.test(t)){u=document.createDocumentFragment();for(var d=0;;){h.lastIndex=d;var p=h.exec(t),g=p?p.index-d:t.length-d;if(g){var v=document.createTextNode(c.slice(d,d+g));l&&s<9?u.appendChild(O("span",[v])):u.appendChild(v),e.map.push(e.pos,e.pos+g,v),e.col+=g,e.pos+=g;}if(!p)break;d+=g+1;var m=void 0;if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(m=u.appendChild(O("span",_(b),"cm-tab"))).setAttribute("role","presentation"),m.setAttribute("cm-text","\t"),e.col+=b;}else"\r"==p[0]||"\n"==p[0]?((m=u.appendChild(O("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),e.col+=1):((m=e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),l&&s<9?u.appendChild(O("span",[m])):u.appendChild(m),e.col+=1);e.map.push(e.pos,e.pos+1,m),e.pos++;}}else e.col+=t.length,u=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,u),l&&s<9&&(f=!0),e.pos+=t.length;if(e.trailingSpace=32==c.charCodeAt(t.length-1),r||n||i||f||a){var w=r||"";n&&(w+=n),i&&(w+=i);var x=O("span",[u],w,a);return o&&(x.title=o),e.content.appendChild(x)}e.content.appendChild(u);}}function xr(e,t){if(e.length>1&&!/  /.test(e))return e;for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o;}return n}function Cr(e,t){return function(r,n,i,o,l,s,a){i=i?i+" cm-force-border":"cm-force-border";for(var u=r.pos,c=u+n.length;;){for(var h=void 0,f=0;f<t.length&&!((h=t[f]).to>u&&h.from<=u);f++);if(h.to>=c)return e(r,n,i,o,l,s,a);e(r,n.slice(0,h.to-u),i,o,null,s,a),o=null,n=n.slice(h.to-u),u=h.to;}}}function Sr(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1;}function Lr(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var l,s,a,u,c,h,f,d=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=h=s="",f=null,m=Infinity;for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker;"bookmark"==C.type&&x.from==p&&C.widgetNode?y.push(C):x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&!h&&(h=C.title),C.collapsed&&(!f||Ke(f.marker,C)<0)&&(f=x)):x.from>p&&m>x.from&&(m=x.from);}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==m&&(u+=" "+b[S]);if(!f||f.from==p)for(var L=0;L<y.length;++L)Sr(t,0,y[L]);if(f&&(f.from||0)==p){if(Sr(t,(null==f.to?d+1:f.to)-p,f.marker,null==f.from),null==f.to)return;f.to==p&&(f=!1);}}if(p>=d)break;for(var k=Math.min(d,m);;){if(v){var M=p+v.length;if(!f){var T=M>k?v.slice(0,k-p):v;t.addToken(t,T,l?l+a:a,c,p+T.length==m?u:"",h,s);}if(M>=k){v=v.slice(k-p),p=k;break}p=M,c="";}v=i.slice(o,o=r[g++]),l=mr(r[g++],t.cm.options);}}else for(var N=1;N<r.length;N+=2)t.addToken(t,i.slice(o,o=r[N]),mr(r[N+1],t.cm.options));}function kr(e,t,r){this.line=t,this.rest=Ze(t),this.size=this.rest?de($(this.rest))-r+1:1,this.node=this.text=null,this.hidden=et(e,t);}function Mr(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new kr(e.doc,ue(e.doc,o),o);n=o+l.size,i.push(l);}return i}var Tr=null;function Nr(e){Tr?Tr.ops.push(e):e.ownsGroup=Tr={ops:[e],delayedCallbacks:[]};}function Or(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm);}}while(r<t.length)}function Ar(e,t){var r=e.ownsGroup;if(r)try{Or(r);}finally{Tr=null,t(r);}}var Wr=null;function Dr(e,t){var r=vt(e,t);if(r.length){var n,i=Array.prototype.slice.call(arguments,2);Tr?n=Tr.delayedCallbacks:Wr?n=Wr:(n=Wr=[],setTimeout(Hr,0));for(var o=function(e){n.push(function(){return r[e].apply(null,i)});},l=0;l<r.length;++l)o(l);}}function Hr(){var e=Wr;Wr=null;for(var t=0;t<e.length;++t)e[t]();}function Fr(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?Rr(e,t):"gutter"==o?Br(e,t,r,n):"class"==o?zr(e,t):"widget"==o&&Gr(e,t,n);}t.changes=null;}function Er(e){return e.node==e.text&&(e.node=O("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),l&&s<8&&(e.node.style.zIndex=2)),e.node}function Pr(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null);else if(r){var n=Er(t);t.background=n.insertBefore(O("div",null,r),n.firstChild),e.display.input.setUneditable(t.background);}}function Ir(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):yr(e,t)}function Rr(e,t){var r=t.text.className,n=Ir(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,zr(e,t)):r&&(t.text.className=r);}function zr(e,t){Pr(e,t),t.line.wrapClass?Er(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=r||"";}function Br(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=Er(t);t.gutterBackground=O("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text);}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var l=Er(t),s=t.gutter=O("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px");if(e.display.input.setUneditable(s),l.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(O("div",ve(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var a=0;a<e.options.gutters.length;++a){var u=e.options.gutters[a],c=o.hasOwnProperty(u)&&o[u];c&&s.appendChild(O("div",[c],"CodeMirror-gutter-elt","left: "+n.gutterLeft[u]+"px; width: "+n.gutterWidth[u]+"px"));}}}function Gr(e,t,r){t.alignable&&(t.alignable=null);for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n);Vr(e,t,r);}function Ur(e,t,r,n){var i=Ir(e,t);return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),zr(e,t),Br(e,t,r,n),Vr(e,t,n),t.node}function Vr(e,t,r){if(Kr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)Kr(e,t.rest[n],t,r,!1);}function Kr(e,t,r,n,i){if(t.widgets)for(var o=Er(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=O("div",[a.node],"CodeMirror-linewidget");a.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),jr(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),Dr(a,"redraw");}}function jr(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px";}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"));}function Xr(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!W(document.body,e.node)){var r="position: relative;";e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),N(t.display.measure,O("div",[e.node],null,r));}return e.height=e.node.parentNode.offsetHeight}function Yr(e,t){for(var r=Tt(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return !0}function _r(e){return e.lineSpace.offsetTop}function $r(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function qr(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=N(e.measure,O("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)};return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Zr(e){return G-e.display.nativeBarWidth}function Qr(e){return e.display.scroller.clientWidth-Zr(e)-e.display.barWidth}function Jr(e){return e.display.scroller.clientHeight-Zr(e)-e.display.barHeight}function en(e,t,r){var n=e.options.lineWrapping,i=n&&Qr(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top);}}o.push(r.bottom-r.top);}}function tn(e,t,r){if(e.line==t)return {map:e.measure.map,cache:e.measure.cache};for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return {map:e.measure.maps[n],cache:e.measure.caches[n]};for(var i=0;i<e.rest.length;i++)if(de(e.rest[i])>r)return {map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function rn(e,t){var r=de(t=$e(t)),n=e.display.externalMeasured=new kr(e.doc,t,r);n.lineN=r;var i=n.built=yr(e,n);return n.text=i.pre,N(e.display.lineMeasure,i.pre),n}function nn(e,t,r,n){return sn(e,ln(e,t),r,n)}function on(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Pn(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function ln(e,t){var r=de(t),n=on(e,r);n&&!n.text?n=null:n&&n.changes&&(Fr(e,n,r,Wn(e)),e.curOp.forceUpdate=!0),n||(n=rn(e,t));var i=tn(n,t,r);return {line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function sn(e,t,r,n,i){t.before&&(r=-1);var o,l=r+(n||"");return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(en(e,t.view,t.rect),t.hasHeights=!0),(o=fn(e,t,r,n)).bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var an,un={left:0,right:0,top:0,bottom:0};function cn(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?o=(i=t-s)+1:(u==e.length-3||t==a&&e[u+3]>t)&&(i=(o=a-s)-1,t>=a&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],l="left";if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right";break}return {node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function hn(e,t){var r=un;if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function fn(e,t,r,n){var i,o=cn(t.map,r,n),a=o.node,u=o.start,c=o.end,h=o.collapse;if(3==a.nodeType){for(var f=0;f<4;f++){for(;u&&oe(t.line.text.charAt(o.coverStart+u));)--u;for(;o.coverStart+c<o.coverEnd&&oe(t.line.text.charAt(o.coverStart+c));)++c;if((i=l&&s<9&&0==u&&c==o.coverEnd-o.coverStart?a.parentNode.getBoundingClientRect():hn(k(a,u,c).getClientRects(),n)).left||i.right||0==u)break;c=u,u-=1,h="right";}l&&s<11&&(i=dn(e.display.measure,i));}else{var d;u>0&&(h=n="right"),i=e.options.lineWrapping&&(d=a.getClientRects()).length>1?d["right"==n?d.length-1:0]:a.getBoundingClientRect();}if(l&&s<9&&!u&&(!i||!i.left&&!i.right)){var p=a.parentNode.getClientRects()[0];i=p?{left:p.left,right:p.left+An(e.display),top:p.top,bottom:p.bottom}:un;}for(var g=i.top-t.rect.top,v=i.bottom-t.rect.top,m=(g+v)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(m<y[b]);b++);var w=b?y[b-1]:0,x=y[b],C={left:("right"==h?i.right:i.left)-t.rect.left,right:("left"==h?i.left:i.right)-t.rect.left,top:w,bottom:x};return i.left||i.right||(C.bogus=!0),e.options.singleCursorHeightPerLine||(C.rtop=g,C.rbottom=v),C}function dn(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!zt(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return {left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function pn(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={};}function gn(e){e.display.externalMeasure=null,T(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)pn(e.display.view[t]);}function vn(e){gn(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null;}function mn(){return c&&v?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function yn(){return c&&v?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function bn(e,t,r,n,i){if(!i&&t.widgets)for(var o=0;o<t.widgets.length;++o)if(t.widgets[o].above){var l=Xr(t.widgets[o]);r.top+=l,r.bottom+=l;}if("line"==n)return r;n||(n="local");var s=rt(t);if("local"==n?s+=_r(e.display):s-=e.display.viewOffset,"page"==n||"window"==n){var a=e.display.lineSpace.getBoundingClientRect();s+=a.top+("window"==n?0:yn());var u=a.left+("window"==n?0:mn());r.left+=u,r.right+=u;}return r.top+=s,r.bottom+=s,r}function wn(e,t,r){if("div"==r)return t;var n=t.left,i=t.top;if("page"==r)n-=mn(),i-=yn();else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top;}var l=e.display.lineSpace.getBoundingClientRect();return {left:n-l.left,top:i-l.top}}function xn(e,t,r,n,i){return n||(n=ue(e.doc,t.line)),bn(e,n,nn(e,n,t.ch,i),r)}function Cn(e,t,r,n,i,o){function l(t,l){var s=sn(e,i,t,l?"right":"left",o);return l?s.left=s.right:s.right=s.left,bn(e,n,s,r)}n=n||ue(e.doc,t.line),i||(i=ln(e,n));var s=ut(n,e.doc.direction),a=t.ch,u=t.sticky;if(a>=n.text.length?(a=n.text.length,u="before"):a<=0&&(a=0,u="after"),!s)return l("before"==u?a-1:a,"before"==u);function c(e,t,r){return l(r?e-1:e,s[t].level%2!=0!=r)}var h=st(s,a,u),f=lt,d=c(a,h,"before"==u);return null!=f&&(d.other=c(a,f,"before"!=u)),d}function Sn(e,t){var r=0;t=Le(e.doc,t),e.options.lineWrapping||(r=An(e.display)*t.ch);var n=ue(e.doc,t.line),i=rt(n)+_r(e.display);return {left:r,right:r,top:i,bottom:i+n.height}}function Ln(e,t,r,n,i){var o=me(e,t,r);return o.xRel=i,n&&(o.outside=!0),o}function kn(e,t,r){var n=e.doc;if((r+=e.display.viewOffset)<0)return Ln(n.first,0,null,!0,-1);var i=pe(n,r),o=n.first+n.size-1;if(i>o)return Ln(n.first+n.size-1,ue(n,o).text.length,null,!0,1);t<0&&(t=0);for(var l=ue(n,i);;){var s=Nn(e,l,i,t,r),a=Ye(l),u=a&&a.find(0,!0);if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s;i=de(l=u.to.line);}}function Mn(e,t,r,n){var i=function(n){return bn(e,t,sn(e,r,n),"line")},o=t.text.length,l=se(function(e){return i(e-1).bottom<=n},o,0);return {begin:l,end:o=se(function(e){return i(e).top>n},l,o)}}function Tn(e,t,r,n){return Mn(e,t,r,bn(e,t,sn(e,r,n),"line").top)}function Nn(e,t,r,n,i){i-=rt(t);var o,l=0,s=t.text.length,a=ln(e,t);if(ut(t,e.doc.direction)){var u;if(e.options.lineWrapping)l=(u=Mn(e,t,a,i)).begin,s=u.end;o=new me(r,Math.floor(l+(s-l)/2));var c,h,f=Cn(e,o,"line",t,a).left,d=f<n?1:-1,p=f-n,g=Math.ceil((s-l)/4);e:do{c=p,h=o;for(var v=0;v<g;++v){var m=o;if(null==(o=dt(e,t,o,d))||o.ch<l||s<=("before"==o.sticky?o.ch-1:o.ch)){o=m;break e}}if(p=Cn(e,o,"line",t,a).left-n,g>1){var y=Math.abs(p-c)/g;g=Math.min(g,Math.ceil(Math.abs(p)/y)),d=p<0?1:-1;}}while(0!=p&&(g>1||d<0!=p<0&&Math.abs(p)<=Math.abs(c)));if(Math.abs(p)>Math.abs(c)){if(p<0==c<0)throw new Error("Broke out of infinite loop in coordsCharInner");o=h;}}else{var b=se(function(r){var o=bn(e,t,sn(e,a,r),"line");return o.top>i?(s=Math.min(r,s),!0):!(o.bottom<=i)&&(o.left>n||!(o.right<n)&&n-o.left<o.right-n)},l,s);o=new me(r,b=le(t.text,b,1),b==s?"before":"after");}var w=Cn(e,o,"line",t,a);return (i<w.top||w.bottom<i)&&(o.outside=!0),o.xRel=n<w.left?-1:n>w.right?1:0,o}function On(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==an){an=O("pre");for(var t=0;t<49;++t)an.appendChild(document.createTextNode("x")),an.appendChild(O("br"));an.appendChild(document.createTextNode("x"));}N(e.measure,an);var r=an.offsetHeight/50;return r>3&&(e.cachedTextHeight=r),T(e.measure),r||1}function An(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=O("span","xxxxxxxxxx"),r=O("pre",[t]);N(e.measure,r);var n=t.getBoundingClientRect(),i=(n.right-n.left)/10;return i>2&&(e.cachedCharWidth=i),i||10}function Wn(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth;return {fixedPos:Dn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function Dn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Hn(e){var t=On(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/An(e.display)-3);return function(i){if(et(e.doc,i))return 0;var o=0;if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height);return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function Fn(e){var t=e.doc,r=Hn(e);t.iter(function(e){var t=r(e);t!=e.height&&fe(e,t);});}function En(e,t,r,n){var i=e.display;if(!r&&"true"==Tt(t).getAttribute("cm-not-content"))return null;var o,l,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,l=t.clientY-s.top;}catch(t){return null}var a,u=kn(e,o,l);if(n&&1==u.xRel&&(a=ue(e.doc,u.line).text).length==u.ch){var c=R(a,a.length,e.options.tabSize)-a.length;u=me(u.line,Math.max(0,Math.round((o-qr(e.display).left)/An(e.display))-c));}return u}function Pn(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function In(e){e.display.input.showSelection(e.display.input.prepareSelection());}function Rn(e,t){for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(!1!==t||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&zn(e,s.head,i),a||Bn(e,s,o);}}return n}function zn(e,t,r){var n=Cn(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(O("div"," ","CodeMirror-cursor"));if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(O("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px";}}function Bn(e,t,r){var n=e.display,i=e.doc,o=document.createDocumentFragment(),l=qr(e.display),s=l.left,a=Math.max(n.sizerWidth,Qr(e)-n.sizer.offsetLeft)-l.right;function u(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),o.appendChild(O("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?a-e:r)+"px;\n                             height: "+(n-t)+"px"));}function c(t,r,n){var o,l,c=ue(i,t),h=c.text.length;function f(r,n){return xn(e,me(t,r),"div",c,n)}return ot(ut(c,i.direction),r||0,null==n?h:n,function(e,t,i){var c,d,p,g=f(e,"left");if(e==t)c=g,d=p=g.left;else{if(c=f(t-1,"right"),"rtl"==i){var v=g;g=c,c=v;}d=g.left,p=c.right;}null==r&&0==e&&(d=s),c.top-g.top>3&&(u(d,g.top,null,g.bottom),d=s,g.bottom<c.top&&u(d,g.bottom,null,c.top)),null==n&&t==h&&(p=a),(!o||g.top<o.top||g.top==o.top&&g.left<o.left)&&(o=g),(!l||c.bottom>l.bottom||c.bottom==l.bottom&&c.right>l.right)&&(l=c),d<s+1&&(d=s),u(d,c.top,p-d,c.bottom);}),{start:o,end:l}}var h=t.from(),f=t.to();if(h.line==f.line)c(h.line,h.ch,f.ch);else{var d=ue(i,h.line),p=ue(i,f.line),g=$e(d)==$e(p),v=c(h.line,h.ch,g?d.text.length+1:null).end,m=c(f.line,g?0:null,f.ch).start;g&&(v.top<m.top-2?(u(v.right,v.top,null,v.bottom),u(s,m.top,m.left,m.bottom)):u(v.right,v.top,m.left-v.right,v.bottom)),v.bottom<m.top&&u(s,v.bottom,null,m.top);}r.appendChild(o);}function Gn(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden");}}function Un(e){e.state.focused||(e.display.input.focus(),Kn(e));}function Vn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,jn(e));},100);}function Kn(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(yt(e,"focus",e,t),e.state.focused=!0,H(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),a&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Gn(e));}function jn(e,t){e.state.delayingBlurEvent||(e.state.focused&&(yt(e,"blur",e,t),e.state.focused=!1,M(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1);},150));}function Xn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=void 0;if(!i.hidden){if(l&&s<8){var a=i.node.offsetTop+i.node.offsetHeight;o=a-r,r=a;}else{var u=i.node.getBoundingClientRect();o=u.bottom-u.top;}var c=i.line.height-o;if(o<2&&(o=On(t)),(c>.005||c<-.005)&&(fe(i.line,o),Yn(i.line),i.rest))for(var h=0;h<i.rest.length;h++)Yn(i.rest[h]);}}}function Yn(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight;}function _n(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-_r(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=pe(t,n),l=pe(t,i);if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line;s<o?(o=s,l=pe(t,rt(ue(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=pe(t,rt(ue(t,a))-e.wrapper.clientHeight),l=a);}return {from:o,to:Math.max(l,o+1)}}function $n(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=Dn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o));var s=r[l].alignable;if(s)for(var a=0;a<s.length;a++)s[a].style.left=o;}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px");}}function qn(e){if(!e.options.lineNumbers)return !1;var t=e.doc,r=ve(e.options,t.first+t.size-1),n=e.display;if(r.length!=n.lineNumChars){var i=n.measure.appendChild(O("div",[O("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o;return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l)+1,n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",Xi(e),!0}return !1}function Zn(e,t){if(!bt(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null;if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!p){var o=O("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-_r(e.display))+"px;\n                         height: "+(t.bottom-t.top+Zr(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o);}}}function Qn(e,t,r,n){var i;null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?me(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?me(t.line,t.ch+1,"before"):t);for(var o=0;o<5;o++){var l=!1,s=Cn(e,t),a=r&&r!=t?Cn(e,r):s,u=ei(e,i={left:Math.min(s.left,a.left),top:Math.min(s.top,a.top)-n,right:Math.max(s.left,a.left),bottom:Math.max(s.bottom,a.bottom)+n}),c=e.doc.scrollTop,h=e.doc.scrollLeft;if(null!=u.scrollTop&&(si(e,u.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(l=!0)),null!=u.scrollLeft&&(ui(e,u.scrollLeft),Math.abs(e.doc.scrollLeft-h)>1&&(l=!0)),!l)break}return i}function Jn(e,t){var r=ei(e,t);null!=r.scrollTop&&si(e,r.scrollTop),null!=r.scrollLeft&&ui(e,r.scrollLeft);}function ei(e,t){var r=e.display,n=On(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Jr(e),l={};t.bottom-t.top>o&&(t.bottom=t.top+o);var s=e.doc.height+$r(r),a=t.top<n,u=t.bottom>s-n;if(t.top<i)l.scrollTop=a?0:t.top;else if(t.bottom>i+o){var c=Math.min(t.top,(u?s:t.bottom)-o);c!=i&&(l.scrollTop=c);}var h=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=Qr(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),d=t.right-t.left>f;return d&&(t.right=t.left+f),t.left<10?l.scrollLeft=0:t.left<h?l.scrollLeft=Math.max(0,t.left-(d?0:10)):t.right>f+h-3&&(l.scrollLeft=t.right+(d?0:10)-f),l}function ti(e,t){null!=t&&(oi(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t);}function ri(e){oi(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin};}function ni(e,t,r){null==t&&null==r||oi(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r);}function ii(e,t){oi(e),e.curOp.scrollToPos=t;}function oi(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,li(e,Sn(e,t.from),Sn(e,t.to),t.margin));}function li(e,t,r,n){var i=ei(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n});ni(e,i.scrollLeft,i.scrollTop);}function si(e,t){Math.abs(e.doc.scrollTop-t)<2||(r||Ki(e,{top:t}),ai(e,t,!0),r&&Ki(e),Pi(e,100));}function ai(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t));}function ui(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,$n(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t));}function ci(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+$r(e.display));return {clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Zr(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}var hi=function(e,t,r){this.cm=r;var n=this.vert=O("div",[O("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=O("div",[O("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");e(n),e(i),gt(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical");}),gt(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal");}),this.checkedZeroWidth=!1,l&&s<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px");};hi.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0";var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px";}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px";}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return !this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},hi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz");},hi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert");},hi.prototype.zeroWidthHack=function(){var e=y&&!d?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new z,this.disableVert=new z;},hi.prototype.enableZeroWidthBar=function(e,t,r){function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,n);}e.style.pointerEvents="auto",t.set(1e3,n);},hi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert);};var fi=function(){};function di(e,t){t||(t=ci(e));var r=e.display.barWidth,n=e.display.barHeight;pi(e,t);for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Xn(e),pi(e,ci(e)),r=e.display.barWidth,n=e.display.barHeight;}function pi(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display="";}fi.prototype.update=function(){return {bottom:0,right:0}},fi.prototype.setScrollLeft=function(){},fi.prototype.setScrollTop=function(){},fi.prototype.clear=function(){};var gi={native:hi,"null":fi};function vi(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&M(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new gi[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),gt(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0);}),t.setAttribute("cm-not-content","true");},function(t,r){"horizontal"==r?ui(e,t):si(e,t);},e),e.display.scrollbars.addClass&&H(e.display.wrapper,e.display.scrollbars.addClass);}var mi=0;function yi(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++mi},Nr(e.curOp);}function bi(e){Ar(e.curOp,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;wi(e);});}function wi(e){for(var t=e.ops,r=0;r<t.length;r++)xi(t[r]);for(var n=0;n<t.length;n++)Ci(t[n]);for(var i=0;i<t.length;i++)Si(t[i]);for(var o=0;o<t.length;o++)Li(t[o]);for(var l=0;l<t.length;l++)ki(t[l]);}function xi(e){var t=e.cm,r=t.display;zi(t),e.updateMaxLine&&it(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new Ri(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate);}function Ci(e){e.updatedDisplay=e.mustUpdate&&Ui(e.cm,e.update);}function Si(e){var t=e.cm,r=t.display;e.updatedDisplay&&Xn(t),e.barMeasure=ci(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=nn(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Zr(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Qr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection(e.focus));}function Li(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&ui(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==D()&&(!document.hasFocus||document.hasFocus());e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&di(t,e.barMeasure),e.updatedDisplay&&Yi(t,e.barMeasure),e.selectionChanged&&Gn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Un(e.cm);}function ki(e){var t=e.cm,r=t.display,n=t.doc;(e.updatedDisplay&&Vi(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&ai(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&ui(t,e.scrollLeft,!0,!0),e.scrollToPos)&&Zn(t,Qn(t,Le(n,e.scrollToPos.from),Le(n,e.scrollToPos.to),e.scrollToPos.margin));var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers;if(i)for(var l=0;l<i.length;++l)i[l].lines.length||yt(i[l],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&yt(o[s],"unhide");r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&yt(t,"changes",t,e.changeObjs),e.update&&e.update.finish();}function Mi(e,t){if(e.curOp)return t();yi(e);try{return t()}finally{bi(e);}}function Ti(e,t){return function(){if(e.curOp)return t.apply(e,arguments);yi(e);try{return t.apply(e,arguments)}finally{bi(e);}}}function Ni(e){return function(){if(this.curOp)return e.apply(this,arguments);yi(this);try{return e.apply(this,arguments)}finally{bi(this);}}}function Oi(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);yi(t);try{return e.apply(this,arguments)}finally{bi(t);}}}function Ai(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0);var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Ne&&Qe(e.doc,t)<i.viewTo&&Di(e);else if(r<=i.viewFrom)Ne&&Je(e.doc,r+n)>i.viewFrom?Di(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)Di(e);else if(t<=i.viewFrom){var o=Hi(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):Di(e);}else if(r>=i.viewTo){var l=Hi(e,t,t,-1);l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):Di(e);}else{var s=Hi(e,t,t,-1),a=Hi(e,r,r+n,1);s&&a?(i.view=i.view.slice(0,s.index).concat(Mr(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):Di(e);}var u=i.externalMeasured;u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null));}function Wi(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Pn(e,t)];if(null!=o.node){var l=o.changes||(o.changes=[]);-1==B(l,r)&&l.push(r);}}}function Di(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0;}function Hi(e,t,r,n){var i,o=Pn(e,t),l=e.display.view;if(!Ne||r==e.doc.first+e.doc.size)return {index:o,lineN:r};for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size;if(s!=t){if(n>0){if(o==l.length-1)return null;i=s+l[o].size-t,o++;}else i=s-t;t+=i,r+=i;}for(;Qe(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null;r+=n*l[o-(n<0?1:0)].size,o+=n;}return {index:o,lineN:r}}function Fi(e,t,r){var n=e.display;0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=Mr(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=Mr(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Pn(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(Mr(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Pn(e,r)))),n.viewTo=r;}function Ei(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r;}return r}function Pi(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,P(Ii,e));}function Ii(e){var t=e.doc;if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=rr(e,t.highlightFrontier),i=[];t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(n.line>=e.display.viewFrom){var l=o.styles,s=o.text.length>e.options.maxHighlightLength?_t(t.mode,n.state):null,a=er(e,o,n,!0);s&&(n.state=s),o.styles=a.styles;var u=o.styleClasses,c=a.classes;c?o.styleClasses=c:u&&(o.styleClasses=null);for(var h=!l||l.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),f=0;!h&&f<l.length;++f)h=l[f]!=o.styles[f];h&&i.push(n.line),o.stateAfter=n.save(),n.nextLine();}else o.text.length<=e.options.maxHighlightLength&&nr(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine();if(+new Date>r)return Pi(e,e.options.workDelay),!0}),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&Mi(e,function(){for(var t=0;t<i.length;t++)Wi(e,i[t],"text");});}}var Ri=function(e,t,r){var n=e.display;this.viewport=t,this.visible=_n(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Qr(e),this.force=r,this.dims=Wn(e),this.events=[];};function zi(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Zr(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Zr(e)+"px",t.scrollbarsClipped=!0);}function Bi(e){if(e.hasFocus())return null;var t=D();if(!t||!W(e.display.lineDiv,t))return null;var r={activeElt:t};if(window.getSelection){var n=window.getSelection();n.anchorNode&&n.extend&&W(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset);}return r}function Gi(e){if(e&&e.activeElt&&e.activeElt!=D()&&(e.activeElt.focus(),e.anchorNode&&W(document.body,e.anchorNode)&&W(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange();r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset);}}function Ui(e,t){var r=e.display,n=e.doc;if(t.editorIsHidden)return Di(e),!1;if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==Ei(e))return !1;qn(e)&&(Di(e),t.dims=Wn(e));var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin);r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),Ne&&(o=Qe(e.doc,o),l=Je(e.doc,l));var s=o!=r.viewFrom||l!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;Fi(e,o,l),r.viewOffset=rt(ue(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px";var a=Ei(e);if(!s&&0==a&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return !1;var u=Bi(e);return a>4&&(r.lineDiv.style.display="none"),ji(e,r.updateLineNumbers,t.dims),a>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,Gi(u),T(r.cursorDiv),T(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,s&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,Pi(e,400)),r.updateLineNumbers=null,!0}function Vi(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Qr(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+$r(e.display)-Jr(e),r.top)}),t.visible=_n(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&Ui(e,t);n=!1){Xn(e);var i=ci(e);In(e),di(e,i),Yi(e,i),t.force=!1;}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo);}function Ki(e,t){var r=new Ri(e,t);if(Ui(e,r)){Xn(e),Vi(e,r);var n=ci(e);In(e),di(e,n),Yi(e,n),r.finish();}}function ji(e,t,r){var n=e.display,i=e.options.lineNumbers,o=n.lineDiv,l=o.firstChild;function s(t){var r=t.nextSibling;return a&&y&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var u=n.view,c=n.viewFrom,h=0;h<u.length;h++){var f=u[h];if(f.hidden);else if(f.node&&f.node.parentNode==o){for(;l!=f.node;)l=s(l);var d=i&&null!=t&&t<=c&&f.lineNumber;f.changes&&(B(f.changes,"gutter")>-1&&(d=!1),Fr(e,f,c,r)),d&&(T(f.lineNumber),f.lineNumber.appendChild(document.createTextNode(ve(e.options,c)))),l=f.node.nextSibling;}else{var p=Ur(e,f,c,r);o.insertBefore(p,l);}c+=f.size;}for(;l;)l=s(l);}function Xi(e){var t=e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft=t+"px";}function Yi(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Zr(e)+"px";}function _i(e){var t=e.display.gutters,r=e.options.gutters;T(t);for(var n=0;n<r.length;++n){var i=r[n],o=t.appendChild(O("div",null,"CodeMirror-gutter "+i));"CodeMirror-linenumbers"==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+"px");}t.style.display=n?"":"none",Xi(e);}function $i(e){var t=B(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1));}Ri.prototype.signal=function(e,t){xt(e,t)&&this.events.push(arguments);},Ri.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)yt.apply(null,e.events[t]);};var qi=0,Zi=null;function Qi(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Ji(e){var t=Qi(e);return t.x*=Zi,t.y*=Zi,t}function eo(e,t){var n=Qi(t),i=n.x,o=n.y,l=e.display,s=l.scroller,u=s.scrollWidth>s.clientWidth,c=s.scrollHeight>s.clientHeight;if(i&&u||o&&c){if(o&&y&&a)e:for(var f=t.target,d=l.view;f!=s;f=f.parentNode)for(var p=0;p<d.length;p++)if(d[p].node==f){e.display.currentWheelTarget=f;break e}if(i&&!r&&!h&&null!=Zi)return o&&c&&si(e,Math.max(0,s.scrollTop+o*Zi)),ui(e,Math.max(0,s.scrollLeft+i*Zi)),(!o||o&&c)&&St(t),void(l.wheelStartX=null);if(o&&null!=Zi){var g=o*Zi,v=e.doc.scrollTop,m=v+l.wrapper.clientHeight;g<0?v=Math.max(0,v+g-50):m=Math.min(e.doc.height,m+g+50),Ki(e,{top:v,bottom:m});}qi<20&&(null==l.wheelStartX?(l.wheelStartX=s.scrollLeft,l.wheelStartY=s.scrollTop,l.wheelDX=i,l.wheelDY=o,setTimeout(function(){if(null!=l.wheelStartX){var e=s.scrollLeft-l.wheelStartX,t=s.scrollTop-l.wheelStartY,r=t&&l.wheelDY&&t/l.wheelDY||e&&l.wheelDX&&e/l.wheelDX;l.wheelStartX=l.wheelStartY=null,r&&(Zi=(Zi*qi+r)/(qi+1),++qi);}},200)):(l.wheelDX+=i,l.wheelDY+=o));}}l?Zi=-.53:r?Zi=15:c?Zi=-.7:f&&(Zi=-1/3);var to=function(e,t){this.ranges=e,this.primIndex=t;};to.prototype.primary=function(){return this.ranges[this.primIndex]},to.prototype.equals=function(e){var t=this;if(e==this)return !0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return !1;for(var r=0;r<this.ranges.length;r++){var n=t.ranges[r],i=e.ranges[r];if(!be(n.anchor,i.anchor)||!be(n.head,i.head))return !1}return !0},to.prototype.deepCopy=function(){for(var e=this,t=[],r=0;r<this.ranges.length;r++)t[r]=new ro(we(e.ranges[r].anchor),we(e.ranges[r].head));return new to(t,this.primIndex)},to.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return !0;return !1},to.prototype.contains=function(e,t){var r=this;t||(t=e);for(var n=0;n<this.ranges.length;n++){var i=r.ranges[n];if(ye(t,i.from())>=0&&ye(e,i.to())<=0)return n}return -1};var ro=function(e,t){this.anchor=e,this.head=t;};function no(e,t){var r=e[t];e.sort(function(e,t){return ye(e.from(),t.from())}),t=B(e,r);for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1];if(ye(o.to(),i.from())>=0){var l=Ce(o.from(),i.from()),s=xe(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head;n<=t&&--t,e.splice(--n,2,new ro(a?s:l,a?l:s));}}return new to(e,t)}function io(e,t){return new to([new ro(e,t||e)],0)}function oo(e){return e.text?me(e.from.line+e.text.length-1,$(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function lo(e,t){if(ye(e,t.from)<0)return e;if(ye(e,t.to)<=0)return oo(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=oo(t).ch-t.to.ch),me(r,n)}function so(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new ro(lo(i.anchor,t),lo(i.head,t)));}return no(r,e.sel.primIndex)}function ao(e,t,r){return e.line==t.line?me(r.line,e.ch-t.ch+r.ch):me(r.line+(e.line-t.line),e.ch)}function uo(e,t,r){for(var n=[],i=me(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=ao(s.from,i,o),u=ao(oo(s),i,o);if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],h=ye(c.head,c.anchor)<0;n[l]=new ro(h?u:a,h?a:u);}else n[l]=new ro(a,a);}return new to(n,e.sel.primIndex)}function co(e){e.doc.mode=jt(e.options,e.doc.modeOption),ho(e);}function ho(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null);}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Pi(e,100),e.state.modeGen++,e.curOp&&Ai(e);}function fo(e,t){return 0==t.from.ch&&0==t.to.ch&&""==$(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function po(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){dr(e,r,i,n),Dr(e,"change",e,t);}function l(e,t){for(var r=[],o=e;o<t;++o)r.push(new fr(u[o],i(o),n));return r}var s=t.from,a=t.to,u=t.text,c=ue(e,s.line),h=ue(e,a.line),f=$(u),d=i(u.length-1),p=a.line-s.line;if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length);else if(fo(e,t)){var g=l(0,u.length-1);o(h,h.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g);}else if(c==h)if(1==u.length)o(c,c.text.slice(0,s.ch)+f+c.text.slice(a.ch),d);else{var v=l(1,u.length-1);v.push(new fr(f+c.text.slice(a.ch),d,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,v);}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+h.text.slice(a.ch),i(0)),e.remove(s.line+1,p);else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(h,f+h.text.slice(a.ch),d);var m=l(1,u.length-1);p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,m);}Dr(e,"change",e,t);}function go(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l];if(s.doc!=i){var a=o&&s.sharedHist;r&&!a||(t(s.doc,a),n(s.doc,e,a));}}}n(e,null,!0);}function vo(e,t){if(t.cm)throw new Error("This document is already in use.");e.doc=t,t.cm=e,Fn(e),co(e),mo(e),e.options.lineWrapping||it(e),e.options.mode=t.modeOption,Ai(e);}function mo(e){("rtl"==e.doc.direction?H:M)(e.display.lineDiv,"CodeMirror-rtl");}function yo(e){Mi(e,function(){mo(e),Ai(e);});}function bo(e){this.done=[],this.undone=[],this.undoDepth=Infinity,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1;}function wo(e,t){var r={from:we(t.from),to:oo(t),text:ce(e,t.from,t.to)};return To(e,r,t.from.line,t.to.line+1),go(e,function(e){return To(e,r,t.from.line,t.to.line+1)},!0),r}function xo(e){for(;e.length;){if(!$(e).ranges)break;e.pop();}}function Co(e,t){return t?(xo(e.done),$(e.done)):e.done.length&&!$(e.done).ranges?$(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),$(e.done)):void 0}function So(e,t,r,n){var i=e.history;i.undone.length=0;var o,l,s=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>s-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=Co(i,i.lastOp==n)))l=$(o.changes),0==ye(t.from,t.to)&&0==ye(t.from,l.to)?l.to=oo(t):o.changes.push(wo(e,t));else{var a=$(i.done);for(a&&a.ranges||Mo(e.sel,i.done),o={changes:[wo(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift();}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||yt(e,"historyAdded");}function Lo(e,t,r,n){var i=t.charAt(0);return "*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function ko(e,t,r,n){var i=e.history,o=n&&n.origin;r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||Lo(e,o,$(i.done),t))?i.done[i.done.length-1]=t:Mo(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&xo(i.undone);}function Mo(e,t){var r=$(t);r&&r.ranges&&r.equals(e)||t.push(e);}function To(e,t,r,n){var i=t["spans_"+e.id],o=0;e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o;});}function No(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r]);return t?t.length?t:null:e}function Oo(e,t){var r=t["spans_"+e.id];if(!r)return null;for(var n=[],i=0;i<t.text.length;++i)n.push(No(r[i]));return n}function Ao(e,t){var r=Oo(e,t),n=Ie(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],l=n[i];if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e;o.push(a);}else l&&(r[i]=l);}return r}function Wo(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)n.push(r?to.prototype.deepCopy.call(o):o);else{var l=o.changes,s=[];n.push({changes:s});for(var a=0;a<l.length;++a){var u=l[a],c=void 0;if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var h in u)(c=h.match(/^spans_(\d+)$/))&&B(t,Number(c[1]))>-1&&($(s)[h]=u[h],delete u[h]);}}}return n}function Do(e,t,r,n){if(n){var i=e.anchor;if(r){var o=ye(t,i)<0;o!=ye(r,i)<0?(i=t,t=r):o!=ye(t,r)<0&&(t=r);}return new ro(i,t)}return new ro(r||t,t)}function Ho(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),zo(e,new to([Do(e.sel.primary(),t,r,i)],0),n);}function Fo(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Do(e.sel.ranges[o],t[o],null,i);zo(e,no(n,e.sel.primIndex),r);}function Eo(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,zo(e,no(i,e.sel.primIndex),n);}function Po(e,t,r,n){zo(e,io(t,r),n);}function Io(e,t,r){var n={ranges:t.ranges,update:function(t){var r=this;this.ranges=[];for(var n=0;n<t.length;n++)r.ranges[n]=new ro(Le(e,t[n].anchor),Le(e,t[n].head));},origin:r&&r.origin};return yt(e,"beforeSelectionChange",e,n),e.cm&&yt(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?no(n.ranges,n.ranges.length-1):t}function Ro(e,t,r){var n=e.history.done,i=$(n);i&&i.ranges?(n[n.length-1]=t,Bo(e,t,r)):zo(e,t,r);}function zo(e,t,r){Bo(e,t,r),ko(e,e.sel,e.cm?e.cm.curOp.id:NaN,r);}function Bo(e,t,r){(xt(e,"beforeSelectionChange")||e.cm&&xt(e.cm,"beforeSelectionChange"))&&(t=Io(e,t,r)),Go(e,Vo(e,t,r&&r.bias||(ye(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||ri(e.cm);}function Go(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,wt(e.cm)),Dr(e,"cursorActivity",e));}function Uo(e){Go(e,Vo(e,e.sel,null,!1));}function Vo(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=jo(e,l.anchor,s&&s.anchor,r,n),u=jo(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new ro(a,u));}return i?no(i,t.primIndex):t}function Ko(e,t,r,n,i){var o=ue(e,t.line);if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker;if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(yt(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l;continue}break}if(!a.atomic)continue;if(r){var u=a.find(n<0?1:-1),c=void 0;if((n<0?a.inclusiveRight:a.inclusiveLeft)&&(u=Xo(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=ye(u,r))&&(n<0?c<0:c>0))return Ko(e,u,t,n,i)}var h=a.find(n<0?-1:1);return (n<0?a.inclusiveLeft:a.inclusiveRight)&&(h=Xo(e,h,n,h.line==t.line?o:null)),h?Ko(e,h,t,n,i):null}}return t}function jo(e,t,r,n,i){var o=n||1,l=Ko(e,t,r,o,i)||!i&&Ko(e,t,r,o,!0)||Ko(e,t,r,-o,i)||!i&&Ko(e,t,r,-o,!0);return l||(e.cantEdit=!0,me(e.first,0))}function Xo(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?Le(e,me(t.line-1)):null:r>0&&t.ch==(n||ue(e,t.line)).text.length?t.line<e.first+e.size-1?me(t.line+1,0):null:new me(t.line,t.ch+r)}function Yo(e){e.setSelection(me(e.firstLine(),0),me(e.lastLine()),V);}function _o(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}};return r&&(n.update=function(t,r,i,o){t&&(n.from=Le(e,t)),r&&(n.to=Le(e,r)),i&&(n.text=i),o!==undefined&&(n.origin=o);}),yt(e,"beforeChange",e,n),e.cm&&yt(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function $o(e,t,r){if(e.cm){if(!e.cm.curOp)return Ti(e.cm,$o)(e,t,r);if(e.cm.state.suppressEdits)return}if(!(xt(e,"beforeChange")||e.cm&&xt(e.cm,"beforeChange"))||(t=_o(e,t,!0))){var n=Te&&!r&&ze(e,t.from,t.to);if(n)for(var i=n.length-1;i>=0;--i)qo(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text});else qo(e,t);}}function qo(e,t){if(1!=t.text.length||""!=t.text[0]||0!=ye(t.from,t.to)){var r=so(e,t);So(e,t,r,e.cm?e.cm.curOp.id:NaN),Jo(e,t,r,Ie(e,t));var n=[];go(e,function(e,r){r||-1!=B(n,e.history)||(il(e.history,t),n.push(e.history)),Jo(e,t,null,Ie(e,t));});}}function Zo(e,t,r){if(!e.cm||!e.cm.state.suppressEdits||r){for(var n,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,s="undo"==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;(n=l.pop()).ranges;){if(Mo(n,s),r&&!n.equals(e.sel))return void zo(e,n,{clearRedo:!1});o=n;}var u=[];Mo(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration;for(var c=xt(e,"beforeChange")||e.cm&&xt(e.cm,"beforeChange"),h=function(r){var i=n.changes[r];if(i.origin=t,c&&!_o(e,i,!1))return l.length=0,{};u.push(wo(e,i));var o=r?so(e,i):$(l);Jo(e,i,o,Ao(e,i)),!r&&e.cm&&e.cm.scrollIntoView({from:i.from,to:oo(i)});var s=[];go(e,function(e,t){t||-1!=B(s,e.history)||(il(e.history,i),s.push(e.history)),Jo(e,i,null,Ao(e,i));});},f=n.changes.length-1;f>=0;--f){var d=h(f);if(d)return d.v}}}}function Qo(e,t){if(0!=t&&(e.first+=t,e.sel=new to(q(e.sel.ranges,function(e){return new ro(me(e.anchor.line+t,e.anchor.ch),me(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){Ai(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)Wi(e.cm,n,"gutter");}}function Jo(e,t,r,n){if(e.cm&&!e.cm.curOp)return Ti(e.cm,Jo)(e,t,r,n);if(t.to.line<e.first)Qo(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);Qo(e,i),t={from:me(e.first,0),to:me(t.to.line+i,t.to.ch),text:[$(t.text)],origin:t.origin};}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:me(o,ue(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=ce(e,t.from,t.to),r||(r=so(e,t)),e.cm?el(e.cm,t,n):po(e,t,n),Bo(e,r,V);}}function el(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line;e.options.lineWrapping||(a=de($e(ue(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0,!0})),n.sel.contains(t.from,t.to)>-1&&wt(e),po(n,t,r,Hn(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=nt(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1);}),s&&(e.curOp.updateMaxLine=!0)),hr(n,o.line),Pi(e,400);var u=t.text.length-(l.line-o.line)-1;t.full?Ai(e):o.line!=l.line||1!=t.text.length||fo(e.doc,t)?Ai(e,o.line,l.line+1,u):Wi(e,o.line,"text");var c=xt(e,"changes"),h=xt(e,"change");if(h||c){var f={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin};h&&Dr(e,"change",e,f),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f);}e.display.selForContextMenu=null;}function tl(e,t,r,n,i){if(n||(n=r),ye(n,r)<0){var o=n;n=r,r=o;}"string"==typeof t&&(t=e.splitLines(t)),$o(e,{from:r,to:n,text:t,origin:i});}function rl(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0);}function nl(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)rl(o.ranges[s].anchor,t,r,n),rl(o.ranges[s].head,t,r,n);}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a];if(r<u.from.line)u.from=me(u.from.line+n,u.from.ch),u.to=me(u.to.line+n,u.to.ch);else if(t<=u.to.line){l=!1;break}}l||(e.splice(0,i+1),i=0);}}}function il(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;nl(e.done,r,n,i),nl(e.undone,r,n,i);}function ol(e,t,r,n){var i=t,o=t;return "number"==typeof t?o=ue(e,Se(e,t)):i=de(t),null==i?null:(n(o,i)&&e.cm&&Wi(e.cm,i,r),o)}function ll(e){var t=this;this.lines=e,this.parent=null;for(var r=0,n=0;n<e.length;++n)e[n].parent=t,r+=e[n].height;this.height=r;}function sl(e){var t=this;this.children=e;for(var r=0,n=0,i=0;i<e.length;++i){var o=e[i];r+=o.chunkSize(),n+=o.height,o.parent=t;}this.size=r,this.height=n,this.parent=null;}ro.prototype.from=function(){return Ce(this.anchor,this.head)},ro.prototype.to=function(){return xe(this.anchor,this.head)},ro.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},ll.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=this,n=e,i=e+t;n<i;++n){var o=r.lines[n];r.height-=o.height,pr(o),Dr(o,"delete");}this.lines.splice(e,t);},collapse:function(e){e.push.apply(e,this.lines);},insertInner:function(e,t,r){var n=this;this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var i=0;i<t.length;++i)t[i].parent=n;},iterN:function(e,t,r){for(var n=this,i=e+t;e<i;++e)if(r(n.lines[e]))return !0}},sl.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){var r=this;this.size-=t;for(var n=0;n<this.children.length;++n){var i=r.children[n],o=i.chunkSize();if(e<o){var l=Math.min(t,o-e),s=i.height;if(i.removeInner(e,l),r.height-=s-i.height,o==l&&(r.children.splice(n--,1),i.parent=null),0==(t-=l))break;e=0;}else e-=o;}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof ll))){var a=[];this.collapse(a),this.children=[new ll(a)],this.children[0].parent=this;}},collapse:function(e){for(var t=this,r=0;r<this.children.length;++r)t.children[r].collapse(e);},insertInner:function(e,t,r){var n=this;this.size+=t.length,this.height+=r;for(var i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize();if(e<=l){if(o.insertInner(e,t,r),o.lines&&o.lines.length>50){for(var s=o.lines.length%25+25,a=s;a<o.lines.length;){var u=new ll(o.lines.slice(a,a+=25));o.height-=u.height,n.children.splice(++i,0,u),u.parent=n;}o.lines=o.lines.slice(0,s),n.maybeSpill();}break}e-=l;}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new sl(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var r=B(e.parent.children,e);e.parent.children.splice(r+1,0,t);}else{var n=new sl(e.children);n.parent=e,e.children=[n,t],e=n;}t.parent=e.parent;}while(e.children.length>10);e.parent.maybeSpill();}},iterN:function(e,t,r){for(var n=this,i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize();if(e<l){var s=Math.min(t,l-e);if(o.iterN(e,s,r))return !0;if(0==(t-=s))break;e=0;}else e-=l;}}};var al=function(e,t,r){var n=this;if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);this.doc=e,this.node=t;};function ul(e,t,r){rt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ti(e,r);}function cl(e,t,r,n){var i=new al(e,r,n),o=e.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),ol(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[]);if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!et(e,t)){var n=rt(t)<e.scrollTop;fe(t,t.height+Xr(i)),n&&ti(o,i.height),o.curOp.forceUpdate=!0;}return !0}),Dr(o,"lineWidgetAdded",o,i,"number"==typeof t?t:de(t)),i}al.prototype.clear=function(){var e=this,t=this.doc.cm,r=this.line.widgets,n=this.line,i=de(n);if(null!=i&&r){for(var o=0;o<r.length;++o)r[o]==e&&r.splice(o--,1);r.length||(n.widgets=null);var l=Xr(this);fe(n,Math.max(0,n.height-l)),t&&(Mi(t,function(){ul(t,n,-l),Wi(t,i,"widget");}),Dr(t,"lineWidgetCleared",t,this,i));}},al.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line;this.height=null;var i=Xr(this)-t;i&&(fe(n,n.height+i),r&&Mi(r,function(){r.curOp.forceUpdate=!0,ul(r,n,i),Dr(r,"lineWidgetChanged",r,e,de(n));}));},Ct(al);var hl=0,fl=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++hl;};function dl(e,t,r,n,i){if(n&&n.shared)return gl(e,t,r,n,i);if(e.cm&&!e.cm.curOp)return Ti(e.cm,dl)(e,t,r,n,i);var o=new fl(e,i),l=ye(t,r);if(n&&I(n,o,!1),l>0||0==l&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=A("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(_e(e,t.line,t,r,o)||t.line!=r.line&&_e(e,r.line,t,r,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");Ae();}o.addToHistory&&So(e,{from:t,to:r,origin:"markText"},e.sel,NaN);var s,a=t.line,u=e.cm;if(e.iter(a,r.line+1,function(e){u&&o.collapsed&&!u.options.lineWrapping&&$e(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=t.line&&fe(e,0),Fe(e,new We(o,a==t.line?t.ch:null,a==r.line?r.ch:null)),++a;}),o.collapsed&&e.iter(t.line,r.line+1,function(t){et(e,t)&&fe(t,0);}),o.clearOnEnter&&gt(o,"beforeCursorEnter",function(){return o.clear()}),o.readOnly&&(Oe(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++hl,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)Ai(u,t.line,r.line+1);else if(o.className||o.title||o.startStyle||o.endStyle||o.css)for(var c=t.line;c<=r.line;c++)Wi(u,c,"text");o.atomic&&Uo(u.doc),Dr(u,"markerAdded",u,o);}return o}fl.prototype.clear=function(){var e=this;if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp;if(r&&yi(t),xt(this,"clear")){var n=this.find();n&&Dr(this,"clear",n.from,n.to);}for(var i=null,o=null,l=0;l<this.lines.length;++l){var s=e.lines[l],a=De(s.markedSpans,e);t&&!e.collapsed?Wi(t,de(s),"text"):t&&(null!=a.to&&(o=de(s)),null!=a.from&&(i=de(s))),s.markedSpans=He(s.markedSpans,a),null==a.from&&e.collapsed&&!et(e.doc,s)&&t&&fe(s,On(t.display));}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=$e(e.lines[u]),h=nt(c);h>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=h,t.display.maxLineChanged=!0);}null!=i&&t&&this.collapsed&&Ai(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&Uo(t.doc)),t&&Dr(t,"markerCleared",t,this,i,o),r&&bi(t),this.parent&&this.parent.clear();}},fl.prototype.find=function(e,t){var r,n,i=this;null==e&&"bookmark"==this.type&&(e=1);for(var o=0;o<this.lines.length;++o){var l=i.lines[o],s=De(l.markedSpans,i);if(null!=s.from&&(r=me(t?l:de(l),s.from),-1==e))return r;if(null!=s.to&&(n=me(t?l:de(l),s.to),1==e))return n}return r&&{from:r,to:n}},fl.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm;t&&n&&Mi(n,function(){var i=t.line,o=de(t.line),l=on(n,o);if(l&&(pn(l),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!et(r.doc,i)&&null!=r.height){var s=r.height;r.height=null;var a=Xr(r)-s;a&&fe(i,i.height+a);}Dr(n,"markerChanged",n,e);});},fl.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=B(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this);}this.lines.push(e);},fl.prototype.detachLine=function(e){if(this.lines.splice(B(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this);}},Ct(fl);var pl=function(e,t){var r=this;this.markers=e,this.primary=t;for(var n=0;n<e.length;++n)e[n].parent=r;};function gl(e,t,r,n,i){(n=I(n)).shared=!1;var o=[dl(e,t,r,n,i)],l=o[0],s=n.widgetNode;return go(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(dl(e,Le(e,t),Le(e,r),n,i));for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return;l=$(o);}),new pl(o,l)}function vl(e){return e.findMarks(me(e.first,0),e.clipPos(me(e.lastLine())),function(e){return e.parent})}function ml(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to);if(ye(o,l)){var s=dl(e,o,l,n.primary,n.primary.type);n.markers.push(s),s.parent=n;}}}function yl(e){for(var t=function(t){var r=e[t],n=[r.primary.doc];go(r.primary.doc,function(e){return n.push(e)});for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==B(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1));}},r=0;r<e.length;r++)t(r);}pl.prototype.clear=function(){var e=this;if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var t=0;t<this.markers.length;++t)e.markers[t].clear();Dr(this,"clear");}},pl.prototype.find=function(e,t){return this.primary.find(e,t)},Ct(pl);var bl=0,wl=function(e,t,r,n,i){if(!(this instanceof wl))return new wl(e,t,r,n,i);null==r&&(r=0),sl.call(this,[new ll([new fr("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r;var o=me(r,0);this.sel=io(o),this.history=new bo(null),this.id=++bl,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),po(this,{from:o,to:o,text:e}),zo(this,io(o),V);};wl.prototype=J(sl.prototype,{constructor:wl,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e);},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r);},remove:function(e,t){this.removeInner(e-this.first,t);},getValue:function(e){var t=he(this,this.first,this.first+this.size);return !1===e?t:t.join(e||this.lineSeparator())},setValue:Oi(function(e){var t=me(this.first,0),r=this.first+this.size-1;$o(this,{from:t,to:me(r,ue(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ni(this.cm,0,0),zo(this,io(t),V);}),replaceRange:function(e,t,r,n){tl(this,e,t=Le(this,t),r=r?Le(this,r):t,n);},getRange:function(e,t,r){var n=ce(this,Le(this,e),Le(this,t));return !1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(ge(this,e))return ue(this,e)},getLineNumber:function(e){return de(e)},getLineHandleVisualStart:function(e){return "number"==typeof e&&(e=ue(this,e)),$e(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return Le(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Oi(function(e,t,r){Po(this,Le(this,"number"==typeof e?me(e,t||0):e),null,r);}),setSelection:Oi(function(e,t,r){Po(this,Le(this,e),Le(this,t||e),r);}),extendSelection:Oi(function(e,t,r){Ho(this,Le(this,e),t&&Le(this,t),r);}),extendSelections:Oi(function(e,t){Fo(this,Me(this,e),t);}),extendSelectionsBy:Oi(function(e,t){Fo(this,Me(this,q(this.sel.ranges,e)),t);}),setSelections:Oi(function(e,t,r){var n=this;if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new ro(Le(n,e[o].anchor),Le(n,e[o].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),zo(this,no(i,t),r);}}),addSelection:Oi(function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new ro(Le(this,e),Le(this,t||e))),zo(this,no(n,n.length-1),r);}),getSelection:function(e){for(var t,r=this,n=this.sel.ranges,i=0;i<n.length;i++){var o=ce(r,n[i].from(),n[i].to());t=t?t.concat(o):o;}return !1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,r=[],n=this.sel.ranges,i=0;i<n.length;i++){var o=ce(t,n[i].from(),n[i].to());!1!==e&&(o=o.join(e||t.lineSeparator())),r[i]=o;}return r},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||"+input");},replaceSelections:Oi(function(e,t,r){for(var n=this,i=[],o=this.sel,l=0;l<o.ranges.length;l++){var s=o.ranges[l];i[l]={from:s.from(),to:s.to(),text:n.splitLines(e[l]),origin:r};}for(var a=t&&"end"!=t&&uo(this,i,t),u=i.length-1;u>=0;u--)$o(n,i[u]);a?Ro(this,a):this.cm&&ri(this.cm);}),undo:Oi(function(){Zo(this,"undo");}),redo:Oi(function(){Zo(this,"redo");}),undoSelection:Oi(function(){Zo(this,"undo",!0);}),redoSelection:Oi(function(){Zo(this,"redo",!0);}),setExtending:function(e){this.extend=e;},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r;return {undo:t,redo:r}},clearHistory:function(){this.history=new bo(this.history.maxGeneration);},markClean:function(){this.cleanGeneration=this.changeGeneration(!0);},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return {done:Wo(this.history.done),undone:Wo(this.history.undone)}},setHistory:function(e){var t=this.history=new bo(this.history.maxGeneration);t.done=Wo(e.done.slice(0),null,!0),t.undone=Wo(e.undone.slice(0),null,!0);},setGutterMarker:Oi(function(e,t,r){return ol(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={});return n[t]=r,!r&&ne(n)&&(e.gutterMarkers=null),!0})}),clearGutter:Oi(function(e){var t=this;this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&ol(t,r,"gutter",function(){return r.gutterMarkers[e]=null,ne(r.gutterMarkers)&&(r.gutterMarkers=null),!0});});}),lineInfo:function(e){var t;if("number"==typeof e){if(!ge(this,e))return null;if(t=e,!(e=ue(this,e)))return null}else if(null==(t=de(e)))return null;return {line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:Oi(function(e,t,r){return ol(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass";if(e[n]){if(L(r).test(e[n]))return !1;e[n]+=" "+r;}else e[n]=r;return !0})}),removeLineClass:Oi(function(e,t,r){return ol(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[n];if(!i)return !1;if(null==r)e[n]=null;else{var o=i.match(L(r));if(!o)return !1;var l=o.index+o[0].length;e[n]=i.slice(0,o.index)+(o.index&&l!=i.length?" ":"")+i.slice(l)||null;}return !0})}),addLineWidget:Oi(function(e,t,r){return cl(this,e,t,r)}),removeLineWidget:function(e){e.clear();},markText:function(e,t,r){return dl(this,Le(this,e),Le(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return dl(this,e=Le(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=ue(this,(e=Le(this,e)).line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker);}return t},findMarks:function(e,t,r){e=Le(this,e),t=Le(this,t);var n=[],i=e.line;return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans;if(l)for(var s=0;s<l.length;s++){var a=l[s];null!=a.to&&i==e.line&&e.ch>=a.to||null==a.from&&i!=e.line||null!=a.from&&i==t.line&&a.from>=t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker);}++i;}),n},getAllMarks:function(){var e=[];return this.iter(function(t){var r=t.markedSpans;if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker);}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length;return this.iter(function(i){var o=i.text.length+n;if(o>e)return t=e,!0;e-=o,++r;}),Le(this,me(r,t))},indexFromPos:function(e){var t=(e=Le(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+r;}),t},copy:function(e){var t=new wl(he(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new wl(he(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],ml(n,vl(this)),n},unlinkDoc:function(e){var t=this;if(e instanceof Os&&(e=e.doc),this.linked)for(var r=0;r<this.linked.length;++r){if(t.linked[r].doc==e){t.linked.splice(r,1),e.unlinkDoc(t),yl(vl(t));break}}if(e.history==this.history){var n=[e.id];go(e,function(e){return n.push(e.id)},!0),e.history=new bo(null),e.history.done=Wo(this.history.done,n),e.history.undone=Wo(this.history.undone,n);}},iterLinkedDocs:function(e){go(this,e);},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Et(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:Oi(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&yo(this.cm));})}),wl.prototype.eachLine=wl.prototype.iter;var xl=0;function Cl(e){var t=this;if(kl(t),!bt(t,e)&&!Yr(t.display,e)){St(e),l&&(xl=+new Date);var r=En(t,e,!0),n=e.dataTransfer.files;if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),s=0,a=function(e,n){if(!t.options.allowDropFileTypes||-1!=B(t.options.allowDropFileTypes,e.type)){var l=new FileReader;l.onload=Ti(t,function(){var e=l.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++s==i){var a={from:r=Le(t.doc,r),to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"};$o(t.doc,a),Ro(t.doc,io(r,oo(a)));}}),l.readAsText(e);}},u=0;u<i;++u)a(n[u],u);else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20);try{var c=e.dataTransfer.getData("Text");if(c){var h;if(t.state.draggingText&&!t.state.draggingText.copy&&(h=t.listSelections()),Bo(t.doc,io(r,r)),h)for(var f=0;f<h.length;++f)tl(t.doc,"",h[f].anchor,h[f].head,"drag");t.replaceSelection(c,"around","paste"),t.display.input.focus();}}catch(e){}}}}function Sl(e,t){if(l&&(!e.state.draggingText||+new Date-xl<100))Mt(t);else if(!bt(e,t)&&!Yr(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!f)){var r=O("img",null,null,"position: fixed; left: 0; top: 0;");r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",h&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),h&&r.parentNode.removeChild(r);}}function Ll(e,t){var r=En(e,t);if(r){var n=document.createDocumentFragment();zn(e,r,n),e.display.dragCursor||(e.display.dragCursor=O("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),N(e.display.dragCursor,n);}}function kl(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null);}function Ml(e){if(document.getElementsByClassName)for(var t=document.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror;n&&e(n);}}var Tl=!1;function Nl(){Tl||(Ol(),Tl=!0);}function Ol(){var e;gt(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ml(Al);},100));}),gt(window,"blur",function(){return Ml(jn)});}function Al(e){var t=e.display;t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize());}for(var Wl={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Dl=0;Dl<10;Dl++)Wl[Dl+48]=Wl[Dl+96]=String(Dl);for(var Hl=65;Hl<=90;Hl++)Wl[Hl]=String.fromCharCode(Hl);for(var Fl=1;Fl<=12;Fl++)Wl[Fl+111]=Wl[Fl+63235]="F"+Fl;var El={};function Pl(e){var t,r,n,i,o=e.split(/-(?!$)/);e=o[o.length-1];for(var l=0;l<o.length-1;l++){var s=o[l];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))t=!0;else if(/^(c|ctrl|control)$/i.test(s))r=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);n=!0;}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function Il(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if("..."==n){delete e[r];continue}for(var i=q(r.split(" "),Pl),o=0;o<i.length;o++){var l=void 0,s=void 0;o==i.length-1?(s=i.join(" "),l=n):(s=i.slice(0,o+1).join(" "),l="...");var a=t[s];if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l;}delete e[r];}for(var u in t)e[u]=t[u];return e}function Rl(e,t,r,n){var i=(t=Ul(t)).call?t.call(e,n):t[e];if(!1===i)return "nothing";if("..."===i)return "multi";if(null!=i&&r(i))return "handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Rl(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var l=Rl(e,t.fallthrough[o],r,n);if(l)return l}}}function zl(e){var t="string"==typeof e?e:Wl[e.keyCode];return "Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Bl(e,t,r){var n=e;return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(C?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(C?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Gl(e,t){if(h&&34==e.keyCode&&e.char)return !1;var r=Wl[e.keyCode];return null!=r&&!e.altGraphKey&&Bl(r,e,t)}function Ul(e){return "string"==typeof e?El[e]:e}function Vl(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&ye(o.from,$(n).to)<=0;){var l=n.pop();if(ye(l.from,o.from)<0){o.from=l.from;break}}n.push(o);}Mi(e,function(){for(var t=n.length-1;t>=0;t--)tl(e.doc,"",n[t].from,n[t].to,"+delete");ri(e);});}El.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},El.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},El.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},El.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},El["default"]=y?El.macDefault:El.pcDefault;var Kl={selectAll:Yo,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),V)},killLine:function(e){return Vl(e,function(t){if(t.empty()){var r=ue(e.doc,t.head.line).text.length;return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:me(t.head.line+1,0)}:{from:t.head,to:me(t.head.line,r)}}return {from:t.from(),to:t.to()}})},deleteLine:function(e){return Vl(e,function(t){return {from:me(t.from().line,0),to:Le(e.doc,me(t.to().line+1,0))}})},delLineLeft:function(e){return Vl(e,function(e){return {from:me(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return Vl(e,function(t){var r=e.charCoords(t.head,"div").top+5;return {from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){return Vl(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div");return {from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(me(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(me(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return jl(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return Yl(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return Xl(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},j)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:0,top:r},"div")},j)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div");return n.ch<e.getLine(n.line).search(/\S/)?Yl(e,t.head):n},j)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=R(e.getLine(o.line),o.ch,n);t.push(_(n-l%n));}e.replaceSelections(t);},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab");},transposeChars:function(e){return Mi(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=ue(e.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new me(i.line,i.ch-1)),i.ch>0)i=new me(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),me(i.line,i.ch-2),i,"+transpose");else if(i.line>e.doc.first){var l=ue(e.doc,i.line-1).text;l&&(i=new me(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),me(i.line-1,l.length-1),i,"+transpose"));}r.push(new ro(i,i));}e.setSelections(r);})},newlineAndIndent:function(e){return Mi(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input");t=e.listSelections();for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0);ri(e);})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function jl(e,t){var r=ue(e.doc,t),n=$e(r);return n!=r&&(t=de(n)),ft(!0,e,n,t,1)}function Xl(e,t){var r=ue(e.doc,t),n=qe(r);return n!=r&&(t=de(n)),ft(!0,e,r,t,-1)}function Yl(e,t){var r=jl(e,t.line),n=ue(e.doc,r.line),i=ut(n,e.doc.direction);if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch;return me(r.line,l?0:o,r.sticky)}return r}function _l(e,t,r){if("string"==typeof t&&!(t=Kl[t]))return !1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=U;}finally{e.display.shift=n,e.state.suppressEdits=!1;}return i}function $l(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=Rl(t,e.state.keyMaps[n],r,e);if(i)return i}return e.options.extraKeys&&Rl(t,e.options.extraKeys,r,e)||Rl(t,e.options.keyMap,r,e)}var ql=new z;function Zl(e,t,r,n){var i=e.state.keySeq;if(i){if(zl(t))return "handled";ql.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset());}),t=i+" "+t;}var o=$l(e,t,n);return "multi"==o&&(e.state.keySeq=t),"handled"==o&&Dr(e,"keyHandled",e,t,r),"handled"!=o&&"multi"!=o||(St(r),Gn(e)),i&&!o&&/\'$/.test(t)?(St(r),!0):!!o}function Ql(e,t){var r=Gl(t,!0);return !!r&&(t.shiftKey&&!e.state.keySeq?Zl(e,"Shift-"+r,t,function(t){return _l(e,t,!0)})||Zl(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return _l(e,t)}):Zl(e,r,t,function(t){return _l(e,t)}))}function Jl(e,t,r){return Zl(e,"'"+r+"'",t,function(t){return _l(e,t,!0)})}var es=null;function ts(e){var t=this;if(t.curOp.focus=D(),!bt(t,e)){l&&s<11&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var n=Ql(t,e);h&&(es=n?r:null,!n&&88==r&&!It&&(y?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||rs(t);}}function rs(e){var t=e.display.lineDiv;function r(e){18!=e.keyCode&&e.altKey||(M(t,"CodeMirror-crosshair"),mt(document,"keyup",r),mt(document,"mouseover",r));}H(t,"CodeMirror-crosshair"),gt(document,"keyup",r),gt(document,"mouseover",r);}function ns(e){16==e.keyCode&&(this.doc.sel.shift=!1),bt(this,e);}function is(e){var t=this;if(!(Yr(t.display,e)||bt(t,e)||e.ctrlKey&&!e.altKey||y&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(h&&r==es)return es=null,void St(e);if(!h||e.which&&!(e.which<10)||!Ql(t,e)){var i=String.fromCharCode(null==n?r:n);"\b"!=i&&(Jl(t,e,i)||t.display.input.onKeyPress(e));}}}var os,ls,ss=400,as=function(e,t,r){this.time=e,this.pos=t,this.button=r;};function us(e,t){var r=+new Date;return ls&&ls.compare(r,e,t)?(os=ls=null,"triple"):os&&os.compare(r,e,t)?(ls=new as(r,e,t),os=null,"double"):(os=new as(r,e,t),ls=null,"single")}function cs(e){var t=this,r=t.display;if(!(bt(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,Yr(r,e))a||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100));else if(!ys(t,e)){var n=En(t,e),i=Nt(e),o=n?us(n,i):"single";window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&hs(t,i,n,o,e)||(1==i?n?ds(t,n,o,e):Tt(e)==r.scroller&&St(e):2==i?(n&&Ho(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(S?bs(t,e):Vn(t)));}}function hs(e,t,r,n,i){var o="Click";return "double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),Zl(e,Bl(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,function(t){if("string"==typeof t&&(t=Kl[t]),!t)return !1;var n=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=U;}finally{e.state.suppressEdits=!1;}return n})}function fs(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=b?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line";}return (null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=y?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(y?r.altKey:r.ctrlKey)),i}function ds(e,t,r,n){l?setTimeout(P(Un,e),0):e.curOp.focus=D();var i,o=fs(e,r,n),s=e.doc.sel;e.options.dragDrop&&Wt&&!e.isReadOnly()&&"single"==r&&(i=s.contains(t))>-1&&(ye((i=s.ranges[i]).from(),t)<0||t.xRel>0)&&(ye(i.to(),t)>0||t.xRel<0)?ps(e,n,t,o):vs(e,n,t,o);}function ps(e,t,r,n){var i=e.display,o=!1,u=Ti(e,function(t){a&&(i.scroller.draggable=!1),e.state.draggingText=!1,mt(document,"mouseup",u),mt(document,"mousemove",c),mt(i.scroller,"dragstart",h),mt(i.scroller,"drop",u),o||(St(t),n.addNew||Ho(e.doc,r,null,null,n.extend),a||l&&9==s?setTimeout(function(){document.body.focus(),i.input.focus();},20):i.input.focus());}),c=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10;},h=function(){return o=!0};a&&(i.scroller.draggable=!0),e.state.draggingText=u,u.copy=!n.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),gt(document,"mouseup",u),gt(document,"mousemove",c),gt(i.scroller,"dragstart",h),gt(i.scroller,"drop",u),Vn(e),setTimeout(function(){return i.input.focus()},20);}function gs(e,t,r){if("char"==r)return new ro(t,t);if("word"==r)return e.findWordAt(t);if("line"==r)return new ro(me(t.line,0),Le(e.doc,me(t.line+1,0)));var n=r(e,t);return new ro(n.from,n.to)}function vs(e,t,r,n){var i=e.display,o=e.doc;St(t);var l,s,a=o.sel,u=a.ranges;if(n.addNew&&!n.extend?(s=o.sel.contains(r),l=s>-1?u[s]:new ro(r,r)):(l=o.sel.primary(),s=o.sel.primIndex),"rectangle"==n.unit)n.addNew||(l=new ro(r,r)),r=En(e,t,!0,!0),s=-1;else{var c=gs(e,r,n.unit);l=n.extend?Do(l,c.anchor,c.head,n.extend):c;}n.addNew?-1==s?(s=u.length,zo(o,no(u.concat([l]),s),{scroll:!1,origin:"*mouse"})):u.length>1&&u[s].empty()&&"char"==n.unit&&!n.extend?(zo(o,no(u.slice(0,s).concat(u.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),a=o.sel):Eo(o,s,l,K):(s=0,zo(o,new to([l],0),K),a=o.sel);var h=r;function f(t){if(0!=ye(h,t))if(h=t,"rectangle"==n.unit){for(var i=[],u=e.options.tabSize,c=R(ue(o,r.line).text,r.ch,u),f=R(ue(o,t.line).text,t.ch,u),d=Math.min(c,f),p=Math.max(c,f),g=Math.min(r.line,t.line),v=Math.min(e.lastLine(),Math.max(r.line,t.line));g<=v;g++){var m=ue(o,g).text,y=X(m,d,u);d==p?i.push(new ro(me(g,y),me(g,y))):m.length>y&&i.push(new ro(me(g,y),me(g,X(m,p,u))));}i.length||i.push(new ro(r,r)),zo(o,no(a.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t);}else{var b,w=l,x=gs(e,t,n.unit),C=w.anchor;ye(x.anchor,C)>0?(b=x.head,C=Ce(w.from(),x.anchor)):(b=x.anchor,C=xe(w.to(),x.head));var S=a.ranges.slice(0);S[s]=new ro(Le(o,C),b),zo(o,no(S,s),K);}}var d=i.wrapper.getBoundingClientRect(),p=0;function g(t){var r=++p,l=En(e,t,!0,"rectangle"==n.unit);if(l)if(0!=ye(l,h)){e.curOp.focus=D(),f(l);var s=_n(i,o);(l.line>=s.to||l.line<s.from)&&setTimeout(Ti(e,function(){p==r&&g(t);}),150);}else{var a=t.clientY<d.top?-20:t.clientY>d.bottom?20:0;a&&setTimeout(Ti(e,function(){p==r&&(i.scroller.scrollTop+=a,g(t));}),50);}}function v(t){e.state.selectingText=!1,p=Infinity,St(t),i.input.focus(),mt(document,"mousemove",m),mt(document,"mouseup",y),o.history.lastSelOrigin=null;}var m=Ti(e,function(e){Nt(e)?g(e):v(e);}),y=Ti(e,v);e.state.selectingText=y,gt(document,"mousemove",m),gt(document,"mouseup",y);}function ms(e,t,r,n){var i,o;try{i=t.clientX,o=t.clientY;}catch(t){return !1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return !1;n&&St(t);var l=e.display,s=l.lineDiv.getBoundingClientRect();if(o>s.bottom||!xt(e,r))return kt(t);o-=s.top-l.viewOffset;for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a];if(u&&u.getBoundingClientRect().right>=i)return yt(e,r,e,pe(e.doc,o),e.options.gutters[a],t),kt(t)}}function ys(e,t){return ms(e,t,"gutterClick",!0)}function bs(e,t){Yr(e.display,t)||ws(e,t)||bt(e,t,"contextmenu")||e.display.input.onContextMenu(t);}function ws(e,t){return !!xt(e,"gutterContextMenu")&&ms(e,t,"gutterContextMenu",!1)}function xs(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),vn(e);}as.prototype.compare=function(e,t,r){return this.time+ss>e&&0==ye(t,this.pos)&&r==this.button};var Cs={toString:function(){return "CodeMirror.Init"}},Ss={},Ls={};function ks(e){var t=e.optionHandlers;function r(r,n,i,o){e.defaults[r]=n,i&&(t[r]=o?function(e,t,r){r!=Cs&&i(e,t,r);}:i);}e.defineOption=r,e.Init=Cs,r("value","",function(e,t){return e.setValue(t)},!0),r("mode",null,function(e,t){e.doc.modeOption=t,co(e);},!0),r("indentUnit",2,co,!0),r("indentWithTabs",!1),r("smartIndent",!0),r("tabSize",4,function(e){ho(e),vn(e),Ai(e);},!0),r("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first;e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i);if(-1==o)break;i=o+t.length,r.push(me(n,o));}n++;});for(var i=r.length-1;i>=0;i--)tl(e.doc,t,r[i],me(r[i].line,r[i].ch+t.length));}}),r("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Cs&&e.refresh();}),r("specialCharPlaceholder",br,function(e){return e.refresh()},!0),r("electricChars",!0),r("inputStyle",m?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),r("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),r("rtlMoveVisually",!w),r("wholeLineUpdateBefore",!0),r("theme","default",function(e){xs(e),Ms(e);},!0),r("keyMap","default",function(e,t,r){var n=Ul(t),i=r!=Cs&&Ul(r);i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null);}),r("extraKeys",null),r("configureMouse",null),r("lineWrapping",!1,Ns,!0),r("gutters",[],function(e){$i(e.options),Ms(e);},!0),r("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?Dn(e.display)+"px":"0",e.refresh();},!0),r("coverGutterNextToScrollbar",!1,function(e){return di(e)},!0),r("scrollbarStyle","native",function(e){vi(e),di(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);},!0),r("lineNumbers",!1,function(e){$i(e.options),Ms(e);},!0),r("firstLineNumber",1,Ms,!0),r("lineNumberFormatter",function(e){return e},Ms,!0),r("showCursorWhenSelecting",!1,In,!0),r("resetSelectionOnContextMenu",!0),r("lineWiseCopyCut",!0),r("pasteLinesPerSelection",!0),r("readOnly",!1,function(e,t){"nocursor"==t&&(jn(e),e.display.input.blur()),e.display.input.readOnlyChanged(t);}),r("disableInput",!1,function(e,t){t||e.display.input.reset();},!0),r("dragDrop",!0,Ts),r("allowDropFileTypes",null),r("cursorBlinkRate",530),r("cursorScrollMargin",0),r("cursorHeight",1,In,!0),r("singleCursorHeightPerLine",!0,In,!0),r("workTime",100),r("workDelay",100),r("flattenSpans",!0,ho,!0),r("addModeClass",!1,ho,!0),r("pollInterval",100),r("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),r("historyEventDelay",1250),r("viewportMargin",10,function(e){return e.refresh()},!0),r("maxHighlightLength",1e4,ho,!0),r("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition();}),r("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),r("autofocus",null),r("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0);}function Ms(e){_i(e),Ai(e),$n(e);}function Ts(e,t,r){if(!t!=!(r&&r!=Cs)){var n=e.display.dragFunctions,i=t?gt:mt;i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop);}}function Ns(e){e.options.lineWrapping?(H(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(M(e.display.wrapper,"CodeMirror-wrap"),it(e)),Fn(e),Ai(e),vn(e),setTimeout(function(){return di(e)},100);}function Os(e,t){var r=this;if(!(this instanceof Os))return new Os(e,t);this.options=t=t?I(t):{},I(Ss,t,!1),$i(t);var n=t.value;"string"==typeof n&&(n=new wl(n,t.mode,null,t.lineSeparator,t.direction)),this.doc=n;var i=new Os.inputStyles[t.inputStyle](this),o=this.display=new ae(e,n,i);for(var u in o.wrapper.CodeMirror=this,_i(this),xs(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),vi(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new z,keySeq:null,specialChars:null},t.autofocus&&!m&&o.input.focus(),l&&s<11&&setTimeout(function(){return r.display.input.reset(!0)},20),As(this),Nl(),yi(this),this.curOp.forceUpdate=!0,vo(this,n),t.autofocus&&!m||this.hasFocus()?setTimeout(P(Kn,this),20):jn(this),Ls)Ls.hasOwnProperty(u)&&Ls[u](r,t[u],Cs);qn(this),t.finishInit&&t.finishInit(this);for(var c=0;c<Ws.length;++c)Ws[c](r);bi(this),a&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto");}function As(e){var t=e.display;gt(t.scroller,"mousedown",Ti(e,cs)),gt(t.scroller,"dblclick",l&&s<11?Ti(e,function(t){if(!bt(e,t)){var r=En(e,t);if(r&&!ys(e,t)&&!Yr(e.display,t)){St(t);var n=e.findWordAt(r);Ho(e.doc,n.anchor,n.head);}}}):function(t){return bt(e,t)||St(t)}),S||gt(t.scroller,"contextmenu",function(t){return bs(e,t)});var r,n={end:0};function i(){t.activeTouch&&(r=setTimeout(function(){return t.activeTouch=null},1e3),(n=t.activeTouch).end=+new Date);}function o(e){if(1!=e.touches.length)return !1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}function a(e,t){if(null==t.left)return !0;var r=t.left-e.left,n=t.top-e.top;return r*r+n*n>400}gt(t.scroller,"touchstart",function(i){if(!bt(e,i)&&!o(i)){t.input.ensurePolled(),clearTimeout(r);var l=+new Date;t.activeTouch={start:l,moved:!1,prev:l-n.end<=300?n:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY);}}),gt(t.scroller,"touchmove",function(){t.activeTouch&&(t.activeTouch.moved=!0);}),gt(t.scroller,"touchend",function(r){var n=t.activeTouch;if(n&&!Yr(t,r)&&null!=n.left&&!n.moved&&new Date-n.start<300){var o,l=e.coordsChar(t.activeTouch,"page");o=!n.prev||a(n,n.prev)?new ro(l,l):!n.prev.prev||a(n,n.prev.prev)?e.findWordAt(l):new ro(me(l.line,0),Le(e.doc,me(l.line+1,0))),e.setSelection(o.anchor,o.head),e.focus(),St(r);}i();}),gt(t.scroller,"touchcancel",i),gt(t.scroller,"scroll",function(){t.scroller.clientHeight&&(si(e,t.scroller.scrollTop),ui(e,t.scroller.scrollLeft,!0),yt(e,"scroll",e));}),gt(t.scroller,"mousewheel",function(t){return eo(e,t)}),gt(t.scroller,"DOMMouseScroll",function(t){return eo(e,t)}),gt(t.wrapper,"scroll",function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0}),t.dragFunctions={enter:function(t){bt(e,t)||Mt(t);},over:function(t){bt(e,t)||(Ll(e,t),Mt(t));},start:function(t){return Sl(e,t)},drop:Ti(e,Cl),leave:function(t){bt(e,t)||kl(e);}};var u=t.input.getField();gt(u,"keyup",function(t){return ns.call(e,t)}),gt(u,"keydown",Ti(e,ts)),gt(u,"keypress",Ti(e,is)),gt(u,"focus",function(t){return Kn(e,t)}),gt(u,"blur",function(t){return jn(e,t)});}Os.defaults=Ss,Os.optionHandlers=Ls;var Ws=[];function Ds(e,t,r,n){var i,o=e.doc;null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=rr(e,t).state:r="prev");var l=e.options.tabSize,s=ue(o,t),a=R(s.text,null,l);s.stateAfter&&(s.stateAfter=null);var u,c=s.text.match(/^\s*/)[0];if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==U||u>150)){if(!n)return;r="prev";}}else u=0,r="not";"prev"==r?u=t>o.first?R(ue(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u);var h="",f=0;if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)f+=l,h+="\t";if(f<u&&(h+=_(u-f)),h!=c)return tl(o,h,me(t,0),me(t,c.length),"+input"),s.stateAfter=null,!0;for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p];if(g.head.line==t&&g.head.ch<c.length){var v=me(t,c.length);Eo(o,p,new ro(v,v));break}}}Os.defineInitHook=function(e){return Ws.push(e)};var Hs=null;function Fs(e){Hs=e;}function Es(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n||(n=o.sel);var l,s=e.state.pasteIncoming||"paste"==i,a=Et(t),u=null;if(s&&n.ranges.length>1)if(Hs&&Hs.text.join("\n")==t){if(n.ranges.length%Hs.text.length==0){u=[];for(var c=0;c<Hs.text.length;c++)u.push(o.splitLines(Hs.text[c]));}}else a.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(u=q(a,function(e){return [e]}));for(var h=n.ranges.length-1;h>=0;h--){var f=n.ranges[h],d=f.from(),p=f.to();f.empty()&&(r&&r>0?d=me(d.line,d.ch-r):e.state.overwrite&&!s?p=me(p.line,Math.min(ue(o,p.line).text.length,p.ch+$(a).length)):Hs&&Hs.lineWise&&Hs.text.join("\n")==t&&(d=p=me(d.line,0))),l=e.curOp.updateInput;var g={from:d,to:p,text:u?u[h%u.length]:a,origin:i||(s?"paste":e.state.cutIncoming?"cut":"+input")};$o(e.doc,g),Dr(e,"inputRead",e,g);}t&&!s&&Is(e,t),ri(e),e.curOp.updateInput=l,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1;}function Ps(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text");if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||Mi(t,function(){return Es(t,r,0,null,"paste")}),!0}function Is(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n];if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){l=Ds(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(ue(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Ds(e,i.head.line,"smart"));l&&Dr(e,"electricInput",e,i.head.line);}}}function Rs(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:me(i,0),head:me(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head));}return {text:t,ranges:r}}function zs(e,t){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!!t);}function Bs(){var e=O("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=O("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return a?e.style.width="1000px":e.setAttribute("wrap","off"),g&&(e.style.border="1px solid black"),zs(e),t}function Gs(e){var t=e.optionHandlers,r=e.helpers={};e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus();},setOption:function(e,r){var n=this.options,i=n[e];n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&Ti(this,t[e])(this,r,i),yt(this,"optionChange",this,e));},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Ul(e));},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:Ni(function(t,r){var n=t.token?t:e.getMode(this.options,t);if(n.startState)throw new Error("Overlays may not be stateful.");Z(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,Ai(this);}),removeOverlay:Ni(function(e){for(var t=this,r=this.state.overlays,n=0;n<r.length;++n){var i=r[n].modeSpec;if(i==e||"string"==typeof e&&i.name==e)return r.splice(n,1),t.state.modeGen++,void Ai(t)}}),indentLine:Ni(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),ge(this.doc,e)&&Ds(this,e,t,r);}),indentSelection:Ni(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i];if(o.empty())o.head.line>n&&(Ds(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&ri(t));else{var l=o.from(),s=o.to(),a=Math.max(n,l.line);n=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1;for(var u=a;u<n;++u)Ds(t,u,e);var c=t.doc.sel.ranges;0==l.ch&&r.length==c.length&&c[i].from().ch>0&&Eo(t.doc,i,new ro(l,c[i].to()),V);}}}),getTokenAt:function(e,t){return sr(this,e,t)},getLineTokens:function(e,t){return sr(this,me(e),t,!0)},getTokenTypeAt:function(e){e=Le(this.doc,e);var t,r=tr(this,ue(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var l=n+i>>1;if((l?r[2*l-1]:0)>=o)i=l;else{if(!(r[2*l+1]<o)){t=r[2*l+2];break}n=l+1;}}var s=t?t.indexOf("overlay "):-1;return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var r=this.doc.mode;return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=this,i=[];if(!r.hasOwnProperty(t))return i;var o=r[t],l=this.getModeAt(e);if("string"==typeof l[t])o[l[t]]&&i.push(o[l[t]]);else if(l[t])for(var s=0;s<l[t].length;s++){var a=o[l[t][s]];a&&i.push(a);}else l.helperType&&o[l.helperType]?i.push(o[l.helperType]):o[l.name]&&i.push(o[l.name]);for(var u=0;u<o._global.length;u++){var c=o._global[u];c.pred(l,n)&&-1==B(i,c.val)&&i.push(c.val);}return i},getStateAfter:function(e,t){var r=this.doc;return rr(this,(e=Se(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary();return Cn(this,null==e?r.head:"object"==typeof e?Le(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return xn(this,Le(this.doc,e),t||"page")},coordsChar:function(e,t){return kn(this,(e=wn(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=wn(this,{top:e,left:0},t||"page").top,pe(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=ue(this.doc,e);}else n=e;return bn(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-rt(n):0)},defaultTextHeight:function(){return On(this.display)},defaultCharWidth:function(){return An(this.display)},getViewport:function(){return {from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display,l=(e=Cn(this,Le(this.doc,e))).bottom,s=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)l=e.top;else if("above"==n||"near"==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth);}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),r&&Jn(this,{left:s,top:l,right:s+t.offsetWidth,bottom:l+t.offsetHeight});},triggerOnKeyDown:Ni(ts),triggerOnKeyPress:Ni(is),triggerOnKeyUp:ns,triggerOnMouseDown:Ni(cs),execCommand:function(e){if(Kl.hasOwnProperty(e))return Kl[e].call(null,this)},triggerElectric:Ni(function(e){Is(this,e);}),findPosH:function(e,t,r,n){var i=this,o=1;t<0&&(o=-1,t=-t);for(var l=Le(this.doc,e),s=0;s<t&&!(l=Us(i.doc,l,o,r,n)).hitSide;++s);return l},moveH:Ni(function(e,t){var r=this;this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Us(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},j);}),deleteH:Ni(function(e,t){var r=this.doc.sel,n=this.doc;r.somethingSelected()?n.replaceSelection("",null,"+delete"):Vl(this,function(r){var i=Us(n,r.head,e,t,!1);return e<0?{from:i,to:r.head}:{from:r.head,to:i}});}),findPosV:function(e,t,r,n){var i=this,o=1,l=n;t<0&&(o=-1,t=-t);for(var s=Le(this.doc,e),a=0;a<t;++a){var u=Cn(i,s,"div");if(null==l?l=u.left:u.left=l,(s=Vs(i,u,o,r)).hitSide)break}return s},moveV:Ni(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected();if(n.extendSelectionsBy(function(l){if(o)return e<0?l.from():l.to();var s=Cn(r,l.head,"div");null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left);var a=Vs(r,s,e,t);return "page"==t&&l==n.sel.primary()&&ti(r,xn(r,a,"div").top-s.top),a},j),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l];}),findWordAt:function(e){var t=ue(this.doc,e.line).text,r=e.ch,n=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&n!=t.length||!r?++n:--r;for(var o=t.charAt(r),l=re(o,i)?function(e){return re(e,i)}:/\s/.test(o)?function(e){return /\s/.test(e)}:function(e){return !/\s/.test(e)&&!re(e)};r>0&&l(t.charAt(r-1));)--r;for(;n<t.length&&l(t.charAt(n));)++n;}return new ro(me(e.line,r),me(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?H(this.display.cursorDiv,"CodeMirror-overwrite"):M(this.display.cursorDiv,"CodeMirror-overwrite"),yt(this,"overwriteToggle",this,this.state.overwrite));},hasFocus:function(){return this.display.input.getField()==D()},isReadOnly:function(){return !(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:Ni(function(e,t){ni(this,e,t);}),getScrollInfo:function(){var e=this.display.scroller;return {left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Zr(this)-this.display.barHeight,width:e.scrollWidth-Zr(this)-this.display.barWidth,clientHeight:Jr(this),clientWidth:Qr(this)}},scrollIntoView:Ni(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:me(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?ii(this,e):li(this,e.from,e.to,e.margin);}),setSize:Ni(function(e,t){var r=this,n=function(e){return "number"==typeof e||/^\d+$/.test(String(e))?e+"px":e};null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&gn(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){Wi(r,i,"widget");break}++i;}),this.curOp.forceUpdate=!0,yt(this,"refresh",this);}),operation:function(e){return Mi(this,e)},startOperation:function(){return yi(this)},endOperation:function(){return bi(this)},refresh:Ni(function(){var e=this.display.cachedTextHeight;Ai(this),this.curOp.forceUpdate=!0,vn(this),ni(this,this.doc.scrollLeft,this.doc.scrollTop),Xi(this),(null==e||Math.abs(e-On(this.display))>.5)&&Fn(this),yt(this,"refresh",this);}),swapDoc:Ni(function(e){var t=this.doc;return t.cm=null,vo(this,e),vn(this),this.display.input.reset(),ni(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Dr(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Ct(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i;},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o});};}function Us(e,t,r,n,i){var o=t,l=r,s=ue(e,t.line);function a(){var n=t.line+r;return !(n<e.first||n>=e.first+e.size)&&(t=new me(n,t.ch,t.sticky),s=ue(e,n))}function u(n){var o;if(null==(o=i?dt(e.cm,s,t,r):ht(s,t,r))){if(n||!a())return !1;t=ft(i,e.cm,s,t.line,r);}else t=o;return !0}if("char"==n)u();else if("column"==n)u(!0);else if("word"==n||"group"==n)for(var c=null,h="group"==n,f=e.cm&&e.cm.getHelper(t,"wordChars"),d=!0;!(r<0)||u(!d);d=!1){var p=s.text.charAt(t.ch)||"\n",g=re(p,f)?"w":h&&"\n"==p?"n":!h||/\s/.test(p)?null:"p";if(!h||d||g||(g="s"),c&&c!=g){r<0&&(r=1,u(),t.sticky="after");break}if(g&&(c=g),r>0&&!u(!d))break}var v=jo(e,t,o,l,!0);return be(o,v)&&(v.hitSide=!0),v}function Vs(e,t,r,n){var i,o,l=e.doc,s=t.left;if("page"==n){var a=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),u=Math.max(a-.5*On(e.display),3);i=(r>0?t.bottom:t.top)+r*u;}else"line"==n&&(i=r>0?t.bottom+3:t.top-3);for(;(o=kn(e,s,i)).outside;){if(r<0?i<=0:i>=l.height){o.hitSide=!0;break}i+=5*r;}return o}var Ks=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new z,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null;};function js(e,t){var r=on(e,t.line);if(!r||r.hidden)return null;var n=ue(e.doc,t.line),i=tn(r,n,t.line),o=ut(n,e.doc.direction),l="left";o&&(l=st(o,t.ch)%2?"right":"left");var s=cn(i.map,t.ch,l);return s.offset="right"==s.collapse?s.end:s.start,s}function Xs(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return !0;return !1}function Ys(e,t){return t&&(e.bad=!0),e}function _s(e,t,r,n,i){var o="",l=!1,s=e.doc.lineSeparator();function a(e){return function(t){return t.id==e}}function u(){l&&(o+=s,l=!1);}function c(e){e&&(u(),o+=e);}function h(t){if(1==t.nodeType){var r=t.getAttribute("cm-text");if(null!=r)return void c(r||t.textContent.replace(/\u200b/g,""));var o,f=t.getAttribute("cm-marker");if(f){var d=e.findMarks(me(n,0),me(i+1,0),a(+f));return void(d.length&&(o=d[0].find())&&c(ce(e.doc,o.from,o.to).join(s)))}if("false"==t.getAttribute("contenteditable"))return;var p=/^(pre|div|p)$/i.test(t.nodeName);p&&u();for(var g=0;g<t.childNodes.length;g++)h(t.childNodes[g]);p&&(l=!0);}else 3==t.nodeType&&c(t.nodeValue);}for(;h(t),t!=r;)t=t.nextSibling;return o}function $s(e,t,r){var n;if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Ys(e.clipPos(me(e.display.viewTo-1)),!0);t=null,r=0;}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return qs(o,t,r)}}function qs(e,t,r){var n=e.text.firstChild,i=!1;if(!t||!W(n,t))return Ys(me(de(e.line),0),!0);if(t==n&&(i=!0,t=n.childNodes[r],r=0,!t)){var o=e.rest?$(e.rest):e.line;return Ys(me(de(o),o.text.length),i)}var l=3==t.nodeType?t:null,s=t;for(l||1!=t.childNodes.length||3!=t.firstChild.nodeType||(l=t.firstChild,r&&(r=l.nodeValue.length));s.parentNode!=n;)s=s.parentNode;var a=e.measure,u=a.maps;function c(t,r,n){for(var i=-1;i<(u?u.length:0);i++)for(var o=i<0?a.map:u[i],l=0;l<o.length;l+=3){var s=o[l+2];if(s==t||s==r){var c=de(i<0?e.line:e.rest[i]),h=o[l]+n;return (n<0||s!=t)&&(h=o[l+(n?1:0)]),me(c,h)}}}var h=c(l,s,r);if(h)return Ys(h,i);for(var f=s.nextSibling,d=l?l.nodeValue.length-r:0;f;f=f.nextSibling){if(h=c(f,f.firstChild,0))return Ys(me(h.line,h.ch-d),i);d+=f.textContent.length;}for(var p=s.previousSibling,g=r;p;p=p.previousSibling){if(h=c(p,p.firstChild,-1))return Ys(me(h.line,h.ch+g),i);g+=p.textContent.length;}}Ks.prototype.init=function(e){var t=this,r=this,n=r.cm,i=r.div=e.lineDiv;function o(e){if(!bt(n,e)){if(n.somethingSelected())Fs({lineWise:!1,text:n.getSelections()}),"cut"==e.type&&n.replaceSelection("",null,"cut");else{if(!n.options.lineWiseCopyCut)return;var t=Rs(n);Fs({lineWise:!0,text:t.text}),"cut"==e.type&&n.operation(function(){n.setSelections(t.ranges,0,V),n.replaceSelection("",null,"cut");});}if(e.clipboardData){e.clipboardData.clearData();var o=Hs.text.join("\n");if(e.clipboardData.setData("Text",o),e.clipboardData.getData("Text")==o)return void e.preventDefault()}var l=Bs(),s=l.firstChild;n.display.lineSpace.insertBefore(l,n.display.lineSpace.firstChild),s.value=Hs.text.join("\n");var a=document.activeElement;E(s),setTimeout(function(){n.display.lineSpace.removeChild(l),a.focus(),a==i&&r.showPrimarySelection();},50);}}zs(i,n.options.spellcheck),gt(i,"paste",function(e){bt(n,e)||Ps(e,n)||s<=11&&setTimeout(Ti(n,function(){return t.updateFromDOM()}),20);}),gt(i,"compositionstart",function(e){t.composing={data:e.data,done:!1};}),gt(i,"compositionupdate",function(e){t.composing||(t.composing={data:e.data,done:!1});}),gt(i,"compositionend",function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0);}),gt(i,"touchstart",function(){return r.forceCompositionEnd()}),gt(i,"input",function(){t.composing||t.readFromDOMSoon();}),gt(i,"copy",o),gt(i,"cut",o);},Ks.prototype.prepareSelection=function(){var e=Rn(this.cm,!1);return e.focus=this.cm.state.focused,e},Ks.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e));},Ks.prototype.showPrimarySelection=function(){var e=window.getSelection(),t=this.cm,n=t.doc.sel.primary(),i=n.from(),o=n.to();if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges();else{var l=$s(t,e.anchorNode,e.anchorOffset),s=$s(t,e.focusNode,e.focusOffset);if(!l||l.bad||!s||s.bad||0!=ye(Ce(l,s),i)||0!=ye(xe(l,s),o)){var a=t.display.view,u=i.line>=t.display.viewFrom&&js(t,i)||{node:a[0].measure.map[2],offset:0},c=o.line<t.display.viewTo&&js(t,o);if(!c){var h=a[a.length-1].measure,f=h.maps?h.maps[h.maps.length-1]:h.map;c={node:f[f.length-1],offset:f[f.length-2]-f[f.length-3]};}if(u&&c){var d,p=e.rangeCount&&e.getRangeAt(0);try{d=k(u.node,u.offset,c.offset,c.node);}catch(Ft){}d&&(!r&&t.state.focused?(e.collapse(u.node,u.offset),d.collapsed||(e.removeAllRanges(),e.addRange(d))):(e.removeAllRanges(),e.addRange(d)),p&&null==e.anchorNode?e.addRange(p):r&&this.startGracePeriod()),this.rememberSelection();}else e.removeAllRanges();}}},Ks.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0});},20);},Ks.prototype.showMultipleSelections=function(e){N(this.cm.display.cursorDiv,e.cursors),N(this.cm.display.selectionDiv,e.selection);},Ks.prototype.rememberSelection=function(){var e=window.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset;},Ks.prototype.selectionInEditor=function(){var e=window.getSelection();if(!e.rangeCount)return !1;var t=e.getRangeAt(0).commonAncestorContainer;return W(this.div,t)},Ks.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus());},Ks.prototype.blur=function(){this.div.blur();},Ks.prototype.getField=function(){return this.div},Ks.prototype.supportsTouch=function(){return !0},Ks.prototype.receivedFocus=function(){var e=this;function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t));}this.selectionInEditor()?this.pollSelection():Mi(this.cm,function(){return e.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,t);},Ks.prototype.selectionChanged=function(){var e=window.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ks.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm;if(v&&c&&this.cm.options.gutters.length&&Xs(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var r=$s(t,e.anchorNode,e.anchorOffset),n=$s(t,e.focusNode,e.focusOffset);r&&n&&Mi(t,function(){zo(t.doc,io(r,n),V),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0);});}}},Ks.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),l=o.from(),s=o.to();if(0==l.ch&&l.line>n.firstLine()&&(l=me(l.line-1,ue(n.doc,l.line-1).length)),s.ch==ue(n.doc,s.line).text.length&&s.line<n.lastLine()&&(s=me(s.line+1,0)),l.line<i.viewFrom||s.line>i.viewTo-1)return !1;l.line==i.viewFrom||0==(e=Pn(n,l.line))?(t=de(i.view[0].line),r=i.view[0].node):(t=de(i.view[e].line),r=i.view[e-1].node.nextSibling);var a,u,c=Pn(n,s.line);if(c==i.view.length-1?(a=i.viewTo-1,u=i.lineDiv.lastChild):(a=de(i.view[c+1].line)-1,u=i.view[c+1].node.previousSibling),!r)return !1;for(var h=n.doc.splitLines(_s(n,r,u,t,a)),f=ce(n.doc,me(t,0),me(a,ue(n.doc,a).text.length));h.length>1&&f.length>1;)if($(h)==$(f))h.pop(),f.pop(),a--;else{if(h[0]!=f[0])break;h.shift(),f.shift(),t++;}for(var d=0,p=0,g=h[0],v=f[0],m=Math.min(g.length,v.length);d<m&&g.charCodeAt(d)==v.charCodeAt(d);)++d;for(var y=$(h),b=$(f),w=Math.min(y.length-(1==h.length?d:0),b.length-(1==f.length?d:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;if(1==h.length&&1==f.length&&t==l.line)for(;d&&d>l.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)d--,p++;h[h.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),h[0]=h[0].slice(d).replace(/\u200b+$/,"");var x=me(t,d),C=me(a,f.length?$(f).length-p:0);return h.length>1||h[0]||ye(x,C)?(tl(n.doc,h,x,C,"+input"),!0):void 0},Ks.prototype.ensurePolled=function(){this.forceCompositionEnd();},Ks.prototype.reset=function(){this.forceCompositionEnd();},Ks.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus());},Ks.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null;}e.updateFromDOM();},80));},Ks.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||Mi(this.cm,function(){return Ai(e.cm)});},Ks.prototype.setUneditable=function(e){e.contentEditable="false";},Ks.prototype.onKeyPress=function(e){0!=e.charCode&&(e.preventDefault(),this.cm.isReadOnly()||Ti(this.cm,Es)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0));},Ks.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e);},Ks.prototype.onContextMenu=function(){},Ks.prototype.resetPosition=function(){},Ks.prototype.needsContentAttribute=!0;var Zs=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new z,this.hasSelection=!1,this.composing=null;};function Qs(e,t){if((t=t?I(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=D();t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body;}function n(){e.value=s.getValue();}var i;if(e.form&&(gt(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var o=e.form;i=o.submit;try{var l=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=l;};}catch(Ft){}}t.finishInit=function(t){t.save=n,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,n(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(mt(e.form,"submit",n),"function"==typeof e.form.submit&&(e.form.submit=i));};},e.style.display="none";var s=Os(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t);return s}function Js(e){e.off=mt,e.on=gt,e.wheelEventPixels=Ji,e.Doc=wl,e.splitLines=Et,e.countColumn=R,e.findColumn=X,e.isWordChar=te,e.Pass=U,e.signal=yt,e.Line=fr,e.changeEnd=oo,e.scrollbarModel=gi,e.Pos=me,e.cmpPos=ye,e.modes=Bt,e.mimeModes=Gt,e.resolveMode=Kt,e.getMode=jt,e.modeExtensions=Xt,e.extendMode=Yt,e.copyState=_t,e.startState=qt,e.innerMode=$t,e.commands=Kl,e.keyMap=El,e.keyName=Gl,e.isModifierKey=zl,e.lookupKey=Rl,e.normalizeKeyMap=Il,e.StringStream=Zt,e.SharedTextMarker=pl,e.TextMarker=fl,e.LineWidget=al,e.e_preventDefault=St,e.e_stopPropagation=Lt,e.e_stop=Mt,e.addClass=H,e.contains=W,e.rmClass=M,e.keyNames=Wl;}Zs.prototype.init=function(e){var t=this,r=this,n=this.cm,i=this.wrapper=Bs(),o=this.textarea=i.firstChild;function a(e){if(!bt(n,e)){if(n.somethingSelected())Fs({lineWise:!1,text:n.getSelections()});else{if(!n.options.lineWiseCopyCut)return;var t=Rs(n);Fs({lineWise:!0,text:t.text}),"cut"==e.type?n.setSelections(t.ranges,null,V):(r.prevInput="",o.value=t.text.join("\n"),E(o));}"cut"==e.type&&(n.state.cutIncoming=!0);}}e.wrapper.insertBefore(i,e.wrapper.firstChild),g&&(o.style.width="0px"),gt(o,"input",function(){l&&s>=9&&t.hasSelection&&(t.hasSelection=null),r.poll();}),gt(o,"paste",function(e){bt(n,e)||Ps(e,n)||(n.state.pasteIncoming=!0,r.fastPoll());}),gt(o,"cut",a),gt(o,"copy",a),gt(e.scroller,"paste",function(t){Yr(e,t)||bt(n,t)||(n.state.pasteIncoming=!0,r.focus());}),gt(e.lineSpace,"selectstart",function(t){Yr(e,t)||St(t);}),gt(o,"compositionstart",function(){var e=n.getCursor("from");r.composing&&r.composing.range.clear(),r.composing={start:e,range:n.markText(e,n.getCursor("to"),{className:"CodeMirror-composing"})};}),gt(o,"compositionend",function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null);});},Zs.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Rn(e);if(e.options.moveInputWithCursor){var i=Cn(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left));}return n},Zs.prototype.showSelection=function(e){var t=this.cm.display;N(t.cursorDiv,e.cursors),N(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px");},Zs.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var r=t.getSelection();this.textarea.value=r,t.state.focused&&E(this.textarea),l&&s>=9&&(this.hasSelection=r);}else e||(this.prevInput=this.textarea.value="",l&&s>=9&&(this.hasSelection=null));}},Zs.prototype.getField=function(){return this.textarea},Zs.prototype.supportsTouch=function(){return !1},Zs.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!m||D()!=this.textarea))try{this.textarea.focus();}catch(Ft){}},Zs.prototype.blur=function(){this.textarea.blur();},Zs.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0;},Zs.prototype.receivedFocus=function(){this.slowPoll();},Zs.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll();});},Zs.prototype.fastPoll=function(){var e=!1,t=this;function r(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,r));}t.pollingFast=!0,t.polling.set(20,r);},Zs.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput;if(this.contextMenuPending||!t.state.focused||Pt(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return !1;var i=r.value;if(i==n&&!t.somethingSelected())return !1;if(l&&s>=9&&this.hasSelection===i||y&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var a=0,u=Math.min(n.length,i.length);a<u&&n.charCodeAt(a)==i.charCodeAt(a);)++a;return Mi(t,function(){Es(t,i.slice(a),n.length-a,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}));}),!0},Zs.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1);},Zs.prototype.onKeyPress=function(){l&&s>=9&&(this.hasSelection=null),this.fastPoll();},Zs.prototype.onContextMenu=function(e){var t=this,r=t.cm,n=r.display,i=t.textarea,o=En(r,e),u=n.scroller.scrollTop;if(o&&!h){r.options.resetSelectionOnContextMenu&&-1==r.doc.sel.contains(o)&&Ti(r,zo)(r.doc,io(o),V);var c=i.style.cssText,f=t.wrapper.style.cssText;t.wrapper.style.cssText="position: absolute";var d,p=t.wrapper.getBoundingClientRect();if(i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-p.top-5)+"px; left: "+(e.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(l?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",a&&(d=window.scrollY),n.input.focus(),a&&window.scrollTo(null,d),n.input.reset(),r.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=!0,n.selForContextMenu=r.doc.sel,clearTimeout(n.detectingSelectAll),l&&s>=9&&v(),S){Mt(e);var g=function(){mt(window,"mouseup",g),setTimeout(m,20);};gt(window,"mouseup",g);}else setTimeout(m,50);}function v(){if(null!=i.selectionStart){var e=r.somethingSelected(),o="​"+(e?i.value:"");i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,n.selForContextMenu=r.doc.sel;}}function m(){if(t.contextMenuPending=!1,t.wrapper.style.cssText=f,i.style.cssText=c,l&&s<9&&n.scrollbars.setScrollTop(n.scroller.scrollTop=u),null!=i.selectionStart){(!l||l&&s<9)&&v();var e=0,o=function(){n.selForContextMenu==r.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?Ti(r,Yo)(r):e++<10?n.detectingSelectAll=setTimeout(o,500):(n.selForContextMenu=null,n.input.reset());};n.detectingSelectAll=setTimeout(o,200);}}},Zs.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e;},Zs.prototype.setUneditable=function(){},Zs.prototype.needsContentAttribute=!1,ks(Os),Gs(Os);var ea="iter insert remove copy getEditor constructor".split(" ");for(var ta in wl.prototype)wl.prototype.hasOwnProperty(ta)&&B(ea,ta)<0&&(Os.prototype[ta]=function(e){return function(){return e.apply(this.doc,arguments)}}(wl.prototype[ta]));return Ct(wl),Os.inputStyles={textarea:Zs,contenteditable:Ks},Os.defineMode=function(e){Os.defaults.mode||"null"==e||(Os.defaults.mode=e),Ut.apply(this,arguments);},Os.defineMIME=Vt,Os.defineMode("null",function(){return {token:function(e){return e.skipToEnd()}}}),Os.defineMIME("text/plain","null"),Os.defineExtension=function(e,t){Os.prototype[e]=t;},Os.defineDocExtension=function(e,t){wl.prototype[e]=t;},Os.fromTextArea=Qs,Js(Os),Os.version="5.28.0",Os});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror);}(function(e){function t(e,t,r){return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}e.defineMode("javascript",function(r,n){var a,i,o=r.indentUnit,c=n.statementIndent,u=n.jsonld,l=n.json||u,s=n.typescript,f=n.wordCharacters||/[\w$\xa1-\uffff]/,d=function(){function e(e){return {type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={"if":e("if"),"while":t,"with":t,"else":r,"do":r,"try":r,"finally":r,"return":n,"break":n,"continue":n,"new":e("new"),"delete":n,"throw":n,"debugger":n,"var":e("var"),"const":e("var"),"let":e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":a,"typeof":a,"instanceof":a,"true":i,"false":i,"null":i,undefined:i,NaN:i,Infinity:i,"this":e("this"),"class":e("class"),"super":e("atom"),yield:n,"export":e("export"),"import":e("import"),"extends":n,await:n};if(s){var c={type:"variable",style:"type"},u={"interface":e("class"),"implements":n,namespace:n,module:e("module"),"enum":e("module"),"public":e("modifier"),"private":e("modifier"),"protected":e("modifier"),abstract:e("modifier"),string:c,number:c,boolean:c,any:c};for(var l in u)o[l]=u[l];}return o}(),p=/[+\-*&%=<>!?|~^@]/,m=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function v(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1);}r=!r&&"\\"==t;}}function y(e,t,r){return a=e,i=r,t}function k(e,r){var n=e.next();if('"'==n||"'"==n)return r.tokenize=b(n),r.tokenize(e,r);if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return y("number","number");if("."==n&&e.match(".."))return y("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return y(n);if("="==n&&e.eat(">"))return y("=>","operator");if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),y("number","number");if("0"==n&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),y("number","number");if("0"==n&&e.eat(/b/i))return e.eatWhile(/[01]/i),y("number","number");if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),y("number","number");if("/"==n)return e.eat("*")?(r.tokenize=x,x(e,r)):e.eat("/")?(e.skipToEnd(),y("comment","comment")):t(e,r,1)?(v(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),y("regexp","string-2")):(e.eatWhile(p),y("operator","operator",e.current()));if("`"==n)return r.tokenize=h,h(e,r);if("#"==n)return e.skipToEnd(),y("error","error");if(p.test(n))return ">"==n&&r.lexical&&">"==r.lexical.type||e.eatWhile(p),y("operator","operator",e.current());if(f.test(n)){e.eatWhile(f);var a=e.current();if("."!=r.lastType){if(d.propertyIsEnumerable(a)){var i=d[a];return y(i.type,i.style,a)}if("async"==a&&e.match(/^\s*[\(\w]/,!1))return y("async","keyword",a)}return y("variable","variable",a)}}function b(e){return function(t,r){var n,a=!1;if(u&&"@"==t.peek()&&t.match(m))return r.tokenize=k,y("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||a);)a=!a&&"\\"==n;return a||(r.tokenize=k),y("string","string")}}function x(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=k;break}n="*"==r;}return y("comment","comment")}function h(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=k;break}n=!n&&"\\"==r;}return y("quasi","string-2",e.current())}var w="([{}])";function g(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(s){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index);}for(var a=0,i=!1,o=r-1;o>=0;--o){var c=e.string.charAt(o),u=w.indexOf(c);if(u>=0&&u<3){if(!a){++o;break}if(0==--a){"("==c&&(i=!0);break}}else if(u>=3&&u<6)++a;else if(f.test(c))i=!0;else{if(/["'\/]/.test(c))return;if(i&&!a){++o;break}}}i&&!a&&(t.fatArrowAt=o);}}var j={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0};function M(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n);}function V(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return !0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return !0}function E(e,t,r,n,a){var i=e.cc;for(I.state=e,I.stream=a,I.marked=null,I.cc=i,I.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){if((i.length?i.pop():l?N:S)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return I.marked?I.marked:"variable"==r&&V(e,n)?"variable-2":t}}}var I={state:null,column:null,marked:null,cc:null};function z(){for(var e=arguments.length-1;e>=0;e--)I.cc.push(arguments[e]);}function A(){return z.apply(null,arguments),!0}function T(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return !0;return !1}var r=I.state;if(I.marked="def",r.context){if(t(r.localVars))return;r.localVars={name:e,next:r.localVars};}else{if(t(r.globalVars))return;n.globalVars&&(r.globalVars={name:e,next:r.globalVars});}}var $={name:"this",next:{name:"arguments"}};function q(){I.state.context={prev:I.state.context,vars:I.state.localVars},I.state.localVars=$;}function C(){I.state.localVars=I.state.context.vars,I.state.context=I.state.context.prev;}function O(e,t){var r=function(){var r=I.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new M(n,I.stream.column(),e,null,r.lexical,t);};return r.lex=!0,r}function W(){var e=I.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev);}function P(e){function t(r){return r==e?A():";"==e?z():A(t)}return t}function S(e,t){return "var"==e?A(O("vardef",t.length),pe,P(";"),W):"keyword a"==e?A(O("form"),H,S,W):"keyword b"==e?A(O("form"),S,W):"{"==e?A(O("}"),oe,W):";"==e?A():"if"==e?("else"==I.state.lexical.info&&I.state.cc[I.state.cc.length-1]==W&&I.state.cc.pop()(),A(O("form"),H,S,W,be)):"function"==e?A(Me):"for"==e?A(O("form"),xe,S,W):"variable"==e?s&&"type"==t?(I.marked="keyword",A(ue,P("operator"),ue,P(";"))):A(O("stat"),_):"switch"==e?A(O("form"),H,P("{"),O("}","switch"),oe,W,W):"case"==e?A(N,P(":")):"default"==e?A(P(":")):"catch"==e?A(O("form"),q,P("("),Ve,P(")"),S,W,C):"class"==e?A(O("form"),Ie,W):"export"==e?A(O("stat"),$e,W):"import"==e?A(O("stat"),Ce,W):"module"==e?A(O("form"),me,P("{"),O("}"),oe,W,W):"async"==e?A(S):"@"==t?A(N,S):z(O("stat"),N,P(";"),W)}function N(e){return U(e,!1)}function B(e){return U(e,!0)}function H(e){return "("!=e?z():A(O(")"),N,P(")"),W)}function U(e,t){if(I.state.fatArrowAt==I.stream.start){var r=t?R:Q;if("("==e)return A(q,O(")"),ae(me,")"),W,P("=>"),r,C);if("variable"==e)return z(q,me,P("=>"),r,C)}var n=t?J:G;return j.hasOwnProperty(e)?A(n):"function"==e?A(Me,n):"class"==e?A(O("form"),Ee,W):"keyword c"==e||"async"==e?A(t?F:D):"("==e?A(O(")"),D,P(")"),W,n):"operator"==e||"spread"==e?A(t?B:N):"["==e?A(O("]"),Ne,W,n):"{"==e?ie(te,"}",null,n):"quasi"==e?z(K,n):"new"==e?A(X(t)):A()}function D(e){return e.match(/[;\}\)\],]/)?z():z(N)}function F(e){return e.match(/[;\}\)\],]/)?z():z(B)}function G(e,t){return ","==e?A(N):J(e,t,!1)}function J(e,t,r){var n=0==r?G:J,a=0==r?N:B;return "=>"==e?A(q,r?R:Q,C):"operator"==e?/\+\+|--/.test(t)?A(n):"?"==t?A(N,P(":"),a):A(a):"quasi"==e?z(K,n):";"!=e?"("==e?ie(B,")","call",n):"."==e?A(ee,n):"["==e?A(O("]"),D,P("]"),W,n):s&&"as"==t?(I.marked="keyword",A(ue,n)):void 0:void 0}function K(e,t){return "quasi"!=e?z():"${"!=t.slice(t.length-2)?A(K):A(N,L)}function L(e){if("}"==e)return I.marked="string-2",I.state.tokenize=h,A(K)}function Q(e){return g(I.stream,I.state),z("{"==e?S:N)}function R(e){return g(I.stream,I.state),z("{"==e?S:B)}function X(e){return function(t){return "."==t?A(e?Z:Y):z(e?B:N)}}function Y(e,t){if("target"==t)return I.marked="keyword",A(G)}function Z(e,t){if("target"==t)return I.marked="keyword",A(J)}function _(e){return ":"==e?A(W,S):z(G,P(";"),W)}function ee(e){if("variable"==e)return I.marked="property",A()}function te(e,t){return "async"==e?(I.marked="property",A(te)):"variable"==e||"keyword"==I.style?(I.marked="property",A("get"==t||"set"==t?re:ne)):"number"==e||"string"==e?(I.marked=u?"property":I.style+" property",A(ne)):"jsonld-keyword"==e?A(ne):"modifier"==e?A(te):"["==e?A(N,P("]"),ne):"spread"==e?A(N,ne):":"==e?z(ne):void 0}function re(e){return "variable"!=e?z(ne):(I.marked="property",A(Me))}function ne(e){return ":"==e?A(B):"("==e?z(Me):void 0}function ae(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=I.state.lexical;return "call"==o.info&&(o.pos=(o.pos||0)+1),A(function(r,n){return r==t||n==t?z():z(e)},n)}return a==t||i==t?A():A(P(t))}return function(r,a){return r==t||a==t?A():z(e,n)}}function ie(e,t,r){for(var n=3;n<arguments.length;n++)I.cc.push(arguments[n]);return A(O(t,r),ae(e,t),W)}function oe(e){return "}"==e?A():z(S,oe)}function ce(e,t){if(s){if(":"==e)return A(ue);if("?"==t)return A(ce)}}function ue(e){return "variable"==e?(I.marked="type",A(de)):"string"==e||"number"==e||"atom"==e?A(de):"{"==e?A(O("}"),ae(se,"}",",;"),W,de):"("==e?A(ae(fe,")"),le):void 0}function le(e){if("=>"==e)return A(ue)}function se(e,t){return "variable"==e||"keyword"==I.style?(I.marked="property",A(se)):"?"==t?A(se):":"==e?A(ue):"["==e?A(N,ce,P("]"),se):void 0}function fe(e){return "variable"==e?A(fe):":"==e?A(ue):void 0}function de(e,t){return "<"==t?A(O(">"),ae(ue,">"),W,de):"|"==t||"."==e?A(ue):"["==e?A(P("]"),de):"extends"==t?A(ue):void 0}function pe(){return z(me,ce,ye,ke)}function me(e,t){return "modifier"==e?A(me):"variable"==e?(T(t),A()):"spread"==e?A(me):"["==e?ie(me,"]"):"{"==e?ie(ve,"}"):void 0}function ve(e,t){return "variable"!=e||I.stream.match(/^\s*:/,!1)?("variable"==e&&(I.marked="property"),"spread"==e?A(me):"}"==e?z():A(P(":"),me,ye)):(T(t),A(ye))}function ye(e,t){if("="==t)return A(B)}function ke(e){if(","==e)return A(pe)}function be(e,t){if("keyword b"==e&&"else"==t)return A(O("form","else"),S,W)}function xe(e){if("("==e)return A(O(")"),he,P(")"),W)}function he(e){return "var"==e?A(pe,P(";"),ge):";"==e?A(ge):"variable"==e?A(we):z(N,P(";"),ge)}function we(e,t){return "in"==t||"of"==t?(I.marked="keyword",A(N)):A(G,ge)}function ge(e,t){return ";"==e?A(je):"in"==t||"of"==t?(I.marked="keyword",A(N)):z(N,P(";"),je)}function je(e){")"!=e&&A(N);}function Me(e,t){return "*"==t?(I.marked="keyword",A(Me)):"variable"==e?(T(t),A(Me)):"("==e?A(q,O(")"),ae(Ve,")"),W,ce,S,C):s&&"<"==t?A(O(">"),ae(ue,">"),W,Me):void 0}function Ve(e){return "spread"==e?A(Ve):z(me,ce,ye)}function Ee(e,t){return "variable"==e?Ie(e,t):ze(e,t)}function Ie(e,t){if("variable"==e)return T(t),A(ze)}function ze(e,t){return "<"==t?A(O(">"),ae(ue,">"),W,ze):"extends"==t||"implements"==t||s&&","==e?A(s?ue:N,ze):"{"==e?A(O("}"),Ae,W):void 0}function Ae(e,t){return "variable"==e||"keyword"==I.style?("async"==t||"static"==t||"get"==t||"set"==t||s&&("public"==t||"private"==t||"protected"==t||"readonly"==t||"abstract"==t))&&I.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(I.marked="keyword",A(Ae)):(I.marked="property",A(s?Te:Me,Ae)):"["==e?A(N,P("]"),s?Te:Me,Ae):"*"==t?(I.marked="keyword",A(Ae)):";"==e?A(Ae):"}"==e?A():"@"==t?A(N,Ae):void 0}function Te(e,t){return "?"==t?A(Te):":"==e?A(ue,ye):"="==t?A(B):z(Me)}function $e(e,t){return "*"==t?(I.marked="keyword",A(Se,P(";"))):"default"==t?(I.marked="keyword",A(N,P(";"))):"{"==e?A(ae(qe,"}"),Se,P(";")):z(S)}function qe(e,t){return "as"==t?(I.marked="keyword",A(P("variable"))):"variable"==e?z(B,qe):void 0}function Ce(e){return "string"==e?A():z(Oe,We,Se)}function Oe(e,t){return "{"==e?ie(Oe,"}"):("variable"==e&&T(t),"*"==t&&(I.marked="keyword"),A(Pe))}function We(e){if(","==e)return A(Oe,We)}function Pe(e,t){if("as"==t)return I.marked="keyword",A(Oe)}function Se(e,t){if("from"==t)return I.marked="keyword",A(N)}function Ne(e){return "]"==e?A():z(ae(B,"]"))}function Be(e,t){return "operator"==e.lastType||","==e.lastType||p.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}return W.lex=!0,{startState:function(e){var t={tokenize:k,lastType:"sof",cc:[],lexical:new M((e||0)-o,0,"block",!1),localVars:n.localVars,context:n.localVars&&{vars:n.localVars},indented:e||0};return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),g(e,t)),t.tokenize!=x&&e.eatSpace())return null;var r=t.tokenize(e,t);return "comment"==a?r:(t.lastType="operator"!=a||"++"!=i&&"--"!=i?a:"incdec",E(t,r,a,i,e))},indent:function(t,r){if(t.tokenize==x)return e.Pass;if(t.tokenize!=k)return 0;var a,i=r&&r.charAt(0),u=t.lexical;if(!/^\s*else\b/.test(r))for(var l=t.cc.length-1;l>=0;--l){var s=t.cc[l];if(s==W)u=u.prev;else if(s!=be)break}for(;("stat"==u.type||"form"==u.type)&&("}"==i||(a=t.cc[t.cc.length-1])&&(a==G||a==J)&&!/^[,\.=+\-*:?[\(]/.test(r));)u=u.prev;c&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var f=u.type,d=i==f;return "vardef"==f?u.indented+("operator"==t.lastType||","==t.lastType?u.info+1:0):"form"==f&&"{"==i?u.indented:"form"==f?u.indented+o:"stat"==f?u.indented+(Be(t,r)?c||o:0):"switch"!=u.info||d||0==n.doubleIndentSwitch?u.align?u.column+(d?0:1):u.indented+(d?0:o):u.indented+(/^(?:case|default)\b/.test(r)?o:2*o)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:l?null:"/*",blockCommentEnd:l?null:"*/",lineComment:l?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:l?"json":"javascript",jsonldMode:u,jsonMode:l,expressionAllowed:t,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=N&&t!=B||e.cc.pop();}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0});});

/*!
 * viewport-units-buggyfill v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */
!function(){!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfill=t();}(this,function(){var e,t,n,i,r,o=!1,a=window.navigator.userAgent,s=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,c=/(https?:)?\/\//,u=[].forEach,d=/MSIE [0-9]\./i.test(a),l=/MSIE [0-8]\./i.test(a),f=a.indexOf("Opera Mini")>-1,h=/(iPhone|iPod|iPad).+AppleWebKit/i.test(a)&&((r=a.match(/OS (\d+)/))&&r.length>1&&parseInt(r[1])<10),p=a.indexOf(" Android ")>-1&&a.indexOf("Version/")>-1&&parseFloat((a.match("Android ([0-9.]+)")||[])[1])<=4.4;d||(d=!!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));try{new w("test");}catch(P){var w=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:undefined},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};w.prototype=window.Event.prototype,window.CustomEvent=w;}function v(e,t){var n;return function(){var i=this,r=arguments,o=function(){e.apply(i,r);};clearTimeout(n),n=setTimeout(o,t);}}function m(){try{return window.self!==window.top}catch(P){return !0}}function g(t){if(!o){if(!0===t&&(t={force:!0}),(e=t||{}).isMobileSafari=h,e.isBadStockAndroid=p,!e.ignoreVmax||e.force||l||(d=!1),l||!e.force&&!h&&!d&&!p&&!f&&(!e.hacks||!e.hacks.required(e)))return window.console&&l&&console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),{init:function(){}};window.dispatchEvent(new w("viewport-units-buggyfill-init")),e.hacks&&e.hacks.initialize(e),o=!0,(i=document.createElement("style")).id="patched-viewport",document[e.appendToBody?"body":"head"].appendChild(i),S(function(){var t=v(b,e.refreshDebounceWait||100);window.addEventListener("orientationchange",t,!0),window.addEventListener("pageshow",t,!0),(e.force||d||m())&&(window.addEventListener("resize",t,!0),e._listeningToResize=!0),e.hacks&&e.hacks.initializeEvents(e,b,t),b();});}}function y(){i.textContent=k(),i.parentNode.appendChild(i),window.dispatchEvent(new w("viewport-units-buggyfill-style"));}function b(){o&&(E(),setTimeout(function(){y();},1));}function x(e){try{if(!e.cssRules)return}catch(P){if("SecurityError"!==P.name)throw P;return}for(var t=[],n=0;n<e.cssRules.length;n++){var i=e.cssRules[n];t.push(i);}return t}function E(){return n=[],u.call(document.styleSheets,function(e){var t=x(e);t&&"patched-viewport"!==e.ownerNode.id&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(e.media&&e.media.mediaText&&window.matchMedia&&!window.matchMedia(e.media.mediaText).matches||u.call(t,T));}),n}function T(t){if(7===t.type){var i;try{i=t.cssText;}catch(P){return}return s.lastIndex=0,void(s.test(i)&&!c.test(i)&&(n.push([t,null,i]),e.hacks&&e.hacks.findDeclarations(n,t,null,i)))}if(t.style)u.call(t.style,function(i){var r=t.style.getPropertyValue(i);t.style.getPropertyPriority(i)&&(r+=" !important"),s.lastIndex=0,s.test(r)&&(n.push([t,i,r]),e.hacks&&e.hacks.findDeclarations(n,t,i,r));});else{if(!t.cssRules)return;u.call(t.cssRules,function(e){T(e);});}}function k(){t=M();var e,i,r=[],o=[];return n.forEach(function(t){var n=R.apply(null,t),a=n.selector.length?n.selector.join(" {\n")+" {\n":"",s=new Array(n.selector.length+1).join("\n}");if(!a||a!==e)return o.length&&(r.push(e+o.join("\n")+i),o.length=0),void(a?(e=a,i=s,o.push(n.content)):(r.push(n.content),e=null,i=null));a&&!e&&(e=a,i=s),o.push(n.content);}),o.length&&r.push(e+o.join("\n")+i),f&&r.push("* { content: normal !important; }"),r.join("\n\n")}function R(t,n,i){var r,o=[];r=i.replace(s,C),e.hacks&&(r=e.hacks.overwriteDeclaration(t,n,r)),n&&(o.push(t.selectorText),r=n+": "+r+";");for(var a=t.parentRule;a;)a.media?o.unshift("@media "+a.media.mediaText):a.conditionText&&o.unshift("@supports "+a.conditionText),a=a.parentRule;return {selector:o,content:r}}function C(e,n,i){var r=t[i];return parseFloat(n)/100*r+"px"}function M(){var e=window.innerHeight,t=window.innerWidth;return {vh:e,vw:t,vmax:Math.max(t,e),vmin:Math.min(t,e)}}function S(e){var t=0,n=function(){--t||e();};u.call(document.styleSheets,function(e){e.href&&A(e.href)!==A(location.href)&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(t++,O(e.ownerNode,n));}),t||e();}function A(e){return e.slice(0,e.indexOf("/",e.indexOf("://")+3))}function O(e,t){I(e.href,function(){var n=document.createElement("style");n.media=e.media,n.setAttribute("data-href",e.href),n.textContent=this.responseText,e.parentNode.replaceChild(n,e),t();},t);}function I(e,t,n){var i=new XMLHttpRequest;if("withCredentials"in i)i.open("GET",e,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");(i=new XDomainRequest).open("GET",e);}return i.onload=t,i.onerror=n,i.send(),i}return {version:"0.6.1",findProperties:E,getCss:k,init:g,refresh:b}});}();

$(document).ready(function() {
	var _base = this;
	var _htmlPath = 'html/';
	var _htmlExtension = '.html';
	var _jsPath = 'js/';
	var _jsExtension = '.js';
	var _defaultConfig = {
		defaultHash : 'overview'
	};
	var _openModals = [ ];
	var _ajaxContentRequest;
	var _ajaxContentRequestTimeoutId;
	var _dataAttrNavigation = "data-navigation";
	var _dataAttrTabKey = "data-tab-key";
	var _dataAttrTabValue = "data-tab-value";
	var _dataAttrExpanderKey = "data-expander-key";
	var _dataAttrExpanderValue = "data-expander-value";
	var _dataAttrRadio = "data-radio";
	var _dataAttrModal = "data-modal";
	var _dataAttrInputNumeric = "data-input-numeric";
	var _expanderExpandDuration = 230;
	var _tabsFadeDuration = 230;
	var _strActive = 'active';
	var _finalConfig;
	var _defaultHash;
	var _hasherPrepareHash = '!';
	var _hasherSeparator = '/';
	var _navigationContentNavigation;
	var _navButton;
	var _navBackdrop;
	var _nav;
	var _body;
	var _window;
	var _header;
	var _content;
	var _footer;
	var _loading;
	var _contentNavigationScrollTimeout;
	var _mainNavigationItems;
	var _debug = { };
	var _debugModal;
	var _debugModalContent;
	var _fourZeroFourPath = '../_framework/html/404' + _htmlExtension;
	var _fourZeroFourFaces = [ 
		" ಠ_ಠ ", "(＃｀д´)ﾉ", "ლ(ಠ_ಠლ)", "(；￣Д￣）", "¯\\_(ツ)_/¯", "ᕕ( ͡° ͜ʖ ͡° )ᕗ", "(☞ﾟヮﾟ)☞    ☜(ﾟヮﾟ☜)", "͡° ͜ʖ ͡°", "ヽ( ಠ益ಠ )ﾉ", " (╯°□°）╯︵ ┻━┻", "(ಠ_ಠ)",
		"(`･Д･)ノ=☆", "★≡≡＼（`△´＼）", "（◞‸◟）", "(／‵Д′)／~ ╧╧", "┻━┻ ︵﻿ ¯\\_༼ᴼل͜ᴼ༽_/¯ ︵ ┻━┻", "¯\\_(⊙_ʖ⊙)_/¯", "┐(´～｀)┌", "乁( ⁰͡  Ĺ̯ ⁰͡ ) ㄏ", "(；・∀・)", "(^◇^；)"
	];
	var _mainScrollElement = $('body').overlayScrollbars({
		nativeScrollbarsOverlaid : {
			initialize : false
		}
	}).overlayScrollbars();
	
	function showLoading() {
		if(_mainScrollElement)
			_mainScrollElement.sleep(); //put to sleep
		_loading.addClass(_strActive);
		_content.css('opacity', 0); 
	}
	
	function hideLoading() {
		if(_mainScrollElement)
			_mainScrollElement.update(); //wakeup from sleeping
		if(_nav.overlayScrollbars()) {
			_nav.overlayScrollbars().options('overflowBehavior.x', 'scroll');
			_nav.overlayScrollbars().update(true); //FF fix for fixed elements.
		}
		if(!_header.hasClass('shrinked') && _nav.overlayScrollbars()) {
			_nav.overlayScrollbars().options('overflowBehavior.x', 'hidden');
		}
		_loading.removeClass(_strActive);
		_content.css('opacity', 1); 
	}
	
	function setBodyScrollbars() {
		if(_mainScrollElement) {
			_mainScrollElement.options({
				callbacks : { 
					onScroll : function() { 
						updateContentNavigation();
					},
					onHostSizeChanged : function() {
						updateContentNavigation();
					},
					onContentSizeChanged : function() {
						updateContentNavigation();
					}
				}
			});
		}
		else {
			_window.off('scroll', updateContentNavigation).on('scroll', updateContentNavigation);
			_window.off('resize', updateContentNavigation).on('resize', updateContentNavigation);
		}
	}

	function onHashChange(newHash, oldHash){
		if(_ajaxContentRequest)
			_ajaxContentRequest.abort();
		if(_ajaxContentRequestTimeoutId)
			clearTimeout(_ajaxContentRequestTimeoutId);
		
		newHash = newHash.toLowerCase();
		oldHash = oldHash !== undefined ? oldHash.toLowerCase() : oldHash;
		var oldMainHash = oldHash === undefined ? '' : oldHash.split(_hasherSeparator)[0];
		var newMainHash = newHash.split(_hasherSeparator)[0];
		if(oldMainHash !== newMainHash) {
			_content.off();
			try {
				window._framework.onPagePathChange = undefined;
				window._framework.defaultPagePath = undefined;
				delete window._framework.onPagePathChange;
				delete window._framework.defaultPagePath;
			}
			catch(ex) { }

			showLoading();
			_ajaxContentRequest = $.get(_htmlPath + newMainHash + _htmlExtension, function(response) {
                _body.trigger("contentDestruct");
				$.each($('#content *').overlayScrollbars('!'), function(index, instance) { instance.destroy(); }); //destroy all OS instances
                _content[0].innerHTML = ""; //empty content
				
				_ajaxContentRequestTimeoutId = setTimeout(function() {
					_ajaxContentRequestTimeoutId = undefined;

					//load correct content:
					(function(HTML, callback) {
						var temp = document.createElement('div'),
							frag = document.createDocumentFragment();
						temp.innerHTML = HTML;
						var action = function() {
							if(temp.firstChild){
								frag.appendChild(temp.firstChild);
								setTimeout(action, 0);
							} 
							else
								callback(frag);
						};
						action();
					})(response, function(fragment){
						_content[0].appendChild(fragment); // myTarget should be an element node.
						
						contentLoad();
						
						$.getScript(_jsPath + newMainHash + _jsExtension).always(function() {
							pagePathChange(newHash, oldHash);
							hideLoading();
						}).fail(function(){
                            if(arguments[0].readyState==0);else{
                                //script loaded but failed to parse
                                console.error(arguments);
                            }
                        });		
					});
                    
					/*
					_content[0].innerHTML = response;
					contentLoad(newMainHash);
					$.getScript(_jsPath + newMainHash + _jsExtension).always(function() {
						pagePathChange(newHash, oldHash);
						hideLoading();
					});	
					*/	
					
				}, 400);
			}, "html").fail(function() {
				//404
				$.get(_fourZeroFourPath, function(response) {
					_content.html(response);
					$('#four-zero-four-face').html(_fourZeroFourFaces[Math.floor((Math.random() * (_fourZeroFourFaces.length - 1)) + 0)]);
				}, "html");
				
				pagePathChange(newHash, oldHash);
				hideLoading();
			}).always(function() { 
				_ajaxContentRequest = undefined;
				
				//refresh navigation:
				_mainNavigationItems.removeClass(_strActive);
				$.each(_mainNavigationItems, function() { 
					var item = $(this);
					if(item.attr(_dataAttrNavigation) === newMainHash) {
						item.addClass(_strActive);
					}
				});
				if(newMainHash === _defaultHash) {
					_header.removeClass('shrinked');
				}
				else {
					_header.addClass('shrinked');
					if(_nav.overlayScrollbars())
						_nav.overlayScrollbars().update();
				}
				
				//scroll To top:
				if(_mainScrollElement)
					_mainScrollElement.scroll({ y : 0 });
				else
					_window.scrollTop(0);
			});
		}
		else
			pagePathChange(newHash, oldHash);
	}
	
	function pagePathChange(newHash, oldHash) {
		var openLinkInSameTab = function(e) { 
			var ee = e.originalEvent || e;
			
			//on normal mouse click or triggered event
			if(((ee.which === 1 || ee.buttons === 1 || ee.button === 1) && ee.ctrlKey !== true) || e.originalEvent === undefined) {
				var navigationValue = $(e.currentTarget).closest('[' + _dataAttrNavigation + ']').attr(_dataAttrNavigation);
				if(navigationValue) {
					var newHashArray = generateHashArray(navigationValue);
					var newHashArrayParamString = '';
					for(var i = 0; i < newHashArray.length; i++)
						newHashArrayParamString += "\"" + newHashArray[i] + "\", ";
					newHashArrayParamString = newHashArrayParamString.substring(0, newHashArrayParamString.length - 2);

					window.eval('hasher.setHash(' + newHashArrayParamString + ');');
				}
			}
		};
		var openLinkInNewTab = function(e) { 
			var ee = e.originalEvent || e;
			//on strg + left mouse button OR middle mouse button
			if((ee.ctrlKey !== undefined && ee.ctrlKey === true && (ee.which === 1 || ee.buttons === 1 || ee.buttons === 4 || ee.which === 2))) {
				var navigationValue = $(e.currentTarget).closest('[' + _dataAttrNavigation + ']').attr(_dataAttrNavigation);
				if(navigationValue) {
					var newHashArray = generateHashArray(navigationValue);
					var newHashArrayParamString = '#' + _hasherPrepareHash;
					for(var i = 0; i < newHashArray.length; i++)
						newHashArrayParamString += (i == 0 ? "" : _hasherSeparator) + newHashArray[i] + "";
					window.open(hasher.getBaseURL() + newHashArrayParamString, '_blank');
					
					e.stopPropagation();
					e.stopImmediatePropagation();
					return false;
				}
			}
			if(e.originalEvent === undefined) {
				openLinkInSameTab(e);
				
				e.stopPropagation();
				e.stopImmediatePropagation();
				return false;
			}
		};
		//Generate correct hash after data-navigation element was klicked
		$('[' + _dataAttrNavigation + ']:not(option)').on('click', openLinkInNewTab);	
		$('[' + _dataAttrNavigation + ']:not(option)').on('mousedown', openLinkInSameTab);
		
		/*
		$('[' + _dataAttrNavigation + ']:not(option)').on('mousedown', function(e) {
			var ee = e.originalEvent || e;
			//on middle mouse button
			if((ee.buttons === 4 || ee.which === 2)) {
				var navigationValue = $(this).closest('[' + _dataAttrNavigation + ']').attr(_dataAttrNavigation);
				var newHashArray = generateHashArray(navigationValue);
				var newHashArrayParamString = '#' + _hasherPrepareHash;
				for(var i = 0; i < newHashArray.length; i++)
					newHashArrayParamString += (i == 0 ? "" : _hasherSeparator) + newHashArray[i] + "";
				window.open(hasher.getBaseURL() + newHashArrayParamString, '_blank');
				
				e.stopPropagation();
				e.stopImmediatePropagation();
				return false;
			}
		});
		*/
		
		var oldMainHash = oldHash === undefined ? '' : oldHash.split(_hasherSeparator)[0];
		var newMainHash = newHash.split(_hasherSeparator)[0];
		var newHashArray = newHash.split(_hasherSeparator);
		var oldHashArray = oldHash === undefined ? [] : oldHash.split(_hasherSeparator);
		var offsetChange = -1;
		var path = [ ];
		if(newHashArray.length > oldHashArray.length) {
			$.each(newHashArray, function(i) {
				if(newHashArray[i] !== oldHashArray[i]) {
					offsetChange = i;
					return false;
				}
			});
		}
		else {
			$.each(oldHashArray, function(i) {
				if(oldHashArray[i] !== newHashArray[i]) {
					offsetChange = i;
					return false;
				}
			});
		}
		if(oldMainHash === newMainHash)
			offsetChange -= 1;

		for(var i = 0; i < newHashArray.length; i++) {
			if(i === 0)
				continue;
			var curr = newHashArray[i];
			var name = curr;
			path.push(name);
		}
		
		if($.type(window._framework.onPagePathChange) === 'function') {
			window._framework.onPagePathChange({
				isEmpty : newHashArray.length <= 1,
				changedAt : offsetChange,
				path : path,
			});
		}
		
		//if a default tab shall be selected
		if(newHashArray.length === 1 && offsetChange === 0 && window._framework.defaultPagePath)
			hasher.replaceHash(newHashArray[0], window._framework.defaultPagePath);

		//Main tabcontrol hashchange functionality
		if(newHashArray.length > 1 && offsetChange === 0) {
			var possibleTabItems = $('#content-navigation').find('.content-navigation-item-clickable[data-navigation]');
			var osInstance = $('#content-navigation').overlayScrollbars();
			clearTimeout(_contentNavigationScrollTimeout);
			$.each(possibleTabItems, function() { 
				var item = $(this);
				var itemNavAttr = item.attr('data-navigation').toLowerCase();
				if(itemNavAttr !== undefined)
					itemNavAttr = itemNavAttr.replace(/[0-9]/,"").replace(/[[]]/g,"");
				
				if(itemNavAttr === path[offsetChange]) {
					item.trigger('click');
					_contentNavigationScrollTimeout = setTimeout(function() {
						if(osInstance) {
							try {
								updateContentNavigation();			
								osInstance.scrollStop();
								osInstance.scroll({ el : item, margin : { top : 5, bottom: 40 }, block : "nearest", scroll : { y : "ifneeded" } }, 300);
							}
							catch(ex) { }
						}
					}, 400);
					var tabKeyAttr = item.attr(_dataAttrTabKey);
					if(tabKeyAttr !== undefined && tabKeyAttr !== null) {
						var tabContent = $('[' + _dataAttrTabValue + '="' + tabKeyAttr + '"]');
						tabContent.find('code:not(.hljs)').each(function(i, element) {
							hljs(element); 
						});
						
						//custom scrollbar on code
						$.each(tabContent.find('pre > code.hljs'), function() { 
							var elem = $(this);
							var hideY = !elem.hasClass('expandable');
							if(!elem.hasClass('code-noscroll') && elem.overlayScrollbars() === undefined) {
								elem.overlayScrollbars({ 
									paddingAbsolute : true, 
									overflowBehavior : {
										y : hideY ? "hidden" : "scroll"
									}
								});
							}
						});
						//manage code mirrors
						setTimeout(function() {
							$('.CodeMirror').each(function(i, el){
								if(el.offsetHeight > 0)
									el.CodeMirror.refresh();
							});
						}, 300);
					}
				}
			});
		}
		
		var contentNavigation = $('#content-navigation');
		if(contentNavigation.length > 0) {
			var activeTab = contentNavigation.children().find('.active').first().attr(_dataAttrTabKey);
			_navigationContentNavigation.val(_navigationContentNavigation.find('[' + _dataAttrTabKey + '="' + activeTab +  '"]').text());
		}
	}
	
	function contentLoad(currentMainHash) {
		updateContentNavigation();
		_navigationContentNavigation.empty();
		
		var contentNavigation = $('#content-navigation');
		if(contentNavigation.length > 0) {
			//build also a select with optgroups:
			var items = contentNavigation.children();
			var group;
			for(var i = 0; i < items.length; i++) {
				var text = items.eq(i).find('span').first().text();
				if(items.eq(i).hasClass('content-navigation-item-clickable')) {
					var appendTo = group ? group : _navigationContentNavigation;
					var option = $('<option value="' + text + '">' + text + '</option>');
					option.attr(_dataAttrTabKey, items.eq(i).attr(_dataAttrTabKey));
					option.attr(_dataAttrNavigation, items.eq(i).attr(_dataAttrNavigation));
					appendTo.append(option);
				}
				else {	
					group = $('<optgroup label="' + text + '" />');
					_navigationContentNavigation.append(group);
				}
			}
			
			//custom scrollbar on content menu (sidebar menu)
			contentNavigation.overlayScrollbars({ 
				scrollbars : { 
					autoHide : 'leave',
				},
				overflowBehavior : {
					x : 'hidden'
				}
			});
		}
		
		//modal
		$('.modal .modal-window-header-close').on('click', function(e) {
			var clickedElement = $(e.target);
			var modal = clickedElement.closest('.modal').first();
			hideModal(modal);
		});
		$('.modal').on('mousedown', function(e) {
			var clickedElement = $(e.target);
			var modal = clickedElement.closest('.modal').first();
			var condition = modal.length > 0 ? modal.overlayScrollbars() instanceof OverlayScrollbars ?  clickedElement[0] === modal[0] || clickedElement[0] === modal.overlayScrollbars().getElements().content || clickedElement[0] === modal.overlayScrollbars().getElements().viewport : clickedElement[0] === modal[0] : false;

			if(condition && modal.hasClass('modal-backdrop-closeable') && e.which === 1) {
				modal.one('mouseup', function(e) { 
					var clickedElement = $(e.target);
					var modal = clickedElement.closest('.modal').first();
					var condition = modal.length > 0 ? modal.overlayScrollbars() instanceof OverlayScrollbars ?  clickedElement[0] === modal[0] || clickedElement[0] === modal.overlayScrollbars().getElements().content || clickedElement[0] === modal.overlayScrollbars().getElements().viewport : clickedElement[0] === modal[0] : false;

					if(condition)
						hideModal(modal);
				});
			}
		});
		$('[' + _dataAttrModal + ']').on('click', function(e) { 
			var target = $(e.target);
			var attr = target.attr(_dataAttrModal);
			var closestAttrTarget = target.closest('[' + _dataAttrModal + ']').first();
			if(!closestAttrTarget.hasClass('modal'))
				showModal($('.modal[' + _dataAttrModal + '="' + attr + '"]').first());
		});
		if(_mainScrollElement) {
			var modalInstances = $('.modal').overlayScrollbars({ sizeAutoCapable : false }).overlayScrollbars();
			for(var i = 0; i < modalInstances.length; i++)
				modalInstances[i].sleep();
		}
			
		//input-numeric
		(function() { 
			$('.input-numeric').each(function() {
				var mainElem = $(this);
				var parseFunc = window.parseFloat;
				var toFixedNum = 8;
				
				var min = parseFunc(mainElem.attr(_dataAttrInputNumeric + "-min"));
				var max = parseFunc(mainElem.attr(_dataAttrInputNumeric + "-max"));
				var step = parseFunc(mainElem.attr(_dataAttrInputNumeric + "-step"));
				var value = parseFunc(mainElem.find('.input-numeric-input > input').val());
				
				var decreaseBtn = mainElem.find('.input-numeric-button-decrease').first();
				var increaseBtn = mainElem.find('.input-numeric-button-increase').first();
				var input = mainElem.find('.input-numeric-input > input');
				
				var updateValue = function() {
					var adjusted = false;
					if(value < min) {
						value = min;
						adjusted = true;
					}
					if(value > max) {
						value = max;
						adjusted = true;
					}
					input.val(value);
					mainElem.trigger('valuechanged', [ value ]);
					return adjusted;
				};
				
				var buttonPressedTimeout;
				var buttonPressed = function(action) {
					action();
					buttonPressedTimeout = setTimeout(function() { buttonPressed(action); }, 125);
				};
				
				min = isNaN(min) ? 0 : min;
				max = isNaN(max) ? 0 : max;
				step = isNaN(step) ? 0 : step;
				
				if(min > max) 
					min = max;
				if(max < min)
					max = min;
				if(value < min)
					value = min;
				if(value > max)
					value = max;
			
				decreaseBtn.on('mousedown', function(e) { 
					clearTimeout(buttonPressedTimeout);
					buttonPressed(function() { 
						value -= step;
						value = parseFunc(value.toFixed(toFixedNum));
						updateValue();
					});
					$(document).one('mouseup', function(e) { 
						clearTimeout(buttonPressedTimeout);
					});
				});
				increaseBtn.on('mousedown', function(e) { 
					clearTimeout(buttonPressedTimeout);
					buttonPressed(function() { 
						value += step;
						value = parseFunc(value.toFixed(toFixedNum));
						updateValue();
					});
					$(document).one('mouseup', function(e) { 
						clearTimeout(buttonPressedTimeout);
					});
				});

				input.on('keydown', function(e) { 
					// Allow: backspace, delete, tab, escape, enter and .
					if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110].concat(floaty ? [190] : [])) !== -1 ||
						(e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) || 	// Allow: Ctrl/cmd+A
						(e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) || 	// Allow: Ctrl/cmd+C
						(e.keyCode == 86 && (e.ctrlKey === true || e.metaKey === true)) || 	// Allow: Ctrl/cmd+V
						(e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) || 	// Allow: Ctrl/cmd+X
						(e.keyCode >= 35 && e.keyCode <= 39)) { 							// Allow: home, end, left, right
							 return;
					}
					// Ensure that it is a number and stop the keypress
					if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
						e.preventDefault();
					}
				});
				input.on('input', function(e) { 
					var inputVal = input.val();
					if(inputVal === "")
						value = min;
					else {
						value = parseFunc(inputVal);
						value = isNaN(value) ? min : value;
					}
					updateValue();
				});
				/*
				input.on('focus', function(e) { 
					input.select();
				});
				*/
				updateValue();
				
				mainElem.find('.input-numeric-input > input').val(value);
			});
		})();

		//dropdown
		$('.dropdown').on('click', function(e) {
			var dropdown = $(this).closest('.dropdown');
			var isActive = false;
			if(dropdown.hasClass(_strActive))
				isActive = true;
			
			$('.dropdown.active').removeClass(_strActive);
			
			if(isActive)
				dropdown.removeClass(_strActive);
			else
				dropdown.addClass(_strActive);
			
			if(dropdown.hasClass(_strActive)) {
				_body.one('click', function() { 
					dropdown.removeClass(_strActive);
				});
			}
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		});
		$('.dropdown-list > div').on('click', function(e) { 
			var dropdown = $(this).closest('.dropdown');
			var dropdownValue = dropdown.find('.dropdown-value');
			dropdownValue.text($(this).text());
			dropdown.removeClass(_strActive);
			dropdown.trigger('dropdownvaluechanged', [ dropdownValue.text() ]);
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		});
		
		//radio buttons
		$('[' + _dataAttrRadio + ']').on('click', function(e) { 
			var target = $(e.target);
			var attr = target.attr(_dataAttrRadio);
			
			if(target.hasClass(_strActive))
				return;
				
			$('[' + _dataAttrRadio + '="' + attr + '"]').removeClass(_strActive).trigger("radiooff");
			target.addClass(_strActive).trigger("radioon");
		});
		
		//expander
		$('[' + _dataAttrExpanderKey + ']').on('click', function(e) { 
			//var closestOS = $(this).closest('.os-host');
			var currElem = $(this).closest('[' + _dataAttrExpanderKey + ']');
			var target = $('[' + _dataAttrExpanderValue + '="' + currElem.attr(_dataAttrExpanderKey) + '"]');
			if(target.hasClass(_strActive)) {
				target.stop().slideUp(_expanderExpandDuration);
				currElem.removeClass(_strActive);
				target.removeClass(_strActive);
			}
			else {
				target.stop().slideDown(_expanderExpandDuration);
				currElem.addClass(_strActive);
				target.addClass(_strActive);
			}
		});
		
		//tabs
		$('[' + _dataAttrTabValue + ']:not(.' + _strActive + ')').hide();
		$('[' + _dataAttrTabKey + ']:not(option)').on('click', function(e) { 
			var currElem = $(this).closest('[' + _dataAttrTabKey + ']');
			if(currElem.hasClass(_strActive)) {
				e.stopPropagation();
				e.stopImmediatePropagation();
				return false;
			}
			var ee = e.originalEvent || e;
			if(ee.ctrlKey !== undefined && ee.ctrlKey === true && (ee.which === 1 || ee.buttons === 1)) {
				return false;
			}

			var target = $('[' + _dataAttrTabValue + '="' + currElem.attr(_dataAttrTabKey) + '"]');
			var parent = target.parent();
			var currActive = parent.children('.' + _strActive).first().removeClass(_strActive);
			var doScroll = currElem.attr(_dataAttrNavigation) !== undefined && currElem.attr(_dataAttrNavigation) !== null;
			var action = function() {
				target.stop().fadeIn(_tabsFadeDuration).addClass(_strActive);
				if(doScroll) {
					if(_mainScrollElement)
						_mainScrollElement.scroll({ y : 0 });
					else
						_window.scrollTop(0);
				}
			};
			if(currActive.length === 0)
				action();
			else
				currActive.stop().fadeOut(_tabsFadeDuration, action);
			
			$('[' + _dataAttrTabKey + '="' + currElem.attr(_dataAttrTabKey) + '"]').each(function() { 
				$(this).parent().find('[' + _dataAttrTabKey + ']').removeClass(_strActive);
			}).addClass(_strActive);
		});
		
		
		
		//options table expand on click
		$('.options-table > tbody > tr:nth-child(2n+1)').on('click', function(e) {		
			var current = $(e.target).closest('tr');
			var target = current.next().find('div').first();
			target.stop().slideToggle(300, 'easeOutCirc');
			if(current.hasClass(_strActive))
				current.removeClass(_strActive);
			else
				current.addClass(_strActive);
		});
		$('.options-table > tbody > tr:nth-child(2n+1) code').on('click', function(e) { 
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		});
		
		$('#content-navigation-button').on('click', function() { 
			$('#content-navigation-button').toggleClass(_strActive);
		});
		
		if($('#content-navigation-main').length > 0) {
			//code highlight js on default visible tab element
			$('#content-navigation-main > div:visible').find('code').each(function(i, element) {
				hljs(element); 
			});
			
			//custom scrollbar on code on default visible tab element
			$.each($('#content-navigation-main > div:visible').find('pre > code.hljs'), function() { 
				var elem = $(this);
				var hideY = !elem.hasClass('expandable');
				if(!elem.hasClass('code-noscroll') && elem.overlayScrollbars() === undefined) {
					elem.overlayScrollbars({ 
						paddingAbsolute : true, 
						overflowBehavior : {
							y : hideY ? "hidden" : "scroll"
						}
					});
				}
			});
		}
		else {
			//code highlight js on default visible tab element
			$('code').each(function(i, element) {
				hljs(element); 
			});
			
			//custom scrollbar on code on default visible tab element
			$.each($('pre > code.hljs'), function() { 
				var elem = $(this);
				if(!elem.hasClass('code-noscroll') && elem.overlayScrollbars() === undefined) {
					elem.overlayScrollbars({ 
						paddingAbsolute : true, 
						overflowBehavior : {
							y : "hidden"
						}
					});
				}
			});
		}
		//code in modals
		$('.modal').find('code').each(function(i, element) {
			hljs(element); 
		});
		
		//code expand and shrink
		$('code.expandable').each(function(i, element) { 
			var strExpanded = 'expanded';
			var strExpandContent = 'Expand<i class="mdi mdi-chevron-down"></i>';
			var strShrinkContent = 'Shrink<i class="mdi mdi-chevron-up"></i>';
			var appendElement = $('<span class="expandable-button">' + strExpandContent + '</span>');
			appendElement.on('click', function() { 
				var codeElement = $(this).parent();
				if($(codeElement).hasClass(strExpanded)) {
					$(this).html(strExpandContent);
					codeElement.removeClass(strExpanded);
				}
				else {
					$(this).html(strShrinkContent);
					codeElement.addClass(strExpanded);
				}
			});
			$(element).append(appendElement);
		});
		
		//tippy
		$('[data-tooltip]').each(function() { 
			try {
				var el = this;
				var tt =  $(this).find('.tooltip').first();
				tippy(this, { html : tt[0], arrow : true, });
				$(this).append(tt.clone());
			}
			catch(ex) {}
		});
	}
	
	function updateContentNavigation() { 
		var contentNav = $('#content-navigation');
		var viewportHeight = $(window).height();
		var contentNavHeight = contentNav.height();
		var contentNavWrapperHeight = _content.height();
		var scrollTop = _mainScrollElement ? _mainScrollElement.scroll().position.y : _window.scrollTop();
		var scrollLeft = _mainScrollElement ? _mainScrollElement.scroll().position.x : _window.scrollLeft();
		var navHeight = _nav.height();
		var maxHeight = Math.min(viewportHeight - navHeight, contentNavWrapperHeight - scrollTop);
		
		if(OverlayScrollbars.globals().supportTransform) {
			translateElement(contentNav, -scrollLeft, 0);
		}
		else {
			contentNav.css('left', -scrollLeft);
		}

		contentNav.css('max-height', maxHeight);
		
		if(_nav.overlayScrollbars())
			_nav.overlayScrollbars().scroll([ scrollLeft , 0 ]);
		else 
			_nav.scrollLeft(scrollLeft);
	}
	
	function generateHashArray(navigationValue) {
		navigationValue = navigationValue.replace(/\s/g,'');
		var currHashArray = hasher.getHashAsArray();
		var newHashArray = [ ];
		var indexOfOffsetBracketOpen = navigationValue.indexOf('[');
		var indexOfOffsetBracketClose = navigationValue.indexOf(']');
		var offset = 0;
		if(indexOfOffsetBracketOpen === 0 && (indexOfOffsetBracketClose === 2 || indexOfOffsetBracketClose === 3 || indexOfOffsetBracketClose === 4)) {
			offset = parseInt(navigationValue.split(']')[0].substring(1, indexOfOffsetBracketClose));
			if(isNaN(offset))
				throw "Invalid navigation offset value!";
		}
		
		var navigationValueSplit = navigationValue.split(']');
		if(navigationValueSplit.length === 1)
			navigationValue = navigationValue;
		else
			navigationValue = navigationValueSplit[1];

		for(var i = 0; i < offset + 1; i++) 
			newHashArray[i] = currHashArray[i];
		
		newHashArray[offset] = navigationValue;
		if(navigationValue === '')
			newHashArray.splice(offset, 1);

		for(var i = 0; i < newHashArray.length; i++) 
			newHashArray[i] = newHashArray[i].toLowerCase();
		
		return newHashArray;
	}
	
	function hljs(element) {
		if(window.hljs !== undefined) {
			window.hljs.highlightBlock(element); 
		}
	}
	
	function translateElement(element, x, y) {
		var vendors = [ '', '-webkit-', '-moz-', '-o-', '-ms-' ];
		for(var i = 0; i < vendors.length; i++)
			element.css('transform', vendors[i] + 'translate(' + (x) + 'px, ' + (y) + 'px)');
	}
	
	function showModal(modal) {
		if(!modal.hasClass('modal-open') && !modal.hasClass('modal-animating')) {
			var osInstance = modal.overlayScrollbars();
			var hasOS = osInstance instanceof OverlayScrollbars;
			
			modal.addClass('modal-animating').stop().fadeIn(300, function() { 
				if(hasOS && osInstance.getState().sleeping) 
					modal.overlayScrollbars().update();
				modal.removeClass('modal-animating');
			}).addClass('modal-open').css('z-index', parseInt(modal.css('z-index')) + _openModals.length + 1).focus();
			if(hasOS)
				modal.overlayScrollbars().scroll(0, 1);
			else
				modal.scrollTop(0).scrollLeft(0);
			if(_openModals.length === 0) {
				_body.on('keydown', modalEsc);
				if(_mainScrollElement)
					_mainScrollElement.options({ overflowBehavior : { x : 'hidden', y : 'hidden' }});
				else
					_body.css('overflow', 'hidden');
			}
			_openModals.push(modal[0]);
		}
	}
	
	function hideModal(modal) {
		if(modal.hasClass('modal-open') && !modal.hasClass('modal-animating')) {
			if(modal.overlayScrollbars() instanceof OverlayScrollbars)
				modal.overlayScrollbars().sleep();
			modal.addClass('modal-animating').stop().removeClass('modal-open').fadeOut(300, function() { 
				modal.removeClass('modal-animating');
				modal.css('z-index', '');
			});
			var index = $.inArray(modal[0], _openModals);
			if (index > -1) {
				_openModals.splice(index, 1);
				if(_openModals.length === 0) {
					_body.off('keydown', modalEsc);
					if(_mainScrollElement)
						_mainScrollElement.options({ overflowBehavior : { x : 'scroll', y : 'scroll' }});
					else
						_body.css('overflow', ''); 
				}
			}
		}
	}
	
	function modalEsc(event) {
		var keyCode = event.keyCode || event.originalEvent.keyCode;
		if(keyCode === 27)
			hideModal($(_openModals[_openModals.length -1]));
	}
	
	_base.buildPage = function(config, callback) { 
		_finalConfig = $.extend(true, { }, _defaultConfig, config);
		_defaultHash = _finalConfig.defaultHash;
		_mainNavigationItems = $('[' + _dataAttrNavigation + ']');
		_window = $(window);
		_body = $('body');
		_header = $('#header');
		_nav = $('#navigation');
		_navButton = $('#navigation-button');
		_navBackdrop = $('#navigation-backdrop');
		_content = $('#content');
		_footer = $('#footer');
		_loading = $('#loading');
		_debugModal = $('#modal-debug');
		_debugModalContent = $('#modal-debug-content');
		_navigationContentNavigation = $('#navigation-content-navigation');
		
		//setup hasher
		hasher.prependHash = _hasherPrepareHash;
		hasher.separator = _hasherSeparator;
		if ( hasher.getURL() === hasher.getBaseURL() 
			|| hasher.getURL() === (hasher.getBaseURL() + "#")
			|| hasher.getURL() === (hasher.getBaseURL() + "#" + _hasherPrepareHash))
			hasher.replaceHash(_defaultHash);
		hasher.initialized.add(onHashChange); //parse initial hash
		hasher.changed.add(onHashChange); //parse hash changes
		hasher.init(); //start listening for hash changes
		
		setTimeout(function () { 
			_body.addClass('ready');
			if(_debug.cssFilterSupport)
				_body.addClass('filter-support');
		}, 100);
		
		$('#navigation-logo').on('click', function() {
			hasher.setHash(_defaultHash);
		});
		//navigation scrollbar
		$('#navigation-menu').overlayScrollbars({ 
			className : 'os-theme-light',
			paddingAbsolute: true,
			overflowBehavior : { y : 's', x : 'h' }
		});
		//navigation toggle
		_navButton.on('click', function(e) { 
			_nav.toggleClass(_strActive);
		});
		_navBackdrop.on('click', function(e) { 
			_nav.removeClass(_strActive);
		});
		
		//set scrollbars
		setBodyScrollbars();
		
		//navigation select:
		_navigationContentNavigation.on('change', function() { 
			var selectedValue = _navigationContentNavigation.val();
			var selectedElm = _navigationContentNavigation.find('option').filter(function() { return $(this).text() === selectedValue; });
			$('#content-navigation').find('[' + _dataAttrTabKey + '="' + selectedElm.attr(_dataAttrTabKey) + '"]').trigger('click');
		});
		
		//debug
		_debugModalContent.html(JSON.stringify(_debug, null, 2));
		
		try {
			var triggerDebugTimeoutId;
			var keydownSequence = [ 68, 69, 66, 85, 71, 13 ]; //debug[enter]
			var keydownKeyCodes = [ ];
			var touches = 0;
			function arraysEqual(arr1, arr2) {
				if(arr1.length !== arr2.length)
					return false;
				for(var i = arr1.length; i--;) {
					if(arr1[i] !== arr2[i])
						return false;
				}

				return true;
			}
			
			_body.on('keydown', function(e) { 
				clearTimeout(triggerDebugTimeoutId);
				triggerDebugTimeoutId = setTimeout(function() { 
					keydownKeyCodes = [ ];
				}, 250);
				var keyCode = e.keyCode || e.originalEvent.keyCode;
				keydownKeyCodes.push(keyCode);
				if(arraysEqual(keydownKeyCodes, keydownSequence))
					showModal(_debugModal);
			});
			
			_body[0].addEventListener('touchstart', function() { 
				clearTimeout(triggerDebugTimeoutId);
				triggerDebugTimeoutId = setTimeout(function() { 
					touches = 0;
				}, 250);
				touches++;
				if(touches > 20)
					showModal(_debugModal);
			}, { passive : true });
		} catch(ex) { }
	};
	
	_debug.viewportIntervention = typeof window.innerHeight === 'number' ? $('html')[0].clientHeight !== window.innerHeight : false;
	_debug.cssFilterSupport = false;//css3FilterFeatureDetect(true);
	if(_debug.viewportIntervention)
		viewportUnitsBuggyfill.init({ force: true });
	
	
	window._framework = _base;
});

/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.10.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 11.10.2019
 */

(function (global, factory) {
    if (typeof define === 'function' && define.amd)
        define(['jquery'], function(framework) { return factory(global, global.document, undefined, framework); });
    else if (typeof module === 'object' && typeof module.exports === 'object')
        module.exports = factory(global, global.document, undefined, require('jquery'));
    else
        factory(global, global.document, undefined, global.jQuery);
}(typeof window !== 'undefined' ? window : this,
    function(window, document, undefined$1, framework) {
        var PLUGINNAME = 'OverlayScrollbars';
        var TYPES = {
            o : 'object',
            f : 'function',
            a : 'array',
            s : 'string',
            b : 'boolean',
            n : 'number',
            u : 'undefined',
            z : 'null'
            //d : 'date',
            //e : 'error',
            //r : 'regexp',
            //y : 'symbol'
        };
        var LEXICON = {
            c : 'class',
            s : 'style',
            i : 'id',
            l : 'length',
            p : 'prototype',
            oH : 'offsetHeight',
            cH : 'clientHeight',
            sH : 'scrollHeight',
            oW : 'offsetWidth',
            cW : 'clientWidth',
            sW : 'scrollWidth',
            hOP : 'hasOwnProperty',
            bCR : 'getBoundingClientRect'
        };
        var VENDORS = (function() {
            //https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix
            var jsCache = { };
            var cssCache = { };
            var cssPrefixes = ['-webkit-', '-moz-', '-o-', '-ms-'];
            var jsPrefixes = ['WebKit', 'Moz', 'O', 'MS'];
            function firstLetterToUpper(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
          
            return {
                _cssPrefixes: cssPrefixes,
                _jsPrefixes: jsPrefixes,
                _cssProperty : function(name) {
                    var result = cssCache[name];
                    
                    if(cssCache[LEXICON.hOP](name))
                        return result;

                    var uppercasedName = firstLetterToUpper(name);
                    var elmStyle = document.createElement('div')[LEXICON.s];
                    var resultPossibilities;
                    var i = 0;
                    var v;
                    var currVendorWithoutDashes;

                    for (; i < cssPrefixes.length; i++) {
                        currVendorWithoutDashes = cssPrefixes[i].replace(/-/g, '');
                        resultPossibilities = [
                            name, //transition
                            cssPrefixes[i] + name, //-webkit-transition
                            currVendorWithoutDashes + uppercasedName, //webkitTransition
                            firstLetterToUpper(currVendorWithoutDashes) + uppercasedName //WebkitTransition
                        ];
                        for(v = 0; v < resultPossibilities[LEXICON.l]; v++) {
                            if(elmStyle[resultPossibilities[v]] !== undefined$1) {
                                result = resultPossibilities[v];
                                break;
                            }
                        }
                    }
                    
                    cssCache[name] = result;
                    return result;
                },
                _jsAPI : function(name, isInterface, fallback) {
                    var i = 0;
                    var result = jsCache[name];
                    
                    if(!jsCache[LEXICON.hOP](name)) {
                        result = window[name];
                        for(; i < jsPrefixes[LEXICON.l]; i++)
                            result = result || window[(isInterface ? jsPrefixes[i] : jsPrefixes[i].toLowerCase()) + firstLetterToUpper(name)];
                        jsCache[name] = result;
                    }
                    return result || fallback;
                }
                
            }
        })();
        var COMPATIBILITY = (function() {
            function windowSize(x) {
                return x ? window.innerWidth || document.documentElement[LEXICON.cW] || document.body[LEXICON.cW] : window.innerHeight || document.documentElement[LEXICON.cH] || document.body[LEXICON.cH];
            }
            function bind(func, thisObj) {
                if (typeof func != TYPES.f) {
                    throw "Can't bind function!";
                    // closest thing possible to the ECMAScript 5
                    // internal IsCallable function
                    //throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
                }
                var proto   = LEXICON.p;
                var aArgs   = Array[proto].slice.call(arguments, 2);
                var fNOP    = function() {};
                var fBound  = function() { return func.apply(this instanceof fNOP ? this : thisObj, aArgs.concat(Array[proto].slice.call(arguments))); };

                if (func[proto])
                    fNOP[proto] = func[proto]; // Function.prototype doesn't have a prototype property
                fBound[proto] = new fNOP();

                return fBound;
            }
            
            return {
                /**
                 * Gets the current window width.
                 * @returns {Number|number} The current window width in pixel.
                 */
                wW: bind(windowSize, 0, true),

                /**
                 * Gets the current window height.
                 * @returns {Number|number} The current window height in pixel.
                 */
                wH: bind(windowSize, 0),

                /**
                 * Gets the MutationObserver Object or undefined if not supported.
                 * @returns {MutationObserver|*|undefined} The MutationsObserver Object or undefined.
                 */
                mO: bind(VENDORS._jsAPI, 0, 'MutationObserver', true),

                /**
                 * Gets the ResizeObserver Object or undefined if not supported.
                 * @returns {MutationObserver|*|undefined} The ResizeObserver Object or undefined.
                 */
                rO: bind(VENDORS._jsAPI, 0, 'ResizeObserver', true),

                /**
                 * Gets the RequestAnimationFrame method or it's corresponding polyfill.
                 * @returns {*|Function} The RequestAnimationFrame method or it's corresponding polyfill.
                 */
                rAF: bind(VENDORS._jsAPI, 0, 'requestAnimationFrame', false, function (func) { return window.setTimeout(func, 1000 / 60); }),

                /**
                 * Gets the CancelAnimationFrame method or it's corresponding polyfill.
                 * @returns {*|Function} The CancelAnimationFrame method or it's corresponding polyfill.
                 */
                cAF: bind(VENDORS._jsAPI, 0, 'cancelAnimationFrame', false, function (id) { return window.clearTimeout(id); }),

                /**
                 * Gets the current time.
                 * @returns {number} The current time.
                 */
                now: function() {
                    return Date.now && Date.now() || new Date().getTime();
                },

                /**
                 * Stops the propagation of the given event.
                 * @param event The event of which the propagation shall be stoped.
                 */
                stpP: function(event) {
                    if(event.stopPropagation)
                        event.stopPropagation();
                    else
                        event.cancelBubble = true;
                },

                /**
                 * Prevents the default action of the given event.
                 * @param event The event of which the default action shall be prevented.
                 */
                prvD: function(event) {
                    if(event.preventDefault && event.cancelable)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                },

                /**
                 * Gets the pageX and pageY values of the given mouse event.
                 * @param event The mouse event of which the pageX and pageX shall be got.
                 * @returns {{x: number, y: number}} x = pageX value, y = pageY value.
                 */
                page: function(event) {
                    event = event.originalEvent || event;

                    var strPage = 'page';
                    var strClient = 'client';
                    var strX = 'X';
                    var strY = 'Y';
                    var target = event.target || event.srcElement || document;
                    var eventDoc = target.ownerDocument || document;
                    var doc = eventDoc.documentElement;
                    var body = eventDoc.body;

                    //if touch event return return pageX/Y of it
                    if(event.touches !== undefined$1) {
                        var touch = event.touches[0];
                        return {
                            x : touch[strPage + strX],
                            y : touch[strPage + strY]
                        }
                    }

                    // Calculate pageX/Y if not native supported
                    if (!event[strPage + strX] && event[strClient + strX] && event[strClient + strX] != null) {

                        return {
                            x : event[strClient + strX] +
                            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                            (doc && doc.clientLeft || body && body.clientLeft || 0),
                            y : event[strClient + strY] +
                            (doc && doc.scrollTop || body && body.scrollTop || 0) -
                            (doc && doc.clientTop || body && body.clientTop || 0)
                        }
                    }
                    return {
                        x : event[strPage + strX],
                        y : event[strPage + strY]
                    };
                },

                /**
                 * Gets the clicked mouse button of the given mouse event.
                 * @param event The mouse event of which the clicked button shal be got.
                 * @returns {number} The number of the clicked mouse button. (0 : none | 1 : leftButton | 2 : middleButton | 3 : rightButton)
                 */
                mBtn: function(event) {
                    var button = event.button;
                    if (!event.which && button !== undefined$1)
                        return (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                    else
                        return event.which;
                },

                /**
                 * Checks whether a item is in the given array and returns its index.
                 * @param item The item of which the position in the array shall be determined.
                 * @param arr The array.
                 * @returns {number} The zero based index of the item or -1 if the item isn't in the array.
                 */
                inA : function(item, arr) {
                    for (var i = 0; i < arr[LEXICON.l]; i++)
                        //Sometiems in IE a "SCRIPT70" Permission denied error occurs if HTML elements in a iFrame are compared
                        try {
                            if (arr[i] === item)
                                return i;
                        }
                        catch(e) { }
                    return -1;
                },

                /**
                 * Returns true if the given value is a array.
                 * @param arr The potential array.
                 * @returns {boolean} True if the given value is a array, false otherwise.
                 */
                isA: function(arr) {
                    var def = Array.isArray;
                    return def ? def(arr) : this.type(arr) == TYPES.a;
                },

                /**
                 * Determine the internal JavaScript [[Class]] of the given object.
                 * @param obj The object of which the type shall be determined.
                 * @returns {string} The type of the given object.
                 */
                type: function(obj) {
                    if (obj === undefined$1)
                        return obj + '';
                    if (obj === null)
                        return obj + '';
                    return Object[LEXICON.p].toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
                },


                bind: bind

                /**
                 * Gets the vendor-prefixed CSS property by the given name.
                 * For example the given name is "transform" and you're using a old Firefox browser then the returned value would be "-moz-transform".
                 * If the browser doesn't need a vendor-prefix, then the returned string is the given name.
                 * If the browser doesn't support the given property name at all (not even with a vendor-prefix) the returned value is null.
                 * @param propName The unprefixed CSS property name.
                 * @returns {string|null} The vendor-prefixed CSS property or null if the browser doesn't support the given CSS property.

                cssProp: function(propName) {
                    return VENDORS._cssProperty(propName);
                }
                */
            }
        })();

        var MATH = Math;
        var JQUERY = framework;
        var EASING = framework.easing;
        var FRAMEWORK = framework;
        var INSTANCES = (function() {
            var _targets = [ ];
            var _instancePropertyString = '__overlayScrollbars__';

            /**
             * Register, unregister or get a certain (or all) instances.
             * Register: Pass the target and the instance.
             * Unregister: Pass the target and null.
             * Get Instance: Pass the target from which the instance shall be got.
             * Get Targets: Pass no arguments.
             * @param target The target to which the instance shall be registered / from which the instance shall be unregistered / the instance shall be got
             * @param instance The instance.
             * @returns {*|void} Returns the instance from the given target.
             */
            return function (target, instance) {
                var argLen = arguments[LEXICON.l];
                if(argLen < 1) {
                    //return all targets
                    return _targets;
                }
                else {
                    if(instance) {
                        //register instance
                        target[_instancePropertyString] = instance;
                        _targets.push(target);
                    }
                    else {
                        var index = COMPATIBILITY.inA(target, _targets);
                        if (index > -1) {
                            if(argLen > 1) {
                                //unregister instance
                                delete target[_instancePropertyString];
                                _targets.splice(index, 1);
                            }
                            else {
                                //get instance from target
                                return _targets[index][_instancePropertyString];
                            }
                        }
                    }
                }
            }
        })();
        var PLUGIN = (function() {
            var _plugin;
            var _pluginsGlobals;
            var _pluginsAutoUpdateLoop;
            var _pluginsExtensions = [ ];
            var _pluginsOptions = (function() {
                var type = COMPATIBILITY.type;
                var possibleTemplateTypes = [
                    TYPES.b, //boolean
                    TYPES.n, //number
                    TYPES.s, //string
                    TYPES.a, //array
                    TYPES.o, //object
                    TYPES.f, //function
                    TYPES.z  //null
                ];
                var restrictedStringsSplit = ' ';
                var restrictedStringsPossibilitiesSplit = ':';
                var classNameAllowedValues = [TYPES.z, TYPES.s];
                var numberAllowedValues = TYPES.n;
                var booleanNullAllowedValues = [TYPES.z, TYPES.b];
                var booleanTrueTemplate = [true, TYPES.b];
                var booleanFalseTemplate = [false, TYPES.b];
                var callbackTemplate = [null,  [TYPES.z, TYPES.f]];
                var inheritedAttrsTemplate = [['style', 'class'], [TYPES.s, TYPES.a, TYPES.z]];
                var resizeAllowedValues = 'n:none b:both h:horizontal v:vertical';
                var overflowBehaviorAllowedValues = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden';
                var scrollbarsVisibilityAllowedValues = 'v:visible h:hidden a:auto';
                var scrollbarsAutoHideAllowedValues = 'n:never s:scroll l:leave m:move';
                var optionsDefaultsAndTemplate = {
                    className: ['os-theme-dark', classNameAllowedValues],                //null || string
                    resize: ['none', resizeAllowedValues],                               //none || both  || horizontal || vertical || n || b || h || v
                    sizeAutoCapable: booleanTrueTemplate,                                //true || false
                    clipAlways: booleanTrueTemplate,                                     //true || false
                    normalizeRTL: booleanTrueTemplate,                                   //true || false
                    paddingAbsolute: booleanFalseTemplate,                               //true || false
                    autoUpdate: [null, booleanNullAllowedValues],                        //true || false || null
                    autoUpdateInterval: [33, numberAllowedValues],                       //number
                    nativeScrollbarsOverlaid: {
                        showNativeScrollbars: booleanFalseTemplate,                      //true || false
                        initialize: booleanTrueTemplate                                  //true || false
                    },
                    overflowBehavior: {
                        x: ['scroll', overflowBehaviorAllowedValues],                    //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
                        y: ['scroll', overflowBehaviorAllowedValues]                     //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
                    },
                    scrollbars: {
                        visibility: ['auto', scrollbarsVisibilityAllowedValues],         //visible || hidden || auto || v || h || a
                        autoHide: ['never', scrollbarsAutoHideAllowedValues],            //never || scroll || leave || move || n || s || l || m
                        autoHideDelay: [800, numberAllowedValues],                       //number
                        dragScrolling: booleanTrueTemplate,                              //true || false
                        clickScrolling: booleanFalseTemplate,                            //true || false
                        touchSupport: booleanTrueTemplate,                               //true || false
                        snapHandle: booleanFalseTemplate                                 //true || false
                    },
                    textarea: {
                        dynWidth: booleanFalseTemplate,                                  //true || false
                        dynHeight: booleanFalseTemplate,                                 //true || false
                        inheritedAttrs : inheritedAttrsTemplate                          //string || array || null
                    },
                    callbacks: {
                        onInitialized: callbackTemplate,                                 //null || function
                        onInitializationWithdrawn: callbackTemplate,                     //null || function
                        onDestroyed: callbackTemplate,                                   //null || function
                        onScrollStart: callbackTemplate,                                 //null || function
                        onScroll: callbackTemplate,                                      //null || function
                        onScrollStop: callbackTemplate,                                  //null || function
                        onOverflowChanged: callbackTemplate,                             //null || function
                        onOverflowAmountChanged: callbackTemplate,                       //null || function
                        onDirectionChanged: callbackTemplate,                            //null || function
                        onContentSizeChanged: callbackTemplate,                          //null || function
                        onHostSizeChanged: callbackTemplate,                             //null || function
                        onUpdated: callbackTemplate                                      //null || function
                    }
                };
                var convert = function(template) {
                    var recursive = function(obj) {
                        var key;
                        var val;
                        var valType;
                        for(key in obj) {
                            if(!obj[LEXICON.hOP](key))
                                continue;
                            val = obj[key];
                            valType = type(val);
                            if(valType == TYPES.a)
                                obj[key] = val[template ? 1 : 0];
                            else if(valType == TYPES.o)
                                obj[key] = recursive(val);
                        }
                        return obj;
                    };
                    return recursive(FRAMEWORK.extend(true, { }, optionsDefaultsAndTemplate));
                };

                return {
                    _defaults : convert(),

                    _template : convert(true),

                    /**
                     * Validates the passed object by the passed template.
                     * @param obj The object which shall be validated.
                     * @param template The template which defines the allowed values and types.
                     * @param writeErrors True if errors shall be logged to the console.
                     * @param diffObj If a object is passed then only valid differences to this object will be returned.
                     * @returns {{}} A object which contains two objects called "default" and "prepared" which contains only the valid properties of the passed original object and discards not different values compared to the passed diffObj.
                     */
                    _validate : function (obj, template, writeErrors, diffObj) {
                        var validatedOptions = { };
                        var validatedOptionsPrepared = { };
                        var objectCopy = FRAMEWORK.extend(true, { }, obj);
                        var inArray = FRAMEWORK.inArray;
                        var isEmptyObj = FRAMEWORK.isEmptyObject;
                        var checkObjectProps = function(data, template, diffData, validatedOptions, validatedOptionsPrepared, prevPropName) {
                            for (var prop in template) {
                                if (template[LEXICON.hOP](prop) && data[LEXICON.hOP](prop)) {
                                    var isValid = false;
                                    var isDiff = false;
                                    var templateValue = template[prop];
                                    var templateValueType = type(templateValue);
                                    var templateIsComplex = templateValueType == TYPES.o;
                                    var templateTypes = type(templateValue) != TYPES.a ? [ templateValue ] : templateValue;
                                    var dataDiffValue = diffData[prop];
                                    var dataValue = data[prop];
                                    var dataValueType = type(dataValue);
                                    var propPrefix = prevPropName ? prevPropName + '.' : '';
                                    var error = "The option \"" + propPrefix + prop + "\" wasn't set, because";
                                    var errorPossibleTypes = [ ];
                                    var errorRestrictedStrings = [ ];
                                    var restrictedStringValuesSplit;
                                    var restrictedStringValuesPossibilitiesSplit;
                                    var isRestrictedValue;
                                    var mainPossibility;
                                    var currType;
                                    var i;
                                    var v;
                                    var j;

                                    dataDiffValue = dataDiffValue === undefined$1 ? { } : dataDiffValue;
                                    
                                    //if the template has a object as value, it means that the options are complex (verschachtelt)
                                    if(templateIsComplex && dataValueType == TYPES.o) {
                                        validatedOptions[prop] = { };
                                        validatedOptionsPrepared[prop] = { };
                                        checkObjectProps(dataValue, templateValue, dataDiffValue, validatedOptions[prop], validatedOptionsPrepared[prop], propPrefix + prop);
                                        FRAMEWORK.each([ data, validatedOptions, validatedOptionsPrepared ], function(index, value) {
                                            if(isEmptyObj(value[prop])) {
                                                delete value[prop];
                                            }
                                        });
                                    }
                                    else if(!templateIsComplex) {
                                        for(i = 0; i < templateTypes[LEXICON.l]; i++) {
                                            currType = templateTypes[i];
                                            templateValueType = type(currType);
                                            //if currtype is string and starts with restrictedStringPrefix and end with restrictedStringSuffix
                                            isRestrictedValue = templateValueType == TYPES.s && inArray(currType, possibleTemplateTypes) === -1;
                                            if(isRestrictedValue) {
                                                errorPossibleTypes.push(TYPES.s);

                                                //split it into a array which contains all possible values for example: ["y:yes", "n:no", "m:maybe"]
                                                restrictedStringValuesSplit = currType.split(restrictedStringsSplit);
                                                errorRestrictedStrings = errorRestrictedStrings.concat(restrictedStringValuesSplit);
                                                for(v = 0; v < restrictedStringValuesSplit[LEXICON.l]; v++) {
                                                    //split the possible values into their possibiliteis for example: ["y", "yes"] -> the first is always the mainPossibility
                                                    restrictedStringValuesPossibilitiesSplit = restrictedStringValuesSplit[v].split(restrictedStringsPossibilitiesSplit);
                                                    mainPossibility = restrictedStringValuesPossibilitiesSplit[0];
                                                    for(j = 0; j < restrictedStringValuesPossibilitiesSplit[LEXICON.l]; j++) {
                                                        //if any possibility matches with the dataValue, its valid
                                                        if(dataValue === restrictedStringValuesPossibilitiesSplit[j]) {
                                                            isValid = true;
                                                            break;
                                                        }
                                                    }
                                                    if(isValid)
                                                        break;
                                                }
                                            }
                                            else {
                                                errorPossibleTypes.push(currType);

                                                if(dataValueType === currType) {
                                                    isValid = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if(isValid) {
                                            isDiff = dataValue !== dataDiffValue;
                                            
                                            if(isDiff)
                                                validatedOptions[prop] = dataValue;
                                            
                                            if(isRestrictedValue ? inArray(dataDiffValue, restrictedStringValuesPossibilitiesSplit) < 0 : isDiff)
                                                validatedOptionsPrepared[prop] = isRestrictedValue ? mainPossibility : dataValue;
                                        }
                                        else if(writeErrors) {
                                            console.warn(error + " it doesn't accept the type [ " + dataValueType.toUpperCase() + " ] with the value of \"" + dataValue + "\".\r\n" +
                                                "Accepted types are: [ " + errorPossibleTypes.join(', ').toUpperCase() + " ]." +
                                                (errorRestrictedStrings[length] > 0 ? "\r\nValid strings are: [ " + errorRestrictedStrings.join(', ').split(restrictedStringsPossibilitiesSplit).join(', ') + " ]." : ''));
                                        }
                                        delete data[prop];
                                    }
                                }
                            }
                        };
                        checkObjectProps(objectCopy, template, diffObj || { }, validatedOptions, validatedOptionsPrepared);

                        //add values which aren't specified in the template to the finished validated object to prevent them from being discarded
                        /*
                        if(keepForeignProps) {
                            FRAMEWORK.extend(true, validatedOptions, objectCopy);
                            FRAMEWORK.extend(true, validatedOptionsPrepared, objectCopy);
                        }
                        */
                        
                        if(!isEmptyObj(objectCopy) && writeErrors)
                            console.warn('The following options are discarded due to invalidity:\r\n' + window.JSON.stringify(objectCopy, null, 2));

                        return {
                            _default : validatedOptions,
                            _prepared : validatedOptionsPrepared
                        };
                    }
                }
            }());

            /**
             * Initializes the object which contains global information about the plugin and each instance of it.
             */
            function initOverlayScrollbarsStatics() {
                if(!_pluginsGlobals)
                    _pluginsGlobals = new OverlayScrollbarsGlobals(_pluginsOptions._defaults);
                if(!_pluginsAutoUpdateLoop)
                    _pluginsAutoUpdateLoop = new OverlayScrollbarsAutoUpdateLoop(_pluginsGlobals);
            }

            /**
             * The global object for the OverlayScrollbars objects. It contains resources which every OverlayScrollbars object needs. This object is initialized only once: if the first OverlayScrollbars object gets initialized.
             * @param defaultOptions
             * @constructor
             */
            function OverlayScrollbarsGlobals(defaultOptions) {
                var _base = this;
                var strOverflow = 'overflow';
                var strHidden = 'hidden';
                var strScroll = 'scroll';
                var bodyElement = FRAMEWORK('body');
                var scrollbarDummyElement = FRAMEWORK('<div id="os-dummy-scrollbar-size"><div></div></div>');
                var scrollbarDummyElement0 = scrollbarDummyElement[0];
                var dummyContainerChild = FRAMEWORK(scrollbarDummyElement.children('div').eq(0));

                bodyElement.append(scrollbarDummyElement);
                scrollbarDummyElement.hide().show(); //fix IE8 bug (incorrect measuring)

                var nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement0);
                var nativeScrollbarIsOverlaid = {
                    x: nativeScrollbarSize.x === 0,
                    y: nativeScrollbarSize.y === 0
                };
                var msie = (function() {
                    var ua = window.navigator.userAgent;
                    var strIndexOf = 'indexOf';
                    var strSubString = 'substring';
                    var msie = ua[strIndexOf]('MSIE ');
                    var trident = ua[strIndexOf]('Trident/');
                    var edge = ua[strIndexOf]('Edge/');
                    var rv = ua[strIndexOf]('rv:');
                    var result;
                    var parseIntFunc = parseInt;

                    // IE 10 or older => return version number
                    if (msie > 0)
                        result = parseIntFunc(ua[strSubString](msie + 5, ua[strIndexOf]('.', msie)), 10);

                    // IE 11 => return version number
                    else if (trident > 0)
                        result = parseIntFunc(ua[strSubString](rv + 3, ua[strIndexOf]('.', rv)), 10);

                    // Edge (IE 12+) => return version number
                    else if (edge > 0)
                        result = parseIntFunc(ua[strSubString](edge + 5, ua[strIndexOf]('.', edge)), 10);

                    // other browser
                    return result;
                })();

                FRAMEWORK.extend(_base, {
                    defaultOptions : defaultOptions,
                    msie : msie,
                    autoUpdateLoop : false,
                    autoUpdateRecommended : !COMPATIBILITY.mO(),
                    nativeScrollbarSize : nativeScrollbarSize,
                    nativeScrollbarIsOverlaid : nativeScrollbarIsOverlaid,
                    nativeScrollbarStyling : (function() {
                        var result = false;
                        scrollbarDummyElement.addClass('os-viewport-native-scrollbars-invisible');
                        try {
                            result = (scrollbarDummyElement.css('scrollbar-width') === 'none' && (msie > 9 || !msie)) || window.getComputedStyle(scrollbarDummyElement0, '::-webkit-scrollbar').getPropertyValue('display') === 'none';
                        } catch (ex) { }
                        
                        //fix opera bug: scrollbar styles will only appear if overflow value is scroll or auto during the activation of the style.
                        //and set overflow to scroll
                        //scrollbarDummyElement.css(strOverflow, strHidden).hide().css(strOverflow, strScroll).show();
                        //return (scrollbarDummyElement0[LEXICON.oH] - scrollbarDummyElement0[LEXICON.cH]) === 0 && (scrollbarDummyElement0[LEXICON.oW] - scrollbarDummyElement0[LEXICON.cW]) === 0;
                        
                        return result;
                    })(),
                    overlayScrollbarDummySize : { x: 30, y: 30 },
                    cssCalc : (function() {
                        var dummyStyle = document.createElement('div')[LEXICON.s];
                        var strCalc = 'calc';
                        var i = -1;
                        var prop;

                        for(; i < VENDORS._cssPrefixes[LEXICON.l]; i++) {
                            prop = i < 0 ? strCalc : VENDORS._cssPrefixes[i] + strCalc;
                            dummyStyle.cssText = 'width:' + prop + '(1px);';
                            if (dummyStyle[LEXICON.l])
                                return prop;
                        }
                        return null;
                    })(),
                    restrictedMeasuring : (function() {
                        //https://bugzilla.mozilla.org/show_bug.cgi?id=1439305
                        scrollbarDummyElement.css(strOverflow, strHidden);
                        var scrollSize = {
                            w : scrollbarDummyElement0[LEXICON.sW],
                            h : scrollbarDummyElement0[LEXICON.sH]
                        };
                        scrollbarDummyElement.css(strOverflow, 'visible');
                        var scrollSize2 = {
                            w : scrollbarDummyElement0[LEXICON.sW],
                            h : scrollbarDummyElement0[LEXICON.sH]
                        };
                        return (scrollSize.w - scrollSize2.w) !== 0 || (scrollSize.h - scrollSize2.h) !== 0;
                    })(),
                    rtlScrollBehavior : (function() {
                        scrollbarDummyElement.css({ 'overflow-y' : strHidden, 'overflow-x' : strScroll, 'direction' : 'rtl' }).scrollLeft(0);
                        var dummyContainerOffset = scrollbarDummyElement.offset();
                        var dummyContainerChildOffset = dummyContainerChild.offset();
                        scrollbarDummyElement.scrollLeft(999);
                        var dummyContainerScrollOffsetAfterScroll = dummyContainerChild.offset();
                        return {
                            //origin direction = determines if the zero scroll position is on the left or right side
                            //'i' means 'invert' (i === true means that the axis must be inverted to be correct)
                            //true = on the left side
                            //false = on the right side
                            i : dummyContainerOffset.left === dummyContainerChildOffset.left,
                            //negative = determines if the maximum scroll is positive or negative
                            //'n' means 'negate' (n === true means that the axis must be negated to be correct)
                            //true = negative
                            //false = positive
                            n : dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left === 0
                        };
                    })(),
                    supportTransform : VENDORS._cssProperty('transform') !== undefined$1,
                    supportTransition : VENDORS._cssProperty('transition') !== undefined$1,
                    supportPassiveEvents : (function() {
                        var supportsPassive = false;
                        try {
                            window.addEventListener('test', null, Object.defineProperty({ }, 'passive', {
                                get: function() {
                                    supportsPassive = true;
                                }
                            }));
                        } catch (e) { }
                        return supportsPassive;
                    })(),
                    supportResizeObserver : !!COMPATIBILITY.rO(),
                    supportMutationObserver : !!COMPATIBILITY.mO()
                });

                scrollbarDummyElement.removeAttr(LEXICON.s).remove();

                //Catch zoom event:
                (function () {
                    if(nativeScrollbarIsOverlaid.x && nativeScrollbarIsOverlaid.y)
                        return;

                    var abs = MATH.abs;
                    var windowWidth = COMPATIBILITY.wW();
                    var windowHeight = COMPATIBILITY.wH();
                    var windowDpr = getWindowDPR();
                    var onResize = function() {
                        if(INSTANCES().length > 0) {
                            var newW = COMPATIBILITY.wW();
                            var newH = COMPATIBILITY.wH();
                            var deltaW = newW - windowWidth;
                            var deltaH = newH - windowHeight;

                            if (deltaW === 0 && deltaH === 0)
                                return;

                            var deltaWRatio = MATH.round(newW / (windowWidth / 100.0));
                            var deltaHRatio = MATH.round(newH / (windowHeight / 100.0));
                            var absDeltaW = abs(deltaW);
                            var absDeltaH = abs(deltaH);
                            var absDeltaWRatio = abs(deltaWRatio);
                            var absDeltaHRatio = abs(deltaHRatio);
                            var newDPR = getWindowDPR();

                            var deltaIsBigger = absDeltaW > 2 && absDeltaH > 2;
                            var difference = !differenceIsBiggerThanOne(absDeltaWRatio, absDeltaHRatio);
                            var dprChanged = newDPR !== windowDpr && windowDpr > 0;
                            var isZoom = deltaIsBigger && difference && dprChanged;
                            var oldScrollbarSize = _base.nativeScrollbarSize;
                            var newScrollbarSize;

                            if (isZoom) {
                                bodyElement.append(scrollbarDummyElement);
                                newScrollbarSize = _base.nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement[0]);
                                scrollbarDummyElement.remove();
                                if(oldScrollbarSize.x !== newScrollbarSize.x || oldScrollbarSize.y !== newScrollbarSize.y) {
                                    FRAMEWORK.each(INSTANCES(), function () {
                                        if(INSTANCES(this))
                                            INSTANCES(this).update('zoom');
                                    });
                                }
                            }

                            windowWidth = newW;
                            windowHeight = newH;
                            windowDpr = newDPR;
                        }
                    };

                    function differenceIsBiggerThanOne(valOne, valTwo) {
                        var absValOne = abs(valOne);
                        var absValTwo = abs(valTwo);
                        return !(absValOne === absValTwo || absValOne + 1 === absValTwo || absValOne - 1 === absValTwo);
                    }

                    function getWindowDPR() {
                        var dDPI = window.screen.deviceXDPI || 0;
                        var sDPI = window.screen.logicalXDPI || 1;
                        return window.devicePixelRatio || (dDPI / sDPI);
                    }

                    FRAMEWORK(window).on('resize', onResize);
                })();

                function calcNativeScrollbarSize(measureElement) {
                    return {
                        x: measureElement[LEXICON.oH] - measureElement[LEXICON.cH],
                        y: measureElement[LEXICON.oW] - measureElement[LEXICON.cW]
                    };
                }
            }

            /**
             * The object which manages the auto update loop for all OverlayScrollbars objects. This object is initialized only once: if the first OverlayScrollbars object gets initialized.
             * @constructor
             */
            function OverlayScrollbarsAutoUpdateLoop(globals) {
                var _base = this;
                var _inArray = FRAMEWORK.inArray;
                var _getNow = COMPATIBILITY.now;
                var _strAutoUpdate = 'autoUpdate';
                var _strAutoUpdateInterval = _strAutoUpdate + 'Interval';
                var _strLength = LEXICON.l;
                var _loopingInstances = [ ];
                var _loopingInstancesIntervalCache = [ ];
                var _loopIsActive = false;
                var _loopIntervalDefault = 33;
                var _loopInterval = _loopIntervalDefault;
                var _loopTimeOld = _getNow();
                var _loopID;
                

                /**
                 * The auto update loop which will run every 50 milliseconds or less if the update interval of a instance is lower than 50 milliseconds.
                 */
                var loop = function() {
                    if(_loopingInstances[_strLength] > 0 && _loopIsActive) {
                        _loopID = COMPATIBILITY.rAF()(function () {
                            loop();
                        });
                        var timeNew = _getNow();
                        var timeDelta = timeNew - _loopTimeOld;
                        var lowestInterval;
                        var instance;
                        var instanceOptions;
                        var instanceAutoUpdateAllowed;
                        var instanceAutoUpdateInterval;
                        var now;

                        if (timeDelta > _loopInterval) {
                            _loopTimeOld = timeNew - (timeDelta % _loopInterval);
                            lowestInterval = _loopIntervalDefault;
                            for(var i = 0; i < _loopingInstances[_strLength]; i++) {
                                instance = _loopingInstances[i];
                                if (instance !== undefined$1) {
                                    instanceOptions = instance.options();
                                    instanceAutoUpdateAllowed = instanceOptions[_strAutoUpdate];
                                    instanceAutoUpdateInterval = MATH.max(1, instanceOptions[_strAutoUpdateInterval]);
                                    now = _getNow();

                                    if ((instanceAutoUpdateAllowed === true || instanceAutoUpdateAllowed === null) && (now - _loopingInstancesIntervalCache[i]) > instanceAutoUpdateInterval) {
                                        instance.update('auto');
                                        _loopingInstancesIntervalCache[i] = new Date(now += instanceAutoUpdateInterval);
                                    }

                                    lowestInterval = MATH.max(1, MATH.min(lowestInterval, instanceAutoUpdateInterval));
                                }
                            }
                            _loopInterval = lowestInterval;
                        }
                    } else {
                        _loopInterval = _loopIntervalDefault;
                    }
                };

                /**
                 * Add OverlayScrollbars instance to the auto update loop. Only successful if the instance isn't already added.
                 * @param instance The instance which shall be updated in a loop automatically.
                 */
                _base.add = function(instance) {
                    if(_inArray(instance, _loopingInstances) === -1) {
                        _loopingInstances.push(instance);
                        _loopingInstancesIntervalCache.push(_getNow());
                        if (_loopingInstances[_strLength] > 0 && !_loopIsActive) {
                            _loopIsActive = true;
                            globals.autoUpdateLoop = _loopIsActive;
                            loop();
                        }
                    }
                };

                /**
                 * Remove OverlayScrollbars instance from the auto update loop. Only successful if the instance was added before.
                 * @param instance The instance which shall be updated in a loop automatically.
                 */
                _base.remove = function(instance) {
                    var index = _inArray(instance, _loopingInstances);
                    if(index > -1) {
                        //remove from loopingInstances list
                        _loopingInstancesIntervalCache.splice(index, 1);
                        _loopingInstances.splice(index, 1);

                        //correct update loop behavior
                        if (_loopingInstances[_strLength] === 0 && _loopIsActive) {
                            _loopIsActive = false;
                            globals.autoUpdateLoop = _loopIsActive;
                            if(_loopID !== undefined$1) {
                                COMPATIBILITY.cAF()(_loopID);
                                _loopID = -1;
                            }
                        }
                    }
                };
            }

            /**
             * A object which manages the scrollbars visibility of the target element.
             * @param pluginTargetElement The element from which the scrollbars shall be hidden.
             * @param options The custom options.
             * @param extensions The custom extensions.
             * @param globals
             * @param autoUpdateLoop
             * @returns {*}
             * @constructor
             */
            function OverlayScrollbarsInstance(pluginTargetElement, options, extensions, globals, autoUpdateLoop) {
                //shortcuts
                var type = COMPATIBILITY.type;
                var inArray = FRAMEWORK.inArray;
                var each = FRAMEWORK.each;
                
                //make correct instanceof
                var _base = new _plugin();
                var _frameworkProto = FRAMEWORK[LEXICON.p];
                
                //if passed element is no HTML element: skip and return
                if(!isHTMLElement(pluginTargetElement))
                    return;
                
                //if passed element is already initialized: set passed options if there are any and return its instance
                if(INSTANCES(pluginTargetElement)) {
                    var inst = INSTANCES(pluginTargetElement);
                    inst.options(options);
                    return inst;
                }

                //globals:
                var _nativeScrollbarIsOverlaid;
                var _overlayScrollbarDummySize;
                var _rtlScrollBehavior;
                var _autoUpdateRecommended;
                var _msieVersion;
                var _nativeScrollbarStyling;
                var _cssCalc;
                var _nativeScrollbarSize;
                var _supportTransition;
                var _supportTransform;
                var _supportPassiveEvents;
                var _supportResizeObserver;
                var _supportMutationObserver;
                var _restrictedMeasuring;

                //general readonly:
                var _initialized;
                var _destroyed;
                var _isTextarea;
                var _isBody;
                var _documentMixed;
                var _domExists;

                //general:
                var _isBorderBox;
                var _sizeAutoObserverAdded;
                var _paddingX;
                var _paddingY;
                var _borderX;
                var _borderY;
                var _marginX;
                var _marginY;
                var _isRTL;
                var _sleeping;
                var _contentBorderSize = { };
                var _scrollHorizontalInfo = { };
                var _scrollVerticalInfo = { };
                var _viewportSize = { };
                var _nativeScrollbarMinSize = { };

                //naming:
                var _strMinusHidden = '-hidden';
                var _strMarginMinus = 'margin-';
                var _strPaddingMinus = 'padding-';
                var _strBorderMinus = 'border-';
                var _strTop = 'top';
                var _strRight = 'right';
                var _strBottom = 'bottom';
                var _strLeft = 'left';
                var _strMinMinus = 'min-';
                var _strMaxMinus = 'max-';
                var _strWidth = 'width';
                var _strHeight = 'height';
                var _strFloat = 'float';
                var _strEmpty = '';
                var _strAuto = 'auto';
                var _strSync = 'sync';
                var _strScroll = 'scroll';
                var _strHundredPercent = '100%';
                var _strX = 'x';
                var _strY = 'y';
                var _strDot = '.';
                var _strSpace = ' ';
                var _strScrollbar = 'scrollbar';
                var _strMinusHorizontal = '-horizontal';
                var _strMinusVertical = '-vertical';
                var _strScrollLeft = _strScroll + 'Left';
                var _strScrollTop = _strScroll + 'Top';
                var _strMouseTouchDownEvent = 'mousedown touchstart';
                var _strMouseTouchUpEvent = 'mouseup touchend touchcancel';
                var _strMouseTouchMoveEvent = 'mousemove touchmove';
                var _strMouseTouchEnter = 'mouseenter';
                var _strMouseTouchLeave = 'mouseleave';
                var _strKeyDownEvent = 'keydown';
                var _strKeyUpEvent = 'keyup';
                var _strSelectStartEvent = 'selectstart';
                var _strTransitionEndEvent = 'transitionend webkitTransitionEnd oTransitionEnd';
                var _strResizeObserverProperty = '__overlayScrollbarsRO__';

                //class names:
                var _cassNamesPrefix = 'os-';
                var _classNameHTMLElement = _cassNamesPrefix + 'html';
                var _classNameHostElement = _cassNamesPrefix + 'host';
                var _classNameHostTextareaElement = _classNameHostElement + '-textarea';
                var _classNameHostScrollbarHorizontalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusHorizontal + _strMinusHidden;
                var _classNameHostScrollbarVerticalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusVertical + _strMinusHidden;
                var _classNameHostTransition = _classNameHostElement + '-transition';
                var _classNameHostRTL = _classNameHostElement + '-rtl';
                var _classNameHostResizeDisabled = _classNameHostElement + '-resize-disabled';
                var _classNameHostScrolling = _classNameHostElement + '-scrolling';
                var _classNameHostOverflow = _classNameHostElement + '-overflow';
                var _classNameHostOverflowX = _classNameHostOverflow + '-x';
                var _classNameHostOverflowY = _classNameHostOverflow + '-y';
                var _classNameTextareaElement = _cassNamesPrefix + 'textarea';
                var _classNameTextareaCoverElement = _classNameTextareaElement + '-cover';
                var _classNamePaddingElement = _cassNamesPrefix + 'padding';
                var _classNameViewportElement = _cassNamesPrefix + 'viewport';
                var _classNameViewportNativeScrollbarsInvisible = _classNameViewportElement + '-native-scrollbars-invisible';
                var _classNameViewportNativeScrollbarsOverlaid = _classNameViewportElement + '-native-scrollbars-overlaid';
                var _classNameContentElement = _cassNamesPrefix + 'content';
                var _classNameContentArrangeElement = _cassNamesPrefix + 'content-arrange';
                var _classNameContentGlueElement = _cassNamesPrefix + 'content-glue';
                var _classNameSizeAutoObserverElement = _cassNamesPrefix + 'size-auto-observer';
                var _classNameResizeObserverElement = _cassNamesPrefix + 'resize-observer';
                var _classNameResizeObserverItemElement = _cassNamesPrefix + 'resize-observer-item';
                var _classNameResizeObserverItemFinalElement = _classNameResizeObserverItemElement + '-final';
                var _classNameTextInherit = _cassNamesPrefix + 'text-inherit';
                var _classNameScrollbar = _cassNamesPrefix + _strScrollbar;
                var _classNameScrollbarTrack = _classNameScrollbar + '-track';
                var _classNameScrollbarTrackOff = _classNameScrollbarTrack + '-off';
                var _classNameScrollbarHandle = _classNameScrollbar + '-handle';
                var _classNameScrollbarHandleOff = _classNameScrollbarHandle + '-off';
                var _classNameScrollbarUnusable = _classNameScrollbar + '-unusable';
                var _classNameScrollbarAutoHidden = _classNameScrollbar + '-' + _strAuto + _strMinusHidden;
                var _classNameScrollbarCorner = _classNameScrollbar + '-corner';
                var _classNameScrollbarCornerResize = _classNameScrollbarCorner + '-resize';
                var _classNameScrollbarCornerResizeB = _classNameScrollbarCornerResize + '-both';
                var _classNameScrollbarCornerResizeH = _classNameScrollbarCornerResize + _strMinusHorizontal;
                var _classNameScrollbarCornerResizeV = _classNameScrollbarCornerResize + _strMinusVertical;
                var _classNameScrollbarHorizontal = _classNameScrollbar + _strMinusHorizontal;
                var _classNameScrollbarVertical = _classNameScrollbar + _strMinusVertical;
                var _classNameDragging = _cassNamesPrefix + 'dragging';
                var _classNameThemeNone = _cassNamesPrefix + 'theme-none';
                var _classNamesDynamicDestroy = [
                    _classNameViewportNativeScrollbarsInvisible,
                    _classNameViewportNativeScrollbarsOverlaid,
                    _classNameScrollbarTrackOff,
                    _classNameScrollbarHandleOff,
                    _classNameScrollbarUnusable,
                    _classNameScrollbarAutoHidden,
                    _classNameScrollbarCornerResize,
                    _classNameScrollbarCornerResizeB,
                    _classNameScrollbarCornerResizeH,
                    _classNameScrollbarCornerResizeV,
                    _classNameDragging].join(_strSpace);
                        
                //callbacks:
                var _callbacksInitQeueue = [ ];

                //options:
                var _defaultOptions;
                var _currentOptions;
                var _currentPreparedOptions;

                //extensions:
                var _extensions = { };
                var _extensionsPrivateMethods = 'added removed on contract';

                //update
                var _lastUpdateTime;
                var _swallowedUpdateHints = { };
                var _swallowedUpdateTimeout;
                var _swallowUpdateLag = 42;
                var _imgs = [ ];

                //DOM elements:
                var _windowElement;
                var _documentElement;
                var _htmlElement;
                var _bodyElement;
                var _targetElement;                     //the target element of this OverlayScrollbars object
                var _hostElement;                       //the host element of this OverlayScrollbars object -> may be the same as targetElement
                var _sizeAutoObserverElement;           //observes size auto changes
                var _sizeObserverElement;               //observes size and padding changes
                var _paddingElement;                    //manages the padding
                var _viewportElement;                   //is the viewport of our scrollbar model
                var _contentElement;                    //the element which holds the content
                var _contentArrangeElement;             //is needed for correct sizing of the content element (only if native scrollbars are overlays)
                var _contentGlueElement;                //has always the size of the content element
                var _textareaCoverElement;              //only applied if target is a textarea element. Used for correct size calculation and for prevention of uncontrolled scrolling
                var _scrollbarCornerElement;
                var _scrollbarHorizontalElement;
                var _scrollbarHorizontalTrackElement;
                var _scrollbarHorizontalHandleElement;
                var _scrollbarVerticalElement;
                var _scrollbarVerticalTrackElement;
                var _scrollbarVerticalHandleElement;
                var _windowElementNative;
                var _documentElementNative;
                var _targetElementNative;
                var _hostElementNative;
                var _sizeAutoObserverElementNative;
                var _sizeObserverElementNative;
                var _paddingElementNative;
                var _viewportElementNative;
                var _contentElementNative;

                //Cache:
                var _hostSizeCache;
                var _contentScrollSizeCache;
                var _arrangeContentSizeCache;
                var _hasOverflowCache;
                var _hideOverflowCache;
                var _widthAutoCache;
                var _heightAutoCache;
                var _cssMaxValueCache;
                var _cssBoxSizingCache;
                var _cssPaddingCache;
                var _cssBorderCache;
                var _cssMarginCache;
                var _cssDirectionCache;
                var _cssDirectionDetectedCache;
                var _paddingAbsoluteCache;
                var _clipAlwaysCache;
                var _contentGlueSizeCache;
                var _overflowBehaviorCache;
                var _overflowAmountCache;
                var _ignoreOverlayScrollbarHidingCache;
                var _autoUpdateCache;
                var _sizeAutoCapableCache;
                var _contentElementScrollSizeChangeDetectedCache;
                var _hostElementSizeChangeDetectedCache;
                var _scrollbarsVisibilityCache;
                var _scrollbarsAutoHideCache;
                var _scrollbarsClickScrollingCache;
                var _scrollbarsDragScrollingCache;
                var _resizeCache;
                var _normalizeRTLCache;
                var _classNameCache;
                var _oldClassName;
                var _textareaAutoWrappingCache;
                var _textareaInfoCache;
                var _textareaSizeCache;
                var _textareaDynHeightCache;
                var _textareaDynWidthCache;
                var _bodyMinSizeCache;
                var _viewportScrollSizeCache;
                var _displayIsHiddenCache;
                var _updateAutoCache = { };

                //MutationObserver:
                var _mutationObserverHost;
                var _mutationObserverContent;
                var _mutationObserverHostCallback;
                var _mutationObserverContentCallback;
                var _mutationObserversConnected;
                var _mutationObserverAttrsTextarea = ['wrap', 'cols', 'rows'];
                var _mutationObserverAttrsHost = [LEXICON.i, LEXICON.c, LEXICON.s, 'open'];

                //events:
                var _destroyEvents = [ ];

                //textarea:
                var _textareaHasFocus;

                //scrollbars:
                var _scrollbarsAutoHideTimeoutId;
                var _scrollbarsAutoHideMoveTimeoutId;
                var _scrollbarsAutoHideDelay;
                var _scrollbarsAutoHideNever;
                var _scrollbarsAutoHideScroll;
                var _scrollbarsAutoHideMove;
                var _scrollbarsAutoHideLeave;
                var _scrollbarsHandleHovered;
                var _scrollbarsHandlesDefineScrollPos;
                
                //resize
                var _resizeNone;
                var _resizeBoth;
                var _resizeHorizontal;
                var _resizeVertical;
                
                
                //==== Event Listener ====//

                /**
                 * Adds or removes a event listener from the given element. 
                 * @param element The element to which the event listener shall be applied or removed.
                 * @param eventNames The name(s) of the events.
                 * @param listener The method which shall be called.
                 * @param remove True if the handler shall be removed, false or undefined if the handler shall be added.
                 */
                function setupResponsiveEventListener(element, eventNames, listener, remove, passive) {
                    var collected = type(eventNames) == TYPES.a && type(listener) == TYPES.a;
                    var method = remove ? 'removeEventListener' : 'addEventListener';
                    var onOff = remove ? 'off' : 'on';
                    var events = collected ? false : eventNames.split(_strSpace);
                    var i = 0;

                    if(collected) {
                        for (; i < eventNames[LEXICON.l]; i++)
                            setupResponsiveEventListener(element, eventNames[i], listener[i], remove);
                    }
                    else {
                        for (; i < events[LEXICON.l]; i++) {
                            if(_supportPassiveEvents)
                                element[0][method](events[i], listener, { passive: passive || false });
                            else
                                element[onOff](events[i], listener);
                        }
                    }
                }


                function addDestroyEventListener(element, eventNames, listener, passive) {
                    setupResponsiveEventListener(element, eventNames, listener, false, passive);
                    _destroyEvents.push(COMPATIBILITY.bind(setupResponsiveEventListener, 0, element, eventNames, listener, true, passive));
                }

                //==== Resize Observer ====//

                /**
                 * Adds or removes a resize observer from the given element.
                 * @param targetElement The element to which the resize observer shall be added or removed.
                 * @param onElementResizedCallback The callback which is fired every time the resize observer registers a size change or false / undefined if the resizeObserver shall be removed.
                 */
                function setupResizeObserver(targetElement, onElementResizedCallback) {
                    if(targetElement) {
                        var resizeObserver = COMPATIBILITY.rO();
                        var strAnimationStartEvent = 'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart';
                        var strChildNodes = 'childNodes';
                        var constScroll = 3333333;
                        var callback = function () {
                            targetElement[_strScrollTop](constScroll)[_strScrollLeft](_isRTL ? _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll : constScroll);
                            onElementResizedCallback();
                        };
                        //add resize observer:
                        if(onElementResizedCallback) {
                            if (_supportResizeObserver) {
                                var element = targetElement.append(generateDiv(_classNameResizeObserverElement + ' observed')).contents()[0];
                                var observer = element[_strResizeObserverProperty] = new resizeObserver(callback);
                                observer.observe(element);
                            }
                            else {
                                if (_msieVersion > 9 || !_autoUpdateRecommended) {
                                    targetElement.prepend(
                                        generateDiv(_classNameResizeObserverElement,
                                            generateDiv({ c : _classNameResizeObserverItemElement, dir : 'ltr' },
                                                generateDiv(_classNameResizeObserverItemElement,
                                                    generateDiv(_classNameResizeObserverItemFinalElement)
                                                ) +
                                                generateDiv(_classNameResizeObserverItemElement,
                                                    generateDiv({ c : _classNameResizeObserverItemFinalElement, style : 'width: 200%; height: 200%' })
                                                )
                                            )
                                        )
                                    );

                                    var observerElement = targetElement[0][strChildNodes][0][strChildNodes][0];
                                    var shrinkElement = FRAMEWORK(observerElement[strChildNodes][1]);
                                    var expandElement = FRAMEWORK(observerElement[strChildNodes][0]);
                                    var expandElementChild = FRAMEWORK(expandElement[0][strChildNodes][0]);
                                    var widthCache = observerElement[LEXICON.oW];
                                    var heightCache = observerElement[LEXICON.oH];
                                    var isDirty;
                                    var rAFId;
                                    var currWidth;
                                    var currHeight;
                                    var factor = 2;
                                    var nativeScrollbarSize = globals.nativeScrollbarSize; //care don't make changes to this object!!!
                                    var reset = function () {
                                        /*
                                         var sizeResetWidth = observerElement[LEXICON.oW] + nativeScrollbarSize.x * factor + nativeScrollbarSize.y * factor + _overlayScrollbarDummySize.x + _overlayScrollbarDummySize.y;
                                         var sizeResetHeight = observerElement[LEXICON.oH] + nativeScrollbarSize.x * factor + nativeScrollbarSize.y * factor + _overlayScrollbarDummySize.x + _overlayScrollbarDummySize.y;
                                         var expandChildCSS = {};
                                         expandChildCSS[_strWidth] = sizeResetWidth;
                                         expandChildCSS[_strHeight] = sizeResetHeight;
                                         expandElementChild.css(expandChildCSS);


                                         expandElement[_strScrollLeft](sizeResetWidth)[_strScrollTop](sizeResetHeight);
                                         shrinkElement[_strScrollLeft](sizeResetWidth)[_strScrollTop](sizeResetHeight);
                                         */
                                        expandElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
                                        shrinkElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
                                    };
                                    var onResized = function () {
                                        rAFId = 0;
                                        if (!isDirty)
                                            return;

                                        widthCache = currWidth;
                                        heightCache = currHeight;
                                        callback();
                                    };
                                    var onScroll = function (event) {
                                        currWidth = observerElement[LEXICON.oW];
                                        currHeight = observerElement[LEXICON.oH];
                                        isDirty = currWidth != widthCache || currHeight != heightCache;

                                        if (event && isDirty && !rAFId) {
                                            COMPATIBILITY.cAF()(rAFId);
                                            rAFId = COMPATIBILITY.rAF()(onResized);
                                        }
                                        else if(!event)
                                            onResized();

                                        reset();
                                        if (event) {
                                            COMPATIBILITY.prvD(event);
                                            COMPATIBILITY.stpP(event);
                                        }
                                        return false;
                                    };
                                    var expandChildCSS = {};
                                    var observerElementCSS = {};

                                    setTopRightBottomLeft(observerElementCSS, _strEmpty, [
                                        -((nativeScrollbarSize.y + 1) * factor),
                                        nativeScrollbarSize.x * -factor,
                                        nativeScrollbarSize.y * -factor,
                                        -((nativeScrollbarSize.x + 1) * factor)
                                    ]);

                                    FRAMEWORK(observerElement).css(observerElementCSS);
                                    expandElement.on(_strScroll, onScroll);
                                    shrinkElement.on(_strScroll, onScroll);
                                    targetElement.on(strAnimationStartEvent, function () {
                                        onScroll(false);
                                    });
                                    //lets assume that the divs will never be that large and a constant value is enough
                                    expandChildCSS[_strWidth] = constScroll;
                                    expandChildCSS[_strHeight] = constScroll;
                                    expandElementChild.css(expandChildCSS);

                                    reset();
                                }
                                else {
                                    var attachEvent = _documentElementNative.attachEvent;
                                    var isIE = _msieVersion !== undefined$1;
                                    if (attachEvent) {
                                        targetElement.prepend(generateDiv(_classNameResizeObserverElement));
                                        findFirst(targetElement, _strDot + _classNameResizeObserverElement)[0].attachEvent('onresize', callback);
                                    }
                                    else {
                                        var obj = _documentElementNative.createElement(TYPES.o);
                                        obj.setAttribute('tabindex', '-1');
                                        obj.setAttribute(LEXICON.c, _classNameResizeObserverElement);
                                        obj.onload = function () {
                                            var wnd = this.contentDocument.defaultView;
                                            wnd.addEventListener('resize', callback);
                                            wnd.document.documentElement.style.display = 'none';
                                        };
                                        obj.type = 'text/html';
                                        if (isIE)
                                            targetElement.prepend(obj);
                                        obj.data = 'about:blank';
                                        if (!isIE)
                                            targetElement.prepend(obj);
                                        targetElement.on(strAnimationStartEvent, callback);
                                    }
                                }
                            }

                            if (targetElement[0] === _sizeObserverElementNative) {
                                var directionChanged = function() {
                                    var dir = _hostElement.css('direction');
                                    var css = {};
                                    var scrollLeftValue = 0;
                                    var result = false;
                                    if (dir !== _cssDirectionDetectedCache) {
                                        if (dir === 'ltr') {
                                            css[_strLeft] = 0;
                                            css[_strRight] = _strAuto;
                                            scrollLeftValue = constScroll;
                                        }
                                        else {
                                            css[_strLeft] = _strAuto;
                                            css[_strRight] = 0;
                                            scrollLeftValue = _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll;
                                        }
                                        //execution order is important for IE!!!
                                        _sizeObserverElement.children().eq(0).css(css);
                                        _sizeObserverElement[_strScrollLeft](scrollLeftValue)[_strScrollTop](constScroll);
                                        _cssDirectionDetectedCache = dir;
                                        result = true;
                                    }
                                    return result;
                                };
                                directionChanged();
                                addDestroyEventListener(targetElement, _strScroll, function(event) {
                                    if (directionChanged())
                                        update();
                                    COMPATIBILITY.prvD(event);
                                    COMPATIBILITY.stpP(event);
                                    return false;    
                                });
                            }
                        }
                        //remove resize observer:
                        else {
                            if (_supportResizeObserver) {
                                var element = targetElement.contents()[0];
                                var resizeObserverObj = element[_strResizeObserverProperty];
                                if(resizeObserverObj) {
                                    resizeObserverObj.disconnect();
                                    delete element[_strResizeObserverProperty];
                                }
                            }
                            else {
                                remove(targetElement.children(_strDot + _classNameResizeObserverElement).eq(0));
                            }
                        }
                    }
                }

                /**
                 * Freezes or unfreezes the given resize observer.
                 * @param targetElement The element to which the target resize observer is applied.
                 * @param freeze True if the resize observer shall be frozen, false otherwise.
                 
                function freezeResizeObserver(targetElement, freeze) {
                    if (targetElement !== undefined) {
                        if(freeze) {
                            if (_supportResizeObserver) {
                                var element = targetElement.contents()[0];
                                element[_strResizeObserverProperty].unobserve(element);
                            }
                            else {
                                targetElement = targetElement.children(_strDot + _classNameResizeObserverElement).eq(0);
                                var w = targetElement.css(_strWidth);
                                var h = targetElement.css(_strHeight);
                                var css = {};
                                css[_strWidth] = w;
                                css[_strHeight] = h;
                                targetElement.css(css);
                            }
                        }
                        else {
                            if (_supportResizeObserver) {
                                var element = targetElement.contents()[0];
                                element[_strResizeObserverProperty].observe(element);
                            }
                            else {
                                var css = { };
                                css[_strHeight] = _strEmpty;
                                css[_strWidth] = _strEmpty;
                                targetElement.children(_strDot + _classNameResizeObserverElement).eq(0).css(css);
                            }
                        }
                    }
                }
                */


                //==== Mutation Observers ====//

                /**
                 * Creates MutationObservers for the host and content Element if they are supported.
                 */
                function createMutationObservers() {
                    if (_supportMutationObserver) {
                        var mutationObserverContentLag = 11;
                        var mutationObserver = COMPATIBILITY.mO();
                        var contentLastUpdate = COMPATIBILITY.now();
                        var mutationTarget;
                        var mutationAttrName;
                        var contentTimeout;
                        var now;
                        var sizeAuto;
                        var action;

                        _mutationObserverHostCallback = function(mutations) {
                            var doUpdate = false;
                            var mutation;
                                
                            if (_initialized && !_sleeping) {
                                each(mutations, function () {
                                    mutation = this;
                                    mutationTarget = mutation.target;
                                    mutationAttrName = mutation.attributeName;

                                    if (mutationAttrName === LEXICON.c)
                                        doUpdate = hostClassNamesChanged(mutation.oldValue, mutationTarget.className);
                                    else if (mutationAttrName === LEXICON.s)
                                        doUpdate = mutation.oldValue !== mutationTarget[LEXICON.s].cssText;
                                    else
                                        doUpdate = true;

                                    if (doUpdate)
                                        return false;
                                });

                                if (doUpdate)
                                    _base.update(_strAuto);
                            }
                            return doUpdate;
                        };
                        _mutationObserverContentCallback = function (mutations) {
                            var doUpdate = false;
                            var mutation;
                            
                            if (_initialized && !_sleeping) {
                                each(mutations, function () {
                                    mutation = this;
                                    doUpdate = isUnknownMutation(mutation);
                                    return !doUpdate;
                                });

                                if (doUpdate) {
                                    now = COMPATIBILITY.now();
                                    sizeAuto = (_heightAutoCache || _widthAutoCache);
                                    action = function () {
                                        if(!_destroyed) {
                                            contentLastUpdate = now;

                                            //if cols, rows or wrap attr was changed
                                            if (_isTextarea)
                                                textareaUpdate();

                                            if (sizeAuto)
                                                update();
                                            else
                                                _base.update(_strAuto);
                                        }
                                    };
                                    clearTimeout(contentTimeout);
                                    if (mutationObserverContentLag <= 0 || now - contentLastUpdate > mutationObserverContentLag || !sizeAuto)
                                        action();
                                    else
                                        contentTimeout = setTimeout(action, mutationObserverContentLag);
                                }
                            }
                            return doUpdate;
                        };

                        _mutationObserverHost = new mutationObserver(_mutationObserverHostCallback);
                        _mutationObserverContent = new mutationObserver(_mutationObserverContentCallback);
                    }
                }

                /**
                 * Connects the MutationObservers if they are supported.
                 */
                function connectMutationObservers() {
                    if (_supportMutationObserver && !_mutationObserversConnected) {
                        _mutationObserverHost.observe(_hostElementNative, {
                            attributes: true,
                            attributeOldValue: true,
                            attributeFilter: _mutationObserverAttrsHost
                        });

                        _mutationObserverContent.observe(_isTextarea ? _targetElementNative : _contentElementNative, {
                            attributes: true,
                            attributeOldValue: true,
                            subtree: !_isTextarea,
                            childList: !_isTextarea,
                            characterData: !_isTextarea,
                            attributeFilter: _isTextarea ? _mutationObserverAttrsTextarea : _mutationObserverAttrsHost
                        });

                        _mutationObserversConnected = true;
                    }
                }

                /**
                 * Disconnects the MutationObservers if they are supported.
                 */
                function disconnectMutationObservers() {
                    if (_supportMutationObserver && _mutationObserversConnected) {
                        _mutationObserverHost.disconnect();
                        _mutationObserverContent.disconnect();

                        _mutationObserversConnected = false;
                    }
                }

               
               //==== Events of elements ====//

                /**
                 * This method gets called every time the host element gets resized. IMPORTANT: Padding changes are detected too!!
                 * It refreshes the hostResizedEventArgs and the hostSizeResizeCache.
                 * If there are any size changes, the update method gets called.
                 */
                function hostOnResized() {
                    if (!_sleeping) {
                        var changed;
                        var hostSize = {
                            w: _sizeObserverElementNative[LEXICON.sW],
                            h: _sizeObserverElementNative[LEXICON.sH]
                        };
                        
                        changed = checkCache(hostSize, _hostElementSizeChangeDetectedCache);
                        _hostElementSizeChangeDetectedCache = hostSize;
                        if (changed)
                            update({ _hostSizeChanged : true });
                    }
                }

                /**
                 * The mouse enter event of the host element. This event is only needed for the autoHide feature.
                 */
                function hostOnMouseEnter() {
                    if (_scrollbarsAutoHideLeave)
                        refreshScrollbarsAutoHide(true);
                }

                /**
                 * The mouse leave event of the host element. This event is only needed for the autoHide feature.
                 */
                function hostOnMouseLeave() {
                    if (_scrollbarsAutoHideLeave && !_bodyElement.hasClass(_classNameDragging))
                        refreshScrollbarsAutoHide(false);
                }

                /**
                 * The mouse move event of the host element. This event is only needed for the autoHide "move" feature.
                 */
                function hostOnMouseMove() {
                    if (_scrollbarsAutoHideMove) {
                        refreshScrollbarsAutoHide(true);
                        clearTimeout(_scrollbarsAutoHideMoveTimeoutId);
                        _scrollbarsAutoHideMoveTimeoutId = setTimeout(function () {
                            if (_scrollbarsAutoHideMove && !_destroyed)
                                refreshScrollbarsAutoHide(false);
                        }, 100);
                    }
                }

                /**
                 * Prevents text from deselection if attached to the document element on the mousedown event of a DOM element.
                 * @param event The select start event.
                 */
                function documentOnSelectStart(event) {
                    COMPATIBILITY.prvD(event);
                    return false;
                }

                /**
                 * A callback which will be called after a img element has downloaded its src asynchronous.
                 */
                function imgOnLoad() {
                    update({ _contentSizeChanged : true });
                }

                 /**
                 * Adds or removes mouse & touch events of the host element. (for handling auto-hiding of the scrollbars)
                 * @param destroy Indicates whether the events shall be added or removed.
                 */
                function setupHostMouseTouchEvents(destroy) {
                    setupResponsiveEventListener(_hostElement, 
                        _strMouseTouchMoveEvent, 
                        hostOnMouseMove, 
                        (_scrollbarsAutoHideMove ? destroy : true), true);
                    setupResponsiveEventListener(_hostElement, 
                        [ _strMouseTouchEnter, _strMouseTouchLeave ],
                        [ hostOnMouseEnter, hostOnMouseLeave ], 
                        (_scrollbarsAutoHideMove ? true : destroy), true);

                    //if the plugin is initialized and the mouse is over the host element, make the scrollbars visible
                    if(!_initialized && !destroy)
                        _hostElement.one('mouseover', hostOnMouseEnter);
                }


                //==== Update Detection ====//

                /**
                 * Measures the min width and min height of the body element and refreshes the related cache.
                 * @returns {boolean} True if the min width or min height has changed, false otherwise.
                 */
                function bodyMinSizeChanged() {
                    var bodyMinSize = {};
                    if (_isBody && _contentArrangeElement) {
                        bodyMinSize.w = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strWidth));
                        bodyMinSize.h = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strHeight));
                        bodyMinSize.c = checkCache(bodyMinSize, _bodyMinSizeCache);
                        bodyMinSize.f = true; //flag for "measured at least once"
                    }
                    _bodyMinSizeCache = bodyMinSize;
                    return !!bodyMinSize.c;
                }

                /**
                 * Returns true if the class names really changed (new class without plugin host prefix)
                 * @param oldCassNames The old ClassName string.
                 * @param newClassNames The new ClassName string.
                 * @returns {boolean} True if the class names has really changed, false otherwise.
                 */
                function hostClassNamesChanged(oldCassNames, newClassNames) {
                    var currClasses = (newClassNames !== undefined$1 && newClassNames !== null) ? newClassNames.split(_strSpace) : _strEmpty;
                    var oldClasses = (oldCassNames !== undefined$1 && oldCassNames !== null) ? oldCassNames.split(_strSpace) : _strEmpty;
                    if (currClasses === _strEmpty && oldClasses === _strEmpty)
                        return false;
                    var diff = getArrayDifferences(oldClasses, currClasses);
                    var changed = false;
                    var oldClassNames = _oldClassName !== undefined$1 && _oldClassName !== null ? _oldClassName.split(_strSpace) : [_strEmpty];
                    var currClassNames = _classNameCache !== undefined$1 && _classNameCache !== null ? _classNameCache.split(_strSpace) : [_strEmpty];

                    //remove none theme from diff list to prevent update
                    var idx = inArray(_classNameThemeNone, diff);
                    var curr;
                    var i;
                    var v;
                    var o;
                    var c;

                    if (idx > -1)
                        diff.splice(idx, 1);

                    for (i = 0; i < diff.length; i++) {
                        curr = diff[i];
                        if (curr.indexOf(_classNameHostElement) !== 0) {
                            o = true;
                            c = true;
                            for (v = 0; v < oldClassNames.length; v++) {
                                if (curr === oldClassNames[v]) {
                                    o = false;
                                    break;
                                }
                            }
                            for (v = 0; v < currClassNames.length; v++) {
                                if (curr === currClassNames[v]) {
                                    c = false;
                                    break;
                                }
                            }
                            if (o && c) {
                                changed = true;
                                break;
                            }
                        }

                    }
                    return changed;
                }

                /**
                 * Returns true if the given mutation is not from a from the plugin generated element. If the target element is a textarea the mutation is always unknown.
                 * @param mutation The mutation which shall be checked.
                 * @returns {boolean} True if the mutation is from a unknown element, false otherwise.
                 */
                function isUnknownMutation(mutation) {
                    var attributeName = mutation.attributeName;
                    var mutationTarget = mutation.target;
                    var mutationType = mutation.type;
                    var strClosest = 'closest';

                    if (mutationTarget === _contentElementNative)
                        return attributeName === null;
                    if (mutationType === 'attributes' && (attributeName === LEXICON.c || attributeName === LEXICON.s) && !_isTextarea) {
                        //ignore className changes by the plugin
                        if (attributeName === LEXICON.c && FRAMEWORK(mutationTarget).hasClass(_classNameHostElement))
                            return hostClassNamesChanged(mutation.oldValue, mutationTarget.getAttribute(LEXICON.c));

                        //only do it of browser support it natively
                        if (typeof mutationTarget[strClosest] != TYPES.f)
                            return true;
                        if (mutationTarget[strClosest](_strDot + _classNameResizeObserverElement) !== null ||
                            mutationTarget[strClosest](_strDot + _classNameScrollbar) !== null ||
                            mutationTarget[strClosest](_strDot + _classNameScrollbarCorner) !== null)
                            return false;
                    }
                    return true;
                }

                /**
                 * Returns true if the content size was changed since the last time this method was called.
                 * @returns {boolean} True if the content size was changed, false otherwise.
                 */
                function updateAutoContentSizeChanged() {
                    if (_sleeping)
                        return false;
                    
                    var contentMeasureElement = getContentMeasureElement();
                    var textareaValueLength = _isTextarea && _widthAutoCache && !_textareaAutoWrappingCache ? _targetElement.val().length : 0;
                    var setCSS = !_mutationObserversConnected && _widthAutoCache && !_isTextarea;
                    var viewportScrollSize = { };
                    var css = { };
                    var float;
                    var bodyMinSizeC;
                    var changed;
                    var viewportScrollSizeChanged;
                    var contentElementScrollSize;

                    //fix for https://bugzilla.mozilla.org/show_bug.cgi?id=1439305, it only works with "clipAlways : true"
                    //it can work with "clipAlways : false" too, but I had to set the overflow of the viewportElement to hidden every time before measuring
                    if(_restrictedMeasuring) {
                        viewportScrollSize = {
                            x : _viewportElementNative[LEXICON.sW],
                            y : _viewportElementNative[LEXICON.sH]
                        };
                    }
                    if (setCSS) {
                        float = _contentElement.css(_strFloat);
                        css[_strFloat] = _isRTL ? _strRight : _strLeft;
                        css[_strWidth] = _strAuto;
                        _contentElement.css(css);
                    }
                    contentElementScrollSize = {
                        w: contentMeasureElement[LEXICON.sW] + textareaValueLength,
                        h: contentMeasureElement[LEXICON.sH] + textareaValueLength
                    };
                    if (setCSS) {
                        css[_strFloat] = float;
                        css[_strWidth] = _strHundredPercent;
                        _contentElement.css(css);
                    }

                    bodyMinSizeC = bodyMinSizeChanged();
                    changed = checkCache(contentElementScrollSize, _contentElementScrollSizeChangeDetectedCache);
                    viewportScrollSizeChanged = checkCache(viewportScrollSize, _viewportScrollSizeCache);

                    _contentElementScrollSizeChangeDetectedCache = contentElementScrollSize;
                    _viewportScrollSizeCache = viewportScrollSize;

                    return changed || bodyMinSizeC || viewportScrollSizeChanged;
                }

                /**
                 * Returns true when a attribute which the MutationObserver would observe has changed.  
                 * @returns {boolean} True if one of the attributes which a MutationObserver would observe has changed, false or undefined otherwise.
                 */
                function meaningfulAttrsChanged() {
                    if (_sleeping || _mutationObserversConnected)
                        return;
                    
                    var changed;
                    var elem;
                    var curr;
                    var cache;
                    var checks = [
                        {
                            _elem: _hostElement, 
                            _props : _mutationObserverAttrsHost.concat(':visible')
                        },
                        {
                            _elem: _isTextarea ? _targetElement : undefined$1, 
                            _props : _mutationObserverAttrsTextarea
                        }
                    ];
                    
                    each(checks, function(index, check) { 
                        elem = check._elem;
                        if(elem) {
                            each(check._props, function(index, prop) { 
                                curr = prop.charAt(0) === ':' ? elem.is(prop) : elem.attr(prop);
                                cache = _updateAutoCache[prop];
                                
                                changed = changed || checkCache(curr, cache);
                                
                                _updateAutoCache[prop] = curr;
                            });
                        }
                    });
                    
                    return changed;
                }

                /**
                 * Checks is a CSS Property of a child element is affecting the scroll size of the content.
                 * @param propertyName The CSS property name.
                 * @returns {boolean} True if the property is affecting the content scroll size, false otherwise.
                 */
                function isSizeAffectingCSSProperty(propertyName) {
                    if (!_initialized)
                        return true;
                    var flexGrow = 'flex-grow';
                    var flexShrink = 'flex-shrink';
                    var flexBasis = 'flex-basis';
                    var affectingPropsX = [
                        _strWidth,
                        _strMinMinus + _strWidth,
                        _strMaxMinus + _strWidth,
                        _strMarginMinus + _strLeft,
                        _strMarginMinus + _strRight,
                        _strLeft,
                        _strRight,
                        'font-weight',
                        'word-spacing',
                        flexGrow,
                        flexShrink,
                        flexBasis
                    ];
                    var affectingPropsXContentBox = [
                        _strPaddingMinus + _strLeft,
                        _strPaddingMinus + _strRight,
                        _strBorderMinus + _strLeft + _strWidth,
                        _strBorderMinus + _strRight + _strWidth
                    ];
                    var affectingPropsY = [
                        _strHeight,
                        _strMinMinus + _strHeight,
                        _strMaxMinus + _strHeight,
                        _strMarginMinus + _strTop,
                        _strMarginMinus + _strBottom,
                        _strTop,
                        _strBottom,
                        'line-height',
                        flexGrow,
                        flexShrink,
                        flexBasis
                    ];
                    var affectingPropsYContentBox = [
                        _strPaddingMinus + _strTop,
                        _strPaddingMinus + _strBottom,
                        _strBorderMinus + _strTop + _strWidth,
                        _strBorderMinus + _strBottom + _strWidth
                    ];
                    var _strS = 's';
                    var _strVS = 'v-s';
                    var checkX = _overflowBehaviorCache.x === _strS || _overflowBehaviorCache.x === _strVS;
                    var checkY = _overflowBehaviorCache.y === _strS || _overflowBehaviorCache.y === _strVS;
                    var sizeIsAffected = false;
                    var checkPropertyName = function (arr, name) {
                        for (var i = 0; i < arr[LEXICON.l]; i++) {
                            if (arr[i] === name)
                                return true;
                        }
                        return false;
                    };

                    if (checkY) {
                        sizeIsAffected = checkPropertyName(affectingPropsY, propertyName);
                        if (!sizeIsAffected && !_isBorderBox)
                            sizeIsAffected = checkPropertyName(affectingPropsYContentBox, propertyName);
                    }
                    if (checkX && !sizeIsAffected) {
                        sizeIsAffected = checkPropertyName(affectingPropsX, propertyName);
                        if (!sizeIsAffected && !_isBorderBox)
                            sizeIsAffected = checkPropertyName(affectingPropsXContentBox, propertyName);
                    }
                    return sizeIsAffected;
                }

                
                //==== Update ====//

                /**
                 * Updates the variables and size of the textarea element, and manages the scroll on new line or new character.
                 */
                function textareaUpdate() {
                    if (!_sleeping) {
                        var wrapAttrOff = !_textareaAutoWrappingCache;
                        var minWidth = _viewportSize.w;
                        var minHeight = _viewportSize.h;
                        var css = { };
                        var doMeasure = _widthAutoCache || wrapAttrOff;
                        var origWidth;
                        var width;
                        var origHeight;
                        var height;

                        //reset min size
                        css[_strMinMinus + _strWidth] = _strEmpty;
                        css[_strMinMinus + _strHeight] = _strEmpty;

                        //set width auto
                        css[_strWidth] = _strAuto;
                        _targetElement.css(css);

                        //measure width
                        origWidth = _targetElementNative[LEXICON.oW];
                        width = doMeasure ? MATH.max(origWidth, _targetElementNative[LEXICON.sW] - 1) : 1;
                        /*width += (_widthAutoCache ? _marginX + (!_isBorderBox ? wrapAttrOff ? 0 : _paddingX + _borderX : 0) : 0);*/

                        //set measured width
                        css[_strWidth] = _widthAutoCache ? _strAuto /*width*/ : _strHundredPercent;
                        css[_strMinMinus + _strWidth] = _strHundredPercent;

                        //set height auto
                        css[_strHeight] = _strAuto;
                        _targetElement.css(css);

                        //measure height
                        origHeight = _targetElementNative[LEXICON.oH];
                        height = MATH.max(origHeight, _targetElementNative[LEXICON.sH] - 1);

                        //append correct size values
                        css[_strWidth] = width;
                        css[_strHeight] = height;
                        _textareaCoverElement.css(css);

                        //apply min width / min height to prevent textarea collapsing
                        css[_strMinMinus + _strWidth] = minWidth /*+ (!_isBorderBox && _widthAutoCache ? _paddingX + _borderX : 0)*/;
                        css[_strMinMinus + _strHeight] = minHeight /*+ (!_isBorderBox && _heightAutoCache ? _paddingY + _borderY : 0)*/;
                        _targetElement.css(css);

                        return {
                            _originalWidth: origWidth,
                            _originalHeight: origHeight,
                            _dynamicWidth: width,
                            _dynamicHeight: height
                        };
                    }
                }

                /**
                 * Updates the plugin and DOM to the current options.
                 * This method should only be called if a update is 100% required.
                 * @param updateHints A objects which contains hints for this update:
                 * {
                 *   _hostSizeChanged : boolean,
                 *   _contentSizeChanged : boolean,
                 *   _force : boolean,                             == preventSwallowing
                 *   _changedOptions : { },                        == preventSwallowing && preventSleep
                *  }
                 */
                function update(updateHints) {
                    clearTimeout(_swallowedUpdateTimeout);
                    updateHints = updateHints || { };
                    _swallowedUpdateHints._hostSizeChanged |= updateHints._hostSizeChanged;
                    _swallowedUpdateHints._contentSizeChanged |= updateHints._contentSizeChanged;
                    _swallowedUpdateHints._force |= updateHints._force;
                    
                    var now = COMPATIBILITY.now();
                    var hostSizeChanged = !!_swallowedUpdateHints._hostSizeChanged;
                    var contentSizeChanged = !!_swallowedUpdateHints._contentSizeChanged;
                    var force = !!_swallowedUpdateHints._force;
                    var changedOptions = updateHints._changedOptions;    
                    var swallow =  _initialized && !_destroyed && !force && !changedOptions && (now - _lastUpdateTime) < _swallowUpdateLag && (!_heightAutoCache && !_widthAutoCache);                    
                    var displayIsHidden;

                    if(swallow)
                        _swallowedUpdateTimeout = setTimeout(update, _swallowUpdateLag);

                    //abort update due to:
                    //destroyed
                    //swallowing
                    //sleeping
                    //host is hidden or has false display
                    if (_destroyed || swallow || (_sleeping && !changedOptions) || (_initialized && !force && (displayIsHidden = _hostElement.is(':hidden'))) || _hostElement.css('display') === 'inline')
                        return;

                    _lastUpdateTime = now;
                    _swallowedUpdateHints = { };
                    
                    //if scrollbar styling is possible and native scrollbars aren't overlaid the scrollbar styling will be applied which hides the native scrollbars completely.
                    if (_nativeScrollbarStyling && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)) {
                        //native scrollbars are hidden, so change the values to zero
                        _nativeScrollbarSize.x = 0;
                        _nativeScrollbarSize.y = 0;
                    }
                    else {
                        //refresh native scrollbar size (in case of zoom)
                        _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize);
                    }

                    // Scrollbar padding is needed for firefox, because firefox hides scrollbar automatically if the size of the div is too small.
                    // The calculation: [scrollbar size +3 *3]
                    // (+3 because of possible decoration e.g. borders, margins etc., but only if native scrollbar is NOT a overlaid scrollbar)
                    // (*3 because (1)increase / (2)decrease -button and (3)resize handle)
                    _nativeScrollbarMinSize = {
                        x: (_nativeScrollbarSize.x + (_nativeScrollbarIsOverlaid.x ? 0 : 3)) * 3,
                        y: (_nativeScrollbarSize.y + (_nativeScrollbarIsOverlaid.y ? 0 : 3)) * 3
                    };
                    
                    //changedOptions = changedOptions || { };
                    //freezeResizeObserver(_sizeObserverElement, true);
                    //freezeResizeObserver(_sizeAutoObserverElement, true);
                    
                    var checkCacheAutoForce = function () {
                        return checkCache.apply(this, [].slice.call(arguments).concat([ force ]));
                    };
                    
                    //save current scroll offset
                    var currScroll = {
                        x: _viewportElement[_strScrollLeft](),
                        y: _viewportElement[_strScrollTop]()
                    };

                    var currentPreparedOptionsScrollbars = _currentPreparedOptions.scrollbars;
                    var currentPreparedOptionsTextarea = _currentPreparedOptions.textarea;

                    //scrollbars visibility:
                    var scrollbarsVisibility = currentPreparedOptionsScrollbars.visibility;
                    var scrollbarsVisibilityChanged = checkCacheAutoForce(scrollbarsVisibility, _scrollbarsVisibilityCache);

                    //scrollbars autoHide:
                    var scrollbarsAutoHide = currentPreparedOptionsScrollbars.autoHide;
                    var scrollbarsAutoHideChanged = checkCacheAutoForce(scrollbarsAutoHide, _scrollbarsAutoHideCache);

                    //scrollbars click scrolling
                    var scrollbarsClickScrolling = currentPreparedOptionsScrollbars.clickScrolling;
                    var scrollbarsClickScrollingChanged = checkCacheAutoForce(scrollbarsClickScrolling, _scrollbarsClickScrollingCache);

                    //scrollbars drag scrolling
                    var scrollbarsDragScrolling = currentPreparedOptionsScrollbars.dragScrolling;
                    var scrollbarsDragScrollingChanged = checkCacheAutoForce(scrollbarsDragScrolling, _scrollbarsDragScrollingCache);

                    //className
                    var className = _currentPreparedOptions.className;
                    var classNameChanged = checkCacheAutoForce(className, _classNameCache);

                    //resize
                    var resize = _currentPreparedOptions.resize;
                    var resizeChanged = checkCacheAutoForce(resize, _resizeCache) && !_isBody; //body can't be resized since the window itself acts as resize possibility.

                    //paddingAbsolute
                    var paddingAbsolute = _currentPreparedOptions.paddingAbsolute;
                    var paddingAbsoluteChanged = checkCacheAutoForce(paddingAbsolute, _paddingAbsoluteCache);

                    //clipAlways
                    var clipAlways = _currentPreparedOptions.clipAlways;
                    var clipAlwaysChanged = checkCacheAutoForce(clipAlways, _clipAlwaysCache);

                    //sizeAutoCapable
                    var sizeAutoCapable = _currentPreparedOptions.sizeAutoCapable && !_isBody; //body can never be size auto, because it shall be always as big as the viewport.
                    var sizeAutoCapableChanged = checkCacheAutoForce(sizeAutoCapable, _sizeAutoCapableCache);

                    //showNativeScrollbars
                    var ignoreOverlayScrollbarHiding = _currentPreparedOptions.nativeScrollbarsOverlaid.showNativeScrollbars;
                    var ignoreOverlayScrollbarHidingChanged = checkCacheAutoForce(ignoreOverlayScrollbarHiding, _ignoreOverlayScrollbarHidingCache);

                    //autoUpdate
                    var autoUpdate = _currentPreparedOptions.autoUpdate;
                    var autoUpdateChanged = checkCacheAutoForce(autoUpdate, _autoUpdateCache);

                    //overflowBehavior
                    var overflowBehavior = _currentPreparedOptions.overflowBehavior;
                    var overflowBehaviorChanged = checkCacheAutoForce(overflowBehavior, _overflowBehaviorCache, force);

                    //dynWidth:
                    var textareaDynWidth = currentPreparedOptionsTextarea.dynWidth;
                    var textareaDynWidthChanged = checkCacheAutoForce(_textareaDynWidthCache, textareaDynWidth);

                    //dynHeight:
                    var textareaDynHeight = currentPreparedOptionsTextarea.dynHeight;
                    var textareaDynHeightChanged = checkCacheAutoForce(_textareaDynHeightCache, textareaDynHeight);

                    //scrollbars visibility
                    _scrollbarsAutoHideNever = scrollbarsAutoHide === 'n';
                    _scrollbarsAutoHideScroll = scrollbarsAutoHide === 's';
                    _scrollbarsAutoHideMove = scrollbarsAutoHide === 'm';
                    _scrollbarsAutoHideLeave = scrollbarsAutoHide === 'l';

                    //scrollbars autoHideDelay
                    _scrollbarsAutoHideDelay = currentPreparedOptionsScrollbars.autoHideDelay;

                    //old className
                    _oldClassName = _classNameCache;

                    //resize
                    _resizeNone = resize === 'n';
                    _resizeBoth = resize === 'b';
                    _resizeHorizontal = resize === 'h';
                    _resizeVertical = resize === 'v';

                    //normalizeRTL
                    _normalizeRTLCache = _currentPreparedOptions.normalizeRTL;

                    //ignore overlay scrollbar hiding
                    ignoreOverlayScrollbarHiding = ignoreOverlayScrollbarHiding && (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y);

                    //refresh options cache
                    _scrollbarsVisibilityCache = scrollbarsVisibility;
                    _scrollbarsAutoHideCache = scrollbarsAutoHide;
                    _scrollbarsClickScrollingCache = scrollbarsClickScrolling;
                    _scrollbarsDragScrollingCache = scrollbarsDragScrolling;
                    _classNameCache = className;
                    _resizeCache = resize;
                    _paddingAbsoluteCache = paddingAbsolute;
                    _clipAlwaysCache = clipAlways;
                    _sizeAutoCapableCache = sizeAutoCapable;
                    _ignoreOverlayScrollbarHidingCache = ignoreOverlayScrollbarHiding;
                    _autoUpdateCache = autoUpdate;
                    _overflowBehaviorCache = extendDeep({}, overflowBehavior);
                    _textareaDynWidthCache = textareaDynWidth;
                    _textareaDynHeightCache = textareaDynHeight;
                    _hasOverflowCache = _hasOverflowCache || { x: false, y: false };

                    //set correct class name to the host element
                    if (classNameChanged) {
                        removeClass(_hostElement, _oldClassName + _strSpace + _classNameThemeNone);
                        addClass(_hostElement, className !== undefined$1 && className !== null && className.length > 0 ? className : _classNameThemeNone);
                    }

                    //set correct auto Update
                    if (autoUpdateChanged) {
                        if (autoUpdate === true) {
                            disconnectMutationObservers();
                            autoUpdateLoop.add(_base);
                        }
                        else if (autoUpdate === null) {
                            if (_autoUpdateRecommended) {
                                disconnectMutationObservers();
                                autoUpdateLoop.add(_base);
                            }
                            else {
                                autoUpdateLoop.remove(_base);
                                connectMutationObservers();
                            }
                        }
                        else {
                            autoUpdateLoop.remove(_base);
                            connectMutationObservers();
                        }
                    }

                    //activate or deactivate size auto capability
                    if (sizeAutoCapableChanged) {
                        if (sizeAutoCapable) {
                            if (!_contentGlueElement) {
                                _contentGlueElement = FRAMEWORK(generateDiv(_classNameContentGlueElement));
                                _paddingElement.before(_contentGlueElement);
                            }
                            else {
                                _contentGlueElement.show();
                            }
                            if (_sizeAutoObserverAdded) {
                                _sizeAutoObserverElement.show();
                            }
                            else {
                                _sizeAutoObserverElement = FRAMEWORK(generateDiv(_classNameSizeAutoObserverElement));
                                _sizeAutoObserverElementNative = _sizeAutoObserverElement[0];

                                _contentGlueElement.before(_sizeAutoObserverElement);
                                var oldSize = {w: -1, h: -1};
                                setupResizeObserver(_sizeAutoObserverElement, function () {
                                    var newSize = {
                                        w: _sizeAutoObserverElementNative[LEXICON.oW],
                                        h: _sizeAutoObserverElementNative[LEXICON.oH]
                                    };
                                    if (checkCache(newSize, oldSize)) {
                                        if (_initialized && (_heightAutoCache && newSize.h > 0) || (_widthAutoCache && newSize.w > 0)) {
                                            update();
                                        }
                                        else if (_initialized && (!_heightAutoCache && newSize.h === 0) || (!_widthAutoCache && newSize.w === 0)) {
                                            update();
                                        }
                                    }
                                    oldSize = newSize;
                                });
                                _sizeAutoObserverAdded = true;
                                //fix heightAuto detector bug if height is fixed but contentHeight is 0.
                                //the probability this bug will ever happen is very very low, thats why its ok if we use calc which isn't supported in IE8.
                                if (_cssCalc !== null)
                                    _sizeAutoObserverElement.css(_strHeight, _cssCalc + '(100% + 1px)');
                            }
                        }
                        else {
                            if (_sizeAutoObserverAdded)
                                _sizeAutoObserverElement.hide();
                            if (_contentGlueElement)
                                _contentGlueElement.hide();
                        }
                    }

                    //if force, update all resizeObservers too
                    if (force) {
                        _sizeObserverElement.find('*').trigger(_strScroll);
                        if (_sizeAutoObserverAdded)
                            _sizeAutoObserverElement.find('*').trigger(_strScroll);
                    }

                    //display hidden:
                    displayIsHidden = displayIsHidden === undefined$1 ? _hostElement.is(':hidden') : displayIsHidden;
                    var displayIsHiddenChanged = checkCacheAutoForce(displayIsHidden, _displayIsHiddenCache);

                    //textarea AutoWrapping:
                    var textareaAutoWrapping = _isTextarea ? _targetElement.attr('wrap') !== 'off' : false;
                    var textareaAutoWrappingChanged = checkCacheAutoForce(textareaAutoWrapping, _textareaAutoWrappingCache);

                    //detect direction:
                    var cssDirection = _hostElement.css('direction');
                    var cssDirectionChanged = checkCacheAutoForce(cssDirection, _cssDirectionCache);

                    //detect box-sizing:
                    var boxSizing = _hostElement.css('box-sizing');
                    var boxSizingChanged = checkCacheAutoForce(boxSizing, _cssBoxSizingCache);

                    //detect padding:
                    var padding = {
                        c: force,
                        t: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strTop)),
                        r: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strRight)),
                        b: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strBottom)),
                        l: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strLeft))
                    };
                    
                    //width + height auto detecting var:
                    var sizeAutoObserverElementBCRect;
                    //exception occurs in IE8 sometimes (unknown exception)
                    try {
                        sizeAutoObserverElementBCRect = _sizeAutoObserverAdded ? _sizeAutoObserverElementNative[LEXICON.bCR]() : null;
                    } catch (ex) {
                        return;
                    }

                    _isRTL = cssDirection === 'rtl';
                    _isBorderBox = (boxSizing === 'border-box');
                    var isRTLLeft = _isRTL ? _strLeft : _strRight;
                    var isRTLRight = _isRTL ? _strRight : _strLeft;

                    //detect width auto:
                    var widthAutoResizeDetection = false;
                    var widthAutoObserverDetection = (_sizeAutoObserverAdded && (_hostElement.css(_strFloat) !== 'none' /*|| _isTextarea */)) ? (MATH.round(sizeAutoObserverElementBCRect.right - sizeAutoObserverElementBCRect.left) === 0) && (!paddingAbsolute ? (_hostElementNative[LEXICON.cW] - _paddingX) > 0 : true) : false;
                    if (sizeAutoCapable && !widthAutoObserverDetection) {
                        var tmpCurrHostWidth = _hostElementNative[LEXICON.oW];
                        var tmpCurrContentGlueWidth = _contentGlueElement.css(_strWidth);
                        _contentGlueElement.css(_strWidth, _strAuto);

                        var tmpNewHostWidth = _hostElementNative[LEXICON.oW];
                        _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth);
                        widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth;
                        if (!widthAutoResizeDetection) {
                            _contentGlueElement.css(_strWidth, tmpCurrHostWidth + 1);
                            tmpNewHostWidth = _hostElementNative[LEXICON.oW];
                            _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth);
                            widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth;
                        }
                    }
                    var widthAuto = (widthAutoObserverDetection || widthAutoResizeDetection) && sizeAutoCapable && !displayIsHidden;
                    var widthAutoChanged = checkCacheAutoForce(widthAuto, _widthAutoCache);
                    var wasWidthAuto = !widthAuto && _widthAutoCache;

                    //detect height auto:
                    var heightAuto = _sizeAutoObserverAdded && sizeAutoCapable && !displayIsHidden ? (MATH.round(sizeAutoObserverElementBCRect.bottom - sizeAutoObserverElementBCRect.top) === 0) /* && (!paddingAbsolute && (_msieVersion > 9 || !_msieVersion) ? true : true) */ : false;
                    var heightAutoChanged = checkCacheAutoForce(heightAuto, _heightAutoCache);
                    var wasHeightAuto = !heightAuto && _heightAutoCache;

                    //detect border:
                    //we need the border only if border box and auto size
                    var strMinusWidth = '-' + _strWidth;
                    var updateBorderX = (widthAuto && _isBorderBox) || !_isBorderBox;
                    var updateBorderY = (heightAuto && _isBorderBox) || !_isBorderBox;
                    var border = {
                        c: force,
                        t: updateBorderY ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strTop + strMinusWidth), true) : 0,
                        r: updateBorderX ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strRight + strMinusWidth), true) : 0,
                        b: updateBorderY ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strBottom + strMinusWidth), true) : 0,
                        l: updateBorderX ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strLeft + strMinusWidth), true) : 0
                    };

                    //detect margin:
                    var margin = {
                        c: force,
                        t: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strTop)),
                        r: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strRight)),
                        b: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strBottom)),
                        l: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strLeft))
                    };

                    //detect css max width & height:
                    var cssMaxValue = {
                        h: String(_hostElement.css(_strMaxMinus + _strHeight)),
                        w: String(_hostElement.css(_strMaxMinus + _strWidth))
                    };

                    //vars to apply correct css
                    var contentElementCSS = { };
                    var contentGlueElementCSS = { };

                    //funcs
                    var getHostSize = function() {
                        //has to be clientSize because offsetSize respect borders
                        return {
                            w: _hostElementNative[LEXICON.cW],
                            h: _hostElementNative[LEXICON.cH]
                        };
                    };
                    var getViewportSize = function() {
                        //viewport size is padding container because it never has padding, margin and a border
                        //determine zoom rounding error -> sometimes scrollWidth/Height is smaller than clientWidth/Height
                        //if this happens add the difference to the viewportSize to compensate the rounding error
                        return {
                            w: _paddingElementNative[LEXICON.oW] + MATH.max(0, _contentElementNative[LEXICON.cW] - _contentElementNative[LEXICON.sW]),
                            h: _paddingElementNative[LEXICON.oH] + MATH.max(0, _contentElementNative[LEXICON.cH] - _contentElementNative[LEXICON.sH])
                        };
                    };

                    //set info for padding
                    var paddingAbsoluteX = _paddingX = padding.l + padding.r;
                    var paddingAbsoluteY = _paddingY = padding.t + padding.b;
                    paddingAbsoluteX *= paddingAbsolute ? 1 : 0;
                    paddingAbsoluteY *= paddingAbsolute ? 1 : 0;
                    padding.c = checkCacheAutoForce(padding, _cssPaddingCache);

                    //set info for border
                    _borderX = border.l + border.r;
                    _borderY = border.t + border.b;
                    border.c = checkCacheAutoForce(border, _cssBorderCache);

                    //set info for margin
                    _marginX = margin.l + margin.r;
                    _marginY = margin.t + margin.b;
                    margin.c = checkCacheAutoForce(margin, _cssMarginCache);

                    //set info for css max value
                    cssMaxValue.ih = parseToZeroOrNumber(cssMaxValue.h); //ih = integer height
                    cssMaxValue.iw = parseToZeroOrNumber(cssMaxValue.w); //iw = integer width
                    cssMaxValue.ch = cssMaxValue.h.indexOf('px') > -1; //ch = correct height
                    cssMaxValue.cw = cssMaxValue.w.indexOf('px') > -1; //cw = correct width
                    cssMaxValue.c = checkCacheAutoForce(cssMaxValue, _cssMaxValueCache);

                    //refresh cache
                    _displayIsHiddenCache = displayIsHidden;
                    _textareaAutoWrappingCache = textareaAutoWrapping;
                    _cssDirectionCache = cssDirection;
                    _cssBoxSizingCache = boxSizing;
                    _widthAutoCache = widthAuto;
                    _heightAutoCache = heightAuto;
                    _cssPaddingCache = padding;
                    _cssBorderCache = border;
                    _cssMarginCache = margin;
                    _cssMaxValueCache = cssMaxValue;
                        
                    //IEFix direction changed
                    if (cssDirectionChanged && _sizeAutoObserverAdded)
                        _sizeAutoObserverElement.css(_strFloat, isRTLRight);

                    //apply padding:
                    if (padding.c || cssDirectionChanged || paddingAbsoluteChanged || widthAutoChanged || heightAutoChanged || boxSizingChanged || sizeAutoCapableChanged) {
                        var paddingElementCSS = {};
                        var textareaCSS = {};
                        setTopRightBottomLeft(contentGlueElementCSS, _strMarginMinus, [-padding.t, -padding.r, -padding.b, -padding.l]);
                        if (paddingAbsolute) {
                            setTopRightBottomLeft(paddingElementCSS, _strEmpty, [padding.t, padding.r, padding.b, padding.l]);
                            if (_isTextarea)
                                setTopRightBottomLeft(textareaCSS, _strPaddingMinus);
                            else
                                setTopRightBottomLeft(contentElementCSS, _strPaddingMinus);
                        }
                        else {
                            setTopRightBottomLeft(paddingElementCSS, _strEmpty);
                            if (_isTextarea)
                                setTopRightBottomLeft(textareaCSS, _strPaddingMinus, [padding.t, padding.r, padding.b, padding.l]);
                            else
                                setTopRightBottomLeft(contentElementCSS, _strPaddingMinus, [padding.t, padding.r, padding.b, padding.l]);
                        }
                        _paddingElement.css(paddingElementCSS);
                        _targetElement.css(textareaCSS);
                    }

                    //viewport size is padding container because it never has padding, margin and a border.
                    _viewportSize = getViewportSize();

                    //update Textarea
                    var textareaSize = _isTextarea ? textareaUpdate() : false;
                    var textareaSizeChanged = _isTextarea && checkCacheAutoForce(textareaSize, _textareaSizeCache);
                    var textareaDynOrigSize = _isTextarea && textareaSize ? {
                        w : textareaDynWidth ? textareaSize._dynamicWidth : textareaSize._originalWidth,
                        h : textareaDynHeight ? textareaSize._dynamicHeight : textareaSize._originalHeight
                    } : { };
                    _textareaSizeCache = textareaSize;

                    //fix height auto / width auto in cooperation with current padding & boxSizing behavior:
                    if (heightAuto && (heightAutoChanged || paddingAbsoluteChanged || boxSizingChanged || cssMaxValue.c || padding.c || border.c)) {
                        /*
                        if (cssMaxValue.ch)
                            contentElementCSS[_strMaxMinus + _strHeight] =
                                (cssMaxValue.ch ? (cssMaxValue.ih - paddingAbsoluteY + (_isBorderBox ? -_borderY : _paddingY))
                                : _strEmpty);
                        */
                        contentElementCSS[_strHeight] = _strAuto;
                    }
                    else if (heightAutoChanged || paddingAbsoluteChanged) {
                        contentElementCSS[_strMaxMinus + _strHeight] = _strEmpty;
                        contentElementCSS[_strHeight] = _strHundredPercent;
                    }
                    if (widthAuto && (widthAutoChanged || paddingAbsoluteChanged || boxSizingChanged || cssMaxValue.c || padding.c || border.c || cssDirectionChanged)) {
                        /*
                        if (cssMaxValue.cw)
                            contentElementCSS[_strMaxMinus + _strWidth] =
                                (cssMaxValue.cw ? (cssMaxValue.iw - paddingAbsoluteX + (_isBorderBox ? -_borderX : _paddingX)) +
                                (_nativeScrollbarIsOverlaid.y ? _overlayScrollbarDummySize.y : 0)
                                : _strEmpty);
                        */
                        contentElementCSS[_strWidth] = _strAuto;
                        contentGlueElementCSS[_strMaxMinus + _strWidth] = _strHundredPercent; //IE Fix
                    }
                    else if (widthAutoChanged || paddingAbsoluteChanged) {
                        contentElementCSS[_strMaxMinus + _strWidth] = _strEmpty;
                        contentElementCSS[_strWidth] = _strHundredPercent;
                        contentElementCSS[_strFloat] = _strEmpty;
                        contentGlueElementCSS[_strMaxMinus + _strWidth] = _strEmpty; //IE Fix
                    }
                    if (widthAuto) {
                        if (!cssMaxValue.cw)
                            contentElementCSS[_strMaxMinus + _strWidth] = _strEmpty;
                        //textareaDynOrigSize.w || _strAuto :: doesnt works because applied margin will shift width
                        contentGlueElementCSS[_strWidth] = _strAuto;

                        contentElementCSS[_strWidth] = _strAuto;
                        contentElementCSS[_strFloat] = isRTLRight;
                    }
                    else {
                        contentGlueElementCSS[_strWidth] = _strEmpty;
                    }
                    if (heightAuto) {
                        if (!cssMaxValue.ch)
                            contentElementCSS[_strMaxMinus + _strHeight] = _strEmpty;
                        //textareaDynOrigSize.h || _contentElementNative[LEXICON.cH] :: use for anti scroll jumping
                        contentGlueElementCSS[_strHeight] = textareaDynOrigSize.h || _contentElementNative[LEXICON.cH];
                    }
                    else {
                        contentGlueElementCSS[_strHeight] = _strEmpty;
                    }
                    if (sizeAutoCapable)
                        _contentGlueElement.css(contentGlueElementCSS);
                    _contentElement.css(contentElementCSS);

                    //CHECKPOINT HERE ~
                    contentElementCSS = {};
                    contentGlueElementCSS = {};

                    //if [content(host) client / scroll size, or target element direction, or content(host) max-sizes] changed, or force is true
                    if (hostSizeChanged || contentSizeChanged || textareaSizeChanged || cssDirectionChanged || boxSizingChanged || paddingAbsoluteChanged || widthAutoChanged || widthAuto || heightAutoChanged || heightAuto || cssMaxValue.c || ignoreOverlayScrollbarHidingChanged || overflowBehaviorChanged || clipAlwaysChanged || resizeChanged || scrollbarsVisibilityChanged || scrollbarsAutoHideChanged || scrollbarsDragScrollingChanged || scrollbarsClickScrollingChanged || textareaDynWidthChanged || textareaDynHeightChanged || textareaAutoWrappingChanged) {
                        var strOverflow = 'overflow';
                        var strOverflowX = strOverflow + '-x';
                        var strOverflowY = strOverflow + '-y';
                        var strHidden = 'hidden';
                        var strVisible = 'visible';
                        //decide whether the content overflow must get hidden for correct overflow measuring, it !MUST! be always hidden if the height is auto
                        var hideOverflow4CorrectMeasuring = _restrictedMeasuring ?
                        (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) || //it must be hidden if native scrollbars are overlaid
                        (_viewportSize.w < _nativeScrollbarMinSize.y || _viewportSize.h < _nativeScrollbarMinSize.x) || //it must be hidden if host-element is too small
                        heightAuto || displayIsHiddenChanged //it must be hidden if height is auto or display was changed
                            : heightAuto; //if there is not the restricted Measuring bug, it must be hidden if the height is auto

                        //Reset the viewport (very important for natively overlaid scrollbars and zoom change
                        //don't change the overflow prop as it is very expensive and affects performance !A LOT!
                        var viewportElementResetCSS = { };
                        var resetXTmp = _hasOverflowCache.y && _hideOverflowCache.ys && !ignoreOverlayScrollbarHiding && !_nativeScrollbarStyling ? (_nativeScrollbarIsOverlaid.y ? _viewportElement.css(isRTLLeft) : -_nativeScrollbarSize.y) : 0;
                        var resetBottomTmp = _hasOverflowCache.x && _hideOverflowCache.xs && !ignoreOverlayScrollbarHiding && !_nativeScrollbarStyling ? (_nativeScrollbarIsOverlaid.x ? _viewportElement.css(_strBottom) : -_nativeScrollbarSize.x) : 0;
                        setTopRightBottomLeft(viewportElementResetCSS, _strEmpty);
                        _viewportElement.css(viewportElementResetCSS);
                        if(hideOverflow4CorrectMeasuring)
                            _contentElement.css(strOverflow, strHidden);

                        //measure several sizes:
                        var contentMeasureElement = getContentMeasureElement();
                        //in Firefox content element has to have overflow hidden, else element margins aren't calculated properly, this element prevents this bug, but only if scrollbars aren't overlaid
                        var contentMeasureElementGuaranty = _restrictedMeasuring && !hideOverflow4CorrectMeasuring ? _viewportElementNative : contentMeasureElement;
                        var contentSize = {
                            //use clientSize because natively overlaidScrollbars add borders
                            w: textareaDynOrigSize.w || contentMeasureElement[LEXICON.cW],
                            h: textareaDynOrigSize.h || contentMeasureElement[LEXICON.cH]
                        };
                        var scrollSize = {
                            w: MATH.max(contentMeasureElement[LEXICON.sW], contentMeasureElementGuaranty[LEXICON.sW]),
                            h: MATH.max(contentMeasureElement[LEXICON.sH], contentMeasureElementGuaranty[LEXICON.sH])
                        };

                        //apply the correct viewport style and measure viewport size
                        viewportElementResetCSS[_strBottom] = wasHeightAuto ? _strEmpty : resetBottomTmp;
                        viewportElementResetCSS[isRTLLeft] = wasWidthAuto ? _strEmpty : resetXTmp;
                        _viewportElement.css(viewportElementResetCSS);
                        _viewportSize = getViewportSize();

                        //measure and correct several sizes
                        var hostSize = getHostSize();
                        var contentGlueSize = {
                            //client/scrollSize + AbsolutePadding -> because padding is only applied to the paddingElement if its absolute, so you have to add it manually
                            //hostSize is clientSize -> so padding should be added manually, right? FALSE! Because content glue is inside hostElement, so we don't have to worry about padding
                            w: MATH.max((widthAuto ? contentSize.w : scrollSize.w) + paddingAbsoluteX, hostSize.w),
                            h: MATH.max((heightAuto ? contentSize.h : scrollSize.h) + paddingAbsoluteY, hostSize.h)
                        };
                        contentGlueSize.c = checkCacheAutoForce(contentGlueSize, _contentGlueSizeCache);
                        _contentGlueSizeCache = contentGlueSize;

                        //apply correct contentGlue size
                        if (sizeAutoCapable) {
                            //size contentGlue correctly to make sure the element has correct size if the sizing switches to auto
                            if (contentGlueSize.c || (heightAuto || widthAuto)) {
                                contentGlueElementCSS[_strWidth] = contentGlueSize.w;
                                contentGlueElementCSS[_strHeight] = contentGlueSize.h;

                                //textarea-sizes are already calculated correctly at this point
                                if(!_isTextarea) {
                                    contentSize = {
                                        //use clientSize because natively overlaidScrollbars add borders
                                        w: contentMeasureElement[LEXICON.cW],
                                        h: contentMeasureElement[LEXICON.cH]
                                    };
                                }
                            }
                            var textareaCoverCSS = {};
                            var setContentGlueElementCSSfunction = function(horizontal) {
                                var scrollbarVars = getScrollbarVars(horizontal);
                                var wh = scrollbarVars._w_h;
                                var strWH = scrollbarVars._width_height;
                                var autoSize = horizontal ? widthAuto : heightAuto;
                                var borderSize = horizontal ? _borderX : _borderY;
                                var paddingSize = horizontal ? _paddingX : _paddingY;
                                var marginSize = horizontal ? _marginX : _marginY;
                                var maxSize = contentGlueElementCSS[strWH] + (_isBorderBox ? borderSize : -paddingSize);

                                //make contentGlue size -1 if element is not auto sized, to make sure that a resize event happens when the element shrinks
                                if (!autoSize || (!autoSize && border.c))
                                    contentGlueElementCSS[strWH] = hostSize[wh] - (_isBorderBox ? 0 : paddingSize + borderSize) - 1 - marginSize;

                                //if size is auto and host is same size as max size, make content glue size +1 to make sure size changes will be detected
                                if (autoSize && cssMaxValue['c' + wh] && cssMaxValue['i' + wh] === maxSize)
                                    contentGlueElementCSS[strWH] = maxSize + (_isBorderBox ? 0 : paddingSize) + 1;

                                //if size is auto and host is smaller than size as min size, make content glue size -1 to make sure size changes will be detected (this is only needed if padding is 0)
                                if (autoSize && (contentSize[wh] < _viewportSize[wh]) && (horizontal && _isTextarea ? !textareaAutoWrapping : true)) {
                                    if (_isTextarea)
                                        textareaCoverCSS[strWH] = parseToZeroOrNumber(_textareaCoverElement.css(strWH)) - 1;
                                    contentGlueElementCSS[strWH] -= 1;
                                }

                                //make sure content glue size is at least 1
                                if (contentSize[wh] > 0)
                                    contentGlueElementCSS[strWH] = MATH.max(1, contentGlueElementCSS[strWH]);
                            };
                            setContentGlueElementCSSfunction(true);
                            setContentGlueElementCSSfunction(false);

                            if (_isTextarea)
                                _textareaCoverElement.css(textareaCoverCSS);
                            _contentGlueElement.css(contentGlueElementCSS);
                        }
                        if (widthAuto)
                            contentElementCSS[_strWidth] = _strHundredPercent;
                        if (widthAuto && !_isBorderBox && !_mutationObserversConnected)
                            contentElementCSS[_strFloat] = 'none';

                        //apply and reset content style
                        _contentElement.css(contentElementCSS);
                        contentElementCSS = {};

                        //measure again, but this time all correct sizes:
                        var contentScrollSize = {
                            w: MATH.max(contentMeasureElement[LEXICON.sW], contentMeasureElementGuaranty[LEXICON.sW]),
                            h: MATH.max(contentMeasureElement[LEXICON.sH], contentMeasureElementGuaranty[LEXICON.sH])
                        };
                        contentScrollSize.c = contentSizeChanged = checkCacheAutoForce(contentScrollSize, _contentScrollSizeCache);
                        _contentScrollSizeCache = contentScrollSize;

                        //remove overflow hidden to restore overflow
                        if(hideOverflow4CorrectMeasuring)
                            _contentElement.css(strOverflow, _strEmpty);
                        
                        //refresh viewport size after correct measuring
                        _viewportSize = getViewportSize();

                        hostSize = getHostSize();
                        hostSizeChanged = checkCacheAutoForce(hostSize, _hostSizeCache);
                        _hostSizeCache = hostSize;

                        var hideOverflowForceTextarea = _isTextarea && (_viewportSize.w === 0 || _viewportSize.h === 0);
                        var previousOverflow = _overflowAmountCache;
                        var overflowBehaviorIsVS = { };
                        var overflowBehaviorIsVH = { };
                        var overflowBehaviorIsS = { };
                        var overflowAmount = { };
                        var hasOverflow = { };
                        var hideOverflow = { };
                        var canScroll = { };
                        var viewportRect = _paddingElementNative[LEXICON.bCR]();
                        var setOverflowVariables = function(horizontal) {
                            var scrollbarVars = getScrollbarVars(horizontal);
                            var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                            var xyI = scrollbarVarsInverted._x_y;
                            var xy = scrollbarVars._x_y;
                            var wh = scrollbarVars._w_h;
                            var widthHeight = scrollbarVars._width_height;
                            var scrollMax = _strScroll + scrollbarVars._Left_Top + 'Max';
                            var fractionalOverflowAmount = viewportRect[widthHeight] ? MATH.abs(viewportRect[widthHeight] - _viewportSize[wh]) : 0;
                            overflowBehaviorIsVS[xy] = overflowBehavior[xy] === 'v-s';
                            overflowBehaviorIsVH[xy] = overflowBehavior[xy] === 'v-h';
                            overflowBehaviorIsS[xy] = overflowBehavior[xy] === 's';
                            overflowAmount[xy] = MATH.max(0, MATH.round((contentScrollSize[wh] - _viewportSize[wh]) * 100) / 100);
                            overflowAmount[xy] *= (hideOverflowForceTextarea || (_viewportElementNative[scrollMax] === 0 && fractionalOverflowAmount > 0 && fractionalOverflowAmount < 1)) ? 0 : 1;
                            hasOverflow[xy] = overflowAmount[xy] > 0;

                            //hideOverflow:
                            //x || y : true === overflow is hidden by "overflow: scroll" OR "overflow: hidden"
                            //xs || ys : true === overflow is hidden by "overflow: scroll"
                            hideOverflow[xy] = overflowBehaviorIsVS[xy] || overflowBehaviorIsVH[xy] ? (hasOverflow[xyI] && !overflowBehaviorIsVS[xyI] && !overflowBehaviorIsVH[xyI]) : hasOverflow[xy];
                            hideOverflow[xy + 's'] = hideOverflow[xy] ? (overflowBehaviorIsS[xy] || overflowBehaviorIsVS[xy]) : false;

                            canScroll[xy] = hasOverflow[xy] && hideOverflow[xy + 's'];
                        };
                        setOverflowVariables(true);
                        setOverflowVariables(false);

                        overflowAmount.c = checkCacheAutoForce(overflowAmount, _overflowAmountCache);
                        _overflowAmountCache = overflowAmount;
                        hasOverflow.c = checkCacheAutoForce(hasOverflow, _hasOverflowCache);
                        _hasOverflowCache = hasOverflow;
                        hideOverflow.c = checkCacheAutoForce(hideOverflow, _hideOverflowCache);
                        _hideOverflowCache = hideOverflow;

                        //if native scrollbar is overlay at x OR y axis, prepare DOM
                        if (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) {
                            var borderDesign = 'px solid transparent';
                            var contentArrangeElementCSS = { };
                            var arrangeContent = { };
                            var arrangeChanged = force;
                            var setContentElementCSS;

                            if (hasOverflow.x || hasOverflow.y) {
                                arrangeContent.w = _nativeScrollbarIsOverlaid.y && hasOverflow.y ? contentScrollSize.w + _overlayScrollbarDummySize.y : _strEmpty;
                                arrangeContent.h = _nativeScrollbarIsOverlaid.x && hasOverflow.x ? contentScrollSize.h + _overlayScrollbarDummySize.x : _strEmpty;
                                arrangeChanged = checkCacheAutoForce(arrangeContent, _arrangeContentSizeCache);
                                _arrangeContentSizeCache = arrangeContent;
                            }

                            if (hasOverflow.c || hideOverflow.c || contentScrollSize.c || cssDirectionChanged || widthAutoChanged || heightAutoChanged || widthAuto || heightAuto || ignoreOverlayScrollbarHidingChanged) {
                                contentElementCSS[_strMarginMinus + isRTLRight] = contentElementCSS[_strBorderMinus + isRTLRight] = _strEmpty;
                                setContentElementCSS = function(horizontal) {
                                    var scrollbarVars = getScrollbarVars(horizontal);
                                    var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                                    var xy = scrollbarVars._x_y;
                                    var strDirection = horizontal ? _strBottom : isRTLLeft;
                                    var invertedAutoSize = horizontal ? heightAuto : widthAuto;

                                    if (_nativeScrollbarIsOverlaid[xy] && hasOverflow[xy] && hideOverflow[xy + 's']) {
                                        contentElementCSS[_strMarginMinus + strDirection] = invertedAutoSize ? (ignoreOverlayScrollbarHiding ? _strEmpty : _overlayScrollbarDummySize[xy]) : _strEmpty;
                                        contentElementCSS[_strBorderMinus + strDirection] = ((horizontal ? !invertedAutoSize : true) && !ignoreOverlayScrollbarHiding) ? (_overlayScrollbarDummySize[xy] + borderDesign) : _strEmpty;
                                    }
                                    else {
                                        arrangeContent[scrollbarVarsInverted._w_h] =
                                        contentElementCSS[_strMarginMinus + strDirection] =
                                        contentElementCSS[_strBorderMinus + strDirection] = _strEmpty;
                                        arrangeChanged = true;
                                    }
                                };

                                if (_nativeScrollbarStyling) {
                                    if (ignoreOverlayScrollbarHiding) 
                                        removeClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
                                    else
                                        addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
                                }
                                else {
                                    setContentElementCSS(true);
                                    setContentElementCSS(false);
                                }
                            }
                            if (ignoreOverlayScrollbarHiding) {
                                arrangeContent.w = arrangeContent.h = _strEmpty;
                                arrangeChanged = true;
                            }
                            if (arrangeChanged && !_nativeScrollbarStyling) {
                                contentArrangeElementCSS[_strWidth] = hideOverflow.y ? arrangeContent.w : _strEmpty;
                                contentArrangeElementCSS[_strHeight] = hideOverflow.x ? arrangeContent.h : _strEmpty;

                                if (!_contentArrangeElement) {
                                    _contentArrangeElement = FRAMEWORK(generateDiv(_classNameContentArrangeElement));
                                    _viewportElement.prepend(_contentArrangeElement);
                                }
                                _contentArrangeElement.css(contentArrangeElementCSS);
                            }
                            _contentElement.css(contentElementCSS);
                        }

                        var viewportElementCSS = {};
                        var paddingElementCSS = {};
                        var setViewportCSS;
                        if (hostSizeChanged || hasOverflow.c || hideOverflow.c || contentScrollSize.c || overflowBehaviorChanged || boxSizingChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged || clipAlwaysChanged || heightAutoChanged) {
                            viewportElementCSS[isRTLRight] = _strEmpty;
                            setViewportCSS = function(horizontal) {
                                var scrollbarVars = getScrollbarVars(horizontal);
                                var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                                var xy = scrollbarVars._x_y;
                                var XY = scrollbarVars._X_Y;
                                var strDirection = horizontal ? _strBottom : isRTLLeft;

                                var reset = function () {
                                    viewportElementCSS[strDirection] = _strEmpty;
                                    _contentBorderSize[scrollbarVarsInverted._w_h] = 0;
                                };
                                if (hasOverflow[xy] && hideOverflow[xy + 's']) {
                                    viewportElementCSS[strOverflow + XY] = _strScroll;
                                    if (ignoreOverlayScrollbarHiding || _nativeScrollbarStyling) {
                                        reset();
                                    }
                                    else {
                                        viewportElementCSS[strDirection] =  -(_nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[xy] : _nativeScrollbarSize[xy]);
                                        _contentBorderSize[scrollbarVarsInverted._w_h] = _nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[scrollbarVarsInverted._x_y] : 0;
                                    }
                                } else {
                                    viewportElementCSS[strOverflow + XY] = _strEmpty;
                                    reset();
                                }
                            };
                            setViewportCSS(true);
                            setViewportCSS(false);
                            
                            // if the scroll container is too small and if there is any overflow with no overlay scrollbar (and scrollbar styling isn't possible), 
                            // make viewport element greater in size (Firefox hide Scrollbars fix)
                            // because firefox starts hiding scrollbars on too small elements
                            // with this behavior the overflow calculation may be incorrect or the scrollbars would appear suddenly
                            // https://bugzilla.mozilla.org/show_bug.cgi?id=292284
                            if (!_nativeScrollbarStyling 
                                && (_viewportSize.h < _nativeScrollbarMinSize.x || _viewportSize.w < _nativeScrollbarMinSize.y)
                                && ((hasOverflow.x && hideOverflow.x && !_nativeScrollbarIsOverlaid.x) || (hasOverflow.y && hideOverflow.y && !_nativeScrollbarIsOverlaid.y))) {
                                viewportElementCSS[_strPaddingMinus + _strTop] = _nativeScrollbarMinSize.x;
                                viewportElementCSS[_strMarginMinus + _strTop] = -_nativeScrollbarMinSize.x;

                                viewportElementCSS[_strPaddingMinus + isRTLRight] = _nativeScrollbarMinSize.y;
                                viewportElementCSS[_strMarginMinus + isRTLRight] = -_nativeScrollbarMinSize.y;
                            }
                            else {
                                viewportElementCSS[_strPaddingMinus + _strTop] =
                                viewportElementCSS[_strMarginMinus + _strTop] =
                                viewportElementCSS[_strPaddingMinus + isRTLRight] =
                                viewportElementCSS[_strMarginMinus + isRTLRight] = _strEmpty;
                            }
                            viewportElementCSS[_strPaddingMinus + isRTLLeft] =
                            viewportElementCSS[_strMarginMinus + isRTLLeft] = _strEmpty;

                            //if there is any overflow (x OR y axis) and this overflow shall be hidden, make overflow hidden, else overflow visible
                            if ((hasOverflow.x && hideOverflow.x) || (hasOverflow.y && hideOverflow.y) || hideOverflowForceTextarea) {
                                //only hide if is Textarea
                                if (_isTextarea && hideOverflowForceTextarea) {
                                    paddingElementCSS[strOverflowX] =
                                    paddingElementCSS[strOverflowY] = strHidden;
                                }
                            }
                            else {
                                if (!clipAlways || (overflowBehaviorIsVH.x || overflowBehaviorIsVS.x || overflowBehaviorIsVH.y || overflowBehaviorIsVS.y)) {
                                    //only un-hide if Textarea
                                    if (_isTextarea) {
                                        paddingElementCSS[strOverflowX] =
                                        paddingElementCSS[strOverflowY] = _strEmpty;
                                    }
                                    viewportElementCSS[strOverflowX] =
                                    viewportElementCSS[strOverflowY] = strVisible;
                                }
                            }

                            _paddingElement.css(paddingElementCSS);
                            _viewportElement.css(viewportElementCSS);
                            viewportElementCSS = { };

                            //force soft redraw in webkit because without the scrollbars will may appear because DOM wont be redrawn under special conditions
                            if ((hasOverflow.c || boxSizingChanged || widthAutoChanged || heightAutoChanged) && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)) {
                                var elementStyle = _contentElementNative[LEXICON.s];
                                var dump;
                                elementStyle.webkitTransform = 'scale(1)';
                                elementStyle.display = 'run-in';
                                dump = _contentElementNative[LEXICON.oH];
                                elementStyle.display = _strEmpty; //|| dump; //use dump to prevent it from deletion if minify
                                elementStyle.webkitTransform = _strEmpty;
                            }
                            /*
                            //force hard redraw in webkit if native overlaid scrollbars shall appear
                            if (ignoreOverlayScrollbarHidingChanged && ignoreOverlayScrollbarHiding) {
                                _hostElement.hide();
                                var dump = _hostElementNative[LEXICON.oH];
                                _hostElement.show();
                            }
                            */
                        }

                        //change to direction RTL and width auto Bugfix in Webkit
                        //without this fix, the DOM still thinks the scrollbar is LTR and thus the content is shifted to the left
                        contentElementCSS = {};
                        if (cssDirectionChanged || widthAutoChanged || heightAutoChanged) {
                            if (_isRTL && widthAuto) {
                                var floatTmp = _contentElement.css(_strFloat);
                                var posLeftWithoutFloat = MATH.round(_contentElement.css(_strFloat, _strEmpty).css(_strLeft, _strEmpty).position().left);
                                _contentElement.css(_strFloat, floatTmp);
                                var posLeftWithFloat = MATH.round(_contentElement.position().left);

                                if (posLeftWithoutFloat !== posLeftWithFloat)
                                    contentElementCSS[_strLeft] = posLeftWithoutFloat;
                            }
                            else {
                                contentElementCSS[_strLeft] = _strEmpty;
                            }
                        }
                        _contentElement.css(contentElementCSS);

                        //handle scroll position
                        if (_isTextarea && contentSizeChanged) {
                            var textareaInfo = getTextareaInfo();
                            if (textareaInfo) {
                                var textareaRowsChanged = _textareaInfoCache === undefined$1 ? true : textareaInfo._rows !== _textareaInfoCache._rows;
                                var cursorRow = textareaInfo._cursorRow;
                                var cursorCol = textareaInfo._cursorColumn;
                                var widestRow = textareaInfo._widestRow;
                                var lastRow = textareaInfo._rows;
                                var lastCol = textareaInfo._columns;
                                var cursorPos = textareaInfo._cursorPosition;
                                var cursorMax = textareaInfo._cursorMax;
                                var cursorIsLastPosition = (cursorPos >= cursorMax && _textareaHasFocus);
                                var textareaScrollAmount = {
                                    x: (!textareaAutoWrapping && (cursorCol === lastCol && cursorRow === widestRow)) ? _overflowAmountCache.x : -1,
                                    y: (textareaAutoWrapping ? cursorIsLastPosition || textareaRowsChanged && (previousOverflow !== undefined$1 ? (currScroll.y === previousOverflow.y) : false) : (cursorIsLastPosition || textareaRowsChanged) && cursorRow === lastRow) ? _overflowAmountCache.y : -1
                                };
                                currScroll.x = textareaScrollAmount.x > -1 ? (_isRTL && _normalizeRTLCache && _rtlScrollBehavior.i ? 0 : textareaScrollAmount.x) : currScroll.x; //if inverted, scroll to 0 -> normalized this means to max scroll offset.
                                currScroll.y = textareaScrollAmount.y > -1 ? textareaScrollAmount.y : currScroll.y;
                            }
                            _textareaInfoCache = textareaInfo;
                        }
                        if (_isRTL && _rtlScrollBehavior.i && _nativeScrollbarIsOverlaid.y && hasOverflow.x && _normalizeRTLCache)
                            currScroll.x += _contentBorderSize.w || 0;
                        if(widthAuto)
                            _hostElement[_strScrollLeft](0);
                        if(heightAuto)
                            _hostElement[_strScrollTop](0);
                        _viewportElement[_strScrollLeft](currScroll.x)[_strScrollTop](currScroll.y);

                        //scrollbars management:
                        var scrollbarsVisibilityVisible = scrollbarsVisibility === 'v';
                        var scrollbarsVisibilityHidden = scrollbarsVisibility === 'h';
                        var scrollbarsVisibilityAuto = scrollbarsVisibility === 'a';

                        var showScrollbarH = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, true, true, canScroll.x);
                        var showScrollbarV = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, false, true, canScroll.y);
                        var hideScrollbarH = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, true, false, canScroll.x);
                        var hideScrollbarV = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, false, false, canScroll.y);

                        //manage class name which indicates scrollable overflow
                        if (hideOverflow.x || hideOverflow.y)
                            addClass(_hostElement, _classNameHostOverflow);
                        else
                            removeClass(_hostElement, _classNameHostOverflow);
                        if (hideOverflow.x)
                            addClass(_hostElement, _classNameHostOverflowX);
                        else
                            removeClass(_hostElement, _classNameHostOverflowX);
                        if (hideOverflow.y)
                            addClass(_hostElement, _classNameHostOverflowY);
                        else
                            removeClass(_hostElement, _classNameHostOverflowY);

                        //add or remove rtl class name for styling purposes
                        if (cssDirectionChanged) {
                            if (_isRTL)
                                addClass(_hostElement, _classNameHostRTL);
                            else
                                removeClass(_hostElement, _classNameHostRTL);
                        }

                        //manage the resize feature (CSS3 resize "polyfill" for this plugin)
                        if (_isBody)
                            addClass(_hostElement, _classNameHostResizeDisabled);
                        if (resizeChanged) {
                            removeClass(_scrollbarCornerElement, [ 
                                    _classNameScrollbarCornerResize,
                                    _classNameScrollbarCornerResizeB,
                                    _classNameScrollbarCornerResizeH,
                                    _classNameScrollbarCornerResizeV].join(_strSpace));
                            if (_resizeNone) {
                                addClass(_hostElement, _classNameHostResizeDisabled);
                            }
                            else {
                                removeClass(_hostElement, _classNameHostResizeDisabled);
                                addClass(_scrollbarCornerElement, _classNameScrollbarCornerResize);
                                if (_resizeBoth)
                                    addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeB);
                                else if (_resizeHorizontal)
                                    addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeH);
                                else if (_resizeVertical)
                                    addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeV);
                            }
                        }

                        //manage the scrollbars general visibility + the scrollbar interactivity (unusable class name)
                        if (scrollbarsVisibilityChanged || overflowBehaviorChanged || hideOverflow.c || hasOverflow.c || ignoreOverlayScrollbarHidingChanged) {
                            if (ignoreOverlayScrollbarHiding) {
                                if (ignoreOverlayScrollbarHidingChanged) {
                                    removeClass(_hostElement, _classNameHostScrolling);
                                    if (ignoreOverlayScrollbarHiding) {
                                        hideScrollbarH();
                                        hideScrollbarV();
                                    }
                                }
                            }
                            else if (scrollbarsVisibilityAuto) {
                                if (canScroll.x)
                                    showScrollbarH();
                                else
                                    hideScrollbarH();

                                if (canScroll.y)
                                    showScrollbarV();
                                else
                                    hideScrollbarV();
                            }
                            else if (scrollbarsVisibilityVisible) {
                                showScrollbarH();
                                showScrollbarV();
                            }
                            else if (scrollbarsVisibilityHidden) {
                                hideScrollbarH();
                                hideScrollbarV();
                            }
                        }

                        //manage the scrollbars auto hide feature (auto hide them after specific actions)
                        if (scrollbarsAutoHideChanged || ignoreOverlayScrollbarHidingChanged) {
                            if (_scrollbarsAutoHideLeave || _scrollbarsAutoHideMove) {
                                setupHostMouseTouchEvents(true);
                                setupHostMouseTouchEvents();
                            }
                            else {
                                setupHostMouseTouchEvents(true);
                            }

                            if (_scrollbarsAutoHideNever)
                                refreshScrollbarsAutoHide(true);
                            else
                                refreshScrollbarsAutoHide(false, true);
                        }

                        //manage scrollbars handle length & offset - don't remove!
                        if (hostSizeChanged || overflowAmount.c || heightAutoChanged || widthAutoChanged || resizeChanged || boxSizingChanged || paddingAbsoluteChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged) {
                            refreshScrollbarHandleLength(true);
                            refreshScrollbarHandleOffset(true);
                            refreshScrollbarHandleLength(false);
                            refreshScrollbarHandleOffset(false);
                        }

                        //manage interactivity
                        if (scrollbarsClickScrollingChanged)
                            refreshScrollbarsInteractive(true, scrollbarsClickScrolling);
                        if (scrollbarsDragScrollingChanged)
                            refreshScrollbarsInteractive(false, scrollbarsDragScrolling);

                        //callbacks:
                        if (cssDirectionChanged) {
                            dispatchCallback('onDirectionChanged', {
                                isRTL: _isRTL,
                                dir: cssDirection
                            });
                        }
                        if (hostSizeChanged) {
                            dispatchCallback('onHostSizeChanged', {
                                width: _hostSizeCache.w,
                                height: _hostSizeCache.h
                            });
                        }
                        if (contentSizeChanged) {
                            dispatchCallback('onContentSizeChanged', {
                                width: _contentScrollSizeCache.w,
                                height: _contentScrollSizeCache.h
                            });
                        }
                        if (hasOverflow.c || hideOverflow.c) {
                            dispatchCallback('onOverflowChanged', {
                                x: hasOverflow.x,
                                y: hasOverflow.y,
                                xScrollable: hideOverflow.xs,
                                yScrollable: hideOverflow.ys,
                                clipped: hideOverflow.x || hideOverflow.y
                            });
                        }
                        if (overflowAmount.c) {
                            dispatchCallback('onOverflowAmountChanged', {
                                x: overflowAmount.x,
                                y: overflowAmount.y
                            });
                        }
                    }

                    //fix body min size
                    if (_isBody && _bodyMinSizeCache && (_hasOverflowCache.c || _bodyMinSizeCache.c)) {
                        //its possible that no min size was measured until now, because the content arrange element was just added now, in this case, measure now the min size.
                        if (!_bodyMinSizeCache.f)
                            bodyMinSizeChanged();
                        if (_nativeScrollbarIsOverlaid.y && _hasOverflowCache.x)
                            _contentElement.css(_strMinMinus + _strWidth, _bodyMinSizeCache.w + _overlayScrollbarDummySize.y);
                        if (_nativeScrollbarIsOverlaid.x && _hasOverflowCache.y)
                            _contentElement.css(_strMinMinus + _strHeight, _bodyMinSizeCache.h + _overlayScrollbarDummySize.x);
                        _bodyMinSizeCache.c = false;
                    }

                    //freezeResizeObserver(_sizeObserverElement, false);
                    //freezeResizeObserver(_sizeAutoObserverElement, false);

                    dispatchCallback('onUpdated', { forced: force });
                }

                
                //==== Options ====//

                /**
                 * Sets new options but doesn't call the update method.
                 * @param newOptions The object which contains the new options.
                 * @returns {*} A object which contains the changed options.
                 */
                function setOptions(newOptions) {
                    var validatedOpts = _pluginsOptions._validate(newOptions, _pluginsOptions._template, true, _currentOptions);

                    _currentOptions = extendDeep({}, _currentOptions, validatedOpts._default);
                    _currentPreparedOptions = extendDeep({}, _currentPreparedOptions, validatedOpts._prepared);
                    
                    return validatedOpts._prepared;
                }


                //==== Structure ====//

                /**
                 * Builds or destroys the wrapper and helper DOM elements.
                 * @param destroy Indicates whether the DOM shall be build or destroyed.
                 */
                function setupStructureDOM(destroy) {
                    var strParent = 'parent';
                    var classNameResizeObserverHost = 'os-resize-observer-host';
                    var classNameTextareaElementFull = _classNameTextareaElement + _strSpace + _classNameTextInherit;
                    var textareaClass = _isTextarea ? _strSpace + _classNameTextInherit : _strEmpty;
                    var adoptAttrs = _currentPreparedOptions.textarea.inheritedAttrs;
                    var adoptAttrsMap = { };
                    var applyAdoptedAttrs = function() {
                        var applyAdoptedAttrsElm = destroy ? _targetElement : _hostElement;
                        each(adoptAttrsMap, function(key, value) {
                            if(type(value) == TYPES.s) {
                                if(key == LEXICON.c)
                                    applyAdoptedAttrsElm.addClass(value);
                                else
                                    applyAdoptedAttrsElm.attr(key, value);
                            }
                        });
                    };
                    var hostElementClassNames = [
                        _classNameHostElement,
                        _classNameHostTextareaElement,
                        _classNameHostResizeDisabled,
                        _classNameHostRTL,
                        _classNameHostScrollbarHorizontalHidden,
                        _classNameHostScrollbarVerticalHidden,
                        _classNameHostTransition,
                        _classNameHostScrolling,
                        _classNameHostOverflow,
                        _classNameHostOverflowX,
                        _classNameHostOverflowY,
                        _classNameThemeNone,
                        _classNameTextareaElement,
                        _classNameTextInherit,
                        _classNameCache].join(_strSpace);
                    var hostElementCSS = { };
                    
                    //get host element as first element, because that's the most upper element and required for the other elements
                    _hostElement = _hostElement || (_isTextarea ? (_domExists ? _targetElement[strParent]()[strParent]()[strParent]()[strParent]() : FRAMEWORK(generateDiv(_classNameHostTextareaElement))) : _targetElement);
                    _contentElement = _contentElement || selectOrGenerateDivByClass(_classNameContentElement + textareaClass);
                    _viewportElement = _viewportElement || selectOrGenerateDivByClass(_classNameViewportElement + textareaClass);
                    _paddingElement = _paddingElement || selectOrGenerateDivByClass(_classNamePaddingElement + textareaClass);
                    _sizeObserverElement = _sizeObserverElement || selectOrGenerateDivByClass(classNameResizeObserverHost);
                    _textareaCoverElement = _textareaCoverElement || (_isTextarea ? selectOrGenerateDivByClass(_classNameTextareaCoverElement) : undefined$1);
                    
                    //on destroy, remove all generated class names from the host element before collecting the adopted attributes 
                    //to prevent adopting generated class names
                    if(destroy)
                        removeClass(_hostElement, hostElementClassNames);
                    
                    //collect all adopted attributes
                    adoptAttrs = type(adoptAttrs) == TYPES.s ? adoptAttrs.split(_strSpace) : adoptAttrs;
                    if(type(adoptAttrs) == TYPES.a && _isTextarea) {
                        each(adoptAttrs, function(i, v) {
                            if(type(v) == TYPES.s) {
                                adoptAttrsMap[v] = destroy ? _hostElement.attr(v) : _targetElement.attr(v);
                            }
                        });
                    }

                    if(!destroy) {
                        if(_isTextarea) {
                            if(!_currentPreparedOptions.sizeAutoCapable) {
                                hostElementCSS[_strWidth] = _targetElement.css(_strWidth);
                                hostElementCSS[_strHeight] = _targetElement.css(_strHeight);
                            }
                            
                            if(!_domExists)
                                _targetElement.addClass(_classNameTextInherit).wrap(_hostElement);
                            
                            //jQuery clones elements in wrap functions, so we have to select them again
                            _hostElement = _targetElement[strParent]().css(hostElementCSS);
                        }
                        
                        if(!_domExists) {
                            //add the correct class to the target element
                            addClass(_targetElement, _isTextarea ? classNameTextareaElementFull : _classNameHostElement);

                            //wrap the content into the generated elements to create the required DOM
                            _hostElement.wrapInner(_contentElement)
                                .wrapInner(_viewportElement)
                                .wrapInner(_paddingElement)
                                .prepend(_sizeObserverElement);
                            
                            //jQuery clones elements in wrap functions, so we have to select them again
                            _contentElement = findFirst(_hostElement, _strDot + _classNameContentElement);
                            _viewportElement = findFirst(_hostElement, _strDot + _classNameViewportElement);
                            _paddingElement = findFirst(_hostElement, _strDot + _classNamePaddingElement);
                                    
                            if(_isTextarea) {
                                _contentElement.prepend(_textareaCoverElement);
                                applyAdoptedAttrs();
                            }
                        }
                        
                        if (_nativeScrollbarStyling)
                            addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
                        if(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)
                            addClass(_viewportElement, _classNameViewportNativeScrollbarsOverlaid);
                        if (_isBody)
                            addClass(_htmlElement, _classNameHTMLElement);

                        _sizeObserverElementNative = _sizeObserverElement[0];
                        _hostElementNative = _hostElement[0];
                        _paddingElementNative = _paddingElement[0];
                        _viewportElementNative = _viewportElement[0];
                        _contentElementNative = _contentElement[0];
                    }
                    else {
                        if(_domExists && _initialized) {
                            //clear size observer
                            _sizeObserverElement.children().remove();
                            
                            //remove the style property and classes from already generated elements
                            each([ _paddingElement, _viewportElement, _contentElement, _textareaCoverElement ], function(i, elm) { 
                                if(elm) {
                                    removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
                                }
                            });
                            
                            //add classes to the host element which was removed previously to match the expected DOM
                            addClass(_hostElement, _isTextarea ? _classNameHostTextareaElement : _classNameHostElement);
                        }
                        else {
                            //remove size observer
                            remove(_sizeObserverElement);
                            
                            //unwrap the content to restore DOM
                            _contentElement.contents()
                                .unwrap()
                                .unwrap()
                                .unwrap();
                            
                            if(_isTextarea) {
                                _targetElement.unwrap();
                                remove(_hostElement);
                                remove(_textareaCoverElement);
                                applyAdoptedAttrs();
                            }
                        }
                        
                        if (_isTextarea)
                            _targetElement.removeAttr(LEXICON.s);
                        
                        if (_isBody)
                            removeClass(_htmlElement, _classNameHTMLElement);
                    }
                }

                /**
                 * Adds or removes all wrapper elements interactivity events.
                 * @param destroy Indicates whether the Events shall be added or removed.
                 */
                function setupStructureEvents() {
                    var textareaKeyDownRestrictedKeyCodes = [
                        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123,    //F1 to F12
                        33, 34,                                                   //page up, page down
                        37, 38, 39, 40,                                           //left, up, right, down arrows
                        16, 17, 18, 19, 20, 144                                   //Shift, Ctrl, Alt, Pause, CapsLock, NumLock
                    ];
                    var textareaKeyDownKeyCodesList = [ ];
                    var textareaUpdateIntervalID;
                    var scrollStopTimeoutId;
                    var scrollStopDelay = 175;
                    var strFocus = 'focus';

                    function updateTextarea(doClearInterval) {
                        textareaUpdate();
                        _base.update(_strAuto);
                        if(doClearInterval && _autoUpdateRecommended)
                            clearInterval(textareaUpdateIntervalID);
                    }
                    function textareaOnScroll(event) {
                        _targetElement[_strScrollLeft](_rtlScrollBehavior.i && _normalizeRTLCache ? 9999999 : 0);
                        _targetElement[_strScrollTop](0);
                        COMPATIBILITY.prvD(event);
                        COMPATIBILITY.stpP(event);
                        return false;
                    }
                    function textareaOnDrop(event) {
                        setTimeout(function () {
                            if(!_destroyed)
                                updateTextarea();
                        }, 50);
                    }
                    function textareaOnFocus() {
                        _textareaHasFocus = true;
                        addClass(_hostElement, strFocus);
                    }
                    function textareaOnFocusout() {
                        _textareaHasFocus = false;
                        textareaKeyDownKeyCodesList = [ ];
                        removeClass(_hostElement, strFocus);
                        updateTextarea(true);
                    }  
                    function textareaOnKeyDown(event) {
                        var keyCode = event.keyCode;
                        
                        if (inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0) {
                            if (!textareaKeyDownKeyCodesList[LEXICON.l]) {
                                updateTextarea();
                                textareaUpdateIntervalID = setInterval(updateTextarea, 1000 / 60);
                            }
                            if (inArray(keyCode, textareaKeyDownKeyCodesList) < 0)
                                textareaKeyDownKeyCodesList.push(keyCode);
                        }
                    }
                    function textareaOnKeyUp(event) {
                        var keyCode = event.keyCode;
                        var index = inArray(keyCode, textareaKeyDownKeyCodesList);

                        if (inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0) {
                            if (index > -1)
                                textareaKeyDownKeyCodesList.splice(index, 1);
                            if (!textareaKeyDownKeyCodesList[LEXICON.l])
                                updateTextarea(true);
                        }
                    }  
                    function contentOnTransitionEnd(event) {
                        if (_autoUpdateCache === true)
                            return;
                        event = event.originalEvent || event;
                        if (isSizeAffectingCSSProperty(event.propertyName))
                            _base.update(_strAuto);
                    }
                    function viewportOnScroll(event) {
                        if (!_sleeping) {
                            if (scrollStopTimeoutId !== undefined$1)
                                clearTimeout(scrollStopTimeoutId);
                            else {
                                if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                                    refreshScrollbarsAutoHide(true);

                                if (!nativeOverlayScrollbarsAreActive())
                                    addClass(_hostElement, _classNameHostScrolling);

                                dispatchCallback('onScrollStart', event);
                            }

                            //if a scrollbars handle gets dragged, the mousemove event is responsible for refreshing the handle offset
                            //because if CSS scroll-snap is used, the handle offset gets only refreshed on every snap point
                            //this looks laggy & clunky, it looks much better if the offset refreshes with the mousemove
                            if(!_scrollbarsHandlesDefineScrollPos) {
                                refreshScrollbarHandleOffset(true);
                                refreshScrollbarHandleOffset(false);
                            }
                            dispatchCallback('onScroll', event);

                            scrollStopTimeoutId = setTimeout(function () {
                                if(!_destroyed) {
                                    //OnScrollStop:
                                    clearTimeout(scrollStopTimeoutId);
                                    scrollStopTimeoutId = undefined$1;

                                    if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                                        refreshScrollbarsAutoHide(false);

                                    if (!nativeOverlayScrollbarsAreActive())
                                        removeClass(_hostElement, _classNameHostScrolling);

                                    dispatchCallback('onScrollStop', event);
                                }
                            }, scrollStopDelay);
                        }
                    }


                    if (_isTextarea) {                         
                        if (_msieVersion > 9 || !_autoUpdateRecommended) {
                            addDestroyEventListener(_targetElement, 'input', updateTextarea);
                        }
                        else {
                            addDestroyEventListener(_targetElement, 
                                [ _strKeyDownEvent, _strKeyUpEvent ],
                                [ textareaOnKeyDown, textareaOnKeyUp ]);
                        }
                        
                        addDestroyEventListener(_targetElement, 
                            [ _strScroll, 'drop', strFocus, strFocus + 'out' ],
                            [ textareaOnScroll, textareaOnDrop, textareaOnFocus, textareaOnFocusout ]);
                    }
                    else {
                        addDestroyEventListener(_contentElement, _strTransitionEndEvent, contentOnTransitionEnd);
                    }
                    addDestroyEventListener(_viewportElement, _strScroll, viewportOnScroll, true);
                }


                //==== Scrollbars ====//

                /**
                 * Builds or destroys all scrollbar DOM elements (scrollbar, track, handle)
                 * @param destroy Indicates whether the DOM shall be build or destroyed.
                 */
                function setupScrollbarsDOM(destroy) {
                    var selectOrGenerateScrollbarDOM = function(isHorizontal) {
                        var scrollbarClassName = isHorizontal ? _classNameScrollbarHorizontal : _classNameScrollbarVertical;
                        var scrollbar = selectOrGenerateDivByClass(_classNameScrollbar + _strSpace + scrollbarClassName, true);
                        var track = selectOrGenerateDivByClass(_classNameScrollbarTrack, scrollbar);
                        var handle = selectOrGenerateDivByClass(_classNameScrollbarHandle, scrollbar);

                        if(!_domExists && !destroy) {
                            scrollbar.append(track);
                            track.append(handle);
                        }
                        
                        return {
                            _scrollbar: scrollbar,
                            _track: track,
                            _handle: handle
                        };
                    };
                    function resetScrollbarDOM(isHorizontal) {
                        var scrollbarVars = getScrollbarVars(isHorizontal);
                        var scrollbar = scrollbarVars._scrollbar;
                        var track = scrollbarVars._track;
                        var handle = scrollbarVars._handle;
                        
                        if(_domExists && _initialized) {
                            each([ scrollbar, track, handle ], function(i, elm) { 
                                removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
                            });
                        }
                        else {
                            remove(scrollbar || selectOrGenerateScrollbarDOM(isHorizontal)._scrollbar);
                        }
                    }
                    var horizontalElements;
                    var verticalElements;
                    
                    if(!destroy) {
                        horizontalElements = selectOrGenerateScrollbarDOM(true);
                        verticalElements = selectOrGenerateScrollbarDOM();
                        
                        _scrollbarHorizontalElement = horizontalElements._scrollbar;
                        _scrollbarHorizontalTrackElement = horizontalElements._track;
                        _scrollbarHorizontalHandleElement = horizontalElements._handle;
                        _scrollbarVerticalElement = verticalElements._scrollbar;
                        _scrollbarVerticalTrackElement = verticalElements._track;
                        _scrollbarVerticalHandleElement = verticalElements._handle;

                        if(!_domExists) {
                            _paddingElement.after(_scrollbarVerticalElement);
                            _paddingElement.after(_scrollbarHorizontalElement);
                        }
                    }
                    else {
                        resetScrollbarDOM(true);
                        resetScrollbarDOM();
                    }
                }

                /**
                 * Initializes all scrollbar interactivity events. (track and handle dragging, clicking, scrolling)
                 * @param isHorizontal True if the target scrollbar is the horizontal scrollbar, false if the target scrollbar is the vertical scrollbar.
                 */
                function setupScrollbarEvents(isHorizontal) {
                    var scrollbarVars = getScrollbarVars(isHorizontal);
                    var scrollbarVarsInfo = scrollbarVars._info;
                    var insideIFrame = _windowElementNative.top !== _windowElementNative;
                    var xy = scrollbarVars._x_y;
                    var XY = scrollbarVars._X_Y;
                    var scroll = _strScroll + scrollbarVars._Left_Top;
                    var strActive = 'active';
                    var strSnapHandle = 'snapHandle';
                    var scrollDurationFactor = 1;
                    var increaseDecreaseScrollAmountKeyCodes = [ 16, 17 ]; //shift, ctrl
                    var trackTimeout;
                    var mouseDownScroll;
                    var mouseDownOffset;
                    var mouseDownInvertedScale;
                    
                    function getPointerPosition(event) {
                        return _msieVersion && insideIFrame ? event['screen' + XY] : COMPATIBILITY.page(event)[xy]; //use screen coordinates in EDGE & IE because the page values are incorrect in frames.
                    }
                    function getPreparedScrollbarsOption(name) {
                        return _currentPreparedOptions.scrollbars[name];
                    }
                    function increaseTrackScrollAmount() {
                        scrollDurationFactor = 0.5;
                    }
                    function decreaseTrackScrollAmount() {
                        scrollDurationFactor = 1;
                    }
                    function documentKeyDown(event) {
                        if (inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1)
                            increaseTrackScrollAmount();
                    }
                    function documentKeyUp(event) {
                        if (inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1)
                            decreaseTrackScrollAmount();
                    }
                    function onMouseTouchDownContinue(event) {
                        var originalEvent = event.originalEvent || event;
                        var isTouchEvent = originalEvent.touches !== undefined$1;
                        return _sleeping || _destroyed || nativeOverlayScrollbarsAreActive() || !_scrollbarsDragScrollingCache || (isTouchEvent && !getPreparedScrollbarsOption('touchSupport')) ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
                    }
                    function documentDragMove(event) {
                        if(onMouseTouchDownContinue(event)) {
                            var trackLength = scrollbarVarsInfo._trackLength;
                            var handleLength = scrollbarVarsInfo._handleLength;
                            var scrollRange = scrollbarVarsInfo._maxScroll;
                            var scrollRaw = (getPointerPosition(event) - mouseDownOffset) * mouseDownInvertedScale;
                            var scrollDeltaPercent = scrollRaw / (trackLength - handleLength);
                            var scrollDelta = (scrollRange * scrollDeltaPercent);
                            scrollDelta = isFinite(scrollDelta) ? scrollDelta : 0;
                            if (_isRTL && isHorizontal && !_rtlScrollBehavior.i)
                                scrollDelta *= -1;

                            _viewportElement[scroll](MATH.round(mouseDownScroll + scrollDelta));

                            if(_scrollbarsHandlesDefineScrollPos)
                                refreshScrollbarHandleOffset(isHorizontal, mouseDownScroll + scrollDelta);

                            if (!_supportPassiveEvents)
                                COMPATIBILITY.prvD(event);
                        }
                        else
                            documentMouseTouchUp(event);
                    }
                    function documentMouseTouchUp(event) {
                        event = event || event.originalEvent;

                        setupResponsiveEventListener(_documentElement,
                            [ _strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent ],
                            [ documentDragMove, documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart ],
                            true);

                        if(_scrollbarsHandlesDefineScrollPos)
                            refreshScrollbarHandleOffset(isHorizontal, true);

                        _scrollbarsHandlesDefineScrollPos = false;
                        removeClass(_bodyElement, _classNameDragging);
                        removeClass(scrollbarVars._handle, strActive);
                        removeClass(scrollbarVars._track, strActive);
                        removeClass(scrollbarVars._scrollbar, strActive);

                        mouseDownScroll = undefined$1;
                        mouseDownOffset = undefined$1;
                        mouseDownInvertedScale = 1;

                        decreaseTrackScrollAmount();

                        if (trackTimeout !== undefined$1) {
                            _base.scrollStop();
                            clearTimeout(trackTimeout);
                            trackTimeout = undefined$1;
                        }

                        if(event) {
                            var rect = _hostElementNative[LEXICON.bCR]();
                            var mouseInsideHost = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;

                            //if mouse is outside host element
                            if (!mouseInsideHost)
                                hostOnMouseLeave();

                            if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                                refreshScrollbarsAutoHide(false);
                        }
                    }
                    function onHandleMouseTouchDown(event) {
                        if (onMouseTouchDownContinue(event))
                            onHandleMouseTouchDownAction(event);
                    }
                    function onHandleMouseTouchDownAction(event) {
                        mouseDownScroll = _viewportElement[scroll]();
                        mouseDownScroll = isNaN(mouseDownScroll) ? 0 : mouseDownScroll;
                        if (_isRTL && isHorizontal && !_rtlScrollBehavior.n || !_isRTL)
                            mouseDownScroll = mouseDownScroll < 0 ? 0 : mouseDownScroll;

                        mouseDownInvertedScale = getHostElementInvertedScale()[xy];
                        mouseDownOffset = getPointerPosition(event);

                        _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle);
                        addClass(_bodyElement, _classNameDragging);
                        addClass(scrollbarVars._handle, strActive);
                        addClass(scrollbarVars._scrollbar, strActive);

                        setupResponsiveEventListener(_documentElement,
                            [ _strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strSelectStartEvent ],
                            [ documentDragMove, documentMouseTouchUp, documentOnSelectStart ]);

                        if(_msieVersion || !_documentMixed)
                            COMPATIBILITY.prvD(event);
                        COMPATIBILITY.stpP(event);
                    }
                    function onTrackMouseTouchDown(event) {
                        if (onMouseTouchDownContinue(event)) {
                            var scrollDistance = MATH.round(_viewportSize[scrollbarVars._w_h]);
                            var trackOffset = scrollbarVars._track.offset()[scrollbarVars._left_top];
                            var ctrlKey = event.ctrlKey;
                            var instantScroll = event.shiftKey;
                            var instantScrollTransition = instantScroll && ctrlKey;
                            var isFirstIteration = true;
                            var easing = 'linear';
                            var decreaseScroll;
                            var finishedCondition;
                            var scrollActionFinsished = function(transition) {
                                if(_scrollbarsHandlesDefineScrollPos)
                                    refreshScrollbarHandleOffset(isHorizontal, transition);
                            };
                            var scrollActionInstantFinished = function() {
                                scrollActionFinsished();
                                onHandleMouseTouchDownAction(event);
                            };
                            var scrollAction = function () {
                                if(!_destroyed) {
                                    var mouseOffset = (mouseDownOffset - trackOffset) * mouseDownInvertedScale;
                                    var handleOffset = scrollbarVarsInfo._handleOffset;
                                    var trackLength = scrollbarVarsInfo._trackLength;
                                    var handleLength = scrollbarVarsInfo._handleLength;
                                    var scrollRange = scrollbarVarsInfo._maxScroll;
                                    var currScroll = scrollbarVarsInfo._currentScroll;
                                    var scrollDuration = 270 * scrollDurationFactor;
                                    var timeoutDelay = isFirstIteration ? MATH.max(400, scrollDuration) : scrollDuration;
                                    var instantScrollPosition = scrollRange * ((mouseOffset - (handleLength / 2)) / (trackLength - handleLength)); // 100% * positionPercent
                                    var rtlIsNormal = _isRTL && isHorizontal && ((!_rtlScrollBehavior.i && !_rtlScrollBehavior.n) || _normalizeRTLCache);
                                    var decreaseScrollCondition = rtlIsNormal ? handleOffset < mouseOffset : handleOffset > mouseOffset;
                                    var scrollObj = { };
                                    var animationObj = {
                                        easing : easing,
                                        step : function(now) {
                                            if(_scrollbarsHandlesDefineScrollPos) {
                                                _viewportElement[scroll](now); //https://github.com/jquery/jquery/issues/4340
                                                refreshScrollbarHandleOffset(isHorizontal, now);
                                            }
                                        }
                                    };
                                    instantScrollPosition = isFinite(instantScrollPosition) ? instantScrollPosition : 0;
                                    instantScrollPosition = _isRTL && isHorizontal && !_rtlScrollBehavior.i ? (scrollRange - instantScrollPosition) : instantScrollPosition;

                                    //_base.scrollStop();

                                    if(instantScroll) {
                                        _viewportElement[scroll](instantScrollPosition); //scroll instantly to new position
                                        if(instantScrollTransition) {
                                            //get the scroll position after instant scroll (in case CSS Snap Points are used) to get the correct snapped scroll position
                                            //and the animation stops at the correct point
                                            instantScrollPosition = _viewportElement[scroll]();
                                            //scroll back to the position before instant scrolling so animation can be performed
                                            _viewportElement[scroll](currScroll);

                                            instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.i ? (scrollRange - instantScrollPosition) : instantScrollPosition;
                                            instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.n ? -instantScrollPosition : instantScrollPosition;

                                            scrollObj[xy] = instantScrollPosition;
                                            _base.scroll(scrollObj, extendDeep(animationObj, {
                                                duration : 130,
                                                complete : scrollActionInstantFinished
                                            }));
                                        }
                                        else
                                            scrollActionInstantFinished();
                                    }
                                    else {
                                        decreaseScroll = isFirstIteration ? decreaseScrollCondition : decreaseScroll;
                                        finishedCondition = rtlIsNormal
                                            ? (decreaseScroll ? handleOffset + handleLength >= mouseOffset : handleOffset <= mouseOffset)
                                            : (decreaseScroll ? handleOffset <= mouseOffset : handleOffset + handleLength >= mouseOffset);

                                        if (finishedCondition) {
                                            clearTimeout(trackTimeout);
                                            _base.scrollStop();
                                            trackTimeout = undefined$1;
                                            scrollActionFinsished(true);
                                        }
                                        else {
                                            trackTimeout = setTimeout(scrollAction, timeoutDelay);

                                            scrollObj[xy] = (decreaseScroll ? '-=' : '+=') + scrollDistance;
                                            _base.scroll(scrollObj, extendDeep(animationObj, {
                                                duration: scrollDuration
                                            }));
                                        }
                                        isFirstIteration = false;
                                    }
                                }
                            };
                            if (ctrlKey)
                                increaseTrackScrollAmount();

                            mouseDownInvertedScale = getHostElementInvertedScale()[xy];
                            mouseDownOffset = COMPATIBILITY.page(event)[xy];

                            _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle);
                            addClass(_bodyElement, _classNameDragging);
                            addClass(scrollbarVars._track, strActive);
                            addClass(scrollbarVars._scrollbar, strActive);

                            setupResponsiveEventListener(_documentElement,
                                [ _strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent ],
                                [ documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart ]);

                            scrollAction();
                            COMPATIBILITY.prvD(event);
                            COMPATIBILITY.stpP(event);
                        }
                    }
                    function onTrackMouseTouchEnter(event) {
                        //make sure both scrollbars will stay visible if one scrollbar is hovered if autoHide is "scroll" or "move".
                        _scrollbarsHandleHovered = true;
                        if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                            refreshScrollbarsAutoHide(true);
                    }
                    function onTrackMouseTouchLeave(event) {
                        _scrollbarsHandleHovered = false;
                        if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                            refreshScrollbarsAutoHide(false);
                    }
                    function onScrollbarMouseTouchDown(event) {
                        COMPATIBILITY.stpP(event);
                    }
                    
                    addDestroyEventListener(scrollbarVars._handle, 
                        _strMouseTouchDownEvent, 
                        onHandleMouseTouchDown);
                    addDestroyEventListener(scrollbarVars._track,
                        [_strMouseTouchDownEvent, _strMouseTouchEnter, _strMouseTouchLeave], 
                        [onTrackMouseTouchDown, onTrackMouseTouchEnter, onTrackMouseTouchLeave]);
                    addDestroyEventListener(scrollbarVars._scrollbar, 
                        _strMouseTouchDownEvent, 
                        onScrollbarMouseTouchDown);

                    if (_supportTransition) {
                        addDestroyEventListener(scrollbarVars._scrollbar, _strTransitionEndEvent, function(event) {
                            if (event.target !== scrollbarVars._scrollbar[0])
                                return;
                            refreshScrollbarHandleLength(isHorizontal);
                            refreshScrollbarHandleOffset(isHorizontal);
                        });
                    }
                }

                /**
                 * Shows or hides the given scrollbar and applied a class name which indicates if the scrollbar is scrollable or not.
                 * @param isHorizontal True if the horizontal scrollbar is the target, false if the vertical scrollbar is the target.
                 * @param shallBeVisible True if the scrollbar shall be shown, false if hidden.
                 * @param canScroll True if the scrollbar is scrollable, false otherwise.
                 */
                function refreshScrollbarAppearance(isHorizontal, shallBeVisible, canScroll) {
                    var scrollbarClassName = isHorizontal ? _classNameHostScrollbarHorizontalHidden : _classNameHostScrollbarVerticalHidden;
                    var scrollbarElement = isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement;

                    if (shallBeVisible)
                        removeClass(_hostElement, scrollbarClassName);
                    else
                        addClass(_hostElement, scrollbarClassName);

                    if (canScroll)
                        removeClass(scrollbarElement, _classNameScrollbarUnusable);
                    else
                        addClass(scrollbarElement, _classNameScrollbarUnusable);
                }

                /**
                 * Autoshows / autohides both scrollbars with.
                 * @param shallBeVisible True if the scrollbars shall be autoshown (only the case if they are hidden by a autohide), false if the shall be auto hidden.
                 * @param delayfree True if the scrollbars shall be hidden without a delay, false or undefined otherwise.
                 */
                function refreshScrollbarsAutoHide(shallBeVisible, delayfree) {
                    clearTimeout(_scrollbarsAutoHideTimeoutId);
                    if (shallBeVisible) {
                        //if(_hasOverflowCache.x && _hideOverflowCache.xs)
                        removeClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden);
                        //if(_hasOverflowCache.y && _hideOverflowCache.ys)
                        removeClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
                    }
                    else {
                        var anyActive;
                        var strActive = 'active';
                        var hide = function () {
                            if (!_scrollbarsHandleHovered && !_destroyed) {
                                anyActive = _scrollbarHorizontalHandleElement.hasClass(strActive) || _scrollbarVerticalHandleElement.hasClass(strActive);
                                if (!anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave))
                                    addClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden);
                                if (!anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave))
                                    addClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
                            }
                        };
                        if (_scrollbarsAutoHideDelay > 0 && delayfree !== true)
                            _scrollbarsAutoHideTimeoutId = setTimeout(hide, _scrollbarsAutoHideDelay);
                        else
                            hide();
                    }
                }

                /**
                 * Refreshes the handle length of the given scrollbar.
                 * @param isHorizontal True if the horizontal scrollbar handle shall be refreshed, false if the vertical one shall be refreshed.
                 */
                function refreshScrollbarHandleLength(isHorizontal) {
                    var handleCSS = {};
                    var scrollbarVars = getScrollbarVars(isHorizontal);
                    var scrollbarVarsInfo = scrollbarVars._info;
                    var digit = 1000000;
                    //get and apply intended handle length
                    var handleRatio = MATH.min(1, (_hostSizeCache[scrollbarVars._w_h] - (_paddingAbsoluteCache ? (isHorizontal ? _paddingX : _paddingY) : 0)) / _contentScrollSizeCache[scrollbarVars._w_h]);
                    handleCSS[scrollbarVars._width_height] = (MATH.floor(handleRatio * 100 * digit) / digit) + '%'; //the last * digit / digit is for flooring to the 4th digit

                    if (!nativeOverlayScrollbarsAreActive())
                        scrollbarVars._handle.css(handleCSS);

                    //measure the handle length to respect min & max length
                    scrollbarVarsInfo._handleLength = scrollbarVars._handle[0]['offset' + scrollbarVars._Width_Height];
                    scrollbarVarsInfo._handleLengthRatio = handleRatio;
                }

                /**
                 * Refreshes the handle offset of the given scrollbar.
                 * @param isHorizontal True if the horizontal scrollbar handle shall be refreshed, false if the vertical one shall be refreshed.
                 * @param scrollOrTransition The scroll position of the given scrollbar axis to which the handle shall be moved or a boolean which indicates whether a transition shall be applied. If undefined or boolean if the current scroll-offset is taken. (if isHorizontal ? scrollLeft : scrollTop)
                 */
                function refreshScrollbarHandleOffset(isHorizontal, scrollOrTransition) {
                    var transition = type(scrollOrTransition) == TYPES.b;
                    var transitionDuration = 250;
                    var isRTLisHorizontal = _isRTL && isHorizontal;
                    var scrollbarVars = getScrollbarVars(isHorizontal);
                    var scrollbarVarsInfo = scrollbarVars._info;
                    var strTranslateBrace = 'translate(';
                    var strTransform = VENDORS._cssProperty('transform');
                    var strTransition = VENDORS._cssProperty('transition');
                    var nativeScroll = isHorizontal ? _viewportElement[_strScrollLeft]() : _viewportElement[_strScrollTop]();
                    var currentScroll = scrollOrTransition === undefined$1 || transition ? nativeScroll : scrollOrTransition;

                    //measure the handle length to respect min & max length
                    var handleLength = scrollbarVarsInfo._handleLength;
                    var trackLength = scrollbarVars._track[0]['offset' + scrollbarVars._Width_Height];
                    var handleTrackDiff = trackLength - handleLength;
                    var handleCSS = {};
                    var transformOffset;
                    var translateValue;

                    //DONT use the variable '_contentScrollSizeCache[scrollbarVars._w_h]' instead of '_viewportElement[0]['scroll' + scrollbarVars._Width_Height]'
                    // because its a bit behind during the small delay when content size updates
                    //(delay = mutationObserverContentLag, if its 0 then this var could be used)
                    var maxScroll = (_viewportElementNative[_strScroll + scrollbarVars._Width_Height] - _viewportElementNative['client' + scrollbarVars._Width_Height]) * (_rtlScrollBehavior.n && isRTLisHorizontal ? -1 : 1); //* -1 if rtl scroll max is negative
                    var getScrollRatio = function(base) {
                        return isNaN(base / maxScroll) ? 0 : MATH.max(0, MATH.min(1, base / maxScroll));
                    };
                    var getHandleOffset = function(scrollRatio) {
                        var offset = handleTrackDiff * scrollRatio;
                        offset = isNaN(offset) ? 0 : offset;
                        offset = (isRTLisHorizontal && !_rtlScrollBehavior.i) ? (trackLength - handleLength - offset) : offset;
                        offset = MATH.max(0, offset);
                        return offset;
                    };
                    var scrollRatio = getScrollRatio(nativeScroll);
                    var unsnappedScrollRatio = getScrollRatio(currentScroll);
                    var handleOffset = getHandleOffset(unsnappedScrollRatio);
                    var snappedHandleOffset = getHandleOffset(scrollRatio);

                    scrollbarVarsInfo._maxScroll = maxScroll;
                    scrollbarVarsInfo._currentScroll = nativeScroll;
                    scrollbarVarsInfo._currentScrollRatio = scrollRatio;

                    if (_supportTransform) {
                        transformOffset = isRTLisHorizontal ? -(trackLength - handleLength - handleOffset) : handleOffset; //in px
                        //transformOffset = (transformOffset / trackLength * 100) * (trackLength / handleLength); //in %
                        translateValue = isHorizontal ? strTranslateBrace + transformOffset + 'px, 0)' : strTranslateBrace + '0, ' + transformOffset + 'px)';

                        handleCSS[strTransform] = translateValue;

                        //apply or clear up transition
                        if(_supportTransition)
                            handleCSS[strTransition] = transition && MATH.abs(handleOffset - scrollbarVarsInfo._handleOffset) > 1 ? getCSSTransitionString(scrollbarVars._handle) + ', ' +  (strTransform + _strSpace + transitionDuration + 'ms') : _strEmpty;
                    }
                    else
                        handleCSS[scrollbarVars._left_top] = handleOffset;


                    //only apply css if offset has changed and overflow exists.
                    if (!nativeOverlayScrollbarsAreActive()) {
                        scrollbarVars._handle.css(handleCSS);

                        //clear up transition
                        if(_supportTransform && _supportTransition && transition) {
                            scrollbarVars._handle.one(_strTransitionEndEvent, function() {
                                if(!_destroyed)
                                    scrollbarVars._handle.css(strTransition, _strEmpty);
                            });
                        }
                    }

                    scrollbarVarsInfo._handleOffset = handleOffset;
                    scrollbarVarsInfo._snappedHandleOffset = snappedHandleOffset;
                    scrollbarVarsInfo._trackLength = trackLength;
                }

                /**
                 * Refreshes the interactivity of the given scrollbar element.
                 * @param isTrack True if the track element is the target, false if the handle element is the target.
                 * @param value True for interactivity false for no interactivity.
                 */
                function refreshScrollbarsInteractive(isTrack, value) {
                    var action = value ? 'removeClass' : 'addClass';
                    var element1 = isTrack ? _scrollbarHorizontalTrackElement : _scrollbarHorizontalHandleElement;
                    var element2 = isTrack ? _scrollbarVerticalTrackElement : _scrollbarVerticalHandleElement;
                    var className = isTrack ? _classNameScrollbarTrackOff : _classNameScrollbarHandleOff;

                    element1[action](className);
                    element2[action](className);
                }

                /**
                 * Returns a object which is used for fast access for specific variables.
                 * @param isHorizontal True if the horizontal scrollbar vars shall be accessed, false if the vertical scrollbar vars shall be accessed.
                 * @returns {{wh: string, WH: string, lt: string, _wh: string, _lt: string, t: *, h: *, c: {}, s: *}}
                 */
                function getScrollbarVars(isHorizontal) {
                    return {
                        _width_height: isHorizontal ? _strWidth : _strHeight,
                        _Width_Height: isHorizontal ? 'Width' : 'Height',
                        _left_top: isHorizontal ? _strLeft : _strTop,
                        _Left_Top: isHorizontal ? 'Left' : 'Top',
                        _x_y: isHorizontal ? _strX : _strY,
                        _X_Y: isHorizontal ? 'X' : 'Y',
                        _w_h: isHorizontal ? 'w' : 'h',
                        _l_t: isHorizontal ? 'l' : 't',
                        _track: isHorizontal ? _scrollbarHorizontalTrackElement : _scrollbarVerticalTrackElement,
                        _handle: isHorizontal ? _scrollbarHorizontalHandleElement : _scrollbarVerticalHandleElement,
                        _scrollbar: isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement,
                        _info: isHorizontal ? _scrollHorizontalInfo : _scrollVerticalInfo
                    };
                }


                //==== Scrollbar Corner ====//

                /**
                 * Builds or destroys the scrollbar corner DOM element.
                 * @param destroy Indicates whether the DOM shall be build or destroyed.
                 */
                function setupScrollbarCornerDOM(destroy) {
                    _scrollbarCornerElement = _scrollbarCornerElement || selectOrGenerateDivByClass(_classNameScrollbarCorner, true);
                    
                    if(!destroy) {
                        if(!_domExists) {
                            _hostElement.append(_scrollbarCornerElement);
                        }
                    }
                    else {
                        if(_domExists && _initialized) {
                            removeClass(_scrollbarCornerElement.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
                        }
                        else {
                            remove(_scrollbarCornerElement);
                        }
                    }
                 }

                /**
                 * Initializes all scrollbar corner interactivity events.
                 */
                function setupScrollbarCornerEvents() {
                    var insideIFrame = _windowElementNative.top !== _windowElementNative;
                    var mouseDownPosition = { };
                    var mouseDownSize = { };
                    var mouseDownInvertedScale = { };
                    var reconnectMutationObserver;
                    
                    function documentDragMove(event) {
                        if (onMouseTouchDownContinue(event)) {
                            var pageOffset = getCoordinates(event);
                            var hostElementCSS = { };
                            if (_resizeHorizontal || _resizeBoth)
                                hostElementCSS[_strWidth] = (mouseDownSize.w + (pageOffset.x - mouseDownPosition.x) * mouseDownInvertedScale.x);
                            if (_resizeVertical || _resizeBoth)
                                hostElementCSS[_strHeight] = (mouseDownSize.h + (pageOffset.y - mouseDownPosition.y) * mouseDownInvertedScale.y);
                            _hostElement.css(hostElementCSS);
                            COMPATIBILITY.stpP(event);
                        }
                        else {
                            documentMouseTouchUp(event);
                        }
                    }
                    function documentMouseTouchUp(event) {
                        var eventIsTrusted = event !== undefined$1;

                        setupResponsiveEventListener(_documentElement,
                                [ _strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent ],
                                [ documentOnSelectStart, documentDragMove, documentMouseTouchUp ],
                                true);

                        removeClass(_bodyElement, _classNameDragging);
                        if (_scrollbarCornerElement.releaseCapture)
                            _scrollbarCornerElement.releaseCapture();

                        if (eventIsTrusted) {
                            if (reconnectMutationObserver)
                                connectMutationObservers();
                            _base.update(_strAuto);
                        }
                        reconnectMutationObserver = false;
                    }
                    function onMouseTouchDownContinue(event) {
                        var originalEvent = event.originalEvent || event;
                        var isTouchEvent = originalEvent.touches !== undefined$1;
                        return _sleeping || _destroyed ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
                    }
                    function getCoordinates(event) {
                        return _msieVersion && insideIFrame ? { x : event.screenX , y : event.screenY } : COMPATIBILITY.page(event);
                    }
                
                    addDestroyEventListener(_scrollbarCornerElement, _strMouseTouchDownEvent, function(event) {
                        if (onMouseTouchDownContinue(event) && !_resizeNone) {
                            if (_mutationObserversConnected) {
                                reconnectMutationObserver = true;
                                disconnectMutationObservers();
                            }

                            mouseDownPosition = getCoordinates(event);

                            mouseDownSize.w = _hostElementNative[LEXICON.oW] - (!_isBorderBox ? _paddingX : 0);
                            mouseDownSize.h = _hostElementNative[LEXICON.oH] - (!_isBorderBox ? _paddingY : 0);
                            mouseDownInvertedScale = getHostElementInvertedScale();

                            setupResponsiveEventListener(_documentElement,
                                [ _strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent ],
                                [ documentOnSelectStart, documentDragMove, documentMouseTouchUp ]);

                            addClass(_bodyElement, _classNameDragging);
                            if (_scrollbarCornerElement.setCapture)
                                _scrollbarCornerElement.setCapture();

                            COMPATIBILITY.prvD(event);
                            COMPATIBILITY.stpP(event);
                        }
                    });
                }


                //==== Utils ====//

                /**
                 * Calls the callback with the given name. The Context of this callback is always _base (this).
                 * @param name The name of the target which shall be called.
                 * @param args The args with which the callback shall be called.
                 */
                function dispatchCallback(name, args) {
                    if(_initialized) {
                        var callback = _currentPreparedOptions.callbacks[name];
                        var extensionOnName = name;
                        var ext;

                        if(extensionOnName.substr(0, 2) === 'on')
                            extensionOnName = extensionOnName.substr(2, 1).toLowerCase() + extensionOnName.substr(3);

                        if(type(callback) == TYPES.f)
                            callback.call(_base, args);

                        each(_extensions, function() {
                            ext = this;
                            if(type(ext.on) == TYPES.f)
                                ext.on(extensionOnName, args);
                        });
                    }
                    else if(!_destroyed)
                        _callbacksInitQeueue.push({ n : name, a : args });
                }

                /**
                 * Sets the "top, right, bottom, left" properties, with a given prefix, of the given css object.
                 * @param targetCSSObject The css object to which the values shall be applied.
                 * @param prefix The prefix of the "top, right, bottom, left" css properties. (example: 'padding-' is a valid prefix)
                 * @param values A array of values which shall be applied to the "top, right, bottom, left" -properties. The array order is [top, right, bottom, left].
                 * If this argument is undefined the value '' (empty string) will be applied to all properties.
                 */
                function setTopRightBottomLeft(targetCSSObject, prefix, values) {
                    if (values === undefined$1)
                        values = [_strEmpty, _strEmpty, _strEmpty, _strEmpty];

                    targetCSSObject[prefix + _strTop] = values[0];
                    targetCSSObject[prefix + _strRight] = values[1];
                    targetCSSObject[prefix + _strBottom] = values[2];
                    targetCSSObject[prefix + _strLeft] = values[3];
                }

                /**
                 * Returns the computed CSS transition string from the given element.
                 * @param element The element from which the transition string shall be returned.
                 * @returns {string} The CSS transition string from the given element.
                 */
                function getCSSTransitionString(element) {
                    var transitionStr = VENDORS._cssProperty('transition');
                    var assembledValue = element.css(transitionStr);
                    if(assembledValue)
                        return assembledValue;
                    var regExpString = '\\s*(' + '([^,(]+(\\(.+?\\))?)+' + ')[\\s,]*';
                    var regExpMain = new RegExp(regExpString);
                    var regExpValidate = new RegExp('^(' + regExpString + ')+$');
                    var properties = 'property duration timing-function delay'.split(' ');
                    var result = [ ];
                    var strResult;
                    var valueArray;
                    var i = 0;
                    var j;
                    var splitCssStyleByComma = function(str) {
                        strResult = [ ];
                        if (!str.match(regExpValidate))
                            return str;
                        while (str.match(regExpMain)) {
                            strResult.push(RegExp.$1);
                            str = str.replace(regExpMain, _strEmpty);
                        }

                        return strResult;
                    };
                    for (; i < properties[LEXICON.l]; i++) {
                        valueArray = splitCssStyleByComma(element.css(transitionStr + '-' + properties[i]));
                        for (j = 0; j < valueArray[LEXICON.l]; j++)
                            result[j] = (result[j] ? result[j] + _strSpace : _strEmpty) + valueArray[j];
                    }
                    return result.join(', ');
                }

                /**
                 * Calculates the host-elements inverted scale. (invertedScale = 1 / scale)
                 * @returns {{x: number, y: number}} The scale of the host-element.
                 */
                function getHostElementInvertedScale() {
                    var rect = _paddingElementNative[LEXICON.bCR]();
                    return {
                        x :  _supportTransform ? 1 / (MATH.round(rect.width) / _paddingElementNative[LEXICON.oW]) || 1 : 1,
                        y :  _supportTransform ? 1 / (MATH.round(rect.height) / _paddingElementNative[LEXICON.oH]) || 1 : 1
                    };
                }

                /**
                 * Checks whether the given object is a HTMLElement.
                 * @param o The object which shall be checked.
                 * @returns {boolean} True the given object is a HTMLElement, false otherwise.
                 */
                function isHTMLElement(o) {
                    var strOwnerDocument = 'ownerDocument';
                    var strHTMLElement = 'HTMLElement';
                    var wnd = o && o[strOwnerDocument] ? (o[strOwnerDocument].parentWindow || window) : window;
                    return (
                        typeof wnd[strHTMLElement] == TYPES.o ? o instanceof wnd[strHTMLElement] : //DOM2
                        o && typeof o == TYPES.o && o !== null && o.nodeType === 1 && typeof o.nodeName == TYPES.s
                    );
                }

                /**
                 * Compares 2 arrays and returns the differences between them as a array.
                 * @param a1 The first array which shall be compared.
                 * @param a2 The second array which shall be compared.
                 * @returns {Array} The differences between the two arrays.
                 */
                function getArrayDifferences(a1, a2) {
                    var a = [ ];
                    var diff = [ ];
                    var i;
                    var k;
                    for (i = 0; i < a1.length; i++)
                        a[a1[i]] = true;
                    for (i = 0; i < a2.length; i++) {
                        if (a[a2[i]])
                            delete a[a2[i]];
                        else
                            a[a2[i]] = true;
                    }
                    for (k in a)
                        diff.push(k);
                    return diff;
                }

                /**
                 * Returns Zero or the number to which the value can be parsed.
                 * @param value The value which shall be parsed.
                 * @param toFloat Indicates whether the number shall be parsed to a float.
                 */
                function parseToZeroOrNumber(value, toFloat) {
                    var num = toFloat ? parseFloat(value) : parseInt(value, 10);
                    return isNaN(num) ? 0 : num;
                }

                /**
                 * Gets several information of the textarea and returns them as a object or undefined if the browser doesn't support it.
                 * @returns {{cursorRow: Number, cursorCol, rows: Number, cols: number, wRow: number, pos: number, max : number}} or undefined if not supported.
                 */
                function getTextareaInfo() {
                    //read needed values
                    var textareaCursorPosition = _targetElementNative.selectionStart;
                    if (textareaCursorPosition === undefined$1)
                        return;

                    var textareaValue = _targetElement.val();
                    var textareaLength = textareaValue[LEXICON.l];
                    var textareaRowSplit = textareaValue.split('\n');
                    var textareaLastRow = textareaRowSplit[LEXICON.l];
                    var textareaCurrentCursorRowSplit = textareaValue.substr(0, textareaCursorPosition).split('\n');
                    var widestRow = 0;
                    var textareaLastCol = 0;
                    var cursorRow = textareaCurrentCursorRowSplit[LEXICON.l];
                    var cursorCol = textareaCurrentCursorRowSplit[textareaCurrentCursorRowSplit[LEXICON.l] - 1][LEXICON.l];
                    var rowCols;
                    var i;

                    //get widest Row and the last column of the textarea
                    for (i = 0; i < textareaRowSplit[LEXICON.l]; i++) {
                        rowCols = textareaRowSplit[i][LEXICON.l];
                        if (rowCols > textareaLastCol) {
                            widestRow = i + 1;
                            textareaLastCol = rowCols;
                        }
                    }

                    return {
                        _cursorRow: cursorRow, //cursorRow
                        _cursorColumn: cursorCol, //cursorCol
                        _rows: textareaLastRow, //rows
                        _columns: textareaLastCol, //cols
                        _widestRow: widestRow, //wRow
                        _cursorPosition: textareaCursorPosition, //pos
                        _cursorMax: textareaLength //max
                    };
                }

                /**
                 * Determines whether native overlay scrollbars are active.
                 * @returns {boolean} True if native overlay scrollbars are active, false otherwise.
                 */
                function nativeOverlayScrollbarsAreActive() {
                    return (_ignoreOverlayScrollbarHidingCache && (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y));
                }

                /**
                 * Gets the element which is used to measure the content size.
                 * @returns {*} TextareaCover if target element is textarea else the ContentElement.
                 */
                function getContentMeasureElement() {
                    return _isTextarea ? _textareaCoverElement[0] : _contentElementNative;
                }

                /**
                 * Generates a string which represents a HTML div with the given classes or attributes.
                 * @param classesOrAttrs The class of the div as string or a object which represents the attributes of the div. (The class attribute can also be written as "className".)
                 * @param content The content of the div as string.
                 * @returns {string} The concated string which represents a HTML div and its content.
                 */
                function generateDiv(classesOrAttrs, content) {
                    return '<div ' + (classesOrAttrs ? type(classesOrAttrs) == TYPES.s ?
                        'class="' + classesOrAttrs + '"' :
                            (function() {
                                var key;
                                var attrs = _strEmpty;
                                if(FRAMEWORK.isPlainObject(classesOrAttrs)) {
                                    for (key in classesOrAttrs)
                                        attrs += (key === 'c' ? 'class' : key) + '="' + classesOrAttrs[key] + '" ';
                                }
                                return attrs;
                            })() :
                            _strEmpty) +
                        '>' +
                        (content || _strEmpty) +
                        '</div>';
                }
                
                /**
                 * Selects or generates a div with the given class attribute.
                 * @param className The class names (divided by spaces) of the div which shall be selected or generated.
                 * @param selectParentOrOnlyChildren The parent element from which of the element shall be selected. (if undefined or boolean its hostElement)
                 * If its a boolean it decides whether only the children of the host element shall be selected.
                 * @returns {*} The generated or selected element.
                 */
                function selectOrGenerateDivByClass(className, selectParentOrOnlyChildren) {
                    var onlyChildren = type(selectParentOrOnlyChildren) == TYPES.b;
                    var selectParent = onlyChildren ? _hostElement : (selectParentOrOnlyChildren || _hostElement);
                    
                    return (_domExists && !selectParent[LEXICON.l]) 
                        ? null
                        : _domExists 
                            ? selectParent[onlyChildren ? 'children' : 'find'](_strDot + className.replace(/\s/g, _strDot)).eq(0)
                            : FRAMEWORK(generateDiv(className))
                }
                
                /**
                 * Gets the value of the given property from the given object.
                 * @param obj The object from which the property value shall be got.
                 * @param path The property of which the value shall be got.
                 * @returns {*} Returns the value of the searched property or undefined of the property wasn't found.
                 */
                function getObjectPropVal(obj, path) {
                    var splits = path.split(_strDot);
                    var i = 0;
                    var val;
                    for(; i < splits.length; i++) {
                        if(!obj[LEXICON.hOP](splits[i]))
                            return;
                        val = obj[splits[i]];
                        if(i < splits.length && type(val) == TYPES.o)
                            obj = val;
                    }
                    return val;
                }

                /**
                 * Sets the value of the given property from the given object.
                 * @param obj The object from which the property value shall be set.
                 * @param path The property of which the value shall be set.
                 * @param val The value of the property which shall be set.
                 */
                function setObjectPropVal(obj, path, val) {
                    var splits = path.split(_strDot);
                    var splitsLength = splits.length;
                    var i = 0;
                    var extendObj = { };
                    var extendObjRoot = extendObj;
                    for(; i < splitsLength; i++)
                        extendObj = extendObj[splits[i]] = i + 1 < splitsLength ? { } : val;
                    FRAMEWORK.extend(obj, extendObjRoot, true);
                }


                //==== Utils Cache ====//

                /**
                 * Compares two values or objects and returns true if they aren't equal.
                 * @param current The first value or object which shall be compared.
                 * @param cache The second value or object which shall be compared.
                 * @param force If true the returned value is always true.
                 * @returns {boolean} True if both values or objects aren't equal or force is true, false otherwise.
                 */
                function checkCache(current, cache, force) {
                    if (force)
                        return force;
                    if(type(current) == TYPES.o && type(cache) == TYPES.o) {
                        for (var prop in current) {
                            if(prop !== 'c') {
                                if (current[LEXICON.hOP](prop) && cache[LEXICON.hOP](prop)) {
                                    if(checkCache(current[prop], cache[prop]))
                                        return true;
                                }
                                else {
                                    return true;
                                }
                            }
                        }
                    }
                    else {
                        return current !== cache;
                    }
                    return false;
                }


                //==== Shortcuts ====//

                /**
                 * jQuery extend method shortcut with a appended "true" as first argument.
                 */
                function extendDeep() {
                    return FRAMEWORK.extend.apply(this, [ true ].concat([].slice.call(arguments)));
                }

                /**
                 * jQuery addClass method shortcut.
                 */
                function addClass(el, classes) {
                    return _frameworkProto.addClass.call(el, classes);
                }

                /**
                 * jQuery removeClass method shortcut.
                 */
                function removeClass(el, classes) {
                    return _frameworkProto.removeClass.call(el, classes);
                }

                /**
                 * jQuery remove method shortcut.
                 */
                function remove(el) {
                    return _frameworkProto.remove.call(el);
                }

                /**
                 * Finds the first child element with the given selector of the given element.
                 * @param el The root element from which the selector shall be valid.
                 * @param selector The selector of the searched element.
                 * @returns {*} The first element which is a child of the given element and matches the givens selector.
                 */
                function findFirst(el, selector) {
                    return _frameworkProto.find.call(el, selector).eq(0);
                }


                //==== API ====//

                /**
                 * Puts the instance to sleep. It wont respond to any changes in the DOM and won't update. Scrollbar Interactivity is also disabled as well as the resize handle.
                 * This behavior can be reset by calling the update method.
                 */
                _base.sleep = function () {
                    _sleeping = true;
                };

                /**
                 * Updates the plugin and DOM to the current options.
                 * This method should only be called if a update is 100% required.
                 * @param force True if every property shall be updated and the cache shall be ignored.
                 * !INTERNAL USAGE! : force can be a string "auto", "sync" or "zoom" too
                 * if "auto" then before a real update the content size and host element attributes gets checked, and if they changed only then the update method will be called.
                 * if "sync" then the async update process (MutationObserver or UpdateLoop) gets synchronized and a corresponding update takes place if one was needed due to pending changes.
                 * if "zoom" then a update takes place where it's assumed that content and host size changed
                 * @returns {boolean|undefined} 
                 * If force is "sync" then a boolean is returned which indicates whether a update was needed due to pending changes.
                 * If force is "auto" then a boolean is returned whether a update was needed due to attribute or size changes.
                 * undefined otherwise.
                 */
                _base.update = function (force) {
                    if(_destroyed)
                        return;
                    
                    var attrsChanged;
                    var contentSizeC;
                    var isString = type(force) == TYPES.s;
                    var imgElementSelector = 'img';
                    var imgElementLoadEvent = 'load';
                    var doUpdateAuto;
                    var mutHost;
                    var mutContent;
                    
                    if(isString) {
                        if (force === _strAuto) {
                            attrsChanged = meaningfulAttrsChanged();
                            contentSizeC = updateAutoContentSizeChanged();
                            doUpdateAuto = attrsChanged || contentSizeC;
                            if (doUpdateAuto) {
                                update({
                                    _contentSizeChanged : contentSizeC,
                                    _changedOptions : _initialized ? undefined$1 : _currentPreparedOptions
                                });
                            }
                        }
                        else if (force === _strSync) {
                            if(_mutationObserversConnected) {
                                mutHost = _mutationObserverHostCallback(_mutationObserverHost.takeRecords());
                                mutContent = _mutationObserverContentCallback(_mutationObserverContent.takeRecords());
                            }
                            else {
                                mutHost = _base.update(_strAuto);
                            }
                        }
                        else if (force === 'zoom') {
                            update({
                                _hostSizeChanged : true,
                                _contentSizeChanged : true
                            });
                        }
                    }
                    else {
                        force = _sleeping || force;
                        _sleeping = false;
                        if(!_base.update(_strSync) || force)
                            update({ _force : force });
                    }
                    if(!_isTextarea) {
                        _contentElement.find(imgElementSelector).each(function(i, el) {
                            var index = COMPATIBILITY.inA(el, _imgs);
                            if (index === -1)
                                FRAMEWORK(el).off(imgElementLoadEvent, imgOnLoad).on(imgElementLoadEvent, imgOnLoad);
                        });
                    }
                    return doUpdateAuto || mutHost || mutContent;
                };

                /**
                 Gets or sets the current options. The update method will be called automatically if new options were set.
                 * @param newOptions If new options are given, then the new options will be set, if new options aren't given (undefined or a not a plain object) then the current options will be returned.
                 * @param value If new options is a property path string, then this value will be used to set the option to which the property path string leads.
                 * @returns {*}
                 */
                _base.options = function (newOptions, value) {
                    var option = { };
                    var changedOps;
                    
                    //return current options if newOptions are undefined or empty
                    if (FRAMEWORK.isEmptyObject(newOptions) || !FRAMEWORK.isPlainObject(newOptions)) {
                        if (type(newOptions) == TYPES.s) {
                            if (arguments.length > 1) {
                                setObjectPropVal(option, newOptions, value);
                                changedOps = setOptions(option);
                            }
                            else
                                return getObjectPropVal(_currentOptions, newOptions);
                        }
                        else
                            return _currentOptions;
                    }
                    else {
                        changedOps = setOptions(newOptions);
                    }
                    
                    if(!FRAMEWORK.isEmptyObject(changedOps)) {
                        update({ _changedOptions : changedOps });
                    }    
                };

                /**
                 * Restore the DOM, disconnects all observers, remove all resize observers and put the instance to sleep.
                 */
                _base.destroy = function () {
                    if(_destroyed)
                        return;
                    
                    //remove this instance from auto update loop
                    autoUpdateLoop.remove(_base);

                    //disconnect all mutation observers
                    disconnectMutationObservers();

                    //remove all resize observers
                    setupResizeObserver(_sizeObserverElement);
                    setupResizeObserver(_sizeAutoObserverElement);

                    //remove all extensions
                    for(var extName in _extensions)
                        _base.removeExt(extName);

                    //remove all 'destroy' events
                    while(_destroyEvents[LEXICON.l] > 0)
                        _destroyEvents.pop()();

                    //remove all events from host element
                    setupHostMouseTouchEvents(true);

                    //remove all helper / detection elements
                    if (_contentGlueElement)
                        remove(_contentGlueElement);
                    if (_contentArrangeElement)
                        remove(_contentArrangeElement);
                    if (_sizeAutoObserverAdded)
                        remove(_sizeAutoObserverElement);

                    //remove all generated DOM
                    setupScrollbarsDOM(true);
                    setupScrollbarCornerDOM(true);
                    setupStructureDOM(true);

                    //remove all generated image load events
                    for(var i = 0; i < _imgs[LEXICON.l]; i++)
                        FRAMEWORK(_imgs[i]).off('load', imgOnLoad);
                    _imgs = undefined$1;

                    _destroyed = true;
                    _sleeping = true;

                    //remove this instance from the instances list
                    INSTANCES(pluginTargetElement, 0);
                    dispatchCallback('onDestroyed');

                    //remove all properties and methods
                    //for (var property in _base)
                    //    delete _base[property];
                    //_base = undefined;
                };

                /**
                 * Scrolls to a given position or element.
                 * @param coordinates
                 * 1. Can be "coordinates" which looks like:
                 *    { x : ?, y : ? } OR          Object with x and y properties
                 *    { left : ?, top : ? } OR     Object with left and top properties
                 *    { l : ?, t : ? } OR          Object with l and t properties
                 *    [ ?, ? ] OR                  Array where the first two element are the coordinates (first is x, second is y)
                 *    ?                            A single value which stays for both axis
                 *    A value can be a number, a string or a calculation.
                 *
                 *    Operators:
                 *    [NONE]  The current scroll will be overwritten by the value.
                 *    '+='    The value will be added to the current scroll offset
                 *    '-='    The value will be subtracted from the current scroll offset
                 *    '*='    The current scroll wil be multiplicated by the value.
                 *    '/='    The current scroll wil be divided by the value.
                 *
                 *    Units:
                 *    [NONE]  The value is the final scroll amount.                   final = (value * 1)
                 *    'px'    Same as none
                 *    '%'     The value is dependent on the current scroll value.     final = ((currentScrollValue / 100) * value)
                 *    'vw'    The value is multiplicated by the viewport width.       final = (value * viewportWidth)
                 *    'vh'    The value is multiplicated by the viewport height.      final = (value * viewportHeight)
                 *
                 *    example final values:
                 *    200, '200px', '50%', '1vw', '1vh', '+=200', '/=1vw', '*=2px', '-=5vh', '+=33%', '+= 50% - 2px', '-= 1vw - 50%'
                 *
                 * 2. Can be a HTML or jQuery element:
                 *    The final scroll offset is the offset (without margin) of the given HTML / jQuery element.
                 *
                 * 3. Can be a object with a HTML or jQuery element with additional settings:
                 *    {
                 *      el : [HTMLElement, jQuery element],             MUST be specified, else this object isn't valid.
                 *      scroll : [string, array, object],               Default value is 'always'.
                 *      block : [string, array, object],                Default value is 'begin'.
                 *      margin : [number, boolean, array, object]       Default value is false.
                 *    }
                 *
                 *    Possible scroll settings are:
                 *    'always'      Scrolls always.
                 *    'ifneeded'    Scrolls only if the element isnt fully in view.
                 *    'never'       Scrolls never.
                 *
                 *    Possible block settings are:
                 *    'begin'   Both axis shall be docked to the "begin" edge. - The element will be docked to the top and left edge of the viewport.
                 *    'end'     Both axis shall be docked to the "end" edge. - The element will be docked to the bottom and right edge of the viewport. (If direction is RTL to the bottom and left edge.)
                 *    'center'  Both axis shall be docked to "center". - The element will be centered in the viewport.
                 *    'nearest' The element will be docked to the nearest edge(s).
                 *
                 *    Possible margin settings are: -- The actual margin of the element wont be affect, this option affects only the final scroll offset.
                 *    [BOOLEAN]                                         If true the css margin of the element will be used, if false no margin will be used.
                 *    [NUMBER]                                          The margin will be used for all edges.
                 *
                 * @param duration The duration of the scroll animation, OR a jQuery animation configuration object.
                 * @param easing The animation easing.
                 * @param complete The animation complete callback.
                 * @returns {{
                 *   position: {x: number, y: number},
                 *   ratio: {x: number, y: number},
                 *   max: {x: number, y: number},
                 *   handleOffset: {x: number, y: number},
                 *   handleLength: {x: number, y: number},
                 *   handleLengthRatio: {x: number, y: number}, t
                 *   rackLength: {x: number, y: number},
                 *   isRTL: boolean,
                 *   isRTLNormalized: boolean
                 *  }}
                 */
                _base.scroll = function (coordinates, duration, easing, complete) {
                    if (arguments.length === 0 || coordinates === undefined$1) {
                        var infoX = _scrollHorizontalInfo;
                        var infoY = _scrollVerticalInfo;
                        var normalizeInvert = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.i;
                        var normalizeNegate = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.n;
                        var scrollX = infoX._currentScroll;
                        var scrollXRatio = infoX._currentScrollRatio;
                        var maxScrollX = infoX._maxScroll;
                        scrollXRatio = normalizeInvert ? 1 - scrollXRatio : scrollXRatio;
                        scrollX = normalizeInvert ? maxScrollX - scrollX : scrollX;
                        scrollX *= normalizeNegate ? -1 : 1;
                        maxScrollX *= normalizeNegate ? -1 : 1;

                        return {
                            position : {
                                x : scrollX,
                                y : infoY._currentScroll
                            },
                            ratio : {
                                x : scrollXRatio,
                                y : infoY._currentScrollRatio
                            },
                            max : {
                                x : maxScrollX,
                                y : infoY._maxScroll
                            },
                            handleOffset : {
                                x : infoX._handleOffset,
                                y : infoY._handleOffset
                            },
                            handleLength : {
                                x : infoX._handleLength,
                                y : infoY._handleLength
                            },
                            handleLengthRatio : {
                                x : infoX._handleLengthRatio,
                                y : infoY._handleLengthRatio
                            },
                            trackLength : {
                                x : infoX._trackLength,
                                y : infoY._trackLength
                            },
                            snappedHandleOffset : {
                                x : infoX._snappedHandleOffset,
                                y : infoY._snappedHandleOffset
                            },
                            isRTL: _isRTL,
                            isRTLNormalized: _normalizeRTLCache
                        };
                    }
                    
                    _base.update(_strSync);
                    
                    var normalizeRTL = _normalizeRTLCache;
                    var coordinatesXAxisProps = [_strX, _strLeft, 'l'];
                    var coordinatesYAxisProps = [_strY, _strTop, 't'];
                    var coordinatesOperators = ['+=', '-=', '*=', '/='];
                    var durationIsObject = type(duration) == TYPES.o;
                    var completeCallback = durationIsObject ? duration.complete : complete;
                    var i;
                    var finalScroll = { };
                    var specialEasing = {};
                    var doScrollLeft;
                    var doScrollTop;
                    var animationOptions;
                    var strEnd = 'end';
                    var strBegin = 'begin';
                    var strCenter = 'center';
                    var strNearest = 'nearest';
                    var strAlways = 'always';
                    var strNever = 'never';
                    var strIfNeeded = 'ifneeded';
                    var strLength = LEXICON.l;
                    var settingsAxis;
                    var settingsScroll;
                    var settingsBlock;
                    var settingsMargin;
                    var finalElement;
                    var elementObjSettingsAxisValues = [_strX, _strY, 'xy', 'yx'];
                    var elementObjSettingsBlockValues = [strBegin, strEnd, strCenter, strNearest];
                    var elementObjSettingsScrollValues = [strAlways, strNever, strIfNeeded];
                    var coordinatesIsElementObj = coordinates[LEXICON.hOP]('el');
                    var possibleElement = coordinatesIsElementObj ? coordinates.el : coordinates;
                    var possibleElementIsJQuery = possibleElement instanceof FRAMEWORK || JQUERY ? possibleElement instanceof JQUERY : false;
                    var possibleElementIsHTMLElement = possibleElementIsJQuery ? false : isHTMLElement(possibleElement);
                    var proxyCompleteCallback = type(completeCallback) != TYPES.f ? undefined$1 : function() {
                        if(doScrollLeft)
                            refreshScrollbarHandleOffset(true);
                        if(doScrollTop)
                            refreshScrollbarHandleOffset(false);
                        completeCallback();
                    };
                    function checkSettingsStringValue(currValue, allowedValues) {
                        for (i = 0; i < allowedValues[strLength]; i++) {
                            if (currValue === allowedValues[i])
                                return true;
                        }
                        return false;
                    }
                    function getRawScroll(isX, coordinates) {
                        var coordinateProps = isX ? coordinatesXAxisProps : coordinatesYAxisProps;
                        coordinates = type(coordinates) == TYPES.s || type(coordinates) == TYPES.n ? [ coordinates, coordinates ] : coordinates;

                        if (type(coordinates) == TYPES.a)
                            return isX ? coordinates[0] : coordinates[1];
                        else if (type(coordinates) == TYPES.o) {
                            //decides RTL normalization "hack" with .n
                            //normalizeRTL = type(coordinates.n) == TYPES.b ? coordinates.n : normalizeRTL; 
                            for (i = 0; i < coordinateProps[strLength]; i++)
                                if (coordinateProps[i] in coordinates)
                                    return coordinates[coordinateProps[i]];
                        }
                    }
                    function getFinalScroll(isX, rawScroll) {
                        var isString = type(rawScroll) == TYPES.s;
                        var operator;
                        var amount;
                        var scrollInfo = isX ? _scrollHorizontalInfo : _scrollVerticalInfo;
                        var currScroll = scrollInfo._currentScroll;
                        var maxScroll = scrollInfo._maxScroll;
                        var mult = ' * ';
                        var finalValue;
                        var isRTLisX = _isRTL && isX;
                        var normalizeShortcuts = isRTLisX && _rtlScrollBehavior.n && !normalizeRTL;
                        var strReplace = 'replace';
                        var evalFunc = eval;
                        var possibleOperator;
                        if (isString) {
                            //check operator
                            if (rawScroll[strLength] > 2) {
                                possibleOperator = rawScroll.substr(0, 2);
                                if(inArray(possibleOperator, coordinatesOperators) > -1)
                                    operator = possibleOperator;
                            }

                            //calculate units and shortcuts
                            rawScroll = operator ? rawScroll.substr(2) : rawScroll;
                            rawScroll = rawScroll
                            [strReplace](/min/g, 0) //'min' = 0%
                            [strReplace](/</g, 0)   //'<'   = 0%
                            [strReplace](/max/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent)    //'max' = 100%
                            [strReplace](/>/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent)      //'>'   = 100%
                            [strReplace](/px/g, _strEmpty)
                            [strReplace](/%/g, mult + (maxScroll * (isRTLisX && _rtlScrollBehavior.n ? -1 : 1) / 100.0))
                            [strReplace](/vw/g, mult + _viewportSize.w)
                            [strReplace](/vh/g, mult + _viewportSize.h);
                            amount = parseToZeroOrNumber(isNaN(rawScroll) ? parseToZeroOrNumber(evalFunc(rawScroll), true).toFixed() : rawScroll);
                        }
                        else {
                            amount = rawScroll;
                        }

                        if (amount !== undefined$1 && !isNaN(amount) && type(amount) == TYPES.n) {
                            var normalizeIsRTLisX = normalizeRTL && isRTLisX;
                            var operatorCurrScroll = currScroll * (normalizeIsRTLisX && _rtlScrollBehavior.n ? -1 : 1);
                            var invert = normalizeIsRTLisX && _rtlScrollBehavior.i;
                            var negate = normalizeIsRTLisX && _rtlScrollBehavior.n;
                            operatorCurrScroll = invert ? (maxScroll - operatorCurrScroll) : operatorCurrScroll;
                            switch (operator) {
                                case '+=':
                                    finalValue = operatorCurrScroll + amount;
                                    break;
                                case '-=':
                                    finalValue = operatorCurrScroll - amount;
                                    break;
                                case '*=':
                                    finalValue = operatorCurrScroll * amount;
                                    break;
                                case '/=':
                                    finalValue = operatorCurrScroll / amount;
                                    break;
                                default:
                                    finalValue = amount;
                                    break;
                            }
                            finalValue = invert ? maxScroll - finalValue : finalValue;
                            finalValue *= negate ? -1 : 1;
                            finalValue = isRTLisX && _rtlScrollBehavior.n ? MATH.min(0, MATH.max(maxScroll, finalValue)) : MATH.max(0, MATH.min(maxScroll, finalValue));
                        }
                        return finalValue === currScroll ? undefined$1 : finalValue;
                    }
                    function getPerAxisValue(value, valueInternalType, defaultValue, allowedValues) {
                        var resultDefault = [ defaultValue, defaultValue ];
                        var valueType = type(value);
                        var valueArrLength;
                        var valueArrItem;

                        //value can be [ string, or array of two strings ]
                        if (valueType == valueInternalType) {
                            value = [value, value];
                        }
                        else if (valueType == TYPES.a) {
                            valueArrLength = value[strLength];
                            if (valueArrLength > 2 || valueArrLength < 1)
                                value = resultDefault;
                            else {
                                if (valueArrLength === 1)
                                    value[1] = defaultValue;
                                for (i = 0; i < valueArrLength; i++) {
                                    valueArrItem = value[i];
                                    if (type(valueArrItem) != valueInternalType || !checkSettingsStringValue(valueArrItem, allowedValues)) {
                                        value = resultDefault;
                                        break;
                                    }
                                }
                            }
                        }
                        else if (valueType == TYPES.o)
                            value = [ value[_strX]|| defaultValue, value[_strY] || defaultValue];
                        else
                            value = resultDefault;
                        return { x : value[0], y : value[1] };
                    }
                    function generateMargin(marginTopRightBottomLeftArray) {
                        var result = [ ];
                        var currValue;
                        var currValueType;
                        var valueDirections = [ _strTop, _strRight, _strBottom, _strLeft ];
                        for(i = 0; i < marginTopRightBottomLeftArray[strLength]; i++) {
                            if(i === valueDirections[strLength])
                                break;
                            currValue = marginTopRightBottomLeftArray[i];
                            currValueType = type(currValue);
                            if(currValueType == TYPES.b)
                                result.push(currValue ? parseToZeroOrNumber(finalElement.css(_strMarginMinus + valueDirections[i])) : 0);
                            else
                                result.push(currValueType == TYPES.n ? currValue : 0);
                        }
                        return result;
                    }

                    if (possibleElementIsJQuery || possibleElementIsHTMLElement) {
                        //get settings
                        var margin = coordinatesIsElementObj ? coordinates.margin : 0;
                        var axis = coordinatesIsElementObj ? coordinates.axis : 0;
                        var scroll = coordinatesIsElementObj ? coordinates.scroll : 0;
                        var block = coordinatesIsElementObj ? coordinates.block : 0;
                        var marginDefault = [ 0, 0, 0, 0 ];
                        var marginType = type(margin);
                        var marginLength;
                        finalElement = possibleElementIsJQuery ? possibleElement : FRAMEWORK(possibleElement);
                        
                        if (finalElement[strLength] > 0) {
                            //margin can be [ boolean, number, array of 2, array of 4, object ]
                            if (marginType == TYPES.n || marginType == TYPES.b)
                                margin = generateMargin([margin, margin, margin, margin]);
                            else if (marginType == TYPES.a) {
                                marginLength = margin[strLength];
                                if(marginLength === 2)
                                    margin = generateMargin([margin[0], margin[1], margin[0], margin[1]]);
                                else if(marginLength >= 4)
                                    margin = generateMargin(margin);
                                else
                                    margin = marginDefault;
                            }
                            else if (marginType == TYPES.o)
                                margin = generateMargin([margin[_strTop], margin[_strRight], margin[_strBottom], margin[_strLeft]]);
                            else
                                margin = marginDefault;

                            //block = type(block) === TYPES.b ? block ? [ strNearest, strBegin ] : [ strNearest, strEnd ] : block;
                            settingsAxis = checkSettingsStringValue(axis, elementObjSettingsAxisValues) ? axis : 'xy';
                            settingsScroll = getPerAxisValue(scroll, TYPES.s, strAlways, elementObjSettingsScrollValues);
                            settingsBlock = getPerAxisValue(block, TYPES.s, strBegin, elementObjSettingsBlockValues);
                            settingsMargin = margin;

                            var viewportScroll = {
                                l: _scrollHorizontalInfo._currentScroll,
                                t: _scrollVerticalInfo._currentScroll
                            };
                            // use padding element instead of viewport element because padding element has never padding, margin or position applied.
                            var viewportOffset = _paddingElement.offset();

                            //get coordinates
                            var elementOffset = finalElement.offset();
                            var doNotScroll = {
                                x : settingsScroll.x == strNever || settingsAxis == _strY,
                                y : settingsScroll.y == strNever || settingsAxis == _strX
                            };
                            elementOffset[_strTop] -= settingsMargin[0];
                            elementOffset[_strLeft] -= settingsMargin[3];
                            var elementScrollCoordinates = {
                                x: MATH.round(elementOffset[_strLeft] - viewportOffset[_strLeft] + viewportScroll.l),
                                y: MATH.round(elementOffset[_strTop] - viewportOffset[_strTop] + viewportScroll.t)
                            };
                            if (_isRTL) {
                                if (!_rtlScrollBehavior.n && !_rtlScrollBehavior.i)
                                    elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + viewportScroll.l);
                                if (_rtlScrollBehavior.n && normalizeRTL)
                                    elementScrollCoordinates.x *= -1;
                                if (_rtlScrollBehavior.i && normalizeRTL)
                                    elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + (_scrollHorizontalInfo._maxScroll - viewportScroll.l));
                            }

                            //measuring is required
                            if (settingsBlock.x != strBegin || settingsBlock.y != strBegin || settingsScroll.x == strIfNeeded || settingsScroll.y == strIfNeeded || _isRTL) {
                                var measuringElm = finalElement[0];
                                var rawElementSize = _supportTransform ? measuringElm[LEXICON.bCR]() : {
                                    width : measuringElm[LEXICON.oW],
                                    height : measuringElm[LEXICON.oH]
                                };
                                var elementSize = {
                                    w: rawElementSize[_strWidth] + settingsMargin[3] + settingsMargin[1],
                                    h: rawElementSize[_strHeight] + settingsMargin[0] + settingsMargin[2]
                                };
                                var finalizeBlock = function(isX) {
                                    var vars = getScrollbarVars(isX);
                                    var wh = vars._w_h;
                                    var lt = vars._left_top;
                                    var xy = vars._x_y;
                                    var blockIsEnd = settingsBlock[xy] == (isX ? _isRTL ? strBegin : strEnd : strEnd);
                                    var blockIsCenter = settingsBlock[xy] == strCenter;
                                    var blockIsNearest = settingsBlock[xy] == strNearest;
                                    var scrollNever = settingsScroll[xy] == strNever;
                                    var scrollIfNeeded = settingsScroll[xy] == strIfNeeded;
                                    var vpSize = _viewportSize[wh];
                                    var vpOffset = viewportOffset[lt];
                                    var elSize = elementSize[wh];
                                    var elOffset = elementOffset[lt];
                                    var divide = blockIsCenter ? 2 : 1;
                                    var elementCenterOffset = elOffset + (elSize / 2);
                                    var viewportCenterOffset = vpOffset + (vpSize / 2);
                                    var isInView =
                                        elSize <= vpSize
                                        && elOffset >= vpOffset
                                        && elOffset + elSize <= vpOffset + vpSize;

                                    if(scrollNever)
                                        doNotScroll[xy] = true;
                                    else if(!doNotScroll[xy]) {
                                        if (blockIsNearest || scrollIfNeeded) {
                                            doNotScroll[xy] = scrollIfNeeded ? isInView : false;
                                            blockIsEnd = elSize < vpSize ? elementCenterOffset > viewportCenterOffset : elementCenterOffset < viewportCenterOffset;
                                        }
                                        elementScrollCoordinates[xy] -= blockIsEnd || blockIsCenter ? ((vpSize / divide) - (elSize / divide)) * (isX && _isRTL && normalizeRTL ? -1 : 1) : 0;
                                    }
                                };
                                finalizeBlock(true);
                                finalizeBlock(false);
                            }

                            if (doNotScroll.y)
                                delete elementScrollCoordinates.y;
                            if (doNotScroll.x)
                                delete elementScrollCoordinates.x;

                            coordinates = elementScrollCoordinates;
                        }
                    }

                    finalScroll[_strScrollLeft] = getFinalScroll(true, getRawScroll(true, coordinates));
                    finalScroll[_strScrollTop] = getFinalScroll(false, getRawScroll(false, coordinates));
                    doScrollLeft = finalScroll[_strScrollLeft] !== undefined$1;
                    doScrollTop = finalScroll[_strScrollTop] !== undefined$1;

                    if ((doScrollLeft || doScrollTop) && (duration > 0 || durationIsObject)) {
                        if (durationIsObject) {
                            duration.complete = proxyCompleteCallback;
                            _viewportElement.animate(finalScroll, duration);
                        }
                        else {
                            animationOptions = {
                                duration: duration,
                                complete: proxyCompleteCallback
                            };
                            if (type(easing) == TYPES.a || FRAMEWORK.isPlainObject(easing)) {
                                specialEasing[_strScrollLeft] = easing[0] || easing.x;
                                specialEasing[_strScrollTop] = easing[1] || easing.y;
                                animationOptions.specialEasing = specialEasing;
                            }
                            else {
                                animationOptions.easing = easing;
                            }
                            _viewportElement.animate(finalScroll, animationOptions);
                        }
                    }
                    else {
                        if (doScrollLeft)
                            _viewportElement[_strScrollLeft](finalScroll[_strScrollLeft]);
                        if (doScrollTop)
                            _viewportElement[_strScrollTop](finalScroll[_strScrollTop]);
                    }
                };

                /**
                 * Stops all scroll animations.
                 * @returns {*} The current OverlayScrollbars instance (for chaining).
                 */
                _base.scrollStop = function (param1, param2, param3) {
                    _viewportElement.stop(param1, param2, param3);
                    return _base;
                };

                /**
                 * Returns all relevant elements.
                 * @param elementName The name of the element which shall be returned.
                 * @returns {{target: *, host: *, padding: *, viewport: *, content: *, scrollbarHorizontal: {scrollbar: *, track: *, handle: *}, scrollbarVertical: {scrollbar: *, track: *, handle: *}, scrollbarCorner: *} | *}
                 */
                _base.getElements = function (elementName) {
                    var obj = {
                        target: _targetElementNative,
                        host: _hostElementNative,
                        padding: _paddingElementNative,
                        viewport: _viewportElementNative,
                        content: _contentElementNative,
                        scrollbarHorizontal: {
                            scrollbar: _scrollbarHorizontalElement[0],
                            track: _scrollbarHorizontalTrackElement[0],
                            handle: _scrollbarHorizontalHandleElement[0]
                        },
                        scrollbarVertical: {
                            scrollbar: _scrollbarVerticalElement[0],
                            track: _scrollbarVerticalTrackElement[0],
                            handle: _scrollbarVerticalHandleElement[0]
                        },
                        scrollbarCorner: _scrollbarCornerElement[0]
                    };
                    return type(elementName) == TYPES.s ? getObjectPropVal(obj, elementName) : obj;
                };

                /**
                 * Returns a object which describes the current state of this instance.
                 * @param stateProperty A specific property from the state object which shall be returned.
                 * @returns {{widthAuto, heightAuto, overflowAmount, hideOverflow, hasOverflow, contentScrollSize, viewportSize, hostSize, autoUpdate} | *}
                 */
                _base.getState = function (stateProperty) {
                    function prepare(obj) {
                        if (!FRAMEWORK.isPlainObject(obj))
                            return obj;
                        var extended = extendDeep({}, obj);
                        var changePropertyName = function (from, to) {
                            if (extended[LEXICON.hOP](from)) {
                                extended[to] = extended[from];
                                delete extended[from];
                            }
                        };
                        changePropertyName('w', _strWidth); //change w to width
                        changePropertyName('h', _strHeight); //change h to height
                        delete extended.c; //delete c (the 'changed' prop)
                        return extended;
                    }                    var obj = {
                        destroyed: !!prepare(_destroyed),
                        sleeping: !!prepare(_sleeping),
                        autoUpdate: prepare(!_mutationObserversConnected),
                        widthAuto: prepare(_widthAutoCache),
                        heightAuto: prepare(_heightAutoCache),
                        padding: prepare(_cssPaddingCache),
                        overflowAmount: prepare(_overflowAmountCache),
                        hideOverflow: prepare(_hideOverflowCache),
                        hasOverflow: prepare(_hasOverflowCache),
                        contentScrollSize: prepare(_contentScrollSizeCache),
                        viewportSize: prepare(_viewportSize),
                        hostSize: prepare(_hostSizeCache),
                        documentMixed : prepare(_documentMixed)
                    };
                    return type(stateProperty) == TYPES.s ? getObjectPropVal(obj, stateProperty) : obj;
                };

                /**
                 * Gets all or specific extension instance.
                 * @param extName The name of the extension from which the instance shall be got.
                 * @returns {{}} The instance of the extension with the given name or undefined if the instance couldn't be found.
                 */
                _base.ext = function(extName) {
                    var result;
                    var privateMethods = _extensionsPrivateMethods.split(' ');
                    var i = 0;
                    if(type(extName) == TYPES.s) {
                        if(_extensions[LEXICON.hOP](extName)) {
                            result = extendDeep({}, _extensions[extName]);
                            for (; i < privateMethods.length; i++)
                                delete result[privateMethods[i]];
                        }
                    }
                    else {
                        result = { };
                        for(i in _extensions)
                            result[i] = extendDeep({ }, _base.ext(i));
                    }
                    return result;
                };

                /**
                 * Adds a extension to this instance.
                 * @param extName The name of the extension which shall be added.
                 * @param extensionOptions The extension options which shall be used.
                 * @returns {{}} The instance of the added extension or undefined if the extension couldn't be added properly.
                 */
                _base.addExt = function(extName, extensionOptions) {
                    var registeredExtensionObj = _plugin.extension(extName);
                    var instance;
                    var instanceAdded;
                    var instanceContract;
                    var contractResult;
                    var contractFulfilled = true;
                    if(registeredExtensionObj) {
                        if(!_extensions[LEXICON.hOP](extName)) {
                            instance = registeredExtensionObj.extensionFactory.call(_base,
                                extendDeep({ }, registeredExtensionObj.defaultOptions),
                                FRAMEWORK,
                                COMPATIBILITY);

                            if (instance) {
                                instanceContract = instance.contract;
                                if (type(instanceContract) == TYPES.f) {
                                    contractResult = instanceContract(window);
                                    contractFulfilled = type(contractResult) == TYPES.b ? contractResult : contractFulfilled;
                                }
                                if(contractFulfilled) {
                                    _extensions[extName] = instance;
                                    instanceAdded = instance.added;
                                    if(type(instanceAdded) == TYPES.f)
                                        instanceAdded(extensionOptions);

                                    return _base.ext(extName);
                                }
                            }
                        }
                        else
                            return _base.ext(extName);
                    }
                    else
                        console.warn("A extension with the name \"" + extName + "\" isn't registered.");
                };

                /**
                 * Removes a extension from this instance.
                 * @param extName The name of the extension which shall be removed.
                 * @returns {boolean} True if the extension was removed, false otherwise e.g. if the extension wasn't added before.
                 */
                _base.removeExt = function(extName) {
                    var instance = _extensions[extName];
                    var instanceRemoved;
                    if(instance) {
                        delete _extensions[extName];

                        instanceRemoved = instance.removed;
                        if(type(instanceRemoved) == TYPES.f)
                            instanceRemoved();

                        return true;
                    }
                    return false;
                };

                /**
                 * Constructs the plugin.
                 * @param targetElement The element to which the plugin shall be applied.
                 * @param options The initial options of the plugin.
                 * @param extensions The extension(s) which shall be added right after the initialization.
                 * @returns {boolean} True if the plugin was successfully initialized, false otherwise.
                 */
                function construct(targetElement, options, extensions) {
                    _defaultOptions = globals.defaultOptions;
                    _nativeScrollbarStyling = globals.nativeScrollbarStyling;
                    _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize);
                    _nativeScrollbarIsOverlaid = extendDeep({}, globals.nativeScrollbarIsOverlaid);
                    _overlayScrollbarDummySize = extendDeep({}, globals.overlayScrollbarDummySize);
                    _rtlScrollBehavior = extendDeep({}, globals.rtlScrollBehavior);

                    //parse & set options but don't update
                    setOptions(extendDeep({ }, _defaultOptions, options));

                    _cssCalc = globals.cssCalc;
                    _msieVersion = globals.msie;
                    _autoUpdateRecommended = globals.autoUpdateRecommended;
                    _supportTransition = globals.supportTransition;
                    _supportTransform = globals.supportTransform;
                    _supportPassiveEvents = globals.supportPassiveEvents;
                    _supportResizeObserver = globals.supportResizeObserver;
                    _supportMutationObserver = globals.supportMutationObserver;
                    _restrictedMeasuring = globals.restrictedMeasuring;
                    _documentElement = FRAMEWORK(targetElement.ownerDocument);
                    _documentElementNative = _documentElement[0];
                    _windowElement = FRAMEWORK(_documentElementNative.defaultView || _documentElementNative.parentWindow);
                    _windowElementNative = _windowElement[0];
                    _htmlElement = findFirst(_documentElement, 'html');
                    _bodyElement =  findFirst(_htmlElement, 'body');
                    _targetElement = FRAMEWORK(targetElement);
                    _targetElementNative = _targetElement[0];
                    _isTextarea = _targetElement.is('textarea');
                    _isBody = _targetElement.is('body');
                    _documentMixed = _documentElementNative !== document;

                    /* On a div Element The if checks only whether:
                     * - the targetElement has the class "os-host"
                     * - the targetElement has a a child with the class "os-padding"
                     * 
                     * If that's the case, its assumed the DOM has already the following structure:
                     * (The ".os-host" element is the targetElement)
                     *
                     *  <div class="os-host">
                     *      <div class="os-resize-observer-host"></div>
                     *      <div class="os-padding">
                     *          <div class="os-viewport">
                     *              <div class="os-content"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-horizontal ">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-vertical">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar-corner"></div>
                     *  </div>
                     *
                     * =====================================================================================
                     * 
                     * On a Textarea Element The if checks only whether:
                     * - the targetElement has the class "os-textarea" 
                     * - the targetElement is inside a element with the class "os-content" 
                     * 
                     * If that's the case, its assumed the DOM has already the following structure:
                     * (The ".os-textarea" (textarea) element is the targetElement)
                     *
                     *  <div class="os-host-textarea">
                     *      <div class="os-resize-observer-host"></div>
                     *      <div class="os-padding os-text-inherit">
                     *          <div class="os-viewport os-text-inherit">
                     *              <div class="os-content os-text-inherit">
                     *                  <div class="os-textarea-cover"></div>
                     *                  <textarea class="os-textarea os-text-inherit"></textarea>
                     *              </div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-horizontal ">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-vertical">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar-corner"></div>
                     *  </div>
                     */
                    _domExists = _isTextarea 
                        ? _targetElement.hasClass(_classNameTextareaElement) && _targetElement.parent().hasClass(_classNameContentElement)
                        : _targetElement.hasClass(_classNameHostElement) && _targetElement.children(_strDot + _classNamePaddingElement)[LEXICON.l];

                    var initBodyScroll;
                    var bodyMouseTouchDownListener;

                    //check if the plugin hasn't to be initialized
                    if (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && !_currentPreparedOptions.nativeScrollbarsOverlaid.initialize) {
                        dispatchCallback('onInitializationWithdrawn');
                        if(_domExists) {
                            setupStructureDOM(true);
                            setupScrollbarsDOM(true);
                            setupScrollbarCornerDOM(true);
                        }
                        
                        _destroyed = true;
                        _sleeping = true;
                        
                        return _base;
                    }

                    if (_isBody) {
                        initBodyScroll = {};
                        initBodyScroll.l = MATH.max(_targetElement[_strScrollLeft](), _htmlElement[_strScrollLeft](), _windowElement[_strScrollLeft]());
                        initBodyScroll.t = MATH.max(_targetElement[_strScrollTop](), _htmlElement[_strScrollTop](), _windowElement[_strScrollTop]());
                        
                        bodyMouseTouchDownListener = function() {
                            _viewportElement.removeAttr('tabindex');
                            setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, true, true);
                        };
                    }

                    //build OverlayScrollbars DOM
                    setupStructureDOM();
                    setupScrollbarsDOM();
                    setupScrollbarCornerDOM();
                    
                    //create OverlayScrollbars events
                    setupStructureEvents();
                    setupScrollbarEvents(true);
                    setupScrollbarEvents(false);
                    setupScrollbarCornerEvents();

                    //create mutation observers
                    createMutationObservers();

                    //build resize observer for the host element
                    setupResizeObserver(_sizeObserverElement, hostOnResized);

                    if(_isBody) {
                        //apply the body scroll to handle it right in the update method
                        _viewportElement[_strScrollLeft](initBodyScroll.l)[_strScrollTop](initBodyScroll.t);

                        //set the focus on the viewport element so you dont have to click on the page to use keyboard keys (up / down / space) for scrolling
                        if(document.activeElement == targetElement && _viewportElementNative.focus) {
                            //set a tabindex to make the viewportElement focusable
                            _viewportElement.attr('tabindex', '-1');
                            _viewportElementNative.focus();
                            
                            /* the tabindex has to be removed due to;
                             * If you set the tabindex attribute on an <div>, then its child content cannot be scrolled with the arrow keys unless you set tabindex on the content, too
                             * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                             */
                            setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, false, true);
                        }
                    }

                    //update for the first time & initialize cache
                    _base.update(_strAuto);

                    //the plugin is initialized now!
                    _initialized = true;
                    dispatchCallback('onInitialized');

                    //call all callbacks which would fire before the initialized was complete
                    each(_callbacksInitQeueue, function(index, value) { dispatchCallback(value.n, value.a); });
                    _callbacksInitQeueue = [ ];

                    //add extensions
                    if(type(extensions) == TYPES.s)
                        extensions = [ extensions ];
                    if(COMPATIBILITY.isA(extensions))
                        each(extensions, function (index, value) {_base.addExt(value); });
                    else if(FRAMEWORK.isPlainObject(extensions))
                        each(extensions, function (key, value) { _base.addExt(key, value); });

                    //add the transition class for transitions AFTER the first update & AFTER the applied extensions (for preventing unwanted transitions)
                    setTimeout(function () {
                        if (_supportTransition && !_destroyed)
                            addClass(_hostElement, _classNameHostTransition);
                    }, 333);

                    return _base;
                }

                if(_plugin.valid(construct(pluginTargetElement, options, extensions))) {
                    INSTANCES(pluginTargetElement, _base);
                }
                
                return _base;
            }

            /**
             * Initializes a new OverlayScrollbarsInstance object or changes options if already initialized or returns the current instance.
             * @param pluginTargetElements The elements to which the Plugin shall be initialized.
             * @param options The custom options with which the plugin shall be initialized.
             * @param extensions The extension(s) which shall be added right after initialization.
             * @returns {*}
             */
            _plugin = window[PLUGINNAME] = function(pluginTargetElements, options, extensions) {
                if(arguments[LEXICON.l] === 0)
                    return this;

                var arr = [ ];
                var optsIsPlainObj = FRAMEWORK.isPlainObject(options);
                var inst;
                var result;

                //pluginTargetElements is null or undefined
                if(!pluginTargetElements)
                    return optsIsPlainObj || !options ? result : arr;

                /*
                   pluginTargetElements will be converted to:
                   1. A jQueryElement Array
                   2. A HTMLElement Array
                   3. A Array with a single HTML Element
                   so pluginTargetElements is always a array.
                */
                pluginTargetElements = pluginTargetElements[LEXICON.l] != undefined$1 ? pluginTargetElements : [ pluginTargetElements[0] || pluginTargetElements ];
                initOverlayScrollbarsStatics();

                if(pluginTargetElements[LEXICON.l] > 0) {
                    if(optsIsPlainObj) {
                        FRAMEWORK.each(pluginTargetElements, function (i, v) {
                            inst = v;
                            if(inst !== undefined$1)
                                arr.push(OverlayScrollbarsInstance(inst, options, extensions, _pluginsGlobals, _pluginsAutoUpdateLoop));
                        });
                    }
                    else {
                        FRAMEWORK.each(pluginTargetElements, function(i, v) {
                            inst = INSTANCES(v);
                            if((options === '!' && _plugin.valid(inst)) || (COMPATIBILITY.type(options) == TYPES.f && options(v, inst)))
                                arr.push(inst);
                            else if(options === undefined$1)
                                arr.push(inst);
                        });
                    }
                    result = arr[LEXICON.l] === 1 ? arr[0] : arr;
                }
                return result;
            };

            /**
             * Returns a object which contains global information about the plugin and each instance of it.
             * The returned object is just a copy, that means that changes to the returned object won't have any effect to the original object.
             */
            _plugin.globals = function () {
                initOverlayScrollbarsStatics();
                var globals = FRAMEWORK.extend(true, { }, _pluginsGlobals);
                delete globals['msie'];
                return globals;
            };

            /**
             * Gets or Sets the default options for each new plugin initialization.
             * @param newDefaultOptions The object with which the default options shall be extended.
             */
            _plugin.defaultOptions = function(newDefaultOptions) {
                initOverlayScrollbarsStatics();
                var currDefaultOptions = _pluginsGlobals.defaultOptions;
                if(newDefaultOptions === undefined$1)
                    return FRAMEWORK.extend(true, { }, currDefaultOptions);

                //set the new default options
                _pluginsGlobals.defaultOptions = FRAMEWORK.extend(true, { }, currDefaultOptions , _pluginsOptions._validate(newDefaultOptions, _pluginsOptions._template, true, currDefaultOptions)._default);
            };

            /**
             * Checks whether the passed instance is a non-destroyed OverlayScrollbars instance.
             * @param osInstance The potential OverlayScrollbars instance which shall be checked.
             * @returns {boolean} True if the passed value is a non-destroyed OverlayScrollbars instance, false otherwise.
             */
            _plugin.valid = function (osInstance) {
                return osInstance instanceof _plugin && !osInstance.getState().destroyed;
            };

            /**
             * Registers, Unregisters or returns a extension.
             * Register: Pass the name and the extension. (defaultOptions is optional)
             * Unregister: Pass the name and anything except a function as extension parameter.
             * Get extension: Pass the name of the extension which shall be got.
             * Get all extensions: Pass no arguments.
             * @param extensionName The name of the extension which shall be registered, unregistered or returned.
             * @param extension A function which generates the instance of the extension or anything other to remove a already registered extension.
             * @param defaultOptions The default options which shall be used for the registered extension.
             */
            _plugin.extension = function(extensionName, extension, defaultOptions) {
                var extNameTypeString = COMPATIBILITY.type(extensionName) == TYPES.s;
                var argLen = arguments[LEXICON.l];
                var i = 0;
                if(argLen < 1 || !extNameTypeString) {
                    //return a copy of all extension objects
                    return FRAMEWORK.extend(true, { length : _pluginsExtensions[LEXICON.l] }, _pluginsExtensions);
                }
                else if(extNameTypeString) {
                    if(COMPATIBILITY.type(extension) == TYPES.f) {
                        //register extension
                        _pluginsExtensions.push({
                            name : extensionName,
                            extensionFactory : extension,
                            defaultOptions : defaultOptions
                        });
                    }
                    else {
                        for(; i < _pluginsExtensions[LEXICON.l]; i++) {
                            if (_pluginsExtensions[i].name === extensionName) {
                                if(argLen > 1)
                                    _pluginsExtensions.splice(i, 1); //remove extension
                                else
                                    return FRAMEWORK.extend(true, { }, _pluginsExtensions[i]); //return extension with the given name
                            }
                        }
                    }
                }
            };

            return _plugin;
        })();

        if(JQUERY && JQUERY.fn) {
            /**
             * The jQuery initialization interface.
             * @param options The initial options for the construction of the plugin. To initialize the plugin, this option has to be a object! If it isn't a object, the instance(s) are returned and the plugin wont be initialized.
             * @param extensions The extension(s) which shall be added right after initialization.
             * @returns {*} After initialization it returns the jQuery element array, else it returns the instance(s) of the elements which are selected.
             */
            JQUERY.fn.overlayScrollbars = function (options, extensions) {
                var _elements = this;
                if(JQUERY.isPlainObject(options)) {
                    JQUERY.each(_elements, function() { PLUGIN(this, options, extensions); });
                    return _elements;
                }
                else
                    return PLUGIN(_elements, options);
            };
        }
        return PLUGIN;
    }
));

/* 3rd party */


$(function(){
	window._framework.buildPage({
		defaultHash : 'overview'
	});
});
//# sourceMappingURL=index.bundle.js.map
