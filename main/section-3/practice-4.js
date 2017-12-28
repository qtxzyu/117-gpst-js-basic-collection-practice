'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	return getCollection(collectionA).map((item) => {
		if(objectB.value.includes(item.key)) {
			item.count -= parseInt(item.count / 3);
		}
		return item;
	});
}

function getCollection(collection) {
	return collection.reduce((array, item) => {
		let itemArray = item.split("-");
		let num = 1;
		if (itemArray[1]) {
			num = Number(itemArray[1]);
		}
		let existItem = array.find((e) => e.key === itemArray[0]);
		if (existItem) {
			existItem.count += num;
		} else {
			array.push({
				key: itemArray[0],
				count: num
			});
		}
		return array;
	}, []);
}
