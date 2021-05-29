import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MobileIcon, Nav, NavBtnLink, NavItem, NavItemBtn, NavLink, NavMenu } from './NavbarElements';


const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h3>luxestate</h3>
        </NavLink>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
            <NavItem>
            <NavLink to='/about'>
            About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about'>
            Appartments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about'>
            How It Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about'>
            Agents
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about'>
            Contact Us
            </NavLink>
          </NavItem>                      
          <NavItem>
            <NavLink to='/about'>
            Join Us
          </NavLink>
          </NavItem>
            <NavItemBtn>
              <NavBtnLink to='/getstarted'>Get Started</NavBtnLink>
            </NavItemBtn>
        </NavMenu>
          
      </Nav>
    </>
  )
};

export default Navbar;

