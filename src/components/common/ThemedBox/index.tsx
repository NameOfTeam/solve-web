import { useTheme } from "../../../contexts/theme";
import { ThemedComponent } from "../../../types/theme/theme";


const ThemedBox = ({ className, children, onClick }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <div
      className={className}
      style={{ backgroundColor: theme.boxColor, transition: 'all 0.2s', border: `0.0625rem solid ${theme.boxBorderColor}` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ThemedBox;
