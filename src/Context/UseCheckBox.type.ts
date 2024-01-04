import { ICompanyStockInfo } from "../Components/UI/DataTable/DataTable.type";

export interface ICheckBoxContext {
  selected: Array<string>;
  toggleRow: (code: string) => void;
  data?: ICompanyStockInfo[];
  setData?: () => void;
  value: string | null;
  setValue: (value: string) => void;
  filteredData: ICompanyStockInfo[];
}
