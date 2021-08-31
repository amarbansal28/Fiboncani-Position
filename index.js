function fibPosition(position){
  let arr = [0,1];
  if(position < 1){
  		return -1;
  }
  for(let i = 2; i < position; i++){
      arr.push(arr[i-1] + arr [i-2]);
  }
	return arr[position-1];
}

console.log(fibPosition(5))
