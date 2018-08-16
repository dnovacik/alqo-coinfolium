import React from 'react';
import './css/header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.php">
                            ALQO
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav" id="mainNavbar">
                            <li><a className="min" href="./overview"><i className="pe-7s-global"></i></a><a className="default" href="./overview">Overview</a></li>
                            <li className="cActive"><a className="min" href="./transactions"><i className="pe-7s-shuffle "></i></a><a className="default" href="./transactions">Transactions</a></li>
                            <li><a className="min" href="./statistics"><i className="pe-7s-graph2"></i></a><a className="default" href="./statistics">Statistics</a></li>
                            <li><a className="min" href="./masternodes"><i className="pe-7s-tools"></i></a><a className="default" href="./masternodes">Masternodes</a></li>
                            <li><a className="min" href="./apiusage"><i className="pe-7s-tools"></i></a><a className="default" href="./apiusage">API</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <div className="input-group" id="navSearch">
                                    <input className="form-control" placeholder="block, hash, transaction, etc..." type="text" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;