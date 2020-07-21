!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(i),i}:e(jQuery)}(function(l){function r(t,i){this.settings=i,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.yield={every:2,flushed:0},this.border=0<=i.border?i.border:i.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.rows=0,this.spinner={phase:0,timeSlot:150,$el:l('<div class="spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.scrollBarOn=!1,this.checkWidthIntervalId=null,this.galleryWidth=t.width(),this.$gallery=t}r.prototype.getSuffix=function(t,i){for(var e=i<t?t:i,s=0;s<this.suffixRanges.length;s++)if(e<=this.suffixRanges[s])return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];return this.settings.sizeRangeSuffixes[this.suffixRanges[s-1]]},r.prototype.removeSuffix=function(t,i){return t.substring(0,t.length-i.length)},r.prototype.endsWith=function(t,i){return-1!==t.indexOf(i,t.length-i.length)},r.prototype.getUsedSuffix=function(t){for(var i in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(i)){if(0===this.settings.sizeRangeSuffixes[i].length)continue;if(this.endsWith(t,this.settings.sizeRangeSuffixes[i]))return this.settings.sizeRangeSuffixes[i]}return""},r.prototype.newSrc=function(t,i,e,s){var n,r,o;return this.settings.thumbnailPath?o=this.settings.thumbnailPath(t,i,e,s):(r=null!==(n=t.match(this.settings.extension))?n[0]:"",o=t.replace(this.settings.extension,""),o=this.removeSuffix(o,this.getUsedSuffix(o)),o+=this.getSuffix(i,e)+r),o},r.prototype.showImg=function(t,i){this.settings.cssAnimation?(t.addClass("entry-visible"),i&&i()):(t.stop().fadeTo(this.settings.imagesAnimationDuration,1,i),t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration,1,i))},r.prototype.extractImgSrcFromImage=function(t){var i=void 0!==t.data("safe-src")?t.data("safe-src"):t.attr("src");return t.data("jg.originalSrc",i),i},r.prototype.imgFromEntry=function(t){var i=t.find(this.settings.imgSelector);return 0===i.length?null:i},r.prototype.captionFromEntry=function(t){var i=t.find("> .caption");return 0===i.length?null:i},r.prototype.displayEntry=function(t,i,e,s,n,r){t.width(s),t.height(r),t.css("top",e),t.css("left",i);var o,a,h,g=this.imgFromEntry(t);null!==g?(g.css("width",s),g.css("height",n),g.css("margin-left",-s/2),g.css("margin-top",-n/2),o=g.attr("src"),a=this.newSrc(o,s,n,g[0]),g.one("error",function(){g.attr("src",g.data("jg.originalSrc"))}),h=function(){o!==a&&g.attr("src",a)},"skipped"===t.data("jg.loaded")?this.onImageEvent(o,l.proxy(function(){this.showImg(t,h),t.data("jg.loaded",!0)},this)):this.showImg(t,h)):this.showImg(t),this.displayEntryCaption(t)},r.prototype.displayEntryCaption=function(t){var i,e,s=this.imgFromEntry(t);null!==s&&this.settings.captions?(null===(i=this.captionFromEntry(t))&&(e=s.attr("alt"),this.isValidCaption(e)||(e=t.attr("title")),this.isValidCaption(e)&&(i=l('<div class="caption">'+e+"</div>"),t.append(i),t.data("jg.createdCaption",!0))),null!==i&&(this.settings.cssAnimation||i.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(t))):this.removeCaptionEventsHandlers(t)},r.prototype.isValidCaption=function(t){return void 0!==t&&0<t.length},r.prototype.onEntryMouseEnterForCaption=function(t){var i=this.captionFromEntry(l(t.currentTarget));this.settings.cssAnimation?i.addClass("caption-visible").removeClass("caption-hidden"):i.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},r.prototype.onEntryMouseLeaveForCaption=function(t){var i=this.captionFromEntry(l(t.currentTarget));this.settings.cssAnimation?i.removeClass("caption-visible").removeClass("caption-hidden"):i.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},r.prototype.addCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0===i&&(i={mouseenter:l.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:l.proxy(this.onEntryMouseLeaveForCaption,this)},t.on("mouseenter",void 0,void 0,i.mouseenter),t.on("mouseleave",void 0,void 0,i.mouseleave),t.data("jg.captionMouseEvents",i))},r.prototype.removeCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0!==i&&(t.off("mouseenter",void 0,i.mouseenter),t.off("mouseleave",void 0,i.mouseleave),t.removeData("jg.captionMouseEvents"))},r.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},r.prototype.prepareBuildingRow=function(t){var i,e,s,n,r,o=!0,a=0,h=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,g=h/this.buildingRow.aspectRatio,l=this.settings.rowHeight,u=this.buildingRow.width/h>this.settings.justifyThreshold;if(t&&"hide"===this.settings.lastRow&&!u){for(i=0;i<this.buildingRow.entriesBuff.length;i++)e=this.buildingRow.entriesBuff[i],this.settings.cssAnimation?e.removeClass("entry-visible"):(e.stop().fadeTo(0,.1),e.find("> img, > a > img").fadeTo(0,0));return-1}for(t&&!u&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(o=!1,0<this.rows&&(o=(l=(this.offY-this.border-this.settings.margins*this.rows)/this.rows)*this.buildingRow.aspectRatio/h>this.settings.justifyThreshold)),i=0;i<this.buildingRow.entriesBuff.length;i++)s=(e=this.buildingRow.entriesBuff[i]).data("jg.width")/e.data("jg.height"),r=o?(n=i===this.buildingRow.entriesBuff.length-1?h:g*s,g):(n=l*s,l),h-=Math.round(n),e.data("jg.jwidth",Math.round(n)),e.data("jg.jheight",Math.ceil(r)),(0===i||r<a)&&(a=r);return this.buildingRow.height=a,o},r.prototype.flushRow=function(t){var i,e=this.settings,s=this.border,n=this.prepareBuildingRow(t);if(t&&"hide"===e.lastRow&&-1===n)this.clearBuildingRow();else{if(this.maxRowHeight&&this.maxRowHeight<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight),t&&("center"===e.lastRow||"right"===e.lastRow)){for(var r=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*e.margins,o=0;o<this.buildingRow.entriesBuff.length;o++)r-=(i=this.buildingRow.entriesBuff[o]).data("jg.jwidth");"center"===e.lastRow?s+=r/2:"right"===e.lastRow&&(s+=r)}var a=this.buildingRow.entriesBuff.length-1;for(o=0;o<=a;o++)i=this.buildingRow.entriesBuff[this.settings.rtl?a-o:o],this.displayEntry(i,s,this.offY,i.data("jg.jwidth"),i.data("jg.jheight"),this.buildingRow.height),s+=i.data("jg.jwidth")+e.margins;this.galleryHeightToSet=this.offY+this.buildingRow.height+this.border,this.setGalleryTempHeight(this.galleryHeightToSet+this.getSpinnerHeight()),(!t||this.buildingRow.height<=e.rowHeight&&n)&&(this.offY+=this.buildingRow.height+e.margins,this.rows+=1,this.clearBuildingRow(),this.settings.triggerEvent.call(this,"jg.rowflush"))}};var i=0;function e(){return l("body").height()>l(window).height()}r.prototype.rememberGalleryHeight=function(){i=this.$gallery.height(),this.$gallery.height(i)},r.prototype.setGalleryTempHeight=function(t){i=Math.max(t,i),this.$gallery.height(i)},r.prototype.setGalleryFinalHeight=function(t){i=t,this.$gallery.height(t)},r.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(l.proxy(function(){var t;this.$gallery.is(":visible")&&(t=parseFloat(this.$gallery.width()),e()===this.scrollBarOn?Math.abs(t-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=t,this.rewind(),this.rememberGalleryHeight(),this.startImgAnalyzer(!0)):(this.scrollBarOn=e(),this.galleryWidth=t))},this),this.settings.refreshTime)},r.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},r.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},r.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.setGalleryTempHeight(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},r.prototype.startLoadingSpinnerAnimation=function(){var t=this.spinner,i=t.$el.find("span");clearInterval(t.intervalId),this.$gallery.append(t.$el),this.setGalleryTempHeight(this.offY+this.buildingRow.height+this.getSpinnerHeight()),t.intervalId=setInterval(function(){t.phase<i.length?i.eq(t.phase).fadeTo(t.timeSlot,1):i.eq(t.phase-i.length).fadeTo(t.timeSlot,0),t.phase=(t.phase+1)%(2*i.length)},t.timeSlot)},r.prototype.rewind=function(){this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.offY=this.border,this.rows=0,this.clearBuildingRow()},r.prototype.updateEntries=function(t){var i=t&&null!=this.lastFetchedEntry?l(this.lastFetchedEntry).nextAll(this.settings.selector).toArray():(this.entries=[],this.$gallery.children(this.settings.selector).toArray());return 0<i.length&&(l.isFunction(this.settings.sort)?i=this.sortArray(i):this.settings.randomize&&(i=this.shuffleArray(i)),this.lastFetchedEntry=i[i.length-1],this.settings.filter?i=this.filterArray(i):this.resetFilters(i)),this.entries=this.entries.concat(i),!0},r.prototype.insertToGallery=function(t){var i=this;l.each(t,function(){l(this).appendTo(i.$gallery)})},r.prototype.shuffleArray=function(t){for(var i,e,s=t.length-1;0<s;s--)i=Math.floor(Math.random()*(s+1)),e=t[s],t[s]=t[i],t[i]=e;return this.insertToGallery(t),t},r.prototype.sortArray=function(t){return t.sort(this.settings.sort),this.insertToGallery(t),t},r.prototype.resetFilters=function(t){for(var i=0;i<t.length;i++)l(t[i]).removeClass("jg-filtered")},r.prototype.filterArray=function(t){var e=this.settings;if("string"===l.type(e.filter))return t.filter(function(t){var i=l(t);return i.is(e.filter)?(i.removeClass("jg-filtered"),!0):(i.addClass("jg-filtered").removeClass("jg-visible"),!1)});if(l.isFunction(e.filter)){for(var i=t.filter(e.filter),s=0;s<t.length;s++)-1===i.indexOf(t[s])?l(t[s]).addClass("jg-filtered").removeClass("jg-visible"):l(t[s]).removeClass("jg-filtered");return i}},r.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),l.each(this.entries,l.proxy(function(t,i){var e=l(i);e.css("width",""),e.css("height",""),e.css("top",""),e.css("left",""),e.data("jg.loaded",void 0),e.removeClass("jg-entry");var s=this.imgFromEntry(e);s.css("width",""),s.css("height",""),s.css("margin-left",""),s.css("margin-top",""),s.attr("src",s.data("jg.originalSrc")),s.data("jg.originalSrc",void 0),this.removeCaptionEventsHandlers(e);var n=this.captionFromEntry(e);e.data("jg.createdCaption")?(e.data("jg.createdCaption",void 0),null!==n&&n.remove()):null!==n&&n.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0)},r.prototype.analyzeImages=function(t){for(var i=this.lastAnalyzedIndex+1;i<this.entries.length;i++){var e=l(this.entries[i]);if(!0===e.data("jg.loaded")||"skipped"===e.data("jg.loaded")){var s=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,n=e.data("jg.width")/e.data("jg.height");if(s/(this.buildingRow.aspectRatio+n)<this.settings.rowHeight&&(this.flushRow(!1),++this.yield.flushed>=this.yield.every))return void this.startImgAnalyzer(t);this.buildingRow.entriesBuff.push(e),this.buildingRow.aspectRatio+=n,this.buildingRow.width+=n*this.settings.rowHeight,this.lastAnalyzedIndex=i}else if("error"!==e.data("jg.loaded"))return}0<this.buildingRow.entriesBuff.length&&this.flushRow(!0),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.settings.triggerEvent.call(this,t?"jg.resize":"jg.complete"),this.setGalleryFinalHeight(this.galleryHeightToSet)},r.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0,null!==this.imgAnalyzerTimeout&&(clearTimeout(this.imgAnalyzerTimeout),this.imgAnalyzerTimeout=null)},r.prototype.startImgAnalyzer=function(t){var i=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){i.analyzeImages(t)},.001)},r.prototype.onImageEvent=function(t,i,e){var s,n;(i||e)&&(s=new Image,n=l(s),i&&n.one("load",function(){n.off("load error"),i(s)}),e&&n.one("error",function(){n.off("load error"),e(s)}),s.src=t)},r.prototype.init=function(){var a=!1,h=!1,g=this;l.each(this.entries,function(t,i){var e=l(i),s=g.imgFromEntry(e);if(e.addClass("jg-entry"),!0!==e.data("jg.loaded")&&"skipped"!==e.data("jg.loaded"))if(null!==g.settings.rel&&e.attr("rel",g.settings.rel),null!==g.settings.target&&e.attr("target",g.settings.target),null!==s){var n=g.extractImgSrcFromImage(s);if(s.attr("src",n),!1===g.settings.waitThumbnailsLoad){var r=parseFloat(s.prop("width")),o=parseFloat(s.prop("height"));if(!isNaN(r)&&!isNaN(o))return e.data("jg.width",r),e.data("jg.height",o),e.data("jg.loaded","skipped"),h=!0,g.startImgAnalyzer(!1),!0}e.data("jg.loaded",!1),a=!0,g.isSpinnerActive()||g.startLoadingSpinnerAnimation(),g.onImageEvent(n,function(t){e.data("jg.width",t.width),e.data("jg.height",t.height),e.data("jg.loaded",!0),g.startImgAnalyzer(!1)},function(){e.data("jg.loaded","error"),g.startImgAnalyzer(!1)})}else e.data("jg.loaded",!0),e.data("jg.width",e.width()|parseFloat(e.css("width"))|1),e.data("jg.height",e.height()|parseFloat(e.css("height"))|1)}),a||h||this.startImgAnalyzer(!1),this.checkWidth()},r.prototype.checkOrConvertNumber=function(t,i){if("string"===l.type(t[i])&&(t[i]=parseFloat(t[i])),"number"!==l.type(t[i]))throw i+" must be a number";if(isNaN(t[i]))throw"invalid number for "+i},r.prototype.checkSizeRangesSuffixes=function(){if("object"!==l.type(this.settings.sizeRangeSuffixes))throw"sizeRangeSuffixes must be defined and must be an object";var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(i);for(var e={0:""},s=0;s<t.length;s++)if("string"===l.type(t[s]))try{e[parseInt(t[s].replace(/^[a-z]+/,""),10)]=this.settings.sizeRangeSuffixes[t[s]]}catch(t){throw"sizeRangeSuffixes keys must contains correct numbers ("+t+")"}else e[t[s]]=this.settings.sizeRangeSuffixes[t[s]];this.settings.sizeRangeSuffixes=e},r.prototype.retrieveMaxRowHeight=function(){var t=null,i=this.settings.rowHeight;if("string"===l.type(this.settings.maxRowHeight))t=this.settings.maxRowHeight.match(/^[0-9]+%$/)?i*parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100:parseFloat(this.settings.maxRowHeight);else{if("number"!==l.type(this.settings.maxRowHeight)){if(!1===this.settings.maxRowHeight||null==this.settings.maxRowHeight)return null;throw"maxRowHeight must be a number or a percentage"}t=this.settings.maxRowHeight}if(isNaN(t))throw"invalid number for maxRowHeight";return t<i&&(t=i),t},r.prototype.checkSettings=function(){this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border");var t=["justify","nojustify","left","center","right","hide"];if(-1===t.indexOf(this.settings.lastRow))throw"lastRow must be one of: "+t.join(", ");if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||1<this.settings.justifyThreshold)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!==l.type(this.settings.cssAnimation))throw"cssAnimation must be a boolean";if("boolean"!==l.type(this.settings.captions))throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||1<this.settings.captionSettings.visibleOpacity)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||1<this.settings.captionSettings.nonVisibleOpacity)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!==l.type(this.settings.randomize))throw"randomize must be a boolean";if("string"!==l.type(this.settings.selector))throw"selector must be a string";if(!1!==this.settings.sort&&!l.isFunction(this.settings.sort))throw"sort must be false or a comparison function";if(!1!==this.settings.filter&&!l.isFunction(this.settings.filter)&&"string"!==l.type(this.settings.filter))throw"filter must be false, a string or a filter function"},r.prototype.retrieveSuffixRanges=function(){var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(parseInt(i,10));return t.sort(function(t,i){return i<t?1:t<i?-1:0}),t},r.prototype.updateSettings=function(t){this.settings=l.extend({},this.settings,t),this.checkSettings(),this.border=0<=this.settings.border?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},r.prototype.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:!1,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.9,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!0,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,rtl:!1,sort:!1,filter:!1,selector:"a, div:not(.spinner)",imgSelector:"> img, > a > img",triggerEvent:function(t){this.$gallery.trigger(t)}},l.fn.justifiedGallery=function(n){return this.each(function(t,i){var e=l(i);e.addClass("justified-gallery");var s=e.data("jg.controller");if(void 0===s){if(null!=n&&"object"!==l.type(n)){if("destroy"===n)return;throw"The argument must be an object"}s=new r(e,l.extend({},r.prototype.defaults,n)),e.data("jg.controller",s)}else if("norewind"!==n){if("destroy"===n)return void s.destroy();s.updateSettings(n),s.rewind()}s.updateEntries("norewind"===n)&&s.init()})}});
function tg_getURLParameter(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}function modulaInViewport(t){"function"==typeof jQuery&&t instanceof jQuery&&(t=t[0]);var i=t.getBoundingClientRect();return i.top-jQuery(window).height()<=-100&&-400<=i.top-jQuery(window).height()||i.bottom<=jQuery(window).height()}jQuery(document).on("vc-full-width-row-single vc-full-width-row",function(t,i){0<jQuery("body").find(".modula").length&&jQuery(window).trigger("modula-update")}),jQuery(window).on("elementor/frontend/init",function(){window.elementorFrontend&&window.elementorFrontend.hooks.addAction("frontend/element_ready/global",function(t){0<jQuery("body").find(".modula").length&&jQuery(window).trigger("modula-update")})}),function(c,r,u,t){var n="modulaGallery",e={resizer:"/",keepArea:!0,type:"creative-gallery",columns:12,gutter:10,enableTwitter:!1,enableFacebook:!1,enableWhatsapp:!1,enablePinterest:!1,enableLinkedin:!1,enableEmail:!1,lazyLoad:0,initLightbox:!1,lightbox:"fancybox",lightboxOpts:{},inView:!1};function a(t,i){this.element=t,this.$element=c(t),this.$itemsCnt=this.$element.find(".modula-items"),this.$items=this.$itemsCnt.find(".modula-item"),this.options=c.extend({},e,i),this._defaults=e,this._name=n,this.tiles=[],this.$tilesCnt=null,this.completed=!1,this.lastWidth=0,this.resizeTO=0,this.isIsotope=!1,this.isLazyLoaded=!0,this.init()}a.prototype.init=function(){var n=this;c(u).trigger("modula_api_before_init",[n]),"custom-grid"===this.options.type?this.createCustomGallery():"creative-gallery"==this.options.type?this.createGrid():"grid"==this.options.type&&("automatic"==this.options.grid_type?this.createAutoGrid():this.createColumnsGrid()),c(r).resize(function(){n.onResize(n)}),c(r).on("modula-update",function(){n.onResize(n)}),c(u).on("lazyloaded",function(t){var i,e,o=c(t.target);"modula"==o.data("source")&&(o.data("size",{width:o.width(),height:o.height()}),(i=o.parents(".modula-item")).addClass("tg-loaded"),e=n.$items.not(".jtg-hidden").index(i),n.placeImage(e),n.isIsotope&&n.$itemsCnt.modulaisotope("layout"))}),n.options.inView&&jQuery(r).on("DOMContentLoaded load resize scroll",function(){modulaInViewport(n.$element)&&n.$element.addClass("modula-loaded-scale")}),this.setupSocial(),this.options.onComplete&&this.options.onComplete(),"fancybox"!=n.options.lightbox||n.options.initLightbox||this.initLightbox(),c(u).trigger("modula_api_after_init",[n])},a.prototype.initLightbox=function(){var o=this;o.$element.on("click",".modula-item-link:not( .modula-simple-link )",function(t){t.preventDefault();var i=c.map(o.$items,function(t){var i=jQuery(t).find(".modula-item-link:not( .modula-simple-link )"),e=jQuery(t).find(".pic");return{src:i.attr("href"),opts:{caption:i.data("caption"),alt:e.attr("alt"),image_id:i.attr("data-image-id")}}}),e=o.$items.index(jQuery(this).parents(".modula-item"));jQuery.modulaFancybox.open(i,o.options.lightboxOpts,e)})},a.prototype.trunc=function(t){return Math.trunc?Math.trunc(t):(t=+t,isFinite(t)?t-t%1||(t<0?-0:0===t?t:0):t)},a.prototype.createCustomGallery=function(){var h,r=this,t=this.$element.find(".modula-items").width(),d=this,l=this.options.columns,i=u.documentElement.clientWidth;"1"==this.options.enableResponsive&&(i<=568?l=this.options.mobileColumns:i<=768&&(l=this.options.tabletColumns)),h=0<this.options.gutter?(t-this.options.gutter*(l-1))/l:Math.floor(t/l*1e3)/1e3,this.$items.not(".jtg-hidden").each(function(t,i){var e,o,n={},a=c(i).data("width"),s=c(i).data("height");12<a&&(a=12),"1"==d.options.enableResponsive&&(e=a,o=s,1==l?s=(a=1)*o/e:((a=Math.round(l*e/12))<1&&(a=1),(s=Math.round(a*o/e))<1&&(s=1))),n.width=h*a+d.options.gutter*(a-1),n.height=Math.round(h)*s+d.options.gutter*(s-1),c(i).data("size",n).addClass("tiled").addClass(n.width>n.height?"tile-h":"tile-v").data("position"),c(i).css(c(i).data("size")),c(i).find(".figc").css({width:c(i).data("size").width,height:c(i).data("size").height}),r.loadImage(t)});var e={itemSelector:".modula-item",layoutMode:"packery",packery:{gutter:parseInt(d.options.gutter)}};this.$itemsCnt.modulaisotope(e),this.isIsotope=!0},a.prototype.createGrid=function(){var o=this;this.$itemsCnt.data("area",this.$itemsCnt.width()*this.options.height),this.lastWidth=this.$itemsCnt.width();for(var t,i=0;i<this.$items.not(".jtg-hidden").length;i++)this.tiles.push(o.getSlot());this.tiles.sort(function(t,i){return t.position-i.position}),this.$items.not(".jtg-hidden").each(function(t,i){var e=o.tiles[t];c(i).data("size",e),c(i).addClass("tiled").addClass(e.width>e.height?"tile-h":"tile-v").data("position"),c(i).css({width:e.width,height:e.height}),c(i).find(".figc").css({width:e.width,height:e.height}),o.loadImage(t)}),this.isIsotope||(t={resizesContainer:!1,itemSelector:".modula-item",layoutMode:"packery",packery:{gutter:parseInt(o.options.gutter)}},this.$itemsCnt.modulaisotope(t),this.isIsotope=!0)},a.prototype.createAutoGrid=function(){this.$itemsCnt.justifiedGallery({rowHeight:this.options.rowHeight,margins:this.options.gutter,lastRow:this.options.lastRow,captions:!1,border:0,imgSelector:".pic",cssAnimation:!0,imagesAnimationDuration:700})},a.prototype.createColumnsGrid=function(){var e=this;this.$itemsCnt.modulaisotope({itemSelector:".modula-item",layoutMode:"packery",packery:{gutter:parseInt(this.options.gutter)}}),this.$items.each(function(t,i){e.loadImage(t)}),this.isIsotope=!0},a.prototype.getSlot=function(){if(0==this.tiles.length)return o={top:0,left:0,width:this.$itemsCnt.width(),height:this.options.height,area:this.$itemsCnt.width()*this.options.height,position:0};for(var t=0,i=0;i<this.tiles.length;i++){(o=this.tiles[i]).area>this.tiles[t].area&&(t=i)}var e,o={},n=this.tiles[t];return(o=n.width>n.height?(e=n.width/2*this.options.randomFactor,n.prevWidth=n.width,n.width=Math.floor(n.width/2+e*(Math.random()-.5)),{top:n.top,left:n.left+n.width+this.options.gutter,width:n.prevWidth-n.width-this.options.gutter,height:n.height}):(e=n.height/2*this.options.randomFactor,n.prevHeight=n.height,n.height=Math.floor(n.height/2+e*(Math.random()-.5)),{left:n.left,top:n.top+n.height+this.options.gutter,width:n.width,height:n.prevHeight-n.height-this.options.gutter})).area=o.width*o.height,o.position=1e3*o.top+o.left,n.position=1e3*n.top+n.left,this.tiles[t]=n,this.tiles[t].area=n.width*n.height,o},a.prototype.reset=function(){this.tiles=[],"custom-grid"===this.options.type?this.createCustomGallery():"creative-gallery"==this.options.type?this.createGrid():"grid"==this.options.type&&("automatic"==this.options.grid_type?this.createAutoGrid():this.createColumnsGrid()),this.lastWidth=this.$itemsCnt.width(),c(u).trigger("modula_api_reset",[this])},a.prototype.onResize=function(i){i.lastWidth!=i.$itemsCnt.width()&&(clearTimeout(i.resizeTO),i.resizeTO=setTimeout(function(){var t;i.options.keepArea&&(t=i.$itemsCnt.data("area"),i.$itemsCnt.height(t/i.$itemsCnt.width())),i.reset(),i.isIsotope&&i.$itemsCnt.modulaisotope("layout")},100))},a.prototype.loadImage=function(t){var i,e=this,o=e.$items.not(".jtg-hidden").eq(t).find(".pic"),n={};"0"==e.options.lazyLoad&&(void 0===o.attr("width")&&void 0===o.attr("height")?((i=new Image).onload=function(){n={width:this.width,height:this.height},o.data("size",n),e.placeImage(t)},"undefined"!=o.attr("src")?i.src=o.attr("src"):i.src=o.data("src")):(n={width:o.width(),height:o.height()},o.data("size",n),e.placeImage(t)))},a.prototype.placeImage=function(t){if("grid"!=this.options.type){var i=this.$items.not(".jtg-hidden").eq(t),e=i.find(".pic"),o=i.data("size"),n=e.data("size");if(void 0!==o&&void 0!==n){o.width,o.height;var a=n.width/n.height,s=e.data("valign")?e.data("valign"):"middle",h=e.data("halign")?e.data("halign"):"center",r={top:"auto",bottom:"auto",left:"auto",right:"auto",width:"auto",height:"auto",margin:"0",maxWidth:"999em"};if(o.width*n.height/n.width>o.height)switch(r.width=o.width,r.left=0,s){case"top":r.top=0;break;case"middle":r.top=0-(o.width*(1/a)-o.height)/2;break;case"bottom":r.bottom=0}else switch(r.height=o.height,r.top=0,h){case"left":r.left=0;break;case"center":r.left=0-(o.height*a-o.width)/2;break;case"right":r.right=0}e.css(r),this.$items.not(".jtg-hidden").eq(t).addClass("tg-loaded")}}},a.prototype.setupSocial=function(){this.options.enableTwitter&&i(this.$items,this),this.options.enableFacebook&&o(this.$items,this),this.options.enablePinterest&&h(this.$items,this),this.options.enableLinkedin&&d(this.$items,this),this.options.enableWhatsapp&&s(this.$items,this),this.options.enableEmail&&l(this.$items,this)},a.prototype.destroy=function(){this.isPackeryActive&&(this.$itemsCnt.packery("destroy"),this.isPackeryActive=!1)};var i=function(t,i){t.find(".modula-icon-twitter").click(function(t){t.preventDefault();var i=c(this).parents(".modula-item").find("img.pic").data("caption"),e=u.title;return 0<i.length&&(e=c.trim(i)),r.open("https://twitter.com/intent/tweet?url="+encodeURI(location.href.split("#")[0])+"&text="+encodeURI(e),"ftgw","location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width/2-300,screen.height/2-200),!1})},o=function(t,i){t.find(".modula-icon-facebook").click(function(t){t.preventDefault();var i=c(this).parents(".modula-item").find(".pic"),e=i.data("caption");u.title;0<e.length&&c.trim(e);i.attr("src");var o="//www.facebook.com/sharer.php?u="+location.href;return r.open(o,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width/2-300,screen.height/2-200),!1})},s=function(t,i){t.find(".modula-icon-whatsapp").click(function(t){t.preventDefault();var i=c(this).parents(".modula-item").find("img.pic").data("caption");u.title;return 0<i.length&&c.trim(i),r.open("https://api.whatsapp.com/send?text="+encodeURI(r.location.href.split("#")[0])+"&preview_url=true","ftgw","location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width/2-300,screen.height/2-200),!1})},h=function(t,i){t.find(".modula-icon-pinterest").click(function(t){t.preventDefault();var i=c(this).parents(".modula-item").find(".pic"),e=i.data("caption"),o=u.title;0<e.length&&(o=c.trim(e));var n,a,s,h="http://pinterest.com/pin/create/button/?url="+encodeURI(location.href)+"&description="+encodeURI(o);return 1==i.length&&(n=i.attr("src"),h+="&media="+(a=n,(s=u.createElement("img")).src=a,a=s.src,s.src=null,a)),r.open(h,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width/2-300,screen.height/2-200),!1})},d=function(t,i){t.find(".modula-icon-linkedin").click(function(t){t.preventDefault();var i="//linkedin.com/shareArticle?mini=true&url="+ +encodeURI(location.href);return r.open(i,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width/2-300,screen.height/2-200),!1})},l=function(t,a){t.find(".modula-icon-email").click(function(t){var i=encodeURI(a.options.email_subject),e=jQuery(".modula-icon-email").parents(".modula-item").find("img.pic").attr("data-full"),o=location.href,n="mailto:?subject="+i+"&body="+encodeURI(a.options.email_message.replace(/%%image_link%%/g,e).replace(/%%gallery_link%%/g,o));return r.open(n,"ftgw","location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width/2-300,screen.height/2-200),!1})};c.fn[n]=function(i){var e,o=arguments;return i===t||"object"==typeof i?this.each(function(){c.data(this,"plugin_"+n)||c.data(this,"plugin_"+n,new a(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?(this.each(function(){var t=c.data(this,"plugin_"+n);t instanceof a&&"function"==typeof t[i]&&(e=t[i].apply(t,Array.prototype.slice.call(o,1))),"destroy"===i&&c.data(this,"plugin_"+n,null)}),e!==t?e:this):void 0}}(jQuery,window,document),jQuery(document).ready(function(){var t=jQuery(".modula.modula-gallery");jQuery.each(t,function(){var t=jQuery(this).attr("id"),i=jQuery(this).data("config");jQuery("#"+t).modulaGallery(i)}),jQuery(".modula-navigation .modula-links-wrapper li").click(function(){var t=jQuery(this).data("offset"),i=jQuery(this).parents(".modula.modula-gallery").data("config");console.log(i);paginationHelper.ajax_url,paginationHelper.nonce})});