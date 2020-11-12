import { init } from './init.js';

// Start ze App!
const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });
