import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const products = [
    {
        name: 'cappuccino',
        price: 35000,
        active: true,
    },
    {
        name: 'green tea',
        price: 40000,
        active: true,
    },
    {
        name: 'fish and chips',
        price: 50000,
        active: true,
    },
    {
        name: 'mineral water',
        price: 8000,
        active: false,
    },
    {
        name: 'french fries',
        price: 18000,
        active: false,
    }
];

ReactDOM.render(<App products={products} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
