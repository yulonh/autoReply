var options = {
	content: '顶！！！',
	time: 30
};

//页面刷新后
chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
	if (change.status == "complete") {
		chrome.tabs.sendRequest(tabId, options, function(address) {});
	}
});