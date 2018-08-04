# Brian's Challenges

I chose the following practice problems since they were recommanded.

I am sorry for a little delay. It's been very busy with many interviews and family businesses(daughter's baptism and family reunion.)

I tried mocha and chai for testing since you said you are using it. I really like them.

For both of the project, 

to install:
``` npm install ```

to run it:
``` npm test```


## 1. [Array Rotation](array_rotate): take a given array and rotate it `n` slots

### Questions for further understanding (This is a part of the assesment I guess...)

1. What is the time complexity of your solution? How about space?
=> O(n) time, and O(n) space.

2. Can you do this in-place?
=> I can do it in-place algoritm, just shift all element to right, 
	and the put the very last element to the very front, and repeat n%length times. However, this this is more precisely O(n * length) in time.

3. *Challenge:* There is an O(n) time / O(1) extra space solution. 
=>	Honestly, I could not figure out how to do "O(n) time / O(1) extra space"
	After some searching I realized that we can divide the array into sets that is consist of elements equally distanced, 
	and move all elements in the same set one by one. first one to the temporary space, next to the previous position, 
	and so on just like shifting. 
	The number of set must be GCD of n and length because we don't want some left over element that cannot move anywhere.
	This is faster than the regular shifting because elements can jump multiple steps instead of one step. 
	GCD determine how many step an element can jump.
	However if GCD is 1, then it is same as 1 step shifting and it will be slow.

	These days, time is much more important than the space, so I prefer my first algorithm. Plus it is a lot simpler.


## 2. [Coin Change](coin_change): how many different ways can you make change given an amount and list of coins?

=>	I tried to use recursive approach. When I was doing the interview, 
	it had been too long since I wrote recursive one, and I wasn't sure at the beggining, but now absolutely I can do better.
