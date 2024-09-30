export const pick = (oldObj, newObj) => {
  const updatedValues = {};

  for (const key in newObj) {
    if (
      newObj[key] !== null &&
      newObj[key] !== undefined &&
      newObj[key] !== "" &&
      oldObj[key] !== newObj[key]
    ) {
      updatedValues[key] = newObj[key];
    }
  }

  return updatedValues;
};
