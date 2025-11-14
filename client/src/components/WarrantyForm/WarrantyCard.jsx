import React from "react";
import logo from "../../assets/Warranty_logo.jpg";
import stamp from "../../assets/stamp.jpeg";

const WarrantyCardTemplate = React.forwardRef(({ data, cardWidth }, ref) => {
  const {
    customerName = "",
    address = "",
    mobileNumber = "",
    email = "",
    state = "",
    city = "",
    selectedProduct = "",
    selectedVariety = "",
    sizeType = "standard",
    customLength = "",
    customBreadth = "",
    customHeight = "",
    length = "",
    breadth = "",
    height = "",
    totalQuantity = "",
    purchaseFrom = "",
    selectedStore = "",
    dealerName = "",
    orderNumber = "",
    invoiceDate = "",
    warranty = "",
  } = data || {};

  const displayLength = sizeType === "standard" ? length : customLength;
  const displayBreadth = sizeType === "standard" ? breadth : customBreadth;
  const displayHeight = sizeType === "standard" ? height : customHeight;

  return (
    <div
      ref={ref}
      style={{
        width: cardWidth || '800px',
        minHeight: '600px',
        padding: '32px',
        backgroundColor: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        lineHeight: '1.4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '15px'
      }}>
        <div>
          <img
            src={logo}
            alt="Sleep Fine Logo"
            style={{ height: '60px', width: 'auto', marginBottom: '10px' }}
          />
          <p style={{ margin: '3px 0', fontSize: '12px' }}>Customer Support: 08062181296</p>
          <p style={{ margin: '3px 0', fontSize: '12px' }}>Email: contact@sleepfineindia.com</p>
          <h1 style={{ margin: '5px 0', fontSize: '12px', fontWeight: 'bold' }}>
            Terms and Conditions apply
          </h1>
        </div>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            Warranty Card
          </h2>
        </div>
      </div>

      {/* Content */}
      <div style={{ 
        display: 'flex', 
        gap: '40px', 
        marginBottom: '30px',
        flexGrow: 1
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '16px' }}>Customer Details</h3>
          <p style={{ margin: '3px 0' }}>Name: {customerName}</p>
          <p style={{ margin: '3px 0' }}>Address: {address}</p>
          <p style={{ margin: '3px 0' }}>Mobile: {mobileNumber}</p>
          <p style={{ margin: '3px 0' }}>Email: {email}</p>
          <p style={{ margin: '3px 0' }}>State: {state}</p>
          <p style={{ margin: '3px 0' }}>City: {city}</p>
        </div>

        {/* Product Details */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '16px' }}>Product Details</h3>
          <p style={{ margin: '3px 0' }}>Product: {selectedProduct}</p>
          <p style={{ margin: '3px 0' }}>Variety: {selectedVariety}</p>
          <p style={{ margin: '3px 0' }}>Purchase From: {purchaseFrom}</p>
          {purchaseFrom === "Store" ? (
            <p style={{ margin: '3px 0' }}>Store Name: {selectedStore}</p>
          ) : (
            dealerName && <p style={{ margin: '3px 0' }}>Dealer Name: {dealerName}</p>
          )}
          <p style={{ margin: '3px 0' }}>Size Type: {sizeType}</p>
          <p style={{ margin: '3px 0' }}>Length: {displayLength}</p>
          <p style={{ margin: '3px 0' }}>Breadth: {displayBreadth}</p>
          <p style={{ margin: '3px 0' }}>Height: {displayHeight}</p>
        </div>
      </div>

      {/* Purchase Details */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '16px' }}>Purchase Details</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <p style={{ margin: '3px 0' }}>Order/Inv: {orderNumber}</p>
          <p style={{ margin: '3px 0' }}>Total Quantity: {totalQuantity}</p>
          <p style={{ margin: '3px 0' }}>Invoice Date: {invoiceDate}</p>
          <p style={{ margin: '3px 0' }}>Warranty Period: {warranty}</p>
        </div>
      </div>

      {/* Company Stamp */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '60px'
      }}>
        <img
          src={stamp}
          alt="Company Stamp"
          style={{
            height: '50px',
            width: 'auto',
            opacity: 0.75,
            filter: 'contrast(1.1) brightness(0.9)'
          }}
        />
      </div>
    </div>
  );
});

export default WarrantyCardTemplate;