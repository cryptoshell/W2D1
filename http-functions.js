module.exports = function getHTML (options, callback) {

  function getAndPrintHTML (options) {
    requestOptions.host = options.host;
    requestOptions.path = options.path;
  }

  function getHTML (options, printHTML(html)) {
    https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      let allData = '';
      allData += data;
      console.log('All Data Received:', allData);
    });

    response.on('end', printHTML(html));
  }

  function printHTML (html) {
    console.log(html);
  }

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'

};