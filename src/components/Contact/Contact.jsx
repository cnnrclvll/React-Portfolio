import { useState } from 'react';
import Button from '@mui/material/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const bundledMessage = {name, email, message};
    console.log(bundledMessage);
    localStorage.setItem('contact', JSON.stringify(bundledMessage));
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
      </label>
        <input type="text" required={true} value={name} onChange={(e) => setName(e.target.value)} />

      <label>
        Email:
      </label>
        <input type="email" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>
        Message:
      </label>
        <textarea value={message} required={true} onChange={(e) => setMessage(e.target.value)}></textarea>

        <Button type='submit'>Submit</Button>
    </form>
  );
};

export default Contact;
