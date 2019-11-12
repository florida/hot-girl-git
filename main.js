const word = document.getElementById("wordgen");

const words = [
  "Asphyxiation",
  "Affiliation",
  "Retaliation",
  "Decentralisation",
  "Fertilization",
  "Accommodation",
  "Dehydration",
  "Scallion"
];

const randomWord = frm => {
  var rnd = Math.ceil(Math.random() * frm.length - 1);
  return words[rnd];
};

function generateWords() {
  word.innerText = randomWord(words);
}
