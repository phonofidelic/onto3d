const gamepad = new window.Gamepad();

export const initGamepad = () => {
	const BUTTONS = [
		'biutton_1',
		'button_2',
		'button_3',
		'button_4',
		'shoulder_top_left',
		'shoulder_top_right',
		'shoulder_bottom_left',
		'shoulder_bottom_right',
		'select',
		'start',
		'stick_button_left',
		'stick_button_right',
		'd_pad_up',
		'd_pad_down',
		'd_pad_left',
		'd_pad_right'
	];

	gamepad.on('connect', e => {
	    console.log(`controller ${e.index} connected!`);
	});


	gamepad.on('disconnect', e => {
	    console.log(`controller ${e.index} disconnected!`);
	});

	BUTTONS.forEach(button => {
		return gamepad.on('press', button, e => {
			console.log(`${e.button} was pressed:`, e)

			switch(e.button) {
				case 'button_1':
					return handleB1();

				case 'button_2':
					return handleB2();

				case 'button_3':
					return handleB3();

				case 'button_4':
					return handleB4();

				case 'd_pad_up': 
					return handleDUp();

				case 'd_pad_down':
					return handleDDown();

				case 'd_pad_left':
					return handleDLeft();

				case 'd_pad_right':
					return handleDRight();

				case 'select':
					return handleSelect();

				default: return console.warn('Unhandled input');
			}
		})
	});

	const handleB1 = () => {
		console.log('* handle button 1')
	}

	const handleB2 = () => {
		console.log('* handle button 2')
	}

	const handleB3 = () => {
		console.log('* handle button 3')
	}

	const handleB4 = () => {
		console.log('* handle button 4')
	}

	const handleDUp = () => {
		console.log('* handle d-pad up')
	}

	const handleDDown = () => {
		console.log('* handle d-pad down')
	}

	const handleDLeft = () => {
		console.log('* handle d-pad left')
	}

	const handleDRight = () => {
		console.log('* handle d-pad right')
	}

	const handleSelect = () => {
		console.log('* handle select')
	}

	return gamepad;
}