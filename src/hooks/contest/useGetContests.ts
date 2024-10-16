import { useInfiniteQuery } from "@tanstack/react-query";
import instance from "../../libs/axios/customAxios"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// import { BaseResponse } from "../../types/common/base";
// import { PageResponse } from "../../types/common/page";
// <BaseResponse<PageResponse<Contest>>>

const useGetContests = () => {
  const [initialRequest, setInitialRequest] = useState<boolean>(true);
  const { ref, inView } = useInView();

  const getContests = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await instance.get(
      `/contests?page=${pageParam}&size=${initialRequest ? "20" : "10"}`
    );
    setInitialRequest(false);
    return data.data;
  };
  

  const { data, fetchNextPage } = useInfiniteQuery({
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

  return { data, ref };
}

export default useGetContests