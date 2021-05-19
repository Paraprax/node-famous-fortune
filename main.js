//one phrase from each of these arrays will be used to make up the fortune message:
const phraseArray1 = [
  "Dropping an F-bomb",
  "Coining an iconic Gen-Z catchphrase",
  "Learning you're now a Dogecoin billionaire",
  "Being called out by a Taylor Swift breakup song",
  "Winning a humiliating bike-mounted Quidditch game",
  "Pitching an acclaimed Frasier revival",
  "Punching out Conor McGregor",
  "Inventing a trendy new cocktail",
];
const phraseArray2 = [
  "by accident",
  "in front of an awestruck Obama",
  "as a prank",
  "while on horseback",
  "out of nowhere",
  "in the background",
  "in your pajamas",
  "during a meltdown",
];
const phraseArray3 = [
  "at the Super Bowl halftime show",
  "in a viral TikTok",
  "on your buddy's YouTube channel",
  "on the front page of Reddit",
  "during Saturday Night Live",
  "at the Olympics",
  "on Jimmy Fallon",
  "in the middle of Times Square",
];

//function for generating a random index number within the length of any given array:
const indexGenerator = (array) => {
  let randomIndex = Math.floor(Math.random() * [array.length]);
  console.log(randomIndex);
  return randomIndex;
};

//function for assembling && returning the fortune message from the three arrays of phrases:
const messageBuilder = (array1, array2, array3) => {
  //generate a random index number for each phrase array:
  let index1 = indexGenerator(array1);
  let index2 = indexGenerator(array2);
  let index3 = indexGenerator(array3);

  let message = `${array1[index1]}, ${array2[index2]}, ${array3[index3]}.`;
  return message;
};

console.log(messageBuilder(phraseArray1, phraseArray2, phraseArray3));
