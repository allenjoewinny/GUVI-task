class sotrage {
  constructor() {
    this.number_per_page;
    this.number_of_page;
    this.previous_number_of_page;
  }

  number(num) {
    this.number_per_page = num;
  }

  page(p) {
    this.previous_number_of_page = this.number_of_page;
    this.number_of_page = p;
  }
}

var data_temp = {};

fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((response) => response.json())
  .then(function (d) {
    data_temp = JSON.stringify(d);
    localStorage.setItem("temp", data_temp);
  });

var data_temp_2 = localStorage.getItem("temp");
var data = JSON.parse(data_temp_2);

var store = new sotrage();
function option() {
  let s = document.getElementById("Set_id");
  let s_value = s.options[s.selectedIndex].value;

  store.number(s_value);
  let n_o_p = Math.ceil(data.length / s_value);
  store.page(n_o_p);
  create();
}

function create() {
  display_value(1);
  display_button();
}

function display_value(start) {
  let s = (start - 1) * parseInt(store.number_per_page);
  let length = s + parseInt(store.number_per_page);
  let add = document.getElementById("main_div");
  add.innerHTML = "";
  let br = document.createElement("br");
  for (let i = s; i < length; i++) {
    add.innerHTML += `Name: ${data[i].name} , Email: ${data[i].email}`;
    add.append(br);
  }
}

function display_button() {
  clear_but();
  let n_o_p_but = parseInt(store.number_of_page);
  let add_but = document.getElementById("but_div");
  for (var j = 1; j <= n_o_p_but; j++) {
    let but_temp = document.createElement("input");
    but_temp.setAttribute("type", "button");
    but_temp.setAttribute("id", j);
    but_temp.setAttribute("onclick", "display_value(id)");
    but_temp.setAttribute("value", j);
    but_temp.setAttribute("class", "but");
    add_but.append(but_temp);
  }
}

function clear_but() {
  let remove_length = parseInt(store.previous_number_of_page);
  for (let g = 1; g <= remove_length; g++) {
    let remove_item = document.getElementById(g);
    remove_item.parentNode.removeChild(remove_item);
  }
}
