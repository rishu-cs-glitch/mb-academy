import { create } from "zustand";

type AuthState = {
  emailForOtp: string | null;
  setEmailForOtp: (email: string) => void;
  clearEmailForOtp: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  emailForOtp: null,
  setEmailForOtp: (email) => set({ emailForOtp: email }),
  clearEmailForOtp: () => set({ emailForOtp: null }),
}));
