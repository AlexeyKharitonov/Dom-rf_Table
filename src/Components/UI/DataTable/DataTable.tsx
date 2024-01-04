import { ICompanyStockInfo } from "./DataTable.type";
import { CheckBoxFieled } from "../../Common/CheckBoxField";
import { NoSearchResults } from "../NoSearchResults";
import { useCheckBoxContext } from "../../../Context/";
import { formatChangePercent, formatVolume } from "../../../Utils/";
import styles from "./DataTable.module.css";

export const DataTable = () => {
  const { filteredData, selected } = useCheckBoxContext();

  if (!filteredData.length) return <NoSearchResults />;
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Код</th>
          <th scope="col">Кратк. наим.</th>
          <th scope="col">Последняя</th>
          <th scope="col">Изм., %</th>
          <th scope="col">Первая</th>
          <th scope="col">Мин.</th>
          <th scope="col">Макс.</th>
          <th scope="col">Ср.взвеш.</th>
          <th scope="col">Объем</th>
          <th scope="col">Время</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item: ICompanyStockInfo) => (
          <tr
            key={item.code}
            className={
              selected.includes(item.code)
                ? styles.checkedClass
                : styles.invisibleBorder
            }
          >
            <td>
              <CheckBoxFieled id={item.code} />
            </td>
            <td className={styles.code}>{item.code}</td>
            <td className={styles.company}>{item.company}</td>
            <td>{item.lastPrice}</td>
            <td>{formatChangePercent(item.changePercent)}</td>
            <td>{formatVolume(item.openPrice)}</td>
            <td>{formatVolume(item.minPrice)}</td>
            <td>{formatVolume(item.maxPrice)}</td>
            <td>{formatVolume(item.avgPrice)}</td>
            <td>{formatVolume(item.volume)}</td>
            <td className={styles.time}>{item.time}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={11} className={styles.tableFooter}>
            Показано <span className={styles.tableNumber}>25</span> компаний из{" "}
            <span className={styles.tableNumber}>100</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
