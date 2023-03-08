// ==UserScript==
// @name         thegatewaypundit.com NEW
// @namespace    http://cssyphus.com
// @version      20230218.2.1
// @match        https://www.thegatewaypundit.com/
// @match        https://www.thegatewaypundit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thegatewaypundit.com
// @grant        none
// ==/UserScript==

(function () {
  // @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
  "use strict";
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  $("body").insertAdjacentHTML("beforeend", init_css());
  //$$('script').forEach(scp => scp.parentNode.removeChild(scp));
  $$("h2.gb-headline.gb-headline-text a").forEach((el) => {
    const txt = el.textContent;
    el.setAttribute("title", txt);
  });
})();
function init_css() {
  return `
	<style id="jdInitCss">
		#site-navigation, #secondary-navigation, #generate-slideout-menu{display:none !important;}
		#branda-cookie-notice{display:none !important;}
		#page{max-width:unset;}
		#content{padding:0;}
		body.home div.gb-grid-wrapper.home-featured-posts.gb-query-loop-wrapper{margin:0!important;}
		div.homepage-body>div.homepage-right{display:none !important;}
		article .entry-content .homepage-body>.homepage-left{width:100%!important;}
		div.gb-inside-container{max-width:unset!important; padding:0;}
		div.gb-query-loop-wrapper{margin-left:0;}
		div.gb-grid-wrapper>div.gb-grid-column.gb-query-loop-item.post.type-post.status-publish{width:12%;}
		div.gb-inside-container > div.gb-query-loop-wrapper > div.gb-grid-column:has([id^=rc-widget-]){display:none !important;}
		div.gb-inside-container > div.gb-query-loop-wrapper > div.gb-grid-column:has([class^=adcovery]){display:none !important;}
		div.gb-inside-container > h2.gb-headline.gb-headline-text{font-size:16px;font-weight:400;}
		div.gb-inside-container > div.gb-container:nth-child(2) figure.gb-block-image{display:none !important;}
		div.gb-inside-container > p.gb-headline.gb-headline-text{display:none !important;}
		p.yoast-reading-time__wrapper{display:none !important;}
		div.home-posts-list > .gb-inside-container {padding:0;}
		div.gb-query-loop-item{padding:20px 0 20px 0!important;}
		div.home-featured-posts.gb-query-loop-wrapper{justify-content:center;}
		div.home-featured-posts.gb-query-loop-wrapper > .gb-query-loop-item{margin-right:20px;}
		h2.gb-headline-text > a {display:inline-block; max-height:60px; overflow:hidden;}
		div.gb-query-loop-item > div.gb-container > div.gb-inside-container > div.gb-container:nth-child(2) > div.gb-inside-container {padding:4px 0 0 18px;}
		nav.main-navigation{display:none !important;}
		h2.gb-headline.gb-headline-text{margin-bottom:0;}

		div.gb-query-loop-item div.homepage-featured-image figure>a>img{max-height:140px;height:140px;}

		.site-footer{display:none !important;}
		div.gb-button-wrapper.gb-query-loop-pagination{margin-bottom:80px;}
		.homepage-featured-image figure.gb-block-image::after{display:none !important;}
		div.ai-dynamic{display:none !important;}
		div.widget-area.sidebar.is-right-sidebar{display:none !important;}
		div.essb_links.essb_displayed_shortcode.essb_share{display:none !important;}
		div.print-no{display:none !important;}
		#main>article{padding:0 20px;}
		div.comments-area{display:none !important;}
		{display:none !important;}
	</style>
 	`;
}
