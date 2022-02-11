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



