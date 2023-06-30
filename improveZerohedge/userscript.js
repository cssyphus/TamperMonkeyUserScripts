// ==UserScript==
// @name         zerohedge.com
// @namespace    http://tampermonkey.net/
// @version      230630.0450
// @match        https://www.zerohedge.com/
// @match        https://www.zerohedge.com/*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  $("body").insertAdjacentHTML("beforeend", init_css());

  $$("iframe[name^=googlefcPresent] + div").forEach((el) => {
    el.remove();
  });
  $$("a").forEach((el) => {
    if (el.getAttribute("href")) {
      if (el.getAttribute("href").includes("images")) {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          el.parentNode.remove();
        });
      }
    }
  });
})();
function init_css() {
  return `
	<style id="jdInitCss">
		#__next > .container > div > div:first{display:none !important;}
		[class^=FeaturedContributors_]{display:none !important;}
		.sidebar-left{display:none !important;}
		[class^=SidebarRight_container_]{display:none !important;}
		img[class^=Article_img_]{display:none !important;}
		[class^=Banner_banner_]{display:none !important;}
		iframe + div {display:none !important;}
		iframe + div + div  {display:none !important;}
		iframe + div + div + div {display:none !important;}
		iframe + div + div + div + div {display:none !important;}
		iframe + div + div + div + div + div {display:none !important;}
		iframe + div + div + div + div + div + div {display:none !important;}
		iframe + div + div + div + div + div + div + div {display:none !important;}
		.main-content hr {height:1px; background-color:lightgrey !important;}
		[class^=Article_hideOnMobile_]{display:none !important;}
		[class^=Article_textContainer_]{display:none !important;}
		[class^=Article_nonStickyContainer_]{grid-gap:5px 10px!important; gap:5px 10px!important; padding:5px 15px 5px!important;}
		[class^=Article_stickyContainer_]{grid-gap:5px 10px!important; gap:5px 10px!important; padding:5px 15px 5px!important;}
		[class^=Article_innerContainer_]{grid-gap:5px 10px!important; gap:5px 10px!important;}
		[class^=Header_siteHeader_]{display:none !important;}
		[class^=SimplePaginator_paginator_]{margin:0 !important;}
		[class^=SocialSharingButtons_]{display:none !important;}
		[class^=MidArticleNewsletter_]{display:none !important;}
		[class^=SponsoredPost_]{display:none !important;}
		[class^=NewsquawkArticle_]{display:none !important;}
		h2 {line-height:18px !important; font-size:20px !important;}
		h2 a {font-size:15px; font-family:Segoe UI; font-weight:400;}
        h3 {font-family:Segoe UI;}
		#exitModalOverlay{display:none !important;}
	</style>
 	`;
}
