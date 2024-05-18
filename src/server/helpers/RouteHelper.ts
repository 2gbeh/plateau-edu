import { ApiError } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export { type NextRequest } from "next/server";

export default class RouteHelper {
  static hasQuery = (query: unknown) =>
    query && query.toString().trim().length > 0;

  static debug = (error: unknown) => console.log("RouteHelperError: ", error);

  static response(result: unknown, status = 200) {
    const isSuccess = status < 400;

    // thrown from repository
    if (result instanceof ApiError) {
      status = result.statusCode;
      result = result.message;
    }

    return NextResponse.json(
      {
        success: isSuccess,
        [isSuccess ? "data" : "message"]: result,
      },
      { status }
    );
  }
}
