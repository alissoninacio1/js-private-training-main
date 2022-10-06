//create ids according users numbers

const usersObj = {}
const usuarios = ["alisson", "valeria", "Kira", "casper", "khaleesi"]

//para cada usuario, seu id será seu respectivo index, usando um template string
//for each recebendo dois parâmetros
usuarios.forEach((usuario, index) => usersObj[`id_${index}`] = usuario);
console.log(usersObj)


//também podemos fazer isso dentro do objeto
let variable = 1

const dynamic = {
  [`id_${variable}`] :" variable value"
}

console.log(dynamic.id_1)