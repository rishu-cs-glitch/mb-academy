import { useMutation } from "@tanstack/react-query";
import type { LoginPayload, RegisterPayload, VerifyOtpPayload } from "@/core/services/auth.api";
import { AuthApi } from "@/core/services/auth.api";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (payload: VerifyOtpPayload) => AuthApi.verifyOtp(payload),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => AuthApi.login(payload),
  });
};
