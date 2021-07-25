const path = require('path');
const os = require('os');
const fs = require('fs');

// console.log(process.argv[2]);

// Get the folder name of which user wants
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Pictures');
  return;
}

// Create video, captured, duplicated folder
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
  .readdir(workingDir) //
  .then(processFiles) // === files => processFiles(files)
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      console.log('video', file);
    } else if (isCapturedFile(file)) {
      console.log('captured', file);
    } else if (isDuplicatedFile(file)) {
      console.log('duplicated', file);
    }
  });
}

function isVideoFile(file) {
  return true;
}
function isCapturedFile(file) {
  return true;
}
function isDuplicatedFile(file) {
  return true;
}
