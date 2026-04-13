function bigger(){
    alert("Hello, world!");

    let text = document.getElementById("textInput");
    text.style.fontSize = "24pt";
}

function fancify(){

    let text = document.getElementById("textInput");

     if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected!");

        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    let text = document.getElementById("textInput");
    let str = text.value.toUpperCase();
    let sentences = str.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");

        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-MOO";
        }

        sentences[i] = words.join(" ");
    }

    text.value = sentences.join(".");
}

