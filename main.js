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

// FUNCTION FOUR

negativeIndex = function (array, negNum){
    var reversal = array.length + negNum;
    return array[reversal];
    
}

// FUNCTION FIVE

removeM = function(string){
        var newArray = []    
	    var newStrArr = string.split('') 
	    for(i = 0; i< newStrArr.length; i++){
	   
	        if (newStrArr[i] != 'm'){
	            newArray.push(newStrArr[i]);
	            
	        }
	    }
	    
	   return newArray.join('');
		}
	
removeM('vermouth')

// FUNCTION SIX

var superman = {
    gender: 'male',
    strength: 'infinite',
    phoneNum: 'none of yo bizzness'
}

var objPrinter = function(object){
   for (var key in object) {
       console.log(key + ' is ' + object[key]);
   }
    
}
objPrinter(superman)










