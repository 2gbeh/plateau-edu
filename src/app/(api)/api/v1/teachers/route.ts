import RouteHelper, { type NextRequest } from "@/server/helpers/RouteHelper";
import { teachersRepository } from "@/server/api/teachers/teachers.repository";

// http://127.0.0.1:3000/api/v1/teachers
export async function GET() {
  try {
    const collection = teachersRepository.read();
    return RouteHelper.response(collection);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/v1/teachers
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // const validated = CreateTeacherDto.parse(body);
    const document = teachersRepository.create(body);
    return RouteHelper.response(document, 201);
  } catch (error) {
    return RouteHelper.response(error, 422);
  }
}
