
//Verifies which key was clicked on 
function checkLetter(letter){
    switch (letter) {
        case "w":
            var tom1 = new Audio("sounds\\tom-1.mp3");
            tom1.play();    
            break;
        case "a":
            var tom2 = new Audio("sounds\\tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds\\tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds\\tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds\\snare.mp3");
            snare.play();
            break;
        case "k":
            var snare = new Audio("sounds\\kick-bass.mp3");
            snare.play();
            break;
        case "l":
            var crash = new Audio("sounds\\crash.mp3");
            crash.play();
            break;
        default:
            console.log(letter);
            break;
    // this -> butonul care a declansat listener-ul.
    }
}
//de scos


//Verifies which keyboard key was pressed.
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){  
        activeButton.classList.remove("pressed");
    },100)
}

  
//sets a listener to all the .button classes
for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 
        var innerHTml = this.innerHTML;
        checkLetter(innerHTml);
        buttonAnimation(innerHTml);
        
});
}

//sets a listener to the whole doc for key press
document.addEventListener("keypress",function(event){
    checkLetter(event.key);
    buttonAnimation(event.key);
})
