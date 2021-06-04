const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (keyword) => {
    try {
        return await axios.get('https://www.inflearn.com/courses?s=' + encodeURI(keyword));
    } catch (e) {
        console.log(e);
    }
};

//갖고 온 html을 파싱
const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data); //jquery 사용
    const $courseList = $('.course_card_item');

    let lists = [];
    $courseList.each((idx, node) => {
        lists.push({
            search: $(node).find('.instructor').text(),
        });
    });
    console.log(lists);
};

parsing('자바스크립트');
