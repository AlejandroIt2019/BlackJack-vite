import {shuffle} from 'underscore'

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
        pointsPlayers = []
    //comenzar juego
    const startGame = (numPlayers = 2) => {
        deck = createDeck()
        pointsPlayers = []
        divCards.forEach(ele => ele.innerHTML = '');
        smallText.forEach(ele => ele.textContent = 0);
        for (let i = 0; i < numPlayers; i++) {
            pointsPlayers.push(0)
        }
        console.log(pointsPlayers);
    }
    //crear baraja
    const createDeck = () => {
        deck = []
        for (let i = 2; i <= 10; i++) {
            for (const types of type) {
                deck.push(i + types)
            }
        }
        for (const specials of special) {
            for (const types of type) {
                deck.push(specials + types)
            }
        }
        return shuffle(deck)
    }
    //pedir carta
    const requestACard = () => {
        if (deck.length === '0') {
            throw new Error('error no hay cartas');
        }
        return deck.pop()
    }
    //parsear valor de la carta 
    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1)
        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10
            : value * 1
    }
    //determinatewinner
    const determinateWinner = () => {
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
    //turn computer
    const turnComputer = (minimumPoints) => {
        let computerPoints = 0;
        do {
            const request = requestACard();
            computerPoints = accPoints(request, pointsPlayers.length - 1);
            createCard(request, pointsPlayers.length - 1);
        } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));
        determinateWinner()
    }
    const accPoints = (card, turn) => {
        pointsPlayers[turn] = pointsPlayers[turn] + cardValue(card)
        smallText[turn].textContent = pointsPlayers[turn]
        return pointsPlayers[turn]
    }
    //createCard
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
        const request = requestACard()
        let playerPoints = accPoints(request, 0)
        createCard(request, 0)
        if (playerPoints === 21) {
            console.warn('Felicidades sacaste 21!');
            btnRequest.disabled = true
            btnStop.disabled = true
            turnComputer(playerPoints)
        }
        if (playerPoints > 21) {
            console.warn('Has perdido, tienes más de 21');
            btnRequest.disabled = true  
            btnStop.disabled = true
            turnComputer(playerPoints)  
        }
        
    })
    btnStop.addEventListener('click', e => {
        btnRequest.disabled = true
        btnStop.disabled = true
        turnComputer(pointsPlayers[0])
    })
  })()