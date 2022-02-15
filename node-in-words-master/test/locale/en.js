/*global describe: false, it: false*/
'use strict';

var en = require('../../locale/en');
var t = require('../util').inWordsTest.bind(null, en);

describe('en', function () {
  t(0, 'zero');
  t(1, 'one');
  t(10, 'ten');
  t(11, 'eleven');
  t(12, 'twelve');
  t(13, 'thirteen');
  t(15, 'fifteen');
  t(16, 'sixteen');
  t(17, 'seventeen');
  t(18, 'eighteen');
  t(19, 'nineteen');
  t(20, 'twenty');
  t(21, 'twenty-one');
  t(25, 'twenty-five');
  t(30, 'thirty');
  t(32, 'thirty-two');
  t(40, 'forty');
  t(50, 'fifty');
  t(58, 'fifty-eight');
  t(60, 'sixty');
  t(64, 'sixty-four');
  t(70, 'seventy');
  t(79, 'seventy-nine');
  t(80, 'eighty');
  t(83, 'eighty-three');
  t(90, 'ninety');
  t(99, 'ninety-nine');
  t(100, 'one hundred');
  t(600, 'six hundred');
  t(700, 'seven hundred');
  t(10000, 'ten thousand');
  t(427534, 'four hundred twenty-seven thousand five hundred thirty-four');
  t(999999, 'nine hundred ninety-nine thousand nine hundred ninety-nine');
  t(3000000, 'three million');
  t(250000000, 'two hundred fifty million');
});
