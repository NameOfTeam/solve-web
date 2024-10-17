import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";
import ThemedText from "../../components/common/ThemedText";

export const Container = styled(ThemedContainer)`
  min-height: calc(100vh - 5rem);
  padding: 2rem;
  box-sizing: border-box;
`;

export const Title = styled(ThemedText)`
  font-size: 2rem;
  font-weight: 700;
`;

export const ProblemWrap = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const ProblemItem = styled(ThemedBox)`
  width: 100%;
  height: 5rem;
  cursor: pointer;
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`;
