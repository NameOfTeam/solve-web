import { useInfiniteQuery } from "@tanstack/react-query";
import instance from "../../libs/axios/customAxios"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLoadingStore } from "../../stores/useLoadingStore";
import { BaseResponse } from "../../types/common/base";
import { PageResponse } from "../../types/common/page";
import { Contest } from "../../types/contest/contest";

const useGetContests = () => {
  const [initialRequest, setInitialRequest] = useState<boolean>(true);
  const { ref, inView } = useInView();
  const setLoading = useLoadingStore(state=>state.setLoading);

  const getContests = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await instance.get<BaseResponse<PageResponse<Contest>>>(
      `/contests?page=${pageParam}&size=${initialRequest ? "20" : "10"}`
    );
    setInitialRequest(false);
    return data.data;
  };
  

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["contest"],
    queryFn: getContests,
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

  useEffect(()=>{
    setLoading(isLoading);
  },[isLoading]);

  return { data, ref };
}

export default useGetContests