import { useTheme } from '../../contexts/theme';
import { useLoadingStore } from '../../stores/useLoadingStore';
import Skeleton from '../Skeleton';
import * as S from './style'

const RankBox = () => {
  const loading = useLoadingStore(state=>state.loading);
  const { theme } = useTheme();

  return (
    <S.RankWrap>
      <S.RankTitle>랭크</S.RankTitle>
      <S.RankValueWrap>
        {loading ? (
          <>
            <Skeleton width={120} height={40} style={{ borderRadius: 8 }} />
            <Skeleton width={400} height={30} style={{ borderRadius: 8 }} />
          </>
        ) : (
          <>
            <S.RankName>Master I</S.RankName>
            <S.RankProgressWrap background={theme.boxBorderColor}>
              <S.RankProgress width="62" />
            </S.RankProgressWrap>
          </>
        )}
      </S.RankValueWrap>
      <S.LeftScore>
        다음 승급까지
        {loading ? (
          <Skeleton width={50} height={30} style={{ borderRadius: 8, marginLeft: 8 }} />
        ) : (
          <S.LeftScoreValue>-205</S.LeftScoreValue>
        )}
      </S.LeftScore>
    </S.RankWrap>
  );
}

export default RankBox