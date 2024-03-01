import puppeteer from "puppeteer-core";

(async () => {
	const browser = await puppeteer.launch({
		executablePath:
			"C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
		args: [
			"--proxy-server=socks5://your-proxy-address:port",
			"--timezone=",
			"--user-data-dir=",
		],
	});
	const page = await browser.newPage();
	await page.goto("whoer.net");
})();
