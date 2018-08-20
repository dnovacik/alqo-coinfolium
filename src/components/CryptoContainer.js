import React, { Component } from 'react';
import { connect } from 'react-redux';

import GetCoinMarketCapData from './../actions/GetCoinMarketCapData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
    componentWillMount() {
        this.props.GetCoinMarketCapData(this.props.currency);
    }

    renderCoinCards() {
        const { crypto } = this.props;

        return (
            <ul className='cryptoList'>
                {crypto.response.data.length > 0 ? 
                    crypto.response.data.map((coin, index) =>
                    <CoinCard
                        key={index}
                        name={coin.name}
                        ticker={coin.symbol}
                        percent_24h_change={coin.quote[this.props.currency.toUpperCase()].percent_change_24h}
                        price={coin.quote[this.props.currency.toUpperCase()].price}
                        currency={this.props.currency}
                    /> 
                ) :
                <h1>Couldn't retrieve the data from cmc</h1>}
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderCoinCards()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { GetCoinMarketCapData })(CryptoContainer)