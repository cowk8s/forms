"use client";

import { SignupOptions } from "@cowk8s/ui/SignupOptions";

interface SignupFormProps {
  webAppUrl: string;
}

export const SignupForm = ({
  webAppUrl
}: SignupFormProps) => {
  return (
    <>
      <div className="text-center">
        <h1 className="mb-4 text-slate-700">Create your Formbricks account</h1>
      </div>

      <div className="mt-9 text-center text-xs">
        <span>Have an account?</span>
        <br />
      </div>
    </>
  );
};
