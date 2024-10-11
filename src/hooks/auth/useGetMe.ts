import { useState } from "react"
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";
import { useQuery } from "@tanstack/react-query";

const useGetMe = () => {
  const [username,setUsername] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMe = async () => {
    const res = await instance.get("/auth/me");
    return res.data;
  }

  const getMe = async () => {
    try{
      setLoading(true);

      const { data } = useQuery({
        queryKey:['user'],
        queryFn:fetchMe
      });
      
      if (data) {
        setUsername(data.data.username);
      }
    } catch {
      notification.error({message:'유저 조회 실패',description:'네트워크 에러'});
    } finally {
      setLoading(false);
    }
  }
  
  return{
    username,
    getMe,
    loading
  }
}

export default useGetMe