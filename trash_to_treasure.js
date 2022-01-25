const smartGarbage = function(trash, bins){

	if (trash === "waste"){
		garbage.waste = garbage.waste + 1;
	}else if(recycling === "recycling"){
		garbage.recycling = garbage.recycling + 1;
	}else if(compost === "compost"){
		garbage.compost = garbage.compost + 1;
	}

	return bins;

}
