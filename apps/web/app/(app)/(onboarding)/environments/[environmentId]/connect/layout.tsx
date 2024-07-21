import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@cowk8s/lib/authOptions";

const OnboardingLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return redirect(`/auth/login`);
  }

  return <div className="flex-1 bg-slate-50">{children}</div>;
};

export default OnboardingLayout;
