import { FormWrapper } from "@/app/(auth)/auth/components/FormWrapper";


const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const inviteToken = searchParams["inviteToken"] ?? null;

  return (
    <div className="grid">
      <div>
        <FormWrapper>
          <
        </FormWrapper>
      </div>
    </div>
  );
};
