import App from './App';

document.querySelector('#data-btn').addEventListener('click', App.data, false);

setInterval(() => {
    App.textFromServer('http://tigu.hk.tlu.ee/~priit.parl/programmeerimine-1-js/time.php');
}, 1000);