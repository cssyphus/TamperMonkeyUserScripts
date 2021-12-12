// ==UserScript==
// @name         purolator.com/en/shipping/tracker?pins=*
// @namespace    https://github.com/cssyphus/TamperMonkeyUserscripts/
// @version      0.1
// @match        https://purolator.com/en/shipping/tracker?pi*
// @match        https://www.purolator.com/en/shipping/tracker?pi*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  $("body").insertAdjacentHTML("beforeend", init_css());
  $$("script").forEach((scp) => scp.parentNode.removeChild(scp));
})();
function init_css() {
  return `
	<style id="wzInitCss">
		.page > header > .header-bottom{display:none !important;}
		#main-content > .page__content > .block--purolator-theme-content{display:none !important;}
		.search-content > h1{display:none !important;}
	</style>
 	`;
}
