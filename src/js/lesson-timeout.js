const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
    notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
}

function showNotification() {
    refs.notification.classList.add('is-visible');
    
    timeoutId = setTimeout(() => {
        hideNotification();
        console.table('Timeout was plannd 3aasdasd000ms ago');
    }, NOTIFICATION_DELAY);

    console.table(timeoutId);
};

function hideNotification() {
    refs.notification.classList.remove('is-visible');
};