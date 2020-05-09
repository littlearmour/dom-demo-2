const div = dom.find("#test>.red");
console.log(div);

dom.style(div, "color", "red");

const divList = dom.find(".red");
console.log(divList);

dom.each(divList, (n) => console.log(n));
