import { cardValue, createDeck, requestACard, turnComputer } from "./usecases/archivo-barril";
(() => {
    'use strict'
    //declaracioens constantes
    const type = ['C', 'D', 'H', 'S'],
        special = ['A', 'J', 'K', 'Q']
    const btnStart = document.getElementById('btnStart'),
        btnRequest = document.getElementById('btnRequest'),
        btnStop = document.getElementById('btnStop'),
        smallText = document.querySelectorAll('small'),
        divCards = document.querySelectorAll('.divCards')
    let deck = [],
        pointsPlayers = [];
    //comenzar juego
    const startGame = (numPlayers = 2) => {
        deck = createDeck(type, special)
        pointsPlayers = []
        divCards.forEach(ele => ele.innerHTML = '');
        smallText.forEach(ele => ele.textContent = 0);
        for (let i = 0; i < numPlayers; i++) {
            pointsPlayers.push(0)
        }
    }
    const accPoints = (card, turn) => {
        pointsPlayers[turn] = pointsPlayers[turn] + cardValue(card)
        smallText[turn].textContent = pointsPlayers[turn]
        return pointsPlayers[turn]
    }
    const createCard = (card, turn) => {
        const imgCard = document.createElement('img')
        imgCard.classList.add('cards')
        imgCard.src = `./assets/img/cartas/${card}.png`
        divCards[turn].appendChild(imgCard)
    }
    //DOM BUTTONS
    btnStart.addEventListener('click', e => {
        startGame()
        btnRequest.disabled = false
        btnStop.disabled = false
    })
    btnRequest.addEventListener('click', e => {
        e.preventDefault()
        const request = requestACard(deck)
        let playerPoints = accPoints(request, 0)
        createCard(request, 0)
        if (playerPoints === 21) {
            console.warn('Felicidades sacaste 21!');
            btnRequest.disabled = true
            btnStop.disabled = true
            turnComputer(playerPoints, deck, accPoints, pointsPlayers, createCard)
        }
        if (playerPoints > 21) {
            console.warn('Has perdido, tienes más de 21');
            btnRequest.disabled = true
            btnStop.disabled = true
            turnComputer(playerPoints, deck, accPoints, pointsPlayers, createCard)
        }
    })
    btnStop.addEventListener('click', e => {
        btnRequest.disabled = true
        btnStop.disabled = true
        turnComputer(pointsPlayers[0], deck, accPoints,pointsPlayers, createCard)
    })
})()