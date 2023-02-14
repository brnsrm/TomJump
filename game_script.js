let character = document.getElementById("character");
let obstacles = document.getElementsByClassName("hit-block"); // array
let counter = 0;
let hasCollided = false;

for (let j = 0; j < obstacles.length; j++) {
    const element = obstacles[j];
    element.addEventListener("animationiteration", function() {
        element.style.display = 'none';
        if(j+1 < obstacles.length) {
            let nextElement = obstacles[j+1];
            nextElement.style.display = 'block';
        } else {
            let nextElement = obstacles[0 ];
            nextElement.style.display = 'block';
        }
        if(hasCollided == false) {
            counter += 1;
        } else {
            counter = 0;
            hasCollided = false;
        }
        document.getElementById("counter").innerHTML = "Counter:" + counter
    })
    
}

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


    for(i=0; i < obstacles.length; i++) {
        let block = obstacles[i];
        //get current block X position
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        // console.log(blockLeft) 

        // detect collision - comparison of 2 values
        if (blockLeft < 60 && blockLeft > 0 && nookTop >= 190) {
            //collsion
            hasCollided = true;
            alert ("Game Over!")
        }
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
}); 