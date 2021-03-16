$(document).ready(function () {

  var studente =
  {
  nome : "Tommaso",
  cognome : "Scocciolini",
  eta : 25,
  }

  for (var key in studente) {
    if (studente.hasOwnProperty(key)) {
      document.getElementById("studente").innerHTML += studente[key] + " ";
    }
  }

var studenti =
  [
    {
    nome : "Pino",
    cognome : "Pineta",
    eta : 24,
    },
    {
    nome : "Mario",
    cognome : "Rossi",
    eta : 36,
    },
    {
    "nome" : "Tommaso",
    "cognome" : "Scocciolini",
    "eta" : 25,
    },
  ]

for (var key in studenti) {
  // console.log(studenti[key].nome);
  // console.log(studenti[key].cognome);
  document.getElementById("studenti").innerHTML += "<li>" + studenti[key].nome + " " + studenti[key].cognome + "</li>";
}

$("#add").click(function () {
  var mynome = $('#nome').val();
  var mycognome = $('#cognome').val();
  var myeta = $('#eta').val();
  var studente = {
    nome : mynome,
    cognome : mycognome,
    eta : myeta,
  }
  studenti.push(studente);
  console.log(studenti);
  $("#studenti").text("");
  for (var key in studenti) {
    document.getElementById("studenti").innerHTML += "<li>" + studenti[key].nome + " " + studenti[key].cognome + "</li>";
  }
})

})
