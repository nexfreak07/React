import React, { useState } from 'react'

export default function DynamicForm3() {

    const [emails, setEmails] = useState([]) // As we have '' initially we see a input, if this is removed we will see no input 
    
    
    const handleChange = (index, value) => {
        // Responsible to add data to the array
        const newEmail = [...emails];
        newEmail[index] = value // Replace the value by the --- 'a', 'ak', 'aka' like this its insertinge we are replacing the second last character by the latest
        setEmails(newEmail)

        console.log("New emails",newEmail)
        console.log("Emails",emails)
    }

    const addHandler = () => {

        // Responsible for to add new Input field
        console.log("Emails Before",emails)
        
        setEmails([...emails, '']) // The reason of adding '' is to render a new input field if not done on add this will just update the email array
        console.log("Emails",emails)
    } 

    // console.log(emailData)

    // console.log("Emails", emails)

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Emails -> " + emails.join(", "))
    }

    const removeHandler = (index) => {

        // Removal By Splice
    //    const newEmail = [...emails];
    //    newEmail.splice(index, 1);
    //   

    //    Remove by filter

    const newEmail = emails.filter((e,i)=> i!==index)

    setEmails(newEmail)
    

    }


  return (
    <div>
        <form onSubmit={submitHandler}>
            {emails.map((email, index)=>{ return <div key={index}>
                <input placeholder='email' type='text' onChange={(e)=>{handleChange(index, e.target.value)}}/>

                {/* Below case is you get remove on all buttons once you exceed the input by 1 i.e input > 1
                
                
                    But if you put email.length > 0 you can actually have 0 inputs or able to remove al buttons 
                */}
                {/* {emails.length > 0 && <button onClick={()=>{removeHandler(index)}}>Remove</button>} */}

                
                
                
                {/* Below use case is we have a input by default, but we need to have it basis of the buttons like 1- input will not have but rest 2,3,4,5... will have
                    in that case the below is used
                */}

               { index > 0 ? <button onClick={()=>{removeHandler(index)}}>Remove</button> : null} 

            </div>})}
            <button onClick={addHandler} type='button'>Add</button>
            <button type='submit'>Submit</button>

        </form>

    </div>
  )
}
