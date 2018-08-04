var arrayRotate = require('../solution/array_rotate.js');

var expect = require('chai').expect;

describe("#arrayRotate", function(){
	it("rotate n time the array given", function(){
		expect(arrayRotate([1, 2, 3],1)).to.eql([3, 1, 2]);
		expect(arrayRotate([1, 2, 3, 4, 5],3)).to.eql([3, 4, 5, 1, 2]);
	});
});