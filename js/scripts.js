//links
const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')




// go grab the data and then W A I T for the result
fetch("../data/starships.json")
.then((response) => response.json())
.then((shipArray) => {
    console.log(shipArray)
    populateNav(shipArray)
})



//nav
function populateNav(allShips) {
console.log(allShips)
allShips.forEach(ship => {
let myButton = document.createElement('button')
console.log(ship.name)
myButton.textContent = ship.name
myButton.addEventListener('click', () => showShip(ship))
myNavigation.appendChild(myButton)
})//end of loop
}//end of nav


//ship viewer
function showShip(shipData) {
    console.log(shipData)

    //create figure
let myFigure = document.createElement('figure')
let myImage = document.createElement('img')
let myCaption = document.createElement('figcaption')

    //assign data to figure
console.log(shipData.url)
let urlArray = shipData.url.split('/')
console.log(urlArray[5])

myImage.src = `https://starwars-visualguide.com/assets/img/starships/${urlArray[5]}.jpg`
myCaption.textContent = shipData.name

//error
myImage.addEventListener('error', () => {
    myImage.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
    myCaption.textContent = `The ${shipData.name} is in dock for repairs`
})

    //assemble figure
myFigure.appendChild(myImage)
myFigure.appendChild(myCaption)

    //html
    myViewer.textContent = ''
myViewer.appendChild(myFigure)
}//end viewer
