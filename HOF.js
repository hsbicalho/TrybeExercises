const newEmployees = (name) => {
  const employees = {
    nome: name,
    email: generateEmail(name),
  };
  return employees;
};

const generateEmail = (name) => {
  let arrayName = name.split(' ');
  let email = `${arrayName[0]}_${arrayName[1]}@trybe.com`;
  return email;
};

const numberSort = () => {
  return Math.round(Math.random() * (5 - 1) + 1);
};

const compareBet = (bet) => {
  if (bet === numberSort()) return true;
  return false;
};

const Result = (bet) => {
  if (compareBet(bet) === true) return 'Parabéns você ganhou';
  else return 'Tente novamente';
};

console.log(Result(3));
