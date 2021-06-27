function shout(inputString) {
    return inputString.toUpperCase();
}

function whisper(inputString) {
    return inputString.toLowerCase();
}

function logShout(inputString) {
    console.log(shout(inputString));
}

function logWhisper(inputString) {
    console.log(whisper(inputString));
}

function sayHiToGrandma(inputString) {
    switch(inputString) {
        case inputString.toLowerCase():
            return "I can't hear you!";
        case inputString.toUpperCase():
            return "YES INDEED!";
        case "I love you, Grandma.":
            return "I love you, too.";
    }
}