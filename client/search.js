const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (keyword) => {
    try {
        return await axios.get('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + encodeURI(keyword));
    } catch (e) {
        console.log(e);
    }
};

//갖고 온 html을 파싱
const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data); //jquery 사용
    const $courseList = $('.keyword');

    let lists = [];
    $courseList.each((idx, node) => {
        lists.push($(node).text());
    });
    console.log(lists);
};

parsing('자바스크립트');
