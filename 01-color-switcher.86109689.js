!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=!1,o=null;t.startBtn.addEventListener("click",(function(){n||(o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n=!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(o),n=!1}))}();
//# sourceMappingURL=01-color-switcher.86109689.js.map
