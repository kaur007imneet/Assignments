import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Searchmoviematerial from './Searchmoviematerial.jsx';
import Movielistmaterial from './Movielistmaterial.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import $ from "jquery";

var Parentmaterial=React.createClass({
	getInitialState: function(){
	return({movies:[]});
	},
	getMovies: function(movieTitle){
	$.ajax({
		type:'GET',
		dataType:'JSON',
        cache:false,
		url:'http://www.omdbapi.com/?s=' +movieTitle.Title,
		success: function(data){
		console.log(data);
        this.setState({movies:data.Search});
		}.bind(this),
            error :function (response) {
                console.log('Error Occured From Server'+response);
            }.bind(this)

	});
	},
	render: function(){
	return(<MuiThemeProvider><div>
	<Searchmoviematerial handleSubmit={this.getMovies} />
	<Movielistmaterial moviesData={this.state.movies} /></div></MuiThemeProvider>);
	}
});
ReactDOM.render(<Parentmaterial />,document.getElementById('container'));