// Get Player Information from JSON Array
var playerData = JSON.parse(data);
var players = [];
console.log(playerData)

// Define Player Object and constructor
var Player = function (name, team, conference, image, number,pos,gp, mpg, fgmfga, fgp, tpmtpa, tpp, ftmfta, ftp, rpg, apg, blkpg, stlpg, pfpg, topg, ppg) {
	this.name = name;
	this.team = team;
	this.conference = conference;
	this.image = image;
	this.number = number;
	this.pos = pos;
	this.gp = gp;
	this.mpg = mpg;
	this.fgmfga = fgmfga;
	this.fgp = fgp;
	this.tpmtpa = tpmtpa;
	this.tpp = tpp;
	this.ftmfta = ftmfta;
	this.ftp = ftp;
	this.rpg = rpg;
	this.apg = apg;
	this.blkpg = blkpg;
	this.stlpg = stlpg;
	this.pfpg = pfpg;
	this.topg = topg;
	this.ppg = ppg;
	console.log("Created " + name);

};


Player.prototype.showStats = function(){
	document.getElementById("statsArea").innerHTML = "<div class='playerCard'><h2><img src='"+this.image+"' class='largeImage'/>"+this.name+"</h2><hr /><p><table class='table-bordered'><tr><th>GP</th><th>MPG</th><th>FGM-FGA</th><th>FG%</th><th>3PM-3PA</th><th>3P%</th><th>FTM-FTA</th><th>FT%</th><th>RPG</th><th>APG</th><th>BLKPG</th><th>STLPG</th><th>TOPG</th><th>PPG</th> </tr><tr><td>"+this.gp+"</td><td>"+this.mpg+"</td><td>"+this.fgmfga+"</td><td>"+this.fgp+"</td><td>"+this.tpmtpa+"</td><td>"+this.tpp+"</td><td>"+this.ftmfta+"</td><td>"+this.ftp+"</td><td>"+this.rpg+"</td><td>"+this.apg+"</td><td>"+this.blkpg+"</td><td>"+this.stlpg+"</td><td>"+this.topg+"</td><td>"+this.ppg+"</td></tr></table></p></div>";	

}



function loadData() {

	
	// Loop throught JSON array of players and create new player objects
	for (var i = 0; i < playerData.length; i++) {

		var player = new Player(playerData[i].name,playerData[i].team,playerData[i].conference, playerData[i].image, playerData[i].number, playerData[i].pos, playerData[i].gp, playerData[i].mpg, playerData[i].fgmfga, playerData[i].fgp, playerData[i].tpmtpa, playerData[i].tpp, playerData[i].ftmfta, playerData[i].ftp, playerData[i].rpg, playerData[i].apg, playerData[i].blkpg, playerData[i].stlpg, playerData[i].pfpg, playerData[i].topg, playerData[i].ppg);	
		players.push(player);    
	}
}

function displayPlayers(){
	for (var i = 0; i < players.length; i++) {

		var listItem = document.createElement("LI");
		var text = document.createTextNode("");
		listItem.appendChild(text);
		//listItem.onclick = "";
		
		listItem.setAttribute('onclick','players['+i+'].showStats();')
		listItem.innerHTML = "<img src="+players[i].image+" /><span class='number'>" + players[i].number + "&nbsp;  &nbsp; " + players[i].pos + "</span><br /><span class='name'>" + players[i].name + "</span>";
		document.getElementById("playerList").appendChild(listItem);

	}
}