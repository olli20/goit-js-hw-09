function e(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(o=>{o.preventDefault();const{elements:{delay:t,step:n,amount:l}}=o.currentTarget;let r=Number(t.value);const s=Number(n.value),i=l.value;for(let o=1;o<=i;o+=1,r+=s)e(o,r).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.a8047667.js.map