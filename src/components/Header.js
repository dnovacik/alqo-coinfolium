// imports
import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// css
import './css/header.css'

class Header extends Component {
    state = {
        userId: ''
    }

    renderLoginRegister = (isEmpty) => {
        if (isEmpty) {
            return (
                <Nav pullRight>
                    <LinkContainer to='/login'>
                        <NavItem>Sign In</NavItem>
                    </LinkContainer>
                </Nav>
            );
        } else {
            return (
                <Navbar.Text pullRight>
                    Logged in as: {this.state.userId}
                </Navbar.Text>
            );
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userId !== this.props.userId) {
            this.setState({userId: this.props.userId});
        }
    }

    render() {
        return (
            <header>
                <Navbar collapseOnSelect fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLinkContainer exact to='/' activeClassName='active'>
                                <a className='brand'>COINFOLIUM</a>
                            </IndexLinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to='/portfolio'>
                                <NavItem>Portfolio</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/listings'>
                                <NavItem>Listings</NavItem>
                            </LinkContainer>
                        </Nav>
                        {this.renderLoginRegister(this.state.userId === '')}
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;