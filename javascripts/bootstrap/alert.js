/* ========================================================================
 * Bootstrap: alert.js v3.3.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)};i.VERSION="3.3.1",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){s.detach().trigger("closed.bs.alert").remove()}var o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var s=t(r);e&&e.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery);