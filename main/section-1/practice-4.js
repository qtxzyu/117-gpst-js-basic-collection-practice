'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
	let array = [];
    collectionA.forEach((item)=>{
		array.push(item.key);
	});
	return array.filter((item)=>{
		return objectB.value.includes(item);
})
}
