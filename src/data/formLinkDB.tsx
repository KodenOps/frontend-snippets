type FormSnippet = {
	id: number;
	title: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced';
	link: string;
};

export const formSnippets: FormSnippet[] = [
	{
		id: 1,
		title: 'input + search from list',
		level: 'Intermediate',
		link: '/search-from-list',
	},
	{
		id: 2,
		title: 'Custom Checkbox with Tooltip',
		level: 'Beginner',
		link: '/custom-checkbox-tooltip',
	},
	{
		id: 3,
		title: 'Search and Select with Autocomplete',
		level: 'Advanced',
		link: '/search-select-autocomplete',
	},
	{
		id: 4,
		title: 'Multi-step Form with Progress Bar',
		level: 'Advanced',
		link: '/multi-step-form-progress',
	},
	{
		id: 5,
		title: 'Dynamic Form Field Addition',
		level: 'Intermediate',
		link: '/dynamic-form-field',
	},
	{
		id: 6,
		title: 'Inline Form Validation',
		level: 'Intermediate',
		link: '/inline-form-validation',
	},
	{
		id: 7,
		title: 'Floating Labels for Inputs',
		level: 'Beginner',
		link: '/floating-labels',
	},
	{
		id: 8,
		title: 'Password Strength Checker',
		level: 'Intermediate',
		link: '/password-strength-checker',
	},
	{
		id: 9,
		title: 'Responsive Login Form',
		level: 'Beginner',
		link: '/responsive-login-form',
	},
	{
		id: 10,
		title: 'Drag-and-Drop File Upload',
		level: 'Advanced',
		link: '/drag-drop-file-upload',
	},
	{
		id: 11,
		title: 'Form with Character Countdown',
		level: 'Beginner',
		link: '/character-countdown',
	},
	{
		id: 12,
		title: 'Theme-Switching Form Fields',
		level: 'Intermediate',
		link: '/theme-switching-form-fields',
	},
];
