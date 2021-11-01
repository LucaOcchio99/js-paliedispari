//Palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//const parola_utente = prompt('Inserisci una parola');
//console.log(`La parola inserita dall'utente è: ${parola_utente}`);

//let parola_divisa = parola_utente.split('');
//console.log(parola_divisa)

//parola_divisa.reverse();
//console.log(parola_divisa)

//let parola_invertita = parola_divisa.join('');
//console.log(`La parola invertita è: ${parola_invertita}`)

//controllo se entrambre le parole sono uguali
//if (parola_invertita === parola_utente) {
//    console.log('La parola è palindroma')
//} else {
//    console.log('La parola non è palindroma')
//}

const parola_utente = prompt('Inserisci una parola');
console.log(`La parola inserita dall'utente è: ${parola_utente}`);

const word_reverse = inversione_parola(parola_utente);


function inversione_parola(parola) {

let parola_divisa = parola.split('');
console.log(parola_divisa);

parola_divisa.reverse();
console.log(parola_divisa);

let parola_invertita = parola_divisa.join('');
console.log(`La parola invertita è: ${parola_invertita}`);

return parola_invertita;

}

//controllo se entrambre le parole sono uguali
if (word_reverse === parola_utente) {
console.log('La parola è palindroma')
} else {
console.log('La parola non è palindroma')
}