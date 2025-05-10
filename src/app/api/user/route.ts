import { NextResponse } from "next/server";
import { stackServerApp } from "../../../stack"

export async function GET() {
  const user = await stackServerApp.getUser();
  return NextResponse.json(user);
}
