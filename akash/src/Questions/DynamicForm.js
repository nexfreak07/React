import React from "react";
import { useState } from "react";

export default function DynamicForm() {

  const [emails, setEmails] = useState(['']);

  const handleAddEmail = () => {
    setEmails([...emails, '']);
  }

  const handleChangeEmail  = (index, value) => {
    const newEmail = [...emails]
    newEmail[index] = value;
    setEmails(newEmail)
  }

  const handleRemoveEmail  = (index) => {
    const newEmail = [...emails]
    newEmail.splice(index, 1);
    setEmails(newEmail);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Email : " +  emails.join(" , "));
  }

return <form onSubmit={handleSubmit}>
  {emails.map((email, index)=> <div key={index}>
    <input type="email" onChange={(e) => handleChangeEmail(index, e.target.value)}  value={email} />
    {index !=0  && (<button type="button" onClick={() => handleRemoveEmail(index)}>Remove</button>)}
    </div>)}
    
  



<button type="button" onClick={handleAddEmail}>Add</button>
<button type="submit">Submit</button>
</form>
}
