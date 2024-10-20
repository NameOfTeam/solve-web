import { getCookie } from "../../libs/react-cookie/cookie";
import { useLoadingStore } from "../../stores/useLoadingStore";
import { User } from "../../types/user/user";
import ThemedText from "../common/ThemedText";
import Skeleton from "../Skeleton";
import * as S from "./style";

const StreakBox = ({ user }: { user: User }) => {
  const loading = useLoadingStore((state) => state.loading);

  const ACCESS_TOKEN = getCookie("ACCESS_TOKEN");
  if (ACCESS_TOKEN) {
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
            {user.solvedToday
              ? "오늘 문제를 풀었어요"
              : "오늘은 아직 문제를 풀지 않았어요."}
          </S.StreakAlert>
        )}
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <ThemedText>로그인 후 이용해주세요.</ThemedText>
      </S.Container>
    );
  }
};

export default StreakBox;
