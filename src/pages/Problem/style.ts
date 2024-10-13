import styled from "@emotion/styled";
import ThemedText from "../../components/common/ThemedText";


export const Header = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;
export const Title = styled(ThemedText)`
  font-size: 1.3rem;
  color: white;
  cursor: pointer;
`;
export const Back = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  object-position: center;
`;

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  gap: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-y:scroll;
`;

export const ProblemWrap = styled.div`
  flex: 1;
  min-width:20rem;
  height: 100%;
  background-color: #f1f1f1;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  overflow: scroll;
`;

export const EditorWrap = styled.div`
  flex:1;
  min-width:20rem;
  height:100%;
`

export const SubmitWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  box-sizing: border-box;
  gap: 1rem;
`;

export const Button = styled.button<{
  color: string;
  $textcolor: string;
  $activecolor: string;
}>`
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.$textcolor};
  outline: none;
  border: none;
  cursor: pointer;
  &:active {
    background-color: ${(props) => props.$activecolor};
  }
`;
