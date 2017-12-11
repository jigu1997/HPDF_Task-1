import variable from './../variables/platform';

export default (variables = variable) => {
	const thumbnailTheme = {
		'.imageSized': {        //add as new
				width: 350,
				height: 200,
				borderRadius: 0,
			},
		'.square': {
			borderRadius: 0,
			'.small': {
				width: 36,
				height: 36,
				borderRadius: 0,
			},
			'.large': {
				width: 80,
				height: 80,
				borderRadius: 0,
			},
		
		},
		'.small': {
			width: 36,
			height: 36,
			borderRadius: 18,
			'.square': {
				borderRadius: 0,
			},
		},
		'.medium': {
			width: 55,
			height: 55,
			borderRadius: 30,
			'.square': {
				borderRadius: 0,
			},
		},
		'.large': {
			margin : 30,
			width: 80,
			height: 80,
			borderRadius: 40,
			'.square': {
				borderRadius: 0,
			},
		},

		width: 56,
		height: 56,
		borderRadius: 28,
	};

	return thumbnailTheme;
};
