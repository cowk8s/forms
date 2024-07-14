
import { getServerSession } from "next-auth";
import { authOptions } from "@cowk8s/lib/authOptions";

const AppLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {children}
    </>
  );
};

export default AppLayout;