
const dati = [
    {
        "domanda":"In quale gioco di ruolo giapponese la musica del “Battle Theme” cambia a seconda del personaggio che combatti?",
        "corretta":"Final Fantasy VI",
        "sbagliata":"persona 5 reload"
    },
    {
        "domanda":"Quale strumento musicale virtuale puoi suonare liberamente in The Legend of Zelda:",
        "corretta":"Ocarina",
        "sbagliata":"banjo"
    },
    {
        "domanda":"Di che gioco è questa canzone",
        "corretta":"Tetris",
        "sbagliata":"space invaders"
    },
    {
        "domanda":"Chi è il compositore del tema di halo",
         "corretta":"Martin O’Donnell",
        "sbagliata":"ruben gentile"
    },
    {
        "domanda":"quale gioco ha attualmente una radio in game",
        "corretta":"gta",
        "sbagliata":"fortnite"
    },
    {
        "domanda":"In quale gioco musicale devi colpire le note usando tamburi",
        "corretta":"Taiko no Tatsujin",
        "sbagliata":"tuiko su tsasuka"
    },
]

function generaRisposta(id){
    document.getElementById("testo").innerText=dati[id].domanda;
    if(id%2!=0){
        document.getElementById("risp1").innerText=dati[id].corretta;
        document.getElementById("risp2").innerText=dati[id].sbagliata;
    }else{
        document.getElementById("risp1").innerText=dati[id].sbagliata;
        document.getElementById("risp2").innerText=dati[id].corretta;
    }
    if(id==2){
        const audio = new Audio('../Canzoni/Videogiochi/Tetris Theme A (From _Tetris_)_spotdown.org.mp3');
        audio.play()
        setTimeout(()=>{
            audio.pause();
            audio.currentTime =0;
        },10000)
    }
}