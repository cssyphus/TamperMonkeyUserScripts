// ==UserScript==
// @name         Endless DuckDuckGo
// @namespace    http://tampermonkey.net/
// @version      0.2
// @match        https://duckduckgo.com/?*
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
