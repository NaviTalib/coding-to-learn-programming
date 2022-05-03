// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
let nums = [2, 7, 11, 15], target = 9, comp;
function tosum() {
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == 9) {
                return [i, j];
            }
        }
    }
}
console.log(tosum());