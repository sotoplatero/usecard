const chromium = require('chrome-aws-lambda');
const got = require("got");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require('path');
const URL = require('url');
var dot = require("dot");

const localChrome = process.env.PATH_CHROME;

exports.handler = async (event, context) => {

    let {
        url,
        bg,
        color,
        size = '6xl',
    } = event.queryStringParameters;

    let { bgfrom, bgto } = [bg || 'gray-200.gray-200'].split('_');
    bgfrom = bgfrom || 'gray-200';
    colorto = colorto || 'blue-700';
    colorfrom = colorfrom || 'blue-700';

    console.log('bgto:'+colorto)
    if ( !url ) return {
        statusCode: 400,
        body: JSON.stringify({ message: 'url parameter not defined' })
    }

    const response = await got( url );
    const $ = cheerio.load(response.body);
    const title = $('title').first().text();
    const description = $('meta[name="description"],meta[property="description"],meta[property="og:description"],meta[name="twitter:description"]').attr('content')

    // try {
        const resolved = path.resolve(__dirname, "./play.html")        
        let tmpl = fs.readFileSync( resolved, "utf8" );
        const view = dot.template(tmpl);

        const html = view({ 
            title: title, 
            size: size,
            subtitle: description, 
            bgto: bgto, 
            bgfrom: bgfrom, 
            colorto: colorto, 
            colorfrom: colorfrom, 
            domain: URL.parse(url).hostname 
        })

        const browser = await chromium.puppeteer.launch({
            ignoreDefaultArgs: ['--disable-extensions'],
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: localChrome || await chromium.executablePath,
            headless: chromium.headless,
        });
        
        // Open page base
        const page = await browser.newPage();
        await page.setViewport({ width: 1536, height: 768 }); // relation 1/2
        await page.setContent( html ) ;
      
        const card = await page.$('body');
        const screenshot = await card.screenshot({ encoding: 'base64' });
        await browser.close();

        return {
            statusCode: 200,
            headers: { 
            	'Content-type': 'image/jpeg', 
            	'Cache-Control': 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000' 
            },
            body: screenshot,   
            isBase64Encoded: true            
        }     

    // } catch (e) {

    //     return {
    //         headers: { 'Content-Type':'application/json'},            
    //         statusCode: 500,
    //         body: JSON.stringify({ message: 'Error' }),   
    //     }     

    // }
}
