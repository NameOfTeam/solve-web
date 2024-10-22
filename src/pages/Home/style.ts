import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";
import { MOBILE, TABLET } from "../../constants/mediaQuery";

export const Container = styled(ThemedContainer)`
  display: grid;
  min-height: calc(100vh - 5rem);
  box-sizing: border-box;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(auto-fit, 1rem);
  gap: 1.5rem;
  padding: 2rem;

  @media (max-width: ${TABLET}) {
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (max-width: ${MOBILE}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 1rem;
  }
`;

export const BentoBox1 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 1 / 11;
  grid-row: 12 / 16;
`;

export const BentoBox2 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 11 / 22;
  grid-row: 12 / 16;
`;

export const BentoBox3 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 22 / 33;
  grid-row: 12 / 16;
`;

export const BentoBox4 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 1 / 16;
  grid-row: 16 / 20;
  padding: 2rem;
`;

export const BentoBox5 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 16 / 33;
  grid-row: 16 / 20;
`;


