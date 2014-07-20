// Avoid `console` errors in browsers that lack a console.
(function() {
    'use strict';

    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

jQuery.effects||function(e,t){var i=e.uiBackCompat!==!1,a="ui-effects-";e.effects={effect:{}},function(t,i){function a(e,t,i){var a=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=a.floor?~~e:parseFloat(e),isNaN(e)?t.def:a.mod?(e+a.mod)%a.mod:0>e?0:e>a.max?a.max:e)}function s(e){var a=u(),s=a._rgba=[];return e=e.toLowerCase(),m(l,function(t,n){var r,o=n.re.exec(e),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=a[l](h),a[d[l].cache]=r[d[l].cache],s=a._rgba=r._rgba,!1):i}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),a):r[e]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=t.Color=function(e,i,a,s){return new t.Color.fn.parse(e,i,a,s)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=t("<p>")[0],m=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,m(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(n,o,h,l){if(n===i)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=i);var c=this,p=t.type(n),f=this._rgba=[];return o!==i&&(n=[n,o,h,l],p="array"),"string"===p?this.parse(s(n)||r._default):"array"===p?(m(d.rgba.props,function(e,t){f[t.idx]=a(n[t.idx],t)}),this):"object"===p?(n instanceof u?m(d,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):m(d,function(t,i){var s=i.cache;m(i.props,function(e,t){if(!c[s]&&i.to){if("alpha"===e||null==n[e])return;c[s]=i.to(c._rgba)}c[s][t.idx]=a(n[e],t,!0)}),c[s]&&0>e.inArray(null,c[s].slice(0,3))&&(c[s][3]=1,i.from&&(c._rgba=i.from(c[s])))}),this):i},is:function(e){var t=u(e),a=!0,s=this;return m(d,function(e,n){var r,o=t[n.cache];return o&&(r=s[n.cache]||n.to&&n.to(s._rgba)||[],m(n.props,function(e,t){return null!=o[t.idx]?a=o[t.idx]===r[t.idx]:i})),a}),a},_space:function(){var e=[],t=this;return m(d,function(i,a){t[a.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var i=u(e),s=i._space(),n=d[s],r=0===this.alpha()?u("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return i=i[n.cache],m(n.props,function(e,s){var n=s.idx,r=o[n],l=i[n],u=c[s.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=a((l-r)*t+r,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),a=i.pop(),s=u(e)._rgba;return u(t.map(i,function(e,t){return(1-a)*s[t]+a*e}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),a=i.pop();return e&&i.push(~~(255*a)),"#"+t.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,a=e[0]/255,s=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(a,s,n),h=Math.min(a,s,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:a===o?60*(s-n)/l+360:s===o?60*(n-a)/l+120:60*(a-s)/l+240,i=0===d||1===d?d:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],a=e[2],s=e[3],r=.5>=a?a*(1+i):a+i-a*i,o=2*a-r;return[Math.round(255*n(o,r,t+1/3)),Math.round(255*n(o,r,t)),Math.round(255*n(o,r,t-1/3)),s]},m(d,function(e,s){var n=s.props,r=s.cache,o=s.to,l=s.from;u.fn[e]=function(e){if(o&&!this[r]&&(this[r]=o(this._rgba)),e===i)return this[r].slice();var s,h=t.type(e),d="array"===h||"object"===h?e:arguments,c=this[r].slice();return m(n,function(e,t){var i=d["object"===h?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(s=u(l(c)),s[r]=c,s):u(c)},m(n,function(i,a){u.fn[i]||(u.fn[i]=function(s){var n,r=t.type(s),o="alpha"===i?this._hsla?"hsla":"rgba":e,l=this[o](),u=l[a.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&a.empty?this:("string"===r&&(n=h.exec(s),n&&(s=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[a.idx]=s,this[o](l)))})})}),m(o,function(e,i){t.cssHooks[i]={set:function(e,a){var n,r,o="";if("string"!==t.type(a)||(n=s(a))){if(a=u(n||a),!p.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===o||"transparent"===o)&&r&&r.style;)try{o=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{e.style[i]=a}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=u(e.elem,i),e.end=u(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return m(["Top","Right","Bottom","Left"],function(i,a){t["border"+a+"Color"]=e}),t}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t,i,a=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,s={};if(a&&a.length&&a[0]&&a[a[0]])for(i=a.length;i--;)t=a[i],"string"==typeof a[t]&&(s[e.camelCase(t)]=a[t]);else for(t in a)"string"==typeof a[t]&&(s[t]=a[t]);return s}function a(t,i){var a,s,r={};for(a in i)s=i[a],t[a]!==s&&(n[a]||(e.fx.step[a]||!isNaN(parseFloat(s)))&&(r[a]=s));return r}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").andSelf():r;l=l.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),n=function(){e.each(s,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i.call(this.el[0]),this.diff=a(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),a=jQuery.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,a),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{add:t},i,a,s):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{remove:t},i,a,s):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(i,a,s,n,r){return"boolean"==typeof a||a===t?s?e.effects.animateClass.call(this,a?{add:i}:{remove:i},s,n,r):this._toggleClass(i,a):e.effects.animateClass.call(this,{toggle:i},a,s,n)},switchClass:function(t,i,a,s,n){return e.effects.animateClass.call(this,{add:i,remove:t},a,s,n)}})}(),function(){function s(t,i,a,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,a=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=a,a=i,i={}),e.isFunction(a)&&(s=a,a=null),i&&e.extend(t,i),a=a||i.duration,t.duration=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,t.complete=s||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:i&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(a+i[n]),s===t&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,a;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(a),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),a=t.parent(),"static"===t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){i[a]=t.css(a),isNaN(parseInt(i[a],10))&&(i[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),a.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,a,s){return s=s||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(s[i]=n[0]*a+n[1])}),s}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(s[0]),e.isFunction(t)&&t()}var s=e(this),n=a.complete,r=a.mode;(s.is(":hidden")?"hide"===r:"show"===r)?i():o.call(s[0],a,i)}var a=s.apply(this,arguments),n=a.mode,r=a.queue,o=e.effects.effect[a.effect],h=!o&&i&&e.effects[a.effect];return e.fx.off||!o&&!h?n?this[n](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):o?r===!1?this.each(t):this.queue(r||"fx",t):h.call(this,{options:a,duration:a.duration,callback:a.complete,mode:a.mode})},_show:e.fn.show,show:function(e){if(n(e))return this._show.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(n(e))return this._hide.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(n(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(t){var i=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(a=[parseFloat(i),t])}),a}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.1
 *
 */
(function($) {

  jQuery.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.parent().find('.' + o.barClass);
            rail = me.parent().find('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel();

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel()
        {
          if (window.addEventListener)
          {
            this.addEventListener('DOMMouseScroll', _onWheel, false );
            this.addEventListener('mousewheel', _onWheel, false );
            this.addEventListener('MozMousePixelScroll', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  jQuery.fn.extend({
    slimscroll: jQuery.fn.slimScroll
  });

})(jQuery);

/**
 * fullPage 2.0.7
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($) {
	$.fn.fullpage = function(options) {
		// Create some defaults, extending them with any options that were provided
		options = $.extend({
			"verticalCentered" : true,
			'resize' : true,
			'slidesColor' : [],
			'anchors':[],
			'scrollingSpeed': 700,
			'easing': 'easeInQuart',
			'menu': false,
			'navigation': false,
			'navigationPosition': 'right',
			'navigationColor': '#000',
			'navigationTooltips': [],
			'slidesNavigation': false,
			'slidesNavPosition': 'bottom',
			'controlArrowColor': '#fff',
			'loopBottom': false,
			'loopTop': false,
			'loopHorizontal': true,
			'autoScrolling': true,
			'scrollOverflow': false,
			'css3': false,
			'paddingTop': 0,
			'paddingBottom': 0,
			'fixedElements': null,
			'normalScrollElements': null, 
			'keyboardScrolling': true,
			'touchSensitivity': 5,
			'continuousVertical': false,
			'animateAnchor': true,
			'normalScrollElementTouchThreshold': 5,

			//events
			'afterLoad': null,
			'onLeave': null,
			'afterRender': null,
			'afterResize': null,
			'afterSlideLoad': null,
			'onSlideLeave': null
		}, options);		
		
	    // Disable mutually exclusive settings
		if (options.continuousVertical &&
			(options.loopTop || options.loopBottom)) {
		    options.continuousVertical = false;
		    console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled");
		}
		
		//Defines the delay to take place before being able to scroll to the next section
		//BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and 
		//Apple devices (laptops, mouses...)
		var scrollDelay = 600;
		
		$.fn.fullpage.setAutoScrolling = function(value){
			options.autoScrolling = value;
			
			var element = $('.section.active');
				
			if(options.autoScrolling){
				$('html, body').css({
					'overflow' : 'hidden',
					'height' : '100%'
				});
				
				if(element.length){
					//moving the container up
					silentScroll(element.position().top);
				}
					
			}else{
				$('html, body').css({
					'overflow' : 'auto',
					'height' : 'auto'
				});
				
				silentScroll(0);
				
				//scrolling the page to the section with no animation
				$('html, body').scrollTop(element.position().top);
			}
			
		};

		/**
		* Defines the scrolling speed 
		*/
		$.fn.fullpage.setScrollingSpeed = function(value){
		   options.scrollingSpeed = value;
		};
		
		/**
		* Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad. 
		*/
		$.fn.fullpage.setMouseWheelScrolling = function (value){
			if(value){
				addMouseWheelHandler();
			}else{
				removeMouseWheelHandler();
			}
		};
		
		/**
		* Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures. 
		*/
		$.fn.fullpage.setAllowScrolling = function (value){
			if(value){
				$.fn.fullpage.setMouseWheelScrolling(true);
				addTouchHandler();
			}else{
				$.fn.fullpage.setMouseWheelScrolling(false);
				removeTouchHandler();
			}
		};
		
		/**
		* Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
		*/
		$.fn.fullpage.setKeyboardScrolling = function (value){
			options.keyboardScrolling = value;
		};
			
		//flag to avoid very fast sliding for landscape sliders
		var slideMoving = false;

		var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
		var container = $(this); // for compatibity reasons for fullpage < v2.0
		var windowsHeight = $(window).height();
		var isMoving = false;
		var isResizing = false;
		var lastScrolledDestiny;
		var lastScrolledSlide;

		$.fn.fullpage.setAllowScrolling(true);
		
		//if css3 is not supported, it will use jQuery animations
		if(options.css3){
			options.css3 = support3d();
		}

		if($(this).length){
			container.css({
				'height': '100%',
				'position': 'relative',
				'-ms-touch-action': 'none'
			});
		}

		//for compatibity reasons for fullpage < v2.0 
		else{
			$('body').wrapInner('<div id="superContainer" />');
			container = $('#superContainer');
		}

		//creating the navigation dots 
		if (options.navigation) {
			$('body').append('<div id="fullPage-nav"><ul></ul></div>');
			var nav = $('#fullPage-nav');

			nav.css('color', options.navigationColor);
			nav.addClass(options.navigationPosition);
		}
		
		$('.section').each(function(index){
			var that = $(this);
			var slides = $(this).find('.slide');
			var numSlides = slides.length;
			
			//if no active section is defined, the 1st one will be the default one
			if(!index && $('.section.active').length === 0) {
				$(this).addClass('active');
			}

			$(this).css('height', windowsHeight + 'px');
			
			if(options.paddingTop || options.paddingBottom){
				$(this).css('padding', options.paddingTop  + ' 0 ' + options.paddingBottom + ' 0');
			}
			
			if (typeof options.slidesColor[index] !==  'undefined') {
				$(this).css('background-color', options.slidesColor[index]);
			}

			if (typeof options.anchors[index] !== 'undefined') {
				$(this).attr('data-anchor', options.anchors[index]);
			}			

			if (options.navigation) {
				var link = '';
				if(options.anchors.length){
					link = options.anchors[index];
				}
				var tooltip = options.navigationTooltips[index];
				if(typeof tooltip === 'undefined'){
					tooltip = '';
				}
				
				nav.find('ul').append('<li data-tooltip="' + tooltip + '"><a href="#' + link + '"><span></span></a></li>');
			}

			
			// if there's any slide
			if (numSlides > 0) {
				var sliderWidth = numSlides * 100;
				var slideWidth = 100 / numSlides;
				
				slides.wrapAll('<div class="slidesContainer" />');
				slides.parent().wrap('<div class="slides" />');

				$(this).find('.slidesContainer').css('width', sliderWidth + '%');
				$(this).find('.slides').after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');
				
				if(options.controlArrowColor!='#fff'){
					$(this).find('.controlArrow.next').css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
					$(this).find('.controlArrow.prev').css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
				}
				
				if(!options.loopHorizontal){
					$(this).find('.controlArrow.prev').hide();
				}

				
				if(options.slidesNavigation){
					addSlidesNavigation($(this), numSlides);
				}
				
				slides.each(function(index) {
					//if the slide won#t be an starting point, the default will be the first one
					if(!index && that.find('.slide.active').length == 0){
						$(this).addClass('active');
					}
					
					$(this).css('width', slideWidth + '%');
					
					if(options.verticalCentered){
						addTableClass($(this));
					}
				});
			}else{
				if(options.verticalCentered){
					addTableClass($(this));
				}
			}
			
		

			
		}).promise().done(function(){	
			$.fn.fullpage.setAutoScrolling(options.autoScrolling);


			//the starting point is a slide? 
			var activeSlide = $('.section.active').find('.slide.active');
			if( activeSlide.length &&  ($('.section.active').index('.section') != 0 || ($('.section.active').index('.section') == 0 && activeSlide.index() != 0))){
				var prevScrollingSpeepd = options.scrollingSpeed;
				$.fn.fullpage.setScrollingSpeed (0);
				landscapeScroll($('.section.active').find('.slides'), activeSlide);
				$.fn.fullpage.setScrollingSpeed(prevScrollingSpeepd);
			}
			
			//fixed elements need to be moved out of the plugin container due to problems with CSS3.
			if(options.fixedElements && options.css3){
				$(options.fixedElements).appendTo('body');
			}
			
			//vertical centered of the navigation + first bullet active
			if(options.navigation){
				nav.css('margin-top', '-' + (nav.height()/2) + 'px');
				nav.find('li').eq($('.section.active').index('.section')).find('a').addClass('active');
			}
			
			//moving the menu outside the main container (avoid problems with fixed positions when using CSS3 tranforms)
			if(options.menu && options.css3){
				$(options.menu).appendTo('body');
			}

			if(options.scrollOverflow){
				//after DOM and images are loaded 
				$(window).on('load', function() {
					
					$('.section').each(function(){
						var slides = $(this).find('.slide');
						
						if(slides.length){
							slides.each(function(){
								createSlimScrolling($(this));
							});
						}else{
							createSlimScrolling($(this));
						}
						
					});
					$.isFunction( options.afterRender ) && options.afterRender.call( this);
				});
			}else{
				$.isFunction( options.afterRender ) && options.afterRender.call( this);
			}


			//getting the anchor link in the URL and deleting the `#`
			var value =  window.location.hash.replace('#', '').split('/');
			var destiny = value[0];

			if(destiny.length){
				var section = $('[data-anchor="'+destiny+'"]');

				if(!options.animateAnchor && section.length){ 
					silentScroll(section.position().top);
					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, destiny, (section.index('.section') + 1));

					//updating the active class
					section.addClass('active').siblings().removeClass('active');
				}
			}

	
			$(window).on('load', function() {
				scrollToAnchor();	
			});
			
		});
	
		var scrollId;
		var isScrolling = false;
		
		//when scrolling...
		$(window).scroll(function(e){

			if(!options.autoScrolling){					
				var currentScroll = $(window).scrollTop();
				
				var scrolledSections = $('.section').map(function(){
					if ($(this).offset().top < (currentScroll + 100)){
						return $(this);
					}
				});
				
				//geting the last one, the current one on the screen
				var currentSection = scrolledSections[scrolledSections.length-1];
				
				//executing only once the first time we reach the section
				if(!currentSection.hasClass('active')){
					var leavingSection = $('.section.active').index('.section') + 1;

					isScrolling = true;	
					
					var yMovement = getYmovement(currentSection);
					
					currentSection.addClass('active').siblings().removeClass('active');
				
					var anchorLink  = currentSection.data('anchor');
					$.isFunction( options.onLeave ) && options.onLeave.call( this, leavingSection, (currentSection.index('.section') + 1), yMovement);

					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (currentSection.index('.section') + 1));
					
					activateMenuElement(anchorLink);	
					activateNavDots(anchorLink, 0);
					
				
					if(options.anchors.length && !isMoving){
						//needed to enter in hashChange event when using the menu with anchor links
						lastScrolledDestiny = anchorLink;
			
						location.hash = anchorLink;
					}
					
					//small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
					clearTimeout(scrollId);
					scrollId = setTimeout(function(){					
						isScrolling = false;
					}, 100);
				}
				
			}					
		});	
	

		
	
		var touchStartY = 0;
		var touchStartX = 0;
		var touchEndY = 0;
		var touchEndX = 0;
	
		/* Detecting touch events 
		
		* As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
		* This way, the touchstart and the touch moves shows an small difference between them which is the
		* used one to determine the direction.
		*/		
		function touchMoveHandler(event){
			var e = event.originalEvent;

			if(options.autoScrolling){
				//preventing the easing on iOS devices 
				event.preventDefault();
			}

			// additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
			if (!checkParentForNormalScrollElement(event.target)) {
		
				var touchMoved = false;
				var activeSection = $('.section.active');
				var scrollable;

				if (!isMoving && !slideMoving) { //if theres any #
					var touchEvents = getEventsPage(e);
					touchEndY = touchEvents['y'];
					touchEndX = touchEvents['x'];
										
					//if movement in the X axys is greater than in the Y and the currect section has slides...
					if (activeSection.find('.slides').length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {
					    
					    //is the movement greater than the minimum resistance to scroll?
					    if (Math.abs(touchStartX - touchEndX) > ($(window).width() / 100 * options.touchSensitivity)) {
					        if (touchStartX > touchEndX) {
					            $.fn.fullpage.moveSlideRight(); //next 
					        } else {
					            $.fn.fullpage.moveSlideLeft(); //prev
					        }
					    }
					}

					//vertical scrolling (only when autoScrolling is enabled)
					else if(options.autoScrolling){
					
						//if there are landscape slides, we check if the scrolling bar is in the current one or not
						if(activeSection.find('.slides').length){
							scrollable= activeSection.find('.slide.active').find('.scrollable');
						}else{
							scrollable = activeSection.find('.scrollable');
						}
						
						//is the movement greater than the minimum resistance to scroll?
						if (Math.abs(touchStartY - touchEndY) > ($(window).height() / 100 * options.touchSensitivity)) {
							if (touchStartY > touchEndY) {
								if(scrollable.length > 0 ){
									//is the scrollbar at the end of the scroll?
									if(isScrolled('bottom', scrollable)){
										$.fn.fullpage.moveSectionDown();
									}else{
										return true;
									}
								}else{
									// moved down
									$.fn.fullpage.moveSectionDown();
								}
							} else if (touchEndY > touchStartY) {
								
								if(scrollable.length > 0){
									//is the scrollbar at the start of the scroll?
									if(isScrolled('top', scrollable)){
										$.fn.fullpage.moveSectionUp();
									}
									else{
										return true;
									}
								}else{
									// moved up
									$.fn.fullpage.moveSectionUp();
								}
							}
						}
					}
				}
			}

		}

		/**
		 * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
		 * Currently works well for iOS - Android might need some testing
		 * @param  {Element} el  target element / jquery selector (in subsequent nodes)
		 * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold 
		 * @return {boolean} true if there is a match to options.normalScrollElements
		 */
		function checkParentForNormalScrollElement (el, hop) {
			hop = hop || 0;
			var parent = $(el).parent();

			if (hop < options.normalScrollElementTouchThreshold &&
				parent.is(options.normalScrollElements) ) {
				return true;
			} else if (hop == options.normalScrollElementTouchThreshold) {
				return false;
			} else {
				return checkParentForNormalScrollElement(parent, ++hop);
			}
		}
		
		function touchStartHandler(event){
			var e = event.originalEvent;
			var touchEvents = getEventsPage(e);
			touchStartY = touchEvents['y'];
			touchStartX = touchEvents['x'];
		}
		


		/**
		 * Detecting mousewheel scrolling
		 * 
		 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
		 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
		 */
		function MouseWheelHandler(e) {
			if(options.autoScrolling){
				// cross-browser wheel delta
				e = window.event || e;
				var delta = Math.max(-1, Math.min(1,
						(e.wheelDelta || -e.deltaY || -e.detail)));
				var scrollable;
				var activeSection = $('.section.active');
				
				if (!isMoving) { //if theres any #
				
					//if there are landscape slides, we check if the scrolling bar is in the current one or not
					if(activeSection.find('.slides').length){
						scrollable= activeSection.find('.slide.active').find('.scrollable');
					}else{
						scrollable = activeSection.find('.scrollable');
					}
				
					//scrolling down?
					if (delta < 0) {
						if(scrollable.length > 0 ){
							//is the scrollbar at the end of the scroll?
							if(isScrolled('bottom', scrollable)){
								$.fn.fullpage.moveSectionDown();
							}else{
								return true; //normal scroll
							}
						}else{
							$.fn.fullpage.moveSectionDown();
						}
					}

					//scrolling up?
					else {
						if(scrollable.length > 0){
							//is the scrollbar at the start of the scroll?
							if(isScrolled('top', scrollable)){
								$.fn.fullpage.moveSectionUp();
							}else{
								return true; //normal scroll
							}
						}else{
							$.fn.fullpage.moveSectionUp();
						}
					}
				}

				return false;
			}
		}

		
		$.fn.fullpage.moveSectionUp = function(){
			var prev = $('.section.active').prev('.section');
			
			//looping to the bottom if there's no more sections above
			if (!prev.length && (options.loopTop || options.continuousVertical)) {
				prev = $('.section').last();
			}

			if (prev.length) {
				scrollPage(prev, null, true);
			}
		};

		$.fn.fullpage.moveSectionDown = function (){
			var next = $('.section.active').next('.section');

			//looping to the top if there's no more sections below
			if(!next.length &&
				(options.loopBottom || options.continuousVertical)){
				next = $('.section').first();
			}

			if(next.length > 0 ||
				(!next.length &&
				(options.loopBottom || options.continuousVertical))){
				scrollPage(next, null, false);
			}
		};
		
		$.fn.fullpage.moveTo = function (section, slide){
			var destiny = '';
			
			if(isNaN(section)){
				destiny = $('[data-anchor="'+section+'"]');
			}else{
				destiny = $('.section').eq( (section -1) );
			}
			
			if (typeof slide !== 'undefined'){
				scrollPageAndSlide(section, slide);
			}else if(destiny.length > 0){
				scrollPage(destiny);
			}
		};

		$.fn.fullpage.moveSlideRight = function(){
			moveSlide('next');
		}

		$.fn.fullpage.moveSlideLeft = function(){
			moveSlide('prev');
		}

		function moveSlide(direction){
		    var activeSection = $('.section.active');
		    var slides = activeSection.find('.slides');

		    // more than one slide needed and nothing should be sliding
			if (!slides.length || slideMoving) {
			    return;
			}

		    var currentSlide = slides.find('.slide.active');
		    var destiny = null;

		    if(direction === 'prev'){
		        destiny = currentSlide.prev('.slide');
		    }else{
		        destiny = currentSlide.next('.slide');
		    }

		    //isn't there a next slide in the secuence?
			if(!destiny.length){
				//respect loopHorizontal settin
				if (!options.loopHorizontal) return;

			    if(direction === 'prev'){
			        destiny = currentSlide.siblings(':last');
			    }else{
			        destiny = currentSlide.siblings(':first');
			    }
			}

		    slideMoving = true;

		    landscapeScroll(slides, destiny);
		}

		function scrollPage(element, callback, isMovementUp){
			var scrollOptions = {}, scrolledElement;
			var dest = element.position();
			if(typeof dest === "undefined"){ return; } //there's no element to scroll, leaving the function
			var dtop = dest.top;			
			var yMovement = getYmovement(element);
			var anchorLink  = element.data('anchor');
			var sectionIndex = element.index('.section');
			var activeSlide = element.find('.slide.active');
			var activeSection = $('.section.active');
			var leavingSection = activeSection.index('.section') + 1;

			//caching the value of isResizing at the momment the function is called 
			//because it will be checked later inside a setTimeout and the value might change
			var localIsResizing = isResizing; 

			if(activeSlide.length){
				var slideAnchorLink = activeSlide.data('anchor');
				var slideIndex = activeSlide.index();
			}

			// If continuousVertical && we need to wrap around
			if (options.autoScrolling && options.continuousVertical && typeof (isMovementUp) !== "undefined" &&
				((!isMovementUp && yMovement == 'up') || // Intending to scroll down but about to go up or
				(isMovementUp && yMovement == 'down'))) { // intending to scroll up but about to go down

				// Scrolling down
				if (!isMovementUp) {
					// Move all previous sections to after the active section
					$(".section.active").after(activeSection.prevAll(".section").get().reverse());
				}
				else { // Scrolling up
					// Move all next sections to before the active section
					$(".section.active").before(activeSection.nextAll(".section"));
				}

				// Maintain the displayed position (now that we changed the element order)
				silentScroll($('.section.active').position().top);

				// save for later the elements that still need to be reordered
				var wrapAroundElements = activeSection;

				// Recalculate animation variables
				dest = element.position();
				dtop = dest.top;
				yMovement = getYmovement(element);
			}

			
			element.addClass('active').siblings().removeClass('active');
			
			//preventing from activating the MouseWheelHandler event
			//more than once if the page is scrolling
			isMoving = true;
			
			if(typeof anchorLink !== 'undefined'){
				setURLHash(slideIndex, slideAnchorLink, anchorLink);
			}
			
			if(options.autoScrolling){
				scrollOptions['top'] = -dtop;
				scrolledElement = container.selector;
			}else{
				scrollOptions['scrollTop'] = dtop;
				scrolledElement = 'html, body';
			}

			// Fix section order after continuousVertical changes have been animated
			var continuousVerticalFixSectionOrder = function () {
				// If continuousVertical is in effect (and autoScrolling would also be in effect then), 
				// finish moving the elements around so the direct navigation will function more simply
				if (!wrapAroundElements || !wrapAroundElements.length) {
					return;
				}

				if (isMovementUp) {
					$('.section:first').before(wrapAroundElements);
				}
				else {
					$('.section:last').after(wrapAroundElements);
				}

				silentScroll($('.section.active').position().top);
			};


			// Use CSS3 translate functionality or...
			if (options.css3 && options.autoScrolling) {

				//callback (onLeave) if the site is not just resizing and readjusting the slides
				$.isFunction(options.onLeave) && !localIsResizing && options.onLeave.call(this, leavingSection, (sectionIndex + 1), yMovement);
				

				var translate3d = 'translate3d(0px, -' + dtop + 'px, 0px)';
				transformContainer(translate3d, true);

				setTimeout(function () {
					//fix section order from continuousVertical
					continuousVerticalFixSectionOrder();

					//callback (afterLoad) 	if the site is not just resizing and readjusting the slides
					$.isFunction(options.afterLoad) && !localIsResizing && options.afterLoad.call(this, anchorLink, (sectionIndex + 1));

					setTimeout(function () {
						isMoving = false;
						$.isFunction(callback) && callback.call(this);
					}, scrollDelay);
				}, options.scrollingSpeed);
			} else { // ... use jQuery animate 

				//callback (onLeave) if the site is not just resizing and readjusting the slides
				$.isFunction(options.onLeave) && !localIsResizing && options.onLeave.call(this, leavingSection, (sectionIndex + 1), yMovement);

				$(scrolledElement).animate(
					scrollOptions
				, options.scrollingSpeed, options.easing, function () {
					//fix section order from continuousVertical
					continuousVerticalFixSectionOrder();

					//callback (afterLoad) if the site is not just resizing and readjusting the slides
					$.isFunction(options.afterLoad) && !localIsResizing && options.afterLoad.call(this, anchorLink, (sectionIndex + 1));

					setTimeout(function () {
						isMoving = false;
						$.isFunction(callback) && callback.call(this);
					}, scrollDelay);
				});
			}

			//flag to avoid callingn `scrollPage()` twice in case of using anchor links
			lastScrolledDestiny = anchorLink;
			
			//avoid firing it twice (as it does also on scroll)
			if(options.autoScrolling){
				activateMenuElement(anchorLink);
				activateNavDots(anchorLink, sectionIndex);
			}
		}
		
		function scrollToAnchor(){
			//getting the anchor link in the URL and deleting the `#`
			var value =  window.location.hash.replace('#', '').split('/');
			var section = value[0];
			var slide = value[1];

			if(section){  //if theres any #				
				scrollPageAndSlide(section, slide);
			}
		}

		//detecting any change on the URL to scroll to the given anchor link
		//(a way to detect back history button as we play with the hashes on the URL)
		$(window).on('hashchange',function(){
			if(!isScrolling){
				var value =  window.location.hash.replace('#', '').split('/');
				var section = value[0];
				var slide = value[1];

				//when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
				var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
				var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined');

				/*in order to call scrollpage() only once for each destination at a time
				It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange` 
				event is fired on every scroll too.*/
				if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
					scrollPageAndSlide(section, slide);
				}
			}
			
		});


		/**
		 * Sliding with arrow keys, both, vertical and horizontal
		 */
		$(document).keydown(function(e) {
			//Moving the main page with the keyboard arrows if keyboard scrolling is enabled
			if (options.keyboardScrolling && !isMoving) {
				switch (e.which) {
					//up
					case 38:
					case 33:
						$.fn.fullpage.moveSectionUp();
						break;

					//down
					case 40:
					case 34:
						$.fn.fullpage.moveSectionDown();
						break;

					//left
					case 37:
						$.fn.fullpage.moveSlideLeft();
						break;

					//right
					case 39:
						$.fn.fullpage.moveSlideRight();
						break;

					default:
						return; // exit this handler for other keys
				}
			}
		});
		
		//navigation action 
		$(document).on('click', '#fullPage-nav a', function(e){
			e.preventDefault();
			var index = $(this).parent().index();
			scrollPage($('.section').eq(index));
		});
		
		//navigation tooltips 
		$(document).on({
			mouseenter: function(){
				var tooltip = $(this).data('tooltip');
				$('<div class="fullPage-tooltip ' + options.navigationPosition +'">' + tooltip + '</div>').hide().appendTo($(this)).fadeIn(200);
			},
			mouseleave: function(){
				$(this).find('.fullPage-tooltip').fadeOut().remove();
			}
		}, '#fullPage-nav li');


		if(options.normalScrollElements){
			$(document).on('mouseover', options.normalScrollElements, function () {
				$.fn.fullpage.setMouseWheelScrolling(false);
			});
			
			$(document).on('mouseout', options.normalScrollElements, function(){
				$.fn.fullpage.setMouseWheelScrolling(true);
			});
		}
		
		/**
		 * Scrolling horizontally when clicking on the slider controls.
		 */
		$('.section').on('click', '.controlArrow', function() {
			if ($(this).hasClass('prev')) {
				$.fn.fullpage.moveSlideLeft();
			} else {
				$.fn.fullpage.moveSlideRight();
			}
		});

		
		/**
		 * Scrolling horizontally when clicking on the slider controls.
		 */
		$('.section').on('click', '.toSlide', function(e) {
			e.preventDefault();
			
			var slides = $(this).closest('.section').find('.slides');
			var currentSlide = slides.find('.slide.active');
			var destiny = null;
			
			destiny = slides.find('.slide').eq( ($(this).data('index') -1) );

			if(destiny.length > 0){
				landscapeScroll(slides, destiny);
			}
		});
		
		/**
		* Scrolls horizontal sliders.
		*/
		function landscapeScroll(slides, destiny){
			var destinyPos = destiny.position();
			var slidesContainer = slides.find('.slidesContainer').parent();
			var slideIndex = destiny.index();
			var section = slides.closest('.section');
			var sectionIndex = section.index('.section');
			var anchorLink = section.data('anchor');
			var slidesNav = section.find('.fullPage-slidesNav');
			var slideAnchor = destiny.data('anchor');
	
			//caching the value of isResizing at the momment the function is called 
			//because it will be checked later inside a setTimeout and the value might change
			var localIsResizing = isResizing; 

			if(options.onSlideLeave){
				var prevSlideIndex = section.find('.slide.active').index();
				var xMovement = getXmovement(prevSlideIndex, slideIndex);

				//if the site is not just resizing and readjusting the slides
				if(!localIsResizing){
					$.isFunction( options.onSlideLeave ) && options.onSlideLeave.call( this, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement);
				}
			}
	
			destiny.addClass('active').siblings().removeClass('active');

			
			if(typeof slideAnchor === 'undefined'){
				slideAnchor = slideIndex;
			}
			
			//only changing the URL if the slides are in the current section (not for resize re-adjusting)
			if(section.hasClass('active')){
			
				if(!options.loopHorizontal){
					//hidding it for the fist slide, showing for the rest
					section.find('.controlArrow.prev').toggle(slideIndex!=0);

					//hidding it for the last slide, showing for the rest
					section.find('.controlArrow.next').toggle(!destiny.is(':last-child'));
				}

				setURLHash(slideIndex, slideAnchor, anchorLink);				
			}			

			if(options.css3){
				var translate3d = 'translate3d(-' + destinyPos.left + 'px, 0px, 0px)';

				slides.find('.slidesContainer').toggleClass('easing', options.scrollingSpeed>0).css(getTransforms(translate3d));

				setTimeout(function(){
					//if the site is not just resizing and readjusting the slides
					if(!localIsResizing){
						$.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex );
					}

					slideMoving = false;
				}, options.scrollingSpeed, options.easing);
			}else{
				slidesContainer.animate({
					scrollLeft : destinyPos.left
				}, options.scrollingSpeed, options.easing, function() {

					//if the site is not just resizing and readjusting the slides
					if(!localIsResizing){
						$.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
					}	
					//letting them slide again
					slideMoving = false; 
				});
			}
			
			slidesNav.find('.active').removeClass('active');
			slidesNav.find('li').eq(slideIndex).find('a').addClass('active');
		}
		
		
		if (!isTablet) {
			var resizeId;

			//when resizing the site, we adjust the heights of the sections
			$(window).resize(function() {
				//in order to call the functions only when the resize is finished
				//http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
				clearTimeout(resizeId);
				resizeId = setTimeout(doneResizing, 500);
			});
		
		}
		
		
		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
		
		$(window).bind(orientationEvent , function() {
			if(isTablet){
				doneResizing();
			}
		});
		

		/**
		 * When resizing is finished, we adjust the slides sizes and positions
		 */
		function doneResizing() {
			isResizing = true;

			var windowsWidth = $(window).width();
			windowsHeight = $(window).height();

			//text and images resizing
			if (options.resize) {
				resizeMe(windowsHeight, windowsWidth);
			}

			$('.section').each(function(){
				var scrollHeight = windowsHeight - parseInt($(this).css('padding-bottom')) - parseInt($(this).css('padding-top'));
			
				//adjusting the height of the table-cell for IE and Firefox
				if(options.verticalCentered){
					$(this).find('.tableCell').css('height', getTableHeight($(this)) + 'px');
				}
				
				$(this).css('height', windowsHeight + 'px');

				//resizing the scrolling divs
				if(options.scrollOverflow){
					var slides = $(this).find('.slide');
					
					if(slides.length){
						slides.each(function(){
							createSlimScrolling($(this));
						});
					}else{
						createSlimScrolling($(this));
					}
					
				}
				

				//adjusting the position fo the FULL WIDTH slides...
				var slides = $(this).find('.slides');
				if (slides.length) {
					landscapeScroll(slides, slides.find('.slide.active'));
				}
			});

			//adjusting the position for the current section
			var destinyPos = $('.section.active').position();

			var activeSection = $('.section.active');
			
			//isn't it the first section?
			if(activeSection.index('.section')){
				scrollPage(activeSection);
			}

			isResizing = false;
			$.isFunction( options.afterResize ) && options.afterResize.call( this);
		}

		/**
		 * Resizing of the font size depending on the window size as well as some of the images on the site.
		 */
		function resizeMe(displayHeight, displayWidth) {
			//Standard height, for which the body font size is correct
			var preferredHeight = 825;
			var windowSize = displayHeight;

			/* Problem to be solved
			
			if (displayHeight < 825) {
				var percentage = (windowSize * 100) / preferredHeight;
				var newFontSize = percentage.toFixed(2);

				$("img").each(function() {
					var newWidth = ((80 * percentage) / 100).toFixed(2);
					$(this).css("width", newWidth + '%');
				});
			} else {
				$("img").each(function() {
					$(this).css("width", '');
				});
			}*/

			if (displayHeight < 825 || displayWidth < 900) {
				if (displayWidth < 900) {
					windowSize = displayWidth;
					preferredHeight = 900;
				}
				var percentage = (windowSize * 100) / preferredHeight;
				var newFontSize = percentage.toFixed(2);

				$("body").css("font-size", newFontSize + '%');
			} else {
				$("body").css("font-size", '100%');
			}
		}
		
		/**
		 * Activating the website navigation dots according to the given slide name.
		 */
		function activateNavDots(name, sectionIndex){
			if(options.navigation){
				$('#fullPage-nav').find('.active').removeClass('active');
				if(name){ 
					$('#fullPage-nav').find('a[href="#' + name + '"]').addClass('active');
				}else{
					$('#fullPage-nav').find('li').eq(sectionIndex).find('a').addClass('active');
				}
			}
		}
				
		/**
		 * Activating the website main menu elements according to the given slide name.
		 */
		function activateMenuElement(name){
			if(options.menu){
				$(options.menu).find('.active').removeClass('active');
				$(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');
			}
		}
		
		/**
		* Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
		* depending on the given type.
		*/
		function isScrolled(type, scrollable){
			if(type === 'top'){
				return !scrollable.scrollTop();
			}else if(type === 'bottom'){
				return scrollable.scrollTop() + scrollable.innerHeight() >= scrollable[0].scrollHeight;
			}
		}
		
		/**
		* Retuns `up` or `down` depending on the scrolling movement to reach its destination
		* from the current section.
		*/
		function getYmovement(destiny){
			var fromIndex = $('.section.active').index('.section');
			var toIndex = destiny.index('.section');
			
			if(fromIndex > toIndex){
				return 'up';
			}
			return 'down';
		}	

		/**
		* Retuns `right` or `left` depending on the scrolling movement to reach its destination
		* from the current slide.
		*/
		function getXmovement(fromIndex, toIndex){
			if( fromIndex == toIndex){
				return 'none'
			}
			if(fromIndex > toIndex){
				return 'left';
			}
			return 'right';
		}		
		
		
		function createSlimScrolling(element){
			//needed to make `scrollHeight` work under Opera 12
			element.css('overflow', 'hidden');
			
			//in case element is a slide
			var section = element.closest('.section');
			var scrollable = element.find('.scrollable');

			//if there was scroll, the contentHeight will be the one in the scrollable section
			if(scrollable.length){
				var contentHeight = element.find('.scrollable').get(0).scrollHeight;
			}else{
				var contentHeight = element.get(0).scrollHeight;
				if(options.verticalCentered){
					contentHeight = element.find('.tableCell').get(0).scrollHeight;
				}
			}

			var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

			//needs scroll?
			if ( contentHeight > scrollHeight) {
				//was there already an scroll ? Updating it
				if(scrollable.length){
					scrollable.css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
				}
				//creating the scrolling
				else{					
					if(options.verticalCentered){
						element.find('.tableCell').wrapInner('<div class="scrollable" />');
					}else{
						element.wrapInner('<div class="scrollable" />');
					}
					

					element.find('.scrollable').slimScroll({
						height: scrollHeight + 'px',
						size: '10px',
						alwaysVisible: true
					});
				}
			}
			
			//removing the scrolling when it is not necessary anymore
			else{				
				element.find('.scrollable').children().first().unwrap().unwrap();
				element.find('.slimScrollBar').remove();
				element.find('.slimScrollRail').remove();
			}
			
			//undo 
			element.css('overflow', '');
		}
		
		function addTableClass(element){
			element.addClass('table').wrapInner('<div class="tableCell" style="height:' + getTableHeight(element) + 'px;" />');
		}
		
		function getTableHeight(element){
			var sectionHeight = windowsHeight;

			if(options.paddingTop || options.paddingBottom){
				var section = element;
				if(!section.hasClass('section')){
					section = element.closest('.section');
				}
			
				var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
				sectionHeight = (windowsHeight - paddings);
			}

			return sectionHeight;
		}
		
		/**
		* Adds a css3 transform property to the container class with or without animation depending on the animated param.
		*/
		function transformContainer(translate3d, animated){
			container.toggleClass('easing', animated);
			
			container.css(getTransforms(translate3d));
		}
		
		
		/**
		* Scrolls to the given section and slide 
		*/
		function scrollPageAndSlide(destiny, slide){
			if (typeof slide === 'undefined') {
			    slide = 0;
			}

			if(isNaN(destiny)){
				var section = $('[data-anchor="'+destiny+'"]');
			}else{
				var section = $('.section').eq( (destiny -1) );
			}


			//we need to scroll to the section and then to the slide
			if (destiny !== lastScrolledDestiny && !section.hasClass('active')){
				scrollPage(section, function(){
					scrollSlider(section, slide)
				});
			}
			//if we were already in the section
			else{
				scrollSlider(section, slide);
			}
			
		}
		
		/**
		* Scrolls the slider to the given slide destination for the given section
		*/
		function scrollSlider(section, slide){
			if(typeof slide != 'undefined'){
				var slides = section.find('.slides');
				var destiny =  slides.find('[data-anchor="'+slide+'"]');

				if(!destiny.length){
					destiny = slides.find('.slide').eq(slide);
				}

				if(destiny.length){
					landscapeScroll(slides, destiny);
				}
			}
		}
		
		/**
		* Creates a landscape navigation bar with dots for horizontal sliders.
		*/
		function addSlidesNavigation(section, numSlides){						
			section.append('<div class="fullPage-slidesNav"><ul></ul></div>');
			var nav = section.find('.fullPage-slidesNav');

			//top or bottom
			nav.addClass(options.slidesNavPosition);

			for(var i=0; i< numSlides; i++){			
				nav.find('ul').append('<li><a href="#"><span></span></a></li>');
			}
			
			//centering it
			nav.css('margin-left', '-' + (nav.width()/2) + 'px');
			
			nav.find('li').first().find('a').addClass('active');
		}
		

		/**
		* Sets the URL hash for a section with slides
		*/
		function setURLHash(slideIndex, slideAnchor, anchorLink){
			var sectionHash = '';

			if(options.anchors.length){

				//isn't it the first slide?
				if(slideIndex){
					if(typeof anchorLink !== 'undefined'){
						sectionHash = anchorLink;
					}

					//slide without anchor link? We take the index instead.
					if(typeof slideAnchor === 'undefined'){
						slideAnchor = slideIndex;
					}
					
					lastScrolledSlide = slideAnchor;
					location.hash = sectionHash + '/' + slideAnchor;

				//first slide won't have slide anchor, just the section one
				}else if(typeof slideIndex !== 'undefined'){
					lastScrolledSlide = slideAnchor;
					location.hash = anchorLink;
				}

				//section without slides
				else{
					location.hash = anchorLink;
				}
			}
		}

		/**
		* Scrolls the slider to the given slide destination for the given section
		*/
		$(document).on('click', '.fullPage-slidesNav a', function(e){
			e.preventDefault();
			var slides = $(this).closest('.section').find('.slides');		
			var destiny = slides.find('.slide').eq($(this).closest('li').index());
			
			landscapeScroll(slides, destiny);
		});
		
		
		/**
		* Checks for translate3d support 
		* @return boolean
		* http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
		*/
		function support3d() {
			var el = document.createElement('p'), 
				has3d,
				transforms = {
					'webkitTransform':'-webkit-transform',
					'OTransform':'-o-transform',
					'msTransform':'-ms-transform',
					'MozTransform':'-moz-transform',
					'transform':'transform'
				};

			// Add it to the body to get the computed style.
			document.body.insertBefore(el, null);

			for (var t in transforms) {
				if (el.style[t] !== undefined) {
					el.style[t] = "translate3d(1px,1px,1px)";
					has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
				}
			}
			
			document.body.removeChild(el);

			return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
		}



		/**
		* Removes the auto scrolling action fired by the mouse wheel and tackpad.
		* After this function is called, the mousewheel and trackpad movements won't scroll through sections.
		*/
		function removeMouseWheelHandler(){
			if (document.addEventListener) {
				document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
				document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
			} else {
				document.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
			}
		}


		/**
		* Adds the auto scrolling action for the mouse wheel and tackpad.
		* After this function is called, the mousewheel and trackpad movements will scroll through sections
		*/
		function addMouseWheelHandler(){
			if (document.addEventListener) {
				document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
				document.addEventListener("wheel", MouseWheelHandler, false); //Firefox
			} else {
				document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
			}
		}
		
		
		/**
		* Adds the possibility to auto scroll through sections on touch devices.
		*/
		function addTouchHandler(){
			if(isTablet){
				$(document).off('touchstart MSPointerDown').on('touchstart MSPointerDown', touchStartHandler);
				$(document).off('touchmove MSPointerMove').on('touchmove MSPointerMove', touchMoveHandler);
			}
		}
		
		/**
		* Removes the auto scrolling for touch devices.
		*/
		function removeTouchHandler(){
			if(isTablet){
				$(document).off('touchstart MSPointerDown');
				$(document).off('touchmove MSPointerMove');
			}
		}
		
		/**
		* Gets the pageX and pageY properties depending on the browser.
		* https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
		*/
		function getEventsPage(e){
			var events = new Array();
			if (window.navigator.msPointerEnabled){
				events['y'] = e.pageY;
				events['x'] = e.pageX;
			}else{
				events['y'] = e.touches[0].pageY;
				events['x'] =  e.touches[0].pageX;
			}

			return events;
		}

		function silentScroll(top){
			if (options.css3) {
				var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
				transformContainer(translate3d, false);
			}
			else {
				container.css("top", -top);
			}
		}

		function getTransforms(translate3d){
			return {
				'-webkit-transform': translate3d,
				'-moz-transform': translate3d,
				'-ms-transform':translate3d,
				'transform': translate3d
			};
		}

	};
})(jQuery);

/*!
 * Static Website Starter Kit
 * https://github.com/kriasoft/static-site-starter
 */

(function () {
    'use strict';

    var navbar = $('.navbar').hide().removeClass('hide');
    var menu = $('.nav', navbar);
    var logo = $('svg path', navbar);
    var scrollingSpeed = 700;

    // https://github.com/alvarotrigo/fullPage.js/
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'menu', 'photos', 'contact', 'store'],
        css3: true,
        scrollingSpeed: scrollingSpeed,
        afterLoad: function (anchorLink, index) {
            // console.log('afterLoad(' + anchorLink + ', ' + index + ')');

            // Highlight an active menu item
            $('li', menu).map(function (i) {
                if (i == (index - 2)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        },
        onLeave: function (index, nextIndex, direction) {
            // console.log('onLeave(' + index + ', ' + nextIndex + ', ' + direction + ')');

            // Hide menu on the home screen
            if (index = 1 && nextIndex == 2) {
                navbar.fadeIn('slow');
                navbar.css({borderBottomColor: '#6d0000'});
                logo.css({fill: '#6d0000'});
            } else if (index = 2 && nextIndex == 1) {
                navbar.fadeOut('slow');
                navbar.css({borderBottomColor: '#6d0000'});
                logo.css({fill: '#6d0000'});
            } else {
                navbar.show();
                if (nextIndex == 5) {
                    navbar.animate({borderBottomColor: '#fff4e8'}, scrollingSpeed);
                    logo.css({fill: '#fff4e8'});
                } else {
                    navbar.animate({borderBottomColor: '#6d0000'}, scrollingSpeed);
                    logo.css({fill: '#6d0000'});
                }
            }
        }
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJqcXVlcnkuZWFzaW5ncy5taW4uanMiLCJqcXVlcnkuc2xpbXNjcm9sbC5qcyIsImpxdWVyeS5mdWxsUGFnZS5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaCtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgbWV0aG9kO1xyXG4gICAgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIHZhciBtZXRob2RzID0gW1xyXG4gICAgICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXHJcbiAgICAgICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXHJcbiAgICAgICAgJ21hcmtUaW1lbGluZScsICdwcm9maWxlJywgJ3Byb2ZpbGVFbmQnLCAndGFibGUnLCAndGltZScsICd0aW1lRW5kJyxcclxuICAgICAgICAndGltZWxpbmUnLCAndGltZWxpbmVFbmQnLCAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nXHJcbiAgICBdO1xyXG4gICAgdmFyIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoO1xyXG4gICAgdmFyIGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XHJcblxyXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgbWV0aG9kID0gbWV0aG9kc1tsZW5ndGhdO1xyXG5cclxuICAgICAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXHJcbiAgICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcclxuICAgICAgICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG4vLyBQbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUuIiwiLyohIGpRdWVyeSBVSSAtIHYxLjkuMiAtIDIwMTQtMDMtMjFcbiogaHR0cDovL2pxdWVyeXVpLmNvbVxuKiBJbmNsdWRlczoganF1ZXJ5LnVpLmVmZmVjdC5qc1xuKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzOyBMaWNlbnNlZCBNSVQgKi9cblxualF1ZXJ5LmVmZmVjdHN8fGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS51aUJhY2tDb21wYXQhPT0hMSxhPVwidWktZWZmZWN0cy1cIjtlLmVmZmVjdHM9e2VmZmVjdDp7fX0sZnVuY3Rpb24odCxpKXtmdW5jdGlvbiBhKGUsdCxpKXt2YXIgYT1jW3QudHlwZV18fHt9O3JldHVybiBudWxsPT1lP2l8fCF0LmRlZj9udWxsOnQuZGVmOihlPWEuZmxvb3I/fn5lOnBhcnNlRmxvYXQoZSksaXNOYU4oZSk/dC5kZWY6YS5tb2Q/KGUrYS5tb2QpJWEubW9kOjA+ZT8wOmU+YS5tYXg/YS5tYXg6ZSl9ZnVuY3Rpb24gcyhlKXt2YXIgYT11KCkscz1hLl9yZ2JhPVtdO3JldHVybiBlPWUudG9Mb3dlckNhc2UoKSxtKGwsZnVuY3Rpb24odCxuKXt2YXIgcixvPW4ucmUuZXhlYyhlKSxoPW8mJm4ucGFyc2UobyksbD1uLnNwYWNlfHxcInJnYmFcIjtyZXR1cm4gaD8ocj1hW2xdKGgpLGFbZFtsXS5jYWNoZV09cltkW2xdLmNhY2hlXSxzPWEuX3JnYmE9ci5fcmdiYSwhMSk6aX0pLHMubGVuZ3RoPyhcIjAsMCwwLDBcIj09PXMuam9pbigpJiZ0LmV4dGVuZChzLHIudHJhbnNwYXJlbnQpLGEpOnJbZV19ZnVuY3Rpb24gbihlLHQsaSl7cmV0dXJuIGk9KGkrMSklMSwxPjYqaT9lKzYqKHQtZSkqaToxPjIqaT90OjI+MyppP2UrNioodC1lKSooMi8zLWkpOmV9dmFyIHIsbz1cImJhY2tncm91bmRDb2xvciBib3JkZXJCb3R0b21Db2xvciBib3JkZXJMZWZ0Q29sb3IgYm9yZGVyUmlnaHRDb2xvciBib3JkZXJUb3BDb2xvciBjb2xvciBjb2x1bW5SdWxlQ29sb3Igb3V0bGluZUNvbG9yIHRleHREZWNvcmF0aW9uQ29sb3IgdGV4dEVtcGhhc2lzQ29sb3JcIi5zcGxpdChcIiBcIiksaD0vXihbXFwtK10pPVxccyooXFxkK1xcLj9cXGQqKS8sbD1be3JlOi9yZ2JhP1xcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqKD86LFxccyooXFxkKyg/OlxcLlxcZCspPylcXHMqKT9cXCkvLHBhcnNlOmZ1bmN0aW9uKGUpe3JldHVybltlWzFdLGVbMl0sZVszXSxlWzRdXX19LHtyZTovcmdiYT9cXChcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFwlXFxzKixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFwlXFxzKixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFwlXFxzKig/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxwYXJzZTpmdW5jdGlvbihlKXtyZXR1cm5bMi41NSplWzFdLDIuNTUqZVsyXSwyLjU1KmVbM10sZVs0XV19fSx7cmU6LyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkvLHBhcnNlOmZ1bmN0aW9uKGUpe3JldHVybltwYXJzZUludChlWzFdLDE2KSxwYXJzZUludChlWzJdLDE2KSxwYXJzZUludChlWzNdLDE2KV19fSx7cmU6LyMoW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkvLHBhcnNlOmZ1bmN0aW9uKGUpe3JldHVybltwYXJzZUludChlWzFdK2VbMV0sMTYpLHBhcnNlSW50KGVbMl0rZVsyXSwxNikscGFyc2VJbnQoZVszXStlWzNdLDE2KV19fSx7cmU6L2hzbGE/XFwoXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxcJVxccyosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxcJVxccyooPzosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyopP1xcKS8sc3BhY2U6XCJoc2xhXCIscGFyc2U6ZnVuY3Rpb24oZSl7cmV0dXJuW2VbMV0sZVsyXS8xMDAsZVszXS8xMDAsZVs0XV19fV0sdT10LkNvbG9yPWZ1bmN0aW9uKGUsaSxhLHMpe3JldHVybiBuZXcgdC5Db2xvci5mbi5wYXJzZShlLGksYSxzKX0sZD17cmdiYTp7cHJvcHM6e3JlZDp7aWR4OjAsdHlwZTpcImJ5dGVcIn0sZ3JlZW46e2lkeDoxLHR5cGU6XCJieXRlXCJ9LGJsdWU6e2lkeDoyLHR5cGU6XCJieXRlXCJ9fX0saHNsYTp7cHJvcHM6e2h1ZTp7aWR4OjAsdHlwZTpcImRlZ3JlZXNcIn0sc2F0dXJhdGlvbjp7aWR4OjEsdHlwZTpcInBlcmNlbnRcIn0sbGlnaHRuZXNzOntpZHg6Mix0eXBlOlwicGVyY2VudFwifX19fSxjPXtcImJ5dGVcIjp7Zmxvb3I6ITAsbWF4OjI1NX0scGVyY2VudDp7bWF4OjF9LGRlZ3JlZXM6e21vZDozNjAsZmxvb3I6ITB9fSxwPXUuc3VwcG9ydD17fSxmPXQoXCI8cD5cIilbMF0sbT10LmVhY2g7Zi5zdHlsZS5jc3NUZXh0PVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEsMSwxLC41KVwiLHAucmdiYT1mLnN0eWxlLmJhY2tncm91bmRDb2xvci5pbmRleE9mKFwicmdiYVwiKT4tMSxtKGQsZnVuY3Rpb24oZSx0KXt0LmNhY2hlPVwiX1wiK2UsdC5wcm9wcy5hbHBoYT17aWR4OjMsdHlwZTpcInBlcmNlbnRcIixkZWY6MX19KSx1LmZuPXQuZXh0ZW5kKHUucHJvdG90eXBlLHtwYXJzZTpmdW5jdGlvbihuLG8saCxsKXtpZihuPT09aSlyZXR1cm4gdGhpcy5fcmdiYT1bbnVsbCxudWxsLG51bGwsbnVsbF0sdGhpczsobi5qcXVlcnl8fG4ubm9kZVR5cGUpJiYobj10KG4pLmNzcyhvKSxvPWkpO3ZhciBjPXRoaXMscD10LnR5cGUobiksZj10aGlzLl9yZ2JhPVtdO3JldHVybiBvIT09aSYmKG49W24sbyxoLGxdLHA9XCJhcnJheVwiKSxcInN0cmluZ1wiPT09cD90aGlzLnBhcnNlKHMobil8fHIuX2RlZmF1bHQpOlwiYXJyYXlcIj09PXA/KG0oZC5yZ2JhLnByb3BzLGZ1bmN0aW9uKGUsdCl7Zlt0LmlkeF09YShuW3QuaWR4XSx0KX0pLHRoaXMpOlwib2JqZWN0XCI9PT1wPyhuIGluc3RhbmNlb2YgdT9tKGQsZnVuY3Rpb24oZSx0KXtuW3QuY2FjaGVdJiYoY1t0LmNhY2hlXT1uW3QuY2FjaGVdLnNsaWNlKCkpfSk6bShkLGZ1bmN0aW9uKHQsaSl7dmFyIHM9aS5jYWNoZTttKGkucHJvcHMsZnVuY3Rpb24oZSx0KXtpZighY1tzXSYmaS50byl7aWYoXCJhbHBoYVwiPT09ZXx8bnVsbD09bltlXSlyZXR1cm47Y1tzXT1pLnRvKGMuX3JnYmEpfWNbc11bdC5pZHhdPWEobltlXSx0LCEwKX0pLGNbc10mJjA+ZS5pbkFycmF5KG51bGwsY1tzXS5zbGljZSgwLDMpKSYmKGNbc11bM109MSxpLmZyb20mJihjLl9yZ2JhPWkuZnJvbShjW3NdKSkpfSksdGhpcyk6aX0saXM6ZnVuY3Rpb24oZSl7dmFyIHQ9dShlKSxhPSEwLHM9dGhpcztyZXR1cm4gbShkLGZ1bmN0aW9uKGUsbil7dmFyIHIsbz10W24uY2FjaGVdO3JldHVybiBvJiYocj1zW24uY2FjaGVdfHxuLnRvJiZuLnRvKHMuX3JnYmEpfHxbXSxtKG4ucHJvcHMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbCE9b1t0LmlkeF0/YT1vW3QuaWR4XT09PXJbdC5pZHhdOml9KSksYX0pLGF9LF9zcGFjZTpmdW5jdGlvbigpe3ZhciBlPVtdLHQ9dGhpcztyZXR1cm4gbShkLGZ1bmN0aW9uKGksYSl7dFthLmNhY2hlXSYmZS5wdXNoKGkpfSksZS5wb3AoKX0sdHJhbnNpdGlvbjpmdW5jdGlvbihlLHQpe3ZhciBpPXUoZSkscz1pLl9zcGFjZSgpLG49ZFtzXSxyPTA9PT10aGlzLmFscGhhKCk/dShcInRyYW5zcGFyZW50XCIpOnRoaXMsbz1yW24uY2FjaGVdfHxuLnRvKHIuX3JnYmEpLGg9by5zbGljZSgpO3JldHVybiBpPWlbbi5jYWNoZV0sbShuLnByb3BzLGZ1bmN0aW9uKGUscyl7dmFyIG49cy5pZHgscj1vW25dLGw9aVtuXSx1PWNbcy50eXBlXXx8e307bnVsbCE9PWwmJihudWxsPT09cj9oW25dPWw6KHUubW9kJiYobC1yPnUubW9kLzI/cis9dS5tb2Q6ci1sPnUubW9kLzImJihyLT11Lm1vZCkpLGhbbl09YSgobC1yKSp0K3IscykpKX0pLHRoaXNbc10oaCl9LGJsZW5kOmZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLl9yZ2JhWzNdKXJldHVybiB0aGlzO3ZhciBpPXRoaXMuX3JnYmEuc2xpY2UoKSxhPWkucG9wKCkscz11KGUpLl9yZ2JhO3JldHVybiB1KHQubWFwKGksZnVuY3Rpb24oZSx0KXtyZXR1cm4oMS1hKSpzW3RdK2EqZX0pKX0sdG9SZ2JhU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJyZ2JhKFwiLGk9dC5tYXAodGhpcy5fcmdiYSxmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1lP3Q+Mj8xOjA6ZX0pO3JldHVybiAxPT09aVszXSYmKGkucG9wKCksZT1cInJnYihcIiksZStpLmpvaW4oKStcIilcIn0sdG9Ic2xhU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJoc2xhKFwiLGk9dC5tYXAodGhpcy5oc2xhKCksZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZSYmKGU9dD4yPzE6MCksdCYmMz50JiYoZT1NYXRoLnJvdW5kKDEwMCplKStcIiVcIiksZX0pO3JldHVybiAxPT09aVszXSYmKGkucG9wKCksZT1cImhzbChcIiksZStpLmpvaW4oKStcIilcIn0sdG9IZXhTdHJpbmc6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5fcmdiYS5zbGljZSgpLGE9aS5wb3AoKTtyZXR1cm4gZSYmaS5wdXNoKH5+KDI1NSphKSksXCIjXCIrdC5tYXAoaSxmdW5jdGlvbihlKXtyZXR1cm4gZT0oZXx8MCkudG9TdHJpbmcoMTYpLDE9PT1lLmxlbmd0aD9cIjBcIitlOmV9KS5qb2luKFwiXCIpfSx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5fcmdiYVszXT9cInRyYW5zcGFyZW50XCI6dGhpcy50b1JnYmFTdHJpbmcoKX19KSx1LmZuLnBhcnNlLnByb3RvdHlwZT11LmZuLGQuaHNsYS50bz1mdW5jdGlvbihlKXtpZihudWxsPT1lWzBdfHxudWxsPT1lWzFdfHxudWxsPT1lWzJdKXJldHVybltudWxsLG51bGwsbnVsbCxlWzNdXTt2YXIgdCxpLGE9ZVswXS8yNTUscz1lWzFdLzI1NSxuPWVbMl0vMjU1LHI9ZVszXSxvPU1hdGgubWF4KGEscyxuKSxoPU1hdGgubWluKGEscyxuKSxsPW8taCx1PW8raCxkPS41KnU7cmV0dXJuIHQ9aD09PW8/MDphPT09bz82MCoocy1uKS9sKzM2MDpzPT09bz82MCoobi1hKS9sKzEyMDo2MCooYS1zKS9sKzI0MCxpPTA9PT1kfHwxPT09ZD9kOi41Pj1kP2wvdTpsLygyLXUpLFtNYXRoLnJvdW5kKHQpJTM2MCxpLGQsbnVsbD09cj8xOnJdfSxkLmhzbGEuZnJvbT1mdW5jdGlvbihlKXtpZihudWxsPT1lWzBdfHxudWxsPT1lWzFdfHxudWxsPT1lWzJdKXJldHVybltudWxsLG51bGwsbnVsbCxlWzNdXTt2YXIgdD1lWzBdLzM2MCxpPWVbMV0sYT1lWzJdLHM9ZVszXSxyPS41Pj1hP2EqKDEraSk6YStpLWEqaSxvPTIqYS1yO3JldHVybltNYXRoLnJvdW5kKDI1NSpuKG8scix0KzEvMykpLE1hdGgucm91bmQoMjU1Km4obyxyLHQpKSxNYXRoLnJvdW5kKDI1NSpuKG8scix0LTEvMykpLHNdfSxtKGQsZnVuY3Rpb24oZSxzKXt2YXIgbj1zLnByb3BzLHI9cy5jYWNoZSxvPXMudG8sbD1zLmZyb207dS5mbltlXT1mdW5jdGlvbihlKXtpZihvJiYhdGhpc1tyXSYmKHRoaXNbcl09byh0aGlzLl9yZ2JhKSksZT09PWkpcmV0dXJuIHRoaXNbcl0uc2xpY2UoKTt2YXIgcyxoPXQudHlwZShlKSxkPVwiYXJyYXlcIj09PWh8fFwib2JqZWN0XCI9PT1oP2U6YXJndW1lbnRzLGM9dGhpc1tyXS5zbGljZSgpO3JldHVybiBtKG4sZnVuY3Rpb24oZSx0KXt2YXIgaT1kW1wib2JqZWN0XCI9PT1oP2U6dC5pZHhdO251bGw9PWkmJihpPWNbdC5pZHhdKSxjW3QuaWR4XT1hKGksdCl9KSxsPyhzPXUobChjKSksc1tyXT1jLHMpOnUoYyl9LG0obixmdW5jdGlvbihpLGEpe3UuZm5baV18fCh1LmZuW2ldPWZ1bmN0aW9uKHMpe3ZhciBuLHI9dC50eXBlKHMpLG89XCJhbHBoYVwiPT09aT90aGlzLl9oc2xhP1wiaHNsYVwiOlwicmdiYVwiOmUsbD10aGlzW29dKCksdT1sW2EuaWR4XTtyZXR1cm5cInVuZGVmaW5lZFwiPT09cj91OihcImZ1bmN0aW9uXCI9PT1yJiYocz1zLmNhbGwodGhpcyx1KSxyPXQudHlwZShzKSksbnVsbD09cyYmYS5lbXB0eT90aGlzOihcInN0cmluZ1wiPT09ciYmKG49aC5leGVjKHMpLG4mJihzPXUrcGFyc2VGbG9hdChuWzJdKSooXCIrXCI9PT1uWzFdPzE6LTEpKSksbFthLmlkeF09cyx0aGlzW29dKGwpKSl9KX0pfSksbShvLGZ1bmN0aW9uKGUsaSl7dC5jc3NIb29rc1tpXT17c2V0OmZ1bmN0aW9uKGUsYSl7dmFyIG4scixvPVwiXCI7aWYoXCJzdHJpbmdcIiE9PXQudHlwZShhKXx8KG49cyhhKSkpe2lmKGE9dShufHxhKSwhcC5yZ2JhJiYxIT09YS5fcmdiYVszXSl7Zm9yKHI9XCJiYWNrZ3JvdW5kQ29sb3JcIj09PWk/ZS5wYXJlbnROb2RlOmU7KFwiXCI9PT1vfHxcInRyYW5zcGFyZW50XCI9PT1vKSYmciYmci5zdHlsZTspdHJ5e289dC5jc3MocixcImJhY2tncm91bmRDb2xvclwiKSxyPXIucGFyZW50Tm9kZX1jYXRjaChoKXt9YT1hLmJsZW5kKG8mJlwidHJhbnNwYXJlbnRcIiE9PW8/bzpcIl9kZWZhdWx0XCIpfWE9YS50b1JnYmFTdHJpbmcoKX10cnl7ZS5zdHlsZVtpXT1hfWNhdGNoKGwpe319fSx0LmZ4LnN0ZXBbaV09ZnVuY3Rpb24oZSl7ZS5jb2xvckluaXR8fChlLnN0YXJ0PXUoZS5lbGVtLGkpLGUuZW5kPXUoZS5lbmQpLGUuY29sb3JJbml0PSEwKSx0LmNzc0hvb2tzW2ldLnNldChlLmVsZW0sZS5zdGFydC50cmFuc2l0aW9uKGUuZW5kLGUucG9zKSl9fSksdC5jc3NIb29rcy5ib3JkZXJDb2xvcj17ZXhwYW5kOmZ1bmN0aW9uKGUpe3ZhciB0PXt9O3JldHVybiBtKFtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxmdW5jdGlvbihpLGEpe3RbXCJib3JkZXJcIithK1wiQ29sb3JcIl09ZX0pLHR9fSxyPXQuQ29sb3IubmFtZXM9e2FxdWE6XCIjMDBmZmZmXCIsYmxhY2s6XCIjMDAwMDAwXCIsYmx1ZTpcIiMwMDAwZmZcIixmdWNoc2lhOlwiI2ZmMDBmZlwiLGdyYXk6XCIjODA4MDgwXCIsZ3JlZW46XCIjMDA4MDAwXCIsbGltZTpcIiMwMGZmMDBcIixtYXJvb246XCIjODAwMDAwXCIsbmF2eTpcIiMwMDAwODBcIixvbGl2ZTpcIiM4MDgwMDBcIixwdXJwbGU6XCIjODAwMDgwXCIscmVkOlwiI2ZmMDAwMFwiLHNpbHZlcjpcIiNjMGMwYzBcIix0ZWFsOlwiIzAwODA4MFwiLHdoaXRlOlwiI2ZmZmZmZlwiLHllbGxvdzpcIiNmZmZmMDBcIix0cmFuc3BhcmVudDpbbnVsbCxudWxsLG51bGwsMF0sX2RlZmF1bHQ6XCIjZmZmZmZmXCJ9fShqUXVlcnkpLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3ZhciB0LGksYT10aGlzLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc/dGhpcy5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcyxudWxsKTp0aGlzLmN1cnJlbnRTdHlsZSxzPXt9O2lmKGEmJmEubGVuZ3RoJiZhWzBdJiZhW2FbMF1dKWZvcihpPWEubGVuZ3RoO2ktLTspdD1hW2ldLFwic3RyaW5nXCI9PXR5cGVvZiBhW3RdJiYoc1tlLmNhbWVsQ2FzZSh0KV09YVt0XSk7ZWxzZSBmb3IodCBpbiBhKVwic3RyaW5nXCI9PXR5cGVvZiBhW3RdJiYoc1t0XT1hW3RdKTtyZXR1cm4gc31mdW5jdGlvbiBhKHQsaSl7dmFyIGEscyxyPXt9O2ZvcihhIGluIGkpcz1pW2FdLHRbYV0hPT1zJiYoblthXXx8KGUuZnguc3RlcFthXXx8IWlzTmFOKHBhcnNlRmxvYXQocykpKSYmKHJbYV09cykpO3JldHVybiByfXZhciBzPVtcImFkZFwiLFwicmVtb3ZlXCIsXCJ0b2dnbGVcIl0sbj17Ym9yZGVyOjEsYm9yZGVyQm90dG9tOjEsYm9yZGVyQ29sb3I6MSxib3JkZXJMZWZ0OjEsYm9yZGVyUmlnaHQ6MSxib3JkZXJUb3A6MSxib3JkZXJXaWR0aDoxLG1hcmdpbjoxLHBhZGRpbmc6MX07ZS5lYWNoKFtcImJvcmRlckxlZnRTdHlsZVwiLFwiYm9yZGVyUmlnaHRTdHlsZVwiLFwiYm9yZGVyQm90dG9tU3R5bGVcIixcImJvcmRlclRvcFN0eWxlXCJdLGZ1bmN0aW9uKHQsaSl7ZS5meC5zdGVwW2ldPWZ1bmN0aW9uKGUpeyhcIm5vbmVcIiE9PWUuZW5kJiYhZS5zZXRBdHRyfHwxPT09ZS5wb3MmJiFlLnNldEF0dHIpJiYoalF1ZXJ5LnN0eWxlKGUuZWxlbSxpLGUuZW5kKSxlLnNldEF0dHI9ITApfX0pLGUuZWZmZWN0cy5hbmltYXRlQ2xhc3M9ZnVuY3Rpb24odCxuLHIsbyl7dmFyIGg9ZS5zcGVlZChuLHIsbyk7cmV0dXJuIHRoaXMucXVldWUoZnVuY3Rpb24oKXt2YXIgbixyPWUodGhpcyksbz1yLmF0dHIoXCJjbGFzc1wiKXx8XCJcIixsPWguY2hpbGRyZW4/ci5maW5kKFwiKlwiKS5hbmRTZWxmKCk6cjtsPWwubWFwKGZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKTtyZXR1cm57ZWw6dCxzdGFydDppLmNhbGwodGhpcyl9fSksbj1mdW5jdGlvbigpe2UuZWFjaChzLGZ1bmN0aW9uKGUsaSl7dFtpXSYmcltpK1wiQ2xhc3NcIl0odFtpXSl9KX0sbigpLGw9bC5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmQ9aS5jYWxsKHRoaXMuZWxbMF0pLHRoaXMuZGlmZj1hKHRoaXMuc3RhcnQsdGhpcy5lbmQpLHRoaXN9KSxyLmF0dHIoXCJjbGFzc1wiLG8pLGw9bC5tYXAoZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9ZS5EZWZlcnJlZCgpLGE9alF1ZXJ5LmV4dGVuZCh7fSxoLHtxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2kucmVzb2x2ZSh0KX19KTtyZXR1cm4gdGhpcy5lbC5hbmltYXRlKHRoaXMuZGlmZixhKSxpLnByb21pc2UoKX0pLGUud2hlbi5hcHBseShlLGwuZ2V0KCkpLmRvbmUoZnVuY3Rpb24oKXtuKCksZS5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbigpe3ZhciB0PXRoaXMuZWw7ZS5lYWNoKHRoaXMuZGlmZixmdW5jdGlvbihlKXt0LmNzcyhlLFwiXCIpfSl9KSxoLmNvbXBsZXRlLmNhbGwoclswXSl9KX0pfSxlLmZuLmV4dGVuZCh7X2FkZENsYXNzOmUuZm4uYWRkQ2xhc3MsYWRkQ2xhc3M6ZnVuY3Rpb24odCxpLGEscyl7cmV0dXJuIGk/ZS5lZmZlY3RzLmFuaW1hdGVDbGFzcy5jYWxsKHRoaXMse2FkZDp0fSxpLGEscyk6dGhpcy5fYWRkQ2xhc3ModCl9LF9yZW1vdmVDbGFzczplLmZuLnJlbW92ZUNsYXNzLHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQsaSxhLHMpe3JldHVybiBpP2UuZWZmZWN0cy5hbmltYXRlQ2xhc3MuY2FsbCh0aGlzLHtyZW1vdmU6dH0saSxhLHMpOnRoaXMuX3JlbW92ZUNsYXNzKHQpfSxfdG9nZ2xlQ2xhc3M6ZS5mbi50b2dnbGVDbGFzcyx0b2dnbGVDbGFzczpmdW5jdGlvbihpLGEscyxuLHIpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYXx8YT09PXQ/cz9lLmVmZmVjdHMuYW5pbWF0ZUNsYXNzLmNhbGwodGhpcyxhP3thZGQ6aX06e3JlbW92ZTppfSxzLG4scik6dGhpcy5fdG9nZ2xlQ2xhc3MoaSxhKTplLmVmZmVjdHMuYW5pbWF0ZUNsYXNzLmNhbGwodGhpcyx7dG9nZ2xlOml9LGEscyxuKX0sc3dpdGNoQ2xhc3M6ZnVuY3Rpb24odCxpLGEscyxuKXtyZXR1cm4gZS5lZmZlY3RzLmFuaW1hdGVDbGFzcy5jYWxsKHRoaXMse2FkZDppLHJlbW92ZTp0fSxhLHMsbil9fSl9KCksZnVuY3Rpb24oKXtmdW5jdGlvbiBzKHQsaSxhLHMpe3JldHVybiBlLmlzUGxhaW5PYmplY3QodCkmJihpPXQsdD10LmVmZmVjdCksdD17ZWZmZWN0OnR9LG51bGw9PWkmJihpPXt9KSxlLmlzRnVuY3Rpb24oaSkmJihzPWksYT1udWxsLGk9e30pLChcIm51bWJlclwiPT10eXBlb2YgaXx8ZS5meC5zcGVlZHNbaV0pJiYocz1hLGE9aSxpPXt9KSxlLmlzRnVuY3Rpb24oYSkmJihzPWEsYT1udWxsKSxpJiZlLmV4dGVuZCh0LGkpLGE9YXx8aS5kdXJhdGlvbix0LmR1cmF0aW9uPWUuZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGE/YTphIGluIGUuZnguc3BlZWRzP2UuZnguc3BlZWRzW2FdOmUuZnguc3BlZWRzLl9kZWZhdWx0LHQuY29tcGxldGU9c3x8aS5jb21wbGV0ZSx0fWZ1bmN0aW9uIG4odCl7cmV0dXJuIXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0fHxlLmZ4LnNwZWVkc1t0XT8hMDpcInN0cmluZ1wiIT10eXBlb2YgdHx8ZS5lZmZlY3RzLmVmZmVjdFt0XT8hMTppJiZlLmVmZmVjdHNbdF0/ITE6ITB9ZS5leHRlbmQoZS5lZmZlY3RzLHt2ZXJzaW9uOlwiMS45LjJcIixzYXZlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBpPTA7dC5sZW5ndGg+aTtpKyspbnVsbCE9PXRbaV0mJmUuZGF0YShhK3RbaV0sZVswXS5zdHlsZVt0W2ldXSl9LHJlc3RvcmU6ZnVuY3Rpb24oZSxpKXt2YXIgcyxuO2ZvcihuPTA7aS5sZW5ndGg+bjtuKyspbnVsbCE9PWlbbl0mJihzPWUuZGF0YShhK2lbbl0pLHM9PT10JiYocz1cIlwiKSxlLmNzcyhpW25dLHMpKX0sc2V0TW9kZTpmdW5jdGlvbihlLHQpe3JldHVyblwidG9nZ2xlXCI9PT10JiYodD1lLmlzKFwiOmhpZGRlblwiKT9cInNob3dcIjpcImhpZGVcIiksdH0sZ2V0QmFzZWxpbmU6ZnVuY3Rpb24oZSx0KXt2YXIgaSxhO3N3aXRjaChlWzBdKXtjYXNlXCJ0b3BcIjppPTA7YnJlYWs7Y2FzZVwibWlkZGxlXCI6aT0uNTticmVhaztjYXNlXCJib3R0b21cIjppPTE7YnJlYWs7ZGVmYXVsdDppPWVbMF0vdC5oZWlnaHR9c3dpdGNoKGVbMV0pe2Nhc2VcImxlZnRcIjphPTA7YnJlYWs7Y2FzZVwiY2VudGVyXCI6YT0uNTticmVhaztjYXNlXCJyaWdodFwiOmE9MTticmVhaztkZWZhdWx0OmE9ZVsxXS90LndpZHRofXJldHVybnt4OmEseTppfX0sY3JlYXRlV3JhcHBlcjpmdW5jdGlvbih0KXtpZih0LnBhcmVudCgpLmlzKFwiLnVpLWVmZmVjdHMtd3JhcHBlclwiKSlyZXR1cm4gdC5wYXJlbnQoKTt2YXIgaT17d2lkdGg6dC5vdXRlcldpZHRoKCEwKSxoZWlnaHQ6dC5vdXRlckhlaWdodCghMCksXCJmbG9hdFwiOnQuY3NzKFwiZmxvYXRcIil9LGE9ZShcIjxkaXY+PC9kaXY+XCIpLmFkZENsYXNzKFwidWktZWZmZWN0cy13cmFwcGVyXCIpLmNzcyh7Zm9udFNpemU6XCIxMDAlXCIsYmFja2dyb3VuZDpcInRyYW5zcGFyZW50XCIsYm9yZGVyOlwibm9uZVwiLG1hcmdpbjowLHBhZGRpbmc6MH0pLHM9e3dpZHRoOnQud2lkdGgoKSxoZWlnaHQ6dC5oZWlnaHQoKX0sbj1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3RyeXtuLmlkfWNhdGNoKHIpe249ZG9jdW1lbnQuYm9keX1yZXR1cm4gdC53cmFwKGEpLCh0WzBdPT09bnx8ZS5jb250YWlucyh0WzBdLG4pKSYmZShuKS5mb2N1cygpLGE9dC5wYXJlbnQoKSxcInN0YXRpY1wiPT09dC5jc3MoXCJwb3NpdGlvblwiKT8oYS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIn0pLHQuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSk6KGUuZXh0ZW5kKGkse3Bvc2l0aW9uOnQuY3NzKFwicG9zaXRpb25cIiksekluZGV4OnQuY3NzKFwiei1pbmRleFwiKX0pLGUuZWFjaChbXCJ0b3BcIixcImxlZnRcIixcImJvdHRvbVwiLFwicmlnaHRcIl0sZnVuY3Rpb24oZSxhKXtpW2FdPXQuY3NzKGEpLGlzTmFOKHBhcnNlSW50KGlbYV0sMTApKSYmKGlbYV09XCJhdXRvXCIpfSksdC5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIix0b3A6MCxsZWZ0OjAscmlnaHQ6XCJhdXRvXCIsYm90dG9tOlwiYXV0b1wifSkpLHQuY3NzKHMpLGEuY3NzKGkpLnNob3coKX0scmVtb3ZlV3JhcHBlcjpmdW5jdGlvbih0KXt2YXIgaT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3JldHVybiB0LnBhcmVudCgpLmlzKFwiLnVpLWVmZmVjdHMtd3JhcHBlclwiKSYmKHQucGFyZW50KCkucmVwbGFjZVdpdGgodCksKHRbMF09PT1pfHxlLmNvbnRhaW5zKHRbMF0saSkpJiZlKGkpLmZvY3VzKCkpLHR9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24odCxpLGEscyl7cmV0dXJuIHM9c3x8e30sZS5lYWNoKGksZnVuY3Rpb24oZSxpKXt2YXIgbj10LmNzc1VuaXQoaSk7blswXT4wJiYoc1tpXT1uWzBdKmErblsxXSl9KSxzfX0pLGUuZm4uZXh0ZW5kKHtlZmZlY3Q6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe2Z1bmN0aW9uIGkoKXtlLmlzRnVuY3Rpb24obikmJm4uY2FsbChzWzBdKSxlLmlzRnVuY3Rpb24odCkmJnQoKX12YXIgcz1lKHRoaXMpLG49YS5jb21wbGV0ZSxyPWEubW9kZTsocy5pcyhcIjpoaWRkZW5cIik/XCJoaWRlXCI9PT1yOlwic2hvd1wiPT09cik/aSgpOm8uY2FsbChzWzBdLGEsaSl9dmFyIGE9cy5hcHBseSh0aGlzLGFyZ3VtZW50cyksbj1hLm1vZGUscj1hLnF1ZXVlLG89ZS5lZmZlY3RzLmVmZmVjdFthLmVmZmVjdF0saD0hbyYmaSYmZS5lZmZlY3RzW2EuZWZmZWN0XTtyZXR1cm4gZS5meC5vZmZ8fCFvJiYhaD9uP3RoaXNbbl0oYS5kdXJhdGlvbixhLmNvbXBsZXRlKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthLmNvbXBsZXRlJiZhLmNvbXBsZXRlLmNhbGwodGhpcyl9KTpvP3I9PT0hMT90aGlzLmVhY2godCk6dGhpcy5xdWV1ZShyfHxcImZ4XCIsdCk6aC5jYWxsKHRoaXMse29wdGlvbnM6YSxkdXJhdGlvbjphLmR1cmF0aW9uLGNhbGxiYWNrOmEuY29tcGxldGUsbW9kZTphLm1vZGV9KX0sX3Nob3c6ZS5mbi5zaG93LHNob3c6ZnVuY3Rpb24oZSl7aWYobihlKSlyZXR1cm4gdGhpcy5fc2hvdy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIHQ9cy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHQubW9kZT1cInNob3dcIix0aGlzLmVmZmVjdC5jYWxsKHRoaXMsdCl9LF9oaWRlOmUuZm4uaGlkZSxoaWRlOmZ1bmN0aW9uKGUpe2lmKG4oZSkpcmV0dXJuIHRoaXMuX2hpZGUuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciB0PXMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0Lm1vZGU9XCJoaWRlXCIsdGhpcy5lZmZlY3QuY2FsbCh0aGlzLHQpfSxfX3RvZ2dsZTplLmZuLnRvZ2dsZSx0b2dnbGU6ZnVuY3Rpb24odCl7aWYobih0KXx8XCJib29sZWFuXCI9PXR5cGVvZiB0fHxlLmlzRnVuY3Rpb24odCkpcmV0dXJuIHRoaXMuX190b2dnbGUuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBpPXMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBpLm1vZGU9XCJ0b2dnbGVcIix0aGlzLmVmZmVjdC5jYWxsKHRoaXMsaSl9LGNzc1VuaXQ6ZnVuY3Rpb24odCl7dmFyIGk9dGhpcy5jc3ModCksYT1bXTtyZXR1cm4gZS5lYWNoKFtcImVtXCIsXCJweFwiLFwiJVwiLFwicHRcIl0sZnVuY3Rpb24oZSx0KXtpLmluZGV4T2YodCk+MCYmKGE9W3BhcnNlRmxvYXQoaSksdF0pfSksYX19KX0oKSxmdW5jdGlvbigpe3ZhciB0PXt9O2UuZWFjaChbXCJRdWFkXCIsXCJDdWJpY1wiLFwiUXVhcnRcIixcIlF1aW50XCIsXCJFeHBvXCJdLGZ1bmN0aW9uKGUsaSl7dFtpXT1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5wb3codCxlKzIpfX0pLGUuZXh0ZW5kKHQse1NpbmU6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtTWF0aC5jb3MoZSpNYXRoLlBJLzIpfSxDaXJjOmZ1bmN0aW9uKGUpe3JldHVybiAxLU1hdGguc3FydCgxLWUqZSl9LEVsYXN0aWM6ZnVuY3Rpb24oZSl7cmV0dXJuIDA9PT1lfHwxPT09ZT9lOi1NYXRoLnBvdygyLDgqKGUtMSkpKk1hdGguc2luKCg4MCooZS0xKS03LjUpKk1hdGguUEkvMTUpfSxCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiBlKmUqKDMqZS0yKX0sQm91bmNlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxpPTQ7KCh0PU1hdGgucG93KDIsLS1pKSktMSkvMTE+ZTspO3JldHVybiAxL01hdGgucG93KDQsMy1pKS03LjU2MjUqTWF0aC5wb3coKDMqdC0yKS8yMi1lLDIpfX0pLGUuZWFjaCh0LGZ1bmN0aW9uKHQsaSl7ZS5lYXNpbmdbXCJlYXNlSW5cIit0XT1pLGUuZWFzaW5nW1wiZWFzZU91dFwiK3RdPWZ1bmN0aW9uKGUpe3JldHVybiAxLWkoMS1lKX0sZS5lYXNpbmdbXCJlYXNlSW5PdXRcIit0XT1mdW5jdGlvbihlKXtyZXR1cm4uNT5lP2koMiplKS8yOjEtaSgtMiplKzIpLzJ9fSl9KCl9KGpRdWVyeSk7XG4iLCIvKiEgQ29weXJpZ2h0IChjKSAyMDExIFBpb3RyIFJvY2hhbGEgKGh0dHA6Ly9yb2NoYS5sYSlcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKiBhbmQgR1BMIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2dwbC1saWNlbnNlLnBocCkgbGljZW5zZXMuXG4gKlxuICogVmVyc2lvbjogMS4zLjFcbiAqXG4gKi9cbihmdW5jdGlvbigkKSB7XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgc2xpbVNjcm9sbDogZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICAgICAgLy8gd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSB2aXNpYmxlIHNjcm9sbCBhcmVhXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxuXG4gICAgICAgIC8vIGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIHZpc2libGUgc2Nyb2xsIGFyZWFcbiAgICAgICAgaGVpZ2h0IDogJzI1MHB4JyxcblxuICAgICAgICAvLyB3aWR0aCBpbiBwaXhlbHMgb2YgdGhlIHNjcm9sbGJhciBhbmQgcmFpbFxuICAgICAgICBzaXplIDogJzdweCcsXG5cbiAgICAgICAgLy8gc2Nyb2xsYmFyIGNvbG9yLCBhY2NlcHRzIGFueSBoZXgvY29sb3IgdmFsdWVcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcblxuICAgICAgICAvLyBzY3JvbGxiYXIgcG9zaXRpb24gLSBsZWZ0L3JpZ2h0XG4gICAgICAgIHBvc2l0aW9uIDogJ3JpZ2h0JyxcblxuICAgICAgICAvLyBkaXN0YW5jZSBpbiBwaXhlbHMgYmV0d2VlbiB0aGUgc2lkZSBlZGdlIGFuZCB0aGUgc2Nyb2xsYmFyXG4gICAgICAgIGRpc3RhbmNlIDogJzFweCcsXG5cbiAgICAgICAgLy8gZGVmYXVsdCBzY3JvbGwgcG9zaXRpb24gb24gbG9hZCAtIHRvcCAvIGJvdHRvbSAvICQoJ3NlbGVjdG9yJylcbiAgICAgICAgc3RhcnQgOiAndG9wJyxcblxuICAgICAgICAvLyBzZXRzIHNjcm9sbGJhciBvcGFjaXR5XG4gICAgICAgIG9wYWNpdHkgOiAuNCxcblxuICAgICAgICAvLyBlbmFibGVzIGFsd2F5cy1vbiBtb2RlIGZvciB0aGUgc2Nyb2xsYmFyXG4gICAgICAgIGFsd2F5c1Zpc2libGUgOiBmYWxzZSxcblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBzaG91bGQgaGlkZSB0aGUgc2Nyb2xsYmFyIHdoZW4gdXNlciBpcyBob3ZlcmluZyBvdmVyXG4gICAgICAgIGRpc2FibGVGYWRlT3V0IDogZmFsc2UsXG5cbiAgICAgICAgLy8gc2V0cyB2aXNpYmlsaXR5IG9mIHRoZSByYWlsXG4gICAgICAgIHJhaWxWaXNpYmxlIDogZmFsc2UsXG5cbiAgICAgICAgLy8gc2V0cyByYWlsIGNvbG9yXG4gICAgICAgIHJhaWxDb2xvciA6ICcjMzMzJyxcblxuICAgICAgICAvLyBzZXRzIHJhaWwgb3BhY2l0eVxuICAgICAgICByYWlsT3BhY2l0eSA6IC4yLFxuXG4gICAgICAgIC8vIHdoZXRoZXIgIHdlIHNob3VsZCB1c2UgalF1ZXJ5IFVJIERyYWdnYWJsZSB0byBlbmFibGUgYmFyIGRyYWdnaW5nXG4gICAgICAgIHJhaWxEcmFnZ2FibGUgOiB0cnVlLFxuXG4gICAgICAgIC8vIGRlZmF1dGx0IENTUyBjbGFzcyBvZiB0aGUgc2xpbXNjcm9sbCByYWlsXG4gICAgICAgIHJhaWxDbGFzcyA6ICdzbGltU2Nyb2xsUmFpbCcsXG5cbiAgICAgICAgLy8gZGVmYXV0bHQgQ1NTIGNsYXNzIG9mIHRoZSBzbGltc2Nyb2xsIGJhclxuICAgICAgICBiYXJDbGFzcyA6ICdzbGltU2Nyb2xsQmFyJyxcblxuICAgICAgICAvLyBkZWZhdXRsdCBDU1MgY2xhc3Mgb2YgdGhlIHNsaW1zY3JvbGwgd3JhcHBlclxuICAgICAgICB3cmFwcGVyQ2xhc3MgOiAnc2xpbVNjcm9sbERpdicsXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgbW91c2V3aGVlbCBzaG91bGQgc2Nyb2xsIHRoZSB3aW5kb3cgaWYgd2UgcmVhY2ggdG9wL2JvdHRvbVxuICAgICAgICBhbGxvd1BhZ2VTY3JvbGwgOiBmYWxzZSxcblxuICAgICAgICAvLyBzY3JvbGwgYW1vdW50IGFwcGxpZWQgdG8gZWFjaCBtb3VzZSB3aGVlbCBzdGVwXG4gICAgICAgIHdoZWVsU3RlcCA6IDIwLFxuXG4gICAgICAgIC8vIHNjcm9sbCBhbW91bnQgYXBwbGllZCB3aGVuIHVzZXIgaXMgdXNpbmcgZ2VzdHVyZXNcbiAgICAgICAgdG91Y2hTY3JvbGxTdGVwIDogMjAwLFxuXG4gICAgICAgIC8vIHNldHMgYm9yZGVyIHJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnLFxuXG4gICAgICAgIC8vIHNldHMgYm9yZGVyIHJhZGl1cyBvZiB0aGUgcmFpbFxuICAgICAgICByYWlsQm9yZGVyUmFkaXVzIDogJzdweCdcbiAgICAgIH07XG5cbiAgICAgIHZhciBvID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBkbyBpdCBmb3IgZXZlcnkgZWxlbWVudCB0aGF0IG1hdGNoZXMgc2VsZWN0b3JcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgICB2YXIgaXNPdmVyUGFuZWwsIGlzT3ZlckJhciwgaXNEcmFnZywgcXVldWVIaWRlLCB0b3VjaERpZixcbiAgICAgICAgYmFySGVpZ2h0LCBwZXJjZW50U2Nyb2xsLCBsYXN0U2Nyb2xsLFxuICAgICAgICBkaXZTID0gJzxkaXY+PC9kaXY+JyxcbiAgICAgICAgbWluQmFySGVpZ2h0ID0gMzAsXG4gICAgICAgIHJlbGVhc2VTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgICAvLyB1c2VkIGluIGV2ZW50IGhhbmRsZXJzIGFuZCBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xuXG4gICAgICAgIC8vIGVuc3VyZSB3ZSBhcmUgbm90IGJpbmRpbmcgaXQgYWdhaW5cbiAgICAgICAgaWYgKG1lLnBhcmVudCgpLmhhc0NsYXNzKG8ud3JhcHBlckNsYXNzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gc3RhcnQgZnJvbSBsYXN0IGJhciBwb3NpdGlvblxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IG1lLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICAvLyBmaW5kIGJhciBhbmQgcmFpbFxuICAgICAgICAgICAgYmFyID0gbWUucGFyZW50KCkuZmluZCgnLicgKyBvLmJhckNsYXNzKTtcbiAgICAgICAgICAgIHJhaWwgPSBtZS5wYXJlbnQoKS5maW5kKCcuJyArIG8ucmFpbENsYXNzKTtcblxuICAgICAgICAgICAgZ2V0QmFySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIHNob3VsZCBzY3JvbGwgZXhpc3RpbmcgaW5zdGFuY2VcbiAgICAgICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIFBhc3MgaGVpZ2h0OiBhdXRvIHRvIGFuIGV4aXN0aW5nIHNsaW1zY3JvbGwgb2JqZWN0IHRvIGZvcmNlIGEgcmVzaXplIGFmdGVyIGNvbnRlbnRzIGhhdmUgY2hhbmdlZFxuICAgICAgICAgICAgICBpZiAoICdoZWlnaHQnIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5oZWlnaHQgPT0gJ2F1dG8nICkge1xuICAgICAgICAgICAgICAgIG1lLnBhcmVudCgpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICBtZS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IG1lLnBhcmVudCgpLnBhcmVudCgpLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIG1lLnBhcmVudCgpLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBtZS5jc3MoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoJ3Njcm9sbFRvJyBpbiBvcHRpb25zKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8ganVtcCB0byBhIHN0YXRpYyBwb2ludFxuICAgICAgICAgICAgICAgIG9mZnNldCA9IHBhcnNlSW50KG8uc2Nyb2xsVG8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCdzY3JvbGxCeScgaW4gb3B0aW9ucylcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGp1bXAgYnkgdmFsdWUgcGl4ZWxzXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHBhcnNlSW50KG8uc2Nyb2xsQnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCdkZXN0cm95JyBpbiBvcHRpb25zKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHNsaW1zY3JvbGwgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmFpbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBtZS51bndyYXAoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBzY3JvbGwgY29udGVudCBieSB0aGUgZ2l2ZW4gb2Zmc2V0XG4gICAgICAgICAgICAgIHNjcm9sbENvbnRlbnQob2Zmc2V0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9wdGlvbmFsbHkgc2V0IGhlaWdodCB0byB0aGUgcGFyZW50J3MgaGVpZ2h0XG4gICAgICAgIG8uaGVpZ2h0ID0gKG8uaGVpZ2h0ID09ICdhdXRvJykgPyBtZS5wYXJlbnQoKS5oZWlnaHQoKSA6IG8uaGVpZ2h0O1xuXG4gICAgICAgIC8vIHdyYXAgY29udGVudFxuICAgICAgICB2YXIgd3JhcHBlciA9ICQoZGl2UylcbiAgICAgICAgICAuYWRkQ2xhc3Moby53cmFwcGVyQ2xhc3MpXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHdpZHRoOiBvLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBvLmhlaWdodFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBzdHlsZSBmb3IgdGhlIGRpdlxuICAgICAgICBtZS5jc3Moe1xuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICB3aWR0aDogby53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG8uaGVpZ2h0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBzY3JvbGxiYXIgcmFpbFxuICAgICAgICB2YXIgcmFpbCA9ICQoZGl2UylcbiAgICAgICAgICAuYWRkQ2xhc3Moby5yYWlsQ2xhc3MpXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogby5zaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6IChvLmFsd2F5c1Zpc2libGUgJiYgby5yYWlsVmlzaWJsZSkgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBvLnJhaWxCb3JkZXJSYWRpdXMsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBvLnJhaWxDb2xvcixcbiAgICAgICAgICAgIG9wYWNpdHk6IG8ucmFpbE9wYWNpdHksXG4gICAgICAgICAgICB6SW5kZXg6IDkwXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHNjcm9sbGJhclxuICAgICAgICB2YXIgYmFyID0gJChkaXZTKVxuICAgICAgICAgIC5hZGRDbGFzcyhvLmJhckNsYXNzKVxuICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogby5jb2xvcixcbiAgICAgICAgICAgIHdpZHRoOiBvLnNpemUsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IG8ub3BhY2l0eSxcbiAgICAgICAgICAgIGRpc3BsYXk6IG8uYWx3YXlzVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgICAnYm9yZGVyLXJhZGl1cycgOiBvLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgIEJvcmRlclJhZGl1czogby5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICBNb3pCb3JkZXJSYWRpdXM6IG8uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgV2Via2l0Qm9yZGVyUmFkaXVzOiBvLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgIHpJbmRleDogOTlcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZXQgcG9zaXRpb25cbiAgICAgICAgdmFyIHBvc0NzcyA9IChvLnBvc2l0aW9uID09ICdyaWdodCcpID8geyByaWdodDogby5kaXN0YW5jZSB9IDogeyBsZWZ0OiBvLmRpc3RhbmNlIH07XG4gICAgICAgIHJhaWwuY3NzKHBvc0Nzcyk7XG4gICAgICAgIGJhci5jc3MocG9zQ3NzKTtcblxuICAgICAgICAvLyB3cmFwIGl0XG4gICAgICAgIG1lLndyYXAod3JhcHBlcik7XG5cbiAgICAgICAgLy8gYXBwZW5kIHRvIHBhcmVudCBkaXZcbiAgICAgICAgbWUucGFyZW50KCkuYXBwZW5kKGJhcik7XG4gICAgICAgIG1lLnBhcmVudCgpLmFwcGVuZChyYWlsKTtcblxuICAgICAgICAvLyBtYWtlIGl0IGRyYWdnYWJsZSBhbmQgbm8gbG9uZ2VyIGRlcGVuZGVudCBvbiB0aGUganF1ZXJ5VUlcbiAgICAgICAgaWYgKG8ucmFpbERyYWdnYWJsZSl7XG4gICAgICAgICAgYmFyLmJpbmQoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICAgICAgICAgIGlzRHJhZ2cgPSB0cnVlO1xuICAgICAgICAgICAgdCA9IHBhcnNlRmxvYXQoYmFyLmNzcygndG9wJykpO1xuICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZO1xuXG4gICAgICAgICAgICAkZG9jLmJpbmQoXCJtb3VzZW1vdmUuc2xpbXNjcm9sbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgY3VyclRvcCA9IHQgKyBlLnBhZ2VZIC0gcGFnZVk7XG4gICAgICAgICAgICAgIGJhci5jc3MoJ3RvcCcsIGN1cnJUb3ApO1xuICAgICAgICAgICAgICBzY3JvbGxDb250ZW50KDAsIGJhci5wb3NpdGlvbigpLnRvcCwgZmFsc2UpOy8vIHNjcm9sbCBjb250ZW50XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGRvYy5iaW5kKFwibW91c2V1cC5zbGltc2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgaXNEcmFnZyA9IGZhbHNlO2hpZGVCYXIoKTtcbiAgICAgICAgICAgICAgJGRvYy51bmJpbmQoJy5zbGltc2Nyb2xsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KS5iaW5kKFwic2VsZWN0c3RhcnQuc2xpbXNjcm9sbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbiByYWlsIG92ZXJcbiAgICAgICAgcmFpbC5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgIHNob3dCYXIoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICBoaWRlQmFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG9uIGJhciBvdmVyXG4gICAgICAgIGJhci5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgIGlzT3ZlckJhciA9IHRydWU7XG4gICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaXNPdmVyQmFyID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNob3cgb24gcGFyZW50IG1vdXNlb3ZlclxuICAgICAgICBtZS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgIGlzT3ZlclBhbmVsID0gdHJ1ZTtcbiAgICAgICAgICBzaG93QmFyKCk7XG4gICAgICAgICAgaGlkZUJhcigpO1xuICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgIGlzT3ZlclBhbmVsID0gZmFsc2U7XG4gICAgICAgICAgaGlkZUJhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBtb2JpbGVcbiAgICAgICAgbWUuYmluZCgndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUsYil7XG4gICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyByZWNvcmQgd2hlcmUgdG91Y2ggc3RhcnRlZFxuICAgICAgICAgICAgdG91Y2hEaWYgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmJpbmQoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIC8vIHByZXZlbnQgc2Nyb2xsaW5nIHRoZSBwYWdlIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmKCFyZWxlYXNlU2Nyb2xsKVxuICAgICAgICAgIHtcbiAgXHRcdCAgICAgIGUub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCAgICAgIH1cbiAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHNlZSBob3cgZmFyIHVzZXIgc3dpcGVkXG4gICAgICAgICAgICB2YXIgZGlmZiA9ICh0b3VjaERpZiAtIGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZKSAvIG8udG91Y2hTY3JvbGxTdGVwO1xuICAgICAgICAgICAgLy8gc2Nyb2xsIGNvbnRlbnRcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQoZGlmZiwgdHJ1ZSk7XG4gICAgICAgICAgICB0b3VjaERpZiA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc2V0IHVwIGluaXRpYWwgaGVpZ2h0XG4gICAgICAgIGdldEJhckhlaWdodCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIHN0YXJ0IHBvc2l0aW9uXG4gICAgICAgIGlmIChvLnN0YXJ0ID09PSAnYm90dG9tJylcbiAgICAgICAge1xuICAgICAgICAgIC8vIHNjcm9sbCBjb250ZW50IHRvIGJvdHRvbVxuICAgICAgICAgIGJhci5jc3MoeyB0b3A6IG1lLm91dGVySGVpZ2h0KCkgLSBiYXIub3V0ZXJIZWlnaHQoKSB9KTtcbiAgICAgICAgICBzY3JvbGxDb250ZW50KDAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG8uc3RhcnQgIT09ICd0b3AnKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gYXNzdW1lIGpRdWVyeSBzZWxlY3RvclxuICAgICAgICAgIHNjcm9sbENvbnRlbnQoJChvLnN0YXJ0KS5wb3NpdGlvbigpLnRvcCwgbnVsbCwgdHJ1ZSk7XG5cbiAgICAgICAgICAvLyBtYWtlIHN1cmUgYmFyIHN0YXlzIGhpZGRlblxuICAgICAgICAgIGlmICghby5hbHdheXNWaXNpYmxlKSB7IGJhci5oaWRlKCk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0dGFjaCBzY3JvbGwgZXZlbnRzXG4gICAgICAgIGF0dGFjaFdoZWVsKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gX29uV2hlZWwoZSlcbiAgICAgICAge1xuICAgICAgICAgIC8vIHVzZSBtb3VzZSB3aGVlbCBvbmx5IHdoZW4gbW91c2UgaXMgb3ZlclxuICAgICAgICAgIGlmICghaXNPdmVyUGFuZWwpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICB2YXIgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgICAgICBpZiAoZS53aGVlbERlbHRhKSB7IGRlbHRhID0gLWUud2hlZWxEZWx0YS8xMjA7IH1cbiAgICAgICAgICBpZiAoZS5kZXRhaWwpIHsgZGVsdGEgPSBlLmRldGFpbCAvIDM7IH1cblxuICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY1RhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgICAgaWYgKCQodGFyZ2V0KS5jbG9zZXN0KCcuJyArIG8ud3JhcHBlckNsYXNzKS5pcyhtZS5wYXJlbnQoKSkpIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCBjb250ZW50XG4gICAgICAgICAgICBzY3JvbGxDb250ZW50KGRlbHRhLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzdG9wIHdpbmRvdyBzY3JvbGxcbiAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCAmJiAhcmVsZWFzZVNjcm9sbCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICAgICAgICBpZiAoIXJlbGVhc2VTY3JvbGwpIHsgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxDb250ZW50KHksIGlzV2hlZWwsIGlzSnVtcClcbiAgICAgICAge1xuICAgICAgICAgIHJlbGVhc2VTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgZGVsdGEgPSB5O1xuICAgICAgICAgIHZhciBtYXhUb3AgPSBtZS5vdXRlckhlaWdodCgpIC0gYmFyLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICBpZiAoaXNXaGVlbClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBtb3ZlIGJhciB3aXRoIG1vdXNlIHdoZWVsXG4gICAgICAgICAgICBkZWx0YSA9IHBhcnNlSW50KGJhci5jc3MoJ3RvcCcpKSArIHkgKiBwYXJzZUludChvLndoZWVsU3RlcCkgLyAxMDAgKiBiYXIub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgLy8gbW92ZSBiYXIsIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG91dFxuICAgICAgICAgICAgZGVsdGEgPSBNYXRoLm1pbihNYXRoLm1heChkZWx0YSwgMCksIG1heFRvcCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHNjcm9sbGluZyBkb3duLCBtYWtlIHN1cmUgYSBmcmFjdGlvbmFsIGNoYW5nZSB0byB0aGVcbiAgICAgICAgICAgIC8vIHNjcm9sbCBwb3NpdGlvbiBpc24ndCByb3VuZGVkIGF3YXkgd2hlbiB0aGUgc2Nyb2xsYmFyJ3MgQ1NTIGlzIHNldFxuICAgICAgICAgICAgLy8gdGhpcyBmbG9vcmluZyBvZiBkZWx0YSB3b3VsZCBoYXBwZW5lZCBhdXRvbWF0aWNhbGx5IHdoZW5cbiAgICAgICAgICAgIC8vIGJhci5jc3MgaXMgc2V0IGJlbG93LCBidXQgd2UgZmxvb3IgaGVyZSBmb3IgY2xhcml0eVxuICAgICAgICAgICAgZGVsdGEgPSAoeSA+IDApID8gTWF0aC5jZWlsKGRlbHRhKSA6IE1hdGguZmxvb3IoZGVsdGEpO1xuXG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhlIHNjcm9sbGJhclxuICAgICAgICAgICAgYmFyLmNzcyh7IHRvcDogZGVsdGEgKyAncHgnIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhbGN1bGF0ZSBhY3R1YWwgc2Nyb2xsIGFtb3VudFxuICAgICAgICAgIHBlcmNlbnRTY3JvbGwgPSBwYXJzZUludChiYXIuY3NzKCd0b3AnKSkgLyAobWUub3V0ZXJIZWlnaHQoKSAtIGJhci5vdXRlckhlaWdodCgpKTtcbiAgICAgICAgICBkZWx0YSA9IHBlcmNlbnRTY3JvbGwgKiAobWVbMF0uc2Nyb2xsSGVpZ2h0IC0gbWUub3V0ZXJIZWlnaHQoKSk7XG5cbiAgICAgICAgICBpZiAoaXNKdW1wKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRlbHRhID0geTtcbiAgICAgICAgICAgIHZhciBvZmZzZXRUb3AgPSBkZWx0YSAvIG1lWzBdLnNjcm9sbEhlaWdodCAqIG1lLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBvZmZzZXRUb3AgPSBNYXRoLm1pbihNYXRoLm1heChvZmZzZXRUb3AsIDApLCBtYXhUb3ApO1xuICAgICAgICAgICAgYmFyLmNzcyh7IHRvcDogb2Zmc2V0VG9wICsgJ3B4JyB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzY3JvbGwgY29udGVudFxuICAgICAgICAgIG1lLnNjcm9sbFRvcChkZWx0YSk7XG5cbiAgICAgICAgICAvLyBmaXJlIHNjcm9sbGluZyBldmVudFxuICAgICAgICAgIG1lLnRyaWdnZXIoJ3NsaW1zY3JvbGxpbmcnLCB+fmRlbHRhKTtcblxuICAgICAgICAgIC8vIGVuc3VyZSBiYXIgaXMgdmlzaWJsZVxuICAgICAgICAgIHNob3dCYXIoKTtcblxuICAgICAgICAgIC8vIHRyaWdnZXIgaGlkZSB3aGVuIHNjcm9sbCBpcyBzdG9wcGVkXG4gICAgICAgICAgaGlkZUJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoV2hlZWwoKVxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBfb25XaGVlbCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIF9vbldoZWVsLCBmYWxzZSApO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgX29uV2hlZWwsIGZhbHNlICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ubW91c2V3aGVlbFwiLCBfb25XaGVlbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRCYXJIZWlnaHQoKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHNjcm9sbGJhciBoZWlnaHQgYW5kIG1ha2Ugc3VyZSBpdCBpcyBub3QgdG9vIHNtYWxsXG4gICAgICAgICAgYmFySGVpZ2h0ID0gTWF0aC5tYXgoKG1lLm91dGVySGVpZ2h0KCkgLyBtZVswXS5zY3JvbGxIZWlnaHQpICogbWUub3V0ZXJIZWlnaHQoKSwgbWluQmFySGVpZ2h0KTtcbiAgICAgICAgICBiYXIuY3NzKHsgaGVpZ2h0OiBiYXJIZWlnaHQgKyAncHgnIH0pO1xuXG4gICAgICAgICAgLy8gaGlkZSBzY3JvbGxiYXIgaWYgY29udGVudCBpcyBub3QgbG9uZyBlbm91Z2hcbiAgICAgICAgICB2YXIgZGlzcGxheSA9IGJhckhlaWdodCA9PSBtZS5vdXRlckhlaWdodCgpID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgICBiYXIuY3NzKHsgZGlzcGxheTogZGlzcGxheSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNob3dCYXIoKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gcmVjYWxjdWxhdGUgYmFyIGhlaWdodFxuICAgICAgICAgIGdldEJhckhlaWdodCgpO1xuICAgICAgICAgIGNsZWFyVGltZW91dChxdWV1ZUhpZGUpO1xuXG4gICAgICAgICAgLy8gd2hlbiBiYXIgcmVhY2hlZCB0b3Agb3IgYm90dG9tXG4gICAgICAgICAgaWYgKHBlcmNlbnRTY3JvbGwgPT0gfn5wZXJjZW50U2Nyb2xsKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vcmVsZWFzZSB3aGVlbFxuICAgICAgICAgICAgcmVsZWFzZVNjcm9sbCA9IG8uYWxsb3dQYWdlU2Nyb2xsO1xuXG4gICAgICAgICAgICAvLyBwdWJsaXNoIGFwcHJvcG9yaWF0ZSBldmVudFxuICAgICAgICAgICAgaWYgKGxhc3RTY3JvbGwgIT0gcGVyY2VudFNjcm9sbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gKH5+cGVyY2VudFNjcm9sbCA9PSAwKSA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgbWUudHJpZ2dlcignc2xpbXNjcm9sbCcsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWxlYXNlU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3RTY3JvbGwgPSBwZXJjZW50U2Nyb2xsO1xuXG4gICAgICAgICAgLy8gc2hvdyBvbmx5IHdoZW4gcmVxdWlyZWRcbiAgICAgICAgICBpZihiYXJIZWlnaHQgPj0gbWUub3V0ZXJIZWlnaHQoKSkge1xuICAgICAgICAgICAgLy9hbGxvdyB3aW5kb3cgc2Nyb2xsXG4gICAgICAgICAgICByZWxlYXNlU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmFyLnN0b3AodHJ1ZSx0cnVlKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICAgICAgICBpZiAoby5yYWlsVmlzaWJsZSkgeyByYWlsLnN0b3AodHJ1ZSx0cnVlKS5mYWRlSW4oJ2Zhc3QnKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGlkZUJhcigpXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBvbmx5IGhpZGUgd2hlbiBvcHRpb25zIGFsbG93IGl0XG4gICAgICAgICAgaWYgKCFvLmFsd2F5c1Zpc2libGUpXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVldWVIaWRlID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBpZiAoIShvLmRpc2FibGVGYWRlT3V0ICYmIGlzT3ZlclBhbmVsKSAmJiAhaXNPdmVyQmFyICYmICFpc0RyYWdnKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmFyLmZhZGVPdXQoJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgICByYWlsLmZhZGVPdXQoJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyBtYWludGFpbiBjaGFpbmFiaWxpdHlcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgc2xpbXNjcm9sbDogalF1ZXJ5LmZuLnNsaW1TY3JvbGxcbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIvKipcclxuICogZnVsbFBhZ2UgMi4wLjdcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzXHJcbiAqIE1JVCBsaWNlbnNlZFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTMgYWx2YXJvdHJpZ28uY29tIC0gQSBwcm9qZWN0IGJ5IEFsdmFybyBUcmlnb1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblx0JC5mbi5mdWxscGFnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdC8vIENyZWF0ZSBzb21lIGRlZmF1bHRzLCBleHRlbmRpbmcgdGhlbSB3aXRoIGFueSBvcHRpb25zIHRoYXQgd2VyZSBwcm92aWRlZFxyXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0XCJ2ZXJ0aWNhbENlbnRlcmVkXCIgOiB0cnVlLFxyXG5cdFx0XHQncmVzaXplJyA6IHRydWUsXHJcblx0XHRcdCdzbGlkZXNDb2xvcicgOiBbXSxcclxuXHRcdFx0J2FuY2hvcnMnOltdLFxyXG5cdFx0XHQnc2Nyb2xsaW5nU3BlZWQnOiA3MDAsXHJcblx0XHRcdCdlYXNpbmcnOiAnZWFzZUluUXVhcnQnLFxyXG5cdFx0XHQnbWVudSc6IGZhbHNlLFxyXG5cdFx0XHQnbmF2aWdhdGlvbic6IGZhbHNlLFxyXG5cdFx0XHQnbmF2aWdhdGlvblBvc2l0aW9uJzogJ3JpZ2h0JyxcclxuXHRcdFx0J25hdmlnYXRpb25Db2xvcic6ICcjMDAwJyxcclxuXHRcdFx0J25hdmlnYXRpb25Ub29sdGlwcyc6IFtdLFxyXG5cdFx0XHQnc2xpZGVzTmF2aWdhdGlvbic6IGZhbHNlLFxyXG5cdFx0XHQnc2xpZGVzTmF2UG9zaXRpb24nOiAnYm90dG9tJyxcclxuXHRcdFx0J2NvbnRyb2xBcnJvd0NvbG9yJzogJyNmZmYnLFxyXG5cdFx0XHQnbG9vcEJvdHRvbSc6IGZhbHNlLFxyXG5cdFx0XHQnbG9vcFRvcCc6IGZhbHNlLFxyXG5cdFx0XHQnbG9vcEhvcml6b250YWwnOiB0cnVlLFxyXG5cdFx0XHQnYXV0b1Njcm9sbGluZyc6IHRydWUsXHJcblx0XHRcdCdzY3JvbGxPdmVyZmxvdyc6IGZhbHNlLFxyXG5cdFx0XHQnY3NzMyc6IGZhbHNlLFxyXG5cdFx0XHQncGFkZGluZ1RvcCc6IDAsXHJcblx0XHRcdCdwYWRkaW5nQm90dG9tJzogMCxcclxuXHRcdFx0J2ZpeGVkRWxlbWVudHMnOiBudWxsLFxyXG5cdFx0XHQnbm9ybWFsU2Nyb2xsRWxlbWVudHMnOiBudWxsLCBcclxuXHRcdFx0J2tleWJvYXJkU2Nyb2xsaW5nJzogdHJ1ZSxcclxuXHRcdFx0J3RvdWNoU2Vuc2l0aXZpdHknOiA1LFxyXG5cdFx0XHQnY29udGludW91c1ZlcnRpY2FsJzogZmFsc2UsXHJcblx0XHRcdCdhbmltYXRlQW5jaG9yJzogdHJ1ZSxcclxuXHRcdFx0J25vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZCc6IDUsXHJcblxyXG5cdFx0XHQvL2V2ZW50c1xyXG5cdFx0XHQnYWZ0ZXJMb2FkJzogbnVsbCxcclxuXHRcdFx0J29uTGVhdmUnOiBudWxsLFxyXG5cdFx0XHQnYWZ0ZXJSZW5kZXInOiBudWxsLFxyXG5cdFx0XHQnYWZ0ZXJSZXNpemUnOiBudWxsLFxyXG5cdFx0XHQnYWZ0ZXJTbGlkZUxvYWQnOiBudWxsLFxyXG5cdFx0XHQnb25TbGlkZUxlYXZlJzogbnVsbFxyXG5cdFx0fSwgb3B0aW9ucyk7XHRcdFxyXG5cdFx0XHJcblx0ICAgIC8vIERpc2FibGUgbXV0dWFsbHkgZXhjbHVzaXZlIHNldHRpbmdzXHJcblx0XHRpZiAob3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiZcclxuXHRcdFx0KG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmxvb3BCb3R0b20pKSB7XHJcblx0XHQgICAgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgPSBmYWxzZTtcclxuXHRcdCAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nICYmIGNvbnNvbGUubG9nKFwiT3B0aW9uIGxvb3BUb3AvbG9vcEJvdHRvbSBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBjb250aW51b3VzVmVydGljYWw7IGNvbnRpbnVvdXNWZXJ0aWNhbCBkaXNhYmxlZFwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9EZWZpbmVzIHRoZSBkZWxheSB0byB0YWtlIHBsYWNlIGJlZm9yZSBiZWluZyBhYmxlIHRvIHNjcm9sbCB0byB0aGUgbmV4dCBzZWN0aW9uXHJcblx0XHQvL0JFIENBUkVGVUwhIE5vdCByZWNvbW1lbmVkIHRvIGNoYW5nZSBpdCB1bmRlciA0MDAgZm9yIGEgZ29vZCBiZWhhdmlvciBpbiBsYXB0b3BzIGFuZCBcclxuXHRcdC8vQXBwbGUgZGV2aWNlcyAobGFwdG9wcywgbW91c2VzLi4uKVxyXG5cdFx0dmFyIHNjcm9sbERlbGF5ID0gNjAwO1xyXG5cdFx0XHJcblx0XHQkLmZuLmZ1bGxwYWdlLnNldEF1dG9TY3JvbGxpbmcgPSBmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRcdG9wdGlvbnMuYXV0b1Njcm9sbGluZyA9IHZhbHVlO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGVsZW1lbnQgPSAkKCcuc2VjdGlvbi5hY3RpdmUnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuXHRcdFx0XHQkKCdodG1sLCBib2R5JykuY3NzKHtcclxuXHRcdFx0XHRcdCdvdmVyZmxvdycgOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdCdoZWlnaHQnIDogJzEwMCUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoZWxlbWVudC5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0Ly9tb3ZpbmcgdGhlIGNvbnRhaW5lciB1cFxyXG5cdFx0XHRcdFx0c2lsZW50U2Nyb2xsKGVsZW1lbnQucG9zaXRpb24oKS50b3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQkKCdodG1sLCBib2R5JykuY3NzKHtcclxuXHRcdFx0XHRcdCdvdmVyZmxvdycgOiAnYXV0bycsXHJcblx0XHRcdFx0XHQnaGVpZ2h0JyA6ICdhdXRvJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNpbGVudFNjcm9sbCgwKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Njcm9sbGluZyB0aGUgcGFnZSB0byB0aGUgc2VjdGlvbiB3aXRoIG5vIGFuaW1hdGlvblxyXG5cdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3AoZWxlbWVudC5wb3NpdGlvbigpLnRvcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0KiBEZWZpbmVzIHRoZSBzY3JvbGxpbmcgc3BlZWQgXHJcblx0XHQqL1xyXG5cdFx0JC5mbi5mdWxscGFnZS5zZXRTY3JvbGxpbmdTcGVlZCA9IGZ1bmN0aW9uKHZhbHVlKXtcclxuXHRcdCAgIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQgPSB2YWx1ZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0KiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2libGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUgbW91c2Ugd2hlZWwgb3IgdGhlIHRyYWNrcGFkLiBcclxuXHRcdCovXHJcblx0XHQkLmZuLmZ1bGxwYWdlLnNldE1vdXNlV2hlZWxTY3JvbGxpbmcgPSBmdW5jdGlvbiAodmFsdWUpe1xyXG5cdFx0XHRpZih2YWx1ZSl7XHJcblx0XHRcdFx0YWRkTW91c2VXaGVlbEhhbmRsZXIoKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmVtb3ZlTW91c2VXaGVlbEhhbmRsZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbC90cmFja3BhZCBvciB0b3VjaCBnZXN0dXJlcy4gXHJcblx0XHQqL1xyXG5cdFx0JC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyA9IGZ1bmN0aW9uICh2YWx1ZSl7XHJcblx0XHRcdGlmKHZhbHVlKXtcclxuXHRcdFx0XHQkLmZuLmZ1bGxwYWdlLnNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcblx0XHRcdFx0YWRkVG91Y2hIYW5kbGVyKCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCQuZm4uZnVsbHBhZ2Uuc2V0TW91c2VXaGVlbFNjcm9sbGluZyhmYWxzZSk7XHJcblx0XHRcdFx0cmVtb3ZlVG91Y2hIYW5kbGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0KiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2libGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUga2V5Ym9hcmQgYXJyb3cga2V5c1xyXG5cdFx0Ki9cclxuXHRcdCQuZm4uZnVsbHBhZ2Uuc2V0S2V5Ym9hcmRTY3JvbGxpbmcgPSBmdW5jdGlvbiAodmFsdWUpe1xyXG5cdFx0XHRvcHRpb25zLmtleWJvYXJkU2Nyb2xsaW5nID0gdmFsdWU7XHJcblx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdC8vZmxhZyB0byBhdm9pZCB2ZXJ5IGZhc3Qgc2xpZGluZyBmb3IgbGFuZHNjYXBlIHNsaWRlcnNcclxuXHRcdHZhciBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG5cclxuXHRcdHZhciBpc1RhYmxldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxXaW5kb3dzIFBob25lKS8pO1xyXG5cdFx0dmFyIGNvbnRhaW5lciA9ICQodGhpcyk7IC8vIGZvciBjb21wYXRpYml0eSByZWFzb25zIGZvciBmdWxscGFnZSA8IHYyLjBcclxuXHRcdHZhciB3aW5kb3dzSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cdFx0dmFyIGlzTW92aW5nID0gZmFsc2U7XHJcblx0XHR2YXIgaXNSZXNpemluZyA9IGZhbHNlO1xyXG5cdFx0dmFyIGxhc3RTY3JvbGxlZERlc3Rpbnk7XHJcblx0XHR2YXIgbGFzdFNjcm9sbGVkU2xpZGU7XHJcblxyXG5cdFx0JC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcclxuXHRcdFxyXG5cdFx0Ly9pZiBjc3MzIGlzIG5vdCBzdXBwb3J0ZWQsIGl0IHdpbGwgdXNlIGpRdWVyeSBhbmltYXRpb25zXHJcblx0XHRpZihvcHRpb25zLmNzczMpe1xyXG5cdFx0XHRvcHRpb25zLmNzczMgPSBzdXBwb3J0M2QoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZigkKHRoaXMpLmxlbmd0aCl7XHJcblx0XHRcdGNvbnRhaW5lci5jc3Moe1xyXG5cdFx0XHRcdCdoZWlnaHQnOiAnMTAwJScsXHJcblx0XHRcdFx0J3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcclxuXHRcdFx0XHQnLW1zLXRvdWNoLWFjdGlvbic6ICdub25lJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvL2ZvciBjb21wYXRpYml0eSByZWFzb25zIGZvciBmdWxscGFnZSA8IHYyLjAgXHJcblx0XHRlbHNle1xyXG5cdFx0XHQkKCdib2R5Jykud3JhcElubmVyKCc8ZGl2IGlkPVwic3VwZXJDb250YWluZXJcIiAvPicpO1xyXG5cdFx0XHRjb250YWluZXIgPSAkKCcjc3VwZXJDb250YWluZXInKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL2NyZWF0aW5nIHRoZSBuYXZpZ2F0aW9uIGRvdHMgXHJcblx0XHRpZiAob3B0aW9ucy5uYXZpZ2F0aW9uKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJmdWxsUGFnZS1uYXZcIj48dWw+PC91bD48L2Rpdj4nKTtcclxuXHRcdFx0dmFyIG5hdiA9ICQoJyNmdWxsUGFnZS1uYXYnKTtcclxuXHJcblx0XHRcdG5hdi5jc3MoJ2NvbG9yJywgb3B0aW9ucy5uYXZpZ2F0aW9uQ29sb3IpO1xyXG5cdFx0XHRuYXYuYWRkQ2xhc3Mob3B0aW9ucy5uYXZpZ2F0aW9uUG9zaXRpb24pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQkKCcuc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0XHR2YXIgdGhhdCA9ICQodGhpcyk7XHJcblx0XHRcdHZhciBzbGlkZXMgPSAkKHRoaXMpLmZpbmQoJy5zbGlkZScpO1xyXG5cdFx0XHR2YXIgbnVtU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuXHRcdFx0XHJcblx0XHRcdC8vaWYgbm8gYWN0aXZlIHNlY3Rpb24gaXMgZGVmaW5lZCwgdGhlIDFzdCBvbmUgd2lsbCBiZSB0aGUgZGVmYXVsdCBvbmVcclxuXHRcdFx0aWYoIWluZGV4ICYmICQoJy5zZWN0aW9uLmFjdGl2ZScpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKHRoaXMpLmNzcygnaGVpZ2h0Jywgd2luZG93c0hlaWdodCArICdweCcpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYob3B0aW9ucy5wYWRkaW5nVG9wIHx8IG9wdGlvbnMucGFkZGluZ0JvdHRvbSl7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ3BhZGRpbmcnLCBvcHRpb25zLnBhZGRpbmdUb3AgICsgJyAwICcgKyBvcHRpb25zLnBhZGRpbmdCb3R0b20gKyAnIDAnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zLnNsaWRlc0NvbG9yW2luZGV4XSAhPT0gICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBvcHRpb25zLnNsaWRlc0NvbG9yW2luZGV4XSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5hbmNob3JzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2RhdGEtYW5jaG9yJywgb3B0aW9ucy5hbmNob3JzW2luZGV4XSk7XHJcblx0XHRcdH1cdFx0XHRcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLm5hdmlnYXRpb24pIHtcclxuXHRcdFx0XHR2YXIgbGluayA9ICcnO1xyXG5cdFx0XHRcdGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0bGluayA9IG9wdGlvbnMuYW5jaG9yc1tpbmRleF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciB0b29sdGlwID0gb3B0aW9ucy5uYXZpZ2F0aW9uVG9vbHRpcHNbaW5kZXhdO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiB0b29sdGlwID09PSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0XHR0b29sdGlwID0gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG5hdi5maW5kKCd1bCcpLmFwcGVuZCgnPGxpIGRhdGEtdG9vbHRpcD1cIicgKyB0b29sdGlwICsgJ1wiPjxhIGhyZWY9XCIjJyArIGxpbmsgKyAnXCI+PHNwYW4+PC9zcGFuPjwvYT48L2xpPicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gaWYgdGhlcmUncyBhbnkgc2xpZGVcclxuXHRcdFx0aWYgKG51bVNsaWRlcyA+IDApIHtcclxuXHRcdFx0XHR2YXIgc2xpZGVyV2lkdGggPSBudW1TbGlkZXMgKiAxMDA7XHJcblx0XHRcdFx0dmFyIHNsaWRlV2lkdGggPSAxMDAgLyBudW1TbGlkZXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGlkZXNDb250YWluZXJcIiAvPicpO1xyXG5cdFx0XHRcdHNsaWRlcy5wYXJlbnQoKS53cmFwKCc8ZGl2IGNsYXNzPVwic2xpZGVzXCIgLz4nKTtcclxuXHJcblx0XHRcdFx0JCh0aGlzKS5maW5kKCcuc2xpZGVzQ29udGFpbmVyJykuY3NzKCd3aWR0aCcsIHNsaWRlcldpZHRoICsgJyUnKTtcclxuXHRcdFx0XHQkKHRoaXMpLmZpbmQoJy5zbGlkZXMnKS5hZnRlcignPGRpdiBjbGFzcz1cImNvbnRyb2xBcnJvdyBwcmV2XCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbnRyb2xBcnJvdyBuZXh0XCI+PC9kaXY+Jyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYob3B0aW9ucy5jb250cm9sQXJyb3dDb2xvciE9JyNmZmYnKXtcclxuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLmNvbnRyb2xBcnJvdy5uZXh0JykuY3NzKCdib3JkZXItY29sb3InLCAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJytvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yKTtcclxuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLmNvbnRyb2xBcnJvdy5wcmV2JykuY3NzKCdib3JkZXItY29sb3InLCAndHJhbnNwYXJlbnQgJysgb3B0aW9ucy5jb250cm9sQXJyb3dDb2xvciArICcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwpe1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5maW5kKCcuY29udHJvbEFycm93LnByZXYnKS5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihvcHRpb25zLnNsaWRlc05hdmlnYXRpb24pe1xyXG5cdFx0XHRcdFx0YWRkU2xpZGVzTmF2aWdhdGlvbigkKHRoaXMpLCBudW1TbGlkZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdFx0Ly9pZiB0aGUgc2xpZGUgd29uI3QgYmUgYW4gc3RhcnRpbmcgcG9pbnQsIHRoZSBkZWZhdWx0IHdpbGwgYmUgdGhlIGZpcnN0IG9uZVxyXG5cdFx0XHRcdFx0aWYoIWluZGV4ICYmIHRoYXQuZmluZCgnLnNsaWRlLmFjdGl2ZScpLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQodGhpcykuY3NzKCd3aWR0aCcsIHNsaWRlV2lkdGggKyAnJScpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG5cdFx0XHRcdFx0XHRhZGRUYWJsZUNsYXNzKCQodGhpcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG5cdFx0XHRcdFx0YWRkVGFibGVDbGFzcygkKHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcclxuXHJcblx0XHRcdFxyXG5cdFx0fSkucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oKXtcdFxyXG5cdFx0XHQkLmZuLmZ1bGxwYWdlLnNldEF1dG9TY3JvbGxpbmcob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKTtcclxuXHJcblxyXG5cdFx0XHQvL3RoZSBzdGFydGluZyBwb2ludCBpcyBhIHNsaWRlPyBcclxuXHRcdFx0dmFyIGFjdGl2ZVNsaWRlID0gJCgnLnNlY3Rpb24uYWN0aXZlJykuZmluZCgnLnNsaWRlLmFjdGl2ZScpO1xyXG5cdFx0XHRpZiggYWN0aXZlU2xpZGUubGVuZ3RoICYmICAoJCgnLnNlY3Rpb24uYWN0aXZlJykuaW5kZXgoJy5zZWN0aW9uJykgIT0gMCB8fCAoJCgnLnNlY3Rpb24uYWN0aXZlJykuaW5kZXgoJy5zZWN0aW9uJykgPT0gMCAmJiBhY3RpdmVTbGlkZS5pbmRleCgpICE9IDApKSl7XHJcblx0XHRcdFx0dmFyIHByZXZTY3JvbGxpbmdTcGVlcGQgPSBvcHRpb25zLnNjcm9sbGluZ1NwZWVkO1xyXG5cdFx0XHRcdCQuZm4uZnVsbHBhZ2Uuc2V0U2Nyb2xsaW5nU3BlZWQgKDApO1xyXG5cdFx0XHRcdGxhbmRzY2FwZVNjcm9sbCgkKCcuc2VjdGlvbi5hY3RpdmUnKS5maW5kKCcuc2xpZGVzJyksIGFjdGl2ZVNsaWRlKTtcclxuXHRcdFx0XHQkLmZuLmZ1bGxwYWdlLnNldFNjcm9sbGluZ1NwZWVkKHByZXZTY3JvbGxpbmdTcGVlcGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvL2ZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gYmUgbW92ZWQgb3V0IG9mIHRoZSBwbHVnaW4gY29udGFpbmVyIGR1ZSB0byBwcm9ibGVtcyB3aXRoIENTUzMuXHJcblx0XHRcdGlmKG9wdGlvbnMuZml4ZWRFbGVtZW50cyAmJiBvcHRpb25zLmNzczMpe1xyXG5cdFx0XHRcdCQob3B0aW9ucy5maXhlZEVsZW1lbnRzKS5hcHBlbmRUbygnYm9keScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvL3ZlcnRpY2FsIGNlbnRlcmVkIG9mIHRoZSBuYXZpZ2F0aW9uICsgZmlyc3QgYnVsbGV0IGFjdGl2ZVxyXG5cdFx0XHRpZihvcHRpb25zLm5hdmlnYXRpb24pe1xyXG5cdFx0XHRcdG5hdi5jc3MoJ21hcmdpbi10b3AnLCAnLScgKyAobmF2LmhlaWdodCgpLzIpICsgJ3B4Jyk7XHJcblx0XHRcdFx0bmF2LmZpbmQoJ2xpJykuZXEoJCgnLnNlY3Rpb24uYWN0aXZlJykuaW5kZXgoJy5zZWN0aW9uJykpLmZpbmQoJ2EnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vbW92aW5nIHRoZSBtZW51IG91dHNpZGUgdGhlIG1haW4gY29udGFpbmVyIChhdm9pZCBwcm9ibGVtcyB3aXRoIGZpeGVkIHBvc2l0aW9ucyB3aGVuIHVzaW5nIENTUzMgdHJhbmZvcm1zKVxyXG5cdFx0XHRpZihvcHRpb25zLm1lbnUgJiYgb3B0aW9ucy5jc3MzKXtcclxuXHRcdFx0XHQkKG9wdGlvbnMubWVudSkuYXBwZW5kVG8oJ2JvZHknKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcblx0XHRcdFx0Ly9hZnRlciBET00gYW5kIGltYWdlcyBhcmUgbG9hZGVkIFxyXG5cdFx0XHRcdCQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcuc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0dmFyIHNsaWRlcyA9ICQodGhpcykuZmluZCgnLnNsaWRlJyk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZihzbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXMuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3JlYXRlU2xpbVNjcm9sbGluZygkKHRoaXMpKTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0Y3JlYXRlU2xpbVNjcm9sbGluZygkKHRoaXMpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0JC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVuZGVyICkgJiYgb3B0aW9ucy5hZnRlclJlbmRlci5jYWxsKCB0aGlzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0JC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVuZGVyICkgJiYgb3B0aW9ucy5hZnRlclJlbmRlci5jYWxsKCB0aGlzKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdC8vZ2V0dGluZyB0aGUgYW5jaG9yIGxpbmsgaW4gdGhlIFVSTCBhbmQgZGVsZXRpbmcgdGhlIGAjYFxyXG5cdFx0XHR2YXIgdmFsdWUgPSAgd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKS5zcGxpdCgnLycpO1xyXG5cdFx0XHR2YXIgZGVzdGlueSA9IHZhbHVlWzBdO1xyXG5cclxuXHRcdFx0aWYoZGVzdGlueS5sZW5ndGgpe1xyXG5cdFx0XHRcdHZhciBzZWN0aW9uID0gJCgnW2RhdGEtYW5jaG9yPVwiJytkZXN0aW55KydcIl0nKTtcclxuXHJcblx0XHRcdFx0aWYoIW9wdGlvbnMuYW5pbWF0ZUFuY2hvciAmJiBzZWN0aW9uLmxlbmd0aCl7IFxyXG5cdFx0XHRcdFx0c2lsZW50U2Nyb2xsKHNlY3Rpb24ucG9zaXRpb24oKS50b3ApO1xyXG5cdFx0XHRcdFx0JC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyTG9hZCApICYmIG9wdGlvbnMuYWZ0ZXJMb2FkLmNhbGwoIHRoaXMsIGRlc3RpbnksIChzZWN0aW9uLmluZGV4KCcuc2VjdGlvbicpICsgMSkpO1xyXG5cclxuXHRcdFx0XHRcdC8vdXBkYXRpbmcgdGhlIGFjdGl2ZSBjbGFzc1xyXG5cdFx0XHRcdFx0c2VjdGlvbi5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFxyXG5cdFx0XHQkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzY3JvbGxUb0FuY2hvcigpO1x0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFxyXG5cdFx0dmFyIHNjcm9sbElkO1xyXG5cdFx0dmFyIGlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdC8vd2hlbiBzY3JvbGxpbmcuLi5cclxuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHRpZighb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcdFx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIHNjcm9sbGVkU2VjdGlvbnMgPSAkKCcuc2VjdGlvbicpLm1hcChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgKGN1cnJlbnRTY3JvbGwgKyAxMDApKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9nZXRpbmcgdGhlIGxhc3Qgb25lLCB0aGUgY3VycmVudCBvbmUgb24gdGhlIHNjcmVlblxyXG5cdFx0XHRcdHZhciBjdXJyZW50U2VjdGlvbiA9IHNjcm9sbGVkU2VjdGlvbnNbc2Nyb2xsZWRTZWN0aW9ucy5sZW5ndGgtMV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9leGVjdXRpbmcgb25seSBvbmNlIHRoZSBmaXJzdCB0aW1lIHdlIHJlYWNoIHRoZSBzZWN0aW9uXHJcblx0XHRcdFx0aWYoIWN1cnJlbnRTZWN0aW9uLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcblx0XHRcdFx0XHR2YXIgbGVhdmluZ1NlY3Rpb24gPSAkKCcuc2VjdGlvbi5hY3RpdmUnKS5pbmRleCgnLnNlY3Rpb24nKSArIDE7XHJcblxyXG5cdFx0XHRcdFx0aXNTY3JvbGxpbmcgPSB0cnVlO1x0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciB5TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQoY3VycmVudFNlY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjdXJyZW50U2VjdGlvbi5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgYW5jaG9yTGluayAgPSBjdXJyZW50U2VjdGlvbi5kYXRhKCdhbmNob3InKTtcclxuXHRcdFx0XHRcdCQuaXNGdW5jdGlvbiggb3B0aW9ucy5vbkxlYXZlICkgJiYgb3B0aW9ucy5vbkxlYXZlLmNhbGwoIHRoaXMsIGxlYXZpbmdTZWN0aW9uLCAoY3VycmVudFNlY3Rpb24uaW5kZXgoJy5zZWN0aW9uJykgKyAxKSwgeU1vdmVtZW50KTtcclxuXHJcblx0XHRcdFx0XHQkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJMb2FkICkgJiYgb3B0aW9ucy5hZnRlckxvYWQuY2FsbCggdGhpcywgYW5jaG9yTGluaywgKGN1cnJlbnRTZWN0aW9uLmluZGV4KCcuc2VjdGlvbicpICsgMSkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhY3RpdmF0ZU1lbnVFbGVtZW50KGFuY2hvckxpbmspO1x0XHJcblx0XHRcdFx0XHRhY3RpdmF0ZU5hdkRvdHMoYW5jaG9yTGluaywgMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGggJiYgIWlzTW92aW5nKXtcclxuXHRcdFx0XHRcdFx0Ly9uZWVkZWQgdG8gZW50ZXIgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHVzaW5nIHRoZSBtZW51IHdpdGggYW5jaG9yIGxpbmtzXHJcblx0XHRcdFx0XHRcdGxhc3RTY3JvbGxlZERlc3RpbnkgPSBhbmNob3JMaW5rO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0bG9jYXRpb24uaGFzaCA9IGFuY2hvckxpbms7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vc21hbGwgdGltZW91dCBpbiBvcmRlciB0byBhdm9pZCBlbnRlcmluZyBpbiBoYXNoQ2hhbmdlIGV2ZW50IHdoZW4gc2Nyb2xsaW5nIGlzIG5vdCBmaW5pc2hlZCB5ZXRcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChzY3JvbGxJZCk7XHJcblx0XHRcdFx0XHRzY3JvbGxJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdH0pO1x0XHJcblx0XHJcblxyXG5cdFx0XHJcblx0XHJcblx0XHR2YXIgdG91Y2hTdGFydFkgPSAwO1xyXG5cdFx0dmFyIHRvdWNoU3RhcnRYID0gMDtcclxuXHRcdHZhciB0b3VjaEVuZFkgPSAwO1xyXG5cdFx0dmFyIHRvdWNoRW5kWCA9IDA7XHJcblx0XHJcblx0XHQvKiBEZXRlY3RpbmcgdG91Y2ggZXZlbnRzIFxyXG5cdFx0XHJcblx0XHQqIEFzIHdlIGFyZSBjaGFuZ2luZyB0aGUgdG9wIHByb3BlcnR5IG9mIHRoZSBwYWdlIG9uIHNjcm9sbGluZywgd2UgY2FuIG5vdCB1c2UgdGhlIHRyYWRpdGlvbmFsIHdheSB0byBkZXRlY3QgaXQuXHJcblx0XHQqIFRoaXMgd2F5LCB0aGUgdG91Y2hzdGFydCBhbmQgdGhlIHRvdWNoIG1vdmVzIHNob3dzIGFuIHNtYWxsIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtIHdoaWNoIGlzIHRoZVxyXG5cdFx0KiB1c2VkIG9uZSB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbi5cclxuXHRcdCovXHRcdFxyXG5cdFx0ZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCl7XHJcblx0XHRcdHZhciBlID0gZXZlbnQub3JpZ2luYWxFdmVudDtcclxuXHJcblx0XHRcdGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcblx0XHRcdFx0Ly9wcmV2ZW50aW5nIHRoZSBlYXNpbmcgb24gaU9TIGRldmljZXMgXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkaXRpb25hbDogaWYgb25lIG9mIHRoZSBub3JtYWxTY3JvbGxFbGVtZW50cyBpc24ndCB3aXRoaW4gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQgaG9wcyB1cCB0aGUgRE9NIGNoYWluXHJcblx0XHRcdGlmICghY2hlY2tQYXJlbnRGb3JOb3JtYWxTY3JvbGxFbGVtZW50KGV2ZW50LnRhcmdldCkpIHtcclxuXHRcdFxyXG5cdFx0XHRcdHZhciB0b3VjaE1vdmVkID0gZmFsc2U7XHJcblx0XHRcdFx0dmFyIGFjdGl2ZVNlY3Rpb24gPSAkKCcuc2VjdGlvbi5hY3RpdmUnKTtcclxuXHRcdFx0XHR2YXIgc2Nyb2xsYWJsZTtcclxuXHJcblx0XHRcdFx0aWYgKCFpc01vdmluZyAmJiAhc2xpZGVNb3ZpbmcpIHsgLy9pZiB0aGVyZXMgYW55ICNcclxuXHRcdFx0XHRcdHZhciB0b3VjaEV2ZW50cyA9IGdldEV2ZW50c1BhZ2UoZSk7XHJcblx0XHRcdFx0XHR0b3VjaEVuZFkgPSB0b3VjaEV2ZW50c1sneSddO1xyXG5cdFx0XHRcdFx0dG91Y2hFbmRYID0gdG91Y2hFdmVudHNbJ3gnXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaWYgbW92ZW1lbnQgaW4gdGhlIFggYXh5cyBpcyBncmVhdGVyIHRoYW4gaW4gdGhlIFkgYW5kIHRoZSBjdXJyZWN0IHNlY3Rpb24gaGFzIHNsaWRlcy4uLlxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZVNlY3Rpb24uZmluZCgnLnNsaWRlcycpLmxlbmd0aCAmJiBNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpKSkge1xyXG5cdFx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdFx0ICAgIC8vaXMgdGhlIG1vdmVtZW50IGdyZWF0ZXIgdGhhbiB0aGUgbWluaW11bSByZXNpc3RhbmNlIHRvIHNjcm9sbD9cclxuXHRcdFx0XHRcdCAgICBpZiAoTWF0aC5hYnModG91Y2hTdGFydFggLSB0b3VjaEVuZFgpID4gKCQod2luZG93KS53aWR0aCgpIC8gMTAwICogb3B0aW9ucy50b3VjaFNlbnNpdGl2aXR5KSkge1xyXG5cdFx0XHRcdFx0ICAgICAgICBpZiAodG91Y2hTdGFydFggPiB0b3VjaEVuZFgpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICQuZm4uZnVsbHBhZ2UubW92ZVNsaWRlUmlnaHQoKTsgLy9uZXh0IFxyXG5cdFx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgJC5mbi5mdWxscGFnZS5tb3ZlU2xpZGVMZWZ0KCk7IC8vcHJldlxyXG5cdFx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vdmVydGljYWwgc2Nyb2xsaW5nIChvbmx5IHdoZW4gYXV0b1Njcm9sbGluZyBpcyBlbmFibGVkKVxyXG5cdFx0XHRcdFx0ZWxzZSBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8vaWYgdGhlcmUgYXJlIGxhbmRzY2FwZSBzbGlkZXMsIHdlIGNoZWNrIGlmIHRoZSBzY3JvbGxpbmcgYmFyIGlzIGluIHRoZSBjdXJyZW50IG9uZSBvciBub3RcclxuXHRcdFx0XHRcdFx0aWYoYWN0aXZlU2VjdGlvbi5maW5kKCcuc2xpZGVzJykubGVuZ3RoKXtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxhYmxlPSBhY3RpdmVTZWN0aW9uLmZpbmQoJy5zbGlkZS5hY3RpdmUnKS5maW5kKCcuc2Nyb2xsYWJsZScpO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxhYmxlID0gYWN0aXZlU2VjdGlvbi5maW5kKCcuc2Nyb2xsYWJsZScpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcblx0XHRcdFx0XHRcdGlmIChNYXRoLmFicyh0b3VjaFN0YXJ0WSAtIHRvdWNoRW5kWSkgPiAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMTAwICogb3B0aW9ucy50b3VjaFNlbnNpdGl2aXR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0b3VjaFN0YXJ0WSA+IHRvdWNoRW5kWSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoc2Nyb2xsYWJsZS5sZW5ndGggPiAwICl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vaXMgdGhlIHNjcm9sbGJhciBhdCB0aGUgZW5kIG9mIHRoZSBzY3JvbGw/XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGlzU2Nyb2xsZWQoJ2JvdHRvbScsIHNjcm9sbGFibGUpKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uRG93bigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG1vdmVkIGRvd25cclxuXHRcdFx0XHRcdFx0XHRcdFx0JC5mbi5mdWxscGFnZS5tb3ZlU2VjdGlvbkRvd24oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRvdWNoRW5kWSA+IHRvdWNoU3RhcnRZKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHNjcm9sbGFibGUubGVuZ3RoID4gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vaXMgdGhlIHNjcm9sbGJhciBhdCB0aGUgc3RhcnQgb2YgdGhlIHNjcm9sbD9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoaXNTY3JvbGxlZCgndG9wJywgc2Nyb2xsYWJsZSkpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQuZm4uZnVsbHBhZ2UubW92ZVNlY3Rpb25VcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBtb3ZlZCB1cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uVXAoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiByZWN1cnNpdmUgZnVuY3Rpb24gdG8gbG9vcCB1cCB0aGUgcGFyZW50IG5vZGVzIHRvIGNoZWNrIGlmIG9uZSBvZiB0aGVtIGV4aXN0cyBpbiBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzXHJcblx0XHQgKiBDdXJyZW50bHkgd29ya3Mgd2VsbCBmb3IgaU9TIC0gQW5kcm9pZCBtaWdodCBuZWVkIHNvbWUgdGVzdGluZ1xyXG5cdFx0ICogQHBhcmFtICB7RWxlbWVudH0gZWwgIHRhcmdldCBlbGVtZW50IC8ganF1ZXJ5IHNlbGVjdG9yIChpbiBzdWJzZXF1ZW50IG5vZGVzKVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSAgICAgaG9wIGN1cnJlbnQgaG9wIGNvbXBhcmVkIHRvIG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkIFxyXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSBpcyBhIG1hdGNoIHRvIG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHNcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tQYXJlbnRGb3JOb3JtYWxTY3JvbGxFbGVtZW50IChlbCwgaG9wKSB7XHJcblx0XHRcdGhvcCA9IGhvcCB8fCAwO1xyXG5cdFx0XHR2YXIgcGFyZW50ID0gJChlbCkucGFyZW50KCk7XHJcblxyXG5cdFx0XHRpZiAoaG9wIDwgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQgJiZcclxuXHRcdFx0XHRwYXJlbnQuaXMob3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cykgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoaG9wID09IG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQocGFyZW50LCArK2hvcCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQpe1xyXG5cdFx0XHR2YXIgZSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XHJcblx0XHRcdHZhciB0b3VjaEV2ZW50cyA9IGdldEV2ZW50c1BhZ2UoZSk7XHJcblx0XHRcdHRvdWNoU3RhcnRZID0gdG91Y2hFdmVudHNbJ3knXTtcclxuXHRcdFx0dG91Y2hTdGFydFggPSB0b3VjaEV2ZW50c1sneCddO1xyXG5cdFx0fVxyXG5cdFx0XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZWN0aW5nIG1vdXNld2hlZWwgc2Nyb2xsaW5nXHJcblx0XHQgKiBcclxuXHRcdCAqIGh0dHA6Ly9ibG9ncy5zaXRlcG9pbnRzdGF0aWMuY29tL2V4YW1wbGVzL3RlY2gvbW91c2Utd2hlZWwvaW5kZXguaHRtbFxyXG5cdFx0ICogaHR0cDovL3d3dy5zaXRlcG9pbnQuY29tL2h0bWw1LWphdmFzY3JpcHQtbW91c2Utd2hlZWwvXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIE1vdXNlV2hlZWxIYW5kbGVyKGUpIHtcclxuXHRcdFx0aWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuXHRcdFx0XHQvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcblx0XHRcdFx0ZSA9IHdpbmRvdy5ldmVudCB8fCBlO1xyXG5cdFx0XHRcdHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLFxyXG5cdFx0XHRcdFx0XHQoZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSB8fCAtZS5kZXRhaWwpKSk7XHJcblx0XHRcdFx0dmFyIHNjcm9sbGFibGU7XHJcblx0XHRcdFx0dmFyIGFjdGl2ZVNlY3Rpb24gPSAkKCcuc2VjdGlvbi5hY3RpdmUnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoIWlzTW92aW5nKSB7IC8vaWYgdGhlcmVzIGFueSAjXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2lmIHRoZXJlIGFyZSBsYW5kc2NhcGUgc2xpZGVzLCB3ZSBjaGVjayBpZiB0aGUgc2Nyb2xsaW5nIGJhciBpcyBpbiB0aGUgY3VycmVudCBvbmUgb3Igbm90XHJcblx0XHRcdFx0XHRpZihhY3RpdmVTZWN0aW9uLmZpbmQoJy5zbGlkZXMnKS5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0XHRzY3JvbGxhYmxlPSBhY3RpdmVTZWN0aW9uLmZpbmQoJy5zbGlkZS5hY3RpdmUnKS5maW5kKCcuc2Nyb2xsYWJsZScpO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHNjcm9sbGFibGUgPSBhY3RpdmVTZWN0aW9uLmZpbmQoJy5zY3JvbGxhYmxlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL3Njcm9sbGluZyBkb3duP1xyXG5cdFx0XHRcdFx0aWYgKGRlbHRhIDwgMCkge1xyXG5cdFx0XHRcdFx0XHRpZihzY3JvbGxhYmxlLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0XHRcdFx0XHQvL2lzIHRoZSBzY3JvbGxiYXIgYXQgdGhlIGVuZCBvZiB0aGUgc2Nyb2xsP1xyXG5cdFx0XHRcdFx0XHRcdGlmKGlzU2Nyb2xsZWQoJ2JvdHRvbScsIHNjcm9sbGFibGUpKXtcclxuXHRcdFx0XHRcdFx0XHRcdCQuZm4uZnVsbHBhZ2UubW92ZVNlY3Rpb25Eb3duKCk7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy9ub3JtYWwgc2Nyb2xsXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uRG93bigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9zY3JvbGxpbmcgdXA/XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYoc2Nyb2xsYWJsZS5sZW5ndGggPiAwKXtcclxuXHRcdFx0XHRcdFx0XHQvL2lzIHRoZSBzY3JvbGxiYXIgYXQgdGhlIHN0YXJ0IG9mIHRoZSBzY3JvbGw/XHJcblx0XHRcdFx0XHRcdFx0aWYoaXNTY3JvbGxlZCgndG9wJywgc2Nyb2xsYWJsZSkpe1xyXG5cdFx0XHRcdFx0XHRcdFx0JC5mbi5mdWxscGFnZS5tb3ZlU2VjdGlvblVwKCk7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy9ub3JtYWwgc2Nyb2xsXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uVXAoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uVXAgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgcHJldiA9ICQoJy5zZWN0aW9uLmFjdGl2ZScpLnByZXYoJy5zZWN0aW9uJyk7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2xvb3BpbmcgdG8gdGhlIGJvdHRvbSBpZiB0aGVyZSdzIG5vIG1vcmUgc2VjdGlvbnMgYWJvdmVcclxuXHRcdFx0aWYgKCFwcmV2Lmxlbmd0aCAmJiAob3B0aW9ucy5sb29wVG9wIHx8IG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsKSkge1xyXG5cdFx0XHRcdHByZXYgPSAkKCcuc2VjdGlvbicpLmxhc3QoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHByZXYubGVuZ3RoKSB7XHJcblx0XHRcdFx0c2Nyb2xsUGFnZShwcmV2LCBudWxsLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uRG93biA9IGZ1bmN0aW9uICgpe1xyXG5cdFx0XHR2YXIgbmV4dCA9ICQoJy5zZWN0aW9uLmFjdGl2ZScpLm5leHQoJy5zZWN0aW9uJyk7XHJcblxyXG5cdFx0XHQvL2xvb3BpbmcgdG8gdGhlIHRvcCBpZiB0aGVyZSdzIG5vIG1vcmUgc2VjdGlvbnMgYmVsb3dcclxuXHRcdFx0aWYoIW5leHQubGVuZ3RoICYmXHJcblx0XHRcdFx0KG9wdGlvbnMubG9vcEJvdHRvbSB8fCBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCkpe1xyXG5cdFx0XHRcdG5leHQgPSAkKCcuc2VjdGlvbicpLmZpcnN0KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKG5leHQubGVuZ3RoID4gMCB8fFxyXG5cdFx0XHRcdCghbmV4dC5sZW5ndGggJiZcclxuXHRcdFx0XHQob3B0aW9ucy5sb29wQm90dG9tIHx8IG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsKSkpe1xyXG5cdFx0XHRcdHNjcm9sbFBhZ2UobmV4dCwgbnVsbCwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVUbyA9IGZ1bmN0aW9uIChzZWN0aW9uLCBzbGlkZSl7XHJcblx0XHRcdHZhciBkZXN0aW55ID0gJyc7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihpc05hTihzZWN0aW9uKSl7XHJcblx0XHRcdFx0ZGVzdGlueSA9ICQoJ1tkYXRhLWFuY2hvcj1cIicrc2VjdGlvbisnXCJdJyk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGRlc3RpbnkgPSAkKCcuc2VjdGlvbicpLmVxKCAoc2VjdGlvbiAtMSkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHR5cGVvZiBzbGlkZSAhPT0gJ3VuZGVmaW5lZCcpe1xyXG5cdFx0XHRcdHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uLCBzbGlkZSk7XHJcblx0XHRcdH1lbHNlIGlmKGRlc3RpbnkubGVuZ3RoID4gMCl7XHJcblx0XHRcdFx0c2Nyb2xsUGFnZShkZXN0aW55KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTbGlkZVJpZ2h0ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0bW92ZVNsaWRlKCduZXh0Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JC5mbi5mdWxscGFnZS5tb3ZlU2xpZGVMZWZ0ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0bW92ZVNsaWRlKCdwcmV2Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbW92ZVNsaWRlKGRpcmVjdGlvbil7XHJcblx0XHQgICAgdmFyIGFjdGl2ZVNlY3Rpb24gPSAkKCcuc2VjdGlvbi5hY3RpdmUnKTtcclxuXHRcdCAgICB2YXIgc2xpZGVzID0gYWN0aXZlU2VjdGlvbi5maW5kKCcuc2xpZGVzJyk7XHJcblxyXG5cdFx0ICAgIC8vIG1vcmUgdGhhbiBvbmUgc2xpZGUgbmVlZGVkIGFuZCBub3RoaW5nIHNob3VsZCBiZSBzbGlkaW5nXHJcblx0XHRcdGlmICghc2xpZGVzLmxlbmd0aCB8fCBzbGlkZU1vdmluZykge1xyXG5cdFx0XHQgICAgcmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0ICAgIHZhciBjdXJyZW50U2xpZGUgPSBzbGlkZXMuZmluZCgnLnNsaWRlLmFjdGl2ZScpO1xyXG5cdFx0ICAgIHZhciBkZXN0aW55ID0gbnVsbDtcclxuXHJcblx0XHQgICAgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG5cdFx0ICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLnByZXYoJy5zbGlkZScpO1xyXG5cdFx0ICAgIH1lbHNle1xyXG5cdFx0ICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLm5leHQoJy5zbGlkZScpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgLy9pc24ndCB0aGVyZSBhIG5leHQgc2xpZGUgaW4gdGhlIHNlY3VlbmNlP1xyXG5cdFx0XHRpZighZGVzdGlueS5sZW5ndGgpe1xyXG5cdFx0XHRcdC8vcmVzcGVjdCBsb29wSG9yaXpvbnRhbCBzZXR0aW5cclxuXHRcdFx0XHRpZiAoIW9wdGlvbnMubG9vcEhvcml6b250YWwpIHJldHVybjtcclxuXHJcblx0XHRcdCAgICBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcblx0XHRcdCAgICAgICAgZGVzdGlueSA9IGN1cnJlbnRTbGlkZS5zaWJsaW5ncygnOmxhc3QnKTtcclxuXHRcdFx0ICAgIH1lbHNle1xyXG5cdFx0XHQgICAgICAgIGRlc3RpbnkgPSBjdXJyZW50U2xpZGUuc2libGluZ3MoJzpmaXJzdCcpO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0ICAgIHNsaWRlTW92aW5nID0gdHJ1ZTtcclxuXHJcblx0XHQgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2Nyb2xsUGFnZShlbGVtZW50LCBjYWxsYmFjaywgaXNNb3ZlbWVudFVwKXtcclxuXHRcdFx0dmFyIHNjcm9sbE9wdGlvbnMgPSB7fSwgc2Nyb2xsZWRFbGVtZW50O1xyXG5cdFx0XHR2YXIgZGVzdCA9IGVsZW1lbnQucG9zaXRpb24oKTtcclxuXHRcdFx0aWYodHlwZW9mIGRlc3QgPT09IFwidW5kZWZpbmVkXCIpeyByZXR1cm47IH0gLy90aGVyZSdzIG5vIGVsZW1lbnQgdG8gc2Nyb2xsLCBsZWF2aW5nIHRoZSBmdW5jdGlvblxyXG5cdFx0XHR2YXIgZHRvcCA9IGRlc3QudG9wO1x0XHRcdFxyXG5cdFx0XHR2YXIgeU1vdmVtZW50ID0gZ2V0WW1vdmVtZW50KGVsZW1lbnQpO1xyXG5cdFx0XHR2YXIgYW5jaG9yTGluayAgPSBlbGVtZW50LmRhdGEoJ2FuY2hvcicpO1xyXG5cdFx0XHR2YXIgc2VjdGlvbkluZGV4ID0gZWxlbWVudC5pbmRleCgnLnNlY3Rpb24nKTtcclxuXHRcdFx0dmFyIGFjdGl2ZVNsaWRlID0gZWxlbWVudC5maW5kKCcuc2xpZGUuYWN0aXZlJyk7XHJcblx0XHRcdHZhciBhY3RpdmVTZWN0aW9uID0gJCgnLnNlY3Rpb24uYWN0aXZlJyk7XHJcblx0XHRcdHZhciBsZWF2aW5nU2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24uaW5kZXgoJy5zZWN0aW9uJykgKyAxO1xyXG5cclxuXHRcdFx0Ly9jYWNoaW5nIHRoZSB2YWx1ZSBvZiBpc1Jlc2l6aW5nIGF0IHRoZSBtb21tZW50IHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgXHJcblx0XHRcdC8vYmVjYXVzZSBpdCB3aWxsIGJlIGNoZWNrZWQgbGF0ZXIgaW5zaWRlIGEgc2V0VGltZW91dCBhbmQgdGhlIHZhbHVlIG1pZ2h0IGNoYW5nZVxyXG5cdFx0XHR2YXIgbG9jYWxJc1Jlc2l6aW5nID0gaXNSZXNpemluZzsgXHJcblxyXG5cdFx0XHRpZihhY3RpdmVTbGlkZS5sZW5ndGgpe1xyXG5cdFx0XHRcdHZhciBzbGlkZUFuY2hvckxpbmsgPSBhY3RpdmVTbGlkZS5kYXRhKCdhbmNob3InKTtcclxuXHRcdFx0XHR2YXIgc2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlLmluZGV4KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB3ZSBuZWVkIHRvIHdyYXAgYXJvdW5kXHJcblx0XHRcdGlmIChvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgdHlwZW9mIChpc01vdmVtZW50VXApICE9PSBcInVuZGVmaW5lZFwiICYmXHJcblx0XHRcdFx0KCghaXNNb3ZlbWVudFVwICYmIHlNb3ZlbWVudCA9PSAndXAnKSB8fCAvLyBJbnRlbmRpbmcgdG8gc2Nyb2xsIGRvd24gYnV0IGFib3V0IHRvIGdvIHVwIG9yXHJcblx0XHRcdFx0KGlzTW92ZW1lbnRVcCAmJiB5TW92ZW1lbnQgPT0gJ2Rvd24nKSkpIHsgLy8gaW50ZW5kaW5nIHRvIHNjcm9sbCB1cCBidXQgYWJvdXQgdG8gZ28gZG93blxyXG5cclxuXHRcdFx0XHQvLyBTY3JvbGxpbmcgZG93blxyXG5cdFx0XHRcdGlmICghaXNNb3ZlbWVudFVwKSB7XHJcblx0XHRcdFx0XHQvLyBNb3ZlIGFsbCBwcmV2aW91cyBzZWN0aW9ucyB0byBhZnRlciB0aGUgYWN0aXZlIHNlY3Rpb25cclxuXHRcdFx0XHRcdCQoXCIuc2VjdGlvbi5hY3RpdmVcIikuYWZ0ZXIoYWN0aXZlU2VjdGlvbi5wcmV2QWxsKFwiLnNlY3Rpb25cIikuZ2V0KCkucmV2ZXJzZSgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7IC8vIFNjcm9sbGluZyB1cFxyXG5cdFx0XHRcdFx0Ly8gTW92ZSBhbGwgbmV4dCBzZWN0aW9ucyB0byBiZWZvcmUgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcblx0XHRcdFx0XHQkKFwiLnNlY3Rpb24uYWN0aXZlXCIpLmJlZm9yZShhY3RpdmVTZWN0aW9uLm5leHRBbGwoXCIuc2VjdGlvblwiKSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBNYWludGFpbiB0aGUgZGlzcGxheWVkIHBvc2l0aW9uIChub3cgdGhhdCB3ZSBjaGFuZ2VkIHRoZSBlbGVtZW50IG9yZGVyKVxyXG5cdFx0XHRcdHNpbGVudFNjcm9sbCgkKCcuc2VjdGlvbi5hY3RpdmUnKS5wb3NpdGlvbigpLnRvcCk7XHJcblxyXG5cdFx0XHRcdC8vIHNhdmUgZm9yIGxhdGVyIHRoZSBlbGVtZW50cyB0aGF0IHN0aWxsIG5lZWQgdG8gYmUgcmVvcmRlcmVkXHJcblx0XHRcdFx0dmFyIHdyYXBBcm91bmRFbGVtZW50cyA9IGFjdGl2ZVNlY3Rpb247XHJcblxyXG5cdFx0XHRcdC8vIFJlY2FsY3VsYXRlIGFuaW1hdGlvbiB2YXJpYWJsZXNcclxuXHRcdFx0XHRkZXN0ID0gZWxlbWVudC5wb3NpdGlvbigpO1xyXG5cdFx0XHRcdGR0b3AgPSBkZXN0LnRvcDtcclxuXHRcdFx0XHR5TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQoZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0XHRlbGVtZW50LmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vcHJldmVudGluZyBmcm9tIGFjdGl2YXRpbmcgdGhlIE1vdXNlV2hlZWxIYW5kbGVyIGV2ZW50XHJcblx0XHRcdC8vbW9yZSB0aGFuIG9uY2UgaWYgdGhlIHBhZ2UgaXMgc2Nyb2xsaW5nXHJcblx0XHRcdGlzTW92aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiBhbmNob3JMaW5rICE9PSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0c2V0VVJMSGFzaChzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIGFuY2hvckxpbmspO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG5cdFx0XHRcdHNjcm9sbE9wdGlvbnNbJ3RvcCddID0gLWR0b3A7XHJcblx0XHRcdFx0c2Nyb2xsZWRFbGVtZW50ID0gY29udGFpbmVyLnNlbGVjdG9yO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRzY3JvbGxPcHRpb25zWydzY3JvbGxUb3AnXSA9IGR0b3A7XHJcblx0XHRcdFx0c2Nyb2xsZWRFbGVtZW50ID0gJ2h0bWwsIGJvZHknO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBGaXggc2VjdGlvbiBvcmRlciBhZnRlciBjb250aW51b3VzVmVydGljYWwgY2hhbmdlcyBoYXZlIGJlZW4gYW5pbWF0ZWRcclxuXHRcdFx0dmFyIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQvLyBJZiBjb250aW51b3VzVmVydGljYWwgaXMgaW4gZWZmZWN0IChhbmQgYXV0b1Njcm9sbGluZyB3b3VsZCBhbHNvIGJlIGluIGVmZmVjdCB0aGVuKSwgXHJcblx0XHRcdFx0Ly8gZmluaXNoIG1vdmluZyB0aGUgZWxlbWVudHMgYXJvdW5kIHNvIHRoZSBkaXJlY3QgbmF2aWdhdGlvbiB3aWxsIGZ1bmN0aW9uIG1vcmUgc2ltcGx5XHJcblx0XHRcdFx0aWYgKCF3cmFwQXJvdW5kRWxlbWVudHMgfHwgIXdyYXBBcm91bmRFbGVtZW50cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChpc01vdmVtZW50VXApIHtcclxuXHRcdFx0XHRcdCQoJy5zZWN0aW9uOmZpcnN0JykuYmVmb3JlKHdyYXBBcm91bmRFbGVtZW50cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0JCgnLnNlY3Rpb246bGFzdCcpLmFmdGVyKHdyYXBBcm91bmRFbGVtZW50cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzaWxlbnRTY3JvbGwoJCgnLnNlY3Rpb24uYWN0aXZlJykucG9zaXRpb24oKS50b3ApO1xyXG5cdFx0XHR9O1xyXG5cclxuXHJcblx0XHRcdC8vIFVzZSBDU1MzIHRyYW5zbGF0ZSBmdW5jdGlvbmFsaXR5IG9yLi4uXHJcblx0XHRcdGlmIChvcHRpb25zLmNzczMgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKSB7XHJcblxyXG5cdFx0XHRcdC8vY2FsbGJhY2sgKG9uTGVhdmUpIGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcblx0XHRcdFx0JC5pc0Z1bmN0aW9uKG9wdGlvbnMub25MZWF2ZSkgJiYgIWxvY2FsSXNSZXNpemluZyAmJiBvcHRpb25zLm9uTGVhdmUuY2FsbCh0aGlzLCBsZWF2aW5nU2VjdGlvbiwgKHNlY3Rpb25JbmRleCArIDEpLCB5TW92ZW1lbnQpO1xyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHR2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIGR0b3AgKyAncHgsIDBweCknO1xyXG5cdFx0XHRcdHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0Ly9maXggc2VjdGlvbiBvcmRlciBmcm9tIGNvbnRpbnVvdXNWZXJ0aWNhbFxyXG5cdFx0XHRcdFx0Y29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyKCk7XHJcblxyXG5cdFx0XHRcdFx0Ly9jYWxsYmFjayAoYWZ0ZXJMb2FkKSBcdGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcblx0XHRcdFx0XHQkLmlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlckxvYWQpICYmICFsb2NhbElzUmVzaXppbmcgJiYgb3B0aW9ucy5hZnRlckxvYWQuY2FsbCh0aGlzLCBhbmNob3JMaW5rLCAoc2VjdGlvbkluZGV4ICsgMSkpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRpc01vdmluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHQkLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrLmNhbGwodGhpcyk7XHJcblx0XHRcdFx0XHR9LCBzY3JvbGxEZWxheSk7XHJcblx0XHRcdFx0fSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCk7XHJcblx0XHRcdH0gZWxzZSB7IC8vIC4uLiB1c2UgalF1ZXJ5IGFuaW1hdGUgXHJcblxyXG5cdFx0XHRcdC8vY2FsbGJhY2sgKG9uTGVhdmUpIGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcblx0XHRcdFx0JC5pc0Z1bmN0aW9uKG9wdGlvbnMub25MZWF2ZSkgJiYgIWxvY2FsSXNSZXNpemluZyAmJiBvcHRpb25zLm9uTGVhdmUuY2FsbCh0aGlzLCBsZWF2aW5nU2VjdGlvbiwgKHNlY3Rpb25JbmRleCArIDEpLCB5TW92ZW1lbnQpO1xyXG5cclxuXHRcdFx0XHQkKHNjcm9sbGVkRWxlbWVudCkuYW5pbWF0ZShcclxuXHRcdFx0XHRcdHNjcm9sbE9wdGlvbnNcclxuXHRcdFx0XHQsIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQsIG9wdGlvbnMuZWFzaW5nLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQvL2ZpeCBzZWN0aW9uIG9yZGVyIGZyb20gY29udGludW91c1ZlcnRpY2FsXHJcblx0XHRcdFx0XHRjb250aW51b3VzVmVydGljYWxGaXhTZWN0aW9uT3JkZXIoKTtcclxuXHJcblx0XHRcdFx0XHQvL2NhbGxiYWNrIChhZnRlckxvYWQpIGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcblx0XHRcdFx0XHQkLmlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlckxvYWQpICYmICFsb2NhbElzUmVzaXppbmcgJiYgb3B0aW9ucy5hZnRlckxvYWQuY2FsbCh0aGlzLCBhbmNob3JMaW5rLCAoc2VjdGlvbkluZGV4ICsgMSkpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRpc01vdmluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHQkLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrLmNhbGwodGhpcyk7XHJcblx0XHRcdFx0XHR9LCBzY3JvbGxEZWxheSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vZmxhZyB0byBhdm9pZCBjYWxsaW5nbiBgc2Nyb2xsUGFnZSgpYCB0d2ljZSBpbiBjYXNlIG9mIHVzaW5nIGFuY2hvciBsaW5rc1xyXG5cdFx0XHRsYXN0U2Nyb2xsZWREZXN0aW55ID0gYW5jaG9yTGluaztcclxuXHRcdFx0XHJcblx0XHRcdC8vYXZvaWQgZmlyaW5nIGl0IHR3aWNlIChhcyBpdCBkb2VzIGFsc28gb24gc2Nyb2xsKVxyXG5cdFx0XHRpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG5cdFx0XHRcdGFjdGl2YXRlTWVudUVsZW1lbnQoYW5jaG9yTGluayk7XHJcblx0XHRcdFx0YWN0aXZhdGVOYXZEb3RzKGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IoKXtcclxuXHRcdFx0Ly9nZXR0aW5nIHRoZSBhbmNob3IgbGluayBpbiB0aGUgVVJMIGFuZCBkZWxldGluZyB0aGUgYCNgXHJcblx0XHRcdHZhciB2YWx1ZSA9ICB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcvJyk7XHJcblx0XHRcdHZhciBzZWN0aW9uID0gdmFsdWVbMF07XHJcblx0XHRcdHZhciBzbGlkZSA9IHZhbHVlWzFdO1xyXG5cclxuXHRcdFx0aWYoc2VjdGlvbil7ICAvL2lmIHRoZXJlcyBhbnkgI1x0XHRcdFx0XHJcblx0XHRcdFx0c2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb24sIHNsaWRlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vZGV0ZWN0aW5nIGFueSBjaGFuZ2Ugb24gdGhlIFVSTCB0byBzY3JvbGwgdG8gdGhlIGdpdmVuIGFuY2hvciBsaW5rXHJcblx0XHQvLyhhIHdheSB0byBkZXRlY3QgYmFjayBoaXN0b3J5IGJ1dHRvbiBhcyB3ZSBwbGF5IHdpdGggdGhlIGhhc2hlcyBvbiB0aGUgVVJMKVxyXG5cdFx0JCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJyxmdW5jdGlvbigpe1xyXG5cdFx0XHRpZighaXNTY3JvbGxpbmcpe1xyXG5cdFx0XHRcdHZhciB2YWx1ZSA9ICB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcvJyk7XHJcblx0XHRcdFx0dmFyIHNlY3Rpb24gPSB2YWx1ZVswXTtcclxuXHRcdFx0XHR2YXIgc2xpZGUgPSB2YWx1ZVsxXTtcclxuXHJcblx0XHRcdFx0Ly93aGVuIG1vdmluZyB0byBhIHNsaWRlIGluIHRoZSBmaXJzdCBzZWN0aW9uIGZvciB0aGUgZmlyc3QgdGltZSAoZmlyc3QgdGltZSB0byBhZGQgYW4gYW5jaG9yIHRvIHRoZSBVUkwpXHJcblx0XHRcdFx0dmFyIGlzRmlyc3RTbGlkZU1vdmUgPSAgKHR5cGVvZiBsYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJyk7XHJcblx0XHRcdFx0dmFyIGlzRmlyc3RTY3JvbGxNb3ZlID0gKHR5cGVvZiBsYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2xpZGUgPT09ICd1bmRlZmluZWQnKTtcclxuXHJcblx0XHRcdFx0LyppbiBvcmRlciB0byBjYWxsIHNjcm9sbHBhZ2UoKSBvbmx5IG9uY2UgZm9yIGVhY2ggZGVzdGluYXRpb24gYXQgYSB0aW1lXHJcblx0XHRcdFx0SXQgaXMgY2FsbGVkIHR3aWNlIGZvciBlYWNoIHNjcm9sbCBvdGhlcndpc2UsIGFzIGluIGNhc2Ugb2YgdXNpbmcgYW5jaG9ybGlua3MgYGhhc2hDaGFuZ2VgIFxyXG5cdFx0XHRcdGV2ZW50IGlzIGZpcmVkIG9uIGV2ZXJ5IHNjcm9sbCB0b28uKi9cclxuXHRcdFx0XHRpZiAoKHNlY3Rpb24gJiYgc2VjdGlvbiAhPT0gbGFzdFNjcm9sbGVkRGVzdGlueSkgJiYgIWlzRmlyc3RTbGlkZU1vdmUgfHwgaXNGaXJzdFNjcm9sbE1vdmUgfHwgKCFzbGlkZU1vdmluZyAmJiBsYXN0U2Nyb2xsZWRTbGlkZSAhPSBzbGlkZSApKSAge1xyXG5cdFx0XHRcdFx0c2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb24sIHNsaWRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTbGlkaW5nIHdpdGggYXJyb3cga2V5cywgYm90aCwgdmVydGljYWwgYW5kIGhvcml6b250YWxcclxuXHRcdCAqL1xyXG5cdFx0JChkb2N1bWVudCkua2V5ZG93bihmdW5jdGlvbihlKSB7XHJcblx0XHRcdC8vTW92aW5nIHRoZSBtYWluIHBhZ2Ugd2l0aCB0aGUga2V5Ym9hcmQgYXJyb3dzIGlmIGtleWJvYXJkIHNjcm9sbGluZyBpcyBlbmFibGVkXHJcblx0XHRcdGlmIChvcHRpb25zLmtleWJvYXJkU2Nyb2xsaW5nICYmICFpc01vdmluZykge1xyXG5cdFx0XHRcdHN3aXRjaCAoZS53aGljaCkge1xyXG5cdFx0XHRcdFx0Ly91cFxyXG5cdFx0XHRcdFx0Y2FzZSAzODpcclxuXHRcdFx0XHRcdGNhc2UgMzM6XHJcblx0XHRcdFx0XHRcdCQuZm4uZnVsbHBhZ2UubW92ZVNlY3Rpb25VcCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHQvL2Rvd25cclxuXHRcdFx0XHRcdGNhc2UgNDA6XHJcblx0XHRcdFx0XHRjYXNlIDM0OlxyXG5cdFx0XHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTZWN0aW9uRG93bigpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHQvL2xlZnRcclxuXHRcdFx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdFx0XHRcdCQuZm4uZnVsbHBhZ2UubW92ZVNsaWRlTGVmdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHQvL3JpZ2h0XHJcblx0XHRcdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTbGlkZVJpZ2h0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHJldHVybjsgLy8gZXhpdCB0aGlzIGhhbmRsZXIgZm9yIG90aGVyIGtleXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvL25hdmlnYXRpb24gYWN0aW9uIFxyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNmdWxsUGFnZS1uYXYgYScsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciBpbmRleCA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoKTtcclxuXHRcdFx0c2Nyb2xsUGFnZSgkKCcuc2VjdGlvbicpLmVxKGluZGV4KSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Ly9uYXZpZ2F0aW9uIHRvb2x0aXBzIFxyXG5cdFx0JChkb2N1bWVudCkub24oe1xyXG5cdFx0XHRtb3VzZWVudGVyOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciB0b29sdGlwID0gJCh0aGlzKS5kYXRhKCd0b29sdGlwJyk7XHJcblx0XHRcdFx0JCgnPGRpdiBjbGFzcz1cImZ1bGxQYWdlLXRvb2x0aXAgJyArIG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uICsnXCI+JyArIHRvb2x0aXAgKyAnPC9kaXY+JykuaGlkZSgpLmFwcGVuZFRvKCQodGhpcykpLmZhZGVJbigyMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb3VzZWxlYXZlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCQodGhpcykuZmluZCgnLmZ1bGxQYWdlLXRvb2x0aXAnKS5mYWRlT3V0KCkucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sICcjZnVsbFBhZ2UtbmF2IGxpJyk7XHJcblxyXG5cclxuXHRcdGlmKG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHMpe1xyXG5cdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2VvdmVyJywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQuZm4uZnVsbHBhZ2Uuc2V0TW91c2VXaGVlbFNjcm9sbGluZyhmYWxzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlb3V0Jywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkLmZuLmZ1bGxwYWdlLnNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNjcm9sbGluZyBob3Jpem9udGFsbHkgd2hlbiBjbGlja2luZyBvbiB0aGUgc2xpZGVyIGNvbnRyb2xzLlxyXG5cdFx0ICovXHJcblx0XHQkKCcuc2VjdGlvbicpLm9uKCdjbGljaycsICcuY29udHJvbEFycm93JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdwcmV2JykpIHtcclxuXHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTbGlkZUxlZnQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkLmZuLmZ1bGxwYWdlLm1vdmVTbGlkZVJpZ2h0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY3JvbGxpbmcgaG9yaXpvbnRhbGx5IHdoZW4gY2xpY2tpbmcgb24gdGhlIHNsaWRlciBjb250cm9scy5cclxuXHRcdCAqL1xyXG5cdFx0JCgnLnNlY3Rpb24nKS5vbignY2xpY2snLCAnLnRvU2xpZGUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBzbGlkZXMgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zZWN0aW9uJykuZmluZCgnLnNsaWRlcycpO1xyXG5cdFx0XHR2YXIgY3VycmVudFNsaWRlID0gc2xpZGVzLmZpbmQoJy5zbGlkZS5hY3RpdmUnKTtcclxuXHRcdFx0dmFyIGRlc3RpbnkgPSBudWxsO1xyXG5cdFx0XHRcclxuXHRcdFx0ZGVzdGlueSA9IHNsaWRlcy5maW5kKCcuc2xpZGUnKS5lcSggKCQodGhpcykuZGF0YSgnaW5kZXgnKSAtMSkgKTtcclxuXHJcblx0XHRcdGlmKGRlc3RpbnkubGVuZ3RoID4gMCl7XHJcblx0XHRcdFx0bGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCogU2Nyb2xscyBob3Jpem9udGFsIHNsaWRlcnMuXHJcblx0XHQqL1xyXG5cdFx0ZnVuY3Rpb24gbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSl7XHJcblx0XHRcdHZhciBkZXN0aW55UG9zID0gZGVzdGlueS5wb3NpdGlvbigpO1xyXG5cdFx0XHR2YXIgc2xpZGVzQ29udGFpbmVyID0gc2xpZGVzLmZpbmQoJy5zbGlkZXNDb250YWluZXInKS5wYXJlbnQoKTtcclxuXHRcdFx0dmFyIHNsaWRlSW5kZXggPSBkZXN0aW55LmluZGV4KCk7XHJcblx0XHRcdHZhciBzZWN0aW9uID0gc2xpZGVzLmNsb3Nlc3QoJy5zZWN0aW9uJyk7XHJcblx0XHRcdHZhciBzZWN0aW9uSW5kZXggPSBzZWN0aW9uLmluZGV4KCcuc2VjdGlvbicpO1xyXG5cdFx0XHR2YXIgYW5jaG9yTGluayA9IHNlY3Rpb24uZGF0YSgnYW5jaG9yJyk7XHJcblx0XHRcdHZhciBzbGlkZXNOYXYgPSBzZWN0aW9uLmZpbmQoJy5mdWxsUGFnZS1zbGlkZXNOYXYnKTtcclxuXHRcdFx0dmFyIHNsaWRlQW5jaG9yID0gZGVzdGlueS5kYXRhKCdhbmNob3InKTtcclxuXHRcclxuXHRcdFx0Ly9jYWNoaW5nIHRoZSB2YWx1ZSBvZiBpc1Jlc2l6aW5nIGF0IHRoZSBtb21tZW50IHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgXHJcblx0XHRcdC8vYmVjYXVzZSBpdCB3aWxsIGJlIGNoZWNrZWQgbGF0ZXIgaW5zaWRlIGEgc2V0VGltZW91dCBhbmQgdGhlIHZhbHVlIG1pZ2h0IGNoYW5nZVxyXG5cdFx0XHR2YXIgbG9jYWxJc1Jlc2l6aW5nID0gaXNSZXNpemluZzsgXHJcblxyXG5cdFx0XHRpZihvcHRpb25zLm9uU2xpZGVMZWF2ZSl7XHJcblx0XHRcdFx0dmFyIHByZXZTbGlkZUluZGV4ID0gc2VjdGlvbi5maW5kKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKTtcclxuXHRcdFx0XHR2YXIgeE1vdmVtZW50ID0gZ2V0WG1vdmVtZW50KHByZXZTbGlkZUluZGV4LCBzbGlkZUluZGV4KTtcclxuXHJcblx0XHRcdFx0Ly9pZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG5cdFx0XHRcdGlmKCFsb2NhbElzUmVzaXppbmcpe1xyXG5cdFx0XHRcdFx0JC5pc0Z1bmN0aW9uKCBvcHRpb25zLm9uU2xpZGVMZWF2ZSApICYmIG9wdGlvbnMub25TbGlkZUxlYXZlLmNhbGwoIHRoaXMsIGFuY2hvckxpbmssIChzZWN0aW9uSW5kZXggKyAxKSwgcHJldlNsaWRlSW5kZXgsIHhNb3ZlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdGRlc3RpbnkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiBzbGlkZUFuY2hvciA9PT0gJ3VuZGVmaW5lZCcpe1xyXG5cdFx0XHRcdHNsaWRlQW5jaG9yID0gc2xpZGVJbmRleDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly9vbmx5IGNoYW5naW5nIHRoZSBVUkwgaWYgdGhlIHNsaWRlcyBhcmUgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbiAobm90IGZvciByZXNpemUgcmUtYWRqdXN0aW5nKVxyXG5cdFx0XHRpZihzZWN0aW9uLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmKCFvcHRpb25zLmxvb3BIb3Jpem9udGFsKXtcclxuXHRcdFx0XHRcdC8vaGlkZGluZyBpdCBmb3IgdGhlIGZpc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XHJcblx0XHRcdFx0XHRzZWN0aW9uLmZpbmQoJy5jb250cm9sQXJyb3cucHJldicpLnRvZ2dsZShzbGlkZUluZGV4IT0wKTtcclxuXHJcblx0XHRcdFx0XHQvL2hpZGRpbmcgaXQgZm9yIHRoZSBsYXN0IHNsaWRlLCBzaG93aW5nIGZvciB0aGUgcmVzdFxyXG5cdFx0XHRcdFx0c2VjdGlvbi5maW5kKCcuY29udHJvbEFycm93Lm5leHQnKS50b2dnbGUoIWRlc3RpbnkuaXMoJzpsYXN0LWNoaWxkJykpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2V0VVJMSGFzaChzbGlkZUluZGV4LCBzbGlkZUFuY2hvciwgYW5jaG9yTGluayk7XHRcdFx0XHRcclxuXHRcdFx0fVx0XHRcdFxyXG5cclxuXHRcdFx0aWYob3B0aW9ucy5jc3MzKXtcclxuXHRcdFx0XHR2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoLScgKyBkZXN0aW55UG9zLmxlZnQgKyAncHgsIDBweCwgMHB4KSc7XHJcblxyXG5cdFx0XHRcdHNsaWRlcy5maW5kKCcuc2xpZGVzQ29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2Vhc2luZycsIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQ+MCkuY3NzKGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2QpKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0Ly9pZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG5cdFx0XHRcdFx0aWYoIWxvY2FsSXNSZXNpemluZyl7XHJcblx0XHRcdFx0XHRcdCQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclNsaWRlTG9hZCApICYmIG9wdGlvbnMuYWZ0ZXJTbGlkZUxvYWQuY2FsbCggdGhpcywgYW5jaG9yTGluaywgKHNlY3Rpb25JbmRleCArIDEpLCBzbGlkZUFuY2hvciwgc2xpZGVJbmRleCApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHNsaWRlTW92aW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgb3B0aW9ucy5lYXNpbmcpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRzbGlkZXNDb250YWluZXIuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRzY3JvbGxMZWZ0IDogZGVzdGlueVBvcy5sZWZ0XHJcblx0XHRcdFx0fSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgb3B0aW9ucy5lYXNpbmcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdC8vaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuXHRcdFx0XHRcdGlmKCFsb2NhbElzUmVzaXppbmcpe1xyXG5cdFx0XHRcdFx0XHQkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJTbGlkZUxvYWQgKSAmJiBvcHRpb25zLmFmdGVyU2xpZGVMb2FkLmNhbGwoIHRoaXMsIGFuY2hvckxpbmssIChzZWN0aW9uSW5kZXggKyAxKSwgc2xpZGVBbmNob3IsIHNsaWRlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHQvL2xldHRpbmcgdGhlbSBzbGlkZSBhZ2FpblxyXG5cdFx0XHRcdFx0c2xpZGVNb3ZpbmcgPSBmYWxzZTsgXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHNsaWRlc05hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRzbGlkZXNOYXYuZmluZCgnbGknKS5lcShzbGlkZUluZGV4KS5maW5kKCdhJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdGlmICghaXNUYWJsZXQpIHtcclxuXHRcdFx0dmFyIHJlc2l6ZUlkO1xyXG5cclxuXHRcdFx0Ly93aGVuIHJlc2l6aW5nIHRoZSBzaXRlLCB3ZSBhZGp1c3QgdGhlIGhlaWdodHMgb2YgdGhlIHNlY3Rpb25zXHJcblx0XHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly9pbiBvcmRlciB0byBjYWxsIHRoZSBmdW5jdGlvbnMgb25seSB3aGVuIHRoZSByZXNpemUgaXMgZmluaXNoZWRcclxuXHRcdFx0XHQvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI5ODYxMi9qcXVlcnktaG93LXRvLWNhbGwtcmVzaXplLWV2ZW50LW9ubHktb25jZS1pdHMtZmluaXNoZWQtcmVzaXppbmdcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQocmVzaXplSWQpO1xyXG5cdFx0XHRcdHJlc2l6ZUlkID0gc2V0VGltZW91dChkb25lUmVzaXppbmcsIDUwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dmFyIHN1cHBvcnRzT3JpZW50YXRpb25DaGFuZ2UgPSBcIm9ub3JpZW50YXRpb25jaGFuZ2VcIiBpbiB3aW5kb3csXHJcblx0XHRvcmllbnRhdGlvbkV2ZW50ID0gc3VwcG9ydHNPcmllbnRhdGlvbkNoYW5nZSA/IFwib3JpZW50YXRpb25jaGFuZ2VcIiA6IFwicmVzaXplXCI7XHJcblx0XHRcclxuXHRcdCQod2luZG93KS5iaW5kKG9yaWVudGF0aW9uRXZlbnQgLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoaXNUYWJsZXQpe1xyXG5cdFx0XHRcdGRvbmVSZXNpemluZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogV2hlbiByZXNpemluZyBpcyBmaW5pc2hlZCwgd2UgYWRqdXN0IHRoZSBzbGlkZXMgc2l6ZXMgYW5kIHBvc2l0aW9uc1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBkb25lUmVzaXppbmcoKSB7XHJcblx0XHRcdGlzUmVzaXppbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0dmFyIHdpbmRvd3NXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdFx0XHR3aW5kb3dzSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cclxuXHRcdFx0Ly90ZXh0IGFuZCBpbWFnZXMgcmVzaXppbmdcclxuXHRcdFx0aWYgKG9wdGlvbnMucmVzaXplKSB7XHJcblx0XHRcdFx0cmVzaXplTWUod2luZG93c0hlaWdodCwgd2luZG93c1dpZHRoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JCgnLnNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyIHNjcm9sbEhlaWdodCA9IHdpbmRvd3NIZWlnaHQgLSBwYXJzZUludCgkKHRoaXMpLmNzcygncGFkZGluZy1ib3R0b20nKSkgLSBwYXJzZUludCgkKHRoaXMpLmNzcygncGFkZGluZy10b3AnKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdC8vYWRqdXN0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlLWNlbGwgZm9yIElFIGFuZCBGaXJlZm94XHJcblx0XHRcdFx0aWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLnRhYmxlQ2VsbCcpLmNzcygnaGVpZ2h0JywgZ2V0VGFibGVIZWlnaHQoJCh0aGlzKSkgKyAncHgnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2hlaWdodCcsIHdpbmRvd3NIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0Ly9yZXNpemluZyB0aGUgc2Nyb2xsaW5nIGRpdnNcclxuXHRcdFx0XHRpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuXHRcdFx0XHRcdHZhciBzbGlkZXMgPSAkKHRoaXMpLmZpbmQoJy5zbGlkZScpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihzbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRcdFx0c2xpZGVzLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGVTbGltU2Nyb2xsaW5nKCQodGhpcykpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRjcmVhdGVTbGltU2Nyb2xsaW5nKCQodGhpcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHQvL2FkanVzdGluZyB0aGUgcG9zaXRpb24gZm8gdGhlIEZVTEwgV0lEVEggc2xpZGVzLi4uXHJcblx0XHRcdFx0dmFyIHNsaWRlcyA9ICQodGhpcykuZmluZCgnLnNsaWRlcycpO1xyXG5cdFx0XHRcdGlmIChzbGlkZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBzbGlkZXMuZmluZCgnLnNsaWRlLmFjdGl2ZScpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly9hZGp1c3RpbmcgdGhlIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBzZWN0aW9uXHJcblx0XHRcdHZhciBkZXN0aW55UG9zID0gJCgnLnNlY3Rpb24uYWN0aXZlJykucG9zaXRpb24oKTtcclxuXHJcblx0XHRcdHZhciBhY3RpdmVTZWN0aW9uID0gJCgnLnNlY3Rpb24uYWN0aXZlJyk7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2lzbid0IGl0IHRoZSBmaXJzdCBzZWN0aW9uP1xyXG5cdFx0XHRpZihhY3RpdmVTZWN0aW9uLmluZGV4KCcuc2VjdGlvbicpKXtcclxuXHRcdFx0XHRzY3JvbGxQYWdlKGFjdGl2ZVNlY3Rpb24pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpc1Jlc2l6aW5nID0gZmFsc2U7XHJcblx0XHRcdCQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlc2l6ZSApICYmIG9wdGlvbnMuYWZ0ZXJSZXNpemUuY2FsbCggdGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXNpemluZyBvZiB0aGUgZm9udCBzaXplIGRlcGVuZGluZyBvbiB0aGUgd2luZG93IHNpemUgYXMgd2VsbCBhcyBzb21lIG9mIHRoZSBpbWFnZXMgb24gdGhlIHNpdGUuXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHJlc2l6ZU1lKGRpc3BsYXlIZWlnaHQsIGRpc3BsYXlXaWR0aCkge1xyXG5cdFx0XHQvL1N0YW5kYXJkIGhlaWdodCwgZm9yIHdoaWNoIHRoZSBib2R5IGZvbnQgc2l6ZSBpcyBjb3JyZWN0XHJcblx0XHRcdHZhciBwcmVmZXJyZWRIZWlnaHQgPSA4MjU7XHJcblx0XHRcdHZhciB3aW5kb3dTaXplID0gZGlzcGxheUhlaWdodDtcclxuXHJcblx0XHRcdC8qIFByb2JsZW0gdG8gYmUgc29sdmVkXHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZGlzcGxheUhlaWdodCA8IDgyNSkge1xyXG5cdFx0XHRcdHZhciBwZXJjZW50YWdlID0gKHdpbmRvd1NpemUgKiAxMDApIC8gcHJlZmVycmVkSGVpZ2h0O1xyXG5cdFx0XHRcdHZhciBuZXdGb250U2l6ZSA9IHBlcmNlbnRhZ2UudG9GaXhlZCgyKTtcclxuXHJcblx0XHRcdFx0JChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIG5ld1dpZHRoID0gKCg4MCAqIHBlcmNlbnRhZ2UpIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5jc3MoXCJ3aWR0aFwiLCBuZXdXaWR0aCArICclJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5jc3MoXCJ3aWR0aFwiLCAnJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0qL1xyXG5cclxuXHRcdFx0aWYgKGRpc3BsYXlIZWlnaHQgPCA4MjUgfHwgZGlzcGxheVdpZHRoIDwgOTAwKSB7XHJcblx0XHRcdFx0aWYgKGRpc3BsYXlXaWR0aCA8IDkwMCkge1xyXG5cdFx0XHRcdFx0d2luZG93U2l6ZSA9IGRpc3BsYXlXaWR0aDtcclxuXHRcdFx0XHRcdHByZWZlcnJlZEhlaWdodCA9IDkwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSAod2luZG93U2l6ZSAqIDEwMCkgLyBwcmVmZXJyZWRIZWlnaHQ7XHJcblx0XHRcdFx0dmFyIG5ld0ZvbnRTaXplID0gcGVyY2VudGFnZS50b0ZpeGVkKDIpO1xyXG5cclxuXHRcdFx0XHQkKFwiYm9keVwiKS5jc3MoXCJmb250LXNpemVcIiwgbmV3Rm9udFNpemUgKyAnJScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoXCJib2R5XCIpLmNzcyhcImZvbnQtc2l6ZVwiLCAnMTAwJScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWN0aXZhdGluZyB0aGUgd2Vic2l0ZSBuYXZpZ2F0aW9uIGRvdHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhY3RpdmF0ZU5hdkRvdHMobmFtZSwgc2VjdGlvbkluZGV4KXtcclxuXHRcdFx0aWYob3B0aW9ucy5uYXZpZ2F0aW9uKXtcclxuXHRcdFx0XHQkKCcjZnVsbFBhZ2UtbmF2JykuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRpZihuYW1lKXsgXHJcblx0XHRcdFx0XHQkKCcjZnVsbFBhZ2UtbmF2JykuZmluZCgnYVtocmVmPVwiIycgKyBuYW1lICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdCQoJyNmdWxsUGFnZS1uYXYnKS5maW5kKCdsaScpLmVxKHNlY3Rpb25JbmRleCkuZmluZCgnYScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWN0aXZhdGluZyB0aGUgd2Vic2l0ZSBtYWluIG1lbnUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhY3RpdmF0ZU1lbnVFbGVtZW50KG5hbWUpe1xyXG5cdFx0XHRpZihvcHRpb25zLm1lbnUpe1xyXG5cdFx0XHRcdCQob3B0aW9ucy5tZW51KS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdCQob3B0aW9ucy5tZW51KS5maW5kKCdbZGF0YS1tZW51YW5jaG9yPVwiJytuYW1lKydcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQqIFJldHVybiBhIGJvb2xlYW4gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHNjcm9sbGFibGUgZWxlbWVudCBpcyBhdCB0aGUgZW5kIG9yIGF0IHRoZSBzdGFydCBvZiB0aGUgc2Nyb2xsaW5nXHJcblx0XHQqIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gdHlwZS5cclxuXHRcdCovXHJcblx0XHRmdW5jdGlvbiBpc1Njcm9sbGVkKHR5cGUsIHNjcm9sbGFibGUpe1xyXG5cdFx0XHRpZih0eXBlID09PSAndG9wJyl7XHJcblx0XHRcdFx0cmV0dXJuICFzY3JvbGxhYmxlLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHR9ZWxzZSBpZih0eXBlID09PSAnYm90dG9tJyl7XHJcblx0XHRcdFx0cmV0dXJuIHNjcm9sbGFibGUuc2Nyb2xsVG9wKCkgKyBzY3JvbGxhYmxlLmlubmVySGVpZ2h0KCkgPj0gc2Nyb2xsYWJsZVswXS5zY3JvbGxIZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQqIFJldHVucyBgdXBgIG9yIGBkb3duYCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cclxuXHRcdCogZnJvbSB0aGUgY3VycmVudCBzZWN0aW9uLlxyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIGdldFltb3ZlbWVudChkZXN0aW55KXtcclxuXHRcdFx0dmFyIGZyb21JbmRleCA9ICQoJy5zZWN0aW9uLmFjdGl2ZScpLmluZGV4KCcuc2VjdGlvbicpO1xyXG5cdFx0XHR2YXIgdG9JbmRleCA9IGRlc3RpbnkuaW5kZXgoJy5zZWN0aW9uJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihmcm9tSW5kZXggPiB0b0luZGV4KXtcclxuXHRcdFx0XHRyZXR1cm4gJ3VwJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJ2Rvd24nO1xyXG5cdFx0fVx0XHJcblxyXG5cdFx0LyoqXHJcblx0XHQqIFJldHVucyBgcmlnaHRgIG9yIGBsZWZ0YCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cclxuXHRcdCogZnJvbSB0aGUgY3VycmVudCBzbGlkZS5cclxuXHRcdCovXHJcblx0XHRmdW5jdGlvbiBnZXRYbW92ZW1lbnQoZnJvbUluZGV4LCB0b0luZGV4KXtcclxuXHRcdFx0aWYoIGZyb21JbmRleCA9PSB0b0luZGV4KXtcclxuXHRcdFx0XHRyZXR1cm4gJ25vbmUnXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZnJvbUluZGV4ID4gdG9JbmRleCl7XHJcblx0XHRcdFx0cmV0dXJuICdsZWZ0JztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJ3JpZ2h0JztcclxuXHRcdH1cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlU2xpbVNjcm9sbGluZyhlbGVtZW50KXtcclxuXHRcdFx0Ly9uZWVkZWQgdG8gbWFrZSBgc2Nyb2xsSGVpZ2h0YCB3b3JrIHVuZGVyIE9wZXJhIDEyXHJcblx0XHRcdGVsZW1lbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vaW4gY2FzZSBlbGVtZW50IGlzIGEgc2xpZGVcclxuXHRcdFx0dmFyIHNlY3Rpb24gPSBlbGVtZW50LmNsb3Nlc3QoJy5zZWN0aW9uJyk7XHJcblx0XHRcdHZhciBzY3JvbGxhYmxlID0gZWxlbWVudC5maW5kKCcuc2Nyb2xsYWJsZScpO1xyXG5cclxuXHRcdFx0Ly9pZiB0aGVyZSB3YXMgc2Nyb2xsLCB0aGUgY29udGVudEhlaWdodCB3aWxsIGJlIHRoZSBvbmUgaW4gdGhlIHNjcm9sbGFibGUgc2VjdGlvblxyXG5cdFx0XHRpZihzY3JvbGxhYmxlLmxlbmd0aCl7XHJcblx0XHRcdFx0dmFyIGNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LmZpbmQoJy5zY3JvbGxhYmxlJykuZ2V0KDApLnNjcm9sbEhlaWdodDtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dmFyIGNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LmdldCgwKS5zY3JvbGxIZWlnaHQ7XHJcblx0XHRcdFx0aWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuXHRcdFx0XHRcdGNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LmZpbmQoJy50YWJsZUNlbGwnKS5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHNjcm9sbEhlaWdodCA9IHdpbmRvd3NIZWlnaHQgLSBwYXJzZUludChzZWN0aW9uLmNzcygncGFkZGluZy1ib3R0b20nKSkgLSBwYXJzZUludChzZWN0aW9uLmNzcygncGFkZGluZy10b3AnKSk7XHJcblxyXG5cdFx0XHQvL25lZWRzIHNjcm9sbD9cclxuXHRcdFx0aWYgKCBjb250ZW50SGVpZ2h0ID4gc2Nyb2xsSGVpZ2h0KSB7XHJcblx0XHRcdFx0Ly93YXMgdGhlcmUgYWxyZWFkeSBhbiBzY3JvbGwgPyBVcGRhdGluZyBpdFxyXG5cdFx0XHRcdGlmKHNjcm9sbGFibGUubGVuZ3RoKXtcclxuXHRcdFx0XHRcdHNjcm9sbGFibGUuY3NzKCdoZWlnaHQnLCBzY3JvbGxIZWlnaHQgKyAncHgnKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsIHNjcm9sbEhlaWdodCArICdweCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL2NyZWF0aW5nIHRoZSBzY3JvbGxpbmdcclxuXHRcdFx0XHRlbHNle1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKG9wdGlvbnMudmVydGljYWxDZW50ZXJlZCl7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZmluZCgnLnRhYmxlQ2VsbCcpLndyYXBJbm5lcignPGRpdiBjbGFzcz1cInNjcm9sbGFibGVcIiAvPicpO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwic2Nyb2xsYWJsZVwiIC8+Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbmQoJy5zY3JvbGxhYmxlJykuc2xpbVNjcm9sbCh7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogc2Nyb2xsSGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRcdFx0c2l6ZTogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vcmVtb3ZpbmcgdGhlIHNjcm9sbGluZyB3aGVuIGl0IGlzIG5vdCBuZWNlc3NhcnkgYW55bW9yZVxyXG5cdFx0XHRlbHNle1x0XHRcdFx0XHJcblx0XHRcdFx0ZWxlbWVudC5maW5kKCcuc2Nyb2xsYWJsZScpLmNoaWxkcmVuKCkuZmlyc3QoKS51bndyYXAoKS51bndyYXAoKTtcclxuXHRcdFx0XHRlbGVtZW50LmZpbmQoJy5zbGltU2Nyb2xsQmFyJykucmVtb3ZlKCk7XHJcblx0XHRcdFx0ZWxlbWVudC5maW5kKCcuc2xpbVNjcm9sbFJhaWwnKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly91bmRvIFxyXG5cdFx0XHRlbGVtZW50LmNzcygnb3ZlcmZsb3cnLCAnJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIGFkZFRhYmxlQ2xhc3MoZWxlbWVudCl7XHJcblx0XHRcdGVsZW1lbnQuYWRkQ2xhc3MoJ3RhYmxlJykud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwidGFibGVDZWxsXCIgc3R5bGU9XCJoZWlnaHQ6JyArIGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpICsgJ3B4O1wiIC8+Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpe1xyXG5cdFx0XHR2YXIgc2VjdGlvbkhlaWdodCA9IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG5cdFx0XHRpZihvcHRpb25zLnBhZGRpbmdUb3AgfHwgb3B0aW9ucy5wYWRkaW5nQm90dG9tKXtcclxuXHRcdFx0XHR2YXIgc2VjdGlvbiA9IGVsZW1lbnQ7XHJcblx0XHRcdFx0aWYoIXNlY3Rpb24uaGFzQ2xhc3MoJ3NlY3Rpb24nKSl7XHJcblx0XHRcdFx0XHRzZWN0aW9uID0gZWxlbWVudC5jbG9zZXN0KCcuc2VjdGlvbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFx0dmFyIHBhZGRpbmdzID0gcGFyc2VJbnQoc2VjdGlvbi5jc3MoJ3BhZGRpbmctdG9wJykpICsgcGFyc2VJbnQoc2VjdGlvbi5jc3MoJ3BhZGRpbmctYm90dG9tJykpO1xyXG5cdFx0XHRcdHNlY3Rpb25IZWlnaHQgPSAod2luZG93c0hlaWdodCAtIHBhZGRpbmdzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHNlY3Rpb25IZWlnaHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0KiBBZGRzIGEgY3NzMyB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdGhlIGNvbnRhaW5lciBjbGFzcyB3aXRoIG9yIHdpdGhvdXQgYW5pbWF0aW9uIGRlcGVuZGluZyBvbiB0aGUgYW5pbWF0ZWQgcGFyYW0uXHJcblx0XHQqL1xyXG5cdFx0ZnVuY3Rpb24gdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCBhbmltYXRlZCl7XHJcblx0XHRcdGNvbnRhaW5lci50b2dnbGVDbGFzcygnZWFzaW5nJywgYW5pbWF0ZWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29udGFpbmVyLmNzcyhnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQqIFNjcm9sbHMgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlIFxyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIHNjcm9sbFBhZ2VBbmRTbGlkZShkZXN0aW55LCBzbGlkZSl7XHJcblx0XHRcdGlmICh0eXBlb2Ygc2xpZGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdCAgICBzbGlkZSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGlzTmFOKGRlc3RpbnkpKXtcclxuXHRcdFx0XHR2YXIgc2VjdGlvbiA9ICQoJ1tkYXRhLWFuY2hvcj1cIicrZGVzdGlueSsnXCJdJyk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHZhciBzZWN0aW9uID0gJCgnLnNlY3Rpb24nKS5lcSggKGRlc3RpbnkgLTEpICk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQvL3dlIG5lZWQgdG8gc2Nyb2xsIHRvIHRoZSBzZWN0aW9uIGFuZCB0aGVuIHRvIHRoZSBzbGlkZVxyXG5cdFx0XHRpZiAoZGVzdGlueSAhPT0gbGFzdFNjcm9sbGVkRGVzdGlueSAmJiAhc2VjdGlvbi5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG5cdFx0XHRcdHNjcm9sbFBhZ2Uoc2VjdGlvbiwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHNjcm9sbFNsaWRlcihzZWN0aW9uLCBzbGlkZSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2lmIHdlIHdlcmUgYWxyZWFkeSBpbiB0aGUgc2VjdGlvblxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHNjcm9sbFNsaWRlcihzZWN0aW9uLCBzbGlkZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0KiBTY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIHNjcm9sbFNsaWRlcihzZWN0aW9uLCBzbGlkZSl7XHJcblx0XHRcdGlmKHR5cGVvZiBzbGlkZSAhPSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0dmFyIHNsaWRlcyA9IHNlY3Rpb24uZmluZCgnLnNsaWRlcycpO1xyXG5cdFx0XHRcdHZhciBkZXN0aW55ID0gIHNsaWRlcy5maW5kKCdbZGF0YS1hbmNob3I9XCInK3NsaWRlKydcIl0nKTtcclxuXHJcblx0XHRcdFx0aWYoIWRlc3RpbnkubGVuZ3RoKXtcclxuXHRcdFx0XHRcdGRlc3RpbnkgPSBzbGlkZXMuZmluZCgnLnNsaWRlJykuZXEoc2xpZGUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoZGVzdGlueS5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0bGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0KiBDcmVhdGVzIGEgbGFuZHNjYXBlIG5hdmlnYXRpb24gYmFyIHdpdGggZG90cyBmb3IgaG9yaXpvbnRhbCBzbGlkZXJzLlxyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIGFkZFNsaWRlc05hdmlnYXRpb24oc2VjdGlvbiwgbnVtU2xpZGVzKXtcdFx0XHRcdFx0XHRcclxuXHRcdFx0c2VjdGlvbi5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmdWxsUGFnZS1zbGlkZXNOYXZcIj48dWw+PC91bD48L2Rpdj4nKTtcclxuXHRcdFx0dmFyIG5hdiA9IHNlY3Rpb24uZmluZCgnLmZ1bGxQYWdlLXNsaWRlc05hdicpO1xyXG5cclxuXHRcdFx0Ly90b3Agb3IgYm90dG9tXHJcblx0XHRcdG5hdi5hZGRDbGFzcyhvcHRpb25zLnNsaWRlc05hdlBvc2l0aW9uKTtcclxuXHJcblx0XHRcdGZvcih2YXIgaT0wOyBpPCBudW1TbGlkZXM7IGkrKyl7XHRcdFx0XHJcblx0XHRcdFx0bmF2LmZpbmQoJ3VsJykuYXBwZW5kKCc8bGk+PGEgaHJlZj1cIiNcIj48c3Bhbj48L3NwYW4+PC9hPjwvbGk+Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vY2VudGVyaW5nIGl0XHJcblx0XHRcdG5hdi5jc3MoJ21hcmdpbi1sZWZ0JywgJy0nICsgKG5hdi53aWR0aCgpLzIpICsgJ3B4Jyk7XHJcblx0XHRcdFxyXG5cdFx0XHRuYXYuZmluZCgnbGknKS5maXJzdCgpLmZpbmQoJ2EnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHJcblx0XHQvKipcclxuXHRcdCogU2V0cyB0aGUgVVJMIGhhc2ggZm9yIGEgc2VjdGlvbiB3aXRoIHNsaWRlc1xyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIHNldFVSTEhhc2goc2xpZGVJbmRleCwgc2xpZGVBbmNob3IsIGFuY2hvckxpbmspe1xyXG5cdFx0XHR2YXIgc2VjdGlvbkhhc2ggPSAnJztcclxuXHJcblx0XHRcdGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpe1xyXG5cclxuXHRcdFx0XHQvL2lzbid0IGl0IHRoZSBmaXJzdCBzbGlkZT9cclxuXHRcdFx0XHRpZihzbGlkZUluZGV4KXtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBhbmNob3JMaW5rICE9PSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0XHRcdHNlY3Rpb25IYXNoID0gYW5jaG9yTGluaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL3NsaWRlIHdpdGhvdXQgYW5jaG9yIGxpbms/IFdlIHRha2UgdGhlIGluZGV4IGluc3RlYWQuXHJcblx0XHRcdFx0XHRpZih0eXBlb2Ygc2xpZGVBbmNob3IgPT09ICd1bmRlZmluZWQnKXtcclxuXHRcdFx0XHRcdFx0c2xpZGVBbmNob3IgPSBzbGlkZUluZGV4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsYXN0U2Nyb2xsZWRTbGlkZSA9IHNsaWRlQW5jaG9yO1xyXG5cdFx0XHRcdFx0bG9jYXRpb24uaGFzaCA9IHNlY3Rpb25IYXNoICsgJy8nICsgc2xpZGVBbmNob3I7XHJcblxyXG5cdFx0XHRcdC8vZmlyc3Qgc2xpZGUgd29uJ3QgaGF2ZSBzbGlkZSBhbmNob3IsIGp1c3QgdGhlIHNlY3Rpb24gb25lXHJcblx0XHRcdFx0fWVsc2UgaWYodHlwZW9mIHNsaWRlSW5kZXggIT09ICd1bmRlZmluZWQnKXtcclxuXHRcdFx0XHRcdGxhc3RTY3JvbGxlZFNsaWRlID0gc2xpZGVBbmNob3I7XHJcblx0XHRcdFx0XHRsb2NhdGlvbi5oYXNoID0gYW5jaG9yTGluaztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vc2VjdGlvbiB3aXRob3V0IHNsaWRlc1xyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRsb2NhdGlvbi5oYXNoID0gYW5jaG9yTGluaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCogU2Nyb2xscyB0aGUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZSBkZXN0aW5hdGlvbiBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuXHRcdCovXHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZ1bGxQYWdlLXNsaWRlc05hdiBhJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIHNsaWRlcyA9ICQodGhpcykuY2xvc2VzdCgnLnNlY3Rpb24nKS5maW5kKCcuc2xpZGVzJyk7XHRcdFxyXG5cdFx0XHR2YXIgZGVzdGlueSA9IHNsaWRlcy5maW5kKCcuc2xpZGUnKS5lcSgkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuaW5kZXgoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0KiBDaGVja3MgZm9yIHRyYW5zbGF0ZTNkIHN1cHBvcnQgXHJcblx0XHQqIEByZXR1cm4gYm9vbGVhblxyXG5cdFx0KiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2NjE2NzEvZGV0ZWN0aW5nLXRyYW5zZm9ybS10cmFuc2xhdGUzZC1zdXBwb3J0XHJcblx0XHQqL1xyXG5cdFx0ZnVuY3Rpb24gc3VwcG9ydDNkKCkge1xyXG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksIFxyXG5cdFx0XHRcdGhhczNkLFxyXG5cdFx0XHRcdHRyYW5zZm9ybXMgPSB7XHJcblx0XHRcdFx0XHQnd2Via2l0VHJhbnNmb3JtJzonLXdlYmtpdC10cmFuc2Zvcm0nLFxyXG5cdFx0XHRcdFx0J09UcmFuc2Zvcm0nOictby10cmFuc2Zvcm0nLFxyXG5cdFx0XHRcdFx0J21zVHJhbnNmb3JtJzonLW1zLXRyYW5zZm9ybScsXHJcblx0XHRcdFx0XHQnTW96VHJhbnNmb3JtJzonLW1vei10cmFuc2Zvcm0nLFxyXG5cdFx0XHRcdFx0J3RyYW5zZm9ybSc6J3RyYW5zZm9ybSdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGUuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBudWxsKTtcclxuXHJcblx0XHRcdGZvciAodmFyIHQgaW4gdHJhbnNmb3Jtcykge1xyXG5cdFx0XHRcdGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRlbC5zdHlsZVt0XSA9IFwidHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpXCI7XHJcblx0XHRcdFx0XHRoYXMzZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHRyYW5zZm9ybXNbdF0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKGhhczNkICE9PSB1bmRlZmluZWQgJiYgaGFzM2QubGVuZ3RoID4gMCAmJiBoYXMzZCAhPT0gXCJub25lXCIpO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQqIFJlbW92ZXMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmaXJlZCBieSB0aGUgbW91c2Ugd2hlZWwgYW5kIHRhY2twYWQuXHJcblx0XHQqIEFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgbW91c2V3aGVlbCBhbmQgdHJhY2twYWQgbW92ZW1lbnRzIHdvbid0IHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zLlxyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyKCl7XHJcblx0XHRcdGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vSUU5LCBDaHJvbWUsIFNhZmFyaSwgT3BlclxyXG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9GaXJlZm94XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbm1vdXNld2hlZWxcIiwgTW91c2VXaGVlbEhhbmRsZXIpOyAvL0lFIDYvNy84XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQqIEFkZHMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmb3IgdGhlIG1vdXNlIHdoZWVsIGFuZCB0YWNrcGFkLlxyXG5cdFx0KiBBZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIG1vdXNld2hlZWwgYW5kIHRyYWNrcGFkIG1vdmVtZW50cyB3aWxsIHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zXHJcblx0XHQqL1xyXG5cdFx0ZnVuY3Rpb24gYWRkTW91c2VXaGVlbEhhbmRsZXIoKXtcclxuXHRcdFx0aWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL0lFOSwgQ2hyb21lLCBTYWZhcmksIE9wZXJcclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9GaXJlZm94XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbm1vdXNld2hlZWxcIiwgTW91c2VXaGVlbEhhbmRsZXIpOyAvL0lFIDYvNy84XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCogQWRkcyB0aGUgcG9zc2liaWxpdHkgdG8gYXV0byBzY3JvbGwgdGhyb3VnaCBzZWN0aW9ucyBvbiB0b3VjaCBkZXZpY2VzLlxyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIGFkZFRvdWNoSGFuZGxlcigpe1xyXG5cdFx0XHRpZihpc1RhYmxldCl7XHJcblx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCd0b3VjaHN0YXJ0IE1TUG9pbnRlckRvd24nKS5vbigndG91Y2hzdGFydCBNU1BvaW50ZXJEb3duJywgdG91Y2hTdGFydEhhbmRsZXIpO1xyXG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9mZigndG91Y2htb3ZlIE1TUG9pbnRlck1vdmUnKS5vbigndG91Y2htb3ZlIE1TUG9pbnRlck1vdmUnLCB0b3VjaE1vdmVIYW5kbGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCogUmVtb3ZlcyB0aGUgYXV0byBzY3JvbGxpbmcgZm9yIHRvdWNoIGRldmljZXMuXHJcblx0XHQqL1xyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlVG91Y2hIYW5kbGVyKCl7XHJcblx0XHRcdGlmKGlzVGFibGV0KXtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ3RvdWNoc3RhcnQgTVNQb2ludGVyRG93bicpO1xyXG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9mZigndG91Y2htb3ZlIE1TUG9pbnRlck1vdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCogR2V0cyB0aGUgcGFnZVggYW5kIHBhZ2VZIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxyXG5cdFx0KiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE5NCNpc3N1ZWNvbW1lbnQtMzQwNjk4NTRcclxuXHRcdCovXHJcblx0XHRmdW5jdGlvbiBnZXRFdmVudHNQYWdlKGUpe1xyXG5cdFx0XHR2YXIgZXZlbnRzID0gbmV3IEFycmF5KCk7XHJcblx0XHRcdGlmICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpe1xyXG5cdFx0XHRcdGV2ZW50c1sneSddID0gZS5wYWdlWTtcclxuXHRcdFx0XHRldmVudHNbJ3gnXSA9IGUucGFnZVg7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGV2ZW50c1sneSddID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cdFx0XHRcdGV2ZW50c1sneCddID0gIGUudG91Y2hlc1swXS5wYWdlWDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGV2ZW50cztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzaWxlbnRTY3JvbGwodG9wKXtcclxuXHRcdFx0aWYgKG9wdGlvbnMuY3NzMykge1xyXG5cdFx0XHRcdHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgwcHgsIC0nICsgdG9wICsgJ3B4LCAwcHgpJztcclxuXHRcdFx0XHR0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRjb250YWluZXIuY3NzKFwidG9wXCIsIC10b3ApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCl7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Jy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNsYXRlM2QsXHJcblx0XHRcdFx0Jy1tb3otdHJhbnNmb3JtJzogdHJhbnNsYXRlM2QsXHJcblx0XHRcdFx0Jy1tcy10cmFuc2Zvcm0nOnRyYW5zbGF0ZTNkLFxyXG5cdFx0XHRcdCd0cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG59KShqUXVlcnkpO1xyXG4iLCIvKiFcclxuICogU3RhdGljIFdlYnNpdGUgU3RhcnRlciBLaXRcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L3N0YXRpYy1zaXRlLXN0YXJ0ZXJcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciBuYXZiYXIgPSAkKCcubmF2YmFyJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB2YXIgbWVudSA9ICQoJy5uYXYnLCBuYXZiYXIpO1xyXG4gICAgdmFyIGxvZ28gPSAkKCdzdmcgcGF0aCcsIG5hdmJhcik7XHJcbiAgICB2YXIgc2Nyb2xsaW5nU3BlZWQgPSA3MDA7XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzL1xyXG4gICAgJCgnI2Z1bGxwYWdlJykuZnVsbHBhZ2Uoe1xyXG4gICAgICAgIGFuY2hvcnM6IFsnaG9tZScsICdhYm91dCcsICdtZW51JywgJ3Bob3RvcycsICdjb250YWN0JywgJ3N0b3JlJ10sXHJcbiAgICAgICAgY3NzMzogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogc2Nyb2xsaW5nU3BlZWQsXHJcbiAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbiAoYW5jaG9yTGluaywgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyTG9hZCgnICsgYW5jaG9yTGluayArICcsICcgKyBpbmRleCArICcpJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYW4gYWN0aXZlIG1lbnUgaXRlbVxyXG4gICAgICAgICAgICAkKCdsaScsIG1lbnUpLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gKGluZGV4IC0gMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKGluZGV4LCBuZXh0SW5kZXgsIGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25MZWF2ZSgnICsgaW5kZXggKyAnLCAnICsgbmV4dEluZGV4ICsgJywgJyArIGRpcmVjdGlvbiArICcpJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBIaWRlIG1lbnUgb24gdGhlIGhvbWUgc2NyZWVuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9IDEgJiYgbmV4dEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5jc3Moe2JvcmRlckJvdHRvbUNvbG9yOiAnIzZkMDAwMCd9KTtcclxuICAgICAgICAgICAgICAgIGxvZ28uY3NzKHtmaWxsOiAnIzZkMDAwMCd9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9IDIgJiYgbmV4dEluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuY3NzKHtib3JkZXJCb3R0b21Db2xvcjogJyM2ZDAwMDAnfSk7XHJcbiAgICAgICAgICAgICAgICBsb2dvLmNzcyh7ZmlsbDogJyM2ZDAwMDAnfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyLmFuaW1hdGUoe2JvcmRlckJvdHRvbUNvbG9yOiAnI2ZmZjRlOCd9LCBzY3JvbGxpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nby5jc3Moe2ZpbGw6ICcjZmZmNGU4J30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXIuYW5pbWF0ZSh7Ym9yZGVyQm90dG9tQ29sb3I6ICcjNmQwMDAwJ30sIHNjcm9sbGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvLmNzcyh7ZmlsbDogJyM2ZDAwMDAnfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=