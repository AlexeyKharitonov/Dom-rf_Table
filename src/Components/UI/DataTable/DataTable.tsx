import { ICompanyStockInfo } from "./DataTable.type";
import CheckBoxFiled from "../../Common/CheckBoxField/CheckBoxFiled";
import NoSearchResults from "../NoSearchResults/NoSearchResults";
import useCheckBoxContext from "../../../Context/UseCheckBox";
import styles from "./DataTable.module.css";

const DataTable = () => {
  const { filteredData, selected } = useCheckBoxContext();

  if (!filteredData.length) return <NoSearchResults />;
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td></td>
          <th>Код</th>
          <th>Кратк. наим.</th>
          <th>Последняя</th>
          <th>Изм., %</th>
          <th>Первая</th>
          <th>Мин.</th>
          <th>Макс.</th>
          <th>Ср.взвеш.</th>
          <th>Объем</th>
          <th>Время</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((company: ICompanyStockInfo) => (
          <>
            <tr
              key={company.code}
              className={
                selected.includes(company.code) ? styles.checkedClass : ""
              }
            >
              <td>
                <CheckBoxFiled id={company.code} />
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
          </>
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

export default DataTable;
