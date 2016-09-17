import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

var Searchmoviematerial=React.createClass({
	getInitialState: function(){
	return({Title: ''});
	},
	handleText: function(event){
	event.preventDefault();
	this.setState({Title:event.target.value});
	},
	handleSubmit: function(){
	console.log(this.state.Title+"hello");
	this.props.handleSubmit({Title: this.state.Title});
	this.setState({Title:''});
	},

	render: function(){
	return(<MuiThemeProvider><div>
	<AppBar title="Movie Mania" />
	<TextField id="text-field-controlled" hintText="Search Movie"   floatingLabelText="Search your Movie here" onChange={this.handleText}/>
	<RaisedButton label="Search" primary={true} onTouchTap={this.handleSubmit} /></div>
	</MuiThemeProvider>
	/*<form onSubmit={this.handleSubmit}>
	<AppBar title="Movie Mania" />
	<TextField id="text-field-controlled" hintText="Search Movie" floatingLabelText="Search your Movie here" onChange={this.handleText} />
	<RaisedButton type="submit" label="Search" primary={true} />
	</form>*/
	);
	}
});

export default Searchmoviematerial;