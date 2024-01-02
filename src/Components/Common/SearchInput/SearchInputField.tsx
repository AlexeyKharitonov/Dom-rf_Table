import useCheckBoxContext from "../../../Context/UseCheckBox";
import styles from "./SearchInputField.module.css";
import searchIcon from "../../../assets/Search.svg";

const SearchInputField = () => {
  const { setValue } = useCheckBoxContext();

  return (
    <div className={styles.inputWithIcon}>
      <img src={searchIcon} alt="searchInput" />
      <input
        type="text"
        placeholder="Найти по кратк. названию..."
        maxLength={16}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </div>
  );
};

export default SearchInputField;
