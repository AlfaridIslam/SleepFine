import React from "react";
import { QRCodeSVG } from "qrcode.react";

import logo from "../../assets/SleepFinelogoR.png";

const WarrantyCardTemplate = React.forwardRef(({ data }, ref) => {
  const {
    customerName,
    address,
    mobileNumber,
    email,
    selectedProduct,
    selectedVariety,
    purchaseFrom,
    selectedStore,
    dealerName,
    orderNumber,
    invoiceDate,
    warranty,
  } = data;

  return (
    <div ref={ref} className="w-[595px] h-[842px] p-8 bg-white">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Sleep Fine</h1>
        </div>
        <img src={logo} alt="Sleep Fine Logo" className="h-12" />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl">Warranty Card</h2>
            <h3 className="font-semibold">Customer Details</h3>
            <p>Name: {customerName}</p>
            <p>Address: {address}</p>
            <p>Mobile: {mobileNumber}</p>
            <p>Email: {email}</p>
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
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Purchase Details</h3>
          <p>Order Number: {orderNumber}</p>
          <p>Invoice Date: {invoiceDate}</p>
          <p>Warranty Period: {warranty}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
        <div>
          <p className="font-semibold">Contact Us:</p>
          <p>Email: support@sleepfine.com</p>
          <p>Phone: 1-800-SLEEP-FINE</p>
        </div>
        <div className="text-center">
          <QRCodeSVG value="https://sleepfineindia.com/" size={100} />
          <p className="mt-2 text-sm">Scan for website</p>
        </div>
      </div>
    </div>
  );
});

export default WarrantyCardTemplate;
