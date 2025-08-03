import { useMutation } from "@tanstack/react-query";
import { api } from "./api";
import { LoginInput, RegisterInput } from "@/types/auth";

export const useRegister = () =>
  useMutation({
    mutationFn: async (data: RegisterInput) => {
      const res = await api.post("/auth/register", data);
      return res.data;
    },
    onError: (error) => {
      console.error("Register error:", error);
    },
  });

export const useLogin = () =>
  useMutation({
    mutationFn: async (data: LoginInput) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });