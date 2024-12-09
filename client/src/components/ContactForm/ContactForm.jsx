import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Phone: phone,
      Product: product
    };

    // Making the POST request only when the form is submitted
    axios
      .post('https://api.sheetbest.com/sheets/f6c087ef-7190-4e8f-a6f2-0803e4fa8066', data)
      .then((response) => {
        console.log(response);

        // Clearing the form inputs after successful submission
        setName('');
        setPhone('');
        setProduct('');
      })
      .catch((error) => {
        console.error('There was an error submitting the form:', error);
      });
  };

  return (
    <div className='xl:flex xl:justify-center xl:gap-10 text-white sm:grid sm:place-items-center sm:h-screen xl:ml-0 xl:mt-0 sm:-mt-10 xl:w-full sm:w-[165%]'>
    <div className="sm:grid sm:place-items-center">
      <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1728112271/connectus-img_sxn10y.png" alt="" className="xl:w-[100%] xl:h-[60vh] sm:w-[190%] sm:h-[30vh]" />
    </div>
  
    <div className="sm:grid sm:place-items-center">
      <form autoComplete="off" onSubmit={submitHandler} className='border-[0px] xl:px-6 xl:py-10 bg-slate-800 rounded-lg xl:mt-4 sm:p-20'>
        <label>NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-60 h-10 rounded-lg text-black"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br /> <br /> <br />
  
        <label>PHONE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          placeholder="Enter your phone"
          className=" w-60 h-10 rounded-lg  text-black"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <br /> <br /> <br /> <br />
  
        <label>PRODUCT &nbsp;</label> <br />
        <textarea
          placeholder="Enter your product "
          className="w-60 h-28 rounded-lg ml-20 -mt-10  text-black"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        ></textarea>
        <br />
        <br />
        <br />
  
        <div className="w-80 h-8 bg-orange-400 rounded-lg flex justify-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default ContactForm;
