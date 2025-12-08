import styles from './header.module.scss';
import modulaLogo from '../../assets/images/logo-dark.webp';
export default function Header() {
	return (
		<>
			<div className={styles.pageHeader}>
				<div className={styles.logoContainer}>
					<img
						src={modulaLogo}
						alt="modula logo"
						className={styles.logo}
					/>
				</div>
			</div>
		</>
	);
}
