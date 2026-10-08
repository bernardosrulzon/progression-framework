export const match = (array1, array2) =>
  array1.length === array2.length &&
  array1.sort().every(function(value, index) {
    return value === array2.sort()[index]
  })

export const contains = (arrayToQuestion, arrayOfElements) =>
  arrayOfElements.filter(animal => arrayToQuestion.includes(animal)).length !==
  0
