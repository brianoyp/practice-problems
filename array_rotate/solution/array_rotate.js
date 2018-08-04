module.exports = function(arr, n){

	// rotate all the way make it same as the begginning. so we can omit that.
	var num = n % arr.length;
	var length = arr.length;

	var result = [];

	// push elements to result starting from the index "length-num". 
	// When it reaches to the end, go to first element and keep pushing and stop right before we started. 
	var startIndex = length-num;
	var endIndex = startIndex + length;

	for (var i = startIndex; i < endIndex; i++){
		result.push(arr[i%length]); 
	}

	return result;
};