function create_button(name, value, click, color) {
  var element = document.createElement("input");
  element.setAttribute("type", "button");
  element.setAttribute("name", name);
  element.setAttribute("value", value);
  element.setAttribute("onclick", click);
  element.setAttribute("class", color);
  return element;
}
var current = "";
var previous = "";
function click_add(to_add) {
  let text = document.getElementById("current_text");
  text.innerText += to_add;
}

function equal() {
  let text = document.getElementById("current_text");
  text.innerText = eval(text.innerText);
}

function Back() {
  let text = document.getElementById("current_text");
  text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
}

function clr() {
  let text = document.getElementById("current_text");
  text.innerText = "";
}

let text = document.getElementById("current_text");

document.addEventListener("keypress", key);

function key(e) {
  if (check(e) === 1) {
    console.log(e.key);
    let text = document.getElementById("current_text");
    text.innerText += e.key;
  }
}

function check(k) {
  let z = k.keyCode;
  if (
    (z >= 47 && z < 57))
    {
          return 1;
    } 
  else if(
    (z == 40) ||
    (z == 41) ||
    (z == 42) ||
    (z == 43) ||
    (z == 45) ||
    (z == 47) ||
    (z == 37)
  ) {
    return 1;
    }
   else if ((z == 61)) {
    equal();
  } else {
    return 0;
  }
}
