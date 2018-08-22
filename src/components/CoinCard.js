import React from 'react'
import { Currencies } from './../utils/Currencies';
import './css/coinCard.css'

const CoinCard = ({ticker, name, percent_24h_change, price, currency}) => {
    return (
        <div className='listingsItem'>
            <div className={percent_24h_change > 0 ? 'panel is-plus' : 'panel is-minus'}>
                <div className='panel-body'>
                    <div>
                        <span>{name} [{ticker}]</span>
                        <span>{price.toFixed(2)}
                            <span> {Currencies[currency.toUpperCase()]}</span>
                        </span>
                    </div>
                    <div>
                        <span>24h:{percent_24h_change} % </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinCard;