// Baldur Már Pétursson
// 2.1.2018

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        console.log(details.url);
        return {redirectUrl: chrome.extension.getURL("blockview.html")}},
    {urls: ["*://www.mbl.is/smartland/*", "*://*.menn.is/*", "*://*.bleikt.is/*", "*://*.visir.is/f/lifid/*" ]},
    ["blocking"])