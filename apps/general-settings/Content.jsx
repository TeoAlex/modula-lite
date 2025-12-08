import { Panel, PanelBody } from '@wordpress/components';
import useStateContext from './context/useStateContext';
import { useTabsQuery } from './query/useTabsQuery';
import SettingsForm from './SettingsForm';
import SaveButton from './SaveButton';
import styles from './Content.module.scss';

export default function Content() {
	const { state } = useStateContext();
	const { data, isLoading } = useTabsQuery();

	if (!data || isLoading) {
		return null;
	}

	const activeTab = data.find((tab) => tab.slug === state.activeTab);

	if (!activeTab || !activeTab.subtabs) {
		return null;
	}

	return (
		<div className={styles.pageContent}>
			{Object.entries(activeTab.subtabs).map(
				([subtabSlug, subtabData]) => {
					if (!subtabData || Object.keys(subtabData).length === 0) {
						return null;
					}

					return (
						<Panel
							className={styles.accordionWrapper}
							key={subtabSlug}
						>
							<PanelBody
								className={styles.accordionPannel}
								key={subtabSlug}
								title={
									<span className={styles.accordionTitle}>
										<span>{subtabData.label}</span>
										{subtabData.badge && (
											<span className={styles.proBadge}>
												{' '}
												{subtabData.badge}{' '}
											</span>
										)}
									</span>
								}
								initialOpen={true}
							>
								<SettingsForm
									config={subtabData?.config || {}}
									locked={subtabData?.locked || false}
									badge={subtabData?.badge || ''}
								/>
								{subtabData?.locked === false && <SaveButton />}
							</PanelBody>
						</Panel>
					);
				}
			)}
		</div>
	);
}
