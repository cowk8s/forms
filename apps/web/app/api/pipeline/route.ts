import { responses } from "@/app/lib/api/response";
import { headers } from "next/headers"

import { INTERNAL_SECRET } from "@cowk8s/lib/constants";


export const POST = async (request: Request) => {
  // check authentication with x-api-key header and CRON_SECRET env variable
  if (headers().get("x-api-key") !== INTERNAL_SECRET) {
    return responses.notAuthenticatedResponse();
  }
  const jsonInput = await request.json();
  
  return Response.json({ data: {} });
};
