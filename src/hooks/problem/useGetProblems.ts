import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BaseResponse } from "../../types/common/base";
import { PageResponse } from "../../types/common/page";
import { Problem } from "../../types/problem/problem";
import instance from "../../libs/axios/customAxios";

const useGetProblems = () => {
  const [initialRequest, setInitialRequest] = useState<boolean>(true);

  const getProblems = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await instance.get<BaseResponse<PageResponse<Problem>>>(
      `/problems?page=${pageParam}&size=${
        initialRequest ? "20" : "10"
      }`
    );
    setInitialRequest(false);
    return data.data;
  };

  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["problems"],
    queryFn: getProblems,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.pageable.pageNumber < lastPage.totalPages - 1
        ? lastPage.pageable.pageNumber + 1
        : undefined,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return { data, ref };
};

export default useGetProblems;
