import { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
import * as S from "./style";
import { useLoadingStore } from "../../stores/useLoadingStore";
import ProfileBox from "../../components/ProfileBox";
import StreakBox from "../../components/StreakBox";
import RankBox from "../../components/RankBox";
import ContestBox from "../../components/ContestBox";

const Home = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const user = useUserStore(state=>state.user);
  const loading = useLoadingStore(state=>state.loading);

  return (
    <S.Container>
      <ProfileBox loading={loading} imageLoading={imageLoading} setImageLoading={setImageLoading} user={user}/>
      <StreakBox user={user}/>
      <RankBox />
      <ContestBox />
    </S.Container>
  );
};

export default Home;
