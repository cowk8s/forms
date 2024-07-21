
import { redirect } from "next/navigation";

import { getIsFreshInstance } from "@cowk8s/lib/instance/service";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const isFreshInstance = await getIsFreshInstance();

  if (isFreshInstance) {
    redirect("/setup/intro");
  }
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <div className="isolate bg-white">
          <div className="bg-gradient-radial flex min-h-screen from-slate-200 to-slate-50">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
