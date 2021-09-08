function persistence(num) {
	let i = 0;
	while(String(num).length > 1){
		num = String(num).split('').reduce((e,n)=>e*n);
		i++;
	}
	return i;
}