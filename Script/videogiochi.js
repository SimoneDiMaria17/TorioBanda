
const dati = [
    {
        "domanda":"1",
        "corretta":"2",
        "sbagliata":"3"
    },
    {
        "domanda":"",
        "corretta":"",
        "sbagliata":""
    },
    {
        "domanda":"Q",
        "corretta":"",
        "sbagliata":""
    },
    {
        "corretta":"",
        "sbagliata":""
    },
    {
        "domanda":"",
        "corretta":"",
        "sbagliata":""
    },
    {
        "domanda":"",
        "corretta":"",
        "sbagliata":""
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
}