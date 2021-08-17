function solution(str, m) {
	const regex = new RegExp('\\s*?['+m.join('')+'].*?(?:$|\\n)','g')
	return str.split('\n').map(e => e.replace(regex,'')).join('\n')
};