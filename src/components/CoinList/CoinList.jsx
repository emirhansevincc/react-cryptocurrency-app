import React from 'react'
import "./coinList.css"
import { Link } from 'react-router-dom'
import Detail from '../../pages/Detail'

function CoinList({ coins }) {
    return (

        <div className="coins-body">
            {coins.map((coin, key) => (
                <Link 
                    to={`/coin/${coin.id}`} 
                    element={<Detail />}  
                    key={key}
                    >
                    <div className="body-container">
                        <p>{coin.market_cap_rank}</p>
                        <div className="image">
                            <img className='coin-image' src={coin.image} alt={coin.name} />
                            <p>{coin.symbol.toUpperCase()}</p>
                        </div>
                        <p>${coin.current_price}</p>
                        <p>{coin.price_change_percentage_24h.toFixed(1)}%</p>
                        <p>${coin.market_cap.toLocaleString()}</p>
                    </div>
                </Link>

            ))}
        </div>

    )
}

export default CoinList