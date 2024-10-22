import styled from "@emotion/styled";
import ThemedContainer from "../common/ThemedContainer";
import { Link } from "react-router-dom";
import ThemedLink from "../common/ThemedLink";

export const Container = styled(ThemedContainer)`
  width: 100%;
  height: 5rem;
  border-bottom-width: 0.0625rem;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 9999;
`;
export const ToHome = styled(Link)`
  text-decoration: none;
  height: 70%;
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;

export const Profile = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 3rem;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;

export const MenuWrap = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  padding: 0 2rem;
  box-sizing: border-box;
  align-items: center;
  gap: 1rem;
`;

export const MenuItemWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 99999;
  &:hover > .menu {
    display: flex;
  }
`;

export const Menu = styled(ThemedLink)`
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
`;

export const ButtonWrap = styled.div`
  width: 11rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled(Link)<{background: string}>`
  width: 5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${props=>props.background};
  border-radius: 0.5rem;
  text-decoration: none;
`
