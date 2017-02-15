gemini.suite('footer', (suite) => {
    suite
        .setUrl('/')
        .setCaptureElements('footer')
        .capture('footer');
});

gemini.suite('header', (suite) => {
    suite
        .setUrl('/')
        .setCaptureElements('header')
        .capture('header');
});