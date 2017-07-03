module.exports = function getHTML (options, callback) {

  function getAndPrintHTML (options) {
    https.get(options, function (response) {

      response.setEncoding('utf8');

      response.on('data', function (data) {
        let allData = '';
        allData += data;
        callback(allData);
      });

      response.on('end', function() {
        console.log('Response stream complete.');
      });
    });
  }
}
