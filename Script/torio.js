
const dati = [
    {
        "domanda":"Quando è stata creata la playlist di torio",
        "corretta":"2",
        "sbagliata":"3"
    },
    {
        "domanda":"Prima c'erano altri modi ufficiali per votare canzoni",
        "corretta":"si",
        "sbagliata":"no"
    },
    {
        "domanda":"Quante versione ha avuto il programma di nicola",
        "corretta":"più di 4",
        "sbagliata":"meno di 4"
    },
    {
        "domanda":"Questa canzone è presente",
        "corretta":"no",
        "sbagliata":"si"
    },
    {
        "domanda":"Questa è la prima canzone aggiunta?",
        "corretta":"no",
        "sbagliata":"si"
    },
    {
        "domanda":"",
        "corretta":"",
        "sbagliata":""
    },
]

function generaRisposta(id){
    document.getElementById("testo").innerText=dati[id].domanda;
    if(id%2==0){
        document.getElementById("risp1").innerText=dati[id].corretta;
        document.getElementById("risp2").innerText=dati[id].sbagliata;
    }else{
        document.getElementById("risp1").innerText=dati[id].sbagliata;
        document.getElementById("risp2").innerText=dati[id].corretta;
    }
    if(id==4){
        const audio = new Audio('../Canzoni/Torio/See You Again (feat. Kali Uchis)_spotdown.org.mp3');
        audio.play()
        setTimeout(()=>{
            audio.pause();
            audio.currentTime =0;
        },10000)
    }
    if(id==3){
        const audio = new Audio('../Canzoni/Torio/');
        audio.play()
        setTimeout(()=>{
            audio.pause();
            audio.currentTime =0;
        },10000)
    }
}