'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	return collectionA.map((item) => {
		if(objectB.value.includes(item.key)) {
			item.count -= parseInt(item.count / 3);
		}
		return item;
	})
}
