// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    let copyDrivers = drivers.slice();
    copyDrivers.push(name);
    return copyDrivers;
    // return [...drivers, name];
}

function prependDriver(name) {
    let copyDrivers = drivers.slice();
    copyDrivers.unshift(name);
    return copyDrivers;
    // return [name, ...drivers];
}

function removeLastDriver() {
    // let copyDrivers = drivers.slice();
    // copyDrivers.pop();
    // return copyDrivers;
    return drivers.slice(0, -1);
}

function removeFirstDriver() {
    let copyDrivers = drivers.slice();
    copyDrivers.shift();
    return copyDrivers;
    // return drivers.slice(1);
}
