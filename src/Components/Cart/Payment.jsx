import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import PhonePeLogo from '../Home/phonepe.png'; // Import your PhonePe logo
import PaytmLogo from '../Home/paytm.png'; // Import your Paytm logo
import GooglePayLogo from '../Home/googlepay.avif'; // Import your Google Pay logo

function PaymentScreen() {
  useEffect(() => {
    // Get amount from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount');
    console.log('Amount:', amount);
    // You can use the amount retrieved here as needed
  }, []); // Run only once on component mount

  const handlePayment = (method) => {
    // Set the amount to be paid
    const amount = 100; // Example: 100 INR
    let paymentUrl = '';

    // Logic to handle payment based on the selected method
    switch(method) {
      case 'phonepe':
        paymentUrl = `upi://pay?pa=9166033002@ybl&pn=Ashu&cu=INR&am=${amount}`;
        break;
      case 'paytm':
        paymentUrl = `upi://pay?pa=9166033002@paytm&pn=Ashu&cu=INR&am=${amount}`;
        break;
      case 'googlepay':
        paymentUrl = `upi://pay?pa=9166033002@paytm&pn=Ashu&cu=INR&am=${amount}`;
        break;
      default:
        console.error('Invalid payment method');
    }

    // Open the payment URL in a new window
    if (paymentUrl) {
      window.open(paymentUrl);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Select Payment Method</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ fontWeight: 'bold', padding: '10px 20px',background: '#fff',color:"#3498db"}}
          onClick={() => handlePayment('phonepe')}
        >
          <img src={PhonePeLogo} alt="PhonePe Logo" style={{ width: '50px', marginBottom: '10px', height:' 50px' }} />
          PhonePe
        </Button>
        {/* Add similar buttons for Paytm and Google Pay */}
      </div>
    </div>
  );
}

export default PaymentScreen;
