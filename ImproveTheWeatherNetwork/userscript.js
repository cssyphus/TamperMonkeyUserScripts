// ==UserScript==
// @name         theweathernetwork.com
// @description  Improved 14-day page arrangement, slider widths
// @version      231103.0600
// @namespace    http://tampermonkey.net/
// @match        https://www.theweathernetwork.com/*/*
// @grant        none
// ==/UserScript==

(async function () {
  "use strict";
  let pageChanged = false;
  const $ = document.querySelector.bind(document);
  $("body").insertAdjacentHTML("beforeend", init_css());
  monitor_page_changes();

  function monitor_page_changes() {
    if (!pageChanged && document.URL.includes("14-day-weather")) {
      //$('#main_content').appendChild( $('#fourteenday_nitro') );
      //$('#main_content').appendChild( $('#main_content div.wx-content') );
      $("#main_content").appendChild($("#fourteenday_graph"));
      $("#main_content").appendChild($("twnmm-maps-fuse-image"));
      $("#main_content").appendChild($("#main_content div.module.shadow-box"));
      $("#main_content").appendChild($("#videos_slider"));
      pageChanged = true;
    }
    setTimeout(() => {
      monitor_page_changes();
    }, 500);
  }
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
		{display:none !important;}
		[class*=outbrain],[id*=outbrain]{display:none !important;}
		[class*=taboola],[id*=taboola]{display:none !important;}
		[class*=disqus],[id*=disqus]{display:none !important;}
		[class*=sharebar],[id*=sharebar]{display:none !important;}
		[class^=social],[id^=social]{display:none !important;}
		[class*=-social],[id*=-social]{display:none !important;}
		[class*=social-],[id*=social-]{display:none !important;}
		[class*=_social],[id*=_social]{display:none !important;}
		[class*=social_],[id*=social_]{display:none !important;}
		[class^=share],[id^=share]{display:none !important;}
		[class*=-share],[id*=-share]{display:none !important;}
		[class*=_share],[id*=_share]{display:none !important;}
		[class*=share-],[id*=share-]{display:none !important;}
		[class*=share_],[id*=share_]{display:none !important;}
		[class*=sharing],[id*=sharing]{display:none !important;}
		[class*=-ad],[id*=-ad]{display:none !important;}
		[class*=izooto],[id*=izooto]{display:none !important;}
		nav,sidebar,aside,footer{display:none !important;}
		[id^=social]{display:none !important;}
		[id^=search]{display:none !important;}
		div.lightslider_container.slider-card.displayed_width{width:1070px!important;}
		#this-weekend-periods span.tools.withpagination{right:430px;display:none;}
		#weekend_data_table .wxColumn.wxColumn-weekend{width:105px!important;}
	</style>
 	`;
  }
})();
