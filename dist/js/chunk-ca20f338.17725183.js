(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca20f338"],{"04e9":function(e,t,i){"use strict";var n=i("c483"),a=i.n(n);a.a},"273c":function(e,t,i){},"49ba":function(e,t,i){"use strict";var n=i("273c"),a=i.n(n);a.a},"547e":function(e,t,i){},"58a6":function(e,t,i){},7081:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loading-img",style:e.calcStyle},[i("img",{class:{failed:e.failed},attrs:{"data-viewer":e.dataViewer,src:e.srcNow,alt:"img"},on:{load:e.loaded,error:e.errored,click:e.reload}}),e.loading?i("span",{attrs:{flex:""}},[i("svg-icon",{attrs:{name:"loading"}})],1):e._e()])},a=[],m=i("8f7d"),o=i.n(m),r={name:"LoadingImg",props:{src:{type:String,default:""},size:{type:Array,default:function(){return[8,8]}},dataViewer:{type:Boolean,default:!1}},data:function(){return{srcNow:this.src,loading:!0,failed:!1}},watch:{"$props.src":function(){this.srcNow=this.$props.src,this.failed=!1,this.loading=!0}},computed:{calcStyle:function(){var e={};return this.size[0]>0&&(e.width="".concat(this.size[0],"rem")),this.size[1]>0&&(e.height="".concat(this.size[1],"rem")),e}},methods:{loaded:function(){this.loading=!1},errored:function(){this.loading=!1,this.failed=!0,this.srcNow=o.a},reload:function(){this.failed&&(this.loading=!0,this.failed=!1,this.srcNow=this.src)}}},l=r,s=(i("04e9"),i("2877")),u=Object(s["a"])(l,n,a,!1,null,"1ee9f432",null);t["a"]=u.exports},"8f7d":function(e,t,i){e.exports=i.p+"img/error.846eeb1f.jpg"},"959b":function(e,t,i){(function(e){e(i("56b3"),i("d5e0"),i("f040"))})((function(e){"use strict";e.defineMode("markdown",(function(t,i){var n=e.getMode(t,"text/html"),a="null"==n.name;function m(i){if(e.findModeByName){var n=e.findModeByName(i);n&&(i=n.mime||n.mimes[0])}var a=e.getMode(t,i);return"null"==a.name?null:a}void 0===i.highlightFormatting&&(i.highlightFormatting=!1),void 0===i.maxBlockquoteDepth&&(i.maxBlockquoteDepth=0),void 0===i.taskLists&&(i.taskLists=!1),void 0===i.strikethrough&&(i.strikethrough=!1),void 0===i.emoji&&(i.emoji=!1),void 0===i.fencedCodeBlockHighlighting&&(i.fencedCodeBlockHighlighting=!0),void 0===i.fencedCodeBlockDefaultMode&&(i.fencedCodeBlockDefaultMode="text/plain"),void 0===i.xml&&(i.xml=!0),void 0===i.tokenTypeOverrides&&(i.tokenTypeOverrides={});var o={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var r in o)o.hasOwnProperty(r)&&i.tokenTypeOverrides[r]&&(o[r]=i.tokenTypeOverrides[r]);var l=/^([*\-_])(?:\s*\1){2,}\s*$/,s=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,u=/^\[(x| )\](?=\s)/i,d=i.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,c=/^ {0,3}(?:\={1,}|-{2,})\s*$/,x=/^[^#!\[\]*_\\<>` "'(~:]+/,f=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,h=/^\s*\[[^\]]+?\]:.*$/,g=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,p="    ";function k(e,t,i){return t.f=t.inline=i,i(e,t)}function v(e,t,i){return t.f=t.block=i,i(e,t)}function F(e){return!e||!/\S/.test(e.string)}function D(t){if(t.linkTitle=!1,t.linkHref=!1,t.linkText=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,t.f==S){var i=a;if(!i){var m=e.innerMode(n,t.htmlState);i="xml"==m.mode.name&&null===m.state.tagStart&&!m.state.context&&m.state.tokenize.isInText}i&&(t.f=E,t.block=b,t.htmlState=null)}return t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine={stream:null},null}function b(t,n){var a=t.column()===n.indentation,r=F(n.prevLine.stream),x=n.indentedCode,g=n.prevLine.hr,p=!1!==n.list,v=(n.listStack[n.listStack.length-1]||0)+3;n.indentedCode=!1;var D=n.indentation;if(null===n.indentationDiff&&(n.indentationDiff=n.indentation,p)){n.list=null;while(D<n.listStack[n.listStack.length-1])n.listStack.pop(),n.listStack.length?n.indentation=n.listStack[n.listStack.length-1]:n.list=!1;!1!==n.list&&(n.indentationDiff=D-n.listStack[n.listStack.length-1])}var b=!r&&!g&&!n.prevLine.header&&(!p||!x)&&!n.prevLine.fencedCodeEnd,S=(!1===n.list||g||r)&&n.indentation<=v&&t.match(l),w=null;if(n.indentationDiff>=4&&(x||n.prevLine.fencedCodeEnd||n.prevLine.header||r))return t.skipToEnd(),n.indentedCode=!0,o.code;if(t.eatSpace())return null;if(a&&n.indentation<=v&&(w=t.match(d))&&w[1].length<=6)return n.quote=0,n.header=w[1].length,n.thisLine.header=!0,i.highlightFormatting&&(n.formatting="header"),n.f=n.inline,C(n);if(n.indentation<=v&&t.eat(">"))return n.quote=a?1:n.quote+1,i.highlightFormatting&&(n.formatting="quote"),t.eatSpace(),C(n);if(!S&&!n.setext&&a&&n.indentation<=v&&(w=t.match(s))){var E=w[1]?"ol":"ul";return n.indentation=D+t.current().length,n.list=!0,n.quote=0,n.listStack.push(n.indentation),n.em=!1,n.strong=!1,n.code=!1,n.strikethrough=!1,i.taskLists&&t.match(u,!1)&&(n.taskList=!0),n.f=n.inline,i.highlightFormatting&&(n.formatting=["list","list-"+E]),C(n)}return a&&n.indentation<=v&&(w=t.match(f,!0))?(n.quote=0,n.fencedEndRE=new RegExp(w[1]+"+ *$"),n.localMode=i.fencedCodeBlockHighlighting&&m(w[2]||i.fencedCodeBlockDefaultMode),n.localMode&&(n.localState=e.startState(n.localMode)),n.f=n.block=y,i.highlightFormatting&&(n.formatting="code-block"),n.code=-1,C(n)):n.setext||!(b&&p||n.quote||!1!==n.list||n.code||S||h.test(t.string))&&(w=t.lookAhead(1))&&(w=w.match(c))?(n.setext?(n.header=n.setext,n.setext=0,t.skipToEnd(),i.highlightFormatting&&(n.formatting="header")):(n.header="="==w[0].charAt(0)?1:2,n.setext=n.header),n.thisLine.header=!0,n.f=n.inline,C(n)):S?(t.skipToEnd(),n.hr=!0,n.thisLine.hr=!0,o.hr):"["===t.peek()?k(t,n,L):k(t,n,n.inline)}function S(t,i){var m=n.token(t,i.htmlState);if(!a){var o=e.innerMode(n,i.htmlState);("xml"==o.mode.name&&null===o.state.tagStart&&!o.state.context&&o.state.tokenize.isInText||i.md_inside&&t.current().indexOf(">")>-1)&&(i.f=E,i.block=b,i.htmlState=null)}return m}function y(e,t){var n,a=t.listStack[t.listStack.length-1]||0,m=t.indentation<a,r=a+3;return t.fencedEndRE&&t.indentation<=r&&(m||e.match(t.fencedEndRE))?(i.highlightFormatting&&(t.formatting="code-block"),m||(n=C(t)),t.localMode=t.localState=null,t.block=b,t.f=E,t.fencedEndRE=null,t.code=0,t.thisLine.fencedCodeEnd=!0,m?v(e,t,t.block):n):t.localMode?t.localMode.token(e,t.localState):(e.skipToEnd(),o.code)}function C(e){var t=[];if(e.formatting){t.push(o.formatting),"string"===typeof e.formatting&&(e.formatting=[e.formatting]);for(var n=0;n<e.formatting.length;n++)t.push(o.formatting+"-"+e.formatting[n]),"header"===e.formatting[n]&&t.push(o.formatting+"-"+e.formatting[n]+"-"+e.header),"quote"===e.formatting[n]&&(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=e.quote?t.push(o.formatting+"-"+e.formatting[n]+"-"+e.quote):t.push("error"))}if(e.taskOpen)return t.push("meta"),t.length?t.join(" "):null;if(e.taskClosed)return t.push("property"),t.length?t.join(" "):null;if(e.linkHref?t.push(o.linkHref,"url"):(e.strong&&t.push(o.strong),e.em&&t.push(o.em),e.strikethrough&&t.push(o.strikethrough),e.emoji&&t.push(o.emoji),e.linkText&&t.push(o.linkText),e.code&&t.push(o.code),e.image&&t.push(o.image),e.imageAltText&&t.push(o.imageAltText,"link"),e.imageMarker&&t.push(o.imageMarker)),e.header&&t.push(o.header,o.header+"-"+e.header),e.quote&&(t.push(o.quote),!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=e.quote?t.push(o.quote+"-"+e.quote):t.push(o.quote+"-"+i.maxBlockquoteDepth)),!1!==e.list){var a=(e.listStack.length-1)%3;a?1===a?t.push(o.list2):t.push(o.list3):t.push(o.list1)}return e.trailingSpaceNewLine?t.push("trailing-space-new-line"):e.trailingSpace&&t.push("trailing-space-"+(e.trailingSpace%2?"a":"b")),t.length?t.join(" "):null}function w(e,t){if(e.match(x,!0))return C(t)}function E(t,a){var m=a.text(t,a);if("undefined"!==typeof m)return m;if(a.list)return a.list=null,C(a);if(a.taskList){var r=" "===t.match(u,!0)[1];return r?a.taskOpen=!0:a.taskClosed=!0,i.highlightFormatting&&(a.formatting="task"),a.taskList=!1,C(a)}if(a.taskOpen=!1,a.taskClosed=!1,a.header&&t.match(/^#+$/,!0))return i.highlightFormatting&&(a.formatting="header"),C(a);var l=t.next();if(a.linkTitle){a.linkTitle=!1;var s=l;"("===l&&(s=")"),s=(s+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1");var d="^\\s*(?:[^"+s+"\\\\]+|\\\\\\\\|\\\\.)"+s;if(t.match(new RegExp(d),!0))return o.linkHref}if("`"===l){var c=a.formatting;i.highlightFormatting&&(a.formatting="code"),t.eatWhile("`");var x=t.current().length;if(0!=a.code||a.quote&&1!=x){if(x==a.code){var f=C(a);return a.code=0,f}return a.formatting=c,C(a)}return a.code=x,C(a)}if(a.code)return C(a);if("\\"===l&&(t.next(),i.highlightFormatting)){var h=C(a),p=o.formatting+"-escape";return h?h+" "+p:p}if("!"===l&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return a.imageMarker=!0,a.image=!0,i.highlightFormatting&&(a.formatting="image"),C(a);if("["===l&&a.imageMarker&&t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return a.imageMarker=!1,a.imageAltText=!0,i.highlightFormatting&&(a.formatting="image"),C(a);if("]"===l&&a.imageAltText){i.highlightFormatting&&(a.formatting="image");h=C(a);return a.imageAltText=!1,a.image=!1,a.inline=a.f=j,h}if("["===l&&!a.image)return a.linkText&&t.match(/^.*?\]/)||(a.linkText=!0,i.highlightFormatting&&(a.formatting="link")),C(a);if("]"===l&&a.linkText){i.highlightFormatting&&(a.formatting="link");h=C(a);return a.linkText=!1,a.inline=a.f=t.match(/\(.*?\)| ?\[.*?\]/,!1)?j:E,h}if("<"===l&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){a.f=a.inline=A,i.highlightFormatting&&(a.formatting="link");h=C(a);return h?h+=" ":h="",h+o.linkInline}if("<"===l&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){a.f=a.inline=A,i.highlightFormatting&&(a.formatting="link");h=C(a);return h?h+=" ":h="",h+o.linkEmail}if(i.xml&&"<"===l&&t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var k=t.string.indexOf(">",t.pos);if(-1!=k){var F=t.string.substring(t.start,k);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(F)&&(a.md_inside=!0)}return t.backUp(1),a.htmlState=e.startState(n),v(t,a,S)}if(i.xml&&"<"===l&&t.match(/^\/\w*?>/))return a.md_inside=!1,"tag";if("*"===l||"_"===l){var D=1,b=1==t.pos?" ":t.string.charAt(t.pos-2);while(D<3&&t.eat(l))D++;var y=t.peek()||" ",w=!/\s/.test(y)&&(!g.test(y)||/\s/.test(b)||g.test(b)),T=!/\s/.test(b)&&(!g.test(b)||/\s/.test(y)||g.test(y)),M=null,L=null;if(D%2&&(a.em||!w||"*"!==l&&T&&!g.test(b)?a.em!=l||!T||"*"!==l&&w&&!g.test(y)||(M=!1):M=!0),D>1&&(a.strong||!w||"*"!==l&&T&&!g.test(b)?a.strong!=l||!T||"*"!==l&&w&&!g.test(y)||(L=!1):L=!0),null!=L||null!=M){i.highlightFormatting&&(a.formatting=null==M?"strong":null==L?"em":"strong em"),!0===M&&(a.em=l),!0===L&&(a.strong=l);f=C(a);return!1===M&&(a.em=!1),!1===L&&(a.strong=!1),f}}else if(" "===l&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return C(a);t.backUp(1)}if(i.strikethrough)if("~"===l&&t.eatWhile(l)){if(a.strikethrough){i.highlightFormatting&&(a.formatting="strikethrough");f=C(a);return a.strikethrough=!1,f}if(t.match(/^[^\s]/,!1))return a.strikethrough=!0,i.highlightFormatting&&(a.formatting="strikethrough"),C(a)}else if(" "===l&&t.match(/^~~/,!0)){if(" "===t.peek())return C(a);t.backUp(2)}if(i.emoji&&":"===l&&t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){a.emoji=!0,i.highlightFormatting&&(a.formatting="emoji");var q=C(a);return a.emoji=!1,q}return" "===l&&(t.match(/^ +$/,!1)?a.trailingSpace++:a.trailingSpace&&(a.trailingSpaceNewLine=!0)),C(a)}function A(e,t){var n=e.next();if(">"===n){t.f=t.inline=E,i.highlightFormatting&&(t.formatting="link");var a=C(t);return a?a+=" ":a="",a+o.linkInline}return e.match(/^[^>]+/,!0),o.linkInline}function j(e,t){if(e.eatSpace())return null;var n=e.next();return"("===n||"["===n?(t.f=t.inline=M("("===n?")":"]"),i.highlightFormatting&&(t.formatting="link-string"),t.linkHref=!0,C(t)):"error"}var T={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/};function M(e){return function(t,n){var a=t.next();if(a===e){n.f=n.inline=E,i.highlightFormatting&&(n.formatting="link-string");var m=C(n);return n.linkHref=!1,m}return t.match(T[e]),n.linkHref=!0,C(n)}}function L(e,t){return e.match(/^([^\]\\]|\\.)*\]:/,!1)?(t.f=q,e.next(),i.highlightFormatting&&(t.formatting="link"),t.linkText=!0,C(t)):k(e,t,E)}function q(e,t){if(e.match(/^\]:/,!0)){t.f=t.inline=B,i.highlightFormatting&&(t.formatting="link");var n=C(t);return t.linkText=!1,n}return e.match(/^([^\]\\]|\\.)+/,!0),o.linkText}function B(e,t){return e.eatSpace()?null:(e.match(/^[^\s]+/,!0),void 0===e.peek()?t.linkTitle=!0:e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),t.f=t.inline=E,o.linkHref+" url")}var N={startState:function(){return{f:b,prevLine:{stream:null},thisLine:{stream:null},block:b,htmlState:null,indentation:0,inline:E,text:w,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(n,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkText:t.linkText,linkTitle:t.linkTitle,linkHref:t.linkHref,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,emoji:t.emoji,header:t.header,setext:t.setext,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedEndRE:t.fencedEndRE}},token:function(e,t){if(t.formatting=!1,e!=t.thisLine.stream){if(t.header=0,t.hr=!1,e.match(/^\s*$/,!0))return D(t),null;if(t.prevLine=t.thisLine,t.thisLine={stream:e},t.taskList=!1,t.trailingSpace=0,t.trailingSpaceNewLine=!1,!t.localState&&(t.f=t.block,t.f!=S)){var i=e.match(/^\s*/,!0)[0].replace(/\t/g,p).length;if(t.indentation=i,t.indentationDiff=null,i>0)return null}}return t.f(e,t)},innerMode:function(e){return e.block==S?{state:e.htmlState,mode:n}:e.localState?{state:e.localState,mode:e.localMode}:{state:e,mode:N}},indent:function(t,i,a){return t.block==S&&n.indent?n.indent(t.htmlState,i,a):t.localState&&t.localMode.indent?t.localMode.indent(t.localState,i,a):e.Pass},blankLine:D,getType:C,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return N}),"xml"),e.defineMIME("text/markdown","markdown"),e.defineMIME("text/x-markdown","markdown")}))},b33a:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"markdown-guide",attrs:{"is-dialog":""}},[i("div",{staticClass:"inner"},[i("p",[e._v("本站markdown语法说明")]),i("ul",[e._m(0),e._l(e.guide,(function(t){return i("li",[i("b",[e._v(e._s(t[0])+":")]),i("span",[e._v(e._s(t[1]))])])}))],2)])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/#syntax",target:"_blank"}},[e._v(" markdown基础语法+GFM ")])])}],m={name:"MarkdownHelp",data:function(){return{guide:[["#[google](https://google.com)","target=_blank的链接"],["![30% x *](imgurl)","宽为30%未设高度的img"],["-(red: 文字)",'颜色为red的"文字"'],["--title--\ncontent\n-- --","field"]]}}},o=m,r=(i("49ba"),i("2877")),l=Object(r["a"])(o,n,a,!1,null,"6abcb654",null);t["a"]=l.exports},c483:function(e,t,i){},d5e0:function(e,t,i){(function(e){e(i("56b3"))})((function(e){"use strict";var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},i={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};e.defineMode("xml",(function(n,a){var m,o,r=n.indentUnit,l={},s=a.htmlMode?t:i;for(var u in s)l[u]=s[u];for(var u in a)l[u]=a[u];function d(e,t){function i(i){return t.tokenize=i,i(e,t)}var n,a=e.next();return"<"==a?e.eat("!")?e.eat("[")?e.match("CDATA[")?i(f("atom","]]>")):null:e.match("--")?i(f("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),i(h(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=f("meta","?>"),"meta"):(m=e.eat("/")?"closeTag":"openTag",t.tokenize=c,"tag bracket"):"&"==a?(n=e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),n?"atom":"error"):(e.eatWhile(/[^&<]/),null)}function c(e,t){var i=e.next();if(">"==i||"/"==i&&e.eat(">"))return t.tokenize=d,m=">"==i?"endTag":"selfcloseTag","tag bracket";if("="==i)return m="equals",null;if("<"==i){t.tokenize=d,t.state=v,t.tagName=t.tagStart=null;var n=t.tokenize(e,t);return n?n+" tag error":"tag error"}return/[\'\"]/.test(i)?(t.tokenize=x(i),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function x(e){var t=function(t,i){while(!t.eol())if(t.next()==e){i.tokenize=c;break}return"string"};return t.isInAttribute=!0,t}function f(e,t){return function(i,n){while(!i.eol()){if(i.match(t)){n.tokenize=d;break}i.next()}return e}}function h(e){return function(t,i){var n;while(null!=(n=t.next())){if("<"==n)return i.tokenize=h(e+1),i.tokenize(t,i);if(">"==n){if(1==e){i.tokenize=d;break}return i.tokenize=h(e-1),i.tokenize(t,i)}}return"meta"}}function g(e,t,i){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=i,(l.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function p(e){e.context&&(e.context=e.context.prev)}function k(e,t){var i;while(1){if(!e.context)return;if(i=e.context.tagName,!l.contextGrabbers.hasOwnProperty(i)||!l.contextGrabbers[i].hasOwnProperty(t))return;p(e)}}function v(e,t,i){return"openTag"==e?(i.tagStart=t.column(),F):"closeTag"==e?D:v}function F(e,t,i){return"word"==e?(i.tagName=t.current(),o="tag",y):l.allowMissingTagName&&"endTag"==e?(o="tag bracket",y(e,t,i)):(o="error",F)}function D(e,t,i){if("word"==e){var n=t.current();return i.context&&i.context.tagName!=n&&l.implicitlyClosed.hasOwnProperty(i.context.tagName)&&p(i),i.context&&i.context.tagName==n||!1===l.matchClosing?(o="tag",b):(o="tag error",S)}return l.allowMissingTagName&&"endTag"==e?(o="tag bracket",b(e,t,i)):(o="error",S)}function b(e,t,i){return"endTag"!=e?(o="error",b):(p(i),v)}function S(e,t,i){return o="error",b(e,t,i)}function y(e,t,i){if("word"==e)return o="attribute",C;if("endTag"==e||"selfcloseTag"==e){var n=i.tagName,a=i.tagStart;return i.tagName=i.tagStart=null,"selfcloseTag"==e||l.autoSelfClosers.hasOwnProperty(n)?k(i,n):(k(i,n),i.context=new g(i,n,a==i.indented)),v}return o="error",y}function C(e,t,i){return"equals"==e?w:(l.allowMissing||(o="error"),y(e,t,i))}function w(e,t,i){return"string"==e?E:"word"==e&&l.allowUnquoted?(o="string",y):(o="error",y(e,t,i))}function E(e,t,i){return"string"==e?E:y(e,t,i)}return d.isInText=!0,{startState:function(e){var t={tokenize:d,state:v,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;m=null;var i=t.tokenize(e,t);return(i||m)&&"comment"!=i&&(o=null,t.state=t.state(m||i,e,t),o&&(i="error"==o?i+" error":o)),i},indent:function(t,i,n){var a=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+r;if(a&&a.noIndent)return e.Pass;if(t.tokenize!=c&&t.tokenize!=d)return n?n.match(/^(\s*)/)[0].length:0;if(t.tagName)return!1!==l.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+r*(l.multilineTagIndentFactor||1);if(l.alignCDATA&&/<!\[CDATA\[/.test(i))return 0;var m=i&&/^<(\/)?([\w_:\.-]*)/.exec(i);if(m&&m[1])while(a){if(a.tagName==m[2]){a=a.prev;break}if(!l.implicitlyClosed.hasOwnProperty(a.tagName))break;a=a.prev}else if(m)while(a){var o=l.contextGrabbers[a.tagName];if(!o||!o.hasOwnProperty(m[2]))break;a=a.prev}while(a&&a.prev&&!a.startOfLine)a=a.prev;return a?a.indent+r:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:l.htmlMode?"html":"xml",helperType:l.htmlMode?"html":"xml",skipAttribute:function(e){e.state==w&&(e.state=y)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],i=e.context;i;i=i.prev)t.push(i.tagName);return t.reverse()}}})),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})}))},f040:function(e,t,i){(function(e){e(i("56b3"))})((function(e){"use strict";e.modeInfo=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Asterisk",mime:"text/x-asterisk",mode:"asterisk",file:/^extensions\.conf$/i},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp","cs"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists\.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"Cypher",mime:"application/x-cypher-query",mode:"cypher",ext:["cyp","cypher"]},{name:"Cython",mime:"text/x-cython",mode:"python",ext:["pyx","pxd","pxi"]},{name:"Crystal",mime:"text/x-crystal",mode:"crystal",ext:["cr"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded Javascript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Forth",mime:"text/x-forth",mode:"forth",ext:["forth","fth","4th"]},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90","f95"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history)\.md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"Haskell (Literate)",mime:"text/x-literate-haskell",mode:"haskell-literate",ext:["lhs"]},{name:"Haxe",mime:"text/x-haxe",mode:"haxe",ext:["hx"]},{name:"HXML",mime:"text/x-hxml",mode:"haxe",ext:["hxml"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"]},{name:"Jinja2",mime:"text/jinja2",mode:"jinja2",ext:["j2","jinja","jinja2"]},{name:"Julia",mime:"text/x-julia",mode:"julia",ext:["jl"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"mIRC",mime:"text/mirc",mode:"mirc"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Mathematica",mime:"text/x-mathematica",mode:"mathematica",ext:["m","nb","wl","wls"]},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"mbox",mime:"application/mbox",mode:"mbox",ext:["mbox"]},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"NSIS",mime:"text/x-nsis",mode:"nsis",ext:["nsh","nsi"]},{name:"NTriples",mimes:["application/n-triples","application/n-quads","text/n-triples"],mode:"ntriples",ext:["nt","nq"]},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m"],alias:["objective-c","objc"]},{name:"Objective-C++",mime:"text/x-objectivec++",mode:"clike",ext:["mm"],alias:["objective-c++","objc++"]},{name:"OCaml",mime:"text/x-ocaml",mode:"mllike",ext:["ml","mli","mll","mly"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"PEG.js",mime:"null",mode:"pegjs",ext:["jsonld"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PostgreSQL",mime:"text/x-pgsql",mode:"sql"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"]},{name:"reStructuredText",mime:"text/x-rst",mode:"rst",ext:["rst"],alias:["rst"]},{name:"RPM Changes",mime:"text/x-rpm-changes",mode:"rpm"},{name:"RPM Spec",mime:"text/x-rpm-spec",mode:"rpm",ext:["spec"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Sieve",mime:"application/sieve",mode:"sieve",ext:["siv","sieve"]},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]},{name:"WebAssembly",mime:"text/webassembly",mode:"wast",ext:["wat","wast"]}];for(var t=0;t<e.modeInfo.length;t++){var i=e.modeInfo[t];i.mimes&&(i.mime=i.mimes[0])}e.findModeByMIME=function(t){t=t.toLowerCase();for(var i=0;i<e.modeInfo.length;i++){var n=e.modeInfo[i];if(n.mime==t)return n;if(n.mimes)for(var a=0;a<n.mimes.length;a++)if(n.mimes[a]==t)return n}return/\+xml$/.test(t)?e.findModeByMIME("application/xml"):/\+json$/.test(t)?e.findModeByMIME("application/json"):void 0},e.findModeByExtension=function(t){t=t.toLowerCase();for(var i=0;i<e.modeInfo.length;i++){var n=e.modeInfo[i];if(n.ext)for(var a=0;a<n.ext.length;a++)if(n.ext[a]==t)return n}},e.findModeByFileName=function(t){for(var i=0;i<e.modeInfo.length;i++){var n=e.modeInfo[i];if(n.file&&n.file.test(t))return n}var a=t.lastIndexOf("."),m=a>-1&&t.substring(a+1,t.length);if(m)return e.findModeByExtension(m)},e.findModeByName=function(t){t=t.toLowerCase();for(var i=0;i<e.modeInfo.length;i++){var n=e.modeInfo[i];if(n.name.toLowerCase()==t)return n;if(n.alias)for(var a=0;a<n.alias.length;a++)if(n.alias[a].toLowerCase()==t)return n}}}))}}]);