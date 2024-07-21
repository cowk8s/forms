
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@cowk8s/lib/authOptions";

const EnvLayout = async ({ children, params }) => {
  const session = await getServerSession(authOptions);


  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="h-full">{children}</div>
      </div>
    </>
  );
};

export default EnvLayout;
