!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.setAttribute("disabled","")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.ce746bbd.js.map