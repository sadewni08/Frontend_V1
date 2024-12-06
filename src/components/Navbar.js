import Link from 'next/link';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>CiviLink</div>
      <div className={styles.navbarLinks}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
      <button className={styles.navbarButton}>Sign Up</button>
    </nav>
  );
};

export default Navbar;