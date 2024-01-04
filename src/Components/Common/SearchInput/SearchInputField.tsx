import { useCheckBoxContext } from "../../../Context/";
import { FaTimes } from "react-icons/fa";
import searchIcon from "../../../assets/Search.svg";
import styles from "./SearchInputField.module.css";

export const SearchInputField = () => {
  const { value, setValue } = useCheckBoxContext();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return (
    <div className={styles.inputWithIcon}>
      <img src={searchIcon} alt="searchInput" />
      <input
        value={value || ""}
        placeholder="Найти по кратк. наименованию..."
        maxLength={16}
        onChange={handleChange}
      />
      <button className={styles.clearInput} onClick={() => setValue("")}>
        <FaTimes size={20} />
      </button>
    </div>
  );
};
