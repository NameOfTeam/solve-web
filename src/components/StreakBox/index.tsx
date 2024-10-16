import { User } from '../../types/auth/user';
import * as S from './style'

const StreakBox = ({user}:{user: User}) => {
  return (
    <S.Container>
      <S.StreakTitle>스트릭</S.StreakTitle>
      <S.StreakValueWrap>
        <S.StreakIcon src="/assets/streak.svg" />
        <S.StreakValue>
          현재 <S.StreakDate>{user.streak} 일</S.StreakDate>
        </S.StreakValue>
        <S.StreakIcon src="/assets/streak.svg" />
      </S.StreakValueWrap>
      <S.StreakAlert>오늘은 아직 문제를 풀지 않았어요.</S.StreakAlert>
    </S.Container>
  );
}

export default StreakBox