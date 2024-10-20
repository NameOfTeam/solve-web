import styled from "@emotion/styled";
import ThemedBox from "../common/ThemedBox";
import { secondary } from "../../contexts/theme";
import ThemedText from "../common/ThemedText";
import { MOBILE, TABLET } from "../../constants/mediaQuery";

export const Container = styled(ThemedBox)`
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 8 / 18;
  grid-row: 1 / 6;
  padding: 2rem;

  @media (max-width: ${TABLET}) {
    grid-column: 8 / 19;
  }

  @media (max-width: ${MOBILE}) {
    grid-column: 1 / -1;
    grid-row: auto;
  }
`;
export const StreakTitle = styled.p`
  font-size: 1.8rem;
  color: ${secondary[500]};
`;
export const StreakValueWrap = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const StreakIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`;
export const StreakValue = styled(ThemedText)`
  font-size: 1.6rem;
  font-weight: 300;
`;
export const StreakDate = styled.span`
  font-weight: 500;
  margin-left: 0.5rem;
`;
export const StreakAlert = styled(ThemedText)`
  font-size: 1.2rem;
  font-weight: 300;
`;
