const promiseAll = require('./hand/promiseAll.ts');

const promises = [Promise.resolve('1'), Promise.reject(2), Promise.resolve(3)];

// promiseAll(promises).then(rs=>{
//   console.log(rs)
// })

Promise.all(promises).then((rs) => {
  console.log(rs);
});