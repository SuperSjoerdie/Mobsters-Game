var DEBUG = true;

function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function getChance(percentage){
	return (getRandomInt(0, 99) < percentage); 
}

$(document).ready(function(){
    gamescreen = $('#gamescreen');
    if (DEBUG) console.log('DEBUG');
    Game = TGame(); 
});