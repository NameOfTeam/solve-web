import { useEffect, useState } from "react";
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";
import { UpdateMeData } from "../../types/auth/update";
import { useUserStore } from "../../stores/useUserStore";

const useUpdateMe = () => {
  const setUser = useUserStore(state=>state.setUser);
  const [data, setData] = useState<UpdateMeData>({
    username: '',
    newPassword: "",
    currentPassword: "",
    introduction: "",
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const init = () => {
    setData({username: '', newPassword: '', currentPassword: '', introduction: ''});
  }

  const updateUsername = async () => {
    const res = await instance.patch("/users/me", {
      username: data.username,
    });
    if (res) {
      notification.success({
        message: "정보 수정 성공",
      });
      return res;
    }
  };

  const updateIntroduction = async () => {
    const res = await instance.patch("/users/me", {
      introduction: data.introduction,
    });
    if (res) {
      notification.success({
        message: "정보 수정 성공",
      });
      return res;
    }
  };

  const updatePassword = async () => {
    const res = await instance.patch("/users/me/password", {
      newPassword: data.newPassword,
      currentPassword: data.currentPassword,
    });
    if (res) {
      notification.success({
        message: "정보 수정 성공",
      });
      return res;
    }
  };

  const updateAvatar = async () => {
    const formData = new FormData();
    if (avatar) {
      formData.append("file", avatar);
      const res = await instance.patch("/users/me/avatar", formData);
      if (res) {
        notification.success({
          message: "아바타 수정 성공",
        });
      }
    }
  };

  useEffect(()=>{
    updateAvatar();
  },[avatar]);

  const submit = async () => {
    setUpdateLoading(true);
    let res;
    try {
      if(data.username.length > 0) {
        res = await updateUsername();
      }
      if(data.newPassword.length > 0) {
        res = await updatePassword();
      }
      if(data.introduction.length > 0) {
        res = await updateIntroduction();
      }
      setUser(res?.data.data);
      init();
    } catch (err: any) {
      if (err.response && err.response.data.code === "USERNAME_DUPLICATED") {
        notification.error({
          message: "정보 수정 실패",
          description: "이미 사용 중인 아이디입니다.",
        });
        return;
      }
      notification.error({
        message: "정보 수정 실패",
        description: "네트워크 에러",
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  return {
    data,
    handleForm,
    updateIntroduction,
    updateUsername,
    updatePassword,
    setAvatar,
    updateAvatar,
    submit,
    updateLoading
  };
};

export default useUpdateMe;
