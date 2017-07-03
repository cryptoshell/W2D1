const https = require('https');
const getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
  const reversed = html.reverse();
  console.log(reversed);

}

getHTML(requestOptions, printUpperCase);
