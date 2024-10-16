import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";

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