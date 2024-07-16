"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@cowk8s/ui/Button";

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
  const formMethods = useForm<TSigninFormState>();

  const [loggingIn, setLoggingIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const formLabel = useMemo(() => {
    return "Login to your account";
  })

  return (
    <FormProvider {...formMethods}>
      <div className="text-center">
        <h1>{formLabel}</h1>
        <div>
          <form>
            {showLogin && (
              <div>
                <div>
                  <label>
                    Email address
                  </label>
                  <input

                  />
                </div>
                <div>
                  <label>
                    Password
                  </label>
                </div>
              </div>
            )}

            {emailAuthEnabled && (
              <Button
                onClick={() => {
                  if (!showLogin) {

                  }
                }}
                variant="darkCTA"
                className="w-full justify-center"
                loading={loggingIn}>
                "Submit"
              </Button>
            )}
          </form>
        </div>
      </div>
    </FormProvider>
  );
}