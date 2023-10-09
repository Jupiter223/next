import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch data from a db
  //if not found,return 404 error
  //else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Max" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate the request body
  //invalid return 400
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //Fetch the user with the given id
  if (params.id > 10)
    return NextResponse.json({ error: "User not foundd" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not foundd" }, { status: 404 });
  return NextResponse.json({});
}
