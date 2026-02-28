
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
    document.getElementById("testo").innerText=dati[0].domanda;
    if(id%2!=0){
        document.getElementById("risp1").innerText=dati[0].corretta;
        document.getElementById("risp2").innerText=dati[0].sbagliata;
    }else{
        document.getElementById("risp1").innerText=dati[0].sbagliata;
        document.getElementById("risp2").innerText=dati[0].corretta;
    }
    console.log(dati[0]);
}