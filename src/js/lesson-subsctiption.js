import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#modal');

const PROMT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const refs = {
  modal: document.querySelector('#modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
}

const openModal = () => {
  setTimeout(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
      return;
    };

    modal.show();

    promptCounter += 1;
  }, PROMT_DELAY);
};

const onSubscribe = () => {
  hasSubscribed = true;
  modal.hide();
  console.log('hasSubscribed: ', hasSubscribed);
};

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', onSubscribe);




