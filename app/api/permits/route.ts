import { NextResponse } from "next/server";
import { permits } from "@/lib/permits";

export function GET() {
  return NextResponse.json(permits);
}
