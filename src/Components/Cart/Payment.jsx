import React from 'react';
import { Button } from '@mui/material';
import PhonePeLogo from '../Home/phonepe.png'; // Import your PhonePe logo
import PaytmLogo from '../Home/paytm.png'; // Import your Paytm logo
import GooglePayLogo from '../Home/googlepay.avif'; // Import your Google Pay logo

function PaymentScreen() {
  const handlePayment = (method) => {
    // Logic to handle payment based on the selected method
    switch(method) {
      case 'phonepe':
        window.open('upi://pay?pa=9694668873@paytm&pn=Ashu&cu=INR');
        break;
      case 'paytm':
        window.open('upi://pay?pa=9694668873@paytm&pn=Ashu&cu=INR');
        break;
      case 'googlepay':
        window.open('upi://pay?pa=9694668873@paytm&pn=Ashu&cu=INR');
        break;
      default:
        console.error('Invalid payment method');
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
          <img src={PhonePeLogo} alt="PhonePe Logo" style={{ width: '50px', marginBottom: '10px',
        height:' 50px' }} />
          PhonePe
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ fontWeight: 'bold', padding: '10px 20px',background: '#fff',color:"#3498db"}}
          onClick={() => handlePayment('paytm')}
        >
          <img src={PaytmLogo} alt="Paytm Logo" style={{ width: '50px',height:'50px', marginBottom: '10px' }} />
          Paytm
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ fontWeight: 'bold', padding: '10px 20px',background: '#fff',color:"#3498db"}}
          onClick={() => handlePayment('googlepay')}
        >
          <img src={GooglePayLogo} alt="Google Pay Logo" style={{ width: '50px', marginBottom: '10px' ,height:'50px'}} />
          Google Pay
        </Button>
      </div>
    </div>
  );
}

export default PaymentScreen;
