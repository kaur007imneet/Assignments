import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Listmaterial from './Listmaterial.jsx';

var  MovieListmaterial=React.createClass({
    getInitialState:function()
    {
    return({showCheckboxes: false});
    },
	render:function(){
	var movielist=this.props.moviesData.map(function(obj){
	return(<Listmaterial  key={obj.imdbID} movieData={obj} />);
	}.bind(this));
	return(<Table><TableHeader displaySelectAll={this.state.showCheckboxes}><TableRow><TableHeaderColumn style={{fontSize:'18px'}} >Title</TableHeaderColumn><TableHeaderColumn style={{fontSize:'18px'}}>imdbID</TableHeaderColumn><TableHeaderColumn style={{fontSize:'18px'}}>Type</TableHeaderColumn><TableHeaderColumn style={{fontSize:'18px'}}>Year</TableHeaderColumn><TableHeaderColumn style={{fontSize:'18px'}}>Poster</TableHeaderColumn></TableRow></TableHeader><TableBody>
	{movielist}
	</TableBody></Table>);
	}	
});
export default MovieListmaterial;