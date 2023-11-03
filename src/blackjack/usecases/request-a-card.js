/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} devuelve una carta String
 */
export const requestACard = (deck) => {
    
    if (!deck || deck.length === '0') {
        throw new Error('error no hay cartas');
    }
    return deck.pop()
}