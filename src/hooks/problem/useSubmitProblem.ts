import { useMutation } from "@tanstack/react-query";

import { SubmitResponse } from "../../types/problem/problem";
import { useState } from "react";
import { notification } from "antd";
import instance from "../../libs/axios/customAxios";


const useSubmitProblem = (problemId:string) => {
  const [result, setResult] = useState<SubmitResponse>();
  const [code, setCode] = useState<string>('');

  const handleCode = (e: any) => {
    setCode(e);
  };

  const gradingRequest = async () => {
    const res = await instance.post(`/problems/${problemId}/submit`, {
      code,
      visibility: 'PUBLIC',
      language: 'PYTHON'
    }); 
    return res.data;
  };

  const { mutate: submitCode, isPending } = useMutation({
    mutationFn: gradingRequest,
    onSuccess: (data) => {
      setResult(data);
      notification.success({
        message: "제출 성공",
        description: "코드가 성공적으로 제출되었습니다.",
      });
    },
    onError: () => {
      notification.error({
        message: "제출 실패",
        description: "코드 제출에 실패했습니다.",
      });
    },
  });

  return {
    result,
    submitCode,
    handleCode,
    code,
    isPending
  };
};

export default useSubmitProblem;
