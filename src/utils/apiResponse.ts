import { NextResponse } from "next/server";
const success = (data?: any, message: string = "Success") => {
  return NextResponse.json(
    {
      status: 200,
      data,
      message,
    },
    { status: 200 },
  );
};

const created = (data?: any, message: string = "Success create") => {
  return NextResponse.json(
    {
      status: 200,
      data,
      message,
    },
    { status: 201 },
  );
};

const badRequest = (errors: Array<any>, message: string = "Bad Request") => {
  return NextResponse.json(
    {
      status: 400,
      errors,
      message,
    },
    { status: 400 },
  );
};

const unauthorized = (message: string = "Unauthorized") => {
  return NextResponse.json(
    {
      status: 401,
      message,
    },
    { status: 401 },
  );
};

const forbidden = (message: string = "Forbidden") => {
  return NextResponse.json(
    {
      status: 403,
      message,
    },
    { status: 403 },
  );
};

const notFound = (message: string = "Not Found") => {
  return NextResponse.json(
    {
      status: 404,
      message,
    },
    { status: 404 },
  );
};

const internalServerError = (
  errors: Array<any>,
  message: string = "Internal Server Error",
) => {
  return NextResponse.json(
    {
      status: 500,
      message,
      errors,
    },
    { status: 500 },
  );
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
