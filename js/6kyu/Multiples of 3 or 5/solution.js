function solution(number){
	return number > 0 ? Array.from({length:number},(e,i) => i).reduce((n,e) => e%3 == 0 || e%5 == 0 ? n+e : n) : 0;
}