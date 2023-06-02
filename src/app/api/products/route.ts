import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, res: NextResponse) {
  const _page = req.nextUrl.searchParams.get("page");
  const _limit = req.nextUrl.searchParams.get("limit");

  const page = _page ? parseInt(_page, 10) : 1;
  const limit = _limit ? parseInt(_limit, 10) : 10;
  const offset = (page - 1) * limit;

  const size = await prisma.product.count();

  const data = await prisma.product.findMany({
    take: limit,
    skip: offset,
  });

  return NextResponse.json({
    size,
    rows: data,
    page,
    limit,
  });
}
