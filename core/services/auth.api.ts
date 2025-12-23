import { fetcher } from "./fetcher";

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type VerifyOtpPayload = {
  email: string;
  otp: string;
};
export type LoginPayload = {
  email: string;
  password: string;
};
export const AuthApi = {
  login: (payload: LoginPayload) =>
    fetcher("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  register: (payload: RegisterPayload) =>
    fetcher("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  verifyOtp: (payload: VerifyOtpPayload) =>
    fetcher("/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
