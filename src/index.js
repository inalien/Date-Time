import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';
import Tab from './components/tab'
import Footer from './components/footer'
ReactDOM.render(
<fragment>
    <Tab />
    <Footer />
</fragment>
, document.getElementById('root'));

serviceWorker.unregister();
