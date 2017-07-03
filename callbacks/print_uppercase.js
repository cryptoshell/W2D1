const getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

const printUpperCase = function printUpperCase (html) {
  const allCaps = html.toUpperCase();
  console.log(allCaps);

}

getHTML(requestOptions, printUpperCase);
