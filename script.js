function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let result = '';
  const values = Object.values(obj);   //convert obj to array names as values

  for (let i = 0; i < values.length; i++) {
    const [symbol, value] = values[i];   //destruction a arr  array destructuring
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
