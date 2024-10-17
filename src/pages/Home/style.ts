import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";

export const Container = styled(ThemedContainer)`
  width: 100%;
  display: grid;
  padding: 1rem;
  box-sizing: border-box;
  gap: 1rem;
  // 모바일 기본 레이아웃
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  // 데스크탑 (1280px 이상)
  @media (min-width: 1570px) {
    grid-template-columns: repeat(32, minmax(16px, 1fr));
    grid-template-rows: repeat(20, minmax(16px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
`;

export const BentoBox1 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  // 모바일 기본 레이아웃
  grid-column: 1 / -1;

  // 데스크탑 (1280px 이상)
  @media (min-width: 1570px) {
    grid-column: 1 / 11;
    grid-row: 12 / 16;
    padding: 2rem;
  }
`;

export const BentoBox2 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 1 / -1;

  // 데스크탑 (1280px 이상)
  @media (min-width: 1570px) {
    grid-column: 11 / 22;
    grid-row: 12 / 16;
    padding: 2rem;
  }
`;

export const BentoBox3 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 1 / -1;

  // 데스크탑 (1280px 이상)
  @media (min-width: 1570px) {
    grid-column: 22 / 33;
    grid-row: 12 / 16;
    padding: 2rem;
  }
`;

export const BentoBox4 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 1 / -1;

  // 데스크탑 (1280px 이상)
  @media (min-width: 1570px) {
    grid-column: 1 / 16;
    grid-row: 16 / 20;
    padding: 2rem;
  }
`;

export const BentoBox5 = styled(ThemedBox)`
  border-radius: 1rem;
  padding: 2rem;
  grid-column: 1 / -1;

  // 데스크탑 (1280px 이상)
  @media (min-width: 1570px) {
    grid-column: 16 / 33;
    grid-row: 16 / 20;
    padding: 2rem;
  }
`;


