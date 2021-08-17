function deleteNth(arr,n){
	let result = [];
	arr.map(e=>{result.filter(x => x == e).length < n ? result.push(e) : null})
	return result;
}