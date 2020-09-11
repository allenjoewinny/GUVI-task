fetch("https://restcountries.eu/rest/v2/all")
  .then(function (res) {
    return res.json();
  })
  .then(function (d) {
    let len = d.length;
    var main_div = document.createElement("div");
    main_div.setAttribute("class", "container text-center ");
    document.body.append(main_div);

    var row_div = document.createElement("div");
    row_div.setAttribute("class", "row ");
    main_div.append(row_div);

    for (let i = 0; i < len; i++) {
      let col_div = document.createElement("div");
      col_div.setAttribute("class", "col-lg-4  col-sm-12");

      row_div.append(col_div);

      let card_color = document.createElement("div");
      card_color.setAttribute("class", "bag");

      col_div.append(card_color);

      let card_head = document.createElement("div");
      card_head.setAttribute("class", "card-head");
      card_head.innerHTML += d[i].name;

      let flag_img = document.createElement("img");
      flag_img.setAttribute("class", "card-img-top");
      flag_img.setAttribute("src", d[i].flag);

      card_color.append(card_head, flag_img);

      let card_bod = document.createElement("div");
      card_bod.setAttribute("class", "card-body");

      card_color.append(card_bod);

      let card_capital = document.createElement("div");
      card_capital.setAttribute("class", "card-text");
      card_capital.innerHTML = `Capital: ${d[i].capital}`;

      let card_region = document.createElement("div");
      card_region.setAttribute("class", "card-text");
      card_region.innerHTML = `Region: ${d[i].region}`;

      let card_code = document.createElement("div");
      card_code.setAttribute("class", "card-text");
      card_code.innerHTML = `Country Code: ${d[i].alpha3Code}`;

      let card_but = document.createElement("input");
      card_but.setAttribute("type", "button");
      card_but.setAttribute("id", i);
      card_but.setAttribute("value", "Click to Show Weather");
       
      card_but.setAttribute("onclick", `fetch_weather(id, ${(300+i)})`);
      card_but.setAttribute("class", "btn btn-primary");

      let card_weather = document.createElement("div");
      card_weather.setAttribute("class", "card-text");
      card_weather.setAttribute("id", (300+i) );

      card_bod.append(
        card_capital,
        card_region,
        card_code,
        card_but,
        card_weather
      );
    }
  });

function fetch_weather(capital_id, id) {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let capital = data[parseInt(capital_id)].capital;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=a6a3ba47be927cecaa044a6528b7bd99`;
      fetch(url)
        .then(function (res) {
          return res.json();
        })
        .then(function (d) {
          let inner_data = d.weather[0].main;
          let k = document.getElementById(id);
          k.innerHTML = inner_data;
        });
    });
}
