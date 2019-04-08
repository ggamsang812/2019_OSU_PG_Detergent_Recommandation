//json file-----------------------------------
var xhttp = new XMLHttpRequest();
var response;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(xhttp.responseText);

      //console.log(response.choices);
    }
  };

xhttp.open('GET', 'output.json', true);
xhttp.send();

//-------------------------------------------------

var cont = document.getElementById('container');
var result;
var prefstoredValue = localStorage.getItem('prefselection');
var cstoredValue = localStorage.getItem('choices');
var txt;

function printpref() {
  result = document.createElement('DIV');
  result.setAttribute('id', 'result');
  cont.appendChild(result);

  if (prefstoredValue == null) {
    txt = response.product[4].text;
  }else {
    var i = prefstoredValue[1];
    txt = response.product[i].text;
  }

  result.innerHTML = txt;
}

var array = [];
function printtemp() {
  result = document.createElement('DIV');
  result.setAttribute('id', 'result');
  cont.appendChild(result);
  console.log('print temp');

  var d = decidetemp();
  txt = response.temp[d].text;
  result.innerHTML = txt;
}

function decidetemp() {
  var decision;
  putarray();

  if (array.includes('5')) {
    decision = 1;
  } else {
    decision = 2;
  }

  return decision;
}

function printcycle() {
  result = document.createElement('DIV');
  result.setAttribute('id', 'result');
  cont.appendChild(result);
  console.log('print cycle');

  var d = decidecycle();
  txt = response.cycle[d].text;
  result.innerHTML = txt;
}

function decidecycle() {
  var decision;
  putarray();

  if (array.includes('7')) {
    decision = 3;
  } else {
    decision = 0;
  }

  return decision;
}

function putarray() {
  var x = 0;
  var l = cstoredValue.length;

  for (var i = 1; i < l; i = i + 2) {
    array.push(cstoredValue[i]);
  }

  console.log(array[3]);
  console.log(cstoredValue);
}

function reset() {
  localStorage.clear();
}
