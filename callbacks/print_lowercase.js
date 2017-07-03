const https = require('https');
const getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {
  const lowerCase = html.toLowerCase();
  console.log(lowerCase);

}

getHTML(requestOptions, printUpperCase);
