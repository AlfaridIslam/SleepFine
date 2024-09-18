import React, { useState } from "react";
import axios from 'axios';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      PhoneNumber: number, // Ensure this matches your Google Sheet's exact header
      Message: message
    };

    axios.post('https://sheet.best/api/sheets/4eec47ba-281e-42a2-8243-d961918cb84e', data)
      .then((response) => {
        console.log("Data sent successfully:", response);
        setName('');
        setNumber('');
        setMessage('');
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="xl:grid xl:justify-center gap-10 bg-[#E8CBC0] p-4 ">
      <div className="flex justify-center text-3xl font-sans">CONTACT FORM</div>

      <div className="border-2 p-8 rounded-lg border-black">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">NAME</label><br />
          <input 
            type="text" 
            name='name' 
            placeholder="Enter Your Name" 
            className="border-[1px] h-10 w-80 rounded-lg p-3" 
            required 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          /><br /><br />

          <label htmlFor="number">PHONE NUMBER</label><br />
          <input 
            type="tel"  // Changed to "tel" for phone numbers
            placeholder="Enter Your Number" 
            name='number' 
            className="border-[1px] h-10 w-80 rounded-lg p-3" 
            required 
            onChange={(e) => setNumber(e.target.value)} 
            value={number} 
          /><br /><br />

          <label htmlFor="message">MESSAGE</label><br />
          <textarea 
            placeholder="Enter Your Message" 
            name="message" 
            className="border-[1px] h-28 w-80 rounded-lg p-3" 
            onChange={(e) => setMessage(e.target.value)} 
            value={message}
          ></textarea><br /><br />

          <button type="submit" className='xl:bg-orange-400 w-[320px] rounded-lg h-10'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
