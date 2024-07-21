import { FormWrapper } from "@/app/(auth)/auth/components/FormWrapper";
import { SigninForm } from "@/app/(auth)/auth/login/components/SigninForm";
import { Metadata } from "next";

import {
  EMAIL_AUTH_ENABLED
} from "@cowk8s/lib/constants";

export const metadata: Metadata = {
  title: "Login",
  description: "Open-source Experience Management. Free & open source.",
};

const Page = async () => {
  return (
    <div className="grid min-h-screen w-full bg-gradient-to-tr from-slate-100 to-slate-50 lg:grid-cols-5">
      <div className="col-span-2">

      </div>
      <div className="col-span-3 flex flex-col items-center justify-center">
        <FormWrapper>
          <SigninForm
            emailAuthEnabled={EMAIL_AUTH_ENABLED}
          />
        </FormWrapper>
      </div>
    </div>
  );
};

export default Page;
