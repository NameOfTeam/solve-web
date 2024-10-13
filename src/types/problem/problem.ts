export interface Problem {
  id: number,
  title: string,
  content: string;
  input: string;
  output: string;
  memoryLimit: number;
  timeLimit: number;
  correctRate: number;
  testCases: ProblemTestCase[];
}

export interface ProblemTestCase {
  input: string;
  expectedOutput: string;
}

export interface SubmitCode {
  code: string;
  testCases: ProblemTestCase[];
  language: string;
  timeLimit: number;
  memLimit: number;
}

export interface SubmitResults {
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
}

export interface SubmitResponse {
  status: string;
  results: SubmitResults[];
}