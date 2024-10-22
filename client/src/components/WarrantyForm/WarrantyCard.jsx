import React from "react";
import QRcode from "../../assets/qr-code.jpeg";
import logo from "../../assets/Warranty_logo.jpg";
import warrantyQR from "../../assets/barcode-warranty-registration.jpg";

const WarrantyCardTemplate = React.forwardRef(({ data }, ref) => {
  const {
    customerName,
    address,
    mobileNumber,
    email,
    state,
    city,
    selectedProduct,
    selectedVariety,
    sizeType,
    customLength,
    customBreadth,
    customHeight,
    length,
    breadth,
    height,
    purchaseFrom,
    selectedStore,
    dealerName,
    orderNumber,
    invoiceDate,
    warranty,
  } = data;

  const displayLength = sizeType === "standard" ? length : customLength;
  const displayBreadth = sizeType === "standard" ? breadth : customBreadth;
  const displayHeight = sizeType === "standard" ? height : customHeight;

  return (
    <div
      ref={ref}
      className="w-full sm:w-[595px] sm:h-[742px] xl:w-[1100px] xl:h-[990px] p-4 sm:p-8 xl:p-[66px] bg-white flex flex-col justify-between
       sm:m-[32px] xl:m-0"
    >
      {/* Header */}
      <div className="  p-2 sm:p-4 xl:p-6 flex items-center justify-between ">

        <div>
        <img
          src={logo}
          alt="Sleep Fine Logo"
          className="h-8  sm:h-12  xl:h-20  xl:w-96"
        />
         <p>Customer Support: 08062181296</p>
         <p>Email: contact@sleepfineindia.com</p>
        
       
        </div>
        <div>
        <h2 className="text-lg sm:text-xl xl:text-4xl -mt-10">Warranty Card</h2>
        </div>

       
        
       
      </div>

      {/* Content */}
      <div className="flex-grow mt-4 sm:mt-6 xl:mt-3 sm:space-y-4 xl:ml-7 xl:p-4 xl:mb-0">
        <h1>Terms and Conditions apply</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
           
            <h3 className="font-semibold">Customer Details</h3>
            <p>Name: {customerName}</p>
            <p>Address: {address}</p>
            <p>Mobile: {mobileNumber}</p>
            <p>Email: {email}</p>
            <p>State: {state}</p>
            <p>City: {city}</p>
          </div>
          <div>
            <h3 className="font-semibold">Product Details</h3>
            <p>Product: {selectedProduct}</p>
            <p>Variety: {selectedVariety}</p>
            <p>Purchase From: {purchaseFrom}</p>
            {purchaseFrom === "Store" ? (
              <p>Store Name: {selectedStore}</p>
            ) : (
              dealerName && <p>Dealer Name: {dealerName}</p>
            )}
            <p>Size Type: {sizeType}</p>
            <p>Length: {displayLength}</p>
            <p>Breadth: {displayBreadth}</p>
            <p>Height: {displayHeight}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Purchase Details</h3>
          <p>Order/Inv: {orderNumber}</p>
          <p>Invoice Date: {invoiceDate}</p>
          <p>Warranty Period: {warranty}</p>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
});

export default WarrantyCardTemplate;
