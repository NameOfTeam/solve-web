import { useMutation } from "@tanstack/react-query";
import { ProblemSubmitResponse } from "../../types/problem/problem";
import { useState } from "react";
import { notification } from "antd";
import instance from "../../libs/axios/customAxios";
import { BaseResponse } from "../../types/common/base";


const useSubmitProblem = (problemId:string) => {
  const [result, setResult] = useState<BaseResponse<ProblemSubmitResponse>>();
  const [code, setCode] = useState<string>('');

  const handleCode = (e: any) => {
    setCode(e);
  };

  const gradingRequest = async () => {
    const res = await instance.post<BaseResponse<ProblemSubmitResponse>>(`/problems/${problemId}/submit`, {
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
    isPending,
  };
};

export default useSubmitProblem;
