import Application from './Application';

function start() {
  window.app = new Application();
}

if (window.cordova) {
  document.addEventListener('deviceready', start, false);
} else {
  document.addEventListener('DOMContentLoaded', start, false);
}

