import { useTheme } from '../../contexts/theme';
import { useLoadingStore } from '../../stores/useLoadingStore';
import Skeleton from '../Skeleton';
import * as S from './style'

const RankBox = () => {
  const loading = useLoadingStore(state=>state.loading);
  const { theme } = useTheme();

  return (
    <S.Container>
      <S.RankTitle>랭크</S.RankTitle>
      <S.RankValueWrap>
        {loading ? (
          <>
            <Skeleton width={120} height={30} style={{ borderRadius: 8 }} />
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
      {loading ? (
        <Skeleton
          width={120}
          height={20}
          style={{ borderRadius: 8, alignSelf: 'flex-end' }}
        />
      ) : (
        <S.LeftScore>
          다음 승급까지 <S.LeftScoreValue>-205</S.LeftScoreValue>
        </S.LeftScore>
      )}
    </S.Container>
  );
}

export default RankBox