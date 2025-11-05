"use client";

import { useState } from "react";
import type { StockApiResult } from "@/types";
import StockResult from "@/app/components/StockResult";


export default function Home() {
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState<StockApiResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchStock() {
    if (!symbol.trim()) {
      setError("Enter a stock symbol.");
      setData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(`/api?symbol=${symbol.trim()}`);
      const json = await res.json();

      if (!res.ok) {
        // error handle for API
        throw new Error(json.error || "Failed to fetch stock data.");
      }

      setData(json);
      //rndm catch error
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="rounded-lg border-2 py-2 px-2">
      <h1 className="text-3xl text-neutral-900 font-bold py-2">Stock Lookup</h1>

      <input className="rounded-lg border-2 py-2 px-2 mr-2"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <button className="cursor-pointer rounded-lg border-2 border-blue-600 text-blue-600 px-4 py-2 font-semibold hover:bg-blue-600 hover:text-white cursor-pointer transition" onClick={fetchStock}>Get Data</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && !error && <StockResult result={data}/>}
      </div>
    </main>
  );
}