const superHelt1 = {
  superkraft: "flyve",
  flyvehastighed: "200%",
  dragtfarve: "rød & grøn",
  hader: "skurke",
  superheltevenner: ["SuperKurt", "SuperHenry", "Superdog", "SuperMax"],
  billede: "super.png",
};

const superHelt2 = {
  superkraft: "løbe hurtigt",
  løbehastighed: "200%",
  dragtfarve: "blå & rød",
  hader: "skurke",
  superheltevenner: ["SuperKurt", "SuperHenry", "Superdog", "SuperMax"],
  billede: "super2.jpg",
};

const superSkurk = {
  superkraft: "Usynlighed",
  varighedafusynlighed: "20 min",
  dragtfarve: "sort & lilla",
  hader: "helte",
  superskurkevenner: ["Skurkekurt", "Skurkegurk", "Baddog", "BadMax"],
  billede: "skurk.png",
};

const card1 = document.querySelector("#superkort1");
card1.querySelector("h1").textContent = superHelt1.superkraft;
card1.querySelector("h2").textContent = superHelt1.flyvehastighed;
card1.querySelector("h3").textContent = superHelt1.dragtfarve;
card1.querySelector("p").textContent = superHelt1.hader;
card1.querySelector("div").textContent = superHelt1.superheltevenner;
card1.querySelector("img").src = superHelt1.billede;

const card2 = document.querySelector("#superkort2");
card2.querySelector("h1").textContent = superHelt2.superkraft;
card2.querySelector("h2").textContent = superHelt2.løbehastighed;
card2.querySelector("h3").textContent = superHelt2.dragtfarve;
card2.querySelector("p").textContent = superHelt2.hader;
card2.querySelector("div").textContent = superHelt2.superheltevenner;
card2.querySelector("img").src = superHelt2.billede;

const card3 = document.querySelector("#superskurk");
card3.querySelector("h1").textContent = superSkurk.superkraft;
card3.querySelector("h2").textContent = superSkurk.varighedafusynlighed;
card3.querySelector("h3").textContent = superSkurk.dragtfarve;
card3.querySelector("p").textContent = superSkurk.hader;
card3.querySelector("div").textContent = superSkurk.superskurkevenner;
card3.querySelector("img").src = superSkurk.billede;
