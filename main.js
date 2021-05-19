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

const messageBuilder = (array1, array2, array3) => {
  let index1 = Math.floor(Math.random() * [array1.length + 1]);
  let index2 = Math.floor(Math.random() * [array2.length + 1]);
  let index3 = Math.floor(Math.random() * [array2.length + 1]);

  console.log(index1);
  console.log(index2);
  console.log(index3);

  let message = `${array1[0]} ${array2[0]} ${array3[0]}!`;
  return message;
};

console.log(messageBuilder(phraseArray1, phraseArray2, phraseArray3));
