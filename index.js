let firstcard = 10
let secondcard = 11
let cards = [firstcard,secondcard]
let sum = firstcard + secondcard 
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
function startGame(){
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
        hasBlackjack= false
    }else{
        message= "you're out of the game"
        isAlive= true
    }
    messageEl.textContent=message
}
function newCard(){
    console.log("drawing a new card")
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}