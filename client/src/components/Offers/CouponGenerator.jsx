import React, { useState } from "react";

// Function to generate random coupon code
const CouponGenerator = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let coupon = "";
  for (let i = 0; i < 10; i++) {
    coupon += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return coupon;
};

const SendCoupon = () => {
  const [couponCode, setCouponCode] = useState("");

  // Generate a new coupon when the component is rendered
  const handleGenerateCoupon = () => {
    const newCoupon = CouponGenerator();
    setCouponCode(newCoupon);
  };

  // Function to generate WhatsApp URL
  const sendWhatsAppMessage = () => {
    const phoneNumber = "+918062181296"; 
    const message = `My exclusive mattress coupon code is: ${couponCode}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (

    <div className="  mr-10">
      <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1734677979/offers_uiakdy.jpg" alt="" className="w-[500px] " />
    {/* <div className="text-center mt-4">
      <h1 className="text-2xl font-bold mb-4">Get Your Exclusive Coupon </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleGenerateCoupon}
      >
        Generate Coupon
      </button>
      {couponCode && (
        <div className="mt-6">
          <p className="text-lg font-semibold mb-4">Your Coupon Code: {couponCode}</p>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={sendWhatsAppMessage}
          >
            Send via WhatsApp
          </button>
        </div>
      )}
    </div> */}

    </div>
  );
};

export default SendCoupon;
