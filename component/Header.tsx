import styles from "./Header.module.css";

interface HeaderProps {
    title: string
};

const Header = ( Props :HeaderProps)=>{
    return(
        <div className={styles.Header}>
            <div className={styles.title}>
                <p className="">{Props.title}</p>
            </div>
        </div>
    )
};

export default Header;

