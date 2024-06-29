export const deepCompare = (source, target) => {
    if (source === target) {
      return true;
    }
  
    const sourceKeys = Object.keys(source);
    const targetKeys = Object.keys(target);
  
    if (sourceKeys.length !== targetKeys.length) {
      return false;
    }
    return sourceKeys.every((key) => {
      const val1 = source[key];
      const val2 = target[key];
      if (typeof val1 === "object" && typeof val2 === "object") {
        return deepCompare(val1, val2);
      }
      return val1 === val2;
    });
  };
  