import { requestACard } from "./request-a-card";
import { determinateWinner } from "./determine-winner";
export const turnComputer = (minimumPoints, deck, accPoints, pointsPlayers, createCard) => {
    let computerPoints = 0;
    do {
        const request = requestACard(deck);
        computerPoints = accPoints(request, pointsPlayers.length - 1);
        createCard(request, pointsPlayers.length - 1);
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));
    determinateWinner(pointsPlayers)
}