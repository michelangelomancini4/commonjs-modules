// 1. Crea una funzione che accetta due parametri: firstName, lastName.
//  La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function completeName(firstName, lastName) {

    return {
        firstName: firstName,
        lastName: lastName,
    };
    
}
// 2. Esporta la funzione dal file.

module.exports= completeName;


