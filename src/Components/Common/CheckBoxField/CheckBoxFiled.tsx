import useCheckBoxContext from "../../../Context/UseCheckBox";
import styles from "./CkeckBoxField.module.css";

const CheckBoxFiled = ({ id }: { id: string }) => {
  const { selected, toogleRow } = useCheckBoxContext();

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={selected.includes(id)}
        onChange={() => toogleRow(id)}
      />
      <span className={styles.customCheckbox}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <rect width="100%" height="100%" rx="4" fill="#4D44B5" />
          <path
            d="M5.5 12.5L10.5 17L19 7"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </label>
  );
};

export default CheckBoxFiled;
