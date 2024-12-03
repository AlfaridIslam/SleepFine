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
    totalQuantity,
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
      className="w-full sm:w-full sm:h-full xl:w-[1100px] xl:h-[990px] p-4 sm:p-8  bg-white flex flex-col justify-between sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr_auto] xl:grid-cols-none xl:m-0 sm:ml-10"
    >
      {/* Header */}
      <div className="p-2 sm:p-4 xl:p-6 flex items-center justify-between sm:col-span-1 sm:row-span-1 xl:gap-60 ">
        <div>
          <img
            src={logo}
            alt="Sleep Fine Logo"
            className="h-8 sm:h-12 xl:h-20 xl:w-96"
          />
          <p className="-ml-2">Customer Support: 08062181296</p>
          <p className="-ml-2">Email: contact@sleepfineindia.com</p>
          <h1 className="sm:mt-4 xl:mt-4 xl:-ml-2 sm:-ml-2  ">
            Terms and Conditions apply
          </h1>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl xl:text-4xl xl-mt-10 sm:-mt-16 sm:-ml-40  ">
            Warranty Card
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow sm:mt-4  sm:space-y-4     sm:grid sm:grid-cols-1  sm:gap-4 sm:col-span-1 sm:mr-40 xl:mr-0  ">
        {/* Customer Details */}

        <div className=" xl:flex xl:gap-40 xl:ml-10">
          <div className="sm:col-span-1">
            <h3 className="font-semibold">Customer Details</h3>
            <p>Name: {customerName}</p>
            <p>Address: {address}</p>
            <p>Mobile: {mobileNumber}</p>
            <p>Email: {email}</p>
            <p>State: {state}</p>
            <p>City: {city}</p>
          </div>

          {/* Product Details */}
          <div className="sm:col-span-1 sm:mt-8 xl:mt-0 ">
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
      </div>

      {/* Purchase Details */}
      <div className="sm:col-span-1 sm:mt-4 xl:-my-[420px] xl:ml-10 sm:mr-40 xl:mr-0">
        <h3 className="font-semibold">Purchase Details</h3>
        <p>Order/Inv: {orderNumber}</p>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Invoice Date: {invoiceDate}</p>
        <p>Warranty Period: {warranty}</p>
      </div>

      {/* Footer (if any) */}
    </div>
  );
});

export default WarrantyCardTemplate;


