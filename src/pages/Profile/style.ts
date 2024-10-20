import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";

export const Container = styled(ThemedContainer)`
  min-height: calc(100vh - 5rem);
  position: relative;
  display: flex;
  padding-bottom: 20rem;
`;

export const Banner = styled.img`
  width:100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
`

export const Main = styled.div`
  background-color: transparent;
  width: 100%;
  display: grid;
  position: absolute;
  top: 0;
  padding: 12rem 6rem 4rem 6rem;
  left: 0;
  z-index: 100;
  grid-template-columns: repeat(16, 1f);
  grid-template-rows: repeat(24, 1rem);
  gap: 2rem;
  box-sizing: border-box;
`;

export const UserInfoWrap = styled(ThemedBox)`
  grid-column: 1 / 11;
  grid-row: 1 / 10;
  border-radius: 1rem;
`;

export const badgeWrap = styled(ThemedBox)`
  grid-column: 11 / 17;
  grid-row: 1 / 10;
  border-radius: 1rem;
`;

export const RankWrap = styled(ThemedBox)`
  grid-column: 1 / 17;
  grid-row: 10 / 17;
  border-radius: 1rem;
`