import { useNavigate } from 'react-router-dom';
import * as S from './style'
import { useTheme } from '../../contexts/theme';
import { IoCaretDownOutline } from 'react-icons/io5';
import Skeleton from '../../components/Skeleton';
import useGetContests from '../../hooks/contest/useGetContests';
import ThemedText from '../../components/common/ThemedText';

const ContestList = () => {
  const { data, ref } = useGetContests();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const today = new Date();

  const daysBetween = (date1: Date, date2: Date) => {
    const differenceInTime = date1.getTime() - date2.getTime();

    const differenceInDays = Math.ceil(
      differenceInTime / (1000 * 60 * 60 * 24)
    );

    return `${differenceInDays}일 후`;
  }

  return (
    <S.Container>
      <S.Title>대회</S.Title>
      <S.Hr background={theme.oppositeColor} />
      <S.SelectionWrap>
        <S.Select>
          <S.SelectTitle>상태</S.SelectTitle>
          <IoCaretDownOutline color={theme.oppositeColor} size={20} />
        </S.Select>
        <S.Select>
          <S.SelectTitle>참가제한</S.SelectTitle>
          <IoCaretDownOutline color={theme.oppositeColor} size={20} />
        </S.Select>
        <S.Select>
          <S.SelectTitle>언어</S.SelectTitle>
          <IoCaretDownOutline color={theme.oppositeColor} size={20} />
        </S.Select>
      </S.SelectionWrap>
      <S.TableTitleWrap>
        <S.TableTitleFiller />
        <S.TableTitle>주체자</S.TableTitle>
        <S.TableTitle>시작일</S.TableTitle>
        <S.TableTitle>종료일</S.TableTitle>
        <S.TableTitle>상태</S.TableTitle>
      </S.TableTitleWrap>
      {data ? (
        data.pages.map((page) => (
          <S.ContestWrap key={page.pageable.pageNumber}>
            {page.content.map((contest) => (
              <S.ContestItem
                key={contest.id}
                onClick={() => {
                  navigate(`/contests/${contest.id}`);
                }}
              >
                <S.ContestTitle>{contest.title}</S.ContestTitle>
                <S.Limits>{"fda"}</S.Limits>
                <S.Limits>{contest.startAt.split("T")[0]}</S.Limits>
                <S.Limits>{contest.endAt.split("T")[0]}</S.Limits>
                <S.ContestStateWrap>
                  {today.getTime() >= new Date(contest.startAt).getTime() &&
                  today.getTime() < new Date(contest.endAt).getTime() ? (
                    <S.Accepted>진행 중</S.Accepted>
                  ) : today.getTime() >= new Date(contest.endAt).getTime() ? (
                    <S.Rejected>종료</S.Rejected>
                  ) : (
                    <S.DayLeft background={theme.boxBorderColor}>
                      <ThemedText>
                        {daysBetween(new Date(contest.startAt), today)}
                      </ThemedText>
                    </S.DayLeft>
                  )}
                </S.ContestStateWrap>
              </S.ContestItem>
            ))}
          </S.ContestWrap>
        ))
      ) : (
        <S.ContestWrap>
          {[0, 1, 2, 3].map((_: any, idx) => (
            <Skeleton
              width={1500}
              height={80}
              style={{ width: "100%", borderRadius: 16 }}
              key={idx}
            />
          ))}
        </S.ContestWrap>
      )}
      <div
        ref={ref}
        style={{ height: "5rem", width: "100%", marginBottom: "5rem" }}
      />
    </S.Container>
  );
}

export default ContestList