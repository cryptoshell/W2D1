const https = require("https");

function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    let allData = '';
    allData += data;
    console.log('All Data Received:', allData);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

}