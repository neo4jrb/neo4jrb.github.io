/* ========================================================================
 * Bootstrap: dropdown.js v3.3.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function o(o){o&&3===o.which||(t(r).remove(),t(i).each(function(){var s=t(this),r=e(s),i={relatedTarget:this};r.hasClass("open")&&(r.trigger(o=t.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(s.attr("aria-expanded","false"),r.removeClass("open").trigger("hidden.bs.dropdown",i)))}))}function e(o){var e=o.attr("data-target");e||(e=o.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var s=e&&t(e);return s&&s.length?s:o.parent()}function s(o){return this.each(function(){var e=t(this),s=e.data("bs.dropdown");s||e.data("bs.dropdown",s=new n(this)),"string"==typeof o&&s[o].call(e)})}var r=".dropdown-backdrop",i='[data-toggle="dropdown"]',n=function(o){t(o).on("click.bs.dropdown",this.toggle)};n.VERSION="3.3.1",n.prototype.toggle=function(s){var r=t(this);if(!r.is(".disabled, :disabled")){var i=e(r),n=i.hasClass("open");if(o(),!n){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",o);var a={relatedTarget:this};if(i.trigger(s=t.Event("show.bs.dropdown",a)),s.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},n.prototype.keydown=function(o){if(/(38|40|27|32)/.test(o.which)&&!/input|textarea/i.test(o.target.tagName)){var s=t(this);if(o.preventDefault(),o.stopPropagation(),!s.is(".disabled, :disabled")){var r=e(s),n=r.hasClass("open");if(!n&&27!=o.which||n&&27==o.which)return 27==o.which&&r.find(i).trigger("focus"),s.trigger("click");var a=" li:not(.divider):visible a",l=r.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var c=l.index(o.target);38==o.which&&c>0&&c--,40==o.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=s,t.fn.dropdown.Constructor=n,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,n.prototype.toggle).on("keydown.bs.dropdown.data-api",i,n.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',n.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',n.prototype.keydown)}(jQuery);