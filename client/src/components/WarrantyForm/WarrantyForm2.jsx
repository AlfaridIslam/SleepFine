import React from "react";
import QRcode from "../../assets/qr-code.jpeg";
import logo from "../../assets/SleepFinelogoR.png";
import warrantyQR from "../../assets/barcode-warranty-registration.jpg";

const WarrantyCardTemplate = React.forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-full sm:w-[595px] sm:h-[742px] xl:w-[1100px] xl:h-[990px] p-4 sm:p-8 xl:p-[66px] bg-white flex flex-col justify-between
      sm:m-[32px] xl:m-0"
    >
      {/* Header */}
      <div className="bg-blue-300 text-white p-2 sm:p-4 xl:p-6 flex items-center justify-between gap-20">
        <img
          src={logo}
          alt="Sleep Fine Logo"
          className="h-8  sm:h-12  xl:h-16 "
        />
        <img
          src={warrantyQR}
          alt="QR Code"
          className="h-8  sm:h-12  xl:h-16 "
        />
      </div>

      {/* Content */}
      <div className="flex-grow mt-4 sm:mt-6 xl:mt-3 sm:space-y-4 xl:ml-7 xl:p-4 xl:mb-0">
        <h1>Terms and Conditions apply</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg sm:text-xl xl:text-2xl">Warranty Card</h2>
            <h3 className="font-semibold">Customer Details</h3>
            <p>Name: John Doe</p>
            <p>Address: 1234 Sleepwell St, Dream City</p>
            <p>Mobile: +91 9876543210</p>
            <p>Email: johndoe@example.com</p>
            <p>State: Karnataka</p>
            <p>City: Bangalore</p>
          </div>
          <div>
            <h3 className="font-semibold">Product Details</h3>
            <p>Product: Premium Mattress</p>
            <p>Variety: King Size</p>
            <p>Purchase From: Store</p>
            <p>Store Name: SleepFine Store</p>
            <p>Size:</p>
            <p>Length: 200cm</p>
            <p>Breadth: 180cm</p>
            <p>Height: 30cm</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Purchase Details</h3>
          <p>Order Number: 1234567890</p>
          <p>Invoice Date: 08-Oct-2024</p>
          <p>Warranty Period: 10 years</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-0 mb-2 ml-4 sm:m-[40px]">
        <div className="text-xs sm:m-[32px]">
          <p className="font-semibold">Contact Us:</p>
          <p>Email: contact@sleepfineindia.com</p>
          <p>Phone: 08062181296</p>
        </div>
        <div className="text-center">
          <img
            src={QRcode}
            alt="QR code"
            className="h-16 w-16 sm:h-20 sm:w-20 xl:h-18 xl:w-18"
          />
          <p className="mt-2 text-xs sm:text-sm xl:text-base sm:-ml-[10px]">
            Scan for website
          </p>
        </div>
      </div>
    </div>
  );
});

// Setting the display name explicitly
WarrantyCardTemplate.displayName = "WarrantyCardTemplate";

export default WarrantyCardTemplate;
