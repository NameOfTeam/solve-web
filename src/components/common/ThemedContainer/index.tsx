import styled from "@emotion/styled";
import { useTheme } from "../../../contexts/theme";
import { ThemedComponent } from "../../../types/theme/theme";

const Container = styled.div`
  width: 100%;
  flex: 1;
  border-style: solid;
  border-width: 0;
  transition: all 0.2s;
`;

const ThemedContainer = ({ className, children }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <Container
      className={className}
      style={{ backgroundColor: theme.backgroundColor, borderColor: theme.borderColor }}
    >
      {children}
    </Container>
  );
};

export default ThemedContainer;
