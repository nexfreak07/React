import React from 'react'


import React from 'react'
import Items from './components/Items';
import FormPractice from './components/FormPractice';

const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: []
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

export default function App() {
  return (
    <div>
      <ul>
        
        <li>{explorer.name}</li>
        <Items isFolder={explorer.isFolder} items={explorer.items}></Items>
      
      </ul>

    </div>

  )
}












//---------------------------------------------Component 2 ------------------------------------------------------


export default function Items(props) {
  return (
    <div>
       
        <ul>{props.items.map((item)=>(<ul><li>{item.name}</li> {item.isFolder && <Items items={item.items} isFolder={item.isFolder}/>}</ul>))}</ul>
        
    </div>
  )
}
