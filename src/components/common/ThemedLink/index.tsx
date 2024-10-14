import { Link } from "react-router-dom"
import { useTheme } from "../../../context/theme"

const ThemedLink = ({to, children, className}:{to:string, children:string | React.ReactNode, className?:string}) => {

  const { theme } = useTheme();

  return (
    <Link to={to} className={className} style={{color:theme.oppositeColor}}>{children}</Link>
  )
}

export default ThemedLink