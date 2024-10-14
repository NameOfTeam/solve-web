import { useState } from "react";
import { SignUpData } from "../../types/auth/signup";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [data, setData] = useState<SignUpData>({
    email: "",
    username:'',
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const submit = async () => {
    try {
      setLoading(true);

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, data);

      if (res) {
        notification.info({
          message: "성공",
          description: "회원가입 완료를 위해 이메일 인증을 진행해주세요.",
        });

        navigate("/login");
      }
    } catch (err: any) {
      console.log(err);

      if (err.response && err.response.data.code === "EMAIL_DUPLICATED") {
        notification.error({
          message: "회원가입 실패",
          description: "이미 사용 중인 이메일입니다.",
        });
        return;
      }
      if (err.response && err.response.data.code === "USERNAME_DUPLICATED") {
        notification.error({
          message: "회원가입 실패",
          description: "이미 사용 중인 아이디입니다.",
        });
        return;
      }
      notification.error({
        message: "회원가입 실패",
        description: "네트워크 에러",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleForm,
    data,
    handlePasswordCheck,
    passwordCheck,
    submit,
  };
};

export default useSignUp;
