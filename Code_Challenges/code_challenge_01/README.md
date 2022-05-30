# Reverse an Array
<!-- Description of the challenge -->
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to Java Script, return an array with elements in reversed order.

## Whiteboard Process

![](./array-reverse.png)
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

```
function Reverse (arr){
let reverseArr=[];
 arr.map (element=>reverseArr.unshift(element));
  return reverseArr;
}
```
