export interface ICompanyStockInfo {
  code: string;
  company: string;
  lastPrice: number;
  changePercent: number;
  openPrice: number;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  volume: number;
  time: string;
}
