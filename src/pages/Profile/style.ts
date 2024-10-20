import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";
import ThemedText from "../../components/common/ThemedText";

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
  padding: 2rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1rem);
  grid-template-rows: repeat(auto-fill, 1rem);
`;

export const ProfileImageWrap = styled.img`
  grid-column: 1 / 12;
  grid-row: 1 / 12;
  width: 100%;
  border-radius: 500rem;
  object-fit: cover;
  object-position: center;
`

export const Username = styled(ThemedText)`
  font-size: 3rem;
  grid-column: 13 / -1;
  grid-row: 1 / 6;
  display: flex;
  align-items: center;
`

export const Introduction = styled(ThemedText)`
  font-size: 1.5rem;
  font-weight: 300;
  grid-column: 13 / -1;
  grid-row: 6 / 12;
  word-break: keep-all;
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