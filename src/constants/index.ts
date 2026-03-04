import { Subject } from '@/types'

export const DEPARTMENTS = ['CS', 'Math', 'English']

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
	value: dept,
	label: dept,
}))

export const MOCK_SUBJECTS: Subject[] = [
	{
		id: 1,
		name: 'Introduction to Computer Science',
		code: 'CS101',
		department: 'Computer Science',
		description:
			'Fundamental concepts of programming, algorithms, and data structures with practical applications.',
		createdAt: new Date('2024-01-15'),
	},
	{
		id: 2,
		name: 'Calculus I',
		code: 'MATH201',
		department: 'Mathematics',
		description:
			'Comprehensive study of limits, derivatives, and integrals with real-world applications.',
		createdAt: new Date('2024-01-15'),
	},
	{
		id: 3,
		name: 'General Chemistry',
		code: 'CHEM101',
		department: 'Chemistry',
		description:
			'Exploration of atomic structure, chemical bonding, and chemical reactions in everyday life.',
		createdAt: new Date('2024-01-15'),
	},
]
