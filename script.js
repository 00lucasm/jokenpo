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
			alert(0);
		else if(npc_choice == 2)
			alert(2);
		else
			alert(1);
	}else if(player_choice == 2){
		if(npc_choice == 1)
			alert();
		else if(npc_choice == 2)
			alert();
		else
			alert();
	}else{
		if(npc_choice == 1)
			alert();
		else if(npc_choice == 2)
			alert();
		else
			alert();
	}

}
