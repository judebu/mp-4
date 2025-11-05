"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main>
      <div className="flex flex-col items-center justify-center p-60 space-y-3">
        <h1 className="text-3xl text-neutral-900 font-bold">
          About this project
        </h1>
        <p className="text-neutral-700 text-center max-w-md">
          This app lets you look up recent stock data using the Marketstack API.
          Enter a stock ticker symbol to get started.
        </p>

        <button
          onClick={() => router.push("/")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </main>
  );
}
