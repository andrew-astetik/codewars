function list(names){
	return names.length > 0 ? names.map(e => e.name).reduce((e,n,i) => (i+1 == names.length ? e+' & '+n : e+', '+n)) : '';
}