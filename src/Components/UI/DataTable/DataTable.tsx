import { ICompanyStockInfo } from "./DataTable.type";
import { CheckBoxFieled } from "../../Common/CheckBoxField";
import { NoSearchResults } from "../NoSearchResults";
import { useCheckBoxContext } from "../../../Context/";
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
        {filteredData.map((company: ICompanyStockInfo) => (
          <tr
            key={company.code}
            className={
              selected.includes(company.code)
                ? styles.checkedClass
                : styles.invisibleBorder
            }
          >
            <td>
              <CheckBoxFieled id={company.code} />
            </td>
            <td className={styles.code}>{company.code}</td>
            <td className={styles.company}>{company.company}</td>
            <td>{company.lastPrice}</td>
            <td>{company.changePercent}</td>
            <td>{company.openPrice}</td>
            <td>{company.minPrice}</td>
            <td>{company.maxPrice}</td>
            <td>{company.avgPrice}</td>
            <td>{company.volume}</td>
            <td className={styles.time}>{company.time}</td>
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
