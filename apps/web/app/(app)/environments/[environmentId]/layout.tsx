
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@cowk8s/lib/authOptions";

const EnvLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return redirect(`/auth/login`);
  }
  
  return (
    <>
      {children}
    </>
  );
};

export default EnvLayout;
