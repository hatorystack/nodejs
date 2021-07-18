const fs = require('fs');

// 3
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) {}
// promises.rename().then().catch(0)
// callback or promise type better than Sync type

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}
console.log('hello');

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});

// console.log('hello');

fs.promises
  .rename('./text2.txt', './text_new.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);
