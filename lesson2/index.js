const EventsEmitter = require("events")
const emitter = new EventsEmitter()

let timer = [...process.argv].slice(2).map((number) => {
    let date = number.split("-")
    return new Date(`${date[3]}-${date[2]}-${date[1]}T${date[0]}:52:00`)
})

function showTimer() {
    console.clear()
    timer.forEach((t) => {
        let timeLeft = t.getTime() - new Date().getTime()
        console.log(`${timeLeft} seconds left`)
    })
}

emitter.on("next", showTimer)
let newTimer = setInterval(() => emitter.emit("next"), 1000)



