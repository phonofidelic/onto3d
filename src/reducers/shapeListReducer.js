import { INIT_APP, 
				 UPDATE_VALUE,
				 UPDATE_POSITION,
				 UPDATE_ROTATION,
				 UPDATE_SCALE } from '../actiontypes';

const STEP_UNIT = 1;

const INITIAL_STATE = {
	shapeList: [
		{
			id: 1,
			selected: true,
			primitive: 'a-box',
			material: {
				color: '#7b7b81'
			},
			position: { x: 0, y: 0, z: -5 },
			rotation: { x: 0, y: 0, z: 0 },
			scale: { x: 2, y: 2, z: 2 }
		}
	]
};

const shapeListReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case INIT_APP:
			return {
				...state
			}

		case UPDATE_POSITION:
			switch(action.dimention) {

				case 'x':
					if (action.direction === 'inc') {
						// Increase value
						const incPositionX = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								// console.log('*** inc pos x', {...shape, position: {...shape.position, x: shape.position.x++}})
								return {
									...shape, 
									position: {
										...shape.position, 
										x: shape.position.x + STEP_UNIT
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incPositionX
						};
					} else {
						// Decrease value
						const decPositionX = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									position: {
										...shape.position,
										x: shape.position.x - STEP_UNIT
									}
								};
							}
						});
						return {
							...state,
							shapeList: decPositionX
						};
					}

				case 'y':
					if (action.direction === 'inc') {
						// Increase value
						const incPositionY = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									position: {
										...shape.position,
										y: shape.position.y + STEP_UNIT
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incPositionY
						};
					} else {
						// Decrease value
						const decPositionY = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									position: {
										...shape.position,
										y: shape.position.y - STEP_UNIT
									}
								}
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: decPositionY
						};
					}

				case 'z':
					if (action.direction === 'inc') {
						// Increase value
						const incPositionZ = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									position: {
										...shape.position,
										z: shape.position.z + STEP_UNIT
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incPositionZ
						};
					} else {
						// Decrease value
						const decPositionZ = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									position: {
										...shape.position,
										z: shape.position.z - STEP_UNIT
									}
								}
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: decPositionZ
						};
					}

				default: return state;
			}

			case UPDATE_ROTATION:
			switch(action.dimention) {

				case 'x':
					if (action.direction === 'inc') {
						// Increase value
						const incRotationX = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape, 
									rotation: {
										...shape.rotation, 
										x: shape.rotation.x + STEP_UNIT * 10
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incRotationX
						};
					} else {
						// Decrease value
						const decRotationX = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									rotation: {
										...shape.rotation,
										x: shape.rotation.x - STEP_UNIT * 10
									}
								};
							}
						});
						return {
							...state,
							shapeList: decRotationX
						};
					}

				case 'y':
					if (action.direction === 'inc') {
						// Increase value
						const incRotationY = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									rotation: {
										...shape.rotation,
										y: shape.rotation.y + STEP_UNIT * 10
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incRotationY
						};
					} else {
						// Decrease value
						const decRotationY = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									rotation: {
										...shape.rotation,
										y: shape.rotation.y - STEP_UNIT * 10
									}
								}
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: decRotationY
						};
					}

				case 'z':
					if (action.direction === 'inc') {
						// Increase value
						const incRotationZ = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									rotation: {
										...shape.rotation,
										z: shape.rotation.z + STEP_UNIT * 10
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incRotationZ
						};
					} else {
						// Decrease value
						const decRotationZ = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									rotation: {
										...shape.rotation,
										z: shape.rotation.z - STEP_UNIT * 10
									}
								}
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: decRotationZ
						};
					}

				default: return state;
			}

			case UPDATE_SCALE:
			switch(action.dimention) {

				case 'x':
					if (action.direction === 'inc') {
						// Increase value
						const incScaleX = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape, 
									scale: {
										...shape.scale, 
										x: shape.scale.x + STEP_UNIT
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incScaleX
						};
					} else {
						// Decrease value
						const decScaleX = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									scale: {
										...shape.scale,
										x: shape.scale.x - STEP_UNIT
									}
								};
							}
						});
						return {
							...state,
							shapeList: decScaleX
						};
					}

				case 'y':
					if (action.direction === 'inc') {
						// Increase value
						const incScaleY = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									scale: {
										...shape.scale,
										y: shape.scale.y + STEP_UNIT
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incScaleY
						};
					} else {
						// Decrease value
						const decScaleY = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									scale: {
										...shape.scale,
										y: shape.scale.y - STEP_UNIT
									}
								}
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: decScaleY
						};
					}

				case 'z':
					if (action.direction === 'inc') {
						// Increase value
						const incScaleZ = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									scale: {
										...shape.scale,
										z: shape.scale.z + STEP_UNIT
									}
								};
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: incScaleZ
						};
					} else {
						// Decrease value
						const decScaleZ = state.shapeList.map(shape => {
							if (action.id === shape.id) {
								return {
									...shape,
									scale: {
										...shape.scale,
										z: shape.scale.z - STEP_UNIT
									}
								}
							} else {
								return shape;
							}
						});
						return {
							...state,
							shapeList: decScaleZ
						};
					}

				default: return state;
			}

		default: return state;
	}
}

export default shapeListReducer;

