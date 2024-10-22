import { useTheme } from "../../../contexts/theme";
import { ThemedComponent } from "../../../types/theme/theme";

const ThemedInput = ({ className, onChange, name, type, placeholder, value }: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <input
      style={{
        backgroundColor: theme.boxColor,
        color: theme.oppositeColor,
        border: `0.0625rem solid ${theme.boxBorderColor}`,
        outline: 'none',
      }}
      className={className}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default ThemedInput;
