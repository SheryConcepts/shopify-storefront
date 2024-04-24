import { revalidate } from "@/lib/shopify";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await revalidate(req);
}
