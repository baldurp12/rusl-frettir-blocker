// Baldur Már Pétursson
// 2.1.2018


//

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {redirectUrl: chrome.extension.getURL("blockview.html")}},
    {urls: ["*://www.mbl.is/smartland/*", "*://*.menn.is/*", "*://*.bleikt.is/*" ]},
    ["blocking"]);

