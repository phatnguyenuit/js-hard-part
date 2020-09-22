// Reference : https://dev.to/internettradie/mastering-hard-parts-of-javascript-callbacks-ii-1n3

/***
 * Ex8
 * console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
 * => [5, 10, 15, 88, 1, 7, 100]
 */

/**
 *
 * @param  {...number[]} arrays
 */
const union = (...arrays) =>
  arrays.reduce((acc, array) => [
    ...acc,
    ...array.filter((i) => !acc.includes(i)),
  ]);
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));

/**
Ex 9

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);

=> { hi: 'HI', bye: 'BYE', later: 'LATER' }

*/

/**
 * objOfMatches
 * @param {string[]} array1
 * @param {string[]} array2
 * @param {(str: string) => string} transformer
 */
const objOfMatches = (array1, array2, transformer) => {
  const result = {};
  array1.forEach((item, index) => {
    if (array2[index] === transformer(item)) {
      result[item] = array2[index];
    }
  });
  return result;
};

console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    },
  ),
);

/**

Ex 10: Multiple map

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);

=> { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

*/

/**
 * Multiple maps
 * @param {string[]} array
 * @param {((item: string) => string)[]} transformers
 */
const multiMap = (array, transformers) =>
  array.reduce(
    (acc, item) => ({
      ...acc,
      [item]: transformers.map((transformer) => transformer(item)),
    }),
    {},
  );

console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ],
  ),
);

/**
Ex 11

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

=> { London: 'LONDON', Paris: 'PARIS'}

*/

/**
 * Object filter
 * @param {object} obj
 * @param {(item: string) => string} matcher
 */
const objectFilter = (obj, matcher) =>
  Object.entries(obj).reduce((acc, [key, city]) => {
    if (matcher(key) === city) {
      return { ...acc, [key]: city };
    }
    return acc;
  }, {});

const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
};

console.log(objectFilter(cities, (city) => city.toUpperCase()));
