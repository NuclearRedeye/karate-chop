function chop(value, array, offset = 0) {
  let retVal = -1;
  if (array.length > 0) {
    const middleIndex = Math.floor(array.length / 2);
    const middleValue = array[middleIndex];
    if (middleValue === value) {
      retVal = offset + middleIndex;
    } else if (array.length > 1) {
      if (value < middleValue) {
        retVal = chop(value, array.slice(0, middleIndex), offset);
      } else {
        retVal = chop(value, array.slice(middleIndex), offset + middleIndex);
      }
    }
  }
  return retVal;
}

console.assert(-1 === chop(3, []));
console.assert(-1 === chop(3, [1]));
console.assert(0 === chop(1, [1]));
console.assert(0 === chop(1, [1, 3, 5]));
console.assert(1 === chop(3, [1, 3, 5]));
console.assert(2 === chop(5, [1, 3, 5]));
console.assert(-1 === chop(0, [1, 3, 5]));
console.assert(-1 === chop(2, [1, 3, 5]));
console.assert(-1 === chop(4, [1, 3, 5]));
console.assert(-1 === chop(6, [1, 3, 5]));
console.assert(0 === chop(1, [1, 3, 5, 7]));
console.assert(1 === chop(3, [1, 3, 5, 7]));
console.assert(2 === chop(5, [1, 3, 5, 7]));
console.assert(3 === chop(7, [1, 3, 5, 7]));
console.assert(-1 === chop(0, [1, 3, 5, 7]));
console.assert(-1 === chop(2, [1, 3, 5, 7]));
console.assert(-1 === chop(4, [1, 3, 5, 7]));
console.assert(-1 === chop(6, [1, 3, 5, 7]));
console.assert(-1 === chop(8, [1, 3, 5, 7]));

console.assert(11 === chop(17, [1, 3, 5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
