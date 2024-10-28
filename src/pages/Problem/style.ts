import styled from "@emotion/styled";
import ThemedText from "../../components/common/ThemedText";
import ThemedBox from "../../components/common/ThemedBox";

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
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 2rem;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const ProblemWrap = styled.div`
  flex: 1;
  min-width: 20rem;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const EditorWrap = styled.div`
  flex: 1;
  min-width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubmitWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
  box-sizing: border-box;
  gap: 1rem;
`;

export const TestCaseWrap = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  box-sizing: border-box;
  display: flex;
  gap: 0.5rem;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionTitle = styled(ThemedText)`
  font-size: 2rem;
  font-weight: 700;
`;

export const SectionContent = styled(ThemedText)`
  font-size: 1.2rem;
`;

export const TestCaseType = styled(ThemedText)`
  font-size: 1.3rem;
  font-weight: 500;
  margin-left: 0.25rem;
`;

export const TestCase = styled.div`
  flex: 1;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const TestCaseBox = styled(ThemedBox)`
  width: 100%;
  height:3rem;
  box-sizing: border-box;
  margin-top: 0.7rem;
  border-radius: 0.5rem;
  display:flex;
  align-items:center;
  padding:0 1rem;
`;

export const ProgressWrap = styled.div`
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
`;

export const ProgressBarWrap = styled(ThemedBox)`
  width:100%;
  height:2rem;
  border-radius: 0.5rem;
`

export const Progress = styled.div<{ progress: number, background: string }>`
  width: ${(props) => props.progress}%;
  padding: 0 0.5rem;
  height:2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  background-color:${props=>props.background};
  overflow:hidden;
  transition:all 0.2s;
`;
export const ProgressText = styled.p`
  color:white;
  font-size: 1rem;
`;

export const TestResultWrap = styled.div`
  background-color:black;
  width:100%;
  height: calc(100% - 3rem);
  box-sizing:border-box;
`
export const TestResultText = styled.textarea`
  color:white;
  width:100%;
  height:100%;
  box-sizing:border-box;
  resize:none;
  background-color:black;
  outline:none;
  border:none;
  padding:0.5rem;
`

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
