headsCounter = 0;
tailsCounter = 0;

const originalHeadsSrc = document.getElementById("heads").src;
const originalTailsSrc = document.getElementById("tails").src;

function flipFunction() {

    //Disable buttons as they are clicked to stop spamming
    const button = document.getElementById("flip");
    button.disabled = true;
    button.style.cursor = "not-allowed";

    const coinbutton = document.getElementById("coinContainer");
    coinbutton.style.pointerEvents = "none";
    coinbutton.style.cursor = "not-allowed";


    //Reset elements to their defaults 
    const result = document.getElementById("result");
    result.style.animation = "";

    headsValue = document.getElementById("HeadsCounter");
    tailsValue = document.getElementById("TailsCounter");
    headsValue.style.color = "";
    tailsValue.style.color = "";

    headImg = document.getElementById("heads");
    tailsImg = document.getElementById("tails");
    headImg.src = originalHeadsSrc;
    tailsImg.src = originalTailsSrc;

    //Force reset the animtion
    const coin = document.getElementById("coin");
    coin.style.animation = 'none';  //Stop animation
    coin.offsetHeight; // Force browser to notice the change
    coin.style.animation = 'spin 0.5s linear';  //Restart animation


    //Calculations
    randNum = Math.floor(Math.random() * 2) + 1


    

    if (randNum == 1) {
        answer = "heads";
        headsCounter++;
    }

    else if (randNum == 2) {
        answer = "tails";
        tailsCounter++;
    }


    //After the coin animation is complete 

    coin.addEventListener('animationend', () => {
        result.innerHTML = answer;
        result.style.animation = "tilt-shaking 0.5s infinite";

        headsValue.innerHTML = headsCounter;
        tailsValue.innerHTML = tailsCounter;

        //Make counter white depending on answer
        if (answer == "heads") {
            headsValue.style.color = "white";
        }

        else {
            tailsValue.style.color = "white";
        }

        //Change both sides of coin to the correct side
        coin.style.visibility = "hidden";
        const filename = `images/${answer}.png`;

        headImg.src = filename;
        tailsImg.src = filename;

        coin.style.visibility = "visible";



        //Enable buttons again, reset cursor to pointer
        button.disabled = false;
        button.style.cursor = "pointer";

        coinbutton.style.pointerEvents = "auto";
        coinbutton.style.cursor = "pointer";



    });


}