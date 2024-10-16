import styled from "@emotion/styled";
import ThemedBox from "../common/ThemedBox";
import ThemedText from "../common/ThemedText";

export const Container = styled(ThemedBox)`
  border-radius: 1rem;
  grid-column: 18/33;
  grid-row: 1/12;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContestBoxTtile = styled(ThemedText)`
  font-size: 1.8rem;
`;

export const ContestWrap = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;

export const ContestItem = styled.div<{ border: string }>`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid ${props=>props.border};
  cursor: pointer;
`;

export const ContestTtile = styled(ThemedText)`
  font-size: 1.4rem;
  font-weight: 300;
  width: 30%;
  word-break: keep-all;
`;

export const ContestStatus = styled(ThemedText)`
  font-size:1.2rem;
`

export const EmptyContestWrap = styled.div`
  width:100%;
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const EmptyContest = styled.p<{color: string}>`
  font-size:2rem;
  color: ${props=>props.color};
`