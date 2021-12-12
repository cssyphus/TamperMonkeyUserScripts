// ==UserScript==
// @name         Endless DuckDuckGo
// @namespace    https://github.com/cssyphus/TamperMonkeyUserscripts/
// @match        https://duckduckgo.com/?q=*
// @grant        none
// ==/UserScript==

"use strict";

window.onscroll = function () {
  var els = document.querySelectorAll(".result.result--more");
  if (els.length) {
    var elmore = document.querySelectorAll(".result--more__btn.btn.btn--full");
    if (elmore.length) {
      elmore[0].click();
    }
  }
};
