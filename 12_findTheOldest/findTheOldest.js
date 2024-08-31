function getAge(people) {
  if (!people.yearOfDeath) {
    let currentYear = new Date().getFullYear();
    return currentYear - people.yearOfBirth;
  }
  return people.yearOfDeath - people.yearOfBirth;
}

const findTheOldest = function (peoples) {
  let oldest = peoples.sort((peopleA, peopleB) => {
    const peopleAAge = getAge(peopleA);
    const peopleBAge = getAge(peopleB);
    return peopleBAge - peopleAAge;
  })[0];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
