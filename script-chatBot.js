// c'est ici qu'on écrira tout le code pour le bails
//à faire :
//creer le timer 
// fair fonctionner le bouton qui creera les tâches
//faire la logique du chat 

const chatContainer=document.querySelector(".chatContainer");
const chat=document.querySelector(".chat")//le ul conttenant les bulles de chat
const userInputField=document.querySelector(".userInputField");
const sendinIcon=document.querySelector(".sendinIcon");

//creer une bulle de message : 
function newMessage(){
    let userInput=userInputField.value;
    if(inputField.value===""){console.log("empty prompt , not displayed")}
    if(userInput!=""){
        let chatBubble=document.createElement("li");
        chatBubble.innerText=`${userInput}`;
        chatBubble.appendChild(chatBubble);
        userInputField.value = "";
        return false;
    }
}
//utilisation de l'icone d'envoit pour envoyer des requêtes
sendinIcon.addEventListener('click',newMessage);

//utilisationd de la touche entrée pour faire la même chose 
userInputField.addEventListener('keypress',(e)=>{
    if(e.keyCode===13 && inputField.value==""){
        console.log("empty prompt,not displayed")//au cas où l'utilisateur voudrait envoyer un bail vide ya des fdp oh
        e.preventDefault();}

    if(e.keyCode==13){e.preventDefault(),newMessage}
})

