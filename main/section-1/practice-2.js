'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
	let array = [].concat.apply([], collectionB);
	//apply的作用是在特定的作用域内调用函数，有两个参数
	//一个是函数的运行作用域，一个是参数的数组
	return collectionA.filter((item) => {
		return array.includes(item);
	})
}
