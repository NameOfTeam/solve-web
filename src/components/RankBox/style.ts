import styled from "@emotion/styled";
import ThemedBox from "../common/ThemedBox";
import ThemedText from "../common/ThemedText";

export const RankWrap = styled(ThemedBox)`
  border-radius: 1rem;
  grid-column: 8/18;
  grid-row: 6/12;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RankTitle = styled(ThemedText)`
  font-size: 1.8rem;
`;
export const RankValueWrap = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;
`;
export const RankName = styled.p`
  font-size: 2.2rem;
  background: linear-gradient(
    106deg,
    rgba(151, 146, 227, 1) 0%,
    rgba(97, 231, 134, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
`;
export const RankProgressWrap = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  border-radius: 5rem;
  width: 100%;
  height: 1.2rem;
`;
export const RankProgress = styled.div<{ width: string }>`
  background: linear-gradient(
    106deg,
    rgba(151, 146, 227, 1) 0%,
    rgba(97, 231, 134, 1) 100%
  );
  width: ${(props) => props.width}%;
  height: 100%;
  border-radius: 5rem;
`;
export const LeftScore = styled(ThemedText)`
  font-size: 1.2rem;
  font-weight: 300;
  align-self: flex-end;
  display: flex;
  align-items: center;
`;
export const LeftScoreValue = styled.span`
  font-weight: 500;
`;
