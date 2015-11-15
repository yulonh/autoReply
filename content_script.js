chrome.extension.onRequest.addListener(function (params, sender, sendResponse) {
    setTimeout(function () {

        var form = $('[name="formrlyss"],[name="form1"]');
        if (form.length === 0) {
            return
        }
        form.find('[name="content"]').val([params.content || '顶！！！！', new Date().getTime()].join(''));
        form.submit();

    }, params.time * 60 * 1000);
});

