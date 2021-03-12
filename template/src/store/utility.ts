export const updateObject = (oldObject: any, updateValues: any) => {
  return {
    ...oldObject,
    ...updateValues
  };
};
