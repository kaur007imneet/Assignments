import React from 'react';
import List from './List.jsx';
var  MovieList=React.createClass({
	render:function(){
	var movielist=this.props.moviesData.map(function(obj){
	return(<List  key={obj.imdbID} movieData={obj} />);
	}.bind(this));
	return(<div><table><tr><th>Title</th><th>imdbID</th><th>Type</th><th>Poster</th><th>Year</th></tr>
	{movielist}
	</table></div>);
	}	
});
export default MovieList;