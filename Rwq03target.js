function twoSum(nums, target) {
    const length = nums.length;

    // Check each pair of numbers
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                // If the sum of the pair equals the target, return their indices
                return [i, j];
            }
        }
    }

    return []; // Return an empty array if no solution is found
}


const inputArray = [2, 7, 11, 15];
const target = 31;
const result = twoSum(inputArray, target);
    console.log(result); 
