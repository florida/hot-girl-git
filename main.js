const word = document.getElementById("wordgen");

const words = [
  "Asphyxiation",
  "Affiliation",
  "Retaliation",
  "Decentralisation",
  "Fertilization",
  "Accommodation",
  "Dehydration",
  "Scallion",
  "accordion",
  "administration",
  "admission",
  "abomination",
  "addition",
  "carbonation",
  "capitalization",
  "circulation",
  "circumnavigation",
  "communication",
  "colorization",
  "adaptation",
  "improvision",
  "mutation",
  "illusion",
  "illustration",
  "idolization",
  "industrialization",
  "inhalation",
  "inequation",
  "inclusion",
  "incubation",
  "innovation",
  "individualization",
  "inception",
  "illumination",
  "appreciation",
  "perfection",
  "gemmification",
  "inflation",
  "hallucination",
  "formulation",
  "flexion",
  "solution",
  "satisfaction",
  "station",
  "septillion",
  "salutation",
  "salvation",
  "sedimentation",
  "serialization",
  "suction",
  "suggestion",
  "battallion",
  "rapscallion",
  "tatterdemalion",
  "distraction",
  "banyan",
  "diffraction",
  "redaction",
  "benefaction",
  "interaction",
  "liquefaction",
  "protraction",
  "refraction",
  "canyon",
  "subtraction",
  "companion",
  "extraction",
  "italian",
  "grand canyon",
  "direct action",
  "chemical reaction",
  "allergic reaction",
  "overreaction",
  "microtransaction"
];

const randomWord = frm => {
  var rnd = Math.ceil(Math.random() * frm.length - 1);
  return words[rnd];
};

function generateWords() {
  const textGenerated = randomWord(words);
  word.innerText = textGenerated;

  window.gtag("send", {
    hitType: "event",
    eventCategory: "click",
    eventAction: "generate",
    eventLabel: textGenerated
  });
}
