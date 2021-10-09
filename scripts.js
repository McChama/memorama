const IMG_URL = {
    'covid': 'media/covid.png',
    'no-vaccines': 'media/no-vaccines.png',
    'syringe': 'media/syringe.png',
    'vaccination': 'media/vaccination card.png',
    'shield': 'media/shield.png',
    'vaccine': 'media/vaccine.png'
}
const INITIAL_COUNTER = {
    'covid': 0,
    'no-vaccines': 0,
    'syringe': 0,
    'vaccination': 0,
    'shield': 0,
    'vaccine': 0
}
let IMG_COUNTER = {
    'covid': 0,
    'no-vaccines': 0,
    'syringe': 0,
    'vaccination': 0,
    'shield': 0,
    'vaccine': 0
}
const keyGenerator = (obj) => {
    const keys = Object.keys(obj)
    return keys[keys.length * Math.random() << 0 ]
}

const imgProvider = (imgSrc, counter) => {   
    let randomKey
    while(true){
        randomKey = keyGenerator(imgSrc)
        if(counter[randomKey] < 2) {
            counter[randomKey] = counter[randomKey] + 1
            break
        }
    }
    return imgSrc[randomKey]
}
const initCards = (myClassSelector) => {
    
    myClassSelector.forEach((Card) => {
        const img = Card.children[0]
        const myImg = imgProvider(IMG_URL, IMG_COUNTER)
        img.setAttribute('src', myImg)
    })
    
}

const restart = () => {
    Object.assign(IMG_COUNTER, INITIAL_COUNTER)
    const Cards = document.querySelectorAll('.img-container')
    initCards(Cards, IMG_COUNTER)
    console.log(IMG_COUNTER)
}

