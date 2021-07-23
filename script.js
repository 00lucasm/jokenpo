
var player_choice = 0;
var npc_choice = 0;
var winner = -1;

function play(choice){
	player_choice = choice;
	npc_choice = Math.floor((Math.random()*(3 - 1 + 1)) + 1);

	// 1 - Pedra
	// 2 - Papel
	// 3 - Tesoura
	if(player_choice == 1){
		if(npc_choice == 1)
			winner = 0;
		else if(npc_choice == 2)
			winner = 2;
		else
			winner = 1;
	}else if(player_choice == 2){
		if(npc_choice == 1)
			winner = 1;
		else if(npc_choice == 2)
			winner = 0;
		else
			winner = 2;
	}else{
		if(npc_choice == 1)
			winner = 2;
		else if(npc_choice == 2)
			winner = 1;
		else
			winner = 0;
	}

	document.getElementById("player-choice" + player_choice).classList.add('selected');
	document.getElementById("npc-choice" + npc_choice).classList.add('selected');

	if(winner == 0)
		document.getElementById('messages').innerHTML = 'NO WINNER!';
	else if(winner == 1)
		document.getElementById('messages').innerHTML = 'JOGADOR CARO WINS!';
	else
		document.getElementById('messages').innerHTML = 'Computer WINS!';

}
