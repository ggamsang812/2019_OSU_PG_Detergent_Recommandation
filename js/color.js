/*jshint esversion: 6 */

var whitesdiv = document.getElementById('whites');
var colorsdiv = document.getElementById('colors');
var mixeddiv = document.getElementById('mixed');

y = [];

function picked(userchoice, index) {

  if (userchoice.style.background != 'rgb(246, 174, 45)') {
    userchoice.style.background = 'rgb(246, 174, 45)';

    //push the index of the images clicked
    y.push(index);

  } else {
    userchoice.style.background = '#006FB6';

    //pop the Index
    for (var i = 0; i < y.length; i++) {
      if (y[i] === index) {
        y.splice(i, 1);
      }
    }
  }

  var x = JSON.stringify(y);
  localStorage.setItem('colorselection', x);
  var cstoredValue = localStorage.getItem('colorselection');
  console.log(cstoredValue);
}

function check() {
  console.log('asd');
}

function main() {
  whitesdiv.addEventListener('click', function () {
    colorsdiv.style.background = '#006FB6';
    mixeddiv.style.background = '#006FB6';
    picked(whitesdiv, 0);
  });

  colorsdiv.addEventListener('click', function () {
    whitesdiv.style.background = '#006FB6';
    mixeddiv.style.background = '#006FB6';
    picked(colorsdiv, 1);
  });

  mixeddiv.addEventListener('click', function () {
    colorsdiv.style.background = '#006FB6';
    whitesdiv.style.background = '#006FB6';
    picked(mixeddiv, 2);
  });

  check();
}

main();
