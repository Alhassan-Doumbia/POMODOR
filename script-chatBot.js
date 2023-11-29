const chatContainer = document.querySelector(".chatContainer");
const chat = document.querySelector(".chat"); // le ul contenant les bulles de chat
const userInputField = document.querySelector(".userInputField");
const sendIcon = document.querySelector(".sendIcon");

// créer une bulle de message :
function newMessage() {
    const message = document.createElement("li");
    const input=userInputField.value;
    const userInput =`<p>${input}</p>`;
    message.innerHTML=userInput;//userInputField.value;
    chat.appendChild(message);

    // pour des raisons de débogage
    console.log("Ajout du nouveau message en appuyant sur la touche Entrée ou sur le logo.");
 
    // pour vider le champ de saisie
    userInputField.value = "";
    return false;
}
// utilisation de l'icône d'envoi pour envoyer des requêtes
sendIcon.addEventListener('click', newMessage);

// utilisation de la touche Entrée
userInputField.addEventListener('keypress', (e) => {
    if ((e.which == 13 || e.keyCode == 13) && userInputField.value!== "") {
        newMessage();
    } else {
        console.log("Message vide, non affiché.");
    }
});
