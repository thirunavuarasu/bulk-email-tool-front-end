import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EmailTemplateEditor from './components/EmailTemplateEditor';
import RecipientListManager from './components/RecipientListManager';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-template" element={<EmailTemplateEditor />} />
        <Route path="/manage-recipients" element={<RecipientListManager />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default App;
