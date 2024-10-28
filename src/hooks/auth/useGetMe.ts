import { useState, useEffect } from "react";
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../libs/react-cookie/cookie";

const useGetMe = () => {
  const [username, setUsername] = useState<string>("");
  const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

  const fetchMe = async () => {
    const res = await instance.get("/users/me");
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchMe,
    enabled:!!ACCESS_TOKEN
  });

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "유저 조회 실패",
        description: "네트워크 에러",
      });
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setUsername(data.data.username);
    }
  }, [data]);

  return {
    username,
    loading: isLoading,
  };
};

export default useGetMe;
