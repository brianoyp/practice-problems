module.exports = function(coins, n){

	var arrayOfCorrectCombinations = coinChange(coins, n);

	//print 
	console.log(arrayOfCorrectCombinations.length);

	return arrayOfCorrectCombinations.length;
};

// assumptions: all coin value are bigger than 0, and they are integers. Also n is integer.
var coinChange = function(coins, n){

    var result = [];

    // pick the first coin, and then figure out the rest of coins for the total value n.
    coins.forEach(function(coin){
    	// if the first coin value is same as the total value, it's done! add an array with the single coin to result.
        if (coin === n){
            result.push([coin]);
        }

        // other wise find out rest of coins for the total value in addtion to the first coin. 
        // and we don't need to consider if the first picked coin is bigger than the total value.
        else if (coin < n){
        	// call the function recursively to get the rest of the coin.
            var restOfCoinsList = coinChange(coins, n-coin);

            // if there exist correct combinations for (the total value - first coin value)
            if (restOfCoinsList.length > 0){

                var moreResults = []; // this array will contain arrays with first coin plus the rest of the coins. 

                restOfCoinsList.forEach(function(restOfCoins){
                	// we need to filter arrays that has same set of coins, 
                	// so I will only add the set that rest of coins are smaller or equal to the first coin.
                	// for example, among {2,1,1}, {1,2,1}, {1,1,2}, I will add {2,1,1} only.
                    if( coin >= Math.max.apply(Math,restOfCoins)){
                        restOfCoins.push(coin);
                        moreResults.push(restOfCoins);
                    }
                });
                // add the correct combinations to the result.
                result = result.concat(moreResults);
            }
        }
    });
    
    return result;
};