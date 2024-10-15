import { useNavigate } from "react-router-dom";
import useGetProblems from "../../hooks/problem/useGetProblems";
import * as S from './style';
import ThemedText from "../../components/common/ThemedText";

const ProblemList = () => {
  const { data, ref } = useGetProblems();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>문제</S.Title>
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
                <ThemedText>
                  {problem.id} | {problem.title} | {problem.timeLimit} |{" "}
                  {problem.memoryLimit} | {problem.correctRate} |{" "}
                  {problem.state}
                </ThemedText>
              </S.ProblemItem>
            ))}
          </S.ProblemWrap>
        ))
      ) : (
        <ThemedText>문제를 불러오는 중입니다...</ThemedText>
      )}

      <div ref={ref} style={{ height: "1px", width: "100%" }} />
    </S.Container>
  );
};

export default ProblemList;
