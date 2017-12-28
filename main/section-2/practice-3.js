'use strict';

module.exports = function countSameElements(collection) {
	return collection.reduce((array, item) => {
		
		let itemArray = getValueArray(item);
		
		let existItem = array.find((e) => e.name === itemArray[0]);
		if (existItem) {
			existItem.summary += itemArray[1];
		} else {
			array.push({
				name: itemArray[0],
				summary: itemArray[1]
			});
		}
		return array;
	}, []);
}

function getValueArray(item) {
	let array = [item, 1];
	if (item.length > 1) {
		array[0] = item.slice(0,1);
		array[1] = parseInt(item.slice(2));
	} 
	return array;
}