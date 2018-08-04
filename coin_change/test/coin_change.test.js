var coinChange = require('../solution/coin_change.js');

var expect = require('chai').expect;

describe("#coinChange", function(){
	it("Prints out how many different ways you can make change from the coins", function(){
		expect(coinChange([1, 2, 3], 4)).to.equal(4);
		
		expect(coinChange([2, 5, 3, 6], 10)).to.equal(5);
	});
});