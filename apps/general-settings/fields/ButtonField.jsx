import { Button } from '@wordpress/components';
import { useApiCall } from '../query/useApiCall';
import { useState } from '@wordpress/element';

export default function ButtonField({ field, variant = 'primary' }) {
	const [loading, setLoading] = useState(false);
	const doApiCall = useApiCall();

	const handleClick = async () => {
		setLoading(true);
		if (field.api && field.api?.path) {
			await doApiCall(
				field.api.path,
				field.api.method || 'POST',
				field.api.data || {}
			);
		}
		setLoading(false);
	};

	return (
		<Button
			id={field.id || ''}
			href={field.href}
			variant={variant}
			onClick={handleClick}
			disabled={loading}
		>
			{field.text}
		</Button>
	);
}
