const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  highWaterMark: 8, // default 64 kbyes
  encoding: 'utf-8',
});

const data = [];
readStream.on('data', (chunk) => {
  // console.log(chunk);
  data.push(chunk);
  // console.count('data');
});

readStream.on('end', () => {
  console.log(data.join(''));
});

readStream.on('error', (error) => {
  console.log(error);
});

// Chaining
const data = [];
fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // default 64 kbyes
  // encoding: 'utf-8',
})
  .once('data', (chunk) => {
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', (error) => {
    console.log(error);
  });
