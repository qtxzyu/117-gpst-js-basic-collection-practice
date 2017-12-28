'use strict';
//https://www.cnblogs.com/jinling/p/6169008.html
//reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值
//是ES5中新增的又一个数组逐项处理方法
//arr.reduce(callback[,initialValue])

    // callback（一个在数组中每一项上调用的函数，接受四个函数：）
        // previousValue（上一次调用回调函数时的返回值，或者初始值）
        // currentValue（当前正在处理的数组元素）
        // currentIndex（当前正在处理的数组元素下标）
        // array（调用reduce()方法的数组）
    // initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）

module.exports = function countSameElements(collection) {
	return collection.reduce((array, item) => {
		let existItem = array.find((e) => e.key === item);
		if (existItem) {
			existItem.count++;
		} else {
			array.push({
				key: item,
				count: 1
			});
		}
		return array;
	}, []);
}
