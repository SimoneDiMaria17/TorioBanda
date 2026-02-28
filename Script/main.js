function diable(id){
    let bottone = document.getElementById(id);
    if(bottone.disabled == true)
    {
        bottone.disabled = false
    }else{
        bottone.disabled = true
    }
}

const canzoni=[
    {
        "American_Rap":[
           { "url":"../Canzoni/10_Categorie/american Rap/__spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/american Rap/A BOY IS A GUN__spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/american Rap/I Wonder.mp3"},
            {"url":"../Canzoni/10_Categorie/american Rap/PRIDE._spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/american Rap/it boy.mp3"}
        ],
        "Anni_10_Ita":[
           { "url":"../Canzoni/10_Categorie/Anni 10 Ita/Cigno nero_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 Ita/Giorni stupidi.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 Ita/HO PAURA DI USCIRE 2 (prod. Mace).mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 Ita/Margarita (con Marracash)_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 Ita/Si, ah_spotdown.org.mp3"}
        ],
        "Anni_10 Mondo":[
           { "url":"../Canzoni/10_Categorie/Anni 10 mondo/Call Me Maybe_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 mondo/I Love It (feat. Charli XCX)_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 mondo/Shake It Off (Taylor's Version)_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 mondo/Skyfall_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Anni 10 mondo/Sunflower - Spider-Man_ Into the Spider-Verse_spotdown.org.mp3"}
        ],
        "Bilions":[
           { "url":"../Canzoni/10_Categorie/Bilions/505_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Bilions/End of Beginning_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Bilions/Freaks_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Bilions/NUEVAYoL_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Bilions/Without Me_spotdown.org.mp3"}
        ],
        "Film":[
           { "url":"../Canzoni/10_Categorie/Film/barbie.mp3"},
            {"url":"../Canzoni/10_Categorie/Film/biglebonwki.mp3"},
            {"url":"../Canzoni/10_Categorie/Film/guardiani della galassia.mp3"},
            {"url":"../Canzoni/10_Categorie/Film/pulp.mp3"},
            {"url":"../Canzoni/10_Categorie/Film/kpop.mp3"}
        ],
        "Ita_rap":[
           { "url":"../Canzoni/10_Categorie/Ita rap/90MIN - Unplugged.mp3"},
            {"url":"../Canzoni/10_Categorie/Ita rap/Avrai Ragione Tu (Ritratto)_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Ita rap/LODIO.mp3"},
            {"url":"../Canzoni/10_Categorie/Ita rap/Massafghanistan.mp3"},
            {"url":"../Canzoni/10_Categorie/Ita rap/Vengo Dalla Luna.mp3"}
        ],
        "Italia_indie":[
           { "url":"../Canzoni/10_Categorie/Italia indie/Dracme_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Italia indie/Fiore mio_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Italia indie/La Chanson.mp3"},
            {"url":"../Canzoni/10_Categorie/Italia indie/Lambada.mp3"},
            {"url":"../Canzoni/10_Categorie/Italia indie/Polifemo_spotdown.org.mp3"}
        ],
        "Lol_rap":[
           { "url":"../Canzoni/10_Categorie/lol_rap/DONNE RICCHE - Acoustic Version_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/lol_rap/FUCKYOURCLIQUE - STO COSÌ.mp3"},
            {"url":"../Canzoni/10_Categorie/lol_rap/FUCKYOURCLIQUE - VAI DISA (VIDEO UFFICIALE).mp3"},
            {"url":"../Canzoni/10_Categorie/lol_rap/MANUUXO - PALLE FAHRENHEIT (Acoustic Version).mp3"},
            {"url":"../Canzoni/10_Categorie/lol_rap/Striscia_spotdown.org.mp3"}
        ],
        "Mistery":[
           { "url":"../Canzoni/10_Categorie/mistery/L'Amore Non Mi Basta_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/mistery/Lewandowski IV_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/mistery/Stupido gioco del Rap_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/mistery/Survivor _ I Will Survive - Cover of Destiny's Child and Gloria Gaynor_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/mistery/The Fate of Ophelia_spotdown.org.mp3"}
        ],
        "Sanremo":[
           { "url":"../Canzoni/10_Categorie/Sanremo/CENERE_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Sanremo/Mai Dire Mai (La Locura)_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Sanremo/Nel blu dipinto di blu_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Sanremo/Salirò_spotdown.org.mp3"},
            {"url":"../Canzoni/10_Categorie/Sanremo/SESSO OCCASIONALE_spotdown.org.mp3"}
        ],
    }
]