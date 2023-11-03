/**
 * 
 * @param {Array<Number>} pointsPlayers 
 */

export const determinateWinner = (pointsPlayers) => {
    const [minimumPoints, computerPoints] = pointsPlayers
    setTimeout(() => {
        if (computerPoints === minimumPoints) {
            alert('Es un empate')
        } else if (computerPoints > 21) {
            alert('El jugador 1 gana!')
        } else if (minimumPoints > 21) {
            alert('La computadora gana')
        } else {
            alert('La computadora gana')
        }
    }, 600);
}