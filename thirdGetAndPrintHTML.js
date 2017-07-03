const https = require("https");

function getAndPrintHTML (options) {
  requestOptions.host = options.host;
  requestOptions.path = options.path;
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
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
