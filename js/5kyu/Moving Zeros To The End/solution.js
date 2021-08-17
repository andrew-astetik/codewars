var moveZeros = function (arr) {
	return arr.reverse().reduce((n,e)=>(e === 0 ? n.push(0) : n.unshift(e), n), [])
}