import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    if (!amount || !paymentMethod) {
      alert("Please fill in all fields.");
    } else {
      alert(`Thank you for your donation of $${amount} using ${paymentMethod}!`);
    }
  };

  return (
    <div style={styles.container}>
      {/* Back Button */}
      <Link to="/" style={styles.backButton}>Back</Link>

      <h1 style={styles.heading}>Support Our Cause</h1>
      <p style={styles.subheading}>Your contribution helps us continue our work.</p>

      {/* Payment Methods */}
      <div style={styles.paymentMethods}>
        <h2 style={styles.paymentTitle}>Select Payment Method</h2>

        <div style={styles.paymentOption}>
          <input 
            type="radio" 
            id="visa" 
            name="payment" 
            value="Visa"
            onChange={handlePaymentMethodChange}
            style={styles.radioButton} 
          />
          <label htmlFor="visa" style={styles.label}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Logo_Visa.png" 
              alt="Visa" 
              style={styles.paymentIcon}
            />
            Visa
          </label>
        </div>

        <div style={styles.paymentOption}>
          <input 
            type="radio" 
            id="mastercard" 
            name="payment" 
            value="MasterCard"
            onChange={handlePaymentMethodChange}
            style={styles.radioButton} 
          />
          <label htmlFor="mastercard" style={styles.label}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/MasterCard-Logo.svg" 
              alt="MasterCard" 
              style={styles.paymentIcon}
            />
            MasterCard
          </label>
        </div>

        <div style={styles.paymentOption}>
          <input 
            type="radio" 
            id="paypal" 
            name="payment" 
            value="PayPal"
            onChange={handlePaymentMethodChange}
            style={styles.radioButton} 
          />
          <label htmlFor="paypal" style={styles.label}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/PayPal_logo_2014.png" 
              alt="PayPal" 
              style={styles.paymentIcon}
            />
            PayPal
          </label>
        </div>

        <div style={styles.paymentOption}>
          <input 
            type="radio" 
            id="orangemoney" 
            name="payment" 
            value="Orange Money"
            onChange={handlePaymentMethodChange}
            style={styles.radioButton} 
          />
          <label htmlFor="orangemoney" style={styles.label}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Orange_Money_logo.svg" 
              alt="Orange Money" 
              style={styles.paymentIcon}
            />
            Orange Money
          </label>
        </div>
      </div>

      {/* Donation Amount */}
      <div style={styles.amountContainer}>
        <label htmlFor="amount" style={styles.amountLabel}>Donation Amount:</label>
        <input 
          type="number" 
          id="amount" 
          value={amount} 
          onChange={handleAmountChange} 
          style={styles.amountInput} 
          placeholder="Enter amount" 
          min="1"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button onClick={handleSubmit} style={styles.submitButton}>Donate Now</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Make the container relative for positioning the back button
  },
  backButton: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '1.2em',
    color: '#4CAF50',
    textDecoration: 'none',
    padding: '5px 10px',
    backgroundColor: '#fff',
    border: '1px solid #4CAF50',
    borderRadius: '5px',
  },
  heading: {
    color: '#333',
    fontSize: '2em',
  },
  subheading: {
    color: '#777',
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  paymentMethods: {
    marginBottom: '30px',
  },
  paymentTitle: {
    fontSize: '1.5em',
    color: '#333',
  },
  paymentOption: {
    marginBottom: '10px',
    textAlign: 'left',
    display: 'inline-block',
    paddingLeft: '20px',
  },
  radioButton: {
    marginRight: '10px',
  },
  label: {
    fontSize: '1.2em',
    color: '#555',
  },
  paymentIcon: {
    width: '30px',
    height: 'auto',
    marginRight: '10px',
  },
  amountContainer: {
    marginBottom: '20px',
  },
  amountLabel: {
    fontSize: '1.2em',
    color: '#333',
  },
  amountInput: {
    width: '80%',
    padding: '10px',
    fontSize: '1.2em',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  submitButton: {
    padding: '15px 30px',
    fontSize: '1.5em',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default DonatePage;
