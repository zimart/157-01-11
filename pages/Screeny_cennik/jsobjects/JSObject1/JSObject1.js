export default {

function(){
	var json = SelectQuery2.data;
	var fields = Object.keys(json[0]);
	var csv = json.map(function(row){
		return fields.map(function(fieldName){
			return JSON.stringify(row[fieldName])
		}).join(',')
	});
	
	csv.unshift(fields.join(',')); 
	csv = csv.join(String.fromCharCode(10));
	download(csv, "AllData.csv", "data:text/csv");
}
}