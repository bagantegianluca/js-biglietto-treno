/* 
Descrizione:
Il programma dovrà chiedere all'utente:
 il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli).
L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
NB:
Questo richiederà un minimo di ricerca usando i vostri fedeli compagni di viaggio: google, stackoverflow, w3school, mdn.
*/

/* 
STEP 1 - CHIEDO ALL'UTENTE QUANTI KM VUOLE PERCORRERE
1) Variabile const per archiviare valore
2) Variabile let per controllo errori input non numerici
2) Comando prompt per ricevere input utente dalla pagina
3) Comando console.log per vedere valori in console
 */
const userKm = prompt('Benvenuto! Calcola il prezzo del tuo biglietto:\n\nSTEP 1:\nInserisci i km da percorrere (il valore deve essere ESCLUSIVAMENTE numerico)');

if (isNaN(userKm) || userKm == '' || userKm == null) {
    alert(`Il valore ${userKm} inserito per i km non è un numero, la pagina sarà ricaricata`);
    location.replace(location.href);
} else {

    console.log(userKm);

    /* 
    STEP 2 - CHIEDO ALL'UTENTE LA SUA ETA'
    1) Variabile per archiviare valore
    2) Comando prompt per ricevere input utente dalla pagina
    3) Comando console.log per vedere valori in console
     */

    const userAge = prompt('Inserisci la tua età (il valore deve essere ESCLUSIVAMENTE numerico)');

    if (isNaN(userAge) || userAge == '' || userAge == null) {
        alert(`Il valore ${userAge} inserito per l'età non è un numero, la pagina sarà ricaricata`);
        location.replace(location.href);
    } else {

        console.log(userAge);

        /* 
        STEP3 - ESEGUO IL CALCOLO DEL COSTO DEL BIGLIETTO
        1) Variabile const per archiviare costo €/km
        2) Variabile const per archiviare sconto minorenni
        3) Variabile const per archiviare sconto over 65
        4) Variabile let per calcolo prezzo
        5) Condizione if, else if ed else per verifica condizioni e calcolo
        6) Comando console.log per vedere valori in console
        7) Metodo document.getElementById e proprietà innerHtml per stampa risultato in pagina
         */

        const priceKm = 0.21;
        const under18Discount = 20;
        const over65Discount = 40;
        let priceTicket;

        if (userAge < 18) {

            priceTicket = userKm * priceKm * ((100 - under18Discount) / 100);
            console.log(`L'utente è minorenne perchè ha ${userAge} anni, quindi il costo del biglietto è di ${priceTicket.toFixed(2)}€ perchè ha diritto allo sconto del ${under18Discount}%`);

        } else if (userAge > 65) {

            priceTicket = userKm * priceKm * ((100 - over65Discount) / 100);
            console.log(`L'utente è over 65 perchè ha ${userAge} anni, quindi il costo del biglietto è di ${priceTicket.toFixed(2)}€ perchè ha diritto allo sconto del ${under18Discount}%`);

        } else {

            priceTicket = userKm * priceKm;
            console.log(`L'utente non è nè minore, nè over 65 perchè ha ${userAge} anni, quindi il costo del biglietto è di ${priceTicket.toFixed(2)}€ perchè non ha diritto ad alcuno sconto`);

        }

        console.log(`Ciao, per percorrere ${userKm} km, avendo ${userAge} anni, il costo del tuo biglietto è di ${priceTicket.toFixed(2)}€`);
        document.getElementById('message').innerHTML = `Ciao, per percorrere ${userKm} km, avendo ${userAge} anni, il costo del tuo biglietto è di ${priceTicket.toFixed(2)}€ <br> Premi "F5" per ricaricare la pagina ed eseguire un nuovo calcolo.`;
    }
}