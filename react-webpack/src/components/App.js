import React, { Component } from 'react';

//for async await working
import 'regenerator-runtime/runtime';

import '../assets/scss/index.scss';

async function delay() {
   return await Promise.resolve( 'async');
}

delay().then(console.log);

document.getElementById("h1").innerHTML = "now i try create webpack dream config";


class App extends Component {
    render() {
        return (
            <>
                <h1>My react App!</h1>
            </>
        )
    }
}

export default App;