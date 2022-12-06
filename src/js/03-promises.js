function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  
  });

};

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();

  // забираємо значення з форми
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let initDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountOfPromises = Number(amount.value);
  
  // генерувати проміси
  for (position = 1; position <= amountOfPromises; position += 1, initDelay += delayStep) {
    createPromise(position, initDelay)
      .then((succes) => {
        console.log(succes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
