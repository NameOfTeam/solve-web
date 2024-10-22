import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";
import ThemedText from "../../components/common/ThemedText";
import ThemedInput from "../../components/common/ThemedInput";
import ThemedTextarea from "../../components/common/ThemedTextarea";

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
  grid-template-columns: repeat(16, 1fr);
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

export const ProfileImage = styled.div<{url: string}>`
  grid-column: 1 / 10;
  grid-row: 1 / 10;
  width: 100%;
  border-radius: 500rem;
  cursor: pointer;
  background: url(${props=>props.url}) center no-repeat;
  background-size: cover;
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
  grid-column: 8 / 17;
  grid-row: 10 / 21;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
`

export const EditWrap = styled(ThemedBox)`
  grid-column: 1 / 8;
  grid-row: 10 / 32;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const Label = styled(ThemedText)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1.5rem;
`
export const Input = styled(ThemedInput)`
  font-size: 1.2rem;
  padding: 0.7rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`
export const Textarea = styled(ThemedTextarea)`
  font-size: 1.2rem;
  padding: 0.7rem;
  width: 100%;
  word-break: keep-all;
  height: 6rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`
export const EditButton = styled.button<{ background: string; darker: string }>`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.background};
  color: white;
  border: none;
  outline: none;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 2rem;
  &:disabled {
    background-color: ${(props) => props.darker};
    color: #f1f1f1;
  }
`;

export const AvatarFile = styled.input`
  display: none;
`

export const SocialWrap = styled(ThemedBox)`
  grid-column: 8 / 17;
  grid-row: 21 / 32;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const StreakWrap = styled(ThemedBox)`
  grid-column: 1 / 17;
  grid-row: 32 / 50;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
`;