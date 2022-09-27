const { readFile } = require('fs');

readFile('./content/file1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

