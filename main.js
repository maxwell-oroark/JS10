// FUNCTION ONE

getName = function(object){
	return object.name;
}

console.log(getName({ name: 'Luisa', age: 25 }))

//FUNCTION TWO

totalLetters = function(array){
	var total = 0;
	for (i = 0; i < array.length; i++) {
		total += array[i].length
		
	}
	return total;
}

totalLetters(['hello','my','name','is','max'])

totalLetters(['javascript', 'is', 'awesome'])

totalLetters(['what', 'happened', 'to', 'my', 'function'])

// FUNCTION THREE

keyValue = function (key, value) {
	var object = {}
	object[key] = value;
	return object;

}



