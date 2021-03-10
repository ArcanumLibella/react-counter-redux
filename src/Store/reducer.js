// Déclaration de l'état initial
const initialState = {
    compteur: 0
}

// Création du reducer qui permet de modifier le state en fonction de ce que nous envoie les composants
const reducer = (state = initialState, action) => {

    if (action.type === 'INCREMENTE') {
        return {
            compteur: state.compteur + 1
        }
    } else if (action.type === 'DECREMENTE') {
        return {
            compteur: state.compteur - 1
        }
    }
    return state
}

export default reducer