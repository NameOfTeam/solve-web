import { useQuery } from "@tanstack/react-query";
import instance from "../../libs/axios/customAxios";
import { useEffect } from "react";
import { notification } from "antd";
import { BaseResponse } from "../../types/common/base";
import { Problem } from "../../types/problem/problem";

const useGetProblem = (problemId: string) => {
  const getProblem = async () => {
    const { data } = await instance.get<BaseResponse<Problem>>(
      `/problems/${problemId}`
    );
    return data.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["problem", problemId],
    queryFn: getProblem,
    enabled: !!problemId,
  });

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "문제 조회 실패",
        description: "네트워크 에러",
      });
    }
  }, [isError]);

  return { data, isLoading };
};

export default useGetProblem;
