
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { authOptions } from "@cowk8s/lib/authOptions";

import { TProductConfigChannel, TProductConfigIndustry } from "@cowk8s/types/product";

interface OnboardingSurveyPageProps {
  params: {
    organizationId: string;
  };
  searchParams: {
    channel?: TProductConfigChannel;
    industry?: TProductConfigIndustry;
  };
}

const Page = async ({ params, searchParams }: OnboardingSurveyPageProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect(`/auth/login`);
  }

  const channel = searchParams.channel;
  const industry = searchParams.industry;
  if (!channel || !industry) return notFound();

  return (
    <></>
  );
};

export default Page;