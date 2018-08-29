// imports
import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, InputGroup, Glyphicon } from 'react-bootstrap';

// css
import './css/header.css'

const Header = () => (
    <header>
        <Navbar collapseOnSelect fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLinkContainer exact to='/' activeClassName='active'>
                        <a className='brand'>COINFOLIUM</a>
                    </IndexLinkContainer>
                    {/* <NavLink exact to='/' activeClassName='active' className='brand'>COINFOLIUM</NavLink> */}
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
                {/* <Navbar.Form pullRight>
                    <FormGroup className='search-form-group'>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <InputGroup.Button>
                                <Button className='gray-bg'>
                                    <Glyphicon glyph="search" className='white-text' />
                                    </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Navbar.Form> */}
            </Navbar.Collapse>
        </Navbar>
        {/* <nav>
            <div className='nav-brand'>
                <NavLink exact to='/' activeClassName='active' className='brand'>COINFOLIUM</NavLink>
            </div>
            <ul>
                <li><NavLink to='/portfolio' activeClassName='active'>Portfolio</NavLink></li>
                <li><NavLink to='/listings' activeClassName='active'>Listings</NavLink></li>
            </ul>
        </nav> */}
    </header>
)

export default Header;