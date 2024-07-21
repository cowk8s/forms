import { getSessionUser } from "@/app/lib/api/apiHelper";

import { prisma } from "@cowk8s/database";

export const GET = async () => {
  const sessionUser = await getSessionUser();
  if (!sessionUser) {
    return new Response("Not authenticated", {
      status: 401,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      // email: sessionUser.email,
    },
  });

  return Response.json(user);
};