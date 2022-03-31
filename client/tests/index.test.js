/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), utf8)

global.fetch = require('jest-fetch-mock') //npm install



let api;

describe('index.js', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        api = require('../static/js/index')
    })
})

afterEach(() => {
    fetch.resetMocks();
})


