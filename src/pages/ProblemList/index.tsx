import { useNavigate } from "react-router-dom";
import useGetProblems from "../../hooks/problem/useGetProblems";
import * as S from './style';
import ThemedText from "../../components/common/ThemedText";
import { useTheme } from "../../contexts/theme";
import { IoCaretDownOutline } from "react-icons/io5";

const ProblemList = () => {
  const { data, ref } = useGetProblems();
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <S.Container>
      <S.Title>문제</S.Title>
      <S.Hr background={theme.oppositeColor} />
      <S.SelectionWrap>
        <S.Select>
          <S.SelectTitle>상태</S.SelectTitle>
          <IoCaretDownOutline color={theme.oppositeColor} size={20} />
        </S.Select>
        <S.Select>
          <S.SelectTitle>티어</S.SelectTitle>
          <IoCaretDownOutline color={theme.oppositeColor} size={20} />
        </S.Select>
        <S.Select>
          <S.SelectTitle>언어</S.SelectTitle>
          <IoCaretDownOutline color={theme.oppositeColor} size={20} />
        </S.Select>
      </S.SelectionWrap>
      <S.TableTitleWrap>
        <S.TableTitleFiller />
        <S.TableTitle>시간제한</S.TableTitle>
        <S.TableTitle>메모리제한</S.TableTitle>
        <S.TableTitle>정답률</S.TableTitle>
        <S.TableTitle>풀이상태</S.TableTitle>
      </S.TableTitleWrap>
      {data ? (
        data.pages.map((page) => (
          <S.ProblemWrap key={page.pageable.pageNumber}>
            {page.content.map((problem) => (
              <S.ProblemItem
                key={problem.id}
                onClick={() => {
                  navigate(`/problems/${problem.id}`);
                }}
              >
                <S.ProblemTitle>
                  {problem.id}. {problem.title}
                </S.ProblemTitle>
                <S.Limits>{problem.timeLimit}초</S.Limits>
                <S.Limits>{problem.memoryLimit}MB</S.Limits>
                <S.Limits>{problem.correctRate}%</S.Limits>
                <S.ProblemStateWrap>
                  {problem.state === 'ACCEPTED' ? <S.Accepted>성공</S.Accepted> : problem.state === 'WRONG_ANSWER' && <S.Rejected>실패</S.Rejected>}
                </S.ProblemStateWrap>
              </S.ProblemItem>
            ))}
          </S.ProblemWrap>
        ))
      ) : (
        <ThemedText>문제를 불러오는 중입니다...</ThemedText>
      )}
      <div ref={ref} style={{ height: "5rem", width: "100%", marginBottom: '5rem' }} />
    </S.Container>
  );
};

export default ProblemList;
