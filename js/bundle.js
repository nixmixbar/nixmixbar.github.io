!function(){"use strict";for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=n.length,o=window.console=window.console||{};i--;)e=n[i],o[e]||(o[e]=t)}(),jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,i="ui-effects-";e.effects={effect:{}},function(t,n){function i(e,t,n){var i=u[t.type]||{};return null==e?n||!t.def?null:t.def:(e=i.floor?~~e:parseFloat(e),isNaN(e)?t.def:i.mod?(e+i.mod)%i.mod:0>e?0:e>i.max?i.max:e)}function o(e){var i=f(),o=i._rgba=[];return e=e.toLowerCase(),g(c,function(t,a){var s,r=a.re.exec(e),l=r&&a.parse(r),c=a.space||"rgba";return l?(s=i[c](l),i[d[c].cache]=s[d[c].cache],o=i._rgba=s._rgba,!1):n}),o.length?("0,0,0,0"===o.join()&&t.extend(o,s.transparent),i):s[e]}function a(e,t,n){return n=(n+1)%1,1>6*n?e+6*(t-e)*n:1>2*n?t:2>3*n?e+6*(t-e)*(2/3-n):e}var s,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,c=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],f=t.Color=function(e,n,i,o){return new t.Color.fn.parse(e,n,i,o)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=f.support={},p=t("<p>")[0],g=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=p.style.backgroundColor.indexOf("rgba")>-1,g(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),f.fn=t.extend(f.prototype,{parse:function(a,r,l,c){if(a===n)return this._rgba=[null,null,null,null],this;(a.jquery||a.nodeType)&&(a=t(a).css(r),r=n);var u=this,h=t.type(a),p=this._rgba=[];return r!==n&&(a=[a,r,l,c],h="array"),"string"===h?this.parse(o(a)||s._default):"array"===h?(g(d.rgba.props,function(e,t){p[t.idx]=i(a[t.idx],t)}),this):"object"===h?(a instanceof f?g(d,function(e,t){a[t.cache]&&(u[t.cache]=a[t.cache].slice())}):g(d,function(t,n){var o=n.cache;g(n.props,function(e,t){if(!u[o]&&n.to){if("alpha"===e||null==a[e])return;u[o]=n.to(u._rgba)}u[o][t.idx]=i(a[e],t,!0)}),u[o]&&0>e.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,n.from&&(u._rgba=n.from(u[o])))}),this):n},is:function(e){var t=f(e),i=!0,o=this;return g(d,function(e,a){var s,r=t[a.cache];return r&&(s=o[a.cache]||a.to&&a.to(o._rgba)||[],g(a.props,function(e,t){return null!=r[t.idx]?i=r[t.idx]===s[t.idx]:n})),i}),i},_space:function(){var e=[],t=this;return g(d,function(n,i){t[i.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=f(e),o=n._space(),a=d[o],s=0===this.alpha()?f("transparent"):this,r=s[a.cache]||a.to(s._rgba),l=r.slice();return n=n[a.cache],g(a.props,function(e,o){var a=o.idx,s=r[a],c=n[a],f=u[o.type]||{};null!==c&&(null===s?l[a]=c:(f.mod&&(c-s>f.mod/2?s+=f.mod:s-c>f.mod/2&&(s-=f.mod)),l[a]=i((c-s)*t+s,o)))}),this[o](l)},blend:function(e){if(1===this._rgba[3])return this;var n=this._rgba.slice(),i=n.pop(),o=f(e)._rgba;return f(t.map(n,function(e,t){return(1-i)*o[t]+i*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===n[3]&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===n[3]&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),i=n.pop();return e&&n.push(~~(255*i)),"#"+t.map(n,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,n,i=e[0]/255,o=e[1]/255,a=e[2]/255,s=e[3],r=Math.max(i,o,a),l=Math.min(i,o,a),c=r-l,f=r+l,d=.5*f;return t=l===r?0:i===r?60*(o-a)/c+360:o===r?60*(a-i)/c+120:60*(i-o)/c+240,n=0===d||1===d?d:.5>=d?c/f:c/(2-f),[Math.round(t)%360,n,d,null==s?1:s]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,n=e[1],i=e[2],o=e[3],s=.5>=i?i*(1+n):i+n-i*n,r=2*i-s;return[Math.round(255*a(r,s,t+1/3)),Math.round(255*a(r,s,t)),Math.round(255*a(r,s,t-1/3)),o]},g(d,function(e,o){var a=o.props,s=o.cache,r=o.to,c=o.from;f.fn[e]=function(e){if(r&&!this[s]&&(this[s]=r(this._rgba)),e===n)return this[s].slice();var o,l=t.type(e),d="array"===l||"object"===l?e:arguments,u=this[s].slice();return g(a,function(e,t){var n=d["object"===l?e:t.idx];null==n&&(n=u[t.idx]),u[t.idx]=i(n,t)}),c?(o=f(c(u)),o[s]=u,o):f(u)},g(a,function(n,i){f.fn[n]||(f.fn[n]=function(o){var a,s=t.type(o),r="alpha"===n?this._hsla?"hsla":"rgba":e,c=this[r](),f=c[i.idx];return"undefined"===s?f:("function"===s&&(o=o.call(this,f),s=t.type(o)),null==o&&i.empty?this:("string"===s&&(a=l.exec(o),a&&(o=f+parseFloat(a[2])*("+"===a[1]?1:-1))),c[i.idx]=o,this[r](c)))})})}),g(r,function(e,n){t.cssHooks[n]={set:function(e,i){var a,s,r="";if("string"!==t.type(i)||(a=o(i))){if(i=f(a||i),!h.rgba&&1!==i._rgba[3]){for(s="backgroundColor"===n?e.parentNode:e;(""===r||"transparent"===r)&&s&&s.style;)try{r=t.css(s,"backgroundColor"),s=s.parentNode}catch(l){}i=i.blend(r&&"transparent"!==r?r:"_default")}i=i.toRgbaString()}try{e.style[n]=i}catch(c){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=f(e.elem,n),e.end=f(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return g(["Top","Right","Bottom","Left"],function(n,i){t["border"+i+"Color"]=e}),t}},s=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function n(){var t,n,i=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,o={};if(i&&i.length&&i[0]&&i[i[0]])for(n=i.length;n--;)t=i[n],"string"==typeof i[t]&&(o[e.camelCase(t)]=i[t]);else for(t in i)"string"==typeof i[t]&&(o[t]=i[t]);return o}function i(t,n){var i,o,s={};for(i in n)o=n[i],t[i]!==o&&(a[i]||(e.fx.step[i]||!isNaN(parseFloat(o)))&&(s[i]=o));return s}var o=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,n,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,a,s,r){var l=e.speed(a,s,r);return this.queue(function(){var a,s=e(this),r=s.attr("class")||"",c=l.children?s.find("*").andSelf():s;c=c.map(function(){var t=e(this);return{el:t,start:n.call(this)}}),a=function(){e.each(o,function(e,n){t[n]&&s[n+"Class"](t[n])})},a(),c=c.map(function(){return this.end=n.call(this.el[0]),this.diff=i(this.start,this.end),this}),s.attr("class",r),c=c.map(function(){var t=this,n=e.Deferred(),i=jQuery.extend({},l,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,i),n.promise()}),e.when.apply(e,c.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(s[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,i,o){return n?e.effects.animateClass.call(this,{add:t},n,i,o):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,i,o){return n?e.effects.animateClass.call(this,{remove:t},n,i,o):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,i,o,a,s){return"boolean"==typeof i||i===t?o?e.effects.animateClass.call(this,i?{add:n}:{remove:n},o,a,s):this._toggleClass(n,i):e.effects.animateClass.call(this,{toggle:n},i,o,a)},switchClass:function(t,n,i,o,a){return e.effects.animateClass.call(this,{add:n,remove:t},i,o,a)}})}(),function(){function o(t,n,i,o){return e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},null==n&&(n={}),e.isFunction(n)&&(o=n,i=null,n={}),("number"==typeof n||e.fx.speeds[n])&&(o=i,i=n,n={}),e.isFunction(i)&&(o=i,i=null),n&&e.extend(t,n),i=i||n.duration,t.duration=e.fx.off?0:"number"==typeof i?i:i in e.fx.speeds?e.fx.speeds[i]:e.fx.speeds._default,t.complete=o||n.complete,t}function a(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:n&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;t.length>n;n++)null!==t[n]&&e.data(i+t[n],e[0].style[t[n]])},restore:function(e,n){var o,a;for(a=0;n.length>a;a++)null!==n[a]&&(o=e.data(i+n[a]),o===t&&(o=""),e.css(n[a],o))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,i;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=e[1]/t.width}return{x:i,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},i=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(s){a=document.body}return t.wrap(i),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),i=t.parent(),"static"===t.css("position")?(i.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,i){n[i]=t.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(o),i.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,i,o){return o=o||{},e.each(n,function(e,n){var a=t.cssUnit(n);a[0]>0&&(o[n]=a[0]*i+a[1])}),o}}),e.fn.extend({effect:function(){function t(t){function n(){e.isFunction(a)&&a.call(o[0]),e.isFunction(t)&&t()}var o=e(this),a=i.complete,s=i.mode;(o.is(":hidden")?"hide"===s:"show"===s)?n():r.call(o[0],i,n)}var i=o.apply(this,arguments),a=i.mode,s=i.queue,r=e.effects.effect[i.effect],l=!r&&n&&e.effects[i.effect];return e.fx.off||!r&&!l?a?this[a](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):r?s===!1?this.each(t):this.queue(s||"fx",t):l.call(this,{options:i,duration:i.duration,callback:i.complete,mode:i.mode})},_show:e.fn.show,show:function(e){if(a(e))return this._show.apply(this,arguments);var t=o.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(a(e))return this._hide.apply(this,arguments);var t=o.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(a(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=o.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),i=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(i=[parseFloat(n),t])}),i}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,n=4;((t=Math.pow(2,--n))-1)/11>e;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?n(2*e)/2:1-n(-2*e+2)/2}})}()}(jQuery),function(e){jQuery.fn.extend({slimScroll:function(n){var i={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},o=e.extend(i,n);return this.each(function(){function i(t){if(f){var t=t||window.event,n=0;t.wheelDelta&&(n=-t.wheelDelta/120),t.detail&&(n=t.detail/3);var i=t.target||t.srcTarget||t.srcElement;e(i).closest("."+o.wrapperClass).is(x.parent())&&a(n,!0),t.preventDefault&&!y&&t.preventDefault(),y||(t.returnValue=!1)}}function a(e,t,n){y=!1;var i=e,a=x.outerHeight()-L.outerHeight();if(t&&(i=parseInt(L.css("top"))+e*parseInt(o.wheelStep)/100*L.outerHeight(),i=Math.min(Math.max(i,0),a),i=e>0?Math.ceil(i):Math.floor(i),L.css({top:i+"px"})),v=parseInt(L.css("top"))/(x.outerHeight()-L.outerHeight()),i=v*(x[0].scrollHeight-x.outerHeight()),n){i=e;var s=i/x[0].scrollHeight*x.outerHeight();s=Math.min(Math.max(s,0),a),L.css({top:s+"px"})}x.scrollTop(i),x.trigger("slimscrolling",~~i),l(),c()}function s(){window.addEventListener?(this.addEventListener("DOMMouseScroll",i,!1),this.addEventListener("mousewheel",i,!1),this.addEventListener("MozMousePixelScroll",i,!1)):document.attachEvent("onmousewheel",i)}function r(){g=Math.max(x.outerHeight()/x[0].scrollHeight*x.outerHeight(),w),L.css({height:g+"px"});var e=g==x.outerHeight()?"none":"block";L.css({display:e})}function l(){if(r(),clearTimeout(h),v==~~v){if(y=o.allowPageScroll,m!=v){var e=0==~~v?"top":"bottom";x.trigger("slimscroll",e)}}else y=!1;return m=v,g>=x.outerHeight()?void(y=!0):(L.stop(!0,!0).fadeIn("fast"),void(o.railVisible&&M.stop(!0,!0).fadeIn("fast")))}function c(){o.alwaysVisible||(h=setTimeout(function(){o.disableFadeOut&&f||d||u||(L.fadeOut("slow"),M.fadeOut("slow"))},1e3))}var f,d,u,h,p,g,v,m,b="<div></div>",w=30,y=!1,x=e(this);if(x.parent().hasClass(o.wrapperClass)){var C=x.scrollTop();if(L=x.parent().find("."+o.barClass),M=x.parent().find("."+o.railClass),r(),e.isPlainObject(n)){if("height"in n&&"auto"==n.height){x.parent().css("height","auto"),x.css("height","auto");var S=x.parent().parent().height();x.parent().css("height",S),x.css("height",S)}if("scrollTo"in n)C=parseInt(o.scrollTo);else if("scrollBy"in n)C+=parseInt(o.scrollBy);else if("destroy"in n)return L.remove(),M.remove(),void x.unwrap();a(C,!1,!0)}}else{o.height="auto"==o.height?x.parent().height():o.height;var T=e(b).addClass(o.wrapperClass).css({position:"relative",overflow:"hidden",width:o.width,height:o.height});x.css({overflow:"hidden",width:o.width,height:o.height});var M=e(b).addClass(o.railClass).css({width:o.size,height:"100%",position:"absolute",top:0,display:o.alwaysVisible&&o.railVisible?"block":"none","border-radius":o.railBorderRadius,background:o.railColor,opacity:o.railOpacity,zIndex:90}),L=e(b).addClass(o.barClass).css({background:o.color,width:o.size,position:"absolute",top:0,opacity:o.opacity,display:o.alwaysVisible?"block":"none","border-radius":o.borderRadius,BorderRadius:o.borderRadius,MozBorderRadius:o.borderRadius,WebkitBorderRadius:o.borderRadius,zIndex:99}),E="right"==o.position?{right:o.distance}:{left:o.distance};M.css(E),L.css(E),x.wrap(T),x.parent().append(L),x.parent().append(M),o.railDraggable&&L.bind("mousedown",function(n){var i=e(document);return u=!0,t=parseFloat(L.css("top")),pageY=n.pageY,i.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,L.css("top",currTop),a(0,L.position().top,!1)}),i.bind("mouseup.slimscroll",function(){u=!1,c(),i.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),M.hover(function(){l()},function(){c()}),L.hover(function(){d=!0},function(){d=!1}),x.hover(function(){f=!0,l(),c()},function(){f=!1,c()}),x.bind("touchstart",function(e){e.originalEvent.touches.length&&(p=e.originalEvent.touches[0].pageY)}),x.bind("touchmove",function(e){if(y||e.originalEvent.preventDefault(),e.originalEvent.touches.length){var t=(p-e.originalEvent.touches[0].pageY)/o.touchScrollStep;a(t,!0),p=e.originalEvent.touches[0].pageY}}),r(),"bottom"===o.start?(L.css({top:x.outerHeight()-L.outerHeight()}),a(0,!0)):"top"!==o.start&&(a(e(o.start).position().top,null,!0),o.alwaysVisible||L.hide()),s()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery),function(e){e.fn.fullpage=function(t){function n(n){var o=n.originalEvent;if(t.autoScrolling&&n.preventDefault(),!i(n.target)){var a,s=e(".section.active");if(!j&&!D){var r=P(o);if(U=r.y,$=r.x,s.find(".slides").length&&Math.abs(Y-$)>Math.abs(W-U))Math.abs(Y-$)>e(window).width()/100*t.touchSensitivity&&(Y>$?e.fn.fullpage.moveSlideRight():e.fn.fullpage.moveSlideLeft());else if(t.autoScrolling&&(a=s.find(".slides").length?s.find(".slide.active").find(".scrollable"):s.find(".scrollable"),Math.abs(W-U)>e(window).height()/100*t.touchSensitivity))if(W>U)if(a.length>0){if(!p("bottom",a))return!0;e.fn.fullpage.moveSectionDown()}else e.fn.fullpage.moveSectionDown();else if(U>W)if(a.length>0){if(!p("top",a))return!0;e.fn.fullpage.moveSectionUp()}else e.fn.fullpage.moveSectionUp()}}}function i(n,o){o=o||0;var a=e(n).parent();return o<t.normalScrollElementTouchThreshold&&a.is(t.normalScrollElements)?!0:o==t.normalScrollElementTouchThreshold?!1:i(a,++o)}function o(e){var t=e.originalEvent,n=P(t);W=n.y,Y=n.x}function a(n){if(t.autoScrolling){n=window.event||n;var i,o=Math.max(-1,Math.min(1,n.wheelDelta||-n.deltaY||-n.detail)),a=e(".section.active");if(!j)if(i=a.find(".slides").length?a.find(".slide.active").find(".scrollable"):a.find(".scrollable"),0>o)if(i.length>0){if(!p("bottom",i))return!0;e.fn.fullpage.moveSectionDown()}else e.fn.fullpage.moveSectionDown();else if(i.length>0){if(!p("top",i))return!0;e.fn.fullpage.moveSectionUp()}else e.fn.fullpage.moveSectionUp();return!1}}function s(n){var i=e(".section.active"),o=i.find(".slides");if(o.length&&!D){var a=o.find(".slide.active"),s=null;if(s="prev"===n?a.prev(".slide"):a.next(".slide"),!s.length){if(!t.loopHorizontal)return;s=a.siblings("prev"===n?":last":":first")}D=!0,c(o,s)}}function r(n,i,o){var a,s={},r=n.position();if("undefined"!=typeof r){var l=r.top,c=g(n),f=n.data("anchor"),d=n.index(".section"),p=n.find(".slide.active"),v=e(".section.active"),m=v.index(".section")+1,b=N;if(p.length)var w=p.data("anchor"),x=p.index();if(t.autoScrolling&&t.continuousVertical&&"undefined"!=typeof o&&(!o&&"up"==c||o&&"down"==c)){o?e(".section.active").before(v.nextAll(".section")):e(".section.active").after(v.prevAll(".section").get().reverse()),I(e(".section.active").position().top);var C=v;r=n.position(),l=r.top,c=g(n)}n.addClass("active").siblings().removeClass("active"),j=!0,"undefined"!=typeof f&&T(x,w,f),t.autoScrolling?(s.top=-l,a=z.selector):(s.scrollTop=l,a="html, body");var S=function(){C&&C.length&&(o?e(".section:first").before(C):e(".section:last").after(C),I(e(".section.active").position().top))};if(t.css3&&t.autoScrolling){e.isFunction(t.onLeave)&&!b&&t.onLeave.call(this,m,d+1,c);var M="translate3d(0px, -"+l+"px, 0px)";y(M,!0),setTimeout(function(){S(),e.isFunction(t.afterLoad)&&!b&&t.afterLoad.call(this,f,d+1),setTimeout(function(){j=!1,e.isFunction(i)&&i.call(this)},B)},t.scrollingSpeed)}else e.isFunction(t.onLeave)&&!b&&t.onLeave.call(this,m,d+1,c),e(a).animate(s,t.scrollingSpeed,t.easing,function(){S(),e.isFunction(t.afterLoad)&&!b&&t.afterLoad.call(this,f,d+1),setTimeout(function(){j=!1,e.isFunction(i)&&i.call(this)},B)});H=f,t.autoScrolling&&(h(f),u(f,d))}}function l(){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];t&&x(t,n)}function c(n,i){var o=i.position(),a=n.find(".slidesContainer").parent(),s=i.index(),r=n.closest(".section"),l=r.index(".section"),c=r.data("anchor"),f=r.find(".fullPage-slidesNav"),d=i.data("anchor"),u=N;if(t.onSlideLeave){var h=r.find(".slide.active").index(),p=v(h,s);u||e.isFunction(t.onSlideLeave)&&t.onSlideLeave.call(this,c,l+1,h,p)}if(i.addClass("active").siblings().removeClass("active"),"undefined"==typeof d&&(d=s),r.hasClass("active")&&(t.loopHorizontal||(r.find(".controlArrow.prev").toggle(0!=s),r.find(".controlArrow.next").toggle(!i.is(":last-child"))),T(s,d,c)),t.css3){var g="translate3d(-"+o.left+"px, 0px, 0px)";n.find(".slidesContainer").toggleClass("easing",t.scrollingSpeed>0).css(R(g)),setTimeout(function(){u||e.isFunction(t.afterSlideLoad)&&t.afterSlideLoad.call(this,c,l+1,d,s),D=!1},t.scrollingSpeed,t.easing)}else a.animate({scrollLeft:o.left},t.scrollingSpeed,t.easing,function(){u||e.isFunction(t.afterSlideLoad)&&t.afterSlideLoad.call(this,c,l+1,d,s),D=!1});f.find(".active").removeClass("active"),f.find("li").eq(s).find("a").addClass("active")}function f(){N=!0;var n=e(window).width();V=e(window).height(),t.resize&&d(V,n),e(".section").each(function(){V-parseInt(e(this).css("padding-bottom"))-parseInt(e(this).css("padding-top"));if(t.verticalCentered&&e(this).find(".tableCell").css("height",w(e(this))+"px"),e(this).css("height",V+"px"),t.scrollOverflow){var n=e(this).find(".slide");n.length?n.each(function(){m(e(this))}):m(e(this))}var n=e(this).find(".slides");n.length&&c(n,n.find(".slide.active"))});var i=(e(".section.active").position(),e(".section.active"));i.index(".section")&&r(i),N=!1,e.isFunction(t.afterResize)&&t.afterResize.call(this)}function d(t,n){var i=825,o=t;if(825>t||900>n){900>n&&(o=n,i=900);var a=100*o/i,s=a.toFixed(2);e("body").css("font-size",s+"%")}else e("body").css("font-size","100%")}function u(n,i){t.navigation&&(e("#fullPage-nav").find(".active").removeClass("active"),n?e("#fullPage-nav").find('a[href="#'+n+'"]').addClass("active"):e("#fullPage-nav").find("li").eq(i).find("a").addClass("active"))}function h(n){t.menu&&(e(t.menu).find(".active").removeClass("active"),e(t.menu).find('[data-menuanchor="'+n+'"]').addClass("active"))}function p(e,t){return"top"===e?!t.scrollTop():"bottom"===e?t.scrollTop()+t.innerHeight()>=t[0].scrollHeight:void 0}function g(t){var n=e(".section.active").index(".section"),i=t.index(".section");return n>i?"up":"down"}function v(e,t){return e==t?"none":e>t?"left":"right"}function m(e){e.css("overflow","hidden");var n=e.closest(".section"),i=e.find(".scrollable");if(i.length)var o=e.find(".scrollable").get(0).scrollHeight;else{var o=e.get(0).scrollHeight;t.verticalCentered&&(o=e.find(".tableCell").get(0).scrollHeight)}var a=V-parseInt(n.css("padding-bottom"))-parseInt(n.css("padding-top"));o>a?i.length?i.css("height",a+"px").parent().css("height",a+"px"):(t.verticalCentered?e.find(".tableCell").wrapInner('<div class="scrollable" />'):e.wrapInner('<div class="scrollable" />'),e.find(".scrollable").slimScroll({height:a+"px",size:"10px",alwaysVisible:!0})):(e.find(".scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()),e.css("overflow","")}function b(e){e.addClass("table").wrapInner('<div class="tableCell" style="height:'+w(e)+'px;" />')}function w(e){var n=V;if(t.paddingTop||t.paddingBottom){var i=e;i.hasClass("section")||(i=e.closest(".section"));var o=parseInt(i.css("padding-top"))+parseInt(i.css("padding-bottom"));n=V-o}return n}function y(e,t){z.toggleClass("easing",t),z.css(R(e))}function x(t,n){if("undefined"==typeof n&&(n=0),isNaN(t))var i=e('[data-anchor="'+t+'"]');else var i=e(".section").eq(t-1);t===H||i.hasClass("active")?C(i,n):r(i,function(){C(i,n)})}function C(e,t){if("undefined"!=typeof t){var n=e.find(".slides"),i=n.find('[data-anchor="'+t+'"]');i.length||(i=n.find(".slide").eq(t)),i.length&&c(n,i)}}function S(e,n){e.append('<div class="fullPage-slidesNav"><ul></ul></div>');var i=e.find(".fullPage-slidesNav");i.addClass(t.slidesNavPosition);for(var o=0;n>o;o++)i.find("ul").append('<li><a href="#"><span></span></a></li>');i.css("margin-left","-"+i.width()/2+"px"),i.find("li").first().find("a").addClass("active")}function T(e,n,i){var o="";t.anchors.length&&(e?("undefined"!=typeof i&&(o=i),"undefined"==typeof n&&(n=e),A=n,location.hash=o+"/"+n):"undefined"!=typeof e?(A=n,location.hash=i):location.hash=i)}function M(){var e,t=document.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var i in n)void 0!==t.style[i]&&(t.style[i]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(n[i]));return document.body.removeChild(t),void 0!==e&&e.length>0&&"none"!==e}function L(){document.addEventListener?(document.removeEventListener("mousewheel",a,!1),document.removeEventListener("wheel",a,!1)):document.detachEvent("onmousewheel",a)}function E(){document.addEventListener?(document.addEventListener("mousewheel",a,!1),document.addEventListener("wheel",a,!1)):document.attachEvent("onmousewheel",a)}function k(){F&&(e(document).off("touchstart MSPointerDown").on("touchstart MSPointerDown",o),e(document).off("touchmove MSPointerMove").on("touchmove MSPointerMove",n))}function _(){F&&(e(document).off("touchstart MSPointerDown"),e(document).off("touchmove MSPointerMove"))}function P(e){var t=new Array;return window.navigator.msPointerEnabled?(t.y=e.pageY,t.x=e.pageX):(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function I(e){if(t.css3){var n="translate3d(0px, -"+e+"px, 0px)";y(n,!1)}else z.css("top",-e)}function R(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}t=e.extend({verticalCentered:!0,resize:!0,slidesColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",controlArrowColor:"#fff",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!1,paddingTop:0,paddingBottom:0,fixedElements:null,normalScrollElements:null,keyboardScrolling:!0,touchSensitivity:5,continuousVertical:!1,animateAnchor:!0,normalScrollElementTouchThreshold:5,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterSlideLoad:null,onSlideLeave:null},t),t.continuousVertical&&(t.loopTop||t.loopBottom)&&(t.continuousVertical=!1,console&&console.log&&console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));var B=600;e.fn.fullpage.setAutoScrolling=function(n){t.autoScrolling=n;var i=e(".section.active");t.autoScrolling?(e("html, body").css({overflow:"hidden",height:"100%"}),i.length&&I(i.position().top)):(e("html, body").css({overflow:"auto",height:"auto"}),I(0),e("html, body").scrollTop(i.position().top))},e.fn.fullpage.setScrollingSpeed=function(e){t.scrollingSpeed=e},e.fn.fullpage.setMouseWheelScrolling=function(e){e?E():L()},e.fn.fullpage.setAllowScrolling=function(t){t?(e.fn.fullpage.setMouseWheelScrolling(!0),k()):(e.fn.fullpage.setMouseWheelScrolling(!1),_())},e.fn.fullpage.setKeyboardScrolling=function(e){t.keyboardScrolling=e};var H,A,D=!1,F=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),z=e(this),V=e(window).height(),j=!1,N=!1;if(e.fn.fullpage.setAllowScrolling(!0),t.css3&&(t.css3=M()),e(this).length?z.css({height:"100%",position:"relative","-ms-touch-action":"none"}):(e("body").wrapInner('<div id="superContainer" />'),z=e("#superContainer")),t.navigation){e("body").append('<div id="fullPage-nav"><ul></ul></div>');var O=e("#fullPage-nav");O.css("color",t.navigationColor),O.addClass(t.navigationPosition)}e(".section").each(function(n){var i=e(this),o=e(this).find(".slide"),a=o.length;if(n||0!==e(".section.active").length||e(this).addClass("active"),e(this).css("height",V+"px"),(t.paddingTop||t.paddingBottom)&&e(this).css("padding",t.paddingTop+" 0 "+t.paddingBottom+" 0"),"undefined"!=typeof t.slidesColor[n]&&e(this).css("background-color",t.slidesColor[n]),"undefined"!=typeof t.anchors[n]&&e(this).attr("data-anchor",t.anchors[n]),t.navigation){var s="";t.anchors.length&&(s=t.anchors[n]);var r=t.navigationTooltips[n];"undefined"==typeof r&&(r=""),O.find("ul").append('<li data-tooltip="'+r+'"><a href="#'+s+'"><span></span></a></li>')}if(a>0){var l=100*a,c=100/a;o.wrapAll('<div class="slidesContainer" />'),o.parent().wrap('<div class="slides" />'),e(this).find(".slidesContainer").css("width",l+"%"),e(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>'),"#fff"!=t.controlArrowColor&&(e(this).find(".controlArrow.next").css("border-color","transparent transparent transparent "+t.controlArrowColor),e(this).find(".controlArrow.prev").css("border-color","transparent "+t.controlArrowColor+" transparent transparent")),t.loopHorizontal||e(this).find(".controlArrow.prev").hide(),t.slidesNavigation&&S(e(this),a),o.each(function(n){n||0!=i.find(".slide.active").length||e(this).addClass("active"),e(this).css("width",c+"%"),t.verticalCentered&&b(e(this))})}else t.verticalCentered&&b(e(this))}).promise().done(function(){e.fn.fullpage.setAutoScrolling(t.autoScrolling);var n=e(".section.active").find(".slide.active");if(n.length&&(0!=e(".section.active").index(".section")||0==e(".section.active").index(".section")&&0!=n.index())){var i=t.scrollingSpeed;e.fn.fullpage.setScrollingSpeed(0),c(e(".section.active").find(".slides"),n),e.fn.fullpage.setScrollingSpeed(i)}t.fixedElements&&t.css3&&e(t.fixedElements).appendTo("body"),t.navigation&&(O.css("margin-top","-"+O.height()/2+"px"),O.find("li").eq(e(".section.active").index(".section")).find("a").addClass("active")),t.menu&&t.css3&&e(t.menu).appendTo("body"),t.scrollOverflow?e(window).on("load",function(){e(".section").each(function(){var t=e(this).find(".slide");t.length?t.each(function(){m(e(this))}):m(e(this))}),e.isFunction(t.afterRender)&&t.afterRender.call(this)}):e.isFunction(t.afterRender)&&t.afterRender.call(this);var o=window.location.hash.replace("#","").split("/"),a=o[0];if(a.length){var s=e('[data-anchor="'+a+'"]');!t.animateAnchor&&s.length&&(I(s.position().top),e.isFunction(t.afterLoad)&&t.afterLoad.call(this,a,s.index(".section")+1),s.addClass("active").siblings().removeClass("active"))}e(window).on("load",function(){l()})});var q,Q=!1;e(window).scroll(function(){if(!t.autoScrolling){var n=e(window).scrollTop(),i=e(".section").map(function(){return e(this).offset().top<n+100?e(this):void 0}),o=i[i.length-1];if(!o.hasClass("active")){var a=e(".section.active").index(".section")+1;Q=!0;var s=g(o);o.addClass("active").siblings().removeClass("active");var r=o.data("anchor");e.isFunction(t.onLeave)&&t.onLeave.call(this,a,o.index(".section")+1,s),e.isFunction(t.afterLoad)&&t.afterLoad.call(this,r,o.index(".section")+1),h(r),u(r,0),t.anchors.length&&!j&&(H=r,location.hash=r),clearTimeout(q),q=setTimeout(function(){Q=!1},100)}}});var W=0,Y=0,U=0,$=0;
if(e.fn.fullpage.moveSectionUp=function(){var n=e(".section.active").prev(".section");n.length||!t.loopTop&&!t.continuousVertical||(n=e(".section").last()),n.length&&r(n,null,!0)},e.fn.fullpage.moveSectionDown=function(){var n=e(".section.active").next(".section");n.length||!t.loopBottom&&!t.continuousVertical||(n=e(".section").first()),(n.length>0||!n.length&&(t.loopBottom||t.continuousVertical))&&r(n,null,!1)},e.fn.fullpage.moveTo=function(t,n){var i="";i=isNaN(t)?e('[data-anchor="'+t+'"]'):e(".section").eq(t-1),"undefined"!=typeof n?x(t,n):i.length>0&&r(i)},e.fn.fullpage.moveSlideRight=function(){s("next")},e.fn.fullpage.moveSlideLeft=function(){s("prev")},e(window).on("hashchange",function(){if(!Q){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1],i="undefined"==typeof H,o="undefined"==typeof H&&"undefined"==typeof n;(t&&t!==H&&!i||o||!D&&A!=n)&&x(t,n)}}),e(document).keydown(function(n){if(t.keyboardScrolling&&!j)switch(n.which){case 38:case 33:e.fn.fullpage.moveSectionUp();break;case 40:case 34:e.fn.fullpage.moveSectionDown();break;case 37:e.fn.fullpage.moveSlideLeft();break;case 39:e.fn.fullpage.moveSlideRight();break;default:return}}),e(document).on("click","#fullPage-nav a",function(t){t.preventDefault();var n=e(this).parent().index();r(e(".section").eq(n))}),e(document).on({mouseenter:function(){var n=e(this).data("tooltip");e('<div class="fullPage-tooltip '+t.navigationPosition+'">'+n+"</div>").hide().appendTo(e(this)).fadeIn(200)},mouseleave:function(){e(this).find(".fullPage-tooltip").fadeOut().remove()}},"#fullPage-nav li"),t.normalScrollElements&&(e(document).on("mouseover",t.normalScrollElements,function(){e.fn.fullpage.setMouseWheelScrolling(!1)}),e(document).on("mouseout",t.normalScrollElements,function(){e.fn.fullpage.setMouseWheelScrolling(!0)})),e(".section").on("click",".controlArrow",function(){e(this).hasClass("prev")?e.fn.fullpage.moveSlideLeft():e.fn.fullpage.moveSlideRight()}),e(".section").on("click",".toSlide",function(t){t.preventDefault();var n=e(this).closest(".section").find(".slides"),i=(n.find(".slide.active"),null);i=n.find(".slide").eq(e(this).data("index")-1),i.length>0&&c(n,i)}),!F){var X;e(window).resize(function(){clearTimeout(X),X=setTimeout(f,500)})}var K="onorientationchange"in window,G=K?"orientationchange":"resize";e(window).bind(G,function(){F&&f()}),e(document).on("click",".fullPage-slidesNav a",function(t){t.preventDefault();var n=e(this).closest(".section").find(".slides"),i=n.find(".slide").eq(e(this).closest("li").index());c(n,i)})}}(jQuery),function(){"use strict";var e=$(".navbar").hide().removeClass("hide"),t=$(".nav",e),n=700;$("#fullpage").fullpage({anchors:["home","about","menu","photos","contact","store"],css3:!0,scrollingSpeed:n,afterLoad:function(e,n){$("li",t).map(function(e){e==n-2?$(this).addClass("active"):$(this).removeClass("active")})},onLeave:function(t,i){(t=1&&2==i)?e.fadeIn("slow"):(t=2&&1==i)?e.fadeOut("slow"):(e.show(),5==i?e.animate({borderBottomColor:"#fff4e8"},n):e.animate({borderBottomColor:"#6d0000"},n))}})}();