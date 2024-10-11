import { useEffect, useState } from "react";
import * as S from "./style";
import useGetMe from "../../hooks/auth/useGetMe";

const Main = () => {
  const [counter, setCounter] = useState<number>(0);

  const addNumber = () => {
    setCounter((prev) => prev + 1);
  };

  const { ...me } = useGetMe();

  useEffect(()=>{
    me.getMe();
  },[]);

  return (
    <S.Container>
      <S.Title>Welcome To cher1shRXD's World!</S.Title>
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
