import React from 'react';
import TextField from 'material-ui/TextField';
var MovieSearchForm=React.createClass({
	getInitialState: function(){
	return({Title: ''});
	},
	handleTitle: function(event){
		event.preventDefault();
		this.setState({Title:event.target.value});
	},
	submitTitle: function(){
	console.log(this.state.Title+"hello");
	this.props.submitTitle({Title: this.state.Title});
	this.setState({Title:''});
	},
	render: function(){
	return(<div> 
	
	/*<TextField hintText="Search Movie" onChange={this.handleTitle} />*/
	<input type="text" hintText="Search movie" onChange={this.handleTitle} />
	
	<input type="button" value="Submit" onClick={this.submitTitle} />
	</div>
	);
	}
});
export default MovieSearchForm;