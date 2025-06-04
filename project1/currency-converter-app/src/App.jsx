// src/App.jsx

import React, { useState, useEffect } from 'react';

// Main App component for the Currency Converter
function App() {
    // Access the API key from environment variables
    // For Vite, environment variables must be prefixed with VITE_ and accessed via import.meta.env
    const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

    // State variables to manage the application's data
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Hardcoded list of common currencies for the dropdowns
    const currencies = [
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' },
        { code: 'JPY', name: 'Japanese Yen' },
        { code: 'CAD', name: 'Canadian Dollar' },
        { code: 'AUD', name: 'Australian Dollar' },
        { code: 'CHF', name: 'Swiss Franc' },
        { code: 'CNY', name: 'Chinese Yuan' },
        { code: 'INR', name: 'Indian Rupee' },
        { code: 'BRL', name: 'Brazilian Real' },
        { code: 'ZAR', name: 'South African Rand' },
    ];

    /**
     * Fetches the exchange rate between the selected 'from' and 'to' currencies.
     */
    const fetchExchangeRate = async () => {
        setLoading(true);
        setError(null);
        setConvertedAmount(null);

        // Check if API_KEY is available
        if (!API_KEY) {
            setError("API Key is missing. Please set VITE_EXCHANGE_RATE_API_KEY in your .env file.");
            setLoading(false);
            return;
        }

        // Construct the API URL using the fetched API_KEY
        // This example uses ExchangeRate-API.com's v6 endpoint, which is more current.
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                // Attempt to parse error message from API if available
                const errorData = await response.json();
                throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorData.error_type || 'Unknown error'}`);
            }
            const data = await response.json();

            // Ensure the rates object and target currency exist
            const rate = data.conversion_rates[toCurrency];

            if (rate) {
                setExchangeRate(rate);
                if (!isNaN(parseFloat(amount)) && parseFloat(amount) > 0) {
                    setConvertedAmount((parseFloat(amount) * rate).toFixed(2));
                }
            } else {
                setError(`Exchange rate for ${toCurrency} not found in the API response.`);
            }
        } catch (err) {
            setError(`Failed to fetch exchange rate: ${err.message}. Please check your API key and network connection.`);
            console.error("Error fetching exchange rate:", err);
        } finally {
            setLoading(false);
        }
    };

    // useEffect hook to fetch exchange rate whenever 'fromCurrency' or 'toCurrency' changes
    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetchExchangeRate();
        }
    }, [fromCurrency, toCurrency]);

    /**
     * Handles the click event of the "Convert" button.
     */
    const handleConvert = () => {
        if (amount === '' || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            setError('Please enter a valid amount.');
            setConvertedAmount(null);
            return;
        }
        fetchExchangeRate();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 font-inter">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                    Currency Converter
                </h1>

                {/* Amount Input */}
                <div className="mb-5">
                    <label htmlFor="amount" className="block text-gray-700 text-sm font-semibold mb-2">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                            setError(null);
                            setConvertedAmount(null);
                        }}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Currency Selection Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* From Currency */}
                    <div>
                        <label htmlFor="fromCurrency" className="block text-gray-700 text-sm font-semibold mb-2">
                            From
                        </label>
                        <select
                            id="fromCurrency"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.name} ({currency.code})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* To Currency */}
                    <div>
                        <label htmlFor="toCurrency" className="block text-gray-700 text-sm font-semibold mb-2">
                            To
                        </label>
                        <select
                            id="toCurrency"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.name} ({currency.code})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Convert Button */}
                <button
                    onClick={handleConvert}
                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    disabled={loading}
                >
                    {loading ? 'Converting...' : 'Convert'}
                </button>

                {/* Display Area for Converted Amount and Errors */}
                <div className="mt-6 text-center">
                    {error && (
                        <p className="text-red-600 text-sm mb-3 p-2 bg-red-100 rounded-md border border-red-200">
                            {error}
                        </p>
                    )}

                    {convertedAmount !== null && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <p className="text-gray-700 text-lg font-medium">
                                Converted Amount:
                            </p>
                            <p className="text-blue-800 text-3xl font-extrabold mt-1">
                                {convertedAmount} {toCurrency}
                            </p>
                            {exchangeRate && (
                                <p className="text-gray-500 text-sm mt-2">
                                    Current rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;