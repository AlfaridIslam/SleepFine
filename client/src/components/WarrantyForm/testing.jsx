try {
      // Prepare data for the API
      const apiData = {
        invoiceDate: formData.invoiceDate,
        name: formData.customerName,
        number: formData.mobileNumber,
        email: formData.email,
        address: formData.address,
        state: formData.state,
        city: formData.city,
        product: formData.selectedProduct,
        variety: formData.selectedVariety,
        length: formData.sizeType === "standard" ? parseInt(formData.length) : parseInt(formData.customLength),
        breadth: formData.sizeType === "standard" ? parseInt(formData.breadth) : parseInt(formData.customBreadth),
        height: formData.sizeType === "standard" ? parseInt(formData.height) : parseInt(formData.customHeight),
        purchaseFrom: formData.purchaseFrom,
        store: formData.selectedStore || null,
        dealer: formData.dealerName || null,
        orderNumber: formData.orderNumber,
        totalQuantity: parseInt(formData.totalQuantity),
        warrantyPeriod: formData.warranty,
        purchaseDate: formData.invoiceDate
      };

      // Call backend API
      const response = await axios.post(
        "http://localhost:3000/api/v1/warranty/generate-pdf",
        apiData
      );

      // Handle PDF from API response
      if (response.data && response.data.pdf) {
        const blob = new Blob([response.data.pdf], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Warranty_Card_${formData.customerName.replace(/\s+/g, "_")}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('PDF data not received from server');
      }

      setSuccessMessage("Your warranty form has been generated and saved successfully!");
      setFormData(initialFormState);
      setVarieties([]);

    } catch (error) {
      console.error("Error:", error);
      let errorMessage = "An error occurred while processing your request. Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Unable to connect to the server. Please check your internet connection.";
      }
      setFormError(errorMessage);
    } finally {
      setIsLoading(false);
    }