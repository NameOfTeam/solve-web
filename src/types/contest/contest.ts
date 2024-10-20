import { User } from "../user/user";
import { Problem } from "../problem/problem";

export interface Contest {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  owner: User;
  operators: User[];
  participants: User[];
  problems: Problem[];
  createdAt: string;
  updatedAt: string;
}
