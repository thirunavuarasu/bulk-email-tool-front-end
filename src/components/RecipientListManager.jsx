import React, { useState } from 'react';

const RecipientListManager = () => {
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');

  const handleAddRecipient = () => {
    if (newRecipient.trim()) {
      setRecipients([...recipients, newRecipient.trim()]);
      setNewRecipient('');
    }
  };

  const handleRemoveRecipient = (index) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Recipient List</h2>
      <div className="form-group">
        <input
          type="text"
          value={newRecipient}
          onChange={(e) => setNewRecipient(e.target.value)}
          placeholder="Add recipient"
          className="form-control"
        />
        <button onClick={handleAddRecipient} className="btn btn-primary mt-2">Add</button>
      </div>
      <ul className="list-group">
        {recipients.map((recipient, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {recipient}
            <button onClick={() => handleRemoveRecipient(index)} className="btn btn-danger btn-sm">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipientListManager;
