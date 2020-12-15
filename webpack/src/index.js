//for async await working
import 'regenerator-runtime/runtime';

import './assets/scss/index.scss';

async function delay() {
   return await Promise.resolve( 'async');
}

delay().then(console.log);

document.getElementById("h1").innerHTML = "now i try create webpack dream config";