import EncryptedStorage from "react-native-encrypted-storage";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface User {
  fullName: string;
  email: string;
  id: string;
  dob?: string;
  token: string;
}

export interface UserStore {
  init: boolean;
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}

export const defaultUser = {
  id: "",
  fullName: "",
  email: "",
  dob: "",
  token: "",
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      init: false,
      user: defaultUser,
      setUser: (user) => {
        set({ user });
      },
      resetUser: () => {
        set({ user: null });
      },
    }),
    {
      name: "vitalityUserStore",
      storage: createJSONStorage(() => EncryptedStorage),
    },
  ),
);
