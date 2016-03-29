var gemini = require('gemini');

gemini.suite('article', function(suite) {
  suite
    .setUrl('/posts/56c04639569e85d50220b572/')
    .setCaptureElements('article.post')
    .capture('article')
    .capture('hover link', function (actions, find){
      actions.mouseMove(find('.entry-content a')).wait(200);
    });
});