/*jshint esversion: 6 */

var underdiv = document.getElementById('under');
var athleticdiv = document.getElementById('athletic');
var syntheticsdiv = document.getElementById('synthetics');
var casualdiv = document.getElementById('casual');
var brasdiv = document.getElementById('bras');
var towelsdiv = document.getElementById('towels');
var knitsdiv = document.getElementById('knits');
var blanketsdiv = document.getElementById('blankets');

console.log('insdie app.js');
var count = 0;
var y = [];

//json file
var xhttp = new XMLHttpRequest();
var response;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(xhttp.responseText);

      //console.log(response.choices);
    }
  };

xhttp.open('GET', 'choices.json', true);
xhttp.send();

function check() {

  for (i = 0; i < response.choices.length; i++) {
    if (response.choices[i].value == true) {
      count++;
    }
  }

  if (count >= 4) {
    window.location.href = '/warningpage.html';
  }else {
    window.location.href = '/preference.html';
  }
}

function picked(userchoice, index) {

  console.log(response.choices[index].address);
  if (userchoice.style.background != 'rgb(246, 174, 45)') {
    userchoice.style.background = 'rgb(246, 174, 45)';
    response.choices[index].value = true;
    console.log(response.choices[index].value);

    //push the index of the images clicked
    y.push(index);

  } else {
    response.choices[index].value = false;
    userchoice.style.background = '#006FB6';
    console.log(response.choices[index].value);

    //pop the Index
    for (var i = 0; i < y.length; i++) {
      if (y[i] === index) {
        y.splice(i, 1);
      }
    }
  }

  var x = JSON.stringify(y);
  localStorage.setItem('choices', x);
}

function main() {
  if (underdiv != null) {

    underdiv.addEventListener('click', function () {
      picked(underdiv, 0);
    });

    athleticdiv.addEventListener('click', function () {
      picked(athleticdiv, 1);
    });

    syntheticsdiv.addEventListener('click', function () {
      picked(syntheticsdiv, 2);
    });

    casualdiv.addEventListener('click', function () {
      picked(casualdiv, 3);
    });

    brasdiv.addEventListener('click', function () {
      picked(brasdiv, 4);
    });

    towelsdiv.addEventListener('click', function () {
      picked(towelsdiv, 5);
    });

    knitsdiv.addEventListener('click', function () {
      picked(knitsdiv, 6);
    });

    blanketsdiv.addEventListener('click', function () {
      picked(blanketsdiv, 7);
    });
  }
}

main();
