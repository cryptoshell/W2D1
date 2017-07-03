const https = require('https');
const getHTML = require('./http-functions');


const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

const printHTML = function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);