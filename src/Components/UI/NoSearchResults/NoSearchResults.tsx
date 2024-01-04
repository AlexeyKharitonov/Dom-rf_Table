import { useCheckBoxContext } from "../../../Context";
import styles from "./NoSearchResults.module.css";

export const NoSearchResults = () => {
  const { value } = useCheckBoxContext();

  return (
    <div className={styles.noSearch}>
      {`По запросу «`}
      <span className={styles.value}>{value}</span>
      {`» ничего не найдено`}
    </div>
  );
};
