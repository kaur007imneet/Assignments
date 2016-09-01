$(document).ready(function(){

	var $id;
	var $save=$(".saveButton");
// $save.hide();
var $addButton=$(".addButton");
// $addButton.show();
//var $view=$(".button1");

var $table=$("#table");
var $name=$('#name');
var $age=$('#age');
var $gender=$('#gender');
var $company=$('#company');
var $email=$('#email');
var $phone=$('#phone');

//view all functionality

function addplayer(adddetails){
	/*$table.append("<tr><td>"+adddetails.id+"</td><td>"+adddetails.age+"</td><td>"+adddetails.name+"</td><td>"+adddetails.gender+"</td><td>"+adddetails.company+"</td><td>"+adddetails.email+"</td><td>"+adddetails.phone+"</td>"+'<td> <button><span class="glyphicon glyphicon-pencil" data-id="'+adddetails.id+'"></span></button>'+'</td>'+'<td> <button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+adddetails.id+'"></span></button>'+'</td>'+"</tr>"); */
	$table.append("<tr><td>"+adddetails.id+"</td><td>"+adddetails.age+"</td><td>"+adddetails.name+"</td><td>"+adddetails.gender+"</td><td>"+adddetails.company+"</td><td>"+adddetails.email+"</td><td>"+adddetails.phone+"</td>"+'<td><a href="#myModal" role="button" class="btn" data-toggle="modal"><span class="glyphicon glyphicon-pencil" data-id="'+adddetails.id+'"></span></a>'+'</td>'+'<td> <button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+adddetails.id+'"></span></button>'+'</td>'+"</tr>");
}

var $table=$("#table");
var $search=$("#search").val();
var tbody=$table.find("tbody");

$.ajax({
	
	type:'GET',
	url: 'http://localhost:3000/data?_start=0&_end=20',
	dataType: 'JSON',
	success: function(data){
			//console.log(text1);
			$(data).each(function(i,text1)
			{
				$table.append("<tr><td>"+text1.id+"</td><td>"+text1.age+"</td><td>"+text1.name+"</td><td>"+text1.gender+"</td><td>"+text1.company+"</td><td>"+text1.email+"</td><td>"+text1.phone+"</td>"+'<td> <a href="#myModal" role="button" class="btn" data-toggle="modal"><span class="glyphicon glyphicon-pencil" data-id="'+text1.id+'"></span></a>'+'</td>'+'<td> <button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+text1.id+'"></span></button>'+'</td>'+"</tr>");//for one column of glyphicons
				/*$table.append("<tr><td>"+text1.id+"</td><td>"+text1.age+"</td><td>"+text1.name+"</td><td>"+text1.gender+"</td><td>"+text1.company+"</td><td>"+text1.email+"</td><td>"+text1.phone+"</td>"+'<td> <button><span class="glyphicon glyphicon-pencil"></span></button>'+'<button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+text1.id+'"></span></button>'+'</td>'+"</tr>");*/
			});

		},
		error: function(){
			alert('No more records');
		}
	});//end of 1st ajax call
// search functionality
$('#gly1').on('click',function(){

	start=0;
	end =20;
	var $table=$("#table");
	var $search=$("#search").val();
	var tbody=$table.find("tbody");
	//console.log('hii');
	//console.log($("#search").val());
	if($search ==='' || $search === undefined)
	{
		alert('Please enter user id to search a record')
	}
	else
	{
		$.ajax({
			//$("$view").hide();
		//	$('#view').show();//try1
			type:'GET',
			url: 'http://localhost:3000/data/'+$search,
			dataType: 'JSON',
			success: function(data){
			//if(search.length>0){
				tbody.empty();
			//console.log(text1);
			$(data).each(function(i,text1)
			{
					//console.log(text1.id);
					$table.append("<tr><td>"+text1.id+"</td><td>"+text1.age+"</td><td>"+text1.name+"</td><td>"+text1.gender+"</td><td>"+text1.company+"</td><td>"+text1.email+"</td><td>"+text1.phone+"</td>"+'<td><a href="#myModal" role="button" class="btn" data-toggle="modal"><span class="glyphicon glyphicon-pencil" data-id="'+text1.id+'"></span></a>'+'</td>'+'<td> <button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+text1.id+'"></span></button>'+'</td>'+"</tr>");
				});
				//}
				/*else{
					alert('Enter valid id to search');
				}*/
			},
			error: function(){
				alert('Enter correct id');
			}
		});
	}
});//end of Search 
// view functionality
$('#view').on('click',function(){

	start=0;
	end =20;
	var $table=$("#table");
	var $search=$("#search").val();
	var tbody=$table.find("tbody");

	$.ajax({

		type:'GET',
		url: 'http://localhost:3000/data?_start=0&_end=20',
		dataType: 'JSON',
		success: function(data){
			tbody.empty();
			//console.log(text1);
			$(data).each(function(i,text1)
			{
				$table.append("<tr><td>"+text1.id+"</td><td>"+text1.age+"</td><td>"+text1.name+"</td><td>"+text1.gender+"</td><td>"+text1.company+"</td><td>"+text1.email+"</td><td>"+text1.phone+"</td>"+'<td><a href="#myModal" role="button" class="btn" data-toggle="modal"><span class="glyphicon glyphicon-pencil" data-id="'+text1.id+'"></span></a>'+'</td>'+'<td> <button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+text1.id+'"></span></button>'+'</td>'+"</tr>");
			});

		},
		error: function(){
			alert('Error');
		}
	});
});// end of view 

// add functionality
$('.btn-warning').on('click',function(){
	$save.hide();
	$addButton.show();

	$('#name').val(" ");
	$('#age').val(" ");
	$('#gender').val(" ");
	$('#company').val(" ");
	$('#email').val(" ");
	$('#phone').val("  ");
});
$('.addButton').on('click',function(){
		//  $save.hide();
		// $addButton.show();
	//console.log("hii");
		// $('#table').empty();
		var add={
			name: $name.val(),
			age: $age.val(),
			gender: $gender.val(),
			company: $company.val(),
			email: $email.val(),
			phone: $phone.val()
		};

		var tbody=$table.find("tbody");
		//validation
		// to check validation of  email address
		function isValidEmailAddress(emailAddress) 
		{
			var pattern =(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
			return pattern.test(emailAddress);
		}
		var flag=isValidEmailAddress(add.email);

 			if(add.phone.length==0 || add.name.length==0 || add.age.length==0 || add.gender.length==0 || add.company.length==0 || add.email.length==0)
	    {
	    	alert("Mandatory to fill all fields");
	    	
	    }
	   	 else if(!$.trim($('#name').val()).match(/^[a-zA-Z ]+$/))
	    {
	    	alert("Name can only have characters");
	    	
	    }
	    else if($.trim($('#phone').val()).match(/^[a-zA-Z]+$/)||(!$.trim($('#phone').val()).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)))
	    {
	    	alert("Phone No. takes only digits");
	    	
	    }
	    /*else  if(add.phone.length==0 || add.name.length==0 || add.age.length==0 || add.gender.length==0 || add.company.length==0 || add.email.length==0)
	    {
	    	alert("Mandatory to fill all fields");
	    }*/
			else if(add.name.length==0 || (!(isNaN(add.name))))
	    {
	    	alert("Please write a valid  name");
	    	
	    }
	    else if(add.age.length==0)
	    {
	    	alert("Please fill your age");
	    	
	    }
	    else if(add.age<0||add.age>200)
	    {
	    	alert("Invalid Age");
	    	
	    }
	    else if(!(isNaN(add.gender)))
	    {
	    	alert("Please fill your gender");
	    	
	    }
	    else if(!(($('#gender').val()==="male")||($('#gender').val()==="female")||($('#gender').val()==="MALE") ||($('#gender').val()==="FEMALE")||($('#gender').val()==="Male")||($('#gender').val()==="Female")))
	    {
	    	alert("Incorrect gender");
	    	
	    }
	    else if(!(isNaN(add.company)))
	    {
	    	alert("Please enter your company name");
	    	
	    }
	    else if(add.email.length==0 )
	    {
	    	alert("Please enter your email address");
	    	
	    }
	    else if((!(flag)))
	    {
	    	alert("Email address is not valid");
	    	
	    }

	    else if(add.phone.length==0||add.phone.length!=10)
	    {
	    	alert("Please enter correct mobile number");
	    	
	    }

		/*if(add.phone.length!=10 || (!(isNaN(add.name))) ||add.phone.length==0 || 
   			add.name.length==0 || ( !(flag)) || add.age.length==0 || add.gender.length==0 || add.company.length==0)
		{
   
		alert("Mandatory to fill all fields");
	}*/
	else{
		$.ajax({

			type:'POST',
			url: 'http://localhost:3000/data',
			data: add,
			success: function(player){

				tbody.empty();
				addplayer(player);
				alert("Added  Successfully");

			},
			error: function(){
			alert('No more records');
		}

		});
		}//end of else
	});// end  of add 
// delete functionality
$table.delegate('.glyphicon-trash','click',function(){
		//$('.glyphicon-trash').on('click',function(){
			var $tr=$(this).closest('tr');
		//console.log("hii");
		var statusFlag = confirm('Do you really want to delete');
		if(statusFlag)
		{
			$.ajax({
				type:'DELETE',
				url: 'http://localhost:3000/data/'+$(this).attr('data-id'),
				success:function(){
				//console.log("hello");
				$tr.remove();
				},
				error: function(){
			alert('No more records');
		}

		});
		}
	});//end of delete 
// Update functionality
$table.delegate('.glyphicon-pencil','click',function(){
	$id=$(this).attr('data-id');
	$save.show();
	$addButton.hide();
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/data/'+$(this).attr('data-id'),
		dataType: 'JSON',
		success:function(searchdata){
			//console.log(searchdata);
			$('#name').val(searchdata.name);
			$('#age').val(searchdata.age);
			$('#gender').val(searchdata.gender);
			$('#company').val(searchdata.company);
			$('#email').val(searchdata.email);
			$('#phone').val(searchdata.phone);
		},
		error: function(){
			alert('No more records');
		}
	});
	});//end of retrieval of data on modal window


$('.saveButton').on('click',function(){
	var tbody=$table.find("tbody");
	var employees={
		name: $name.val(),
		age: $age.val(),
		gender: $gender.val(),
		company: $company.val(),
		email: $email.val(),
		phone: $phone.val()
	};
			//console.log($name.val());
			//console.log($age.val());
			//console.log($(this).attr('data-id'));
			var $tr=$(this).closest('tr');

		 	// validation for edit field
		 	function isValidEmailAddress(emailAddress) 
		 	{
		 		var pattern =(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		 		return pattern.test(emailAddress);
		 	}
		 	var flag=isValidEmailAddress(employees.email);

  		// validation for gender
  		/*function isValidGender(gender)
  		{
  			var pattern1=("[");
  			return pattern1.test(gender);
  		}
  		var flaggender=isValidGender(add.gender);*/

  		if(employees.name.length==0 || employees.age.length==0 || employees.gender.length==0 || employees.company.length==0 || employees.email.length==0 || employees.phone.length==0)
  		{
  			alert("Mandatory to fill all fields");
  			
  		}
  		else if(!$.trim($('#name').val()).match(/^[a-zA-Z ]+$/))
  		{
  			alert("Name can only have characters");
  			
  		}
  		else if($.trim($('#phone').val()).match(/^[a-zA-Z]+$/)||(!$.trim($('#phone').val()).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)))
  		{
  			alert("Phone No. takes only digits");
  		
  		}

  	 /*if(employees.phone.length==0 || employees.name.length==0 || employees.age.length==0 || employees.gender.length==0 || employees.company.length==0 || employees.email.length==0)
  		{
  			alert("Mandatory to fill all fields");
  		}*/

  		else if(employees.name.length==0 || (!(isNaN(employees.name))))
  		{
  			alert("Please write a valid  name");
  			
  		}
  		else if(employees.age.length==0)
  		{
  			alert("Please fill your age");
  			
  		}
  		else if(employees.age<0||employees.age>200)
  		{
  			alert("Invalid Age");
  			
  		}
  		else if(!(isNaN(employees.gender)))
  		{
  			alert("Please fill your gender");
  			
  		}
  		else if(!(($('#gender').val()==="male")||($('#gender').val()==="female")||($('#gender').val()==="MALE")||($('#gender').val()==="FEMALE")||($('#gender').val()==="Male")||($('#gender').val()==="Female")))
  		{
  			alert("Incorrect gender");
  			
  		}
  		else if(!(isNaN(employees.company)))
  		{
  			alert("Please enter your company name");
  			
  		}
  		else if(employees.email.length==0 )
  		{
  			alert("Please enter your email address");
  			
  		}
  		else if((!(flag)))
  		{
  			alert("Email address is not valid");
  			
  		}

  		else if(employees.phone.length==0||employees.phone.length!=10)
  		{
  			alert("Please enter correct mobile number");
  			
  		}
		/*if(add.phone.length!=10 || (!(isNaN(add.name))) ||add.phone.length==0 || 
   			add.name.length==0 || ( !(flag)) || add.age.length==0 || add.gender.length==0 || add.company.length==0)
		{
   
		alert("Mandatory to fill all fields");
	}*/

			else{// start of else
				$.ajax({

					type: 'PATCH',
					url: 'http://localhost:3000/data/'+$id,
					data: employees,
					dataType:'JSON',
					success:function(data){
						tbody.empty();
			//console.log(adddetails.name);
			//console.log(adddetails.age);
			
			addplayer(data);
			alert('Details Edited Successfully');
		},
		error: function(){
			alert('No more records');
		}

	});//end ajax
	// $('.saveButton').on('click',function(){
	// 	addplayer(data);
 // });//end saveButton 
}// end of else
	});//end of update

		// infinite scroll
		var start=0;
		var end =20;
		$(window).scroll(function()
		{
			if($(window).scrollTop() == $(document).height() - $(window).height())
			{
				start = start+20;
				end = end+20;
				$('div#loadmoreajaxloader').show();
				$.ajax({
					url: 'http://localhost:3000/data?_start='+(start)+'&_end='+(end),
       //http://localhost:3000/db?_start=0&_end=10
       success: function(html)
       {

         //alert("hello");
         if(html)
         {
         	$("#postswrapper").append(html);
         	$(html).each(function(index,html)

         	{
         		$table.append("<tr><td>"+html.id+"</td><td>"+html.age+"</td><td>"+html.name+"</td><td>"+html.gender+"</td><td>"+html.company+"</td><td>"+html.email+"</td><td>"+html.phone+"</td>"+'<td><a href="#myModal" role="button" class="btn" data-toggle="modal"><span class="glyphicon glyphicon-pencil" data-id="'+html.id+'"></span></a>'+'</td>'+'<td> <button type="delete"><span class="glyphicon glyphicon-trash" data-id="'+html.id+'"></span></button>'+'</td>'+"</tr>");
         		/* tbody.append(Mustache.render(tmp,html));*/


         	});


         	$('div#loadmoreajaxloader').hide();
         }else
         {
         	$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
         }
     },
     error: function(){
			alert('No more records');
		}
 });
			}
		});
});//end of document.ready()