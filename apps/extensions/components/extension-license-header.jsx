import { __, sprintf } from '@wordpress/i18n';
import { useState, useMemo } from '@wordpress/element';
import { Button } from '@wordpress/components';
import styles from './extension-license-header.module.scss';
import { useLicensingQuery } from '../query/useLicensingQuery';
import { useLicensingMutation } from '../query/useLicensingMutation';

export default function ExtensionLicenseHeader() {
	const [showLicenseField, setShowLicenseField] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const { data: license } = useLicensingQuery(inputValue || '');

	const licenseKey = useMemo(() => {
		return license?.license_key || inputValue;
	}, [license?.license_key, inputValue]);

	const displayLicenseKey = license?.license_key || inputValue;

	const activateMutation = useLicensingMutation();
	const deactivateMutation = useLicensingMutation();

	const isLicenseActive = license?.status === 'active';

	const isProcessing =
		activateMutation.isPending || deactivateMutation.isPending;

	const handleActivate = async () => {
		if (!displayLicenseKey.trim()) {
			return;
		}
		try {
			activateMutation.mutate({
				licenseKey: displayLicenseKey,
				action: 'activate',
			});
			setInputValue('');
		} catch (error) {
			console.error('Activation error:', error);
		}
	};

	const handleDeactivate = async () => {
		if (!licenseKey.trim()) {
			return;
		}
		try {
			deactivateMutation.mutate({
				licenseKey: displayLicenseKey,
				action: 'deactivate',
			});
			setInputValue('');
		} catch (error) {
			console.error('Deactivation error:', error);
		}
	};
	const licenseText = useMemo(() => {
		if (license?.expiration === 'lifetime' || license?.is_lifetime) {
			return sprintf(
				/* translators: 1: Product name */
				__(
					'Hello, your license (%1$s) is active for lifetime',
					'modula-best-grid-gallery'
				),
				license?.product_name || ''
			);
		}

		return sprintf(
			/* translators: 1: Product name, 2: Expiration date */
			__(
				'Hello, your license (%1$s) is active until %2$s',
				'modula-best-grid-gallery'
			),
			license?.product_name || '',
			new Date(license?.expiration).toLocaleDateString()
		);
	}, [license]);

	const licenseKeyText = useMemo(() => {
		if (isLicenseActive) {
			return __('Change license key', 'modula-best-grid-gallery');
		}

		if (showLicenseField) {
			return __('Hide License Key', 'modula-best-grid-gallery');
		}

		return __('Enter License Key', 'modula-best-grid-gallery');
	}, [showLicenseField, isLicenseActive]);

	return (
		<div className={styles.licenseHeader}>
			<div className={styles.licenseContent}>
				{isLicenseActive ? (
					<div className={styles.licenseActive}>
						<p className={styles.greeting}>{licenseText}</p>
					</div>
				) : (
					<div className={styles.licenseInactive}>
						<p className={styles.greeting}>
							{__(
								'Hello, please enter your license key to activate extensions',
								'modula-best-grid-gallery'
							)}
						</p>
					</div>
				)}
				{' | '}
				<Button
					variant="link"
					onClick={() => setShowLicenseField(!showLicenseField)}
					className={styles.toggleButton}
				>
					{licenseKeyText}
				</Button>
			</div>

			{showLicenseField && (
				<div className={styles.licenseKeySection}>
					<div className={styles.inputGroup}>
						<input
							type="text"
							value={displayLicenseKey}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder={__(
								'Enter your license key',
								'modula-best-grid-gallery'
							)}
							className={styles.licenseInput}
							disabled={isProcessing}
						/>
						<div className={styles.buttonGroup}>
							<Button
								variant="primary"
								onClick={handleActivate}
								disabled={
									!displayLicenseKey.trim() ||
									activateMutation.isPending ||
									isLicenseActive
								}
								isBusy={activateMutation.isPending}
								className={styles.actionButton}
							>
								{__('Activate', 'modula-best-grid-gallery')}
							</Button>
							<Button
								variant="secondary"
								onClick={handleDeactivate}
								disabled={
									!licenseKey.trim() ||
									deactivateMutation.isPending ||
									!isLicenseActive
								}
								isBusy={deactivateMutation.isPending}
								className={styles.actionButton}
							>
								{__(
									'Deactivate and clear license',
									'modula-best-grid-gallery'
								)}
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
