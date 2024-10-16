import { create } from "zustand";
import { User } from "../types/auth/user";

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set)=>({
  user: {
    id: '',
    email: '',
    role: 'USER',
    username: '',
    money: 0,
    solvedProblem: 0,
    participatedContest: 0,
    streak: 0,
    streakToday: false,
    rank: 'Rookie',
  },
  setUser: (user: User) => set({user})
}))