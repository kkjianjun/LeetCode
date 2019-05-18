//Two Pointer(雙指標逼近)
//https://tstewart.herokuapp.com/3sum-javascript/
var threeSum = function (nums) {
    var res = [];

    if (!nums || nums.length < 3) return res; //nums不存在或長度小於3

    nums = nums.sort((a, b) => {return a - b}); //小至大排序

    for (var i = 0; i < nums.length - 2; i++) { //i:target
        if (i == 0 || nums[i] > nums[i - 1]) { //跳過相同target

            var Low = i + 1; //低指標
            var High = nums.length - 1; //高指標 

            while (Low < High) {
                var sum = nums[i] + nums[Low] + nums[High];//三數相加
                if (sum == 0) {//三數相加為0
                    res.push([nums[i], nums[Low], nums[High]]);
                    Low++;
                    High--;
                    while (Low < High && nums[Low] == nums[Low - 1]) {
                        Low++;
                    } //跳過相同結果
                    while (Low < High && nums[High] == nums[High + 1]) {
                        High--;
                    } //跳過相同結果
                } else if (sum < 0) {
                    Low++; //數值過小:低指標增加
                } else {
                    High--; //數值過大:高指標降
                }
            }
        }
    }
    return res;
};