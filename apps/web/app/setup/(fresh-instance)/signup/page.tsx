import { Metadata } from "next";
import {
  EMAIL_AUTH_ENABLED,
  EMAIL_VERIFICATION_DISABLED
} from "@cowk8s/lib/constants";
import { SignupOptions } from "@cowk8s/ui/SignupOptions";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Open-source Experience Management. Free & open source.",
};

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-xl font-medium">Create Administrator</h2>
      <p className="text-sm text-slate-800">This user has all the power.</p>
      <hr className="my-6 w-full border-slate-200" />
      <SignupOptions
        emailAuthEnabled={EMAIL_AUTH_ENABLED}
        emailFromSearchParams={""}
        emailVerificationDisabled={EMAIL_VERIFICATION_DISABLED}
        inviteToken={""}
      />
    </div>
  );
};

export default Page;
