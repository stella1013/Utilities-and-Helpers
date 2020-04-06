const rp = require('request-promise');
const $ = require('cheerio');

const parseinfo = (url) => {
	rp(url)
		.then(html => {
			//success
			// console.log($('.firstHeading', html).text());
			console.log($('.contentsWrap .contents .newsInfo p', html).text());
			return {
				name: $('.contentsWrap .contents .newsInfo .fontTitle6', html).text(),
				birthday: $('.contentsWrap .contents .newsInfo p', html).text()
			};
		})
		.catch(err => {
			//boo!
			console.log('error');
		});
};
module.exports = parseinfo;
