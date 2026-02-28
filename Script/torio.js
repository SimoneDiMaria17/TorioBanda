
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
        "corretta":"",
        "sbagliata":""
    },
    {
        "domanda":"Questa è la prima canzone aggiunta?",
        "corretta":"si",
        "sbagliata":"no"
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
}