/**

- Ex 12

const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
=> true

console.log(majority([2, 3, 4, 5], isOdd));
=> false

*/

const isOdd = function (num) {
  return num % 2 === 1;
};

/**
 * Check if all item in array matched with matcher
 * @param {any[]} array
 * @param {(num: any) => boolean} matcher
 */
const majority = (array, matcher) => {
  return array.every(matcher);
};

console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
console.log(majority([2, 3, 4, 5], isOdd));

/**

- Ex 13

const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);

=> ['sunny', 'seinfeld', 'curb', 'rickandmorty', 'friends']
*/

/**
 * Check if string begins with s/S
 * @param {string} str
 */
const startsWithS = function (str) {
  return str[0].toLowerCase() === 's';
};

/**
 * Move item starts with "s or S" to first, add the rest on the end
 * @param {string[]} array
 * @param {(str: string)=> boolean} checker
 */
const prioritize = (array, checker) => [
  ...array.filter(checker),
  ...array.filter((item) => !checker(item)),
];

/**
 * Move item starts with "s or S" to first, add the rest on the end
 * @param {string[]} array
 * @param {(str: string)=> boolean} checker
 */
const prioritize2 = (array, checker) =>
  array.reduce((acc, item) => {
    checker(item) ? acc.unshift(item) : acc.push(item);
    return acc;
  }, []);

console.log(
  prioritize(
    ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
    startsWithS,
  ),
);
console.log(
  prioritize2(
    ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
    startsWithS,
  ),
);

/**
Ex14: countBy

console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
);

{ odd: 3, even: 2 }

*/

/**
 *
 * @param {number[]} array
 * @param {(num: number) => string} keyMaker
 */
const countBy = (array, keyMaker) =>
  array.reduce((acc, item) => {
    const key = keyMaker(item);
    return {
      ...acc,
      [key]: (acc[key] || 0) + 1,
    };
  }, {});

console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
  }),
);
