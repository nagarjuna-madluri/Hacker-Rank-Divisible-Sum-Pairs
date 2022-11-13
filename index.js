let x = [1, 3, 2, 6, 1, 2];
let k = 3;

let checkDivisble = (a, b, k) => {
  if ((a + b) % k == 0) {
    console.log('(' + a, b + ')');
    return true;
  } else {
    return false;
  }
};
let checkEachPair = (indexNum, remainArry, divisiableNum) => {
  let checkCount = 0;
  for (let i = indexNum; i < remainArry.length; i++) {
    if (indexNum < i + 1) {
      if (
        checkDivisble(remainArry[indexNum], remainArry[i + 1], divisiableNum)
      ) {
        checkCount = checkCount + 1;
      }
    }
  }
  return checkCount;
};
let getStart = (inputArray, divisiableNum) => {
  let finalPairs = 0;
  let makaeUniqueSort = inputArray;
  for (let i = 0; i < makaeUniqueSort.length; i++) {
    finalPairs = finalPairs + checkEachPair(i, makaeUniqueSort, divisiableNum);
  }
  return finalPairs;
};
console.log(getStart(x, k));
