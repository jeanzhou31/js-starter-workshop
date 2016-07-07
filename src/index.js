// basic counter

// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let num = 0;
setInterval(function () {
  ++num;
  $('#main').html('You\'ve been on this page for ' + num + ' seconds');
}, 1000);
