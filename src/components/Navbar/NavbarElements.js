import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: white;
    font-style: everett;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((60vw - 1080px) / 2);
    z-index: 12;
    border: 0.5px solid grey;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: black;
  font-size: 2rem;
  text-decoration: none;
  align-items: right;
  font-style: everett;
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: left;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-style: everett;
cursor: pointer;
&.active {
  color:black;
}
&:hover {
  color: grey;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 1080px) {
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

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: right;
  margin-right: 10px;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  
  padding: 10px 22px;
  color: white;
  outline: none;
  border: 1px solid green;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: green;
    color: white;
  }
`;
