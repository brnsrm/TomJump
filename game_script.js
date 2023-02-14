var character = document.getElementById("character");
var block = document.getElementById("block")


function jump() {
    if (character.classList != "jump"); { 
    character.classList.add("jump"); /*add jump class*/

    setTimeout(function () { /*removes class after 300secs*/
        character.classList.remove("jump")
    }, 400);
    } 
}

let isAlive = setInterval(function () { 
    //get current character Y position check position of nook and block
    let nookTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); /*no pixel = parseInt, want number to do calculation */
    console.log(nookTop);

    //get current block X position
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log(blockLeft)

    // detect collision - comparison of 2 values
    if (blockLeft < 60 && blockLeft > 0 && nookTop >= 190)
    //collsion
    alert ("Game Over!") 
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
}); 