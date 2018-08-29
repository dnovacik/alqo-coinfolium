import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';

import LoaderContainer from './LoaderContainer';
import GetCoinMarketCapData from './../actions/GetCoinMarketCapData';
import CoinCard from './CoinCard';

import './css/cryptoContainer.css';

class CryptoContainer extends Component {
    componentWillMount() {
        if (this.props.crypto.lastFetch == null || Date.now() - this.props.crypto.lastFetch > 300000) {
            this.props.GetCoinMarketCapData(this.props.currency);
        }
    }

    renderCoinCards() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            return (
                <LoaderContainer />
            );
        } else {
            return (
                <Grid fluid className='display-flex'>
                    {crypto.response.data.length > 0 ? 
                        crypto.response.data.map((coin, index) =>
                        <Col key={`col-${index}`} lg={2} md={4} sm={4} xs={6}>
                            <CoinCard
                                key={index}
                                name={coin.name}
                                ticker={coin.symbol}
                                percent_24h_change={coin.quote[this.props.currency.toUpperCase()].percent_change_24h}
                                price={coin.quote[this.props.currency.toUpperCase()].price}
                                currency={this.props.currency}
                            /> 
                        </Col>
                    ) :
                    <h1>Couldn't retrieve the data from cmc</h1>}
                </Grid>
            );
        }
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