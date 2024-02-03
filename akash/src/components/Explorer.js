import React from 'react'
import ItemComponent from './ItemComponent';




export default function Explorer() {

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

    const items = explorer["items"];

    return (
        <div>
            <ul><li>{explorer.name}</li></ul>
            <ul>
            



           {explorer.isFolder ?  <ItemComponent items={explorer.items} isFolder={explorer.isFolder}/> : <li>{explorer.name}</li>}
            {/* <ul>{items.map((item) => (<li>{item.name}
            
            <ul>{item.isFolder && item.items.map(folder => <li>{folder.name}
            
            <ul></ul>
            </li>)}</ul>
            </li>))}</ul> */}
            </ul></div>
    )
}
