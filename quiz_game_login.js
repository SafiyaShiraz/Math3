function adduser()
{
player1name=document.getElementById("player1_input").value;
player2name=document.getElementById("player2_input").value;

localStorage.setItem("player1name", player1name);
localStorage.setItem("player2name", player2name);

window.location.replace("quiz_game_page.html");
}