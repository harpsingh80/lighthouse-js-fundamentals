const howManyHundreds = function(bottles){
  const container = 100;
  const result = bottles / container;
  const f_result = Math.floor(result);
  return f_result;

} 

console.log(howManyHundreds(100));