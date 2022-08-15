// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2,4));

//todo

// const sum = (value1, value2) => {
//   if (typeof value1 !== "number" || typeof value2 !== "number") {
//     throw new Error("os valores devem ser numéricos");
//   }
//   return value1 + value2;
// };
// console.log(sum(2, '2'));

//todo

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   customer1.lastnamme = 'Faria';

// customer1['lastname'] = 'Faria'

//   console.log(customer1);

//   customer1.lastName = 'Faria';
//   console.log(customer1);

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };

//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

const customer1 = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

let newKey = (obj, key, value) => {
  let novaChave = key;
  const valor = value;
  obj[novaChave] = valor;
  return (obj)

}
console.log(newKey(customer1, 'lastName', 'Ferreira'));