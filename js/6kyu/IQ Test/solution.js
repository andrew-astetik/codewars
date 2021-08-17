function iqTest(numbers){
  let a=[],b=[];
  numbers.split(' ').map((e,i)=>e%2 ? a.push(i) : b.push(i));
  return (a.length > b.length ? b[0] : a[0]) + 1;
}