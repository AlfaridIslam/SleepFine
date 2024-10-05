import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const WarrantyCard = ({ data }) => {
  return (
    <div id="warranty-card" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Warranty Card</h2>
      <p>
        <strong>Customer Name:</strong> {data.customerName}
      </p>
      <p>
        <strong>Address:</strong> {data.address}
      </p>
      <p>
        <strong>Mobile Number:</strong> {data.mobileNumber}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Product:</strong> {data.selectedProduct}
      </p>
      <p>
        <strong>Variety:</strong> {data.selectedVariety}
      </p>
      <p>
        <strong>Purchase From:</strong> {data.purchaseFrom}
      </p>
      {data.purchaseFrom === "Store" ? (
        <p>
          <strong>Store Name:</strong> {data.selectedStore}
        </p>
      ) : (
        data.purchaseFrom === "Dealer" && (
          <p>
            <strong>Dealer Name:</strong> {data.dealerName}
          </p>
        )
      )}
      <p>
        <strong>Order Number:</strong> {data.orderNumber}
      </p>
      <p>
        <strong>Invoice Date:</strong> {data.invoiceDate}
      </p>
      <p>
        <strong>Warranty Period:</strong> {data.warranty}
      </p>
    </div>
  );
};

export default WarrantyCard;
