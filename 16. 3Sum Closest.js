var threeSumClosest = function (nums, target) {
    var diff = Infinity;
    var hash={};
    nums=nums.sort((a,b)=>{return a-b});
    if (!nums || nums.length < 3) return target;
    for (var i = 0; i < nums.length - 2; i++) {
        var Fixed = nums[i];
        var low = i + 1;
        var high = nums.length - 1;
        while (low < high) {
            var sum = Fixed + nums[low] + nums[high];
            if (sum == target) {
                diff = 0;
                hash[diff]=sum;
                low++;
                high--;

            } else if (sum < target) {
                if (Math.abs(target - sum) < diff) {
                    diff = Math.abs(target - sum);
                    hash[diff]=sum;
                };                
                low++;
            } else {
                if (Math.abs(target - sum)) {diff = Math.abs(target - sum)};
                 hash[ Math.abs(target - sum)]=sum;
                high--;
            }
        }
    }

    return hash[Math.min(...Object.keys(hash))]
};