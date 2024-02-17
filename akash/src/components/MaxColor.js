import React from 'react'
import ColorComponent from './ColorComponent';

const color = { colors: ["red", "red", "yellow", "green", "blue", "blue", "green", "red", "red", "red", "red","yellow", "red", "yellow", "green", "blue", "blue", "green"
] }

export default function MaxColor() {
    const map = {}

    // console.log(color.colors)
    for (let i of color.colors) {
        if (!map[i]) {
            map[i] = 1;
        }
        else {
            map[i] = map[i] + 1
        }
    }


    const entries = Object.entries(map);

    // Sort the array based on values
    entries.sort((a, b) => b[1] - a[1]);

    // Reconstruct the object if necessary
    const sortedObj = Object.fromEntries(entries);

    // console.log(sortedObj);
    const keys = Object.keys(sortedObj);
    const power = Object.values(sortedObj)

    // console.log(keys)
    // console.log(values)


    return (
        <div><div style={{display: 'flex'}}>
            {keys.map((color, index) => <ColorComponent key={index} value={color} power={power[index]} />)}
        </div></div>
    )
}
