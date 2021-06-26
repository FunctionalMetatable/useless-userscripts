// ==UserScript==
// @name         Fix Cubeupload Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fixes cubeupload links if your internet provider blocks it
// @author       FunctionalMetatable
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  var x = document.querySelectorAll("img");
  var i;
  for (i = 0; i < x.length; i++) {
    var thisEl = x[i];
    if (thisEl.src.search("u.cubeupload.com") !== -1) {
      thisEl.src = thisEl.src.replace(
        "u.cubeupload.com",
        "cubeupload-proxy.9gr.repl.co"
      );
    }
  }
})();
