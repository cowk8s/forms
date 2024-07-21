// import { NextApiResponse } from "next";

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

interface ApiSuccessResponse<T = { [key: string]: unknown }> {
  data: T;
}

interface ApiErrorResponse {
  code:
  | "not_found"
  | "gone"
  | "bad_request"
  | "internal_server_error";
  message: string;
  details: {
    [key: string]: string | string[] | number | number[] | boolean | boolean[];
  };
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const badRequestResponse = (
  message: string,
  details?: { [key: string]: string },
  cors: boolean = false,
  cache: string = "private, no-store"
) => {
  const headers = {
    ...(cors && corsHeaders),
    "Cache-Control": cache,
  };

  return Response.json(
    {
      code: "bad_request",
      message,
      details: details || {},
    } as ApiErrorResponse,
    {
      status: 400,
      headers,
    }
  );
};

const notFoundResponse = (
  resourceType: string,
  resourceId: string,
  cors: boolean = false,
  cache: string = "private, no-store"
) => {
  const headers = {
    ...(cors && corsHeaders),
    "Cache-Control": cache,
  };

  return Response.json(
    {
      code: "not_found",
      message: `${resourceType} not found`,
      details: {
        resource_id: resourceId,
        resource_type: resourceType,
      },
    } as ApiErrorResponse,
    {
      status: 404,
      headers,
    }
  );
};

const successResponse = (data: Object, cors: boolean = false, cache: string = "private, no-store") => {
  const headers = {
    ...(cors && corsHeaders),
    "Cache-Control": cache,
  };

  return Response.json(
    {
      data,
    } as ApiSuccessResponse<typeof data>,
    {
      status: 200,
      headers,
    }
  );
};

const internalServerErrorResponse = (
  message: string,
  cors: boolean = false,
  cache: string = "private, no-store"
) => {
  const headers = {
    ...(cors && corsHeaders),
    "Cache-Control": cache,
  };

  return Response.json(
    {
      code: "internal_server_error",
      message,
      details: {},
    } as ApiErrorResponse,
    {
      status: 500,
      headers,
    }
  );
};

export const responses = {
  badRequestResponse,
  successResponse,
  internalServerErrorResponse,
  notFoundResponse
};
