import { useState } from "react";
import ThemedText from "../../components/common/ThemedText";
import { useUserStore } from "../../stores/useUserStore";
import * as S from "./style";
import Skeleton from "../../components/Skeleton";
import { useLoadingStore } from "../../stores/useLoadingStore";

const Home = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const user = useUserStore(state=>state.user);
  const loading = useLoadingStore(state=>state.loading);

  return (
    <S.Container>
      <S.ProfileWrap>
        {loading && imageLoading && (
          <Skeleton width={80} height={80} style={{ borderRadius: 50 }} />
        )}
        <S.Avatar
          src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
          style={loading || imageLoading ? { width: 0, height: 0 } : {}}
          onLoad={() => {
            setImageLoading(false);
          }}
        />
        {loading && imageLoading ? (
          <Skeleton width={200} height={30} style={{ borderRadius: 8 }} />
        ) : (
          <S.Username>{user.username}</S.Username>
        )}
        <S.StatWrap>
          <S.Stats>
            <S.Stat>푼 문제</S.Stat>
            {loading && imageLoading ? (
              <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
            ) : (
              <S.StatValue>{user.solvedProblem}</S.StatValue>
            )}
          </S.Stats>
          <S.Stats>
            <S.Stat>대회 참여 수</S.Stat>
            {loading && imageLoading ? (
              <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
            ) : (
              <S.StatValue>{user.participatedContest}</S.StatValue>
            )}
          </S.Stats>
          <S.Stats>
            <S.Stat>돈</S.Stat>
            {loading && imageLoading ? (
              <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
            ) : (
              <S.StatValue>{user.money} SP</S.StatValue>
            )}
          </S.Stats>
        </S.StatWrap>
      </S.ProfileWrap>
      <S.StreakWrap>
        <ThemedText>ㅎㅇㅎㅇ</ThemedText>
      </S.StreakWrap>
      <S.RankWrap>
        <ThemedText>ㅎㅇㅎㅇ</ThemedText>
      </S.RankWrap>
      <S.ContestWrap>
        <ThemedText>ㅎㅇㅎㅇ</ThemedText>
      </S.ContestWrap>
    </S.Container>
  );
};

export default Home;
