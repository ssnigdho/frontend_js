const getRandomValue = (min = 0, max = 1) => {
  // TODO: Complete this function to allow the test to pass

  // Calculates a random value that will be integer
  const random =  Math.floor(Math.random() * (max - min + 1)) + min;

  // Returns the random integer with Promise
  return Promise.resolve(random);
};

describe('getRandomValue', () => {
  it('returns a promise of a random integer', () => {
    getRandomValue().then(value => assert.isNumber(value));
  });
});

describe('getFourRandomValues', () => {
  const getFourRandomValues = (min, max) => {
    // TODO: Complete this function to allow the test to pass

    // Initializing an empty array
    var randoms = new Array();

    // Using for loop, the random integers are getting
    // pushed to the randoms array
    for (var i = 0; i < 4; i++) {
      getRandomValue().then(random => randoms.push(random));
    }

    // Returns the randoms array with Promise
    return Promise.resolve(randoms);
  };

  it('returns an array of four integers, generated by getRandomValue()', () => {
    getFourRandomValues().then(values => assert.lengthOf(values, 4));
  });
});
