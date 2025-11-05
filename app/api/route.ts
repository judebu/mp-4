import { NextResponse } from "next/server";
import getStockData from "@/lib/getStockData";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get("symbol") || "";

    const result = await getStockData(symbol);

    if (result === null) {
      // Rate lim
      return NextResponse.json(
        { error: "API call limit reached." },
        { status: 429 }
      );
    }

    if (!result) {
      // API down error handle
      return NextResponse.json(
        { error: "Unable to fetch data." },
        { status: 502 } 
      );
    }
    // success
    return NextResponse.json(result, { status: 200 });
  } 
// internal error
  catch (error) {
    console.error("Internal error", error);
    return NextResponse.json(
      { error: "Internal server error. Check code." },
      { status: 500 }
    );
  }
}