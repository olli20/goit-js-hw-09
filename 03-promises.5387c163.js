!function(){function e(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(n){n.preventDefault();for(var o=n.currentTarget.elements,t=o.delay,i=o.step,a=o.amount,c=Number(t.value),r=Number(i.value),u=a.value,l=1;l<=u;l+=1,c+=r)e(l,c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.5387c163.js.map
