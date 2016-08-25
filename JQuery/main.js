$(function()
{
	$('#search-movie').on('click', function(){
		
		var $Movie=$('#movie-search').val();
		var table=$("#table");
		var tbody=table.find("tbody");

		//console.log($Movie);// to display the value filled in text-box
		$.ajax({
			url: 'http://www.omdbapi.com/?s='+$Movie,
			type: 'GET',
			dataType: 'JSON',
			success: function(movies)
			{
				tbody.empty();
				$("#errormsg").empty();
				if(movies.Response=="True"){
               /*tbody.empty();*/

			$.each(movies.Search,function(index, value){
			
			//var row=$("<tr><td>"+value.Title+"+"+value.Year+"+"+value.imdbID+"+"+value.Type+"+"<img class=img-responsive src="+value.Poster+">"+"</td></tr>");	 
			var row=$("<tr><td>"+value.Title+"</td><td>"+value.Year+"</td><td>"+value.imdbID+"</td><td>"+value.Type+"</td><td>"+"<img class=img-responsive src="+value.Poster+">"+"</td></tr>");
			$("#table").append(row);

			
			});
			}
			else{
				/*alert("Entered Wrong Movie Name");*/
				
				document.getElementById("errormsg").innerHTML = "Entered Wrong Movie name ";
				tbody.empty();
			}
		},
			error: function(){
				alert('Server-Issue')
			}
			
		});
		

	});
}); 