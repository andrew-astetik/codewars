function highAndLow(n){
  return Math.max.apply(null,n.split(' '))+' '+Math.min.apply(null,n.split(' '));
}