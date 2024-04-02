const HEX_DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function color(){
    const array = new Array(6).fill("").map(() => HEX_DATA[Math.floor(Math.random() * HEX_DATA.length)]).join("")
    return array
}

const HexCode = "#" + color();

const Option1 = "#" + color();

const Option2 = "#" + color();
export  {HexCode, Option1, Option2};