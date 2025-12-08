import InsightCard from './components/insight-card';
import styles from './insights.module.scss';
const mockData = [
	{
		extension: 'Speed Up',
		slug: 'speed-up',
		category: 'performance',
		active: true,
		stats: {
			primary: {
				label: 'Images optimized',
				value: 1284,
			},
			secondary: [
				{
					label: 'MB saved via CDN',
					value: 532,
				},
				{
					label: 'Optimized galleries',
					value: 42,
				},
			],
		},
		description:
			'Automatically optimizes your images and serves them from a fast CDN for improved load times.',
	},
	{
		extension: 'Slideshow',
		slug: 'slideshow',
		category: 'engagement',
		active: false,
		stats: {
			primary: {
				label: 'Galleries using slideshow',
				value: 8,
			},
			secondary: [
				{
					label: 'Fullscreen views',
					value: 143,
				},
			],
		},
		description:
			'Enhances your gallery with beautiful lightbox slideshow effects.',
	},
	{
		extension: 'Video',
		slug: 'video',
		category: 'engagement',
		active: true,
		stats: {
			primary: {
				label: 'Videos embedded',
				value: 32,
			},
			secondary: [
				{
					label: 'Video galleries',
					value: 14,
				},
			],
		},
		description:
			'Adds video support using self-hosted or external video sources.',
	},
	{
		extension: 'Advanced Shortcodes',
		slug: 'advanced-shortcodes',
		category: 'workflow',
		active: true,
		stats: {
			primary: {
				label: 'Dynamic shortcode links',
				value: 21,
			},
			secondary: [
				{
					label: 'Pages using filtered galleries',
					value: 12,
				},
			],
		},
		description:
			'Creates dynamic gallery URLs using query parameters without needing extra pages.',
	},
	{
		extension: 'Image Guardian',
		slug: 'image-guardian',
		category: 'protection',
		active: false,
		stats: {
			primary: {
				label: 'Images protected',
				value: 735,
			},
			secondary: [],
		},
		description:
			'Protects your images from right-click saving and hides direct image URLs.',
	},
	{
		extension: 'Albums',
		slug: 'albums',
		category: 'organization',
		active: true,
		stats: {
			primary: {
				label: 'Albums created',
				value: 18,
			},
			secondary: [
				{
					label: 'Galleries organized',
					value: 54,
				},
			],
		},
		description:
			'Organizes your galleries into beautiful albums for better structure and navigation.',
	},
	{
		extension: 'Slider',
		slug: 'slider',
		category: 'engagement',
		active: true,
		stats: {
			primary: {
				label: 'Sliders created',
				value: 6,
			},
			secondary: [
				{
					label: 'Slider views',
					value: 893,
				},
			],
		},
		description:
			'Transforms galleries into stunning sliders with smooth transitions.',
	},
	{
		extension: 'Fullscreen',
		slug: 'fullscreen',
		category: 'engagement',
		active: true,
		stats: {
			primary: {
				label: 'Fullscreen opens',
				value: 382,
			},
			secondary: [
				{
					label: 'Galleries using fullscreen',
					value: 27,
				},
			],
		},
		description:
			'Displays your galleries in fullscreen for a more immersive viewing experience.',
	},
	{
		extension: 'Instagram',
		slug: 'instagram',
		category: 'social',
		active: true,
		stats: {
			primary: {
				label: 'Instagram images imported',
				value: 302,
			},
			secondary: [
				{
					label: 'Synced galleries',
					value: 9,
				},
			],
		},
		description:
			'Imports and displays your Instagram photos directly in Modula galleries.',
	},
	{
		extension: 'Content Galleries',
		slug: 'content-galleries',
		category: 'workflow',
		active: false,
		stats: {
			primary: {
				label: 'Auto-generated galleries',
				value: 12,
			},
			secondary: [
				{
					label: 'Hours saved',
					value: 4.5,
				},
			],
		},
		description:
			'Automatically generates galleries from WordPress content.',
	},
	{
		extension: 'Defaults',
		slug: 'defaults',
		category: 'workflow',
		active: true,
		stats: {
			primary: {
				label: 'Gallery defaults',
				value: 3,
			},
			secondary: [
				{
					label: 'Album defaults',
					value: 2,
				},
				{
					label: 'Hours saved',
					value: 6,
				},
			],
		},
		description:
			'Create reusable presets for galleries and albums to save time configuring layouts.',
	},
	{
		extension: 'Roles',
		slug: 'roles',
		category: 'workflow',
		active: false,
		stats: {
			primary: {
				label: 'Custom permissions',
				value: 4,
			},
			secondary: [],
		},
		description:
			'Provides granular control over which WordPress users can manage galleries.',
	},
	{
		extension: 'Zoom',
		slug: 'zoom',
		category: 'engagement',
		active: true,
		stats: {
			primary: {
				label: 'Zoom interactions',
				value: 1267,
			},
			secondary: [
				{
					label: 'Images with zoom enabled',
					value: 492,
				},
			],
		},
		description: 'Allows visitors to zoom into images for better detail.',
	},
	{
		extension: 'EXIF',
		slug: 'exif',
		category: 'info',
		active: true,
		stats: {
			primary: {
				label: 'Images with EXIF',
				value: 214,
			},
			secondary: [],
		},
		description:
			'Displays EXIF data such as camera settings and location for supported images.',
	},
	{
		extension: 'Watermark',
		slug: 'watermark',
		category: 'protection',
		active: false,
		stats: {
			primary: {
				label: 'Images watermarked',
				value: 391,
			},
			secondary: [
				{
					label: 'Galleries with watermarking',
					value: 17,
				},
			],
		},
		description:
			'Automatically applies custom watermarks to protect your images.',
	},
	{
		extension: 'Deep Link',
		slug: 'deep-link',
		category: 'seo',
		active: true,
		stats: {
			primary: {
				label: 'Deep-linked items',
				value: 812,
			},
			secondary: [
				{
					label: 'SEO indexable pages',
					value: 812,
				},
			],
		},
		description:
			'Provides unique URLs for each gallery item to boost SEO and shareability.',
	},
	{
		extension: 'Pagination',
		slug: 'pagination',
		category: 'performance',
		active: true,
		stats: {
			primary: {
				label: 'Galleries using pagination',
				value: 16,
			},
			secondary: [
				{
					label: 'Avg load time reduction (%)',
					value: 28,
				},
			],
		},
		description:
			'Adds pagination to galleries for better performance and faster loading.',
	},
	{
		extension: 'Image Proofing',
		slug: 'image-proofing',
		category: 'workflow',
		active: false,
		stats: {
			primary: {
				label: 'Proofing galleries',
				value: 3,
			},
			secondary: [
				{
					label: 'Client approvals',
					value: 27,
				},
			],
		},
		description:
			'Creates proofing galleries for client selection and approval workflows.',
	},
	{
		extension: 'Comments',
		slug: 'comments',
		category: 'engagement',
		active: true,
		stats: {
			primary: {
				label: 'Comments posted',
				value: 74,
			},
			secondary: [
				{
					label: 'Images with comments',
					value: 31,
				},
			],
		},
		description: 'Allows users to comment directly on your gallery images.',
	},
];

export default function Insights() {
	return (
		<div className={styles.grid}>
			{mockData.map((insight) => (
				<InsightCard key={insight.slug} insight={insight} />
			))}
		</div>
	);
}
