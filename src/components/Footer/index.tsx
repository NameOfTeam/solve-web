import { useTheme } from '../../contexts/theme'
import * as S from './style'

const Footer = () => {
  const { theme } = useTheme();

  return (
    <S.Container background={theme.footerColor}>
      <S.LogoWrap>
        <S.Icon src="/assets/icon.svg" />
        <S.Logo
          src={
            theme.backgroundColor === "#FFF"
              ? "/assets/solve_black.svg"
              : "/assets/solve.svg"
          }
        />
      </S.LogoWrap>
      <S.Line background={theme.borderColor} />
      <S.SiteMapWrap>
        <S.SectionTitle color={theme.boxBorderColor}>Sitemap</S.SectionTitle>
      </S.SiteMapWrap>
      <S.Line background={theme.borderColor} />
      <S.ContactWrap>
        <S.SectionTitle color={theme.boxBorderColor}>Contact</S.SectionTitle>
      </S.ContactWrap>
    </S.Container>
  ); 
}

export default Footer