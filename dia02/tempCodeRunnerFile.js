const sum = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value !== "number") {
    return "os valores devem ser numéricos";
  }
  return value1 + value2;
};
console.log(sum(2, 6));
