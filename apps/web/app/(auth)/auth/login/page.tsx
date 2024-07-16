import { FormWrapper } from "@/app/(auth)/auth/components/FormWrapper";
import { SigninForm } from "@/app/(auth)/auth/login/components/SigninForm";

import {
  EMAIL_AUTH_ENABLED
} from "@cowk8s/lib/constants";

export default function SignInPage() {
  return (
    <div className="grid">
      <div className="col-span-2">

      </div>
      <div>
        <FormWrapper>
          <SigninForm
            emailAuthEnabled={EMAIL_AUTH_ENABLED}
          />
        </FormWrapper>
      </div>
    </div>
  );
};
