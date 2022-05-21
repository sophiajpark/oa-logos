// new confetti instance, makes the canvas
const jsConfetti = new JSConfetti();

//when logo is clicked, confetti is played
let logoImage = document.getElementById ("logo-image");
logoImage.onclick = playConfetti;

//i is emojis index 
let i = 0;
//function that plays confetti
function playConfetti () {
    let emojis = ['🌸', '🌹', '🌻', '🌷', '🌼', '🥦'];
     
    jsConfetti.addConfetti({
        emojis: [emojis[i]],
        emojiSize: 50,
     });

     // i must be less than emoji array length
     if (i<emojis.length-1) {
        i++; // increase i
    } else {
        i = 0;
    }
}