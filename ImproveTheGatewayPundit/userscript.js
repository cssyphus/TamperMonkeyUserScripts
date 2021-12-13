// ==UserScript==
// @name         thegatewaypundit.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://www.thegatewaypundit.com/
// @match        https://www.thegatewaypundit.com/page/*
// @grant        none
// ==/UserScript==

"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$("body").insertAdjacentHTML("beforeend", init_css());
$$("script").forEach((scp) => scp.parentNode.removeChild(scp));

function init_css() {
  return `
	<style id="qvInitCss">
		#wj-network-header-container {height:40px !important;}
		#wj-network-header-container > a > .wj-network-header-logo {display:none !important;}
		#tgp-mobile-menu{display:none !important;}
		#wj-network-header-menu-container{display:none !important;}
		.site-container > .bumper {height:10px !important;}
		.site-inner > .wrap {width:94% !important;}
		.site-inner > .wrap > .content-sidebar-wrap {width:100% !important;}
		.site-inner > .wrap > .content-sidebar-wrap > content {width:100% !important;}
		#tgp-archive-loop {max-width:100% !important;}
		.date-author-comment > .archive-summary{display:none !important;} /*  Sharing bars  */
		.tgp-post > .archive-summary {display:none !important;} /*  Sharing bars  */
		.overlay-logo{display:none !important;} /*  GP branding on all article images  */
		.tgp-post-container {display:flex !important; flex-wrap:wrap;}
		.img-overlay > .entry-image > img{width:50% !important;}
		.tgp-post {width:250px !important; min-width:250px !important; max-width:250px !important;}
		h3.entry-archive-title {padding:0 10px;}
		h3.entry-archive-title > a {display:block; line-height:18px; font-weight:400; font-size:16px;}
		.entry-image img {width:60% !important; margin:0 auto;}
		a.post-comments.entry-comment-count{display:none;}
		span.entry-author.entry-info{display:none !important;}
		.content>#tgp-archive-loop>.featured-article{grid-template-columns:30% 70%; padding-bottom:20px!important;}
		.content>#tgp-archive-loop>.featured-article>.top-story-info{max-width:800px!important;}
		.content>#tgp-archive-loop>.featured-article>.top-story-info>.top-story-title{max-width:800px!important;}
		.site-container>.site-inner>.wrap{width:100%!important;}
	</style>
 	`;
}
