import { useTheme } from "../../../context/theme";
import { ThemedComponent } from "../../../types/theme/theme";

const ThemedText = ({ className, children }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <p className={className} style={{ color: theme.oppositeColor }}>
      {children}
    </p>
  );
};

export default ThemedText;
