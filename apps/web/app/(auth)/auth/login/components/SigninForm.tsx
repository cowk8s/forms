"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@cowk8s/ui/Button";
import { PasswordInput } from "@cowk8s/ui/PasswordInput";
import { cn } from "@cowk8s/lib/cn";

interface TSigninFormState {
  email: string;
  password: string;
  totpCode: string;
  backupCode: string;
}

interface SignInFormProps {
  emailAuthEnabled: boolean;
}

export const SigninForm = ({
  emailAuthEnabled
}: SignInFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailRef = useRef<HTMLInputElement>(null);
  const formMethods = useForm<TSigninFormState>();

  const onSubmit: SubmitHandler<TSigninFormState> = async (data) => {
    setLoggingIn(true);

    try {
      const signInRespons = await signIn("credentials", {
        callbackUrl: searchParams?.get("callbackUrl") || "/",
        email: data.email.toLowerCase(),
        password: data.password,
        redirect: false,
      });


    } catch (error) {
      const errorMessage = error.toString();
      const errorFeedback = errorMessage.includes("Invalid URL")
        ? "Too many requests, please try again after some time!"
        : error.message;
      setSignInError(errorFeedback);
    } finally {
      setLoggingIn(false);
    }
  };

  const [loggingIn, setLoggingIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [totpLogin, setTotpLogin] = useState(false);
  const [signInError, setSignInError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const formLabel = useMemo(() => {
    return "Login to your account";
  })

  return (
    <FormProvider {...formMethods}>
      <div className="text-center">
        <h1 className="mb-4 text-slate-700">{formLabel}</h1>
        <div className="space-y-2">
          <form onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-2">
            {showLogin && (
              <div className={cn(totpLogin && "hidden")}>
                <div className="mb-2 transition-all duration-500 ease-in-out">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="work@email.com"
                    defaultValue={searchParams?.get("email") || ""}
                    className="focus:border-brand focus:ring-brand block w-full rounded-md border-slate-300 shadow-sm sm:text-sm"
                    {...formMethods.register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                </div>
                <div className="transition-all duration-500 ease-in-out">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={formMethods.control}
                    render={({ field }) => (
                      <PasswordInput
                        id="password"
                        autoComplete="current-password"
                        placeholder="*******"
                        aria-placeholder="password"
                        onFocus={() => setIsPasswordFocused(true)}
                        required
                        className="focus:border-brand focus:ring-brand block w-full rounded-md border-slate-300 shadow-sm sm:text-sm"
                        {...field}
                      />
                    )}
                    rules={{
                      required: true,
                    }}
                  />
                </div>
              </div>
            )}

            {emailAuthEnabled && (
              <Button
                onClick={() => {
                  if (!showLogin) {
                    setShowLogin(true);
                    // Add a slight delay before focusing the input field to ensure it's visible
                    setTimeout(() => emailRef.current?.focus(), 100);
                  } else if (formRef.current) {
                    formRef.current.requestSubmit();
                  }
                }}
                variant="darkCTA"
                className="w-full justify-center"
                loading={loggingIn}>
                {totpLogin ? "Submit" : "Login with Email"}
              </Button>
            )}
          </form>
        </div>
      </div>
    </FormProvider>
  );
}