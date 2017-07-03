const https = require("https");

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      let allData = '';
      allData += data;
      console.log('All Data Received:', allData);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


getAndPrintHTML(requestOptions);