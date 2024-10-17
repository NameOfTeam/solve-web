import styled from "@emotion/styled";
import ThemedBox from "../common/ThemedBox";
import ThemedText from "../common/ThemedText";

export const Container = styled(ThemedBox)`
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  grid-column: 1 / 8;
  grid-row: 1 / 12;
  padding: 2rem;
`;
export const Avatar = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  object-position: center;
  background-color: white;
  border-radius: 100rem;
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
  font-weight: 300;
`;
