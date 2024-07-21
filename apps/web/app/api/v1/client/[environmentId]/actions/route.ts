import { responses } from "@/app/lib/api/response";
import { ZActionInput } from "@cowk8s/types/actions";


interface Context {
  params: {
    environmentId: string;
  };
}

export const OPTIONS = async (): Promise<Response> => {
  return responses.successResponse({}, true);
};

export const POST = async (req: Request, context: Context): Promise<Response> => {
  try {
    const jsonInput = await req.json();

    // validate using zod
    const inputValidation = ZActionInput.safeParse({
      ...jsonInput,
      environmentId: context.params.environmentId,
    });

    if (!inputValidation.success) {
      return responses.badRequestResponse(
        "Fields are missing or incorrectly formatted",
        transformErrorToDetails(inputValidation.error),
        true
      );
    }
  } catch (error) {
    console.error(error);
    return responses.internalServerErrorResponse("Unable to handle the request: " + error.message, true);
  }
};