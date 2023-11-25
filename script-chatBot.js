
const chatContainer=document.querySelector(".chatContainer");
const chat=document.querySelector(".chat")//le ul conttenant les bulles de chat
const userInput=document.querySelector(".userInputField").value;
const userTextArea=document.querySelector(".userInputField")
const sendinIcon=document.querySelector(".sendinIcon");
//creer une bulle de message : 
function newMessage(){
    //le nerf de guerre c'est ce bail
    const message=document.createElement("li");
    const userInputField=document.getElementsByClassName("userInputField")
    message.innerText=userInput;
    chat.appendChild(message);
    //pour soucis de debuggage 
    console.log("ajout du nouveau message en appuyant sur la touce entrée ou sur le logo ")
    //pour vider le bail
    userInputField.value = "";
    return false; 
}
//utilisation de l'icone d'envoit pour envoyer des requêtes
sendinIcon.addEventListener('click',newMessage)
//utilisation de la touche entrée 
userInputField.addEventListener('keypress',(e)=>{
    if (e.which==13 ||e.keyCode==13 && userInput!=""){
        // e.preventDefault();
        newMessage();
    }
    else{
        console.log("empty message , not displayed");
    }
})

