const person = {
  name: "Riam",
};

const secondPerson = {
  ...person,
};

person.name = "Shazid";
console.log(secondPerson);
