var gemini = require('gemini');

gemini.suite('footer', function(suite) {
  suite
    .setUrl('/')
    .setCaptureElements('footer')
    .capture('footer');
});

gemini.suite('header', function(suite) {
  suite
    .setUrl('/')
    .setCaptureElements('header')
    .capture('header');
});