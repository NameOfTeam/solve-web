import styled from "@emotion/styled";
import ThemedBox from "../../components/common/ThemedBox";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedText from "../../components/common/ThemedText";

export const Container = styled(ThemedContainer)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(16, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ProfileWrap = styled(ThemedBox)`
  border-radius: 1rem;
  grid-column: 1/8;
  grid-row: 1/12;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  object-position: center;
  background-color: white;
`;
export const Username = styled(ThemedText)`
  font-size: 2rem;
`;
export const Stats = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
`;
export const StatWrap = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Stat = styled(ThemedText)`
  font-size: 1.2rem;
`;
export const StatValue = styled(ThemedText)`
  font-size: 1.2rem;
  font-weight:300;
`

export const StreakWrap = styled(ThemedBox)`
  border-radius: 1rem;
  grid-column: 8/18;
  grid-row: 1/6;
`;

export const RankWrap = styled(ThemedBox)`
  border-radius: 1rem;
  grid-column: 8/18;
  grid-row: 6/12;
`;

export const ContestWrap = styled(ThemedBox)`
  border-radius: 1rem;
  grid-column: 18/33;
  grid-row: 1/12;
`;
