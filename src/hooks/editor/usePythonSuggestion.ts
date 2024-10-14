import { useMonaco } from "@monaco-editor/react"

interface Suggestion {
  label: string;
  kind: number;
  insertText: string;
  insertTextRules: number;
}

const usePythonSuggestion = () => {
  const monaco = useMonaco();

  let suggestions : Suggestion[] = [];

  if(monaco) {
    suggestions = [
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
    ];
  }

  return {
    suggestions
  }
}

export default usePythonSuggestion