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
	users: [
		{
			id: 1,
			name: 'Robert',
			email: 'admin@example.com'
		},
		{
			id: 2,
			name: 'Elliot Alderson',
			email: 'mr.robot@evilcorp.com'
		},
		{
			id: 3,
			name: 'Darlene Alderson',
			email: 'fsociety@protonmail.com'
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
	],
	progress: [
		{
			id: 1,
			course_id: 1,
			module_id: 1,
			user_id: 2,
			progress: 30.5
		},
		{
			id: 2,
			course_id: 1,
			module_id: 4,
			user_id: 2,
			progress: 53.17
		},
		{
			id: 3,
			course_id: 3,
			module_id: 10,
			user_id: 1,
			progress: 80.75
		},
		{
			id: 4,
			course_id: 4,
			module_id: 15,
			user_id: 3,
			progress: 12.5
		},
		{
			id: 5,
			course_id: 2,
			module_id: 6,
			user_id: 1,
			progress: 95.0
		},
		{
			id: 6,
			course_id: 2,
			module_id: 8,
			user_id: 3,
			progress: 60.33
		},
		{
			id: 7,
			course_id: 5,
			module_id: 19,
			user_id: 2,
			progress: 20.0
		},
		{
			id: 8,
			course_id: 1,
			module_id: 3,
			user_id: 2,
			progress: 42.9
		},
		{
			id: 9,
			course_id: 3,
			module_id: 12,
			user_id: 1,
			progress: 85.5
		},
		{
			id: 10,
			course_id: 1,
			module_id: 2,
			user_id: 3,
			progress: 75.25
		},
		{
			id: 11,
			course_id: 4,
			module_id: 14,
			user_id: 1,
			progress: 17.1
		},
		{
			id: 12,
			course_id: 2,
			module_id: 7,
			user_id: 2,
			progress: 99.99
		},
		{
			id: 13,
			course_id: 3,
			module_id: 11,
			user_id: 1,
			progress: 5.5
		},
		{
			id: 14,
			course_id: 5,
			module_id: 17,
			user_id: 3,
			progress: 70.0
		},
		{
			id: 15,
			course_id: 2,
			module_id: 5,
			user_id: 2,
			progress: 33.8
		},
		{
			id: 16,
			course_id: 4,
			module_id: 13,
			user_id: 3,
			progress: 62.5
		},
		{
			id: 17,
			course_id: 3,
			module_id: 9,
			user_id: 1,
			progress: 88.75
		},
		{
			id: 18,
			course_id: 1,
			module_id: 2,
			user_id: 2,
			progress: 47.2
		},
		{
			id: 19,
			course_id: 4,
			module_id: 16,
			user_id: 2,
			progress: 25.6
		},
		{
			id: 20,
			course_id: 5,
			module_id: 20,
			user_id: 3,
			progress: 100.0
		},
		{
			id: 21,
			course_id: 1,
			module_id: 2,
			user_id: 1,
			progress: 40.25
		},
		{
			id: 22,
			course_id: 2,
			module_id: 5,
			user_id: 1,
			progress: 65.75
		},
		{
			id: 23,
			course_id: 3,
			module_id: 10,
			user_id: 3,
			progress: 17.5
		},
		{
			id: 24,
			course_id: 4,
			module_id: 13,
			user_id: 1,
			progress: 82.0
		},
		{
			id: 25,
			course_id: 5,
			module_id: 18,
			user_id: 2,
			progress: 50.5
		},
		{
			id: 26,
			course_id: 5,
			module_id: 20,
			user_id: 2,
			progress: 90.1
		},
		{
			id: 27,
			course_id: 1,
			module_id: 3,
			user_id: 1,
			progress: 30.0
		},
		{
			id: 28,
			course_id: 2,
			module_id: 6,
			user_id: 2,
			progress: 73.8
		},
		{
			id: 29,
			course_id: 3,
			module_id: 11,
			user_id: 3,
			progress: 9.99
		},
		{
			id: 30,
			course_id: 4,
			module_id: 14,
			user_id: 3,
			progress: 67.5
		},
		{
			id: 31,
			course_id: 5,
			module_id: 19,
			user_id: 1,
			progress: 22.3
		},
		{
			id: 32,
			course_id: 1,
			module_id: 1,
			user_id: 3,
			progress: 55.0
		},
		{
			id: 33,
			course_id: 2,
			module_id: 7,
			user_id: 1,
			progress: 35.6
		},
		{
			id: 34,
			course_id: 3,
			module_id: 9,
			user_id: 2,
			progress: 78.9
		},
		{
			id: 35,
			course_id: 4,
			module_id: 15,
			user_id: 1,
			progress: 15.0
		},
		{
			id: 36,
			course_id: 5,
			module_id: 17,
			user_id: 1,
			progress: 92.5
		},
		{
			id: 37,
			course_id: 2,
			module_id: 4,
			user_id: 2,
			progress: 25.2
		},
		{
			id: 38,
			course_id: 2,
			module_id: 7,
			user_id: 3,
			progress: 63.0
		},
		{
			id: 39,
			course_id: 3,
			module_id: 12,
			user_id: 3,
			progress: 47.7
		},
		{
			id: 40,
			course_id: 4,
			module_id: 16,
			user_id: 1,
			progress: 88.0
		},
		{
			id: 41,
			course_id: 2,
			module_id: 4,
			user_id: 3,
			progress: 32.1
		},
		{
			id: 42,
			course_id: 2,
			module_id: 8,
			user_id: 1,
			progress: 70.2
		},
		{
			id: 43,
			course_id: 4,
			module_id: 13,
			user_id: 2,
			progress: 5.0
		},
		{
			id: 44,
			course_id: 4,
			module_id: 16,
			user_id: 3,
			progress: 75.8
		},
		{
			id: 45,
			course_id: 1,
			module_id: 1,
			user_id: 1,
			progress: 20.0
		},
		{
			id: 46,
			course_id: 2,
			module_id: 5,
			user_id: 3,
			progress: 51.5
		},
		{
			id: 47,
			course_id: 3,
			module_id: 10,
			user_id: 2,
			progress: 12.0
		},
		{
			id: 48,
			course_id: 4,
			module_id: 14,
			user_id: 2,
			progress: 80.2
		},
		{
			id: 49,
			course_id: 5,
			module_id: 18,
			user_id: 1,
			progress: 40.8
		},
		{
			id: 50,
			course_id: 5,
			module_id: 20,
			user_id: 1,
			progress: 97.5
		}
	]
}