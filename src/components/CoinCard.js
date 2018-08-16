import React from 'react'
import { Currencies } from './../utils/Currencies';
import './css/coinCard.css'

const CoinCard = ({ticker, name, percent_24h_change, price, currency}) => {
    return (
        <li>
            <div>
                <span>{ticker}</span>
                <span>|</span>
                <span>{name}</span>
                <span>{price.toFixed(5)}
                    <span> {Currencies[currency.toUpperCase()]}</span>
                </span>
            </div>
            <div>
                <span>24h:
                     <span> {percent_24h_change} % </span>
                </span>
            </div>
        </li>
    );
}

export default CoinCard;