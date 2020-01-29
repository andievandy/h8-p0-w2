//1
var rows1;
rows1 = 5;

for(var i = 0; i < rows1; i++) {
	console.log('*');
}

//2
var rows2;
rows2 = 5;

for(var baris = 0; baris < rows2; baris++) {
	var temp = '';
	for(var kolom = 0; kolom < rows2; kolom++) {
		temp += '*';
	}
	console.log(temp);
}

//3
var rows3;
rows3 = 5;

for(var baris = 1; baris <= rows3; baris++) {
	var temp = '';
	for(var kolom = 0; kolom < baris; kolom++) {
		temp += '*';
	}
	console.log(temp);
}