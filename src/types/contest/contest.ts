import { User } from "../auth/user";
import { Problem } from "../problem/problem";

export interface Contest {
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  operators: User[];
  participants: User[];
  problems: Problem[];
  createdAt: string;
  updatedAt: string;
}