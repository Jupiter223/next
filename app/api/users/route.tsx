import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
// GET -getting data
export function GET(request: NextRequest) {
  //fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Max" },
    { id: 2, name: "King" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //validate
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
