import { createRoot } from '@wordpress/element';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/client';
import './index.scss';
import ExtensionList from './components/extension-list';
import Header from '../shared-components/header';
import Navigation from '../shared-components/navigation';

document.addEventListener('DOMContentLoaded', () => {
	const addonsPage = document.getElementById('modula-addons');

	if (!addonsPage) {
		return;
	}
	const root = createRoot(addonsPage);

	root.render(
		<QueryClientProvider client={queryClient}>
			<Header />
			<Navigation activeTab="extensions" />
			<ExtensionList />
		</QueryClientProvider>
	);
});
