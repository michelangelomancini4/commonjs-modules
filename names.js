// 1. Crea una funzione che accetta due parametri: firstName, lastName.
//  La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function genCompleteName(firstName, lastName) {

    return {
         firstName,
         lastName
    };
    
}
// prova in console per testare la funzione(commentata)
console.log(genCompleteName('Clint','Eastwood'));

// 2. Esporta la funzione dal file.

module.exports= genCompleteName;


