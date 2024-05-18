import RouteHelper, { type NextRequest } from "@/server/helpers/RouteHelper";
import { teachersRepository } from "@/server/api/teachers/teachers.repository";
import { ITeacherRequestContext, UpdateTeacherDto } from "@/server/api/teachers/teachers.dto";

// http://127.0.0.1:3000/api/v1/teachers/1
export async function GET(_: NextRequest, context: ITeacherRequestContext) {
  try {
    const { teacher_id } = context.params;
    const document = teachersRepository.read(teacher_id);
    return RouteHelper.response(document);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/v1/teachers/1
export async function PATCH(
  request: NextRequest,
  context: ITeacherRequestContext
) {
  try {
    const { teacher_id } = context.params;
    const body = await request.json();
    // const validated = UpdateTeacherDto.parse(body);
    const document = teachersRepository.update(body, teacher_id);
    return RouteHelper.response(document);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/v1/teachers/1
export async function PUT(
  request: NextRequest,
  context: ITeacherRequestContext
) {
  return await PATCH(request, context);
}

// http://127.0.0.1:3000/api/v1/teachers/1
// http://127.0.0.1:3000/api/v1/teachers/1?undo=true
export async function DELETE(request: NextRequest, context: ITeacherRequestContext) {
  try {
    const { teacher_id } = context.params;
    const url = new URL(request.url);
    const queryUndo = url.searchParams.get("undo");
    //
    const document = RouteHelper.hasQuery(queryUndo)
      ? teachersRepository.restore(teacher_id)
      : teachersRepository.trash(teacher_id);
    return RouteHelper.response(document);
  } catch (error) {
    return RouteHelper.response(error, 404);
  }
}
