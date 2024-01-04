import { FC, createContext, useContext, useMemo, useState } from "react";
import dataTable from "../Data/DataTable.json";
import { ICheckBoxContext } from "./UseCheckBox.type";

const CheckBoxContext = createContext<ICheckBoxContext>({
  selected: [],
  toggleRow: () => {},
  data: [],
  value: null,
  setValue: () => {},
  filteredData: [],
});

export const useCheckBoxContext = () => useContext(CheckBoxContext);

export const CheckBoxProvider: FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [data] = useState(dataTable);
  const [selected, setSelected] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const toggleRow = (code: string) => {
    setSelected((currentSelected) =>
      currentSelected.includes(code)
        ? currentSelected.filter((item) => item !== code)
        : [...currentSelected, code]
    );
  };

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.company.toLowerCase().includes(value.toLowerCase())
      ),
    [data, value]
  );

  return (
    <CheckBoxContext.Provider
      value={{ filteredData, value, setValue, selected, toggleRow }}
    >
      {children}
    </CheckBoxContext.Provider>
  );
};
