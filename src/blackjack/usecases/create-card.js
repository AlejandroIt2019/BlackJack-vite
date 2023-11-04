
export const createCard = (card, turn, divCards) => {
    const imgCard = document.createElement('img')
    imgCard.classList.add('cards')
    imgCard.src = `./public/img/cartas/${card}.png`
    divCards[turn].appendChild(imgCard)
}