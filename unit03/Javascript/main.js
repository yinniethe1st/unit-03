 document.querySelector('header > h1').innerText = "Guessing Game"
 document.querySelector('header > h2').innerText = "Loop"

// pick a random number between 0 and 16


let correctNumber = Math.floor(Math.random() * 15)

console.log(`The correct number is ${correctNumber}`)

let guessed = false
let totalGuesses = 0;
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1   // totalGuesses = totalGiesses + 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You are Correct!'
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Your Guess Was Too Low'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Your Guess Was Too High'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 then try again'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses


}



function giveAward() {
    
    console.log('Congratulations!')
    let imagePath = '#'
    

    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            console.log('Blue ribbon for you')
            imagePath = 'images/blue_ribbon.png?tr=w-100,h-100'
            break;
        case 4:
        case 5:
        case 6:
            console.log('Red ribbon for you')
            imagePath = 'images/red_ribbon.png'
            break;
        case 7:
            console.log('Yellow ribbon for you')
            imagePath = 'images/yellow_ribbon.png'
            break;
        default:
            console.log('Yellow ribbon for you')
            imagePath = 'images/yellow_ribbon.png'
            break;
     
    
    }

    const awardImage = document.createElement('img') // creates an <img> element

    

    awardImage.setAttribute('src', imagePath)

    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)


   if (ribbon.hasChildNodes()) {
        ribbon.removeChild(ribbon.firstChild);
    }

}