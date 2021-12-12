// ==UserScript==
// @name         rumble.com video
// @namespace    https://github.com/cssyphus/TamperMonkeyUserscripts/
// @version      0.3
// @match        https://rumble.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var qxNoChat = true,
    qxNoSdBar = false,
    qxFullBlk = false,
    qxVidSize = "Large",
    qxNoVideo = false,
    url = window.location.href,
    qxShorts = "Show Shorts";

  init_global_inserts();
  $("script").remove();
  $("body").append(window.qxTopBtns);
  if (url.includes("BannonsWarRoom")) {
    $("body").append(qx_my_css());
    $(".main-and-sidebar > div > ol > li").each(function (i, v) {
      if ($(v).find("article .video-item--duration").length) {
        const mins = $(v).find("article .video-item--duration").data("value").split(":")[0];
        if (parseInt(mins) < 20) {
          $(v).hide();
        }
      }
    });
  } else if (url.includes("/c/")) {
    //do nothing here
  } else {
    $("aside ul li.mediaList-item").each(function (i, el) {
      const txt = $(this).find("a h3.mediaList-heading").text();
      //console.log(txt);
      $(this).attr("title", txt);
    });
  }
  //$('body').append(qx_my_css());

  $(document).on("click", "#qxbtnShowShorts", function () {
    if (qxShorts === "Show Shorts") {
      qxShorts = "Hide Shorts";
      $("#qxbtnShowShorts").text(qxShorts).addClass("bgPurple");
      $(".main-and-sidebar > div > ol > li").each(function (i, v) {
        if ($(v).find("article .video-item--duration").length) {
          const mins = $(v).find("article .video-item--duration").data("value").split(":")[0];
          if (parseInt(mins) < 20) {
            $(v).show();
          }
        }
      });
    } else {
      qxShorts = "Show Shorts";
      $("#qxbtnShowShorts").text(qxShorts).removeClass("bgPurple");
      $(".main-and-sidebar > div > ol > li").each(function (i, v) {
        if ($(v).find("article .video-item--duration").length) {
          const mins = $(v).find("article .video-item--duration").data("value").split(":")[0];
          if (parseInt(mins) < 20) {
            $(v).hide();
          }
        }
      });
    }
  });
  $(document).on("click", "#qxbtnFullBlk", function () {
    if (qxFullBlk) {
      $("#qxcssBlack").remove();
      $(this).removeClass("bgPurple");
      qxFullBlk = false;
    } else {
      $("body").append(window.qxCssBlack);
      $(this).addClass("bgPurple");
      qxFullBlk = true;
    }
  });
  $(document).on("click", "#qxbtnVidSize", function () {
    if (qxVidSize === "Large") {
      qxVidSize = "Medium";
      $(".constrained").css({ maxWidth: "60%", marginLeft: "50px" }); /* ADDED marginLeft  */
    } else if (qxVidSize === "Medium") {
      qxVidSize = "Small";
      $(".constrained").css({ maxWidth: "25%", marginLeft: "50px" }); /* ADDED marginLeft  */
    } else if (qxVidSize === "Small") {
      qxVidSize = "Large";
      $(".constrained").css({ maxWidth: "100%" });
    }
    $("#qxbtnVidSize").text(`Video [${qxVidSize}]`);
  });
  $(document).on("click", "#qxbtnDL", function () {
    const url = $("#videoPlayer > div > video").attr("src");
    window.open(url);
  });
})();
function qx_my_css() {
  return `
	<style id="qxMyCss">
		#qxMyCssDIV{position:absolute;top:84px;left:2vw;width:15vw;height:4vh;z-index:2022;}
	</style>
	<div id="qxMyCssDIV">
		<div id="qxbtnShowShorts" class="qxbtn">Show Shorts</div>
	</div>
 	`;
}
function init_global_inserts() {
  window.qxTopBtns = `
		<style>
			.header-upload, .header-user{display:none !important;}
			#qxbtnDIV{position:absolute;top:-14px;left:55vw;width:25vw;height:4vh;XXXoverflow:hidden;z-index:2022;XXXborder:1px solid #500;} /* z-index:2020  */
			#qxbtnDIV{transition:all 0.2s ease-in-out .3s;}
			#qxbtnDIV:hover{transform:translate(0px, 14px);}
			.qxbtn{display:inline-block;max-width:6vw;margin-left:1.2vw;padding:5px;font-size:0.75vw;color:white;background:darkcyan;}
			.qxbtn{transition:all 0.2s ease-in-out 0s;border-radius:5px;z-index:2020;cursor:pointer;}
				.qxbtn:hover{transition:all 0.2s ease-in-out 0.1s;transform:translate(0vh, .2vh) scale(1.15, 1.15);}
				.bgPurple{background:darkslateblue !important;}
			.listing-header--backsplash{display:none !important;}
			.news_notification{display:none !important;}
		</style>
		<div id="qxbtnDIV">
			<div id="qxbtnFullBlk" class="qxbtn">FULL BLACK</div>
			<div id="qxbtnNoSdBar" class="qxbtn">No Sidebar</div>
			<div id="qxbtnVidSize" class="qxbtn">Video [Large]</div>
            <div id="qxbtnDL" class="qxbtn">Open for DL</div>
		</div>
	`;
  window.qxCssBlack = `
		<style id="qxcssBlack">
			html,body{height:100vh; background:black;}
			main{background:black;}
			.qxTtlSpan{color:#444;}
			header.header{display:none;}
			h1.h1{display:none;}
			.media-under-title{display:none;}
			.media-sidebar{display:none;}
			.media-content .container.content.media-description{display:none;}
			.media-content .media-description-break.a-break{display:none;}
			.video-footer-buttons{display:none;}
			footer.footer{display:none;}
			#login-to-see-comments{display:none !important;}
			.constrained{max-width:100%;}
			.constrained article .media-content{width:100%;}
		</style>`;
}
