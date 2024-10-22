import { useTheme } from "../../../contexts/theme";
import { ThemedComponent } from "../../../types/theme/theme";

const ThemedTextarea = ({
  className,
  onChange,
  name,
  placeholder,
  value
}: ThemedComponent) => {
  const { theme } = useTheme();

  return (
    <textarea
      style={{
        backgroundColor: theme.boxColor,
        color: theme.oppositeColor,
        border: `0.0625rem solid ${theme.boxBorderColor}`,
        outline: "none",
        resize: 'none'
      }}
      className={className}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default ThemedTextarea;
