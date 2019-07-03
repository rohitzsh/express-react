import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Banner, Section, Gallery } from './Components';

class App extends Component {

    render() {
        return (
            <div id="wrapper" className="divided">
            <Banner title="Banner Title" />
            <Section orient="orient-right" title="Section 1" />
            <Section orient="orient-left" title="Section 2" />
            <Gallery title="Gallery New"/>
            <Footer fb="https://fb.com/test" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
