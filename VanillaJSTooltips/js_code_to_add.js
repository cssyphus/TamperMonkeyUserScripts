function createMyTooltip(el) {
  let title = this.title;
  this.title = "";
  this.setAttribute("mytooltip", title);

  let tooltipWrap = document.createElement("div"); //creates div
  tooltipWrap.className = "mytooltip"; //adds class
  tooltipWrap.appendChild(document.createTextNode(title)); //add the text node to the newly created div.

  let firstChild = document.body.firstChild; //gets the first elem after body
  firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem

  let padding = 5;
  let linkProps = this.getBoundingClientRect();
  let tooltipProps = tooltipWrap.getBoundingClientRect();

  // console.log(tooltipProps.height);
  let topPos = linkProps.top - (tooltipProps.height + padding);

  tooltipWrap.setAttribute("style", "top:" + topPos + "px;" + "left:" + linkProps.left + "px;");
  // tooltipWrap.setAttribute('style','left:'+linkProps.left+'px;')
}

function cancelMyTooltip() {
  let title = this.getAttribute("tooltip");
  this.title = title;
  this.removeAttribute("mytooltip");
  document.querySelector(".mytooltip").remove();
}
