export interface User {
  id: string;
  email: string;
  role: string;
  username: string;
  money: number;
  participatedContest: number;
  solvedProblem: number;
}

// localhost:8080/avatars/{userId}.webp
