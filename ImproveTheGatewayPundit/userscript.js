// ==UserScript==
// @name         thegatewaypundit.com NEW
// @namespace    http://cssyphus.com
// @version      20231002
// @match        https://www.thegatewaypundit.com/
// @match        https://www.thegatewaypundit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thegatewaypundit.com
// @grant        none
// ==/UserScript==

(async function () {
  "use strict";
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const url = document.URL;

  if (url.includes("?s=")) {
    $("body").insertAdjacentHTML("beforeend", init_css());
    $("body").insertAdjacentHTML("beforeend", init_srx_css());
  } else {
    $("body").insertAdjacentHTML("beforeend", init_css());
    $$("h2.gb-headline.gb-headline-text a").forEach((el) => {
      const txt = el.textContent;
      el.setAttribute("title", txt);
    });
    $("#jdSrx").addEventListener("keyup", async (e) => {
      if (e.key === "Enter") {
        const srx = $("#jdSrx").value;
        console.log(srx);
        const qry = srx.replaceAll(" ", "+");
        $("#jdBusySpinner").style.display = "flex";
        window.location.href = `https://thegatewaypundit.com/?s=${qry}`;
        //console.log( 'LENGTH', $$('#content #primary #main article').length );
      }
    });
  }
  // END OF SCRIPT
})();
function init_css() {
  return `
	<div id="jdBusySpinner" class="flex-center-center"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
	<div id="jdSrxDiv"><input id="jdSrx" type="text" placeholder="Search terms"></div>
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

		XXnav.main-navigation{display:none !important;}

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
		#jdSrxDiv{position:absolute;top:50px;right:100px;width:350px;}
			#jdSrx{width:100%;}
		.code-block.code-block-17{display:none !important;}

		#jdBusySpinner {position:fixed;top:0;left:0;width:99.7vw;height:99.7vh;background:#00000077;z-index:99999999999;display:none;}
		.flex-center-center{display:flex;justify-content:center;align-items:center;}
		.lds-spinner{color:official;display:inline-block;position:relative;width:80px;height:80px;}
		.lds-spinner div{transform-origin:40px 40px;animation:lds-spinner 1.2s linear infinite;}
		.lds-spinner div:after{content:" ";display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:#fff;}
		.lds-spinner div:nth-child(1){transform:rotate(0deg);animation-delay:-1.1s;}
		.lds-spinner div:nth-child(2){transform:rotate(30deg);animation-delay:-1s;}
		.lds-spinner div:nth-child(3){transform:rotate(60deg);animation-delay:-0.9s;}
		.lds-spinner div:nth-child(4){transform:rotate(90deg);animation-delay:-0.8s;}
		.lds-spinner div:nth-child(5){transform:rotate(120deg);animation-delay:-0.7s;}
		.lds-spinner div:nth-child(6){transform:rotate(150deg);animation-delay:-0.6s;}
		.lds-spinner div:nth-child(7){transform:rotate(180deg);animation-delay:-0.5s;}
		.lds-spinner div:nth-child(8){transform:rotate(210deg);animation-delay:-0.4s;}
		.lds-spinner div:nth-child(9){transform:rotate(240deg);animation-delay:-0.3s;}
		.lds-spinner div:nth-child(10){transform:rotate(270deg);animation-delay:-0.2s;}
		.lds-spinner div:nth-child(11){transform:rotate(300deg);animation-delay:-0.1s;}
		.lds-spinner div:nth-child(12){transform:rotate(330deg);animation-delay:0s;}
		@keyframes lds-spinner{0%{opacity:1;}
			100%{opacity:0;}
		}

		{display:none !important;}
	</style>
 	`;
}
function init_srx_css() {
  return `
	<style id="jdSrxCSS">
		body{padding-left:20px;}
		#content #primary{width:100%;}
		#content #primary #main header h1 {margin-top:5px;padding:2px 10px; font-size:18px;border:1px solid #00000055;}
		#content #primary #main article {width:16%;}
		#content #primary #main article header h2 {font-size:16px;font-weight:normal;}
		#content #primary #main article header .entry-meta {font-size:11px;font-weight:normal;color:firebrick;}
		#content #primary #main article .entry-summary {font-size:12px;font-weight:normal;}
	</style>
	`;
}
async function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
