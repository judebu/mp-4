
"use client";
import type { StockApiResult } from "@/types";

type StockResultProps = {
  result: StockApiResult;
};

export default function StockResult({ result }: StockResultProps) {
  const latest = result.data[0];

  if (!latest) {
    return null;
  }

  const dateOnly = latest.date.split("T")[0];

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-neutral-900">
        {result.symbol.toUpperCase()}
      </h2>
      <p className="text-sm text-neutral-500 mb-5">
        Last trading day: {dateOnly}
      </p >

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>

          <p className="text-neutral-500">Open</p>
          <p className=" text-neutral-900">${latest.open}</p>
        </div>

        <div>
          <p className="text-neutral-500">Close</p>
          <p className= "text-neutral-900">${latest.close}</p>
        </div>

        <div>
          <p className="text-neutral-500">High</p>
          <p className=" text-neutral-900">${latest.high}</p>
        </div>

        <div>
          <p className="text-neutral-500">Low</p>
          <p className=" text-neutral-900">${latest.low}</p>
        </div>

        <div>
          <p className="text-neutral-500" >Volume</p>
          <p className=" text-neutral-900" >

            {latest.volume.toLocaleString()}
          </p>

        </div>
      </div>

    </section>
  );
}
