import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Email disabled" },
    { status: 200 }
  );
}
