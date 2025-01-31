// 1. Crea una funzione che accetta due parametri: firstName, lastName.
//  La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function genCompleteName(firstName, lastName) {

    return {
        firstName: firstName,
        lastName: lastName,
    };
    
}

console.log(genCompleteName('Clint','Eastwood'));

// 2. Esporta la funzione dal file.

module.exports= genCompleteName;


