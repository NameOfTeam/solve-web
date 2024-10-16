import { useLoadingStore } from '../../stores/useLoadingStore';
import { User } from '../../types/auth/user';
import Skeleton from '../Skeleton';
import * as S from './style'

const StreakBox = ({user}:{user: User}) => {
  const loading = useLoadingStore(state=>state.loading);

  return (
    <S.Container>
      <S.StreakTitle>스트릭</S.StreakTitle>
      <S.StreakValueWrap>
        <S.StreakIcon src="/assets/streak.svg" />
        <S.StreakValue>
          현재{" "}
          {loading ? (
            <>
              <Skeleton
                width={50}
                height={30}
                style={{ borderRadius: 8, margin: "0 0.25rem" }}
              />
              {"일"}
            </>
          ) : (
            <S.StreakDate>{user.streak} 일</S.StreakDate>
          )}
        </S.StreakValue>
        <S.StreakIcon src="/assets/streak.svg" />
      </S.StreakValueWrap>
      {loading ? (
        <Skeleton width={250} height={30} style={{ borderRadius: 8 }} />
      ) : (
        <S.StreakAlert>오늘은 아직 문제를 풀지 않았어요.</S.StreakAlert>
      )}
    </S.Container>
  );
}

export default StreakBox