var request = require('request');
    cheerio = require('cheerio');
    fs = require('fs');

var images = [];

request('https://www.pexels.com/search/cat/', function (err, res, body) {
    if(!err && res.statusCode === 200){
        var $ = cheerio.load(body);
        $('img', 'div.photos').each(function(){
            var img = $(this).attr('src');

            images.push(img);

        });
        for (var i=0; i<images.length; i++){
            request(images[i]).pipe(fs.createWriteStream('images/cat' + i + '.jpg'));
        }
    }
});
var images1 = [];
request('https://www.pexels.com/search/dog/', function (err, res, body) {
    if(!err && res.statusCode === 200){
        var $ = cheerio.load(body);
        $('img', 'div.photos').each(function(){
            var img = $(this).attr('src');

            images1.push(img);

        });
        for (var j=0; j<images1.length; j++){
            request(images1[j]).pipe(fs.createWriteStream('images/dog' + j + '.jpg'));
        }
    }
});