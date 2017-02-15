gemini.suite('technologies + fast-menu', (suite) => {
    suite
        .setUrl('/')
        .setCaptureElements('.technologies', '.fast-menu')
        .capture('technologies')
        .capture('technologies hover first', (actions, find) => {
            actions.mouseMove(find('.technologies > span:nth-child(2)')).wait(200);
        });
});