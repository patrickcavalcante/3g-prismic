import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1100px) / 2);
  z-index: 10;
`;

export const NavLink = styled.a`
  color: #444;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #444;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #fff;
  }
`;
