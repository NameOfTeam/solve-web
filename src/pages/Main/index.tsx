import { useState } from "react";
import * as S from "./style";
import useGetMe from "../../hooks/auth/useGetMe";

const Main = () => {
  const [counter, setCounter] = useState<number>(0);

  const addNumber = () => {
    setCounter((prev) => prev + 1);
  };

  const { username, loading } = useGetMe();

  return (
    <S.Container>
      <S.Title>{loading ? '로딩중...' : username}</S.Title>
      <S.Content>
        Edit
        <S.Path>src/components/Main/index.tsx</S.Path>
        to make your app!
      </S.Content>
      <S.Couter>{counter}</S.Couter>
      <S.Button onClick={addNumber}>Click me!</S.Button>
    </S.Container>
  );
};

export default Main;
