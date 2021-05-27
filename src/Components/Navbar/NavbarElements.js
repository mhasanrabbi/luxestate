import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(10vw - 0.5rem);
  z-index: 10;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    color: #000;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
  }
`

export const NavItem = styled.li`
  height: 80px;
  
  &:hover {
    color: #ffcc01;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    color: #000;

    &:hover {
      color: #ffcc01;
    }
  }
`


export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      transition: all 0.3s ease;
    }
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-100%, 75%);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`

export const NavItemBtn = styled.li`
  
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 4px;
  background: #ffcc01;
  padding: 10px 24px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`



