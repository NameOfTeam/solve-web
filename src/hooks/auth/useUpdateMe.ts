import { useState } from "react";
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";
import { UpdateMeData } from "../../types/auth/update";
import { useUserStore } from "../../stores/useUserStore";

const useUpdateMe = () => {
  const user = useUserStore((state) => state.user);
  const [data, setData] = useState<UpdateMeData>({
    username: user.username,
    newPassword: "",
    currentPassword: "",
  });
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const updateMe = async () => {
    try {
      const res = await instance.patch("/users/me", {
        username: data.username,
      });
      if (res) {
        notification.success({
          message: "정보 수정 성공",
        });
      }
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
    }
  };

  const updatePassword = async () => {
    try {
      const res = await instance.patch("/users/me/password", {
        newPassword: data.newPassword,
        currentPassword: data.currentPassword,
      });
      if (res) {
        notification.success({
          message: "정보 수정 성공",
        });
      }
    } catch {
      notification.error({
        message: "정보 수정 실패",
        description: "네트워크 에러",
      });
    }
  };

  const updateAvatar = async () => {
    try {
      const formData = new FormData();
      if (avatar) {
        formData.append("file", avatar);
        const res = await instance.patch("/users/me/patch", formData);
        if(res){
          notification.success({
            message: "아바타 수정 성공",
          });
        }
      }
    } catch {
      notification.error({
        message: "정보 수정 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    data,
    handleForm,
    updateMe,
    updatePassword,
    setAvatar,
    updateAvatar
  };
};

export default useUpdateMe;
