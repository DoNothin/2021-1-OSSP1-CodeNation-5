const API_KEY = 'AIzaSyA2lbpRU4mEOazqHuRyHNZfIv3fFBvrPR8';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'auth_redirect') {
        console.log(request.url);
        chrome.windows.create({'url' : request.url, 'type': 'popup',
            width: 800, height: 650}, function(window){
                window.close();
        });
    }
});
