import RouteHelper, { type NextRequest } from "@/server/helpers/RouteHelper";
import { studentsRepository } from "@/server/api/students/students.repository";
import { CreateStudentDto } from "@/server/api/students/students.dto";

// http://127.0.0.1:3000/api/v1/students
export async function GET() {
  try {
    const collection = studentsRepository.read();
    return RouteHelper.response(collection);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/v1/students
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // const validated = CreateStudentDto.parse(body);
    const document = studentsRepository.create(body);
    return RouteHelper.response(document, 201);
  } catch (error) {
    return RouteHelper.response(error, 422);
  }
}
