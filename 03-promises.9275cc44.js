!function(){function e(e,o){var n=Math.random()>.3;return promise=new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(o){o.preventDefault();for(var n=o.currentTarget.elements,t=n.delay,i=n.step,r=n.amount,a=Number(t.value),c=Number(i.value),u=r.value,l=1;l<=u;l+=1,a+=c)e(l,a).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.9275cc44.js.map