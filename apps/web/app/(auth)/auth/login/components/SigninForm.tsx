"use client";

// import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

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
  // const router = useRouter();
  const formMethods = useForm<TSigninFormState>();

  const [loggingIn] = useState(false);
  const [showLogin] = useState(false);

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