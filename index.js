'use strict';
const got = require('got');
const cheerio = require('cheerio');

module.exports = function () {
  return new Promise(resolve => {
    got('http://www.irasutoya.com/').then(res => {
      const $ = cheerio.load(res.body);
      resolve($('#PopularPosts1 li .item-title a').map((i, el) => $(el).attr('href')).get());
    });
  });
};
