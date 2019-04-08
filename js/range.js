
//----------------json file-----------------
var xhttp = new XMLHttpRequest();
var response;

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    response = JSON.parse(xhttp.responseText);

    //console.log(response.choices[6]);
  }
};

xhttp.open('GET', 'choices.json', true);
xhttp.send();

//======================================---

var storedValue2 = localStorage.getItem('warningselect');
var storedValue = localStorage.getItem('choices');
console.log(storedValue.length);
console.log(storedValue);

var basket = document.getElementById('svgback');

function display() {

  for (var i = 1, len = storedValue.length; i < len; i = i + 2) {
    var container;
    container = document.getElementById('items');

    var single = document.createElement('DIV');
    single.setAttribute('class', 'single');

    var linode = document.createElement('LI');
    var textnode = document.createTextNode(response.choices[storedValue[i]].text);

    var boxnode = document.createElement('DIV');
    boxnode.className = 'box';

    var centernode = document.createElement('CENTER');
    boxnode.appendChild(centernode);

    var valuenode = document.createElement('DIV');
    var s1 = 'value' + i;
    valuenode.setAttribute('id', s1);
    centernode.appendChild(valuenode);

    var inputnode = document.createElement('INPUT');
    inputnode.setAttribute('type', 'range');

    //make the slider here
    var s2 = 'slider' + i;
    inputnode.setAttribute('id', s2);
    inputnode.setAttribute('class', 'slider');
    inputnode.setAttribute('min', 0);
    inputnode.setAttribute('max', 100);
    inputnode.setAttribute('value', 10);

    linode.appendChild(textnode);
    single.appendChild(linode);
    single.appendChild(boxnode);
    single.appendChild(inputnode);

    container.appendChild(single);

    setvalue(i);
    connectimg(i);
  }
}

var a = 0;
var b = 0;
var q = 0;
function setvalue(index) {
  var slider = document.getElementById('slider' + index);
  var val = document.getElementById('value' + index);
  val.innerHTML = slider.value;
  slider.oninput = function () {
    val.innerHTML = this.value;

    if (index >= 2) {
      a = val.innerHTML;
    } else {
      b = val.innerHTML;
    }

    q = +a + +b;
  };
}

function connectimg(index) {
  // Set handler on input slider
  var control = document.getElementById('slider' + index);
  control.addEventListener('input', setMoonPhase);
  setMoonPhase();

  function setMoonPhase(evt) {
    var val = control.value / 100;
    var phaseEllipse = document.getElementById('svgback');
    phaseEllipse.value = val;
    e = q / 100;
    phaseEllipse.style.fill = (e > 0.99) ? 'red' : 'white';

    set();
  }

  function set() {
    console.log(q);
    document.getElementById('stop1').setAttribute('offset', q / 100);
  }
}
