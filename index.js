let words = [
  "eae",
  "ea",
  "aaf",
  "bda",
  "fcf",
  "dc",
  "ac",
  "ce",
  "cefde",
  "dabae",
];

const maxProduct = function (words) {
  let left = 0,
    right = words.length - 1,
    temp = 0,
    tempArray = [];
  while (left < right) {
    while (left < right) {
      for (let i = 0; i < words[left].split("").length; i++) {
        for (let j = 0; j < words[right].split("").length; j++) {
          if (words[left].split("")[i] === words[right].split("")[j]) {
            i = words[left].split("").length;
            j = words[right].split("").length;
          } else {
            temp++;
          }
        }
      }
      if (
        temp ===
        words[left].split("").length * words[right].split("").length
      ) {
        tempArray.push(temp);
      }
      right--;
      temp = 0;
    }
    left++;
    temp = 0;
    right = words.length - 1;
  }
  const max = tempArray.reduce(function (a, b) {
    return Math.max(a, b);
  }, 0);
  return max;
};

console.log(maxProduct(words));
