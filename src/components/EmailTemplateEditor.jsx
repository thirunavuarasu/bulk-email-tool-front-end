import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EmailTemplateEditor = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSave = async () => {
    try {
      await axios.post('/api/email-templates', { content });
      // Handle success
      console.log('Template saved successfully');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Email Template</h2>
      <Editor
        apiKey="your-tinymce-api-key" // Replace with your actual API key
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: 'link image code',
          toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={handleSave} className="btn btn-primary">Save Template</button>
    </div>
  );
};

export default EmailTemplateEditor;
