'use strict';
window.$   = require('jquery');
var pal = require('./palindrome');

$.each($('li'), function(index, li)  {
  console.log(pal(li.innerText));
});

var greetings = require('./sayhi');
greetings();

var backwards = require('./reverse');

$.each($('h1'), function(index, h1) {
  console.log(backwards(h1.innerText));
});
