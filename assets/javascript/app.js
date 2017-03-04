

// pos is position of where the user in the test or which question they're up to

var pos = 0;
var correct = 0;
var game, game_status,test, question, choice, choices, chA,chB,chC,chD ;

var questions = [
["Who created the first video game with interchangeable game cartridges ?", "Dr. David R. Hedgley", "Gerald A. Lawson", "Nolan Kay Bushnell", "Ed Boon","B"],
["Which game developer released Virtual Fighter in 1993?", "Nintendo", "Capcom", "Sega","Atari", "C"],
["Who design the mobile app game flappy bird ?", "Dong Nguyen", "Toru Iwatan", "Shigeru Miyamot","John Tobias", "A"],
["Who design the game Mario Bros", "Ed Boon", "Shigeru Miyamot", "Toru Iwatan","Keith Shepherd", "C"],
["What was the name of the Evolution Championship Series when it was founded is ?", "Wargaming League", "Evo", "Battle by the Bay","The International","D"]
];



// this get function is short for the getElementById function

function get(x){
  return document.getElementById(x);

}
function renderQuestion(){
test = get("game");
if(pos >= questions.length){
game.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
get("game_status").innerHTML = "Game completed";


// resets the variable to allow users to restart the test
pos = 0;
correct = 0;
// stops rest of renderQuestion function running when test is completed
return false;
}
get("game_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
question = questions[pos][0];
chA = questions[pos][1];
chB = questions[pos][2];
chC = questions[pos][3];
chD = questions[pos][4];
test.innerHTML = "<h3>"+question+"</h3>";

// the += appends to the data we started on the line above
test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";

test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}



function checkAnswer(){
// use getElementsByName because we have an array which it will loop through
choices = document.getElementsByName("choices");
for(var i=0; i<choices.length; i++){
if(choices[i].checked){
choice = choices[i].value;
}
}
// checks if answer matches the correct choice
if(choice == questions[pos][5]){
//each time there is a correct answer this value increases
correct++;
}
// changes position of which character user is on
pos++;
// then the renderQuestion function runs again to go to next question
renderQuestion();


}





window.addEventListener("load", renderQuestion, false);
