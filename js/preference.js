/*jshint esversion: 6 */

var sensativediv = document.getElementById('sensative');
var ecodiv = document.getElementById('eco');
var scentdiv = document.getElementById('scent');
var extradiv = document.getElementById('extra');
var nodiv = document.getElementById('nopref');

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
  localStorage.setItem('prefselection', x);
}

function main() {
  sensativediv.addEventListener('click', function () {
    picked(sensativediv, 0);
  });

  ecodiv.addEventListener('click', function () {
    picked(ecodiv, 1);
  });

  scentdiv.addEventListener('click', function () {
    picked(scentdiv, 2);
  });

  extradiv.addEventListener('click', function () {
    picked(extradiv, 3);
  });

  nodiv.addEventListener('click', function () {
    picked(nodiv, 4);
  });

}

main();
