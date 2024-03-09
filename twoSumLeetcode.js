/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seed = Object.create(null);

    for(let i=0; i<=nums.length; i++){
        console.log(seed);
        console.log('checking for solution...', seed[target-nums[i]]);
        if(seed[target-nums[i]] >= 0) {
            console.log('this executed');    
            return [seed[target-nums[i]], i];
        }

        seed[nums[i]] = i


    }


 
}



console.log(twoSum([3,3], 6));