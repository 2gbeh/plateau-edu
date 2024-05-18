import RouteHelper, { type NextRequest } from "@/server/helpers/RouteHelper";
import { studentsRepository } from "@/server/api/students/students.repository";
import {
  IStudentRequestContext,
  UpdateStudentDto,
} from "@/server/api/students/students.dto";

// http://127.0.0.1:3000/api/v1/students/1
export async function GET(_: NextRequest, context: IStudentRequestContext) {
  try {
    const { student_id } = context.params;
    const document = studentsRepository.read(student_id);
    return RouteHelper.response(document);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/v1/students/1
export async function PATCH(
  request: NextRequest,
  context: IStudentRequestContext
) {
  try {
    const { student_id } = context.params;
    const body = await request.json();
    // const validated = UpdateStudentDto.parse(body);
    const document = studentsRepository.update(body, student_id);
    return RouteHelper.response(document);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/v1/students/1
export async function PUT(
  request: NextRequest,
  context: IStudentRequestContext
) {
  return await PATCH(request, context);
}

// http://127.0.0.1:3000/api/v1/students/1
// http://127.0.0.1:3000/api/v1/students/1?undo=true
export async function DELETE(
  request: NextRequest,
  context: IStudentRequestContext
) {
  try {
    const { student_id } = context.params;
    const url = new URL(request.url);
    const queryUndo = url.searchParams.get("undo");
    //
    const document = RouteHelper.hasQuery(queryUndo)
      ? studentsRepository.restore(student_id)
      : studentsRepository.trash(student_id);
    return RouteHelper.response(document);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}
