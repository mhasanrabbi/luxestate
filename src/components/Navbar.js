import React, {useState} from 'react';
import { MenuItems } from './MenuItems';
import {FaBars, FaTimes} from 'react-icons/fa';
import styled from 'styled-components';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click)
  }

  return (
    <NavContainer>
      <div className="nav-logo">
        <h2>luxestate</h2>
      </div>
      <div className="menu-icon" onClick={toggle}>
        <i>{click ? <FaTimes/> : <FaBars/>}</i>
      </div>
      <div className={click ? 'nav-items active' : 'nav-items'}>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={toggle}>{item.title}</li>
            )
          })}
          <button className="btn">Get Started</button>
        </ul>
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
  
  .nav-logo:hover {
    cursor: pointer;
    color: var(--yellow);
    transition: all ease-in-out 0.3s;
  }

  li:hover {
    cursor: pointer;
    color: var(--yellow);
    transition: all ease-in-out 0.3s;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width:992px) {
    .NavContainer {
      position: relative;
    }

    .nav-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(40%, -10%);
    }

    .menu-icon {
      display: block;
      font-size: 1.5rem;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
    }

    .nav-items {
      display: flex;
      flex-direction: column;
      width: 110%;
      height: 500px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-items.active {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    ul {
      flex-direction: column;
      padding: 2rem 1rem;
    }
    li {
      padding: 1.5rem 0;
    }

    button {
      margin: 2rem 0;
    }

    .nav-btn {
      align-items: center;
    }
    
  }
`