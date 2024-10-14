import { useEffect, useState } from "react";
import * as S from "./style";
import Editor, { useMonaco } from "@monaco-editor/react";
import ThemedContainer from "../../components/common/ThemedContainer";
import useGetProblem from "../../hooks/problem/useGetProblem";
import { useNavigate, useParams } from "react-router-dom";
import useSubmitProblem from "../../hooks/problem/useSubmitProblem";
import useGetSubmitProgress from "../../hooks/problem/useGetSubmitProgress";
import { notification } from "antd";
import { primary, secondary, useTheme } from "../../context/theme";
import ThemedLink from "../../components/common/ThemedLink";

const Problem = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [testInput, setTestInput] = useState<string>('');

  if (!problemId) {
    navigate("/problems");
    return;
  }

  const monaco = useMonaco();

  const { data, isLoading } = useGetProblem(problemId);
  const { result, submitCode, code, handleCode, isPending } =
    useSubmitProblem(problemId);
  const { state, progress, subscribeProgress } = useGetSubmitProgress();

  const handleTestInput = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTestInput(value);
  }

  const onTestEnter = (e:React.KeyboardEvent) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      setTestInput((prev) => prev + "\n결과가 나와요");
    }
  }

  useEffect(() => {
    if (!monaco) return;
  }, [monaco]);

  useEffect(() => {
    if (result) {
      subscribeProgress(result.data.id);
    }
  }, [result]);

  useEffect(() => {
    if (state === "ACCEPTED") {
      notification.success({ message: "맞았습니다!!" });
    } else if (state === "WRONG_ANSWER") {
      notification.error({ message: "틀렸습니다." });
    } else if (state === "TIME_LIMIT_EXCEEDED") {
      notification.error({ message: "시간 초과" });
    } else if (state === "MEMORY_LIMIT_EXCEEDED") {
      notification.error({ message: "메모리 초과" });
    } else if (state === "RUNTIME_ERROR") {
      notification.error({ message: "런타임 에러" });
    }
  }, [state]);

  return (
    <ThemedContainer>
      <S.Header>
        <S.Title>{data?.title}</S.Title>
      </S.Header>
      <S.Main>
        <S.ProblemWrap>
          {isLoading ? (
            "로딩중..."
          ) : (
            <>
              <S.Section>
                <S.SectionTitle>문제</S.SectionTitle>
                <S.SectionContent>{data?.content}</S.SectionContent>
              </S.Section>

              <S.Section>
                <S.SectionTitle>입력</S.SectionTitle>
                <S.SectionContent>{data?.input}</S.SectionContent>
              </S.Section>

              <S.Section>
                <S.SectionTitle>출력</S.SectionTitle>
                <S.SectionContent>{data?.output}</S.SectionContent>
              </S.Section>

              <div>
                <S.SectionTitle>테스트케이스</S.SectionTitle>
                {data?.testCases.map((testCase, i) => (
                  <S.TestCaseWrap key={testCase.id}>
                    <S.TestCase>
                      <S.TestCaseType>예제 입력 {i + 1}</S.TestCaseType>
                      <S.TestCaseBox>
                        <S.SectionContent>{testCase.input}</S.SectionContent>
                      </S.TestCaseBox>
                    </S.TestCase>

                    <S.TestCase>
                      <S.TestCaseType>예제 출력 {i + 1}</S.TestCaseType>
                      <S.TestCaseBox>
                        <S.SectionContent>{testCase.output}</S.SectionContent>
                      </S.TestCaseBox>
                    </S.TestCase>
                  </S.TestCaseWrap>
                ))}
              </div>

              <S.Section>
                <S.SectionTitle>출처</S.SectionTitle>
                <S.TestCaseBox>
                  <S.SectionContent>
                    문제를 만든 사람:{" "}
                    <ThemedLink to={`/users/${data?.author.username}`}>
                      {data?.author.username}
                    </ThemedLink>
                  </S.SectionContent>
                </S.TestCaseBox>
              </S.Section>
            </>
          )}
        </S.ProblemWrap>

        <S.EditorWrap>
          <Editor
            height="70%"
            width="100%"
            language="python"
            theme={theme.backgroundColor === "#fff" ? "vs-light" : "vs-dark"}
            options={{
              fontSize: 15,
              minimap: {
                enabled: false,
              },
              scrollbar: {
                vertical: "auto",
                horizontal: "auto",
              },
              overviewRulerBorder: false,
              overviewRulerLanes: 0,
            }}
            onChange={handleCode}
            value={code}
          />
          <ThemedContainer>
            <S.TestResultWrap>
              <S.TestResultText
                onChange={handleTestInput}
                value={testInput}
                onKeyDown={onTestEnter}
              ></S.TestResultText>
            </S.TestResultWrap>
            <S.ProgressWrap>
              <S.ProgressBarWrap>
                {progress > 0 && (
                  <S.Progress progress={progress} background={primary}>
                    <S.ProgressText>{progress}%</S.ProgressText>
                  </S.Progress>
                )}
              </S.ProgressBarWrap>
            </S.ProgressWrap>
          </ThemedContainer>
        </S.EditorWrap>
      </S.Main>
      <S.SubmitWrap>
        <S.Button
          color="#5c5c5c"
          $textcolor="#f1f1f1"
          $activecolor="#515151"
          disabled={isPending}
        >
          테스트
        </S.Button>
        <S.Button
          color={secondary}
          $textcolor="#fff"
          $activecolor="#84ff76bc"
          onClick={() => {
            submitCode();
          }}
          disabled={isPending || (progress !== 0 && progress < 100)}
        >
          {isPending || (progress !== 0 && progress < 100)
            ? "채점 중..."
            : "제출"}
        </S.Button>
      </S.SubmitWrap>
    </ThemedContainer>
  );
};

export default Problem;
