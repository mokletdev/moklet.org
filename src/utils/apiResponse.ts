import { NextResponse } from "next/server";
const success = (data?: object, message: string = "Success") => {
  return NextResponse.json({
    status: 200,
    data,
    message,
  });
};

const created = (data?: object, message: string = "Success create") => {
  return NextResponse.json({
    status: 200,
    data,
    message,
  });
};

const badRequest = (errors: Array<any>, message: string = "Bad Request") => {
  return {
    status: 400,
    errors,
    message,
  };
};

const unauthorized = (message: string = "Unauthorized") => {
  return {
    status: 401,
    message,
  };
};

const forbidden = (message: string = "Forbidden") => {
  return {
    status: 403,
    message,
  };
};

const notFound = (message: string = "Not Found") => {
  return {
    status: 404,
    message,
  };
};

const internalServerError = (
  errors: Array<any>,
  message: string = "Internal Server Error",
) => {
  return {
    status: 500,
    message,
    errors,
  };
};

export {
  success,
  created,
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  internalServerError,
};
