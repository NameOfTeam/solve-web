import { useTheme } from "../../../contexts/theme";
import { ThemedComponent } from "../../../types/theme/theme";

const ThemedText = ({ className, children, onClick }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <p className={className} style={{ color: theme.oppositeColor, transition: 'all 0.2s' }} onClick={onClick}>
      {children}
    </p>
  );
};

export default ThemedText;
