import { useTheme } from '../../contexts/theme'
import * as S from './style'

const Menu = () => {

  const { theme } = useTheme();

  return (
    <S.Container shadow={theme.borderColor} className='menu'>Menu</S.Container>
  )
}

export default Menu