export const mockPosts = [
	{
		_id: '1',
		content: 'This is the content of the first post.',
		images: [
			'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
			'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		],
		user: {
			_id: 'u1',
			name: 'John Doe',
			profileImage:
				'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		},
		commentCount: 5,
		likeCount: 10,
		createdAt: '2023-10-01T12:00:00Z',
	},
	{
		_id: '2',
		content: 'This is the content of the second post.',
		images: [
			'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		],
		user: {
			_id: 'u2',
			name: 'Jane Smith',
			profileImage:
				'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		},
		commentCount: 3,
		likeCount: 7,
		createdAt: '2023-10-02T15:30:00Z',
	},
	{
		_id: '3',
		content: 'This is the content of the third post.',
		images: [],
		user: {
			_id: 'u3',
			name: 'Alice Johnson',
			profileImage:
				'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		},
		commentCount: 8,
		likeCount: 15,
		createdAt: '2023-10-03T09:45:00Z',
	},
	{
		_id: '4',
		content: 'This is the content of the fourth post.',
		images: [
			'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
			'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
			'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		],
		user: {
			_id: 'u4',
			name: 'Bob Brown',
			profileImage:
				'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_incoming&w=740&q=80',
		},
		commentCount: 2,
		likeCount: 4,
		createdAt: '2023-10-04T18:20:00Z',
	},
]
