import { useTheme } from "../../../context/theme";
import { ThemedComponent } from "../../../types/theme/theme";


const ThemedBox = ({ className, children }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <div
      className={className}
      style={{ backgroundColor: theme.boxColor }}
    >
      {children}
    </div>
  );
};

export default ThemedBox;
