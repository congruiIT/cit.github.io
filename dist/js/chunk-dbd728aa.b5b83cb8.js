(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbd728aa"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},1289:function(t,e,n){},1799:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination",attrs:{flex:""}},t._l(t.pages,(function(e){return n("span",{class:{active:e===t.pageNow,disabled:""===e},on:{click:function(n){return t.toPage(e)}}},[t._v(" "+t._s(e)+" "),""===e?n("svg-icon",{attrs:{name:"ellipsis"}}):t._e()],1)})),0)},i=[],a=(n("a434"),n("a9e3"),{name:"Pagination",props:{itemCount:{type:Number},pageNow:{type:Number},perCount:{type:Number},pagerCount:{type:Number,default:5}},computed:{pages:function(){if(0===this.itemCount)return[];var t=1,e=[this.pageNow],n=Math.ceil(this.itemCount/this.perCount);while(1){if(!(e.length<this.pagerCount&&e.length<n))break;var r=this.pageNow+t;r>0&&r<=n&&e.push(r);var i=-1*t;t<0&&i++,t=i}return e=e.sort((function(t,e){return t>e?1:-1})),e.length===this.pagerCount&&(2!==e[1]&&e.splice(0,1,1,""),e[e.length-2]!==n-1&&e.splice(e.length-1,1,"",n)),e}},methods:{toPage:function(t){""!==t&&this.$emit("turn",t)}}}),s=a,o=(n("42bc"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"ad2c4982",null);e["a"]=c.exports},2835:function(t,e,n){},"2de8":function(t,e,n){},"3e19":function(t,e,n){},"42bc":function(t,e,n){"use strict";var r=n("4638"),i=n.n(r);i.a},"42ea":function(t,e,n){},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44b8":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float-input"},[n(t.isArea?"textarea":"input",{tag:"component",class:{inputed:""!==t.text},style:{height:(t.isArea?5:2)*t.size+"rem",fontSize:.95*t.size+"rem"},attrs:{spellcheck:"false",value:t.value,id:"float-input-"+t._uid},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("submit")},input:t.input}},[t._v(t._s(t.value))]),n("label",{style:{lineHeight:2*t.size+"rem",fontSize:1.4*t.size+"rem"},attrs:{for:"login-"+t._uid}},[t._v(t._s(t.name))]),n("div",{staticClass:"bar"})],1)},i=[],a=(n("a9e3"),{name:"FloatInput",props:{name:{type:String,default:""},id:{default:""},value:{type:String,default:""},size:{type:Number,default:1},isArea:{type:Boolean,default:!1}},data:function(){return{text:this.$props.value,inputed:!1}},watch:{"$props.value":function(){this.text=this.$props.value}},methods:{input:function(t){this.text=t.target.value,this.$emit("input",[this.$props.id,this.text])}}}),s=a,o=(n("ba7c"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"086df2b5",null);e["a"]=c.exports},4638:function(t,e,n){},"53ad":function(t,e,n){},"58f6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment",attrs:{flex:""}},[n("div",{staticClass:"token",attrs:{flex:""}},[t.logined?n("div",{staticClass:"logined",attrs:{flex:""}},[n("img",{attrs:{src:t.loginInfo.avatar}}),n("a",{attrs:{href:t.loginInfo.url,target:"_blank"}},[t._v(t._s(t.loginInfo.nick))]),n("single-button",{attrs:{size:.9,text:"退出"},nativeOn:{click:function(e){return t.logout(e)}}})],1):n("div",{staticClass:"login",attrs:{flex:""}},[n("float-input",{attrs:{name:"token",size:.9,value:t.token||""},on:{input:t.inputToken,submit:t.genToken}}),n("single-button",{attrs:{size:.9,text:"生成token"},nativeOn:{click:function(e){return t.genToken(e)}}}),n("loading-button",{class:{disabled:""===t.token},attrs:{icon:"account",loading:t.loging,size:.9,text:"登录"},nativeOn:{click:function(e){return t.doLogin(!0)}}}),n("a",{ref:"a",attrs:{href:"https://github.com/settings/tokens/new?description=comment to "+t.name+"&scopes=public_repo%2Cwrite:discussion",target:"_blank"}})],1)]),n("write-comment",{attrs:{loading:t.submitting},on:{submit:t.submit}}),n("list-comment",{ref:"list",attrs:{title:this.title,login:t.loginInfo.nick}})],1)},i=[],a=(n("b0c0"),n("96cf"),n("1da1")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"write",attrs:{flex:""}},[n("div",{staticClass:"inner",attrs:{flex:""}},[n("div",{ref:"textarea",staticClass:"textarea",style:{height:t.textareaHeight}}),n("div",{ref:"utils",staticClass:"utils",attrs:{flex:""}},[t.config.sticker?n("div",{ref:"sticker",staticClass:"sticker",class:{active:t.showSticker},style:{top:t.stickerPos[0]||"unset",left:t.stickerPos[1],width:t.stickerPos[2],bottom:t.stickerPos[3]||"unset"},attrs:{"data-id":"sticker",flex:""}},[n("div",{staticClass:"content",attrs:{flex:""}},[n("div",{staticClass:"inner",style:{width:t.config.sticker.length+"00%",left:-100*t.stickerSlideNow+"%"},attrs:{flex:""}},t._l(t.config.sticker,(function(e){return n("div",{style:{width:100/t.config.sticker.length+"%"},attrs:{flex:""}},t._l(e.count,(function(r){return n("span",{attrs:{flex:""},on:{click:function(n){return t.addSticker(e.folder,r)}}},[n("img",{attrs:{src:t.baseUrl+"/sticker/"+e.folder+"/"+r+".png?ran="+t.stamp}})])})),0)})),0)]),n("div",{staticClass:"switch",attrs:{flex:""}},t._l(t.config.sticker,(function(e,r){return n("span",{class:{active:t.stickerSlideNow===r},attrs:{flex:""},on:{click:function(e){t.stickerSlideNow=r}}},[t._v(t._s(e.name))])})),0)]):t._e(),n("a",{staticClass:"md",attrs:{title:"关于markdown",flex:""},on:{click:function(e){t.showGuide=!0}}},[n("svg-icon",{attrs:{name:"markdown"}})],1),n("span",{class:{active:t.showSticker},attrs:{title:"表情",flex:""},on:{click:t.enableSticker}},[n("svg-icon",{attrs:{name:"cmt-sticker"}})],1),n("span",{class:{active:t.showUploadImg},attrs:{title:"图片",flex:""},on:{click:t.enableUploadImg}},[n("svg-icon",{attrs:{name:"cmt-image"}})],1),n("span",{class:{active:t.showPreview},attrs:{title:"预览",flex:""},on:{click:t.enablePreview}},[n("svg-icon",{attrs:{name:"cmt-preview"}})],1)]),n("resizer",{attrs:{orient:"v"},on:{start:t.startResize,resize:t.doResize}}),n("div",{staticClass:"submit",attrs:{flex:""}},[t.cancel?n("single-button",{attrs:{size:.8,text:"取消"},nativeOn:{click:function(e){return t.$emit("cancel")}}}):t._e(),n("loading-button",{attrs:{icon:"save",loading:t.loading,size:.8,text:"提交"},nativeOn:{click:function(e){return t.submitComment(e)}}})],1)],1),t.showPreview?n("div",{staticClass:"preview"},[n("span",{directives:[{name:"viewer",rawName:"v-viewer"}],ref:"markdown",staticClass:"--markdown",domProps:{innerHTML:t._s(t.$el?t.html:"waiting")}})]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showUploadImg,expression:"showUploadImg"}],staticClass:"upload-img",attrs:{"is-dialog":""},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.showUploadImg=!1}}},[n("div",{staticClass:"inner",attrs:{flex:""}},[n("div",{staticClass:"help"},[n("p",[t._v("关于上传图片")]),n("b",[t._v("本站不存储评论图片，如果你想发送图片，建议使用以下方式:")]),n("div",{attrs:{flex:""}},[n("a",{attrs:{href:"https://imgchr.com/",target:"_blank"}},[t._v("路过图床")]),n("loading-img",{attrs:{src:"https://s1.ax1x.com/2020/09/28/0VPxBQ.png",size:[]}})],1),n("div",{attrs:{flex:""}},[n("a",{attrs:{href:"https://sm.ms/",target:"_blank"}},[t._v("sm.ms")]),n("loading-img",{attrs:{src:"https://s1.ax1x.com/2020/09/28/0VPvng.png",size:[]}})],1)]),n("div",{staticClass:"submit",attrs:{flex:""}},[n("float-input",{attrs:{name:"url",size:.9,value:t.imageUrl},on:{input:t.inputImgUrl,submit:t.insertImg}}),n("single-button",{attrs:{disabled:!t.imageUrl,size:.9,text:"确定"},nativeOn:{click:function(e){return t.insertImg(e)}}})],1)])]),n("markdown-help",{directives:[{name:"show",rawName:"v-show",value:t.showGuide,expression:"showGuide"}],nativeOn:{click:function(e){if(e.target!==e.currentTarget)return null;t.showGuide=!1}}})],1)},o=[],c=(n("99af"),n("44b8")),l=n("8e8da"),u=n("b33a"),f=n("2a7d"),m=n("3259"),d=n("82b2"),g=n("56b3"),p=n.n(g),h=(n("8c33"),n("8f0a"),n("959b"),n("a7be"),n("c588"),n("547e"),n("58a6"),n("7081")),v=n("cf34"),b=n("c247"),k=n.n(b),w={name:"WriteComment",components:{LoadingImg:h["a"],SingleButton:f["a"],MarkdownHelp:u["a"],Resizer:m["a"],LoadingButton:l["a"],FloatInput:c["a"]},props:{loading:{type:Boolean,default:!1},cancel:{type:Boolean,default:!1},initHeight:{type:String,default:"10rem"}},data:function(){return{stamp:k.a.timeStamp,baseUrl:d["a"],comment:"",showGuide:!1,showSticker:!1,showUploadImg:!1,imageUrl:"",showPreview:!1,stickerSlideNow:0,stickerPos:[0,0],codeMirror:null,focusAt:0,textareaHeight:"0",resizeStart:{pos:!1,size:!1}}},inject:["_config"],computed:{html:function(){var t=this;return this.$nextTick((function(){Object(v["b"])(t.$refs.markdown,!0)})),Object(v["a"])(this.comment)},config:function(){return this._config()}},created:function(){this.textareaHeight=this.$props.initHeight},mounted:function(){var t=this;this.codeMirror=new p.a(this.$refs.textarea,{indentUnit:2,tabSize:2,theme:"light",line:!0,mode:"markdown",matchTags:{bothTags:!0},matchBrackets:!0}),this.codeMirror.on("change",(function(){t.comment=t.codeMirror.getValue()})),this.codeMirror.on("blur",(function(){t.focusAt=t.codeMirror.getCursor()}))},methods:{enableSticker:function(t){if(this.showSticker)return document.removeEventListener("click",this.handleStickerDiv),document.querySelector("section.body").removeEventListener("scroll",this.listenScroll),void(this.showSticker=!1);this.showSticker=!0,t.stopPropagation(),document.querySelector("section.body").addEventListener("scroll",this.listenScroll),this.listenScroll(),document.addEventListener("click",this.handleStickerDiv)},listenScroll:function(){var t=this.$refs.utils.getBoundingClientRect(),e=window.innerHeight;this.stickerPos=[t.top+t.height,t.left+"px",t.width+"px",!1],e-this.stickerPos[0]<.36*e?(this.stickerPos[0]=!1,this.stickerPos[3]=e-t.top+"px"):this.stickerPos[0]+="px"},handleStickerDiv:function(t){var e=this,n=this.$refs.sticker,r=t.target;while(1){if(r===n)break;if(r=r.parentElement,!r){document.removeEventListener("click",this.handleStickerDiv),document.querySelector("section.body").removeEventListener("scroll",this.listenScroll),e.showSticker=!1;break}}},addSticker:function(t,e){this.focusAt?(this.codeMirror.replaceRange("![sticker](".concat(t,"/").concat(e,")"),this.focusAt),document.removeEventListener("click",this.handleStickerDiv),this.showSticker=!1):this.$message.warning("请先选择输入框!")},enableUploadImg:function(){this.imageUrl="",this.showUploadImg=!0},inputImgUrl:function(t){this.imageUrl=t[1]},insertImg:function(){this.imageUrl&&(this.focusAt?(this.codeMirror.replaceRange("![common](".concat(this.imageUrl,")"),this.focusAt),this.showUploadImg=!1):this.$message.warning("请选择输入框!"))},enablePreview:function(){this.showPreview=!this.showPreview},startResize:function(t){this.resizeStart={pos:t,size:this.$refs.textarea.scrollHeight}},doResize:function(t){var e=this.resizeStart.size+(t-this.resizeStart.pos);e>100&&e<1e3&&(this.textareaHeight="".concat(e,"px"))},submitComment:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:t.comment?t.$emit("submit",{text:t.comment}):t.$message.warning("请输入一些内容!");case 3:case"end":return e.stop()}}),e)})))()}}},x=w,C=(n("e463"),n("a61e"),n("2877")),y=Object(C["a"])(x,s,o,!1,null,"c8415a5e",null),_=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list",attrs:{flex:""}},[0===t.items.length?n("div",{staticClass:"empty"},[n("span",[t._v("无人问津"),n("svg-icon",{attrs:{name:"grass"}}),t._v("暂无评论")],1)]):n("div",{staticClass:"items",attrs:{flex:""}},[t.loading?n("div",{staticClass:"loading",attrs:{flex:""}},[n("svg-icon",{attrs:{name:"loading"}})],1):t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"list-item",attrs:{flex:""}},[n("a",{staticClass:"avatar",attrs:{target:"_blank",href:e.site}},[n("img",{attrs:{src:e.avatar,alt:"avatar"},on:{error:t.errAvatar}})]),n("div",{attrs:{flex:""}},[n("div",{staticClass:"body",attrs:{flex:""}},[n("div",{staticClass:"head",attrs:{flex:""}},[n("span",{staticClass:"nick-name",class:{owner:e.nick===t.siteConfig.owner,self:e.nick===t.login},attrs:{flex:""}},[n("a",{attrs:{href:e.site,target:"_blank"}},[t._v(t._s(e.nick))]),e.nick===t.siteConfig.owner?n("span",{attrs:{title:"大boss"}},[n("svg-icon",{attrs:{name:"cmt-owner"}})],1):t._e(),e.nick===t.login?n("span",{attrs:{title:"我自己"}},[n("svg-icon",{attrs:{name:"cmt-self"}})],1):t._e()])]),n("div",{staticClass:"content"},[n("span",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"--markdown",domProps:{innerHTML:t._s(t.calcMdToHtml(e.content,!1))}})]),n("div",{staticClass:"foot",attrs:{flex:""}},[n("a",{staticClass:"time"},[t._v(t._s(t._f("time")(e.time,!1)))]),n("span",{staticClass:"reply",on:{click:function(n){return t.clickReply(e,null)}}},[t._v("回复")]),t.login===e.nick||t.login===t.siteConfig.owner?n("span",{staticClass:"delete",on:{click:function(n){return t.closeComment(e.id)}}},[t._v("删除")]):t._e(),t._l(["+1","-1"],(function(r){return n("span",{staticClass:"react",class:{active:e.reactions[r].has&&t.login},attrs:{down:"-1"===r,title:r,flex:""},on:{click:function(n){return t.doReact(r,e,e.reactions[r].has&&t.login)}}},[n("svg-icon",{attrs:{name:e.doing===r?"loading":"thumb"}}),e.reactions[r].count>0?n("span",[t._v(t._s(e.reactions[r].count))]):t._e()],1)})),t.replayItem===e&&null===t.replyChild?n("write-comment",{attrs:{cancel:!0,"init-height":"100px",loading:t.submitting},on:{cancel:function(e){t.replayItem=null},submit:t.replayComment}}):t._e()],2)]),e.loading?n("div",{staticClass:"loading",attrs:{flex:""}},[n("svg-icon",{attrs:{name:"loading"}})],1):e.children.length?n("div",{staticClass:"children"},[t._l(e.children,(function(r){return n("div",{key:r.id,staticClass:"child"},[n("div",{staticClass:"content",attrs:{flex:""}},[n("a",{staticClass:"avatar",attrs:{href:r.site,target:"_blank"}},[n("img",{attrs:{src:r.avatar,alt:"avatar"},on:{error:t.errAvatar}})]),n("div",{attrs:{flex:""}},[n("div",{staticClass:"text"},[n("span",{staticClass:"nick-name",class:{owner:r.nick===t.siteConfig.owner,self:r.nick===t.login},attrs:{flex:""}},[n("a",{attrs:{href:e.site,target:"_blank"}},[t._v(t._s(r.nick))]),r.nick===t.siteConfig.owner?n("span",{attrs:{title:"大boss"}},[n("svg-icon",{attrs:{name:"cmt-owner"}})],1):t._e(),r.nick===t.login?n("span",{attrs:{title:"我自己"}},[n("svg-icon",{attrs:{name:"cmt-self"}})],1):t._e()]),n("span",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"--markdown",domProps:{innerHTML:t._s(t.calcMdToHtml(r.content,!0))}})]),n("div",{staticClass:"foot",attrs:{flex:""}},[n("a",{staticClass:"time"},[t._v(t._s(t._f("time")(r.time,!1)))]),n("span",{staticClass:"reply",on:{click:function(n){return t.clickReply(e,r)}}},[t._v("回复")]),t.login===r.nick||t.login===t.siteConfig.owner?n("span",{staticClass:"delete",on:{click:function(n){return t.deleteReply(r.id,e)}}},[t._v("删除")]):t._e(),t._l(["+1","-1"],(function(e){return n("span",{staticClass:"react",class:{active:r.reactions[e].has&&t.login},attrs:{down:"-1"===e,title:e,flex:""},on:{click:function(n){return t.doReact(e,r,r.reactions[e].has&&t.login)}}},[n("svg-icon",{attrs:{name:r.doing===e?"loading":"thumb"}}),r.reactions[e].count>0?n("span",[t._v(t._s(r.reactions[e].count))]):t._e()],1)})),t.replayItem===e&&t.replyChild===r?n("write-comment",{attrs:{cancel:!0,"init-height":"100px",loading:t.submitting},on:{cancel:function(e){t.replayItem=null},submit:t.replayComment}}):t._e()],2)])])])})),e.page.hasPreviousPage||e.page.hasNextPage?n("div",{staticClass:"page",attrs:{flex:""}},[n("span",{staticClass:"left",attrs:{disabled:!e.page.hasPreviousPage,flex:""},on:{click:function(n){return t.toReply(!e.page.hasPreviousPage,e,',before: "'+e.page.startCursor+'"')}}},[n("svg-icon",{attrs:{name:"right"}})],1),n("span",{staticClass:"right",attrs:{disabled:!e.page.hasNextPage,flex:""},on:{click:function(n){return t.toReply(!e.page.hasNextPage,e,',after: "'+e.page.endCursor+'"')}}},[n("svg-icon",{attrs:{name:"right"}})],1)]):t._e()],2):t._e()])])}))],2),n("pagination",{attrs:{"item-count":t.itemCount,"page-now":t.pageNow,"per-count":t.onePageItemsCount},on:{turn:t.turnCommentPage}})],1)},O=[],S=(n("4160"),n("ac1f"),n("466d"),n("5319"),n("841c"),n("159b"),n("b85c")),P=n("6608"),R=n("fa7d"),I=n("1799"),A=n("365e"),$=n("8f7d"),z=n.n($),T=n("c247"),U=!1,N={name:"ListComment",components:{Pagination:I["a"],WriteComment:_},props:{title:{type:String,default:0},login:{type:String,default:""}},data:function(){return{siteConfig:T,onePageItemsCount:8,pageNow:1,itemCount:0,items:[],replayItem:null,replyChild:null,submitting:!1,updating:!1,loading:!1}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.updatePage();case 2:case"end":return e.stop()}}),e)})))()},methods:{errAvatar:function(t){t.target.src=z.a},updatePage:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i,a,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,Object(P["i"])({count:e.onePageItemsCount,title:e.title,cursor:t});case 3:if(r=n.sent,r[0]){i=r[1].data.data.search,e.itemCount=i.issueCount,e.items=[],a=Object(S["a"])(i.nodes);try{for(o=function(){var t=s.value,n=[];t.comments.nodes.forEach((function(t){n.push({id:t.id,avatar:t.author.avatarUrl,nick:t.author.login,site:t.author.url,time:t.createdAt,content:t.body,identity:t.authorAssociation,reactions:Object(P["k"])(t.reactionGroups)})})),e.items.push({id:t.id,number:t.number,avatar:t.author.avatarUrl,nick:t.author.login,site:t.author.url,time:t.createdAt,content:t.body,identity:t.authorAssociation,children:n,loading:!1,page:t.comments.pageInfo,reactions:Object(P["k"])(t.reactionGroups)})},a.s();!(s=a.n()).done;)o()}catch(c){a.e(c)}finally{a.f()}}else e.$message.error(Object(R["c"])(r[1]));e.loading=!1,e.parseHtml();case 7:case"end":return n.stop()}}),n)})))()},calcMdToHtml:function(t,e){var n;t=t.replace(/</g,"&lt;").replace(/(^|\s*)>/g,"$1&gt;");var r="";if(e){n=Object(v["a"])(t.replace(/^@\w+ ([\s\S]*)$/,"$1"));var i=t.match(/^@(\w+) /);i&&(r='<span class="reply">回复<a class="nick-name" target="_blank" href="https://gtihub.com/'.concat(i[1],'">@').concat(i[1],"</a>:</span>"))}else n=Object(v["a"])(t);return r+n},parseHtml:function(){var t=this;this.$nextTick((function(){t.$el.querySelectorAll("span.--markdown:not([parsed])").forEach((function(t){t.setAttribute("parsed",""),t.querySelectorAll("pre>code:not(.hljs)").forEach((function(t){t.innerText=t.innerText.replace(/&lt;/g,"<").replace(/&gt;/g,">"),Object(A["a"])(t)})),Object(v["b"])(t,!0)}))}))},turnCommentPage:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.updating){n.next=2;break}return n.abrupt("return");case 2:return e.updating=!0,n.next=5,e.updatePage(',after: "'.concat(btoa("cursor:".concat((t-1)*e.onePageItemsCount)),'"'));case 5:e.pageNow=t,e.updating=!1;case 7:case"end":return n.stop()}}),n)})))()},toReply:function(t,e,n){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!t){i.next=2;break}return i.abrupt("return");case 2:if(!r.updating){i.next=4;break}return i.abrupt("return");case 4:return r.updating=!0,e.loading=!0,i.next=8,Object(P["f"])({id:e.id,count:r.onePageItemsCount/2,cursor:n});case 8:a=i.sent,a[0]&&(s=a[1].data.data.node.comments,e.page=s.pageInfo,e.children=[],s.nodes.forEach((function(t){e.children.push({id:t.id,avatar:t.author.avatarUrl,nick:t.author.login,site:t.author.url,time:t.createdAt,content:t.body,identity:t.authorAssociation,reactions:Object(P["k"])(t.reactionGroups)})}))),e.loading=!1,r.updating=!1,r.parseHtml();case 13:case"end":return i.stop()}}),i)})))()},clickReply:function(t,e){this.replayItem=t,this.replyChild=e},replayComment:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.submitting=!0,n.next=3,Object(P["c"])({id:e.replayItem.id,body:(e.replyChild?"@".concat(e.replyChild.nick," "):"")+t.text});case 3:if(r=n.sent,!P["m"].call(e,r,"回复成功!","回复失败")){n.next=9;break}return n.next=7,e.toReply(!1,e.replayItem);case 7:e.replayItem=null,e.replyChild=null;case 9:e.submitting=!1;case 10:case"end":return n.stop()}}),n)})))()},closeComment:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(confirm("确认删除?")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,Object(P["a"])("close",t);case 4:r=n.sent,P["m"].call(e,r,"删除成功!","删除失败")&&setTimeout(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updatePage();case 2:case"end":return t.stop()}}),t)}))),1e3);case 6:case"end":return n.stop()}}),n)})))()},deleteReply:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(confirm("确认删除?")){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,Object(P["d"])(t);case 4:if(i=r.sent,!P["m"].call(n,i,"删除成功!","删除失败")){r.next=8;break}return r.next=8,n.toReply(!1,e);case 8:case"end":return r.stop()}}),r)})))()},doReact:function(t,e,n){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!U){i.next=2;break}return i.abrupt("return");case 2:return U=!0,e.doing=t,e.reactions[t]={has:!n,count:e.reactions[t].count+(n?-1:1)},i.next=7,Object(P["e"])({content:"THUMBS_".concat("-1"===t?"DOWN":"UP"),id:e.id,has:n});case 7:a=i.sent,a[0]&&!a[1].data.errors||(e.reactions[t]={has:n,count:e.reactions[t].count+(n?1:-1)},r.$message.error("出错了:"+(a[0]?a[1].data.errors[0].message:Object(R["c"])(a[1])))),U=!1,e.doing="";case 11:case"end":return i.stop()}}),i)})))()}}},E=N,H=(n("f805"),Object(C["a"])(E,j,O,!1,null,"7cb62dff",null)),L=H.exports,M={name:"TheComment",components:{LoadingButton:l["a"],SingleButton:f["a"],FloatInput:c["a"],ListComment:L,WriteComment:_},props:{title:{type:String,default:""}},inject:["_config"],data:function(){return{token:null,loging:!1,logined:!1,loginInfo:{},submitting:!1}},computed:{name:function(){return this.config.name},config:function(){return this._config()}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.token=localStorage.getItem(P["o"]),!t.token){e.next=4;break}return e.next=4,t.doLogin(!1);case 4:case"end":return e.stop()}}),e)})))()},methods:{inputToken:function(t){this.token=t[1]},genToken:function(){this.$refs.a.click()},doLogin:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.loging&&e.token){n.next=2;break}return n.abrupt("return");case 2:return e.loging=!0,n.next=5,Object(P["h"])(e.token);case 5:if(r=n.sent,!r[0]){n.next=16;break}return localStorage.setItem(P["o"],e.token),t&&e.$message.success("登录成功!"),e.logined=!0,i=r[1].data.data.viewer,e.loginInfo={avatar:i.avatarUrl,url:i.url,nick:i.login},n.next=14,Object(P["l"])();case 14:n.next=18;break;case 16:Object(P["n"])(),t&&e.$message.error(Object(R["c"])(r[1]));case 18:e.loging=!1;case 19:case"end":return n.stop()}}),n)})))()},logout:function(){this.logined=!1,Object(P["n"])()},submit:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.submitting=!0,n.next=3,Object(P["b"])({title:e.title,body:t.text});case 3:r=n.sent,P["m"].call(e,r,"评论成功!","评论失败")&&setTimeout(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.list.updatePage();case 2:case"end":return t.stop()}}),t)}))),1e3),e.submitting=!1;case 6:case"end":return n.stop()}}),n)})))()}}},B=M,G=(n("a295"),Object(C["a"])(B,r,i,!1,null,"50aad184",null));e["a"]=G.exports},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"8e8da":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-button",class:{loading:t.loading},style:{fontSize:t.size+"rem"},attrs:{flex:""}},[n("svg-icon",{attrs:{name:t.loading?"loading":t.icon}}),n("span",[t._v(t._s(t.text))])],1)},i=[],a=(n("a9e3"),{name:"LoadingButton",props:{loading:{type:Boolean,default:!1},text:{type:String,default:""},icon:{type:String,default:""},size:{type:Number,default:1}}}),s=a,o=(n("ef8c"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"72b329c6",null);e["a"]=c.exports},"915c":function(t,e,n){},"9a04":function(t,e,n){"use strict";var r=n("1289"),i=n.n(r);i.a},a295:function(t,e,n){"use strict";var r=n("42ea"),i=n.n(r);i.a},a61e:function(t,e,n){"use strict";var r=n("3e19"),i=n.n(r);i.a},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(c)throw s}}}}},ba7c:function(t,e,n){"use strict";var r=n("53ad"),i=n.n(r);i.a},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var s=a>=0?arguments[a]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===a(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),a=r(n.split("/")),s=Math.min(i.length,a.length),o=s,c=0;c<s;c++)if(i[c]!==a[c]){o=c;break}var l=[];for(c=o;c<i.length;c++)l.push("..");return l=l.concat(a.slice(o)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,a=t.length-1;a>=1;--a)if(e=t.charCodeAt(a),47===e){if(!i){r=a;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,a=0,s=t.length-1;s>=0;--s){var o=t.charCodeAt(s);if(47!==o)-1===r&&(i=!1,r=s+1),46===o?-1===e?e=s:1!==a&&(a=1):-1!==e&&(a=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===a||1===a&&e===r-1&&e===n+1?"":t.slice(e,r)};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e463:function(t,e,n){"use strict";var r=n("915c"),i=n.n(r);i.a},ef8c:function(t,e,n){"use strict";var r=n("2835"),i=n.n(r);i.a},f49a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg-board",attrs:{flex:""}},[n("div",{staticClass:"head",attrs:{flex:""}},[n("svg-icon",{attrs:{name:"comments"}}),n("h1",[t._v("留言板")])],1),n("the-comment",{attrs:{title:"msg-board"}})],1)},i=[],a=n("58f6"),s=n("fa7d"),o={name:"index",components:{TheComment:a["a"]},mounted:function(){Object(s["b"])()}},c=o,l=(n("9a04"),n("2877")),u=Object(l["a"])(c,r,i,!1,null,"1d4186e6",null);e["default"]=u.exports},f805:function(t,e,n){"use strict";var r=n("2de8"),i=n.n(r);i.a}}]);