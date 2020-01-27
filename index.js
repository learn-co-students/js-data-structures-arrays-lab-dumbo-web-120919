let drivers;

drivers = ["Milo", "Otis", "Garfield"]

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
  let newArray = [];
  return newArray = [...drivers, name];
}

function prependDriver(name) {
  let newArray = [];
  return newArray = [name, ...drivers];
}

function removeLastDriver() {
  let newArray = [];
  return newArray = drivers.slice(0, -1);
}

function removeFirstDriver() {
  let newArray = [];
  return newArray = drivers.slice(1)
}