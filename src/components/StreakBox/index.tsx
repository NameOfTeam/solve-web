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
        {loading ? (
          <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
        ) : (
          <S.StreakValue>
            현재 <S.StreakDate>{user.streak}일</S.StreakDate>
          </S.StreakValue>
        )}

        <S.StreakIcon src="/assets/streak.svg" />
      </S.StreakValueWrap>
      {loading ? (
        <Skeleton width={250} height={30} style={{ borderRadius: 8 }} />
      ) : (
        <S.StreakAlert>
          {user.streakToday
            ? "오늘 문제를 풀었어요"
            : "오늘은 아직 문제를 풀지 않았어요."}
        </S.StreakAlert>
      )}
    </S.Container>
  );
}

export default StreakBox