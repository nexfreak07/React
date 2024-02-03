import React from 'react'

export default function ItemComponent(props) {
  
    return (
    <div>
        <ul>{props.isFolder ? props.items.map((item) => (<li>{item.name}
        <ul>{item.isFolder ?  item.items.map(i => i.isFolder? <ItemComponent items={i.items} isFolder={i.isFolder}/> : <li>{i.name}</li>):  <li>{item.name}</li>}</ul>
        </li>)) : <li>{props.items.name}</li>}</ul>
    </div>
  )
}
