import styled from "@emotion/styled";
import ThemedText from "../../components/common/ThemedText";

export const Title = styled(ThemedText)`
  font-size: 3rem;
`;

export const Content = styled(ThemedText)`
  font-size: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Path = styled.code`
  background-color: rgba(200, 200, 200, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 2rem;
  font-style: italic;
  font-weight: 200;
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

export const Couter = styled(ThemedText)`
  font-size: 2.5rem;
  margin-top: 4rem;
`;

export const Button = styled.button`
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  background-color: #ccc;
  border-radius: 1rem;
  cursor: pointer;
  &:active {
    background-color: #c5c5c5;
  }
`;
