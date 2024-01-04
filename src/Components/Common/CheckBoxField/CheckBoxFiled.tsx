import { useCallback } from "react";
import { useCheckBoxContext } from "../../../Context/";
import { CheckIcon } from "../../UI/CheckIcon";
import styles from "./CkeckBoxField.module.css";

export const CheckBoxFieled = ({ id }: { id: string }) => {
  const { selected, toggleRow } = useCheckBoxContext();

  const handleChange = useCallback(() => {
    toggleRow(id);
  }, [id, toggleRow]);

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={selected.includes(id)}
        onChange={handleChange}
      />
      <span className={styles.customCheckbox}>
        <CheckIcon />
      </span>
    </label>
  );
};
