import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BaseResponse } from '../../types/common/base';
import { PageResponse } from '../../types/common/page';
import { Problem } from '../../types/problem/problem';
import axios from 'axios';

const useGetProblems = () => {
  const getProblems = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await axios.get<BaseResponse<PageResponse<Problem>>>(
      `${import.meta.env.VITE_API_URL}/problems?page=${pageParam}&size=10`
    );

    return data.data;
  };

  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["problems"],
    queryFn: getProblems,
    initialPageParam: 0,
    // getPreviousPageParam: (firstPage) =>
    //   firstPage.pageable.pageNumber > 0
    //     ? firstPage.pageable.pageNumber - 1
    //     : undefined,
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

export default useGetProblems