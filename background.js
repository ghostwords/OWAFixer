function spoofUAHeader(details) {
	for (var i = 0; i < details.requestHeaders.length; i++) {
		var header = details.requestHeaders[i];
		if (header.name == "User-Agent") {
			header.value = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A";
			break;
		}
	}

	return {
		requestHeaders: details.requestHeaders
	};
}


chrome.webRequest.onBeforeSendHeaders.addListener(
	spoofUAHeader,
	{ urls: ['https://exchange.robinhood.org/*'] },
	["blocking", "requestHeaders"]
);
