var gemini = require('gemini');

gemini.suite('technologies + fast-menu', function(suite) {
  suite
    .before(function(actions, find) {
      actions.setWindowSize(1280, 800);
    })
    .setUrl('/')
    .setCaptureElements('.technologies', '.fast-menu')
    .capture('technologies')
    .capture('technologies hover first', function (actions, find){
      actions.mouseMove(find('.technologies > span:nth-child(2)')).wait(200);
    });
});