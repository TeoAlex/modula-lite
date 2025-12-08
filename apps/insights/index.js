import { createRoot } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/client';
import './index.scss';
import Insights from './insights';
import Header from '../shared-components/header';
import Navigation from '../shared-components/navigation';

document.addEventListener('DOMContentLoaded', () => {
	const insightsPage = document.getElementById('modula-insights');

	if (!insightsPage) {
		return;
	}
	const root = createRoot(insightsPage);

	root.render(
		<QueryClientProvider client={queryClient}>
			<Header />
			<Navigation activeTab="insights" />
			<Insights />
		</QueryClientProvider>
	);
});
