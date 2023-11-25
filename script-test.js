const body=document.querySelector("body");

body.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        console.log("touche entrée")
    }
})