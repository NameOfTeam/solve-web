import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedBox from "../../components/common/ThemedBox";
import ThemedText from "../../components/common/ThemedText";
import { secondary } from "../../contexts/theme";

export const Container = styled(ThemedContainer)`
  min-height: calc(100vh - 5rem);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(ThemedText)`
  font-size: 2rem;
  font-weight: 700;
  width: 75%;
`;

export const ProblemWrap = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const ProblemItem = styled(ThemedBox)`
  width: 100%;
  height: 5rem;
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition: all 0.2s;
  &:hover{
    transform: scale(1.02);
  }
`;
export const ProblemTitle = styled(ThemedText)`
  flex: 9;
  font-size: 1.4rem;
`
export const ProblemStateWrap = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Accepted = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${secondary[900]};
`

export const Rejected = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(220,50,50);
`;

export const Limits = styled(ThemedText)`
  flex: 1;
  text-align: center;
`

export const Hr = styled.div<{ background: string }>`
  width: 75%;
  height: 0.0625rem;
  background-color: ${(props) => props.background};
  margin: 1rem 0;
`;

export const SelectionWrap = styled.div`
  width: 75%;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Select = styled(ThemedBox)`
  width: 8rem;
  height: 3rem;
  border-radius: 1rem;
  display:flex;
  padding: 0 0.8rem;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
`

export const SelectTitle = styled(ThemedText)`
  font-size: 1.2rem;
`

export const TableTitleWrap = styled.div`
  width: 75%;
  display: flex;
  padding: 0 1rem;
  box-sizing: border-box;
  align-items: flex-end;
  margin-bottom: 1rem;
`
export const TableTitleFiller = styled.div`
  flex: 9;
`

export const TableTitle = styled(ThemedText)`
  font-size: 1.2rem;
  flex: 1;
  text-align: center;
`