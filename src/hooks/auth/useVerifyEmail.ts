import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const useVerifyEmail = () => {
  const location = useLocation();
  const token = location.search.split("?token=")[1];


  const [isVerified, setIsVerified] = useState<boolean>();

  const verifyRequest = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/verify?token=${token}`
      );
      if (res) {
        setIsVerified(res.data.data.success);
      }
    } catch{
      setIsVerified(false);
    }
  }

  return{
    isVerified,
    verifyRequest
  }
}

export default useVerifyEmail