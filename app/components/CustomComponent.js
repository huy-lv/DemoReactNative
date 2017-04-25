import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	StyleSheet,
	View,
	Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class CustomComponent extends Component{
	render(){
		return(
			<View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	}
});