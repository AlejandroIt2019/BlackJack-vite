import { requestACard } from "./request-a-card";
import { determinateWinner } from "./determine-winner";

/**
 * 
 * @param {*} minimumPoints 
 * @param {*} deck 
 * @param {*} accPoints 
 * @param {*} pointsPlayers 
 * @param {*} createCard
 * función turno de la computadora, devuelve un ganador. 
 */ 
export const turnComputer = (minimumPoints, deck, accPoints, pointsPlayers, createCard) => {
    let computerPoints = 0;
    do {
        const request = requestACard(deck);
        computerPoints = accPoints(request, pointsPlayers.length - 1);
        createCard(request, pointsPlayers.length - 1);
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));
    determinateWinner(pointsPlayers)
}