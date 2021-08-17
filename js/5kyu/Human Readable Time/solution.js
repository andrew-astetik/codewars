function humanReadable(seconds) {
	let s = ('0' + seconds % 60).slice(-2);
	let m = ('0' + Math.floor(seconds / 60) % 60).slice(-2);
	let h = ('0' + Math.floor(seconds / (60 * 60))).slice(-2);
	return h+':'+m+':'+s
}