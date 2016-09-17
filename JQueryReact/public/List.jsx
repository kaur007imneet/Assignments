import React from 'react';
var List=React.createClass({
	render: function(){
	return(<tr><td>{this.props.movieData.Title}</td><td> {this.props.movieData.imdbID} </td><td>{this.props.movieData.Type}</td><td><img src= {this.props.movieData.Poster} /></td><td> {this.props.movieData.Year}</td></tr>);
	}
});
export default List;
