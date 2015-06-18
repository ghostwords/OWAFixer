function insertScript(text, data) {
	var parent = document.documentElement,
		script = document.createElement('script');

	script.text = text;
	script.async = false;

	parent.insertBefore(script, parent.firstChild);
}

var script = "(" + function () {
	Object.defineProperty(navigator, 'userAgent', {
		get: function () {
			return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A";
		}
	});
	Object.defineProperty(navigator, 'appVersion', {
		get: function () {
			return "5.0 (Mac; en-US)";
		}
	});
} + "());";

insertScript(script);
