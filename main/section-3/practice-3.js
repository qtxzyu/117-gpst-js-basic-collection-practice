'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	return getCollection(collectionA).map((item) => {
		if(objectB.value.includes(item.key)) {
			item.count -= parseInt(item.count / 3);
		}
		return item;
	})
}

function getCollection(collection) {
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