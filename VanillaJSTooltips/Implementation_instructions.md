## How to implement Zoltan's tooltip code in a plain vanilla javascript project

( Note: If you are using React, Angular, Vue, Svelte, Ruby, etc - consult [Zoltan's primary github repo](https://github.com/zoltantothcom/vanilla-js-tooltip) )


1. In your HTML, you have an element with an HTML tooltip that you wish to style more professionally.
    * Ensure that the element has both an ID and a title (the title will be turned into the tooltip text)


`<span id="myTestSpan" title="I have a really long title that I wish to format more nicely">I gotta tooltip on me</span>`


2. In your javascript code, add the two functions from the js_code_to_add.js file.
    * I presume you already know about wrapping your javascript code in a DOMContentLoaded event, such as:

```
    document.addEventListener('DOMContentLoaded',() => {
        // all your code goes inside here
    });
```
This same concept in the jQuery world is:
     `$(document).ready(function (){ //all your code goes in here });`
or just:
     `$(function(){ //all your code goes in here });`

   * Also, inside the above DOMContentLoaded/document.ready block, you need to initialize the tooltip code on the element you want the tooltip used on:

```
     document.querySelector('#myTestSpan').addEventListener('mouseover', createMyTooltip);
     document.querySelector('#myTestSpan').addEventListener('mouseout', cancelMyTooltip);
```

3. Ensure the CSS code is added to your document. If you need help with this step, you should watch [this[(https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)] or [this[(https://www.youtube.com/watch?v=BvJYXl2ywUE&list=PLZlA0Gpn_vH8BoXcpCUvdmdPZFuR5y2lV&index=1&t=0s)] or [this[(https://www.youtube.com/watch?v=qz0aGYrrlhU)]

4. You are done. High-five the coffee machine.
