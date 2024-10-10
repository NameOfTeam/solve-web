import { useEffect, useState } from "react";
import useSignUp from "../../hooks/auth/useSignUp";
import * as S from "./style";

const Signup = () => {
  const { ...signup } = useSignUp();
  const [valid, setValid] = useState<boolean>(false);

  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  useEffect(() => {
    setValid(
      signup.data.username.trim().length >= 3 &&
        emailRegex.test(signup.data.email) &&
        passwordRegex.test(signup.data.password) &&
        signup.data.password === signup.passwordCheck
    );
  }, [signup.data, signup.passwordCheck]);

  useEffect(() => {
    console.log(valid);
  }, [valid]);

  return (
    <S.Container>
      <S.LoginWrap>
        <S.Title>SOLVE 회원가입</S.Title>
        <S.Seperater />
        <S.Label>이메일</S.Label>
        <S.Input
          type="text"
          onChange={signup.handleForm}
          name="email"
          placeholder="example@example.com"
          value={signup.data.email}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {!emailRegex.test(signup.data.email) &&
            signup.data.email.length > 0 &&
            "이메일 형식이 올바르지 않습니다."}
        </S.Warning>
        <S.Label>아이디</S.Label>
        <S.Input
          type="text"
          onChange={signup.handleForm}
          name="username"
          placeholder="3글자 이상"
          value={signup.data.username}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {signup.data.username.trim().length < 3 &&
            signup.data.username.trim().length > 0 &&
            "공백 제외 3글자 이상 입력해주세요."}
        </S.Warning>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          onChange={signup.handleForm}
          name="password"
          placeholder="영문, 숫자, 특수문자 포함 8글자 이상"
          value={signup.data.password}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {!passwordRegex.test(signup.data.password) &&
            signup.data.password.length > 0 &&
            "영문, 숫자, 특수문자 포함 8글자 이상 입력해주세요."}
        </S.Warning>
        <S.Label>비밀번호 확인</S.Label>
        <S.Input
          type="password"
          placeholder="비밀번호 확인"
          style={{ margin: 0 }}
          onChange={signup.handlePasswordCheck}
          value={signup.passwordCheck}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {signup.data.password !== signup.passwordCheck &&
            signup.passwordCheck.length > 0 &&
            "비밀번호가 일치하지 않습니다."}
        </S.Warning>
        <S.Filler />
        <S.NavWrap>
          <S.Nav to="/login">회원이신가요?</S.Nav>
          <S.Nav
            to="https://bolder-lemon-5f0.notion.site/SOLVE-11ba370ebfe9804985cadfa8645d7bd9"
            target="_blank"
          >
            개인정보 처리방침
          </S.Nav>
        </S.NavWrap>
        <S.Button onClick={signup.submit} disabled={signup.loading || !valid}>
          {signup.loading ? "회원가입 중..." : "회원가입"}
        </S.Button>
      </S.LoginWrap>
    </S.Container>
  );
};

export default Signup;
