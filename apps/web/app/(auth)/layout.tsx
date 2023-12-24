import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@cowk8s/lib/authOptions";

export default async function AuthLayout({ children }: { children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(`/`);
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}