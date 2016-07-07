

// change require to es6 import style
import $ from 'jquery';
import './style.scss';

var num = 0;
setInterval(function () {
  ++num;
  $('#main').html('You\'ve been on this page for ' + num + ' seconds');
}, 1000);
