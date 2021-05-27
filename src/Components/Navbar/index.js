import React from 'react';
import { Nav, NavMenu, NavLink, Bars, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h2>luxestate</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/about' activeStyle>
            Appartments
          </NavLink>
          <NavLink to='/about' activeStyle>
            How It Work
          </NavLink>
          <NavLink to='/about' activeStyle>
            Agents
          </NavLink>
          <NavLink to='/about' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to='/about' activeStyle>
            Join Us
          </NavLink>
          <NavBtnLink to='/getstarted'>Get Started</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
};

export default Navbar;