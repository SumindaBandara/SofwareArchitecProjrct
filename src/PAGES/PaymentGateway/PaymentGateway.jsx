import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendarAlt, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardType, setCardType] = useState(null);

  // Detect card type based on card number
  const detectCardType = (number) => {
    const cardTypes = {
      visa: /^4[0-9]{0,}$/,
      mastercard: /^5[1-5][0-9]{0,}$/,
      amex: /^3[47][0-9]{0,}$/,
    };

    if (cardTypes.visa.test(number)) return 'visa';
    if (cardTypes.mastercard.test(number)) return 'mastercard';
    if (cardTypes.amex.test(number)) return 'amex';
    return null;
  };

  // Update card type and validate card number
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(value);
    setCardType(detectCardType(value));
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setExpiryDate(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(value);
  };

  const handlePaymentSubmit = () => {
    alert('Payment processed');
    window.location.href = "/";
  };

  // Helper to get card icon
  const getCardIcon = () => {
    switch (cardType) {
      case 'visa':
        return faCcVisa;
      case 'mastercard':
        return faCcMastercard;
      case 'amex':
        return faCcAmex;
      default:
        return faCreditCard;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className=" flex flex-col items-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Payment Gateway</h2>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
        <div className="flex items-center bg-gray-50 border rounded-md px-3 py-2 focus-within:border-blue-500 transition-colors">
          <FontAwesomeIcon icon={getCardIcon()} className="text-gray-500 mr-2" />
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>

      <div className="flex w-full space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
          <div className="flex items-center bg-gray-50 border rounded-md px-3 py-2 focus-within:border-blue-500 transition-colors">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 mr-2" />
            <input
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              maxLength="5"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
          <div className="flex items-center bg-gray-50 border rounded-md px-3 py-2 focus-within:border-blue-500 transition-colors">
            <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength="3"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
        <div className="flex items-center bg-gray-50 border rounded-md px-3 py-2 focus-within:border-blue-500 transition-colors">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="Cardholder Name"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>

      <button
        onClick={handlePaymentSubmit}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 active:scale-95 transition-transform"
      >
        Pay Now
      </button>
    </div>
    </div>
  );
}

export default PaymentGateway;