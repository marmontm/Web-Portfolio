function addPerson(nameOfThePerson)
{
  var list = document.getElementById("list");
  list.innerHTML += "<br>" + nameOfThePerson;
}

function changeToGreen() {
  document.body.className = "greenBG"
  document.getElementById("topBar").className = "greenBG";

  // Or you could use classList
  //document.getElementById("topBar").classList.add("Some class...");

}

function changeToYellow() {
  document.body.className = "yellowBG"
}
