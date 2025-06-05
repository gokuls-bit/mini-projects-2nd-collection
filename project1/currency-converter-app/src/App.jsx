import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

const CurrencyConverterApp = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [alertRate, setAlertRate] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [alertTriggered, setAlertTriggered] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);

  const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
      .then((res) => {
        if (res.data && res.data.supported_codes) {
          setCurrencyList(res.data.supported_codes);
        }
      })
      .catch((err) => console.error("Error fetching currency codes", err));
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`
        )
        .then((response) => {
          if (response.data && response.data.conversion_rate) {
            const rate = response.data.conversion_rate;
            setExchangeRate(rate);
            setConvertedAmount((parseFloat(amount) * rate).toFixed(4));

            if (alertRate > 0 && rate >= alertRate && !alertTriggered) {
              alert(`Alert: 1 ${fromCurrency} = ${rate} ${toCurrency}`);
              setAlertTriggered(true);
            }
          }
        })
        .catch((error) => console.error("Error fetching pair rate:", error));
    }
  }, [fromCurrency, toCurrency, amount, alertRate]);

  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/history/${fromCurrency}/${toCurrency}`
      )
      .then((response) => {
        if (response.data && response.data.conversion_rates) {
          const data = response.data.conversion_rates;
          const formattedData = Object.entries(data).map(([date, rate]) => ({
            date,
            rate,
          }));
          setChartData(formattedData.slice(-10));
        } else {
          setChartData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
        setChartData([]);
      });
  }, [fromCurrency, toCurrency]);

  return (
    <div className="app">
      <h2 className="title">🌐 Currency Converter</h2>
      <div className="converter enhanced-box">
        <div className="form-row">
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="input-field"
            placeholder="Enter amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
              setAlertTriggered(false);
            }}
            className="select-field"
          >
            {currencyList.map(([code, name]) => (
              <option key={code} value={code}>
                {code} — {name}
              </option>
            ))}
          </select>
          <span className="arrow">➡</span>
          <select
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
              setAlertTriggered(false);
            }}
            className="select-field"
          >
            {currencyList.map(([code, name]) => (
              <option key={code} value={code}>
                {code} — {name}
              </option>
            ))}
          </select>
        </div>

        <div className="result">
          {convertedAmount !== null && (
            <p>
              💱 {amount} {fromCurrency} = <strong>{convertedAmount}</strong> {toCurrency}
            </p>
          )}
        </div>

        <div className="alert-box">
          <h4>📢 Set Exchange Rate Alert</h4>
          <input
            type="number"
            min="0"
            step="0.0001"
            value={alertRate}
            onChange={(e) => {
              setAlertRate(parseFloat(e.target.value) || 0);
              setAlertTriggered(false);
            }}
            className="input-field"
            placeholder="e.g. 0.65"
          />
        </div>

        <div className="chart">
          <h4>📊 Last 10 Days Exchange Rate</h4>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={["auto", "auto"]} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#0ea5e9" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="no-data">No historical data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverterApp;
