"use client";

import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@cowk8s/ui/Button";

type TSigninFormState = {
  email: string;
  password: string;
  totpCode: string;
  backupCode: string;
};

export const SigninForm = ({
  passwordResetEnabled
}: {
  passwordResetEnabled: boolean
}) => {

  const formMethods = useForm<TSigninFormState>();

  return (
    <FormProvider {...formMethods}>
      <div className="text-center">
        <div>
          <form>

          </form>
        </div>
      </div>
    </FormProvider>
  );
}