import { responses } from "@/app/lib/api/response";
import { NextRequest } from "next/server";

export const OPTIONS = async (): Promise<Response> => {
  return responses.successResponse({}, true);
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { environemntId: string } }
): Promise<Response> => {
  try {

  } catch (error) {
    console.error(error);
    return responses.internalServerErrorResponse(`Unable to complete response: ${error.message}`, true);
  }
};
