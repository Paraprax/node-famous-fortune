//one phrase from each of these arrays will be used to make up the fortune message:
const phraseArray1 = ["Starring", "barring", "zarring", "marring", "pharing"];
const phraseArray2 = ["In a popular"];
const phraseArray3 = [
  "on live television",
  "in a viral TikTok",
  "on YouTube",
  "on the front page of Reddit",
  "on Saturday Night Live",
  "on Twitter",
];

const fortuneMessage = [];

//function for generating a random index number within the length of any given array:
const indexGenerator = (array) => {
  let randomIndex = Math.floor(Math.random() * [array.length + 1]);
  return randomIndex;
};

//function for assembling && returning the fortune message from the three arrays of phrases:
const messageBuilder = (array1, array2, array3) => {
  //generate a random index number for each phrase array:
  let index1 = indexGenerator(array1);
  let index2 = indexGenerator(array2);
  let index3 = indexGenerator(array3);

  console.log(index1);
  console.log(index2);
  console.log(index3);

  let message = `${array1[0]} ${array2[0]} ${array3[0]}!`;
  return message;
};

console.log(messageBuilder(phraseArray1, phraseArray2, phraseArray3));
