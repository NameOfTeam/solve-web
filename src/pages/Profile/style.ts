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

export const SectionTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SectionTitle = styled(ThemedText)`
  font-size: 1.8rem;
  font-size: 700;
`

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
  grid-template-columns: repeat(16, 1fr);
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
  grid-template-columns: repeat(auto-fit, 1rem);
  grid-template-rows: repeat(auto-fit, 1rem);
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

export const Introduction = styled.pre<{color: string}>`
  font-size: 1.5rem;
  font-weight: 300;
  grid-column: 13 / -1;
  grid-row: 6 / 12;
  word-break: keep-all;
  color: ${props=>props.color};
`;

export const Log = styled(ThemedText)`
  grid-column: 1 / -1;
  grid-row: 14 / 16;
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
`

export const Point = styled.span<{color: string}>`
  font-weight: 500;
  color: ${props=>props.color};
`

export const Dot = styled.span<{color: string}>`
  font-size: 3rem;
  color: ${props=>props.color};
`

export const badgeWrap = styled(ThemedBox)`
  grid-column: 11 / 17;
  grid-row: 1 / 10;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const More = styled.p`
  font-size: 1rem;
  color: #70c3f2;
  cursor: pointer;
`;

export const Badges = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const BadgeItem = styled.div`
  aspect-ratio: 1 / 1;
  flex: 1;
  border-radius: 1rem;
  background-color: white;
`


export const Link = styled.div`
  display: flex;
  grid-column: 1 / -1;
  grid-row: 18 / 20;
  gap: 0.5rem;
  align-items: center;
`;

export const LinkText = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #70c3f2;
  font-size: 1.3rem;
  &:hover{
    text-decoration: underline;
  }
`;

export const LinkIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  object-position: center;
`

export const RankWrap = styled(ThemedBox)`
  grid-column: 1 / 17;
  grid-row: 10 / 17;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
`

