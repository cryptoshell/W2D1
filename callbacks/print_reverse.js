const https = require('https');
const getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const printReversed = function reverse (html) {
  const reversed = html.split("").reverse().join("");
  console.log(reversed);

}

getHTML(requestOptions, printReversed);
