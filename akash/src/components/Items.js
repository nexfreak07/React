import React from 'react'

export default function Items(props) {
  return (
    <div>
       
        <ul>{props.items.map((item)=>(<ul><li>{item.name}</li> {item.isFolder && <Items items={item.items} isFolder={item.isFolder}/>}</ul>))}</ul>
        
    </div>
  )
}
