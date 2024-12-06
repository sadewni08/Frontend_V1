import styles from './styles/Sidebar.module.css';

const Sidebar = () => {
    return (
      <div className={styles.sidebar}>
        <button className={styles.button}>Create Account</button>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Consultants</button>
        <button className={styles.button}>Contractors</button>
        <button className={styles.button}>Calendar</button>
        <button className={styles.button}>Pricing</button>
      </div>
    );
};
export default Sidebar;
