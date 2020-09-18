class storage {
  constructor(current) {
    this.current = current;
    this.score_display = 0;
    this.currect_value;
    this.current_done;
  }

  next_page() {
    this.current = this.current + 1;
  }

  previous_page() {
    this.current = this.current - 1;
  }

  score_change() {
    this.score_display += 10;
  }
}
let store = new storage(1);

var brake = document.createElement("br");

function create_but(opt, id_t) {
  let but_row = document.createElement("div");
  but_row.setAttribute("class", "row");
  main_div.append(but_row);

  let div_opt = document.createElement("div");
  div_opt.setAttribute("class", "col-sm-1");
  div_opt.innerHTML = opt;

  let large_button = document.createElement("button");
  large_button.setAttribute("class", "btn default  btn-lg btn-block col-sm-11");
  large_button.setAttribute("id", id_t);
  large_button.setAttribute("onclick", "calc_score(id)");

  var brake = document.createElement("br");
  but_row.append(div_opt, large_button);
  main_div.append(brake);

  return large_button;
}

async function fetchAsync() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  );

  let data = await response.json();

  game_cunstruct(data);
}

let main_div = document.createElement("div");
main_div.setAttribute("class", "container m_d");
document.body.append(main_div);

let row_1 = document.createElement("div");
row_1.setAttribute("class", "row");

let Question_index = document.createElement("div");
Question_index.setAttribute("class", "col-sm-8");

let Score = document.createElement("div");
Score.setAttribute("class", "col-sm-4 text-center");

row_1.append(Question_index, Score);

main_div.append(row_1);
main_div.append(brake);

let row_2 = document.createElement("div");
row_2.setAttribute("class", "row");

let prog = document.createElement("div");
prog.setAttribute("class", "progress col-sm-8");
prog.style.height = "20px";

let prog_bar = document.createElement("div");
prog_bar.setAttribute("class", "progress-bar ");

prog.append(prog_bar);

let score_value = document.createElement("div");
score_value.setAttribute("class", "col-sm-4 text-center");

row_2.append(prog, score_value);

main_div.append(row_2);
main_div.append(brake);

question_div = document.createElement("div");
main_div.append(question_div);
main_div.append(brake);

let opt_1 = create_but("A", "1");
let opt_2 = create_but("B", "2");
let opt_3 = create_but("C", "3");
let opt_4 = create_but("D", "4");

let row_3 = document.createElement("div");
row_3.setAttribute("class", "row justify-content-around");

let previous_but = document.createElement("button");
previous_but.setAttribute("class", "btn btn-primary");
previous_but.setAttribute("onclick", "previous_load()");
previous_but.innerHTML = "Previous";

let next_but = document.createElement("button");
next_but.setAttribute("class", "btn btn-primary");
next_but.setAttribute("onclick", "next_load()");
next_but.innerHTML = "Next";

row_3.append(previous_but, next_but);

main_div.append(row_3);

let row_4 = document.createElement("div");
row_4.setAttribute("class", "row justify-content-center");

let finish = document.createElement("button");
finish.setAttribute("class", "btn btn-primary");
finish.setAttribute("onclick", "finish_page()");
finish.innerHTML = "Finish";

row_4.append(finish);

main_div.append(row_4);

function game_cunstruct(qn_data) {
  store.current_done = 0;
  Question_index.innerHTML = `Question ${store.current}/10`;
  prog_bar.style.width = `${store.current * 10}%`;
  Score.innerHTML = "SCORE";
  question_div.innerHTML =
    qn_data.results[parseInt(store.current) - 1].question;
  score_value.innerHTML = store.score_display;
  let answer_display = random_answer(
    qn_data.results[parseInt(store.current) - 1]
  );
  console.log(answer_display);
  for (let j = 1; j <= answer_display.length; j++) {
    let temp_ans = document.getElementById(j);
    temp_ans.innerHTML = answer_display[j - 1];
  }
  store.currect_value =
    qn_data.results[parseInt(store.current) - 1].correct_answer;

  opt_1.style.background = "#6c757d";
  opt_2.style.background = "#6c757d";
  opt_3.style.background = "#6c757d";
  opt_4.style.background = "#6c757d";
}

function random_answer(rand) {
  let temp = [];
  temp[0] = rand.correct_answer;
  for (let i = 1; i <= 3; i++) {
    temp[i] = rand.incorrect_answers[i - 1];
  }
  console.log(temp);
  let shuffled = temp.sort(() => 0.5 - Math.random());
  console.log(shuffled);
  return shuffled;
}

function calc_score(id) {
  let check = document.getElementById(id);
  if (!store.current_done) {
    if (check.innerHTML == store.currect_value) {
      check.style.background = "#008000";
      store.score_change();
      score_value.innerHTML = store.score_display;
      store.current_done = 1;
    } else {
      check.style.background = "#ff0000";
    }
  }
}

function previous_load() {
  if (!(parseInt(store.current) == 1)) {
    store.previous_page();
    fetchAsync();
  }
}

function next_load() {
  if (!(parseInt(store.current) == 10)) {
    store.next_page();
    fetchAsync();
  }
}

function finish_page() {
  localStorage.setItem("Score", store.score_display);
  window.location.href = "end.html";
}


fetchAsync();
