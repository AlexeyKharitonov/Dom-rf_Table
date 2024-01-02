import useCheckBoxContext from "../../../Context/UseCheckBox";
import styles from "./NoSearchResults.module.css";

const NoSearchResults = () => {
  const { value } = useCheckBoxContext();

  return (
    <div className={styles.noSearch}>
      {`По запросу «`}
      <span className={styles.value}>{value}</span>
      {`» ничего не найдено`}
    </div>
  );
};

export default NoSearchResults;
