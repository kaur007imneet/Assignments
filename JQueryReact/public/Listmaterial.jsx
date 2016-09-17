import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var Listmaterial=React.createClass({
	render: function(){
	//console.log(this.props.movieData);
	/*return(<tr><td>{this.props.movieData.Title}</td> 
	<td>{this.props.movieData.imdbID} </td><td>{this.props.movieData.Type}</td><td> {this.props.movieData.Year}</td><td><img src= {this.props.movieData.Poster} /></td></tr>);*/

	return(
	<TableRow>
	<TableRowColumn   style={{fontSize:'18px'}} >{this.props.movieData.Title}</TableRowColumn>
	<TableRowColumn style={{fontSize:'18px'}}>{this.props.movieData.imdbID}</TableRowColumn>
	<TableRowColumn style={{fontSize:'18px'}}>{this.props.movieData.Type}</TableRowColumn>
	<TableRowColumn style={{fontSize:'18px'}}>{this.props.movieData.Year}</TableRowColumn>
	<TableRowColumn><img style={{maxWidth:'100%'}} src={this.props.movieData.Poster} /></TableRowColumn>
	</TableRow>);
	}
});
export default Listmaterial;
