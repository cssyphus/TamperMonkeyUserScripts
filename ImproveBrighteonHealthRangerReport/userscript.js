// ==UserScript==
// @name         www.brighteon.com/channels
// @namespace    https://github.com/cssyphus/TamperMonkeyUserscripts/
// @version      0.2
// @match        https://www.brighteon.com/channels/*
// @match        https://www.brighteon.com/browse/new-video*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  window.qxURL;

  setTimeout(function () {
    queryPage();
  }, 400);
})();
function queryPage() {
  //Get page title:  $('meta[name=title]').getAttribute('content')
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  $$("script").forEach((scp) => scp.parentNode.removeChild(scp));
  $$("iframe").forEach((scp) => scp.parentNode.removeChild(scp));
  if (document.URL.includes("hrreport")) {
    if ($("#qxNewVidsCss") !== null) $("#qxNewVidsCss").remove();
    if ($("#qxHrrCSS") === null) {
      $("body").insertAdjacentHTML("beforeend", qx_hrr_css());
      hrr_arrange_content();
    }
  } else if (document.URL.includes("new-videos")) {
    if ($("#qxHrrCSS") !== null) $("#qxHrrCSS").remove();
    if ($("#qxNewVidsCss") === null) {
      $("body").insertAdjacentHTML("beforeend", qx_newvids_css());
      newvids_arrange_content();
    }
  }
  if (document.URL !== window.qxURL) {
    if (document.URL.includes("new-videos")) newvids_arrange_content();
  }
  window.qxURL = document.URL;
  setTimeout(() => {
    queryPage();
  }, 700);
}
function qx_newvids_css() {
  return `
	<style id="qxNewVidsCss">
		.browse-video-section > .videos > .d-flex > .col-12.col-xl-2{max-width:12% !important;}
		.browse-video-section__header info{height:0px;overflow:hidden;}
		#Masthead{height:0px;overflow:hidden;}
		.browse-video-section.container__main.full-width{max-width:unset !important;}
		#modal-root{display:none !important;}
		.qxText{z-index:1; position:absolute;top:0;left:0; display:grid;place-content:center; width:215px!important;height:120px;}
		.qxTextClr{text-align:center; color:white!important; text-shadow:1px 1px 1px black; background:#00000055;}
		.qxPostEl{height:120px!important; overlay:hidden;}
		.qxText > .post__details:nth-child(2){color:cyan!important;}

		.container__main{background:black;}
		li.active.page-item{background:#333;}
		.page-link.btn{color:darkgrey;}
		.page-node__home.page-item>a>button{background:#333!important;; border-radius:unset!important;;}
		.info, .videos.channel-videos{border:none!important;}
		body{background:black!important;}
	</style>
 	`;
}
function qx_hrr_css() {
  return `
	<style id="qxHrrCSS">
		.channel-section__content > .videos > .d-flex > .col-12.col-xl-2{max-width:12% !important;}
		.channel-section__header.channel-info.info{height:0px;overflow:hidden;}
		#Masthead{height:0px;overflow:hidden;}
		.channel-section.container__main.channel-template{max-width:unset !important;}
		#modal-root{display:none !important;}
		.qxText{z-index:1; position:absolute;top:0;left:0; display:grid;place-content:center; width:215px;height:120px;}
		.qxTextClr{text-align:center; color:white!important; text-shadow:1px 1px 1px black; background:#00000055;}
		.qxPostEl{height:120px!important; overlay:hidden;}

		.container__main{background:black;}
		li.active.page-item{background:#333;}
		.page-link.btn{color:darkgrey;}
		.page-node__home.page-item>a>button{background:#333!important;; border-radius:unset!important;;}
		.info, .videos.channel-videos{border:none!important;}
		body{background:black!important;}
		.footer{display:none !important;}
	</style>
 	`;
}
function hrr_arrange_content() {
  const $$ = document.querySelectorAll.bind(document);
  $$(".channel-section__content > .videos > .d-flex > .col-12.col-xl-2").forEach((v, i) => {
    const aTag = v.querySelector(".title > a");
    const txt = aTag.innerText;
    aTag.setAttribute("title", txt);
    const postDetails = v.querySelector("div.post__details");
    postDetails.style = "display:none!important";
    const ttxt = v.querySelector("div.text");
    ttxt.classList.add("qxText");
    const ttxta = ttxt.querySelector(".title a");
    ttxta.classList.add("qxTextClr");
    const postEl = v.querySelector(".post");
    postEl.insertBefore(ttxt, postEl.childNodes[0]);
    postEl.classList.add("qxPostEl");
  });
}
function newvids_arrange_content() {
  console.log("RUNNING *****  newvids_arrange_content  *****");
  setTimeout(() => {
    //NEW CONTENT comes in via AJAX, 500ms might not always be enough. How to find when AJAX completes?
    const $$ = document.querySelectorAll.bind(document);
    $$(".container__main > .videos > .d-flex > .col-12.col-xl-2").forEach((v, i) => {
      const aTag = v.querySelector(".title > a");
      const txt = aTag.innerText;
      aTag.setAttribute("title", txt);
      const postDetails = v.querySelector("div.post__details");
      postDetails.style = "display:none!important";
      const ttxt = v.querySelector("div.text");
      ttxt.classList.add("qxText");
      const ttxta = ttxt.querySelector(".title a");
      ttxta.classList.add("qxTextClr");
      const postEl = v.querySelector(".post");
      postEl.insertBefore(ttxt, postEl.childNodes[0]);
      postEl.classList.add("qxPostEl");
    });
  }, 500);
}
