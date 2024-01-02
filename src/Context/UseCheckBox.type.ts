import { ICompanyStockInfo } from "../Components/UI/DataTable/DataTable.type";

export interface ICheckBoxContext {
  selected: Array<string>;
  toogleRow: (code: string) => void;
  data: ICompanyStockInfo[];
  setData?: () => void;
  value: string | null;
  setValue: (value: string) => void;
}

export type IProps = {
  children: React.ReactNode;
};
