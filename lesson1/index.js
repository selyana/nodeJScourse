const colors = require("colors")

let range = +process.argv[2]
let numbers = []
let color = "red"

if (isNaN(range)) {
    console.log(colors.red("Переданный аргумент не является числом"))
}

if (range.length === 0 || range === 1 || range === 0) {
    console.log(colors.red("Простых чисел в диапазоне нет"))
}

else {
    nextPrime:
    for (let i = 2; i <= range; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }
        switch (color) {
            case "red":
                console.log(colors.red(i))
                color = "yellow"
                break
            case "yellow":
                console.log(colors.yellow(i))
                color = "green"
                break
            case "green":
                console.log(colors.green(i))
                color = "red"
                break
        }
        numbers.push(i)
    }
}
