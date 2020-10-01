import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Like from './components/Like';
import Dislike from './components/Dislike';

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <section className="main-content-section">
                <div className="main-content-wrapper">
                    <Like />
                    <Dislike />
                </div>
            </section>
        );
    }
}

const app = document.getElementById("app");

ReactDOM.render(
    <App />,
    app 
);