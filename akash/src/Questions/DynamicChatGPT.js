// EmailForm.js

import React, { useState } from 'react';

const EmailForm = () => {
  const [emails, setEmails] = useState(['']);

  const handleAddEmail = () => {
    setEmails([...emails, '']);

    

  };

  const handleRemoveEmail = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  const handleChangeEmail = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted emails: ' + emails.join(', ') + "Length" + emails.length);
  };

  return (
    <form onSubmit={handleSubmit}>
      {emails.map((email, index) => (
        <div key={index}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleChangeEmail(index, e.target.value)}
          />
          {emails.length > 1 && (
            <button type="button" onClick={() => handleRemoveEmail(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddEmail}>
        Add
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
