function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();

  // забрати значення з форми
  const {
        elements: { delay, step, amount }
  } = event.currentTarget;
  
  let currentDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountOfPromises = amount.value;
  
  // генерувати проміси
  for (let position = 1; position <= amountOfPromises; position += 1, currentDelay += delayStep) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`); 
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
});
