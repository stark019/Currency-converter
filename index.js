document.getElementById('Rinput').addEventListener('input',function(r){
	let rupees=r.target.value;
	document.getElementById('Doutput').innerHTML=rupees*0.015;
	document.getElementById('Eoutput').innerHTML=rupees*0.013;
	document.getElementById('Youtput').innerHTML=rupees*1.62;
});