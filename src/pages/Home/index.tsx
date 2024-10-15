// import * as S from "./style";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedText from "../../components/common/ThemedText";
import Skeleton from "../../components/Skeleton";

const Home = () => {

  return (
    <ThemedContainer>
      <ThemedText>ㅎㅇㅎㅇ</ThemedText>
      <Skeleton width={100} height={20} style={{borderRadius:4}}/>
    </ThemedContainer>
  );
};

export default Home;
