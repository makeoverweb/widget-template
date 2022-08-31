var ncp = require('ncp').ncp;
var fs = require('fs');

ncp.limit = 16;

var srcPath = './build';
var destPath = './deploy';

console.log('Copying files...');
ncp(
  srcPath,
  destPath,
  {
    filter: (source) => {
      if (fs.lstatSync(source).isDirectory()) {
        return true;
      } else {
        return source.match(/.html/) === null;
      }
    },
  },
  function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Copying files complete.');
  },
);
