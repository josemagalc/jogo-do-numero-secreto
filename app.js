let numerosecreto=gerarnumeroaleatório()
let tentativas=1

function exibirtextonatela(tag,texto) {
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirtextoinicial(){ 
exibirtextonatela("h1", "Jogo do numero secreto"); 
exibirtextonatela("p","Insira um numero de 1 a 10");}

exibirtextoinicial();

   


function verificarChute() {
    let chute=document.querySelector("input").value;
    console.log(chute==numerosecreto);

    if(chute==numerosecreto){
        let palavratentivas=tentativas>1? 'tentativas' :'tentativa';
        let mensagemtentativa=`O numero secreto com ${tentativas} ${palavratentivas}`;
        exibirtextonatela("h1","Você acertou");
        exibirtextonatela("p",mensagemtentativa);
        document.getElementById("reiniciar").
        removeAttribute("disabled");
    }else {if(chute>numerosecreto)
         exibirtextonatela("p","O numero secreto é menor");
     else{
         exibirtextonatela("p","O numero secreto é maior");}
    tentativas++;
     limparcampo();}
    
    
}

function gerarnumeroaleatório(){
    return parseInt(Math.random()*10+1);
}

function limparcampo(){
    chute=document.querySelector("input");
    chute.value="";
}

function reiniciarjogo(){
    let numerosecreto=2;
    limparcampo()
    let tentativas=1;
    exibirtextoinicial();
    document.getElementById("reiniciar").setAttribute("disabled",true)
;
}