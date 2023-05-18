module.exports = {
	modules: [
		// BurpSuite
		{
			id: 1,
			name: 'What is BurpSuite?',
		},
		{
			id: 2,
			name: 'How to set a target.',
			difficulty: 2,
			type: 2,
			length: 30
		},
		{
			id: 3,
			name: 'How to use intercepts.',
			difficulty: 3,
			type: 2,
			length: 30
		},
		{
			id: 4,
			name: 'How to use proxies.',
			difficulty: 2,
			type: 2,
			length: 30
		},
		// Wireshark
		{
			id: 5,
			name: 'How to set up Wireshark network interfacing.',
			difficulty: 2,
			type: 2,
		},
		{
			id: 6,
			name: 'How to sniff packets.',
			difficulty: 3,
			type: 2,
			length: 30
		},
		{
			id: 7,
			name: 'How to use filters.',
			difficulty: 2,
			type: 2,
			length: 30
		},
		{
			id: 8,
			name: 'What to look for in the data.',
			difficulty: 2,
			type: 2,
			length: 30
		},
		// SQL
		{
			id: 9,
			name: 'What is SQL injection?',
		},
		{
			id: 10,
			name: 'Examples of historic breaches utilizing SQL injection.',
		},
		{
			id: 11,
			name: 'How to test for SQL injections.',
		},
		{
			id: 12,
			name: 'How to prevent SQL injections.',
		},
		// Ransomware
		{
			id: 13,
			name: 'Ransomware overview.'
		},
		{
			id: 14,
			name: 'Introduction to FSociety ransomware.'
		},
		{
			id: 15,
			name: 'What to do with ransomware attacks.',
			length: 45
		},
		{
			id: 16,
			name: 'How to prevent ransomware attacks.',
			length: 30
		},
		{
			id: 17,
			name: 'What is privilege escalation?',
		},
		{
			id: 18,
			name: 'Linux file permissions.',
			length: 10
		},
		{
			id: 19,
			name: 'The dangers of root.',
		},
		{
			id: 20,
			name: 'How to prevent privilege escalation.',
			description: 'In this module you will learn how to properly manage user groups.',
			length: 30
		},
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
		},
		{
			id: 3,
			title: 'SQL injections',
			team: 1,
			description: 'Everything you need to know about SQL injections'
		},
		{
			id: 4,
			title: 'Introduction to ransomware',
			team: 2,
			description: ''
		},
		{
			id: 5,
			title: 'Privilege escalation',
			team: 4,
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
		},
		{
			id: 3,
			name: 'Exploits hackers use.',
			description: 'Every white-hat hacker needs to know what black-hats are capable of.'
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
		{
			course_id: 3,
			module_id: 9,
		},
		{
			course_id: 3,
			module_id: 10,
		},
		{
			course_id: 3,
			module_id: 11,
		},
		{
			course_id: 3,
			module_id: 12,
		},
		{
			course_id: 4,
			module_id: 13,
		},
		{
			course_id: 4,
			module_id: 14,
		},
		{
			course_id: 4,
			module_id: 15,
		},
		{
			course_id: 4,
			module_id: 16,
		},
		{
			course_id: 5,
			module_id: 17,
		},
		{
			course_id: 5,
			module_id: 18,
		},
		{
			course_id: 5,
			module_id: 19,
		},
		{
			course_id: 5,
			module_id: 20,
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
		{
			course_id: 3,
			category_id: 2,
		},
		{
			course_id: 4,
			category_id: 2,
		},
		{
			course_id: 5,
			category_id: 3,
		}
	]
}