import { Editor, OnChange, useMonaco } from '@monaco-editor/react';
import { useTheme } from '../../contexts/theme';
import { useEffect, useState } from 'react';
import usePythonSuggestion from '../../hooks/editor/usePythonSuggestion';

const CodeEditor = ({code, handleCode}:{code: string, handleCode: OnChange}) => {
  const { theme } = useTheme();
    const { suggestions } = usePythonSuggestion();
  const [suggested, setSuggested] = useState(false);
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    if (suggested) return;
    setSuggested(true);

    monaco.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: () => {
        return {
          suggestions,
        } as any;
      },
    });
  }, [monaco]);

  return (
    <Editor
      height="70%"
      width="100%"
      language="python"
      theme={theme.backgroundColor === "#FFF" ? "vs-light" : "vs-dark"}
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
  );
}

export default CodeEditor