import { getServerSession } from "next-auth";
import { authOptions } from "@cowk8s/lib/authOptions";
import { deleteInvite, getInvite } from "@cowk8s/lib/invite/service";
import { verifyInviteToken } from "@cowk8s/lib/jwt";
import { Button } from "@cowk8s/ui/Button";
import { ContentLayout } from "@/app/(auth)/invite/components/ContentLayout";


const Page = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  
  try {
    const { inviteId, email } = verifyInviteToken(searchParams.token);

    const invite = await getInvite(inviteId);

    if (!invite) {
      return (
        <ContentLayout
          headline="Invite not found 😥"
          description="The invitation code cannot be found or has already been used."
        />
      );
    }

    const isInviteExpired = new Date(invite.expiresAt) < new Date();

    if (isInviteExpired) {
      return (
        <ContentLayout
          headline="Invite expired 😥"
          description="Invites are valid for 7 days. Please request a new invite."
        />
      );
    } else if (invite.accepted) {
      return (
        <ContentLayout
          headline="You’re already part of the squad."
          description="This invitation has already been used.">
          <Button>
            Contact support
          </Button>
          
        </ContentLayout>
      );
    } else if (!session) {

    } else {
      return (
        <ContentLayout headline="You’re in 🎉" description="Welcome to the organization.">
          <Button variant="darkCTA" href="/">
            Go to app
          </Button>
        </ContentLayout>
      );
    }
  } catch (e) {
    console.error(e);
    return (
      <ContentLayout
        headline="Invite not found 😥"
        description="The invitation code cannot be found or has already been used."
      />
    );
  }
};

export default Page;
