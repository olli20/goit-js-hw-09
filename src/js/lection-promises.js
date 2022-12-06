// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulfill) {
//             resolve('Success');
//         }

//         reject('Error');
//     }, 2000);
// });

// promise
//     .then(onSuccess)
//     .then(onSuccess)
//     .catch(onError);
    

// function onSuccess(result) {
//     console.log('Promise has result: ', result);
//     return result;
// };

// function onError(error) {
//     console.log('Promise has error: ', error);
//     return error;
// };

// console.log(promise);


const makeOrder = dish => {
    const DELAY = 1000;

    const promise = new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;

        setTimeout(() => {
            if (passed) {
                resolve(`here you go: ${dish}`);
            };

            reject('Enschuldigung, der Kuhlschrank ist leer');
        }, DELAY);
    });

    return promise;
};

makeOrder('cake').then(x => console.log(x)).catch(x => console.log(x));
