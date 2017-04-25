import React, {Component} from 'react';
import {

	View,
	Text,
	Image,
	Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class ItemCategory extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View >
				<Image
					style={
						{
							width: width * 0.48,
							height: height * 0.2,
							margin:width*0.01,
							borderRadius:5
						}
					}
					source={{uri: this.props.category.categoryImageUrl}}
				/>
			</View>
		)
	}
}