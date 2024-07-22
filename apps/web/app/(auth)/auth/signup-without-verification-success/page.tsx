
import { FormWrapper } from "@/app/(auth)/auth/components/FormWrapper";

const Page = () => {
  return (
    <FormWrapper>
      <h1>User successfully created</h1>
      <p>
        Your new user has been created successfully. Please click the button below and sign in to your
        account.
      </p>
      <hr className="my-4"/>
      
    </FormWrapper>
  );
};

export default Page;
