import { Button } from '@wordpress/components';
import useStateContext from './context/useStateContext';
import { setActiveTab } from './context/actions';
import { useTabsQuery } from './query/useTabsQuery';
import styles from './../shared-components/navigation.module.scss';
import { useCallback } from '@wordpress/element';

export default function Navigation() {
	const { state, dispatch } = useStateContext();
	const { data, isLoading } = useTabsQuery();

	const handleClick = useCallback(
		(slug) => {
			if (window && window.history && window.location) {
				const url = new URL(window.location);
				url.searchParams.set('tab', slug);
				window.history.replaceState({}, '', url);
			}
			dispatch(setActiveTab(slug));
		},
		[dispatch]
	);

	if ('undefined' === data || isLoading) {
		return;
	}

	return (
		<div className={styles.pageNavigation}>
			{data.map(({ label, slug, type = 'button', target = false }) => {
				const isLink = type === 'link';

				return (
					<Button
						key={slug}
						href={isLink ? slug : undefined}
						target={isLink && target ? '_blank' : undefined}
						rel={
							isLink && target ? 'noopener noreferrer' : undefined
						}
						onClick={() => handleClick(slug)}
						className={`${styles.headerButton} ${
							state.activeTab === slug
								? styles.headerButtonActive
								: ''
						}`}
					>
						{label}
					</Button>
				);
			})}
		</div>
	);
}
