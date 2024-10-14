import * as S from "./style";
import useGetMe from "../../hooks/auth/useGetMe";
import ThemedContainer from "../../components/common/ThemedContainer";
import { useTheme } from "../../context/theme";

const Main = () => {
  const { toggleTheme, setPurpleTheme } = useTheme();
  const { username, loading } = useGetMe();

  return (
    <ThemedContainer>
      <S.Title>{loading ? "로딩중..." : username}</S.Title>
      <S.Button onClick={toggleTheme}>Change Theme!</S.Button>
      <S.Button onClick={setPurpleTheme}>Change Purple!</S.Button>
    </ThemedContainer>
  );
};

export default Main;
