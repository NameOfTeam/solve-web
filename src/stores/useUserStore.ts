import { create } from "zustand";
import { User } from "../types/user/user";

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: "",
    email: "",
    role: "USER",
    username: "",
    money: 0,
    solvedProblem: 0,
    participatedContest: 0,
    streak: 0,
    solvedToday: false,
    rank: "Rookie",
  },
  setUser: (user: User) => set({ user }),
  clearUser: () =>
    set({
      user: {
        id: "",
        email: "",
        role: "USER",
        username: "",
        money: 0,
        solvedProblem: 0,
        participatedContest: 0,
        streak: 0,
        solvedToday: false,
        rank: "Rookie",
      },
    }),
}));
