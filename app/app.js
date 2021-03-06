const p5 = require("p5");
//const Game = require("./game");
//const GameClient = require("./gameClient");

// Require different files to change behavior
const setup = require("./imageDetector/imageDetectorApp");
// const setup = require("./soundDetector/soundDetectorApp");
// const setup = require("./drawDetector/drawDetectorApp");

// Calls the setup function when the page is loaded
window.addEventListener("DOMContentLoaded", setup);

//A function that confirms the shape. Takes 3 parameters: a period followed by the name of the class of the 
//current shape class, the chosen shape class, and the button of the shape. 
//Either attacking or defending shapes are being set. 
window.setShape = function(curr_shape, chosen_shape, btn_shape) {
    //Set the current shape as the final shape selected
    var current_shape = window.document.querySelector(curr_shape).innerHTML;
    window.document.querySelector(chosen_shape).innerHTML = current_shape;
    
    //Remove the confirming button so players can't modify their move
    var elem = window.document.querySelector(btn_shape);
    elem.parentNode.removeChild(elem);
};


//a function that checks that attack and defend shapes were confirmed, then sends the data
//to the server 
window.confirmMove = function() {
    //check that both attack and defense buttons are gone
    var attack_btn = window.document.querySelector('.btn_attack');
    var defense_btn = window.document.querySelector('.btn_defense');

    if (attack_btn === null && defense_btn === null) {
        //grab the attack and defense shapes in the string form
        var attack = window.document.querySelector('.chosen_attack').innerHTML;
        var defense = window.document.querySelector('.chosen_defense').innerHTML;
        //send the attack and defense to the server
        
    } else {
        this.alert("Please make sure to confirm both attack and defense shapes.")
    }
};