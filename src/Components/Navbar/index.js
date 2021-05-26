import React from 'react';
import { Nav, NavItems, NavItem, NavMenuItem, NavLogo, NavMenu, NavBtn } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavItems>
          <NavLogo><h3>luxestate</h3></NavLogo>
          <NavMenu>
            <NavItem>
              <NavMenuItem>About</NavMenuItem>
              <NavMenuItem>Appartments</NavMenuItem>
              <NavMenuItem>How It Work</NavMenuItem>
              <NavMenuItem>Agents</NavMenuItem>
              <NavMenuItem>Contact Us</NavMenuItem>
            </NavItem>
          </NavMenu>
            <NavItem>
              <NavMenuItem>Join us</NavMenuItem>
              <NavMenuItem>
                <NavBtn>Get Started</NavBtn>
              </NavMenuItem>
            </NavItem>
        </NavItems>
      </Nav>
    </>
  )
}

export default Navbar;