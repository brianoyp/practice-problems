To run the code and test it,

	npm install

then,

	npm test

## Questions for further understanding

1. What is the time complexity of your solution? How about space?
=> O(n) time, and O(n) space.

2. Can you do this in-place?
=> I can do it in-place algoritm, just shift all element to right, and the put the very last element to the very front, 
	and repeat n%length times. However, this this is more precisely O(n * length) in time.

*Challenge:* There is an O(n) time / O(1) extra space solution. 
=>	Honestly, I could not figure out how to do "O(n) time / O(1) extra space"
	After some searching I realized that we can divide the array into sets that is consist of elements equally distanced, 
	and move all elements in the same set one by one. first one to the temporary space, next to the previous position, 
	and so on just like shifting. 
	The number of set must be GCD of n and length because we don't want some left over element that cannot move anywhere.
	This is faster than the regular shifting because elements can jump multiple steps instead of one step. 
	GCD determine how many step an element can jump.
	However if GCD is 1, then it is same as 1 step shifting and it will be slow.

	These days, time is much more important than the space, so I prefer my first algorithm. Plus it is a lot simpler.