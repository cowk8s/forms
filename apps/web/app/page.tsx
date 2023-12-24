import type { Session } from "next-auth"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@cowk8s/lib/authOptions";

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    redirect("auth/login");
  }

  let environment;
  try{
    environment = "dev"
  } catch (error) {
    console.error("error getting environment", error);
  }

  return redirect(`/environments/${environment.id}`);
}