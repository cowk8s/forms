
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { authOptions } from "@cowk8s/lib/authOptions";
import { getProductByEnvironmentId } from "@cowk8s/lib/product/service";
import { AuthorizationError } from "@cowk8s/types/errors";

const EnvLayout = async ({ children, params }) => {
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
