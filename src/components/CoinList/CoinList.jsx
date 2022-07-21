import React from 'react'
import "./coinList.css"

function CoinList({ coins }) {
    return (
        
        <div className="coins-body">
            {coins.map((coin, key) => (
                <div className="body-container">
                    <p key={key}>{coin.market_cap_rank}</p>
                    <div className="image">
                        <img className='coin-image' src={coin.image} alt={coin.name} />
                        <p>{coin.symbol.toUpperCase()}</p>
                    </div>
                    <p>${coin.current_price}</p>
                    <p>{coin.price_change_percentage_24h.toFixed(1)}%</p>
                    <p>${coin.market_cap.toLocaleString()}</p>
                </div>
                
            ))}
        </div>
        


    )
}

export default CoinList