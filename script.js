$(document).ready(function() {
	//1
	var out1 = '';
	for (var i = 4; i <= 400; i++) {
		out1 += i + ', ';
	}
	$('#out1').html(out1);
	//2
	var out2 = '';
	for (var i = 4; i <= 13; i = i + 3) {
		out2 += i + ', ';
	}
	$('#out2').html(out2);
	//3
	var out3 = '';
	for (var i = 654; i >= 0; i--) {
		out3 += i + ', ';
	}
	$('#out3').html(out3);
	//4
	var out4 = '';
	for (var i = 1983; i <= 2017; i++) {
		out4 += i + ', ';
	}
	$('#out4').html(out4);
	//5
	var out5 = '';
	for (var i = -4; i <= 100; i = i + 2) {
		out5 += i + ', ';
	}
	$('#out5').html(out5);
	//6
	var arr1 = [3, 6, 1, 13, 88, 43];
	console.log(arr1[0]);
	console.log(arr1[3]);
	//7
	var arr2 = ['Hi', "hello", 34, "prima"];
	console.log(arr2[0]);
	console.log(arr2[arr2.length-1]);
	//8
	var arr3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	console.log(arr3.length);
	//9
	var arr4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr4[3] = 'new element';
	console.log(arr4);
	//10
	var arr5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr5[2] = 22;
	arr5[4] = 44;
	console.log(arr5);
	//11
	var arr6 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr6[10] = 100;
	console.log(arr6);
	//12
	var arr7 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr7[11] = 200;
	console.log(arr7[12]);
	//13
	var arr = [31, 24, 35, 47, 12];
	console.log(arr[30]);
	//14
	var arr = [31, 24, 35, 47, 12];
	// var f = 1;
	// var f = 4;
	var f = 7;
	console.log(arr[f]);
	//15
	var arr15 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	// var i = 1;
	// var i = 2;
	// var i = 3;
	// var i = 4;
	var i = 5;
	console.log(arr15[i]);
	//16
	var arr16 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	$('#go16').on('click', function() {
		var inp = $('#out16').val();
		console.log(arr16[inp]);
	});
	//17
	var out17 = '';
	var arr17 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	for (var i = 0; i < arr17.length; i++) {
		out17 += arr17[i] + ' ';
	}
	console.log(out17);
	//18
	var arr18 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var out18 = '';
	for (var i = arr18.length - 1; i >= 0; i--) {
		out18 += arr18[i] + ' ';
	}
	console.log(out18);
	//19
	var arr19 = [2, 3, [4,5]];
	console.log(arr19);
	console.log(arr19[2]);
	//20
	var arr20 = [2, 3, [4,5]];
	console.log(arr20[2][0]);
	console.log(arr20[2][1]);
	//21
	var arr21 = [2, 3, [4,5]];
	console.log(arr21[2].length);
	//22
	var arr22 = [2, [3,4,5], [6,7,8]];
	console.log(arr22[1][1]);
	console.log(arr22[2][2]);
	//23
	var arr23 = [2, [3,4,5], [6,7,8]];
	console.log(arr23[2]);
	console.log(arr23[0]);
	//24
	var arr24 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
	for (var i = 0; i < arr24[2].length; i++) {
		console.log(arr24[2][i]);
	}
	//25
	var arr25 = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
	console.log(arr25[1][0]);
	console.log(arr25[0][2]);
});




















