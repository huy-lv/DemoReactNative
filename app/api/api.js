
const apiBaseUrl = 'http://45.118.133.196:8080/emilear/api';
export default {
	async getMoviesFromApi(context) {
		try {
			let response = await fetch('https://facebook.github.io/react-native/movies.json');
			let responseJson = await response.json();
			context.setState({
				text:responseJson.movies[0].title,
				isLoading:false
			});
			return responseJson.movies;
		} catch(error) {
			console.error(error);
		}
	},

	async loadHomePage(){
		try {
			let response = await fetch(apiBaseUrl+'/home');
			let responseJson = await response.json();
			// context.setState({
			// 	// text:responseJson.data.books[0].bookName,
			// 	isLoading:false,
			// 	categories:responseJson.data.categories
			// });
			return responseJson.data.categories;
		} catch(error) {
			console.error(error);
		}
	}
}