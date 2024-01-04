import styles from "./MarketHeader.module.css";

export const MarketHeader = () => {
  return (
    <header className={styles.header}>
      <h6 className={styles.title}>Московская биржа</h6>
      <div className={styles.description}>
        <div>Ход торгов, 31.12.2023</div>
        <div>Т+: Основной режим - безадрес.</div>
      </div>
    </header>
  );
};
