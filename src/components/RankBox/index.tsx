import { useTheme } from '../../contexts/theme';
import * as S from './style'

const RankBox = () => {

  const { theme } = useTheme();

  return (
    <S.RankWrap>
      <S.RankTitle>랭크</S.RankTitle>
      <S.RankValueWrap>
        <S.RankName>Master I</S.RankName>
        <S.RankProgressWrap background={theme.boxBorderColor}>
          <S.RankProgress width="62" />
        </S.RankProgressWrap>
      </S.RankValueWrap>
      <S.LeftScore>
        다음 승급까지 <S.LeftScoreValue>-205</S.LeftScoreValue>
      </S.LeftScore>
    </S.RankWrap>
  );
}

export default RankBox