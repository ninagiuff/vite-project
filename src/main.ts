import './style.css'

const titolo = document.getElementById("titolo") as HTMLHeadingElement;
const bottone = document.getElementById("btn") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;

let contatore = 0;

bottone.addEventListener("click", () => {
  contatore++;
  titolo.textContent = `Hai cliccato ${contatore} volte`;
  console.log("Click numero:", contatore);
});

reset.addEventListener("click", () => {
  contatore = 0;
  titolo.textContent = "Ciao sono un contatore";
  console.log("Contatore resettato");
});