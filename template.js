const superHelt = [
  {
    superkraft: "flyve",
    flyvehastighed: "200%",
    dragtfarve: "rød & grøn",
    hader: "skurke",
    superheltevenner: ["SuperKurt", "SuperHenry", "Superdog", "SuperMax"],
    billede: "super.png",
  },
  {
    superkraft: "løbe hurtigt",
    løbehastighed: "200%",
    dragtfarve: "blå & rød",
    hader: "skurke",
    superheltevenner: ["SuperKurt", "SuperHenry", "Superdog", "SuperMax"],
    billede: "super2.jpg",
  },
];

const skabelon = document.querySelector("#minSkabelon").content;

superHelt.forEach(visHelt);

function visHelt(helt) {
  console.log(helt);
  const klon = skabelon.cloneNode(true);
  klon.querySelector("h1").textContent = helt.superkraft;
  klon.querySelector("h2").textContent = helt.flyvehastighed;
  klon.querySelector("h3").textContent = helt.dragtfarve;
  klon.querySelector("p").textContent = helt.hader;
  klon.querySelector("div").textContent = helt.superheltevenner;
  klon.querySelector("img").src = helt.billede;

  document.querySelector("main").appendChild(klon);
}
