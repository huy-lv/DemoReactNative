/**
 * Created by Teko on 4/25/2017.
 */
import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	StyleSheet,
	View,
	Dimensions
} from 'react-native';
// import api from '../utils.js';
import api from '../api/api.js'
const {width, height} = Dimensions.get('window');
import * as Progress from 'react-native-progress';


export default class HomeComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			isLoading: false,
		}
	}

	componentWillMount() {
		this.setState({
			isLoading: true
		});
	}

	componentDidMount() {
		let that = this;
		// setTimeout(function(){ that.getMoviesFromApi(); }, 5000);
		api.getMoviesFromApi(this);
	}

	render() {
		return (
			<View
				style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
			>
				<Progress.CircleSnail
					hidesWhenStopped={true}
					animating={this.state.isLoading}
					color={['red', 'green', 'blue']}
				    style={{position:'absolute'}}
				/>
				<ScrollView>
					<Text style={{backgroundColor: 'red'}}>{(this.state.isLoading) ? "1" : "0"}</Text>
					<Text>{this.state.text}</Text>
				</ScrollView>
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