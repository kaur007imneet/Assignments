import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MovieSearchForm from './MovieSearchForm.jsx';
import MovieList from './MovieList.jsx';

import $ from "jquery";

var ParentComponent=React.createClass({
	getInitialState: function(){
	return({movies:[]});
	},
	getMovies: function(movieTitle){
	console.log(movieTitle.Title);
	$.ajax({
			type:'GET',
			dataType:'JSON',
            cache:false,
            url:'http://www.omdbapi.com/?s='+ movieTitle.Title,
            success:function (data) {
            console.log(data);
                this.setState({movies:data.Search});
            }.bind(this),
            error :function (response) {
                console.log('Error Occured From Server'+response);
            }.bind(this)
	});
	},
	render:function(){
	return(<div><MuiThemeProvider><MovieSearchForm submitTitle={this.getMovies} />
	<MovieList moviesData={this.state.movies} /></MuiThemeProvider></div>);
	}
	});
	ReactDOM.render(<ParentComponent />,document.getElementById('container'));