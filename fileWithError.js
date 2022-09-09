//reading files with node. 

const fs = require('fs');

try {
  const data = fs.readFileSync('./file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


/**
 * You can also use the promise-based fsPromises.readFile() method offered by the  fs/promises module
 * https://nodejs.org/api/modules.html#requireid
 */


// const fs = require('fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('./file.txt', { encoding: 'utf8' });
//     console.log(data);
    
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(example())