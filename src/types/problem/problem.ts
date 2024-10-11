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
  id: number;
  input: string;
  output: string;
}