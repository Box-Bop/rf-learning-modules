module.exports = {
	modules: [
		// BurpSuite
		{
			id: 1,
			name: 'What is BurpSuite?',
			difficulty: 1,
			type: 1,
			description: 'In this module, you will ...',
			length: 15
		},
		{
			id: 2,
			name: 'How to set a target.',
			difficulty: 2,
			type: 2,
			description: 'In this module, you will ...',
			length: 30
		},
		{
			id: 3,
			name: 'How to use intercepts.',
			difficulty: 3,
			type: 2,
			description: 'In this module, you will ...',
			length: 30
		},
		{
			id: 4,
			name: 'How to use proxies.',
			difficulty: 2,
			type: 2,
			description: 'In this module, you will ...',
			length: 30
		},
		// Wireshark
		{
			id: 5,
			name: 'How to set up Wireshark network interfacing.',
			difficulty: 2,
			type: 2,
			description: 'In this module, you will ...',
			length: 15
		},
		{
			id: 6,
			name: 'How to sniff packets.',
			difficulty: 3,
			type: 2,
			description: 'In this module, you will ...',
			length: 30
		},
		{
			id: 7,
			name: 'How to use filters.',
			difficulty: 2,
			type: 2,
			description: 'In this module, you will ...',
			length: 30
		},
		{
			id: 8,
			name: 'What to look for in the data.',
			difficulty: 2,
			type: 2,
			description: 'In this module, you will ...',
			length: 30
		}
	],
	courses: [
		{
			id: 1,
			title: 'How to use BurpSuite',
			team: 1,
			description: 'In this course, you will ...'
		},
		{
			id: 2,
			title: 'How to use Wireshark',
			team: 2,
			description: 'In this course, you will ...'
		}
	],
	categories: [
		{
			id: 1,
			name: 'Inspecting network traffic.',
			description: 'Courses on how to search and manipulate through network activity.'
		},
		{
			id: 2,
			name: 'Protection against cyber criminals.',
			description: 'Courses on how to protect yourself and your applications from online threat.'
		}
	],
	// DB junction table links
	course_modules: [
		{
			course_id: 1,
			module_id: 1,
		},
		{
			course_id: 1,
			module_id: 2,
		},
		{
			course_id: 1,
			module_id: 3,
		},
		{
			course_id: 1,
			module_id: 4,
		},
		{
			course_id: 2,
			module_id: 5,
		},
		{
			course_id: 2,
			module_id: 6,
		},
		{
			course_id: 2,
			module_id: 7,
		},
		{
			course_id: 2,
			module_id: 8,
		},
	],
	category_courses: [
		{
			course_id: 1,
			category_id: 1,
		},
		{
			course_id: 2,
			category_id: 1,
		},
	]
}