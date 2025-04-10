let homeScore = 0
let homeDisplay = document.getElementById("homeScore")

function addOne() {
    homeScore += 1
    homeDisplay.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    homeDisplay.textContent = homeScore
}

function addThree() {
    homeScore += 3
    homeDisplay.textContent = homeScore
}


//Guests
let guestScore = 0
let guestDisplay = document.getElementById("guestScore")

function addOneGuest() {
    guestScore += 1
    guestDisplay.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestDisplay.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestDisplay.textContent = guestScore
}