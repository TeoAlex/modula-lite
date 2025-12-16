import styles from './OAuthField.module.scss';
import FieldRenderer from '../FieldRenderer';

export default function CredentialsGroup({
	field,
	form,
	option,
	handleChange,
	evaluateConditions,
	locked = false,
}) {
	const { title, description, fields = [] } = field;

	return (
		<div className={styles.card + ' ' + styles.compactCard}>
			<div className={styles.header}>
				<div className={styles.heading}>
					<div>
						{title && <h4 className={styles.title}>{title}</h4>}
						{description && (
							<p className={styles.description}>{description}</p>
						)}
					</div>
				</div>
			</div>

			<div className={styles.credentialsGrid}>
				{fields.map((subField, idx) => {
					if (!evaluateConditions(subField.conditions)) {
						return null;
					}

					const name = option
						? `${option}.${subField.name}`
						: subField.name;

					return (
						<div
							key={subField?.name || idx}
							className={styles.credential}
						>
							<form.Field name={name}>
								{(fieldState) => (
									<FieldRenderer
										field={subField}
										fieldState={fieldState}
										handleChange={handleChange}
										disabled={
											subField.disabled || locked || false
										}
									/>
								)}
							</form.Field>
						</div>
					);
				})}
			</div>
		</div>
	);
}
