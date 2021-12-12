// ==UserScript==
// @name         w3schools.com/cssref/css_colors.asp
// @namespace    https://github.com/cssyphus/TamperMonkeyUserscripts/
// @version      0.2
// @match        https://www.w3schools.com/cssref/css_colors.asp
// @match        https://www.w3schools.com/colors/colors_names.asp
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  window.qxBlack = false;
  window.qxFull = false;

  $("body").insertAdjacentHTML("beforeend", init_css());
  $("body").insertAdjacentHTML("beforeend", add_btns());
  $$("script").forEach((scp) => scp.parentNode.removeChild(scp));

  setTimeout(() => {
    $$(".qxBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.id === "qxBtnFull") return false;
        const sz = e.target.textContent;
        const els = $$("#colornamestable > .w3-col");
        for (let i = 0; i < els.length; i++) {
          const el = els[i];
          el.style.width = sz + "%";
        }
        if (sz === "5") {
          const sps = $$(".colornamespan");
          for (let i = 0; i < sps.length; i++) {
            sps[i].style = "font-size:9px!important";
          }
        }
      });
    });
    $("#qxBtnFull").addEventListener("click", (e) => {
      if (window.qxFull) {
        $("#qxFull").remove();
        window.qxFull = false;
      } else {
        $("body").insertAdjacentHTML("beforeend", qx_no_sidebar());
        window.qxFull = true;
      }
    });
    $("#qxBtnBlack").addEventListener("click", (e) => {
      if (window.qxBlack) {
        $("#qxBgBlack").remove();
        window.qxBlack = false;
      } else {
        $("body").insertAdjacentHTML("beforeend", qx_bg_black());
        window.qxBlack = true;
      }
    });
  }, 300);
})();
function qx_no_sidebar() {
  return `
	<style id="qxFull">
		body > #sidenav.w3-sidebar.w3-collapse{display:none !important;}
		#belowtopnav{margin:0!important; padding:0 0 0 17px;}
		.topnav{display:none !important;}
		.innerbox{font-size:10px!important;}
	</style>
 	`;
}
function init_css() {
  return `
	<style id="qxInitCss">
		#pagetop, #right{display:none !important;}
		#main>h1, #main>h2, #main>p{display:none !important;}
		#main>.nextprev{display:none !important;}
		#main{width:100%; padding:0;}
		#colornamestable .w3-col{width:20%;}
		#footer{display:none !important;}
	</style>
 	`;
}
function add_btns() {
  const qxBlackTitle = qxBlack ? "White" : "Black";
  const qxFullTitle = qxFull ? "Full" : "Menu";
  return `
	<div id='qxBtnDiv'>
	   <div id='qxBtn25' class='qxBtn'>25</div>
	   <div id='qxBtn20' class='qxBtn'>20</div>
	   <div id='qxBtn15' class='qxBtn'>15</div>
	   <div id='qxBtn10' class='qxBtn'>10</div>
	   <div id='qxBtn5' class='qxBtn'>5</div>
	   <div id='qxBtnFull' class='qxBtn'>${qxFullTitle}</div>
	   <div id='qxBtnBlack' class='qxBtn'>${qxBlackTitle}</div>
	</div>
	<style>
	   #qxBtnDiv{z-index:99999999999;position:fixed;top:0;left:0;width:310px;height:auto; padding-left:5px; display:flex;}
	      .qxBtn{margin-right:8px; padding:2px 5px; font-size:1rem; color:white; background:darkgoldenrod; border-radius:5px; user-select:none; cursor:pointer;}
	</style>
	`;
}
function qx_bg_black() {
  return `
	<style id="qxBgBlack">
		body > #belowtopnav > div.w3-row{background-color:black !important;}
	</style>
 	`;
}
