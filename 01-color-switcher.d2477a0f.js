const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=!1,o=null;t.startBtn.addEventListener("click",(()=>{e||(o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e=!0)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(o),e=!1}));
//# sourceMappingURL=01-color-switcher.d2477a0f.js.map
