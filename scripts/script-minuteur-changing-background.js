
// function timer() {
//     let second_count = 10;
//     let minute_count = 0;
//     let minute=document.querySelector('.minute');
//     let seconde=document.querySelector('.seconde');
//     let timer = document.querySelector('.timer');


//     let t = setInterval(() => {
//         minute.innerText = (minute_count<10)? '0'+minute_count:minute_count
//         seconde.innerText = (second_count<10)? '0'+second_count:second_count;
//         second_count-- ;
//         console.log(seconde)
//         if(second_count<0){
//             minute_count --;
//             second_count = 59;
//             if (minute_count<0) {
//                 clearInterval(t)
//                     //pour la modif du background et de tout les bails qui lui sont lié
//                 let background=document.querySelector("body");
//                 let btn=document.querySelector("button");
//                 let workingState=document.querySelector('.workingState')

//                 background.style.backgroundColor="#11A37F";
//                 background.style.color="#FFFFF"
                                
//                 btn.style.border="1px solid #FFFFFF";
//                 btn.style.outline="thick #FFFFFF"
//                 btn.style.color="#FFFFFF";

//                 workingState.style.background="url('Image&Data/BreakState.png')"// à mettre dans un fichier .env
//                 // fin des modifs 
//                 let br=setInterval(()=>{
//                     minute.innerText = (minute_count<10)? '0'+minute_count:minute_count
//                     seconde.innerText = (second_count<10)? '0'+second_count:second_count;
//                     minute_count=5;
//                     second_count=0;
//                     minute.innerText = (minute_count<10)? '0'+minute_count:minute_count
//                     seconde.innerText = (second_count<10)? '0'+second_count:second_count;
//                     second_count-- ;
//                     console.log(seconde)
//                     if(second_count<0){
//                         minute_count --;
//                         second_count = 59;
//                         if (minute_count<0) {
//                             clearInterval(t)
//                             background.style.backgroundColor="#1E1E1E";
    
//                 }
//                 }},1000)
            
//             }
//     }},500)

    // creer une autre partie du même genre qui sera intégré à la partie où il ya le clear Interval 
    // qui sera comme le premier algo sauf que celui ci sera calibré sur 5 minutes 

function timer() {
        let minute_count = 0;
        let second_count = 10;
        let currentState = 'work'; // État initial
    
        let minute = document.querySelector('.minute');
        let seconde = document.querySelector('.seconde');
        let timer = document.querySelector('.timer');
        let background = document.querySelector("body");
        let btn = document.querySelector("button");
        let workingState = document.querySelector('.workingState');
    
        function updateTimerDisplay() {
            minute.innerText = (minute_count < 10) ? '0' + minute_count : minute_count;
            seconde.innerText = (second_count < 10) ? '0' + second_count : second_count;
        }
    
        function changeState(newState) {
            currentState = newState;
            // Ajouter des modifications d'interface utilisateur en fonction de l'état si nécessaire
            // ...
    
            // Réinitialiser le minuteur en fonction de l'état
            if (currentState === 'work') {
                minute_count = 0;
                second_count = 10;
            } else if (currentState === 'break') {
                minute_count = 5;
                second_count = 0;
            }
            updateTimerDisplay();
        }
    
        let t = setInterval(() => {
            updateTimerDisplay();
            second_count--;
    
            if (second_count < 0) {
                minute_count--;
    
                if (minute_count < 0) {
                    if (currentState === 'work') {
                        changeState('break');
                    } else {
                        clearInterval(t);
                        // Modification finale d'interface utilisateur après la fin du minuteur
                        background.style.backgroundColor = "#1E1E1E";
                    }
                } else {
                    second_count = 59;
                }
            }
    }, 1000);
}


//cette partie fonctionne alhamdhulilah !
let startTimer_Btn=document.querySelector('.startTimer');
startTimer_Btn.addEventListener('click',(e)=>{
    e.preventDefault();// toujours annuler les comportemet par défaut ,c'est mieux ! 
    let minute_reset=document.querySelector('.minute');// On va mettre les minuutes et les secondes à Zero quand le timer commence 
    minute_reset.innerText="";
    let second_reset=document.querySelector('.seconde');
    second_reset.innerText="";
    timer();
});
//pour arrêter le timer

// cette partie ne marche pas proprement 
function pauseTimer(){
    let minute = document.querySelector('.minute');
    let seconde = document.querySelector('.seconde');
        minute.innerText = "00";
        seconde.innerText = "00";
}
let pauseTimer_btn=document.querySelector('.pauseTimer');
pauseTimer_btn.addEventListener('click',pauseTimer());