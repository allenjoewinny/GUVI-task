let display_score = localStorage.getItem("Score");

let store_score = {};

let main_div = document.createElement("div");
main_div.setAttribute("class", "container m_d ");

document.body.append(main_div);

let row_1 = document.createElement("div");
row_1.setAttribute("class", "row justify-content-center row_1");

main_div.append(row_1);

let Score_display = document.createElement("div");
Score_display.innerHTML = display_score;

row_1.append(Score_display);

let row_2 = document.createElement("div");
row_2.setAttribute("class", "row justify-content-center row_2");

let input_text = document.createElement("input");
input_text.setAttribute("type", "text");
input_text.setAttribute("placeholder", "username");
input_text.setAttribute("id", "username");
input_text.setAttribute("onkeyup", "enable()");

row_2.append(input_text);

main_div.append(row_2);

let row_3 = document.createElement("div");
row_3.setAttribute("class", "row justify-content-center row_2");

let save = document.createElement("button");
save.setAttribute("class", "btn btn-outline-primary row_2");
save.setAttribute("id", "saveSoreBtn");
save.disabled = true;
save.innerHTML = "Save";
save.setAttribute("onclick", "save_score()");

let brk_1 = document.createElement("br");

row_3.append(save);

main_div.append(brk_1, row_3);

let row_4 = document.createElement("div");
row_4.setAttribute("class", "row justify-content-center row_2");

let play_again = document.createElement("button");
play_again.setAttribute("class", "btn btn-outline-success row_2");
play_again.setAttribute("id", "saveSoreBtn");
play_again.innerHTML = "Play Again";
play_again.setAttribute("onclick", "game_page()");

let brk_2 = document.createElement("br");
main_div.append(brk_2, row_4);

row_4.append(play_again);

let row_5 = document.createElement("div");
row_5.setAttribute("class", "row justify-content-center row_2");

let home = document.createElement("button");
home.setAttribute("class", "btn btn-outline-danger row_2");
home.setAttribute("id", "gohome");
home.innerHTML = "Got to Home";
home.setAttribute("onclick", "home_page()");

let brk_3 = document.createElement("br");
main_div.append(brk_3, row_5);

row_5.append(home);

function enable() {
  let text = document.getElementById("username").value;
  let but = document.getElementById("saveSoreBtn");
  if (text != "") {
    but.disabled = false;
  } else {
    but.disabled = true;
  }
}



function save_score() {
  let text = document.getElementById("username").value;
    let temp = sessionStorage.getItem('Score_store');
    let temp_data = JSON.parse(temp);
    temp_data[text] = display_score;
    console.log(temp_data)
    sessionStorage.setItem('Score_store',JSON.stringify(temp_data));
}
function game_page() {
  window.location.href = "game.html";
}

function home_page() {
  window.location.href = "index.html";
}



