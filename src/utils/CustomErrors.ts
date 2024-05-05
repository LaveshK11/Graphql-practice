import { GraphQLError } from "graphql";
import httpStatus from "http-status";

class AppError extends GraphQLError {
  extensions: {};

  constructor(
    public description: string,
    public status: number,
    public code?: string
  ) {
    super(description);
    this.message = description;
    this.extensions = { code: code, status: status };
  }
}

class BadRequest extends AppError {
  constructor(public description: string = "Bad request") {
    super("BAD REQUEST", httpStatus.BAD_REQUEST, description);
  }
}

class AuthorizationError extends AppError {
  constructor(public description: string = "Unauthorized  Error") {
    super("UNAUTHORIZED", httpStatus.UNAUTHORIZED, description);
  }
}

class ServerError extends AppError {
  constructor(public description: string = "Internal Server Error") {
    super("SERVER ERROR", httpStatus.INTERNAL_SERVER_ERROR, description);
  }
}

export { AppError, BadRequest, AuthorizationError, ServerError };
