import { useEffect, useState } from "react";
import useSignUp from "../../hooks/auth/useSignUp";
import * as S from "./style";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";

const Signup = () => {
  const { ...signup } = useSignUp();
  const [valid, setValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowPasswordCheck = () => {
    setShowPasswordCheck((prev) => !prev);
  };

  useEffect(() => {
    setValid(
      signup.data.username.trim().length >= 3 &&
        EMAIL_REGEX.test(signup.data.email) &&
        PASSWORD_REGEX.test(signup.data.password) &&
        signup.data.password === signup.passwordCheck
    );
  }, [signup.data, signup.passwordCheck]);


  return (
    <S.Container>
      <S.LoginWrap>
        <S.Title>Hi, there! 👋</S.Title>
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
          {!EMAIL_REGEX.test(signup.data.email) &&
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
        <S.PasswordWrap>
          <S.PasswordInput
            type={showPassword ? "text" : "password"}
            onChange={signup.handleForm}
            name="password"
            placeholder="비밀번호를 입력해주세요."
            value={signup.data.password}
            onKeyDown={(e) => {
              if (e.key === "Enter") signup.submit();
            }}
          />
          <S.ShowPassword
            src={!showPassword ? "/assets/unshowPw.svg" : "/assets/showPw.svg"}
            onClick={handleShowPassword}
          />
        </S.PasswordWrap>
        <S.Warning>
          {!PASSWORD_REGEX.test(signup.data.password) &&
            signup.data.password.length > 0 &&
            "영문, 숫자, 특수문자 포함 8글자 이상 입력해주세요."}
        </S.Warning>
        <S.Label>비밀번호 확인</S.Label>
        <S.PasswordWrap>
          <S.PasswordInput
            type={showPasswordCheck ? "text" : "password"}
            onChange={signup.handlePasswordCheck}
            placeholder="비밀번호를 입력해주세요."
            value={signup.passwordCheck}
            onKeyDown={(e) => {
              if (e.key === "Enter") signup.submit();
            }}
          />
          <S.ShowPassword
            src={
              !showPasswordCheck ? "/assets/unshowPw.svg" : "/assets/showPw.svg"
            }
            onClick={handleShowPasswordCheck}
          />
        </S.PasswordWrap>
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
