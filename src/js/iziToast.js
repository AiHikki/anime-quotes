import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 3000,
  icon: 'material-icons',
  transitionIn: 'bounceInLeft',
  transitionOut: 'flipOutX',
  position: 'topRight',
  backgroundColor: 'red',
  messageColor: '#fff',
  messageSize: '16',
  progressBarColor: '#fff',
  rtl: true,
  pauseOnHover: false,
});

export function showError(message) {
  iziToast.show({
    message,
  });
}
