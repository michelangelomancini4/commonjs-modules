// importazione funzione file 1: "names.js"
const nomeCompleto = require("./names");

// importazione funzione file 2: "hobbies.js"
const hobby = require("./hobbies");

// Crea una funzione che non ha parametri. 
// La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 

function nameAndHobby() {

    // All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.
    
    return {
        nomeCompleto , hobby
   };
    
}


