chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	var title = document.querySelector('head > title').textContent;
	title = title.substring(0, title.length - 10);
	title = title[0] == '▶' ? title.substring(2) : title;
	sendResponse({title: title});
});