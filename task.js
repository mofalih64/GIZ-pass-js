const fs = require("fs");
const str_data = fs.readFileSync("./daa.txt", "utf-8").split(",");
// I made it synchronous because the file has small data
//  imported the data from the file but it was as string

const file_array = JSON.parse("[" + str_data + "]");
// here because this was a small String I used this way to convert the string to an Array
console.log(
  "the array from the file",
  file_array,
  "\n ___________________________"
);
let numbers = [5, 8, 0, 1, 9, 11, 15, 16];

function bubbleSort_AsecAanDesc(array) {
  const copyOfArray = [...array];

  Object.freeze(array);
  console.log("the immutable array\n", array);
  // here I make the Array immutable

  const length = copyOfArray.length;
  // it's better to calculatte the length of the array only // once for less time complexity

  console.log("Original numbers list: ", copyOfArray, "\n ___________________");

  bubbleSort_AsecOnly(copyOfArray, 0);
  // i made an function specialist in asecnding sorting
  // to use it in sorting the data from files
  // and the array above
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (copyOfArray[i] < copyOfArray[j]) {
        // should compare the element between j and j+1
        let temp = copyOfArray[i];
        copyOfArray[i] = copyOfArray[j];
        copyOfArray[j] = temp;
      }
    }
  }

  console.log(
    "Numbers list After Desc sorting: ",
    copyOfArray,
    "\n _______________________"
  );
}

function bubbleSort_AsecOnly(array, flag) {
  // made the flag parameter to know if the data from a file or not
  const length = array.length;
  // it's better to calculatte the length of the array only // once for less time complexity
  for (let i = 0; i < length; i++) {
    for (
      let j = 0;
      j < length;
      j++ // there is no need to substract element from the Array
    ) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  if (flag == 1) {
    console.log(
      "Numbers list After Asec sorting: ",
      array,
      "\n  ___________________"
    );

    fs.writeFileSync("output.txt", JSON.stringify(array));
    // I made it synchronous because it's a small data
  }
}
bubbleSort_AsecAanDesc(numbers);
bubbleSort_AsecOnly(file_array, 1);
