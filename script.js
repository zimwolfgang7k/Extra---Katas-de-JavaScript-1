const oneThroughTwenty = () => {
  let result = []

  for (let counter = 1; counter <= 20; counter++) {
    result.push(counter)
  }

  return result
}
////
const evensToTwenty = () => {
  let result = []

  for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 === 0) {
      result.push(counter)
    }
  }
  return result
}
const oddsToTwenty = () => {
  let result = []

  for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 === 1) {
      result.push(counter)
    }
  }
  return result
}
const multiplesOfFive = () => {
  let result = []

  for (let counter = 5; counter <= 100; counter++) {
    if (counter % 5 === 0) {
      result.push(counter)
    }
  }
  return result
}
const countingBackwards = () => {
  let result = []

  for (let counter = 20; counter >= 1; counter--) {
      result.push(counter)
  }
  return result
}
const evenNumbersBackwards = () => {
  let result = []

  for (let counter = 20; counter >= 1; counter--) {
    if(counter % 2 === 0) {
      result.push(counter)
    }
  }
  return result
}
const oddNumbersBackwards = () => {
  let result = []

  for (let counter = 20; counter >= 1; counter--) {
    if(counter % 2 === 1) {
      result.push(counter)
    }
  }
  return result
}
const multiplesOfFiveBackwards = () => {
  let result = []

  for (let counter = 100; counter >= 1; counter--) {
    if(counter % 5 === 0) {
      result.push(counter)
    }
  }
  return result
}
