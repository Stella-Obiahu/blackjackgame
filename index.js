let player = {
    name: "Stella" ,
    chips: 145
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :$" + player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10){
        return 10
    } else if(randomCard === 1){
        return 11
    }else{
        return randomCard
    }
}
function startGame(){
    let isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard 
    renderGame()
}
function renderGame(){
    cardEl.textContent= "Cards: "
    for(let i = 0; i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent= "Sum: " + sum
    if (sum<=20){
        message= "do you want to draw a new card"
    }else if (sum===21){
        message= "woohoo! you've got the Blackjack"
        hasBlackjack= true
    }else{
        message= "you're out of the game"
        isAlive= false
    }
    messageEl.textContent=message
}
function newCard(){
    if (isAlive=== true && hasBlackjack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



