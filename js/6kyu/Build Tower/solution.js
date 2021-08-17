function towerBuilder(c) {
	return Array.from({length:c},(_,k)=>{
		let spaces = ' '.repeat(c-k-1);
		return spaces+'*'.repeat(k+k+1)+spaces;
	})
}