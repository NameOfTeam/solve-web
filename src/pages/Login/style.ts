import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrap = styled.div`
  width: 95%;
  max-width: 28rem;
  height: 37rem;
  border: 0.0625rem solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem 1rem 1rem;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const Seperater = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #f1f1f1;
  margin: 0.8rem 0 2.2rem 0;
`;

export const Label = styled.p`
  align-self: flex-start;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.5rem;
  border: 0.0625rem solid #ccc;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

export const AutoLoginWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
`;

export const Check = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1.7rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.7rem;
  color: white;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  &:disabled {
    background-color: #ccc;
  }
`;

export const Filler = styled.div`
  flex: 1;
  width: 100%;
`;

export const NavWrap = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Nav = styled(Link)`
  font-size: 1rem;
  color: #ccc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;