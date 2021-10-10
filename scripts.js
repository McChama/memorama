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

const initCards = (imageSelector, show = false, imgData = []) => {
    const imgSRC = [...imageSelector].map((img, index) => {
        let myImg
        if (show) myImg = (imgData.length === 0) ? imgProvider(IMG_URL, IMG_COUNTER) : imgData[index]
        else myImg = 'media/code-signs.png'

        img.setAttribute('src', myImg)
        return myImg
    })
    return imgSRC
}
const showCards = () => initCards(_CardsImg, true, cardData)
const hideCards = () => initCards(_CardsImg, false)

const _CardsImg = document.querySelectorAll('.card-item')
let cardData = []


const start = () => {
    Object.assign(IMG_COUNTER, INITIAL_COUNTER)
    cardData = initCards(_CardsImg, true)
    setTimeout(() => {
        hideCards()
    }, 5000)
}

