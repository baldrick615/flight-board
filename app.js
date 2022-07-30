const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OA 203",
        gate: "A1",
        status: "ON TIME"
    },
    {
        time: "08:50",
        destination: "PARIS",
        flight: "BA 903",
        gate: "B6",
        status: "ON TIME"
    },
    {
        time: "10:30",
        destination: "GLASGOW",
        flight: "OA 190",
        gate: "A17",
        status: "ON TIME"
    },
    {
        time: "12:10",
        destination: "MADRID",
        flight: "IB 18",
        gate: "A13",
        status: "DELAYED"
    },
    {
        time: "13:05",
        destination: "DUBLIN",
        flight: "AL 134",
        gate: "C7",
        status: "ON TIME"
    },
    {
        time: "14:50",
        destination: "BOSTON",
        flight: "AA 12",
        gate: "A5",
        status: "ON TIME"
    },
    {
        time: "17:14",
        destination: "AMSTERDAM",
        flight: "OA 405",
        gate: "B2",
        status: "ON TIME"
    }
]

const destinations = ["TOKYO", "LONDON", "PARIS", "MADRID", "LISBON", "DUBLIN", "NEW YORK"]
const status = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 17

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')
                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        }
            tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * maxNumber.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour
    if (hour < 24) {
        hour ++
    }
    if (hour >= 24){
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(6) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomLetter() + generateRandomLetter(),
        gate: generateRandomLetter() + generateRandomLetter() + generateRandomNumber() + generateRandomLetter(),
        status: status[Math.floor(Math.random() * status.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 3000)
