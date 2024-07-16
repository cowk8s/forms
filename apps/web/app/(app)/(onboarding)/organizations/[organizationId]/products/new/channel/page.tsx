
import { Header } from "@cowk8s/ui/Header";

interface ChannelPageProps {
  params: {
    organizationId: string;
  };
}

const Page = async ({ params }: ChannelPageProps) => {
  return (
    <div>
      <Header
        title="Where do you want to survey people?"
        subtitle="Get started with proven best practices 🚀"
      />
      
    </div>
  );
};

export default Page;
