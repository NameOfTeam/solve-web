import { useEffect } from "react";
import * as S from "./style";
import Editor, { useMonaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import editorTheme from "monaco-themes/themes/Pastels on Dark.json";
import ThemedContainer from "../../components/common/ThemedContainer";
import useGetProblem from "../../hooks/problem/useGetProblem";
import { useNavigate, useParams } from "react-router-dom";
import useSubmitProblem from "../../hooks/problem/useSubmitProblem";
import useGetSubmitProgress from "../../hooks/problem/useGetSubmitProgress";

const Problem = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();

  if(!problemId) {
    navigate('/problems');
    return;
  }

  const monaco = useMonaco();

  const { data, isLoading } = useGetProblem(problemId);
  const { result, submitCode, code, handleCode, isPending } = useSubmitProblem(problemId);
  const { progress } = useGetSubmitProgress();

  useEffect(() => {
    if (!monaco) return;

    monaco.editor.defineTheme(
      "editorTheme",
      editorTheme as editor.IStandaloneThemeData
    );

    monaco.editor.setTheme("editorTheme");
  }, [monaco]);

  useEffect(()=>{
    console.log(result);
  },[result]);

  return (
    <ThemedContainer>
      <S.Header>
        <S.Title>문제 제목 {progress}%</S.Title>
      </S.Header>
      <S.Main>
        <S.ProblemWrap>{isLoading ? "로딩중..." : data?.content}</S.ProblemWrap>
        <S.EditorWrap>
          <Editor
            height="100%"
            width="100%"
            language="python"
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
          color="#83ff76"
          $textcolor="#2b2b2b"
          $activecolor="#84ff76bc"
          onClick={() => {
            submitCode();
          }}
          disabled={isPending}
        >
          {isPending ? '채점 중...' : '제출'}
        </S.Button>
      </S.SubmitWrap>
    </ThemedContainer>
  );
};

export default Problem;
