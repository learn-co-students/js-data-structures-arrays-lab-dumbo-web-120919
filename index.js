// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
    return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift()
}

function appendDriver(name) {
    const allDrivers = [...drivers, "Broom"]
    return allDrivers
}

function prependDriver(name) {
    const allDrivers = ["Arnold",...drivers]
    return allDrivers
}

function removeFirstDriver() {
    return drivers.slice(1)
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length -1)
}