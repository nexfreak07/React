const HEX_DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const array = new Array(6).fill("").map(() => array[Math.floor(Math.random() * HEX_DATA.length)]).join("")

console.log(HEX_DATA)
