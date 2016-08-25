const readline    = require('readline');
const fs          = require('fs');
var header        =[];
var jsonData      =[];
var tempData      ={};
var isHeader      =true;
var areaName;
var edulevelmales;
var edulevelfemales;
var counter=0;
var str1=null;
var str2=null;

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
				areaName=header.indexOf("Area Name");
				edulevelmales=header.indexOf("Educational level - Graduate & above - Males");
				edulevelfemales=header.indexOf("Educational level - Graduate & above - Females");
			}
			else
			{
				flag=true;
				tempData[header[areaName]]=lineRecords[areaName];
				tempData[header[edulevelmales]]=lineRecords[edulevelmales];
				tempData[header[edulevelfemales]]=lineRecords[edulevelfemales];
			}        
		}
		if(flag)
		{
			jsonData.push(tempData);
			fs.writeFileSync("imneet2.json",JSON.stringify(jsonData),encoding="utf8");
		}
		tempData={};
		isHeader=false;

	}
}
