import styles from './Header.module.scss';
import edwardSvg from './The Edward_Logo.svg';

const Header = () => {

  return (
    <header data-testid="component-header">
      <div className={`container ${styles.header}`}>
        <h1 className={styles.header_title} >
            <img
              src={edwardSvg}
              alt="homepage"
              className={styles.header_logo}
            />
        </h1>
      </div>
    </header>
  );
};

export default Header;
