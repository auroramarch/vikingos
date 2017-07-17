
var Viking= function(name, health, strength){
	this.name= name;
	this.health= totalHealth;
	this.strength=totalStrength;

}



function fight (vikingo1,vikingo2){


	var totalHealth = function (min, max) {
  	return Math.round (Math.random() * (max - min) + min);
	}
	var totalStrength = function (min, max) {
  	return Math.round (Math.random() * (max - min) + min);
	}
	var viking1 = new Viking ("Ragnar", totalHealth(800-600), totalStrength(150-75));
	var viking2 = new Viking ("Bjorn", totalHealth(1000-800), totalStrength(120-60));


	while (viking1.health>=50 && viking2.health>=50){
	viking1.health= viking1.health- viking2.strength;
	viking2.health= viking2.health- viking1.strength;
		console.log(viking2.health,viking1.health)
}

	if(viking1.health > viking2.health){
		console.log(viking1.name + " ha ganado la pelea.");
	}

	else {
		console.log (viking2.name + " ha ganado la pelea.");
	}

	
}

fight(viking1,viking2);




