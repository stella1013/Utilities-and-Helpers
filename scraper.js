const rp = require('request-promise');
const $ = require('cheerio');
const parseinfo = require('./parseinfo');
const url = 'http://www.koreaherald.com/list_kr.php?ct=140400000000';

rp(url)
.then((html)=>{
    //success
    // console.log($('big > a', html).length);
    // console.log($('big > a', html));
    var wholeTable = $$("tr", $0)
    const wikiUrls = [];
    for(let i=0; i<45; i++){
        wikiUrls.push($('#container .content .newslist .con h3 a', html)[i].attribs.href);
        // console.log(wikiUrls);
    }
    return Promise.all(
        wikiUrls.map((urll)=>{
            console.log(urll);
            return parseinfo(urll);
        })
    );
    
})
.then((articles)=> {
    console.log(articles);
})
.catch((err)=>{
    //error
    console.log('error');
});
