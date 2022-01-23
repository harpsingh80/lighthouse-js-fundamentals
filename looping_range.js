const range = function (start, end, step){
  const newArray = [];
  if (step <= 0){
    return newArray;
  }else if (start > end){
    return newArray;
  }else if (start === undefined || end === undefined || step === undefined){
    return newArray
  }else {
    for (let i = start; i <= end;  i+= step){
      newArray.push(i)
      
    }
    return newArray;
  }
}