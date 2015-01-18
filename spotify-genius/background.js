chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
            $.post( 'http://genius-api.com/api/songInfo',
                    { name: response.title, genre: 'rap' })
                .done(function( data ) {
                    chrome.tabs.create({ url: data[0].link });
                });
        });
    });
});