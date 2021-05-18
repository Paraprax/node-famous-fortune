const phraseArray1 = ["Starring"];
const phraseArray2 = ["In a popular"];
const phraseArray3 = ["TikTok"];
const fortuneMessage = [];

const messageBuilder = (array1, array2, array3) => {
  let message = `${array1[0]} ${array2[0]} ${array3[0]}!`;
  return message;
};

console.log(messageBuilder(phraseArray1, phraseArray2, phraseArray3));
