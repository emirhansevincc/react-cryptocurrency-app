import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins/Coins";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data);

    }).catch((err) => console.log(err))

  }, [])

  return (

    // If you click on the element, you will be directed to the information page.

    <div className="App">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Detail />}>
          <Route path=":Id" element={<Detail />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;