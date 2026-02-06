import data from '../sample.json' assert { type: 'json' };
const Players = data
var guessArr = [];

function randomInt(pick) {
    var max = pick.length
    return pick[Math.floor(Math.random() * max)];
}


function randomPlay(obj) {
    var keys = Object.keys(obj)
    return randomInt(keys)
}

function randomNick(player) {
    var props = Players[player]
    return randomInt(props)
}


var randPlayer = randomPlay(Players)
var shownNick = randomNick(randPlayer)
console.log(randPlayer);
console.log(shownNick);
document.getElementById("output").innerHTML = shownNick

    function autocompleteMatch(input) {
      if (input === '') {
        return [];
      }
      // Adding 'i' flag for case-insensitive search
      var reg = new RegExp(input, 'i');
      return search_terms.filter(function(term) {
        // Directly return the result of the match check
        return term.match(reg);
      });
    }
    

    // Assuming 'Players' is a predefined object
    var search_terms = Object.keys(Players);
    
    // Assuming you want to expose showResults globally
    window.showResults = showResults;

    function showResults(val) {
      let res = document.getElementById("result");
      res.innerHTML = '';
      let list = '';
      let terms = autocompleteMatch(val); // Make sure you have your autocompleteMatch function and data ready
      for (let i = 0; i < terms.length; i++) {
          list += `<li onclick="selectResult('${terms[i]}')">${terms[i]}</li>`;
      }
      res.innerHTML = `<ul>${list}</ul>`;
  }
  
  window.selectResult = selectResult;
  function selectResult(value) {
      // Set the input to the value of the clicked item
      const input = document.getElementById("autocompleteInput");
      input.value = value;
      // Clear the results to hide the list
      document.getElementById('result').innerHTML = '';
      // Handle the "submission" here instead of submitting the form
      handleFormSubmission(value);
      document.value = '';
  }
  

    function handleFormSubmission(value) {
    event.preventDefault();
    var correct = ''
    if (value === randPlayer){
        var correct = value
        console.log("CORREcT", value);}
    else {
        guessArr.unshift(value)
        console.log(guessArr)}
        let guessArray = guessArr.join('\n');
    document.getElementById("guessArray").innerHTML = guessArray;
    document.getElementById("guessText").innerHTML = correct;
    return value
  }
  
  document.getElementById('autocompleteForm').addEventListener('submit', function(event) {
      event.preventDefault();
  });
  

  document.getElementById("givenup").onclick = giveup()
  function giveup() {
    console.log("apples")
    var p = document.getElementById("giveupanswer");
    p.style.display = "block";
}