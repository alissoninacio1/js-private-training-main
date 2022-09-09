try {
  const data = 'y'

  //se eu nao colocar o throw dentro do if, eu sempre vou disparar o throw
  // se eu coloco o throw dentro do if, entao eu tenho a opcao de condicionar quando este erro aparecerá.
  if(isNaN(data)) {
     throw new SyntaxError(" You didn't type correctly")
  }

  console.log(data);
 
  
} catch (err) {
  console.log(`It was produced the following error: ${err}`);
}