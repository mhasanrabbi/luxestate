import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  
  return (
    <NavContainer>
      <div className="nav-logo">
        <h2>luxestate</h2>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Appartments</li>
        <li>How It Works</li>
        <li>Agents</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-btn">
        <button>Get Started</button>
      </div>
    </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  li {
    padding: 0 10px;
  }

  button {
    padding: 0.6rem 1.5rem;
    outline: none;
    border: 1px solid var(--yellow);
    background: var(--yellow);
    border-radius: 5px;
  }

  .nav-logo:hover {
    cursor: pointer;
    color: var(--yellow);
    transition: all ease-in-out 0.3s;
  }

  button:hover {
    cursor: pointer;
    background: #fff;
    transition: all ease-in-out 0.3s;
  }

  li:hover {
    cursor: pointer;
    color: var(--yellow);
    transition: all ease-in-out 0.3s;
  }
`