"use server";

import {StockData} from "@/types";

const MARKET_API_KEY = process.env.MARKET_API_KEY;

export default async function getStockData(symbol: string):
    Promise<{ symbol: string; data: StockData[] } | undefined | null> {

  try {
    if (!symbol) return undefined;

    const res = await fetch(
      `http://api.marketstack.com/v2/eod?access_key=${MARKET_API_KEY}&symbols=${symbol}&limit=1&sort=DESC`
    );

    if (res.status === 429) {
      return null; 
    } else if (res.status !== 200) {
      return undefined; 
    }
    const jsonRes = await res.json();
    return { symbol: jsonRes.data[0].symbol, data: jsonRes.data };
  } catch (error) {
    console.log("ERROR", error);
    return undefined;
  }
}