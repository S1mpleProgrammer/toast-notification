const button = document.querySelector('#button');
const toasts = document.querySelector('#toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

const colors = [
    '#0000FF', // Blue
    '#FF0000', // Red
    '#006400', // Green
    '#ffae42' // yellow + orange
];
let messageIndex = 0;

const createNotification = () => {
    const newToast = document.createElement('div');
    newToast.innerHTML = messages[messageIndex];
    newToast.classList.add('toast');
    newToast.style.color = colors[messageIndex];
    toasts.appendChild(newToast);
    messageIndex++;
    if (messageIndex === 4) messageIndex = 0;
    setTimeout(() => {
        newToast.style.opacity = '0';
        setTimeout(() => {
            toasts.removeChild(newToast);
        }, 100)
    }, 3000)
};

button.addEventListener('click', createNotification);