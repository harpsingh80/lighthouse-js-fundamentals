function lastIndexOf(series, value){
	var foundMatch = false;
	var result = 0;
	for (var i = 0; i < series.length; i++) {
		if(series[i] === value){
		result = i;
		foundMatch = true;
		}
	}
	if (foundMatch){
		return result;
	}else {
		return -1;
	}
}