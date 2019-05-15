/*1 - Pedra, 2 - Papel, 3 - Tesoura
  1>3
  2>1
  3>2
*/

var moves = [1, 2, 3];
var playerScore = 0,  computerScore = 0;

var playerMove = prompt("Digite sua jogada");

//choose a random move for computer
var r = Math.floor(Math.random() * 2);
var computerMove = moves[r];

console.log(playerMove);
console.log(computerMove);

if( (playerMove==1 && computerMove==3) ||
    (playerMove==2 && computerMove==1) ||
    (playerMove==3 && computerMove==2)){

  document.getElementById("moves").innerHTML="Sua jogada: " + playerMove + "<br>" + "Jogada do Computador: " + computerMove + "<br><br>";
  document.getElementById("message").textContent="Parabéns, você venceu!";
}
else if(playerMove === computerMove){
  document.getElementById("moves").innerHTML="Sua jogada: " + playerMove + "<br>" + "Jogada do Computador: " + computerMove + "<br><br>";
  document.getElementById("message").textContent="Empate!";
}
else{
  document.getElementById("moves").innerHTML="Sua jogada: " + playerMove + "<br>" + "Jogada do Computador: " + computerMove + "<br><br>";
  document.getElementById("message").textContent="Computador venceu!";
}
