document.addEventListener("DOMContentLoaded", function() {
    let totalGuesses = 0;
    let wordAttempt = "";
    let correctWord = "STEAL";
    const removeLetterArray = ["backspace", "delete"];

    const updateSquare = function(value){
        let attempt = "#attempt" + (totalGuesses + 1).toString();
        let letter = " .s" + wordAttempt.length.toString();
        let ele = document.querySelector(attempt + letter);
        ele.innerHTML = value;
    }
    const handleLetter = function(event_key){
        if (wordAttempt.length === 5){
            return;
        }
        letter = event_key.toUpperCase()
        wordAttempt += letter;
        updateSquare(letter);
    }
    const handleEnter = function(){
        if (wordAttempt.length < 5){
            console.log("Not Enough Letters")
        } else if (wordAttempt.length === 5){
            totalGuesses += 1;
            if (wordAttempt === correctWord) {
                window.alert("WINNNER!")
            }
        }
    }
    document.addEventListener("keydown", function(event){
        console.log(event)
        let event_key = event.key.toLowerCase();
        if (/^[a-z]{1}$/i.test(event_key)){
            handleLetter(event_key);
        } else if (removeLetterArray.includes(event_key)) {
            updateSquare("");
            wordAttempt = wordAttempt.slice(0,-1);
        } else if (event_key === "enter"){
            handleEnter()
        };
    })
});