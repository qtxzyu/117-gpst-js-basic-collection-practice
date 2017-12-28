'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	return collectionA.map((item) => {
		if(objectB.value.includes(item.key)) {
			item.count -= 1;
		}
		return item;
	})
}
