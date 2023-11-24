let btn = document.querySelector("#new-quotes");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [
  {
    quote: `"The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."`,
    person: `Bill Gates`,
  },
  {
    quote: `"Technology is anything that wasn’t around when you were born."`,
    person: `Alan Kay`,
  },
  {
    quote: `"The science of today is the technology of tomorrow."`,
    person: `Edward Teller`,
  },
  {
    quote: `"The most important and urgent problems of the technology of today are no longer the satisfactions of the primary needs or of archetypal wishes, but the reparation of the evils and damages by the technology of yesterday."`,
    person: "Dennis Gabor",
  },
  {
    quote: `"The great myth of our times is that technology is communication."`,
    person: `Libby Larsen`,
  },
  {
    quote: `"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important."`,
    person: `Bill Gates`,
  },
  {
    quote: `"The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."`,
    person: `Bill Gates`,
  },
  {
    quote: `"The Internet is becoming the town square for the global village of tomorrow."`,
    person: `Bill Gates`,
  },
  {
    quote: `"It's not that we use technology, we live technology."`,
    person: `Godfrey Reggio`,
  },
  {
    quote: `"The real danger is not that computers will begin to think like men, but that men will begin to think like computers."`,
    person: `Sydney J. Harris`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

let headerEl = document.querySelector(".header-menu");
let btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
