// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxDiff( arr, arr_size)
{    
  let max_diff = arr[1] - arr[0];
  for (let i = 0; i < arr_size; i++)
  {
    for (let j = i+1; j < arr_size; j++)
    {    
      if (arr[j] - arr[i] > max_diff)
        max_diff = arr[j] - arr[i];
    }
  }        
  return max_diff;
}
 
    // Driver program to test above function
    let arr = [1, 2, 90, 10, 110];
    let n = arr.length;
     
    // Function calling
console.log(maxDiff(arr, n));
     
