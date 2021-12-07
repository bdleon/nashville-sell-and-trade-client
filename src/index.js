import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { NashSellAndTrade } from "./components/NashSellAndTrade.js"
import "./index.css"
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NashSellAndTrade />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals();