import React from 'react'
import CoinList from '../CoinList/CoinList'
import './coins.css'

function Coins({ coins }) {
    return (
        <div>

            <div className="container">
                <div className="head">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='left'>Mkt Cap</p>
                </div>
            </div>

            <CoinList coins={coins} />
            
        </div>
    )
}

export default Coins