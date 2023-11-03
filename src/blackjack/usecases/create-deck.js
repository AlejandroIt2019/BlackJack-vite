import _ from "underscore";
/**
 * 
 * @param {<Array><String>} valueType ej ['C']
 * @param {<Array><String>} valueSpecial ej ['A']
 * @returns devuelve un array barajeado. 
 */
export const createDeck = (valueType, valueSpecial) => {
    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (const types of valueType) {
            deck.push(i + types)
        }
    }
    for (const specials of valueSpecial) {
        for (const types of valueType) {
            deck.push(specials + types)
        }
    }
    return _.shuffle(deck)
}