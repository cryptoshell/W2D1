const https = require('https');
const getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

const printLowerCase = function printLowerCase (html) {
  const lowerCase = html.toLowerCase();
  console.log(lowerCase);

}

getHTML(requestOptions, printLowerCase);
