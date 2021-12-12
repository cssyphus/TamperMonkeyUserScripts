// ==UserScript==
// @name         theweathernetwork.com
// @namespace    https://github.com/cssyphus/TamperMonkeyUserscripts/
// @match        https://www.theweathernetwork.com/*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const $ = document.querySelector.bind(document);
  $("body").insertAdjacentHTML("beforeend", init_css());
})();
function init_css() {
  return `
	<style>
    .woahbar{display:none !important;}
    body > .fc-ab-root{display:none !important;}
    #add-saved-location{display:none !important;}
		body{border-top:none!important; background:#2670AD!important;}
		#main_content>.module:nth-child(3){display:none !important;}
		#sidebar{display:none !important;}
		#menu_search{display:none !important;}
		#leaderboard{display:none !important;}
		.taskbar{display:none !important;}
		html>body>.content-wrap> header#main-header.main-header{margin-top:0!important; padding-top:0!important;}
		#main_content > #obs_nitro{margin-bottom:0!important;}
		#savedlocations-banner{display:none !important;}
		#bugreport_indices{display:none !important;}
		#videos_videos-most-popular-nitro{display:none !important;}
		#featured_content{display:none !important;}
		[id*=video_player_]{display:none !important;}
		#headline_text_nitro{display:none !important;}
		#main_content{width:100% !important;float:none;}
		#main_content #obs_nitro{width:100% !important;}
		#obs_nitro .wx-content.current-obs{display:flex !important;width: 100% !important;min-height:unset;}
		#gallery{display:none !important;}
	</style>
 	`;
}
