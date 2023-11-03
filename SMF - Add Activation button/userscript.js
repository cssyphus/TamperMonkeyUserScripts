// ==UserScript==
// @name         SMF Add Activation Button to Registration and Members areas
// @namespace    http://cssyphus.com
// @version      231101.0930
// @match        https://YOUR_DOMAIN_HERE/index.php?action=admin;area=regcente*
// @match        https://YOUR_DOMAIN_HERE/index.php?action=admin;area=viewmember*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stopsogi.org
// @grant        none
// ==/UserScript==

/*
    IMPORTANT!  YOU MUST CHANGE THE URL FOR THE DOMAIN ON LINES 5, 6 and 37
*/

(async function () {
  "use strict";
  const $ = document.querySelector.bind(document);

  show_password_text(); //COMMENT OUT this line if you do not want the password text made visible
  add_activate_btn();

  async function wait_for_menus() {
    while (!$("#adm_submenus")) {
      await sleep(500);
    }
    await sleep(100);
  }
  async function add_activate_btn() {
    await wait_for_menus();
    const btnRow = $("#adm_submenus #mobile_generic_menu_1_tabs div.popup_window div.generic_menu ul");
    const newLI = document.createElement("li");
    const newATag = document.createElement("a");
    newLI.id = "jdLIActivations";
    newATag.textContent = "Activations";
    newATag.setAttribute(
      "href",
      "https://YOUR_DOMAIN_HERE/index.php?action=admin;area=viewmembers;sa=browse;type=approve"
    );
    newLI.appendChild(newATag);
    btnRow.appendChild(newLI);
  }
  function show_password_text() {
    if ($("#password_input")) {
      $("#password_input").setAttribute("type", "text");
    }
  }
  function sleep(ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
})();
