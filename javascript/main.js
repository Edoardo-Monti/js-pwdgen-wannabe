/* 

Chiedi all’utente il suo nome,
    -creare la variabile nome e prompt per chiedere
poi chiedi il suo cognome,
    -creare la variabile cognonome e prompt per chiedere
poi chiedi il suo colore preferito
    -creare la variabile colore preferito e prompt per chiedere

Infine scrivi sulla pagina nomecognomecolorepreferito21

*/


// METODO INIZIALE 
/*

const nome = prompt(`come ti chiami?`);
const cognome = prompt(`qual'e il tuo cogmome?`);
const color = prompt(`qual'e il tuo colore preferito?`);

let password = nome + cognome + color + 21;

console.log(password);


document.getElementById(`text`) . innerText =`${password}`;

*/

//METODO PIU CORRETTO
const nome2 = prompt(`come ti chiami?`);
const cognome2 = prompt(`qual'e il tuo cogmome?`);
const color2 = prompt(`qual'e il tuo colore preferito?`);

let password2 =`${nome2}${cognome2}${color2}21`;

console.log(password2);

document.getElementById(`text`) .innerText = password2;