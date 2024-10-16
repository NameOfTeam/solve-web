import { useTheme } from '../../contexts/theme';
import useGetContests from '../../hooks/contest/useGetContests';
import { useLoadingStore } from '../../stores/useLoadingStore';
import Skeleton from '../Skeleton';
import * as S from './style'

const ContestBox = () => {
  const { theme } = useTheme();
  const { data } = useGetContests();
  const loading = useLoadingStore(state=>state.loading);

  return (
    <S.Container>
      <S.ContestBoxTtile>대회</S.ContestBoxTtile>
      {loading ? (
        <S.ContestWrap>
          <S.ContestItem
            border={theme.boxBorderColor}
            style={{ cursor: "default" }}
          >
            <Skeleton width={150} height={30} style={{ borderRadius: 8 }} />
            <Skeleton width={70} height={30} style={{ borderRadius: 8 }} />
          </S.ContestItem>
          <S.ContestItem
            border={theme.boxBorderColor}
            style={{ cursor: "default" }}
          >
            <Skeleton width={150} height={30} style={{ borderRadius: 8 }} />
            <Skeleton width={70} height={30} style={{ borderRadius: 8 }} />
          </S.ContestItem>
          <S.ContestItem
            border={theme.boxBorderColor}
            style={{ cursor: "default" }}
          >
            <Skeleton width={150} height={30} style={{ borderRadius: 8 }} />
            <Skeleton width={70} height={30} style={{ borderRadius: 8 }} />
          </S.ContestItem>
          <S.ContestItem
            border={theme.boxBorderColor}
            style={{ cursor: "default" }}
          >
            <Skeleton width={150} height={30} style={{ borderRadius: 8 }} />
            <Skeleton width={70} height={30} style={{ borderRadius: 8 }} />
          </S.ContestItem>
        </S.ContestWrap>
      ) : (
        <>
          {data && data.pages[0].content.length > 0 ? (
            data?.pages.map((page) => (
              <S.ContestWrap key={page.pageable.pageNumber}>
                {page.content.map((item: any) => (
                  <S.ContestItem border={theme.boxBorderColor} key={item.id}>
                    <S.ContestTtile>{item.title}</S.ContestTtile>
                    <S.ContestStatus>{item.status}</S.ContestStatus>
                  </S.ContestItem>
                ))}
              </S.ContestWrap>
            ))
          ) : (
            <S.EmptyContestWrap>
              <S.EmptyContest color={theme.boxBorderColor}>
                예정된 대회가 없어요,,,
              </S.EmptyContest>
            </S.EmptyContestWrap>
          )}
        </>
      )}
    </S.Container>
  );
}

export default ContestBox