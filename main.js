const $secondsHand = document.querySelector(".seconds-hand")
const $minutesHand = document.querySelector(".minute-hand")
const $hoursHand = document.querySelector(".hour-hand")

function setDate() {
    const now = new Date()
    getSeconds(now)
    getMinutes(now)
    getHours(now)
}

setInterval(setDate, 1000)

function getSeconds(now) {
    const seconds = now.getSeconds()
    const degree = (seconds * 6) + 90
    if (seconds === 0) {
        $secondsHand.style.transition = "none"
    }
    $secondsHand.style.transform = `rotate(${degree}deg)`
}

function getMinutes(now) {
    const minutes = now.getMinutes()
    const degree = (minutes * 6) + 90
    if (minutes === 0) {
        $minutesHand.style.transition = "none"
    }
    $minutesHand.style.transform = `rotate(${degree}deg)`
}

function getHours(now) {
    const hours = now.getHours()
    const degree = (hours * 30) + 90
    $hoursHand.style.transform = `rotate(${degree}deg)`
}