import React from 'react'
import { useState } from 'react'

export default function () {

    const [list1, setList1] = useState([
    { title: 'Item1', ischecked: false }, 
    { title: 'Item2', ischecked: false }, 
    { title: 'Item2', ischecked: false }])

    const [list2, setList2] = useState([{ title: 'ItemA' }, { title: 'ItemB' }, { title: 'ItemC' }])

    const checkHandler = (idx) => {
        const updatedlist1 = [...list1]
        updatedlist1[idx].ischecked = !updatedlist1[idx].ischecked;
        setList1(updatedlist1)
    }

    const swapHandler= () => {
        const updatedlist1 = [...list1]
        const updatedlist2 = [...list2];


        // For each is taken here because we need to update the array original (updated list 1 and updated list 2)
        updatedlist1.forEach((item, index)=>{
            if(item.ischecked){
                let temp = item.title;
                item.title = updatedlist2[index].title
                updatedlist2[index].title = temp; 
            }
        })
        setList1(updatedlist1);
        setList2(updatedlist2)

    }


    return (
        <div>
            <h3>List 1</h3>
            <ul>{list1.map((item, idx) => (<li key={idx}>

                <input type='checkbox' checked={item.ischecked} onChange={()=> checkHandler(idx)}/>
                {item.title
                }</li>))}</ul>


            <h3>List 2</h3>
            <ul>{list2.map((item, idx) => (<li key={idx}>{item.title}</li>))}</ul>

            <button onClick={swapHandler}>Swap</button>

        </div>
    )
}
