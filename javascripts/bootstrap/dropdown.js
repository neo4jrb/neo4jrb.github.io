/* ========================================================================
 * Bootstrap: dropdown.js v3.3.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){e&&3===e.which||(t(s).remove(),t(o).each(function(){var n=t(this),s=i(n),o={relatedTarget:this};s.hasClass("open")&&(s.trigger(e=t.Event("hide.bs.dropdown",o)),e.isDefaultPrevented()||(n.attr("aria-expanded","false"),s.removeClass("open").trigger("hidden.bs.dropdown",o)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}var s=".dropdown-backdrop",o='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.1",a.prototype.toggle=function(n){var s=t(this);if(!s.is(".disabled, :disabled")){var o=i(s),a=o.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(o.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var n=t(this);if(e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&s.find(o).trigger("focus"),n.trigger("click");var r=" li:not(.divider):visible a",l=s.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var d=l.index(e.target);38==e.which&&d>0&&d--,40==e.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery);