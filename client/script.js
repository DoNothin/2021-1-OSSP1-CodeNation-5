var url;
var authed;

fetch("http://localhost:5000/api")
.then(function(res) {
    return res.json();
})
.then(function(res) { 
    url = res.url;
    authed = res.authed;
});

//아이디 선택자
const search = document.querySelector('#search'),
    searchButton = document.querySelector('#searchButton');

//검색 버튼 클릭하면 실행되는 함수
search.click(function () {
    searchButton.submit();
});

const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener(
    'click',
    (ev) => {
        const elm = ev.target;
        if (triggers.includes(elm)) {
            const selector = elm.getAttribute('data-target');
            collapse(selector, 'toggle');
        }
    },
    false
);

const fnmap = {
    toggle: 'toggle',
    show: 'add',
    hide: 'remove',
};
const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach((target) => {
        target.classList[fnmap[cmd]]('show');
    });
};

document.querySelector('#sign_in').addEventListener('click', function () {
    if(authed == false)
    {
        chrome.extension.sendMessage({message: "auth_redirect", url: url}, function(response) {
        
        });
    }
});
