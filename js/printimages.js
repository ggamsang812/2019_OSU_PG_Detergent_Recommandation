
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

var storedValue = localStorage.getItem('choices');
var x = [];
var y = [];

//console.log(storedValue.length);
//console.log(storedValue);

function display() {
  for (var i = 1, len = storedValue.length; i < len; i = i + 2) {
    var container;
    var table;
    if (i <= storedValue.length / 2) {
      container = document.getElementById('table_container');
      x.push(storedValue[i]);
    } else {
      container = document.getElementById('table_container2');
      y.push(storedValue[i]);
    }

    var photo = document.createElement('div');
    img = new Image();

    var j = storedValue[i];
    img.src = response.choices[j].address;
    img.width = 220;
    photo.appendChild(img);

    container.appendChild(photo);
  }
}

var container1 = document.getElementById('table_container');
var container2 = document.getElementById('table_container2');

function clicked(userchoice) {

  if (userchoice.style.background != 'rgb(246, 174, 45)') {
    userchoice.style.background = 'rgb(246, 174, 45)';

  } else {
    userchoice.style.background = '#006FB6';
  }
}

var c;

function main() {
  container1.addEventListener('click', function () {
    clicked(container1);
    container2.style.background = '#006FB6';
    check(container1, x);
  });

  container2.addEventListener('click', function () {
    clicked(container2);
    container1.style.background = '#006FB6';
    check(container2, y);
  });
}

main();

function check(container, value) {
  if (container.style.background == 'rgb(246, 174, 45)') {
    c = JSON.stringify(value);
    localStorage.setItem('warningselect', c);
  }

  var prefstoredValue = localStorage.getItem('warningselect');
  console.log(prefstoredValue);
}

function ignore() {
  var t = [];
  for (var i = 1, len = storedValue.length; i < len; i = i + 2) {
    t.push(storedValue[i]);
  }

  localStorage.setItem('warningselect', t);

  window.location.href = '/preference.html';
}
