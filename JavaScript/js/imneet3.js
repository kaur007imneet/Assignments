const readline    = require('readline');
const fs          = require('fs');
var header        =[];
var jsonData      =[];
var tempData      ={};
var isHeader      =true;
var counter=0;
var str1=null;
var str2=null;

var edulevellitPersons,edulevellitMales,edulevellitFemales,edulevelBelPrimPersons,edulevelBelPrimMales,edulevelBelPrimFemales,edulevelPrimPersons,edulevelPrimMales,edulevelPrimFemales,edulevelMidPersons,edulevelMidMales,edulevelMidFemales,edulevelMatPersons,edulevelMatMales,edulevelMatFemales,edulevelhighPersons,edulevelhighMales,edulevelhighFemales,edulevelnontechPersons,edulevelnontechMales,edulevelnontechFemales,edulevelTechPersons,edulevelTechMales,edulevelTechFemales,edulevelgradPersons,edulevelgradMales,edulevelgradFemales,edulevelunclassiPersons,edulevelunclassiMales,edulevelunclassiFemales;

const rl          = readline.createInterface({
	input: fs.createReadStream('India2011.csv')
});
rl.on('line',function(line)
{
	counter++;
	ab(line);
});

rl.on('close',function(line)
{
	const rl1          = readline.createInterface({
		input: fs.createReadStream('IndiaSC2011.csv')
	});
	rl1.on('line',function(line)
	{
		ab(line);
	});

	rl1.on('close',function(line)
		{	const rl2          = readline.createInterface({
			input: fs.createReadStream('IndiaST2011.csv')
		});
		rl2.on('line',function(line)
		{
			ab(line);
		});
	}
	);
});




function ab(line)
{
	var flag=false;
	if(counter==1)
		str1=line.trim();
	else
		str2=line.trim();
	
	var lineRecords  = line.trim().split(',');
	
	if(str1!=str2 || counter==1)
	{
		//console.log(header+':::::::'+lineRecords);

		for(var i=0;i<lineRecords.length;i++){
			if(isHeader)
			{       
				header[i]=lineRecords[i];
				flag=false;
				edulevellitPersons =header.indexOf("Educational level - Literate without educational level - Persons");
				edulevellitFemales =header.indexOf("Educational level - Literate without educational level - Males");
				edulevellitFemales =header.indexOf("Educational level - Literate without educational level - Females");
				edulevelBelPrimPersons =header.indexOf("Educational level - Below Primary - Persons");
				edulevelBelPrimMales = header.indexOf("Educational level - Below Primary - Males");
				edulevelBelPrimFemales =header.indexOf("Educational level - Below Primary - Females");
				edulevelPrimPersons =header.indexOf("Educational level - Primary - Persons");
				edulevelPrimMales =header.indexOf("Educational level - Primary - Males");
				edulevelPrimFemales =header.indexOf("Educational level - Primary - Females");
				edulevelMidPersons =header.indexOf("Educational level - Middle - Persons");
				edulevelMidMales =header.indexOf("Educational level - Middle - Males");
				edulevelMidFemales =header.indexOf("Educational level - Middle - Females");
				edulevelMatPersons=header.indexOf("Educational level - Matric/Secondary - Persons");
				edulevelMatMales=header.indexOf("Educational level - Matric/Secondary - Males");
				edulevelMatFemales=header.indexOf("Educational level - Matric/Secondary - Females");
				edulevelhighPersons =header.indexOf("Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons");
				edulevelhighMales =header.indexOf("Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Males");
				edulevelhighFemales =header.indexOf("Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Females");
				edulevelnontechPersons =header.indexOf("Educational level - Non-technical diploma or certificate not equal to degree - Persons");
				edulevelnontechMales =header.indexOf("Educational level - Non-technical diploma or certificate not equal to degree - Males");
				edulevelnontechFemales =header.indexOf("Educational level - Non-technical diploma or certificate not equal to degree - Females");
				edulevelTechPersons =header.indexOf("Educational level - Technical diploma or certificate not equal to degree - Persons");
				edulevelTechMales =header.indexOf("Educational level - Technical diploma or certificate not equal to degree - Males");
				edulevelTechFemales =header.indexOf("Educational level - Technical diploma or certificate not equal to degree - Females");
				edulevelgradPersons =header.indexOf("Educational level - Graduate & above - Persons");
				edulevelgradMales  =header.indexOf("Educational level - Graduate & above - Males");
				edulevelgradFemales =header.indexOf("Educational level - Graduate & above - Females");
				edulevelunclassiPersons =header.indexOf("Educational level - Unclassified - Persons");
				edulevelunclassiMales =header.indexOf("Educational level - Unclassified - Males");
				edulevelunclassiFemales =header.indexOf("Educational level - Unclassified - Females");       

			}
			else
			{
				flag=true;
				tempData[header[edulevellitPersons]]=lineRecords[edulevellitPersons];
				tempData[header[edulevellitMales]]=lineRecords[edulevellitMales];
				tempData[header[edulevellitFemales]]=lineRecords[edulevellitFemales];
				tempData[header[edulevelBelPrimPersons]]=lineRecords[edulevelBelPrimPersons];
				tempData[header[edulevelBelPrimMales]]=lineRecords[edulevelBelPrimMales];
				tempData[header[edulevelBelPrimFemales]]=lineRecords[edulevelBelPrimFemales];
				tempData[header[edulevelPrimPersons]]=lineRecords[edulevelPrimPersons];
				tempData[header[edulevelPrimMales]]=lineRecords[edulevelPrimMales];
				tempData[header[edulevelPrimFemales]]=lineRecords[edulevelPrimFemales];
				tempData[header[edulevelMidPersons]]=lineRecords[edulevelMidPersons];
				tempData[header[edulevelMidMales]]=lineRecords[edulevelMidMales];
				tempData[header[edulevelMidFemales]]=lineRecords[edulevelMidFemales];
				tempData[header[edulevelMatPersons]]=lineRecords[edulevelMatPersons];
				tempData[header[edulevelMatMales]]=lineRecords[edulevelMatMales];
				tempData[header[edulevelMatFemales]]=lineRecords[edulevelMatFemales];
				tempData[header[edulevelhighPersons]]=lineRecords[edulevelhighPersons];
				tempData[header[edulevelhighMales]]=lineRecords[edulevelhighMales];
				tempData[header[edulevelhighFemales]]=lineRecords[edulevelhighFemales];
				tempData[header[edulevelnontechPersons]]=lineRecords[edulevelnontechPersons];
				tempData[header[edulevelnontechMales]]=lineRecords[edulevelnontechMales];
				tempData[header[edulevelnontechFemales]]=lineRecords[edulevelnontechFemales];
				tempData[header[edulevelTechPersons]]=lineRecords[edulevelTechPersons];
				tempData[header[edulevelTechMales]]=lineRecords[edulevelTechMales];
				tempData[header[edulevelTechFemales]]=lineRecords[edulevelTechFemales];
				tempData[header[edulevelgradPersons]]=lineRecords[edulevelgradPersons];
				tempData[header[edulevelgradMales]]=lineRecords[edulevelgradMales];
				tempData[header[edulevelgradFemales]]=lineRecords[edulevelgradFemales];
				tempData[header[edulevelunclassiPersons]]=lineRecords[edulevelunclassiPersons];
				tempData[header[edulevelunclassiMales]]=lineRecords[edulevelunclassiMales];
				tempData[header[edulevelunclassiFemales]]=lineRecords[edulevelunclassiFemales];
			}        
		}
		if(flag)
		{
			jsonData.push(tempData);
			fs.writeFileSync("imneet3.json",JSON.stringify(jsonData),encoding="utf8");
		}
		tempData={};
		isHeader=false;

	}
}
