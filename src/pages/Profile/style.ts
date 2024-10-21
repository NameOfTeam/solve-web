import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";
import ThemedText from "../../components/common/ThemedText";

export const Container = styled(ThemedContainer)`
  min-height: calc(100vh - 5rem);
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
`

export const Main = styled.div`
  background-color: transparent;
  width: 100%;
  display: grid;
  z-index: 100;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(auto-fill, 1rem);
  gap: 2rem;
  box-sizing: border-box;
  transform: translateY(-10rem);
  padding: 4rem;
`;

export const UserInfoWrap = styled(ThemedBox)`
  height: 20rem;
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
  grid-column: 1 / 10;
  grid-row: 1 / 10;
  width: 100%;
  border-radius: 500rem;
  object-fit: cover;
  object-position: center;
`

export const Username = styled(ThemedText)`
  font-size: 2.4rem;
  grid-column: 11 / -1;
  grid-row: 2 / 5;
  display: flex;
  align-items: center;
`

export const Introduction = styled.pre<{color: string}>`
  font-size: 1.5rem;
  font-weight: 300;
  grid-column: 11 / -1;
  grid-row: 6 / 10;
  word-break: keep-all;
  color: ${props=>props.color};
`;

export const Log = styled(ThemedText)`
  grid-column: 1 / -1;
  grid-row: 12 / 14;
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
  grid-row: 15 / 17;
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
  grid-row: 10 / 20;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
`

export const StreakWrap = styled(ThemedBox)`
  grid-column: 1 / 17;
  grid-row: 20 / 35;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
`;