import { FC, createContext, useContext, useState } from "react";
import dataTable from "../Data/DataTable.json";

import { ICheckBoxContext, IProps } from "./UseCheckBox.type";

const CheckBoxContext = createContext<ICheckBoxContext>({
  selected: [],
  toogleRow: () => {},
  data: [],
  value: null,
  setValue: () => {},
});

export const useCheckBoxContext = () => useContext(CheckBoxContext);

export const CheckBoxProvider: FC<IProps> = ({ children }) => {
  const [data] = useState(dataTable);
  const [selected, setSelected] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const toogleRow = (code: string) => {
    setSelected((currentSelected) =>
      currentSelected.includes(code)
        ? currentSelected.filter((item) => item !== code)
        : [...currentSelected, code]
    );
  };

  const filteredData = data.filter((item) =>
    item.company.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <CheckBoxContext.Provider
      value={{ filteredData, value, setValue, selected, toogleRow }}
    >
      {children}
    </CheckBoxContext.Provider>
  );
};

export default useCheckBoxContext;
