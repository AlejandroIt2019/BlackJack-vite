import { requestACard } from "./request-a-card";

export const turnComputer = (minimumPoints, deck) => {
    let computerPoints = 0;
    do {
        const request = requestACard(deck);
        computerPoints = accPoints(request, pointsPlayers.length - 1);
        createCard(request, pointsPlayers.length - 1);
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));
    determinateWinner()
}