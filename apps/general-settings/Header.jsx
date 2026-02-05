import logoUrl from '../../assets/images/modula-logo-black.webp';

export default function Header() {
	return (
		<>
			<div className="modula-page-header">
				<div className="modula-header-logo">
					<img
						src={logoUrl}
						alt="modula logo"
						className="modula-logo"
					/>
				</div>
			</div>
		</>
	);
}
