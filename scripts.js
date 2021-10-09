
const Cards = Array.prototype.slice.call(document.getElementsByClassName("img-container"))
console.log(Cards)
Cards.forEach((Card) => {
    Card.addEventListener('click', event => {
        alert("Event on click")
    })
})


console.log(typeof(Cards))
