
class ResourceNotFoundError extends Error {
  statusCode = 404;
  constructor(resource: string, id: string) {
    super(`${resource} with ID ${id} not found`);
    this.name = "ResourceNotFoundError";
  }
}

class ValidationError extends Error {
  statusCode = 400;
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class UnknownError extends Error {
  statusCode = 500;
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

class DatabaseError extends Error {
  statusCode = 500;
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

class AuthenticationError extends Error {
  statusCode = 401;
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

class AuthorizationError extends Error {
  statusCode = 403;
  constructor(message: string) {
    super(message);
    this.name = "AuthorizationError";
  }
}

interface NetworkError {
  code: "network_error";
  message: string;
  status: number;
  url: URL;
}

export {
  ResourceNotFoundError,
  ValidationError,
  UnknownError,
  DatabaseError,
  AuthenticationError,
  AuthorizationError,
}

export type { NetworkError };