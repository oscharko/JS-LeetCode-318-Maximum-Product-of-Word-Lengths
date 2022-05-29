let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]

const maxProduct = function(words) {
  let left = 0, right = words.length - 1, tempLeft = 0, tempRight = 0, i = 0, j = 0, temp = 0
  while (left < right) {
    tempLeft = words[left].split("")
    tempRight = words[right].split("")
    while (i < tempLeft.length) {
      while (j < tempRight.length) {
        if (tempLeft[i] === tempRight[j]) {
          j = tempRight.length
          i = tempLeft.length
        } else {
          j++
          temp++
        }
      }
      j = 0
      i++
    }
    if (temp !== (tempLeft.length * tempRight.length)) {
      i = 0
      right--
    } else {
      right = 0
    }
  }
  return temp
}



console.log(maxProduct(words))