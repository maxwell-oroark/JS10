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


// FUNCTION SEVEN

var vowels = function(string){
    var letters = string.split('');
    var answer = []
    for (var i = 0; i < letters.length; i++){
        if (letters[i] === 'a' || letters[i] == 'e' || letters[i] == 'i' || letters[i] == 'o' || letters[i] == 'u' ){
            answer.push(letters[i]);
        }
    }
    
    return answer
}    

vowels('the fox jumped over the lazy dog');

vowels('alabama');

//FUNCTION EIGHT

var twins = function (array) {
    for (var i = 0; i < array.length; i += 2){
        if (array[i]  !== array[i +1]){
            return false;
        }
    }
    return true;
}

twins([1,1,2,2,3,3,4,4,5,5])

twins(['a', 'a', 'b', 'c', 'd', 'd'])

twins(['a', 'a', 'b', 'b', 'c', 'c'])


//FUNCTION NINE

var ifTrue = function(bool){
        if (bool === true){
            return true;
        }
        }

var or = function(boolArr){
    boolArr.forEach(ifTrue)
    return false;
}

or([false, false, true, false])

//FUNCTION TEN

unique = function(array){
    array.sort();
    uniqueArr = []
    for(i = 0; i < array.length; i++){
      if (array[i]  !== array[i +1]){
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr
}

unique(['todd', 'avery', 'maria', 'avery'])






