import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins/Coins";
import Navbar from "./components/Navbar/Navbar";
// import CoinList from "./components/CoinList/CoinList";

function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data);

    }).catch((err) => console.log(err))

  }, [])

  return (
    <div className="App">
      <Navbar />
      <Coins coins={coins} />
    </div>
  );
}

export default App;