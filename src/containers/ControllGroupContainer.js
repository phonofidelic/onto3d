import React, { Component } from 'react';
import ControllGroup from '../components/ControllGroup';

class ControllGroupContainer extends Component {
	render() {
		const { shape, controllType, controllTypeName, handleShapeChange } = this.props;
		return (
			<div className="controll-group-container col-xs-4">
				{ controllTypeName }
				<ControllGroup dimentionName="x" 
											 dimention={controllType.x} 
											 controllTypeName={controllTypeName}
											 shape={shape}
											 handleShapeChange={handleShapeChange} />

				<ControllGroup dimentionName="y" 
											 dimention={controllType.y} 
											 controllTypeName={controllTypeName}
											 shape={shape}
											 handleShapeChange={handleShapeChange} />

				<ControllGroup dimentionName="z" 
											 dimention={controllType.z} 
											 controllTypeName={controllTypeName}
											 shape={shape}
											 handleShapeChange={handleShapeChange} />
			</div>
		);
	}
}

export default ControllGroupContainer;