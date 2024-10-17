import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";

export const Container = styled(ThemedContainer)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  box-sizing: border-box;
`;

export const Main = styled.div`
  width:100%;
  height:100%;
  overflow-y:scroll;
`