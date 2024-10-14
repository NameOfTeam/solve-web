import { useEffect, useState } from "react";
import * as S from "./style";
import Editor, { useMonaco } from "@monaco-editor/react";
import ThemedContainer from "../../components/common/ThemedContainer";
import useGetProblem from "../../hooks/problem/useGetProblem";
import { useNavigate, useParams } from "react-router-dom";
import useSubmitProblem from "../../hooks/problem/useSubmitProblem";
import useGetSubmitProgress from "../../hooks/problem/useGetSubmitProgress";
import { notification } from "antd";
import { primary, useTheme } from "../../context/theme";
import ThemedLink from "../../components/common/ThemedLink";

const Problem = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [testInput, setTestInput] = useState<string>("");
  const [suggested, setSuggested] = useState(false);

  if (!problemId) {
    navigate("/problems");
    return;
  }

  const monaco = useMonaco();

  const { data, isLoading } = useGetProblem(problemId);
  const { result, submitCode, code, handleCode, isPending } =
    useSubmitProblem(problemId);
  const { state, progress, subscribeProgress } = useGetSubmitProgress();

  const handleTestInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTestInput(value);
  };

  const onTestEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      setTestInput((prev) => prev + "\n결과가 나와요");
    }
  };

  useEffect(() => {
    if (!monaco) return;

    if (suggested) return;
    setSuggested(true);

    monaco.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: () => {
        return {
          suggestions: [
            {
              label: "False",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "False",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "None",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "None",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "True",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "True",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "and",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "and",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "as",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "as",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "assert",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "assert",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "async",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "async",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "await",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "await",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "break",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "break",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "class",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "class",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "continue",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "continue",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "def",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "def",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "del",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "del",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "elif",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "elif",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "else",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "else",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "except",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "except",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "finally",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "finally",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "for",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "for",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "from",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "from",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "global",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "global",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "if",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "if",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "import",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "import",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "in",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "in",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "is",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "is",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "lambda",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "lambda",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "nonlocal",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "nonlocal",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "not",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "not",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "or",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "or",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "pass",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "pass",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "raise",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "raise",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "return",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "return",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "try",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "try",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "while",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "while",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "with",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "with",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "yield",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "yield",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },

            // Built-in functions
            {
              label: "abs",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "abs",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "all",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "all",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "any",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "any",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "ascii",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "ascii",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "bin",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "bin",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "bool",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "bool",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "breakpoint",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "breakpoint",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "bytearray",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "bytearray",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "bytes",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "bytes",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "callable",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "callable",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "chr",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "chr",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "classmethod",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "classmethod",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "compile",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "compile",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "complex",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "complex",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "delattr",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "delattr",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "dict",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "dict",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "dir",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "dir",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "divmod",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "divmod",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "enumerate",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "enumerate",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "eval",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "eval",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "exec",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "exec",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "filter",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "filter",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "float",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "float",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "format",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "format",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "frozenset",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "frozenset",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "getattr",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "getattr",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "globals",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "globals",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "hasattr",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "hasattr",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "hash",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "hash",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "help",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "help",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "hex",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "hex",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "id",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "id",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "input",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "input",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "int",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "int",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "isinstance",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "isinstance",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "issubclass",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "issubclass",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "iter",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "iter",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "len",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "len",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "list",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "list",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "locals",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "locals",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "map",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "map",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "max",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "max",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "memoryview",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "memoryview",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "min",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "min",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "next",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "next",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "object",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "object",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "oct",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "oct",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "open",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "open",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "ord",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "ord",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "pow",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "pow",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "print",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "print",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "property",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "property",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "range",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "range",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "repr",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "repr",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "reversed",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "reversed",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "round",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "round",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "set",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "set",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "setattr",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "setattr",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "slice",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "slice",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "sorted",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "sorted",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "staticmethod",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "staticmethod",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "str",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "str",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "sum",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "sum",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "super",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "super",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "tuple",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "tuple",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "type",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "type",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "vars",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "vars",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "zip",
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: "zip",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
            {
              label: "import",
              kind: monaco.languages.CompletionItemKind.Module,
              insertText: "import",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            },
          ],
        } as any;
      },
    });
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
            theme={theme.backgroundColor === "#2b2b2b" ? "vs-dark" : "vs-light"}
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
          <S.ResultWrap>
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
          </S.ResultWrap>
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
          {isPending ? "채점 중..." : "제출"}
        </S.Button>
      </S.SubmitWrap>
    </ThemedContainer>
  );
};

export default Problem;
