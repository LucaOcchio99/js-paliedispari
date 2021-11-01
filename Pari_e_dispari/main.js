//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//L’utente sceglie pari o dispari
const pari_o_dispari = prompt('Scegli pari o dispari?');
console.log(`L'utente ha scelto: ${pari_o_dispari}`);

//e inserisce un numero da 1 a 5.
const numero_utente = parseInt(prompt('Inserisci un numero da 1 a 5'))
console.log(`L'utente ha scelto il seguente numero: ${numero_utente}`);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const num_computer = numero_random_pc(1,4);

function numero_random_pc(num1, num2){
    const numero_random = Math.round(Math.random()*num2)+num1;
    console.log(`Il numero del pc è: ${numero_random}`);
    
    return numero_random;
}


//Sommiamo i due numeri
const somma_numeri = numero_utente + num_computer;
console.log(`La somma tra il numero dell'utente e del pc è: ${somma_numeri}`);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const par_dispr = pari_dispari(somma_numeri);
console.log(par_dispr);

function pari_dispari(risultato_somma) {
    if (risultato_somma % 2 != 0) {
        return 'La somma dei due numeri risulta dispari';
        } else {
        return 'La somma dei due numeri risulta pari';
        }
}


//Dichiariamo chi ha vinto.
if ((somma_numeri % 2 != 0) && (pari_o_dispari == 'dispari')) {
    console.log('L\'utente è vincitore');
} else if ((somma_numeri % 2 != 0) && (pari_o_dispari == 'pari')) {
    console.log('Il pc ha vinto');
} else if ((somma_numeri % 2 == 0) && (pari_o_dispari == 'pari')) {
    console.log('L\'utente ha vinto');
} else if ((somma_numeri % 2 == 0) && (pari_o_dispari == 'dispari')) {
    console.log('Il pc ha vinto')
}