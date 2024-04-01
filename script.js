/*Print odd numbers in an array
function(array){
   for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
 }
 ([1,3,5,7,9,8,11,])
 arrow function
 oddNumbers = (array) => {
   for(var i = 0 ; i< array.length ; i++){
      if(array[i]%2!=0){
         console.log(array[i])
      } 
 }
 }
 */

/*str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
 })
 ("I BIG FAN OF DHONI");
 arrow function
 titleCase = (str) => {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
 }
 */        

/*Sum of all numbers in an array 
 (function(array){
   var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
         }
         return sum;
   }
   (function(array){
      var sum = 0;
           for(var i = 0 ; i< array.length ; i++){
              sum = sum + array[i];
            }
            return sum;
      })
      ([1,2,3,4.9])
arrow function
sum = (array)=>{
   var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
         }
         return sum;
         }
*/
/*Return all the prime numbers in an array  
   (function(numArray){
      numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      console.log(numArray);
  })
  ([1,2,3,4,9,11,14,18,19])
arrow function
primeNumber = (numArray) => {
   numArray = numArray.filter((number) => {
     for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i === 0) return false;
     }
     return true;
   });
   console.log(numArray);
}
  */
 /* Return all the palindromes in an array
 (  function (arr, n)
 {
     for (let i = 0; i < n; i++)
     {
         let ans = isPalindrome(arr[i]);
         if (ans == false)
             return false;
     }
     return true;
 })
 ([1,2,3,4,8,9,6] , 3)
arrow function
Palindrome = (arr, n) =>
Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    */
/*Remove duplicates from an Array
(function(array){
   let dup = [...new Set(array)];
   console.log(dup);
  })
  ([1,1,2,3,4,4,5,5])
  */
 /* Rotate an array by K times
  (function(array , k){
   k = k % a.length;
     if(k < 0){
       k += a.length;
     }

     reverse(a, 0, a.length - k - 1);
     reverse(a, a.length - k, a.length - 1);
     reverse(a, 0, a.length - 1);
   })
   ([1,2,3,4,5,8,9] , 2)
   */

 
  