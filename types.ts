export interface StockData {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface StockApiResult {
  symbol: string;
  data: StockData[];
}