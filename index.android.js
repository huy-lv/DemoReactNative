/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StatusBar,
	Dimensions,
	Alert,
	ToastAndroid,
	ScrollView
	// Modal
} from 'react-native';
import HomeComponent from './app/components/HomeComponent';
import CustomComponent from './app/components/CustomComponent';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {Button} from 'react-native-material-design';
// import PopupDialog,{ SlideAnimation } from 'react-native-popup-dialog';

class demo1 extends Component {
	getMoviesFromApiAsync() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				return responseJson.title;
			})
			.catch((error) => {
				console.error(error);
			});
	}

	async getMoviesFromApi() {
		try {
			let response = await fetch('https://facebook.github.io/react-native/movies.json');
			let responseJson = await response.json();
			// console.log("cccccc"+responseJson.title);
			return responseJson.title;
		} catch (error) {
			console.error(error);
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			dialogtext: ""
			// animatedScroll:new Animated.Value(0)
		}
	}

	// await
	setModalVisible(visible) {
		// this.setState({
		// 	modalVisible: visible,
		// });
		console.log("button 1 clicked");
		let res = this.getMoviesFromApiAsync();
		// let res = await	this.getMoviesFromApi();
		// ToastAndroid.show(res, ToastAndroid.SHORT);
		console.log("response:" + res);
	}


	render() {
		return <ScrollableTabView
			renderTabBar={() => <DefaultTabBar />}
		>
			<HomeComponent tabLabel='Tab #1'/>
			<CustomComponent tabLabel='Tab #2'/>
			<HomeComponent tabLabel='Tab #3'/>
		</ScrollableTabView>;
	}
}

// const styles = StyleSheet.create({
// 	swiperWrapper: {
// 		height: 300,
// 		flex: 1
// 	},
// 	slidingtab: {
// 		backgroundColor: '#007bff',
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		height: height * 0.08
// 	},
// 	slide1: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#9DD6EB',
// 	},
// 	slide2: {
// 		flex: 1,
// 		justifyContent: 'space-between',
// 		backgroundColor: '#97CAE5',
// 	},
// 	slide3: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#92BBD9',
// 	},
// 	container: {
// 		// flex: 1,
// 		flexDirection: 'column',
// 		// justifyContent: 'center',
// 		// alignItems: 'center',
// 		backgroundColor: '#88ffbf',
// 	},
// 	dialog1: {
// 		width: 0.7 * width,
// 		height: 0.5 * height,
// 		backgroundColor: 'white',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		borderRadius: 5
// 	},
// 	button1: {
// 		backgroundColor: 'red',
// 		width: 0.1 * width,
// 		height: 0.05 * height,
// 		borderRadius: 5,
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	part2: {
// 		backgroundColor: 'green',
// 		alignItems: 'center',
// 		flex: 2
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });

AppRegistry.registerComponent('demo1', () => demo1);
