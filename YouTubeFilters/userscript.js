// ==UserScript==
// @name         YouTube - show/hide Channel Videos
// @namespace    http://cssyphus.com
// @version      0.1
// @match        https://www.youtube.com/@techtutorialsforauthors/videos
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(async function () {
  // @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
  "use strict";
  let qry;
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  $("body").insertAdjacentHTML("afterbegin", init_askbox());
  $("body").insertAdjacentHTML("beforeend", init_css());
  // $$('script').forEach(scp => scp.parentNode.removeChild(scp));

  $("#jdbtnHideThumbs").addEventListener("click", hide_thumbnails);
  $("#jdbtnLoadAll").addEventListener("click", repeatclick);
  $("#jdbtnKeepOnly").addEventListener("click", keep_only_these);
  $("#jdbtnRemoveOnly").addEventListener("click", remove_only_these);
  $("#jdbtnResetFilters").addEventListener("click", remove_all_filters);
  $("#jdAskInput").addEventListener("keyup", process_ask_input_typing);

  function process_ask_input_typing(e) {
    const key = window.event ? e.keyCode : e.which;
    if (key === 13) {
      $("#jdMsgDiv").style.display = "none";
      const resp = e.target.value;
      if (qry === "removeonly") {
        $$("ytd-rich-item-renderer").forEach((el) => {
          const ttl = el.querySelector(
            "div#content ytd-rich-grid-media div#dismissible div#details div#meta h3 a#video-title-link yt-formatted-string#video-title"
          ).textContent;
          el.classList.remove("hidezmoi");
          if (ttl.includes(resp)) {
            el.classList.add("hidezmoi");
          }
        });
      } else if (qry === "keeponly") {
        $$("ytd-rich-item-renderer").forEach((el) => {
          const ttl = el.querySelector(
            "div#content ytd-rich-grid-media div#dismissible div#details div#meta h3 a#video-title-link yt-formatted-string#video-title"
          ).textContent;
          el.classList.remove("hidezmoi");
          if (!ttl.includes(resp)) {
            el.classList.add("hidezmoi");
          }
        });
      }
    } else if (key === 27) {
      $("#jdMsgDiv").style.display = "none";
    }
  }
  function remove_all_filters() {
    $$("ytd-rich-item-renderer").forEach((el) => {
      const ttl = el.querySelector(
        "div#content ytd-rich-grid-media div#dismissible div#details div#meta h3 a#video-title-link yt-formatted-string#video-title"
      ).textContent;
      el.classList.remove("hidezmoi");
    });
  }
  async function remove_only_these() {
    qry = "removeonly";
    $("#jdAskSpan").textContent = "Keyword for videos to hide:";
    $("#jdMsgDiv").style.display = "flex";
    await sleep(200);
    $("#jdAskInput").focus();
  }
  async function keep_only_these() {
    qry = "keeponly";
    $("#jdAskSpan").textContent = "Hide all videos except with Keyword:";
    $("#jdMsgDiv").style.display = "flex";
    await sleep(100);
    $("#jdAskInput").focus();
  }
  function hide_thumbnails() {
    $("body").insertAdjacentHTML("beforeend", hide_thumbnails_css());
  }
  function hide_thumbnails_css() {
    return `
		<style id="jdHideThmCss">
			ytd-thumbnail{display:none!important;}
		</style>
	`;
  }
  function init_css() {
    return `
	<style id="jdInitCss">
		div.banner-visible-area{display:none !important;height:0px;}
		#contentContainer:nth-of-type(1){padding-top:100px;} /* Was 425px - 250px is good */
			#jdbtnDIV{position:fixed;top:-25px;left:8vw;width:99vw;height:4vh;XXXoverflow:hidden;z-index:2022;XXXborder:1px solid #500;} /* z-index:2020  */
			#jdbtnDIV{transition:all 0.2s ease-in-out .3s;}
			#jdbtnDIV:hover{transform:translate(0px, 26px);}
				.jdbtn{display:inline-block;max-width:6vw;margin-left:1.2vw;padding:5px;font-size:0.75vw;color:white;background:darkcyan;}
				.jdbtn{transition:all 0.2s ease-in-out 0s;border-radius:5px;z-index:2020;cursor:pointer;}
				.jdbtn:hover{transition:all 0.2s ease-in-out 0.1s;transform:translate(0vh, .2vh) scale(1.15, 1.15);}
				.bgPurple{background:darkslateblue !important;}
		.hidezmoi{display:none !important;}
		{display:none !important;}
		{display:none !important;}
	</style>
	<div id="jdbtnDIV">
		<div id="jdbtnLoadAll" class="jdbtn">Scroll To Bottom</div>
		<div id="jdbtnHideThumbs" class="jdbtn">Hide Thumbs</div>
		<div id="jdbtnRemoveOnly" class="jdbtn bgPurple">Remove Only</div>
		<div id="jdbtnKeepOnly" class="jdbtn">Keep Only</div>
		<div id="jdbtnResetFilters" class="jdbtn">Remove All Filters</div>
	</div>

 	`;
  }
  function init_askbox() {
    return `
	<style id="jdAskBoxCss">
		#jdMsgDiv{display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000000ee;color:#ccc;z-index:2021;}
			.flex-center-center{display:flex;justify-content:center;align-items:center;}
			#jdMsg{width:35vw;padding:50px;background:dodgerblue;color:#ccc;}
				#jdAskSpan{display:inline-block;margin-right:10px;font-size:2rem;color:yellow;}
				#jdAskInput{padding:2px 5px;font-size:1.4rem;color:darkcyan;}
	</style>
	<div id="jdMsgDiv" class="flex-center-center"><div id="jdMsg"><span id="jdAskSpan"></span><input id="jdAskInput" /></div></div>
	`;
  }
  async function repeatclick() {
    let currdt, btnTxt;
    while ($("ytd-continuation-item-renderer") !== undefined) {
      currdt = new Date();
      currdt = currdt.toLocaleString();
      console.log(currdt);
      if ($("ytd-continuation-item-renderer")) {
        //window.scrollTo(0, document.body.scrollHeight);
        $("ytd-continuation-item-renderer").scrollIntoView();
        await sleep(1000);
      } else {
        break;
      }
    }
    window.scrollTo(0, 0);
    $("#jdAskInput").style.display = "none";
    $("#jdAskSpan").textContent = "All videos in this channel are now visible";
    $("#jdMsgDiv").style.display = "flex";
    await sleep(2500);
    $("#jdAskInput").style.display = "inline-block";
    $("#jdAskSpan").textContent = "";
    $("#jdMsgDiv").style.display = "none";
  }

  function sleep(ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
})();
