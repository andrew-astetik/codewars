function dirReduc(arr){
	let op = {"NORTH":"SOUTH", "SOUTH":"NORTH", "WEST":"EAST", "EAST":"WEST"};
	return arr.reduce((n,e)=>(op[n.slice(-1)] == e ? n.pop() : n.push(e), n), []);
}