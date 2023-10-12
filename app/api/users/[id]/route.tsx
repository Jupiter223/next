import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { data } from "autoprefixer";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  debugger;

  //fetch data from a db
  //if not found,return 404 error
  //else return data
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //validate the request body
  //invalid return 400
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //Fetch the user with the given id
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not foundd" }, { status: 404 });
  const updateUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updateUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not foundd" }, { status: 404 });
  prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({});
}
