var arrayRotate = require('../solution/array_rotate.js');

var expect = require('chai').expect;

describe("#arrayRotate", function(){
	it("rotate n time the array given", function(){
		expect(arrayRotate([1, 2, 3],1)).to.eql([3, 1, 2]);
		expect(arrayRotate([1, 2, 3, 4, 5],3)).to.eql([3, 4, 5, 1, 2]);
		expect(arrayRotate(['a', 'hello', 'apple', 'tree', 0, 1],4)).to.eql(['apple', 'tree', 0, 1, 'a', 'hello']);
	});

	it("should work even of n is bigger than the length of array", function(){
		expect(arrayRotate([1, 2, 3, 4, 5],13)).to.eql([ 3, 4, 5, 1, 2]);
		expect(arrayRotate([1, 2, 3, 4, 5],1000)).to.eql([ 1, 2, 3, 4, 5 ]);
	});
});