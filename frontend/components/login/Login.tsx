"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useLogin } from "@/lib/mutations";
import { LoginResponse } from "@/types/auth";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useLogin();

  const onSubmit = (data: FormData) => {
    console.log('Login form submitted:', data);
    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log('Login successful:', response);
        
        // Store the access token and user info in localStorage
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        // Check the user's role and redirect accordingly
        const userRole = response.user.role;
        console.log('User role for redirection:', userRole);
        
        // Set a small timeout to ensure localStorage is properly updated
        setTimeout(() => {
          // Force navigation with hard redirect for more reliability
          if (userRole === "admin") {
            console.log('Redirecting to admin dashboard');
            window.location.href = "/admin/dashboard";
          } else if (userRole === "user") {
            console.log('Redirecting to user dashboard');
            window.location.href = "/user/dashboard";
          } else {
            // Default fallback if role is not recognized
            console.log('Redirecting to default dashboard');
            window.location.href = "/dashboard";
          }
        }, 100); // Small delay to ensure state is updated
      },
      onError: (error) => {
        console.error('Login error:', error);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Sign in to your account
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
        {mutation.isError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-center text-sm text-red-600 font-medium">
              {mutation.error?.message || "An error occurred during login. Please check your credentials and try again."}
            </p>
            {mutation.error && (
              <p className="text-xs text-red-500 mt-1">
                Error details: {JSON.stringify(mutation.error)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
