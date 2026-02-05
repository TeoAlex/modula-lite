import { Button } from '@wordpress/components';
import styles from './navigation.module.scss';
import navigationTabs from './navigation-tabs';

export default function Navigation({ activeTab }) {
	return (
		<div className={styles.pageNavigation}>
			{navigationTabs.map(
				({ label, slug, href, type = 'button', target = false }) => {
					const isLink = type === 'link';

					return (
						<Button
							key={slug}
							href={isLink ? href : undefined}
							target={isLink && target ? '_blank' : undefined}
							rel={
								isLink && target
									? 'noopener noreferrer'
									: undefined
							}
							className={`${styles.headerButton} ${
								activeTab === slug
									? styles.headerButtonActive
									: ''
							}`}
						>
							{label}
						</Button>
					);
				}
			)}
		</div>
	);
}
