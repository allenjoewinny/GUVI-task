function create_element(type, c, id) {
  var element = document.createElement(type);

  element.setAttribute("class", c);
  element.setAttribute("id", id);

  return element;
}



function create_table(text, range) {
  // Create table object.
  var a = document.createElement("TABLE");
  a.setAttribute("id", "MyTable");
  document.body.appendChild(a);

  

  var b = document.createElement("TR");
  b.setAttribute("id", "MyTr");
  document.getElementById("MyTable").appendChild(b);

  var c = document.createElement("TD");
  var d = document.createTextNode(text);
  c.appendChild(d);

  var e = document.createElement("TD");
  var f = document.createElement("input");
  f.setAttribute("type", "range");
  f.setAttribute("value", range);
  e.appendChild(f);

  document.getElementById("MyTr").append(c, e);
  return b;
}

function create_row(text, range)
{
  var b = document.createElement("TR");
  document.getElementById("MyTable").appendChild(b);

  var c = document.createElement("TD");
  var d = document.createTextNode(text);
  c.appendChild(d);

  var e = document.createElement("TD");
  var f = document.createElement("input");
  f.setAttribute("type", "range");
  f.setAttribute("value", range);
  e.appendChild(f);

  b.append(c, e);
  return b;
}

function create_li(ui,text) {
  var element = document.createElement("li");
  element.innerHTML = text;
  ui.appendChild(element);
  return element;
}
