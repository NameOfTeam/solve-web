import { create } from "zustand";
import { User } from "../types/auth/user";

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set)=>({
  user: {
    email: '',
    role: 'USER',
    username: ''
  },
  setUser: (user: User) => set({user})
}))