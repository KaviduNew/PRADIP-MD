const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('හෙලෝ වර්ල්ඩ්!\n');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`සේවාදායකය http://localhost:${PORT}/ තුළ ක්‍රියාත්මක වේ`);
});

const express = require('express');
const app = express();

const PORT = 3000;

// Middleware එකක්
app.use(express.json());

// මූලික මාර්ගය
app.get('/', (req, res) => {
    res.send('හෙලෝ Express!');
});

// සේවාදායකය ආරම්භ කරන්න
app.listen(PORT, () => {
    console.log(`Express සේවාදායකය http://localhost:${PORT} මත ක්‍රියාත්මක වේ`);
});
const phoneNumber = "94768349788"; // ඔබේ WhatsApp අංකය (ගෝලීය ආකාරයෙන්)
const message = "Hello! How can I help you?";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

console.log(`WhatsApp Link එක: ${whatsappLink}`);

const express = require('express');
const app = express();

const PORT = 3000;

// Middleware එකක්
app.use(express.json());

// මූලික මාර්ගය
app.get('/', (req, res) => {
    res.send('හෙලෝ Express!');
});

// සේවාදායකය ආරම්භ කරන්න
app.listen(PORT, () => {
    console.log(`Express සේවාදායකය http://localhost:${PORT} මත ක්‍රියාත්මක වේ`);
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App කොම්පෝනන්ට් එකක් තිබිය යුතුයි

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // index.html හි root මත Render වේ
);
function greet(name) {
    return `ආයුබෝවන්, ${name}!`;
}

module.exports = greet;
