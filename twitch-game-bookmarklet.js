javascript:void((function(){ 

/******************************** VINKING ***************************************/
/*  Goal: Build a twitch game without using the API for twitch.tv.
    This game requires nothing but your browser:
        * no API keys needed
        * no browser plugins
        * no twitch.tv sdk
        * etc
        * 
        * By Andre Vink 
        * v0.1 - 16/07/2020
/******************************** VINKING ***************************************/

let sentences = [
    "We never really grow up, we only learn how to act in public. ( ͠° ͟ʖ ͡°) ",
    "The only mystery in life is why the kamikaze pilots wore helmets. ( ͠° ͟ʖ ͡°) ", 
    "My favorite machine at the gym is the vending machine. ( ͠° ͟ʖ ͡°)",
    "Always borrow money from a pessimist. He won’t expect it back. ( ͠° ͟ʖ ͡°)",
    "Always forgive your enemies – nothing annoys them so much. ( ͠° ͟ʖ ͡°)", 
    "A day without sunshine is like, you know, night. ( ͠° ͟ʖ ͡°)"
],
emoji = [], 
emojiSrc = [],
suprice = "";

/* [1] Get the second button for "FREE" emotes */
document.querySelectorAll(".chat-input__textarea .ScIconSVG-sc-1bgeryd-1.cMQeyU")[1].parentNode.click();
/* close after loaded emojies */
document.querySelectorAll(".chat-input__textarea .ScIconSVG-sc-1bgeryd-1.cMQeyU")[1].parentNode.click();
/* [0] is to only get the "FREE" Frequently Used Emotes */
document.querySelectorAll(".emote-picker__content-block:first-of-type .emote-button img").forEach(function(k, v){
    emoji.push(k.getAttribute("alt"));
    emojiSrc.push(k.getAttribute("src"));
});

var style = document.createElement('style');
    style.innerHTML = `
        .dareInput { position: absolute; top: -100000px; }
        .dareButton { margin: 0 auto; padding: 5px 5px 0; position: absolute!important; 
            z-index: 9999; top: 275px; left: 300px; line-height: 1; background-color: #9147ff; 
            border-radius: 5px 5px 5px 5px; border: 2px solid white; font-weight: bold; opacity: 0.4;
            width: 75px; text-align: center;
        }
        .dareButton:hover {  opacity: 1; }
        .dareButton:active { background: green; }
        .dareButton img { display: block; margin: 10px auto; }
        .dice { background: #9147ff; border-radius: 5px 5px 5px 5px; border: 2px solid white; 
            position: absolute; width: 200px; height: 200px; z-index: 9999; left: 40%; top: 25%; }
        .dice img { width: 100%; height: 100%; }
        .chat-input__textarea textarea:focus { color: black; }
        .chat-input__textarea textarea:not(:empty) { border: 2px solid green; }
        .chat-input__textarea textarea { color: rgba(255, 255, 255, 0)!important; }
    `;
document.querySelector("body").appendChild(style);

function dice() {
    var diceAnim = setInterval(() => {
        var dice = document.createElement('div');
        dice.classList.add("dice");
           dice.innerHTML = `<img src='${emojiSrc[Math.floor(Math.random() * emoji.length)]}' />`;
        if(document.querySelector(".dice") !== null) {
            document.querySelector(".dice").remove();
        }
        document.querySelector("body").appendChild(dice);
    }, 250);

    setTimeout(function(){
        clearInterval(diceAnim);
        if(document.querySelector(".dice") !== null) {
            document.querySelector(".dice").remove();
        }
    }, 2500);
}

var dareInput = document.createElement("input");
    dareInput.classList.add("dareInput");
document.querySelector("body").appendChild(dareInput);

function CopyAndRandom() {
    suprice = emoji[Math.floor(Math.random() * emoji.length)] + " " + sentences[Math.floor(Math.random() * sentences.length)];
    document.querySelector(".dareInput").value = suprice;
    document.querySelector(".dareInput").select();
    document.execCommand("copy");
}

var dareButton = document.createElement("button");
    dareButton.classList.add("dareButton");
    dareButton.onclick = function(){
        CopyAndRandom(); dice();
    };
    dareButton.innerHTML += 
        `<img src="${emojiSrc[Math.floor(Math.random() * emoji.length)]}"/>  
            DARE CARD
        <img src="${emojiSrc[Math.floor(Math.random() * emoji.length)]}"/>`;
document.querySelector("body").appendChild(dareButton);

CopyAndRandom();

})());