/*jslint indent:2, browser:true */
(function () {
  "use strict";

  //classList works in IE8
  document.documentElement.classList.remove('no-js');

  //addEventListener and DOMContentLoaded work in IE8
  document.addEventListener('DOMContentLoaded', function () {

    //array.proto.forEach works in IE8, document.querySelector is native 8 (but may not work with all selectors)
    Array.prototype.forEach.call(document.querySelectorAll("p a"), function (node) {
      //note: this is just for demonstration purposes, you should never add event listeners in a loop (instead, use delegation)
      node.addEventListener('click', function (ev) {
        if (!window.confirm("Navigate to \"" + ev.currentTarget.href + "\"?")) {
          ev.preventDefault();
        }
      }, false);
    });
    document.body.style.backgroundColor = 'red'
  }, false);
}());