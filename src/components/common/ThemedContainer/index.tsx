import styled from "@emotion/styled";
import { useTheme } from "../../../context/theme";
import { ThemedComponent } from "../../../types/theme/theme";

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ThemedContainer = ({ className, children }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <Container
      className={className}
      style={{ backgroundColor: theme.backgroundColor }}
    >
      {children}
    </Container>
  );
};

export default ThemedContainer;
