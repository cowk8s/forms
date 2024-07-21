import { FormWrapper } from "@/app/(auth)/auth/components/FormWrapper";


const Page = async ({  }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  // const inviteToken = searchParams["inviteToken"] ?? null;

  return (
    <div className="grid">
      <div>
        <FormWrapper>
          <div></div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default Page;
