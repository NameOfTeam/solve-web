import { useEffect } from "react";
import useVerifyEmail from "../../hooks/auth/useVerifyEmail";
import * as S from "./style";

const Verify = () => {
  const { isVerified, verifyRequest } = useVerifyEmail();

  useEffect(() => {
    verifyRequest();
  }, []);

  if (isVerified) {
    return (
      <S.Container>
        <S.Text>인증이 완료되었습니다!</S.Text>
        <S.Redirect to="/login">로그인하기</S.Redirect>
      </S.Container>
    );
  } else if (isVerified !== undefined) {
    return (
      <S.Container>
        <S.Text>만료된 인증입니다!</S.Text>
        <S.Redirect to="/signup">다시 회원가입 하기</S.Redirect>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <S.Text>인증 중입니다.</S.Text>
      </S.Container>
    );
  }
};

export default Verify;
