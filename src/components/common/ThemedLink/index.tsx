import { Link } from "react-router-dom"
import { useTheme } from "../../../context/theme"

const ThemedLink = ({to, children, className, style}:{to: string, children: string | React.ReactNode, className?: string, style?: any}) => {

  const { theme } = useTheme();

  return (
    <Link to={to} className={className} style={{color: theme.oppositeColor, ...style}}>{children}</Link>
  )
}

export default ThemedLink