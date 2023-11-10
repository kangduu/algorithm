/**
 * 《两数之和》
 *	https://leetcode.cn/problems/two-sum/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// ! 暴力解法
	// for(let i=0;i<nums.length-1;i++){
	//     for(let j = i+1;j<nums.length;j++){
	//         if(nums[i]+nums[j]===target) return [i,j]
	//     }
	// }
	// ! Map配合for循环
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let sub = target - nums[i];
		if (map.has(sub)) return [map.get(sub), i];
		map.set(nums[i], i);
	}
	// ! Map配合forEach  【用时少】
	// let map = new Map(),
	// res =[]
	// nums.forEach((item,i) => {
	//     let sub = target - item
	//     if (map.has(sub))res=[map.get(sub), i]
	//     map.set(item, i)
	// })
	// return res
	// ! for + indexOf  【内存最少】
	// for (let i = 0; i < nums.length; i++) {
	//     const sub = target - nums[i], j = nums.indexOf(sub, i + 1)
	//     if (j !== -1) return [i, j]
	// }
};

console.log(twoSum([2, 7, 11, 15], 9));

/**
 * 《总结》
 * for循环的时间不理想，实际不可超过两层for循环
 * 使用indexOf第二个参数巧妙解决重复使用数组项问题
 * forEach内部不可使用 continue break return 关键字
 * Map实列的has get set 方法
 *
 * 《QA》
 * indexOf的查询机制？
 * indexOf第一个参数不是基本类型怎么匹配？
 * Map实列内存大小问题？
 */
